import { Component, OnInit, Input } from '@angular/core';
import { StreamState } from '../../interfaces/stream-state';
import { AudioService } from '../../service/audio.service';
import {AudioStructure} from '../../model/audio-struture';
import {AudiofileService} from '../../service/audiofile.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css'],
})
export class AudioPlayerComponent implements OnInit {

  currentFileName: string;
  files: Array<any> = [];
  state;
  currentFile: any = {};
  constructor(public audioService: AudioService , public audiofil: AudiofileService) {
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
    audiofil.getFiles().subscribe(file => {
      this.files = file;
    });

  }
  showplaylist = false;
  val = true;
  filenew = '';
  ngOnInit(): void {
    // this.openFile(this.files[0] , 1);
    this.audioService.setaudiofile.subscribe( file => {
      if (file) {
        const order = Math.floor(Math.random() * 7 );
        this.openFile(this.files[order], order );
        this.currentFileName = file;
        console.log(this.currentFileName);
      }

    });
  }


  isFirstPlaying(): boolean {
    return this.currentFile.index === 0;
  }
  isLastPlaying(): boolean {
    return this.currentFile.index === this.files.length - 1;
  }

  playStream(url): void {
    this.audioService.playStream(url).subscribe(events => {
    });
  }

  openFile(file, index): void {
    this.currentFile = { index, file };
    this.currentFileName = file.name;
    this.audioService.stop();
    this.playStream(file.url);
  }

  pause(): void {
    this.audioService.pause();
  }

  play(): void {
    this.audioService.play();
  }

  stop(): void {
    this.audioService.stop();
  }

  next(): void {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous(): void {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  onSliderChangeEnd(change): void {
    this.audioService.seekTo(change.value);
  }

  onVolumeChangeEnd(change): void {
    this.audioService.volume(change.value);
    console.log(change.value);
  }

  showplayList(): void{
    this.showplaylist = !this.showplaylist;
  }

  repeat(): void{
    this.play();
  }

  mute(): void{
    this.val = !this.val;
    this.audioService.mute(!this.val);
    console.log(!this.val);
  }

}
