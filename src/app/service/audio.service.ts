import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StreamState } from '../interfaces/stream-state';
import {AudioStructure} from '../model/audio-struture';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private audioFile = new BehaviorSubject('');
  public setaudiofile = this.audioFile.asObservable();

  private stop$ = new Subject();
  private audioObj = new Audio();
  audioEvents = [
    'ended',
    'error',
    'play',
    'playing',
    'pause',
    'timeupdate',
    'canplay',
    'loadedmetadata',
    'loadstart',
    'volume',
    'muted',
    'trackname',
  ];

  private state: StreamState = {
    playing: false,
    readableCurrentTime: '',
    readableDuration: '',
    duration: undefined,
    currentTime: undefined,
    canplay: false,
    error: false,
    volume: 0.6,
    muted: false,

  };


  constructor() { }

  private stateChange: BehaviorSubject<StreamState> = new BehaviorSubject(
    this.state
  );

  private updateStateEvents(event: Event): any {
    switch (event.type) {
      case 'canplay':
        this.state.duration = this.audioObj.duration;
        this.state.readableDuration = this.formatTime(this.state.duration);
        this.state.canplay = true;
        break;
      case 'playing':
        this.state.playing = true;
        break;
      case 'pause':
        this.state.playing = false;
        break;
      case 'timeupdate':
        this.state.currentTime = this.audioObj.currentTime;
        this.state.readableCurrentTime = this.formatTime(
          this.state.currentTime
        );
        break;
      case 'volume':
       this.state.volume = this.audioObj.volume;
       break;
      case 'muted':
       this.state.muted = this.audioObj.muted;
       break;
      case 'error':
        this.resetState();
        this.state.error = true;
        break;
    }
    this.stateChange.next(this.state);
  }
  getState(): Observable<StreamState> {
    return this.stateChange.asObservable();
  }

  private streamObservable(url): any {
    return new Observable(observer => {
      // Play audio
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();

      const handler = (event: Event) => {
        this.updateStateEvents(event);
        observer.next(event);
      };
      this.addEvents(this.audioObj, this.audioEvents, handler);
      return () => {
        // Stop Playing
        this.audioObj.pause();
        this.audioObj.currentTime = 0;
        // remove event listeners
        this.audioObj.volume = .5;
        this.removeEvents(this.audioObj, this.audioEvents, handler);
        // reset state
        this.resetState();
      };
    });
  }
  private addEvents(obj, events, handler): any {
    events.forEach(event => {
      obj.addEventListener(event, handler);
    });
  }

  private removeEvents(obj, events, handler): any {
    events.forEach(event => {
      obj.removeEventListener(event, handler);
    });
  }

  playStream(url): any {
    return this.streamObservable(url).pipe(takeUntil(this.stop$));
  }

  play(): void {
    this.audioObj.play();
  }

  pause(): void {
    this.audioObj.pause();
  }

  stop(): void {
    this.stop$.next();
  }

  mute(val): void{
    this.audioObj.muted = val;
  }
  volume(val): void{
    this.audioObj.volume = val;
  }
  seekTo(seconds): void {
    this.audioObj.currentTime = seconds;
  }

  formatTime(time: number, format: string = 'HH:mm:ss'): any {
    const momentTime = time % 60;
    return momentTime.toFixed(2);
  }

  private resetState(): void {
    this.state = {
      playing: false,
      readableCurrentTime: '',
      readableDuration: '',
      duration: undefined,
      currentTime: undefined,
      canplay: false,
      error: false,
      volume: 1 ,
      muted: false,

    };
  }

  getAudioFile( name): void {
    this.audioFile.next(name);
    // console.log(name);
  }


}
