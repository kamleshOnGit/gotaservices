import {Component, HostListener, NgZone, OnInit} from '@angular/core';
import {CdkScrollable, ScrollDispatcher} from '@angular/cdk/overlay';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOnTop = true;

  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    // this.scrollDispatcher.scrolled().subscribe((event: CdkScrollable) => {
    //   const scroll = event.measureScrollOffset('top');
    //   let newIsOnTop = this.isOnTop;
    //   console.log(event);
    //   newIsOnTop = scroll <= 0;

    //   if (newIsOnTop !== this.isOnTop) {
    //     this.zone.run(() => {
    //       this.isOnTop = newIsOnTop;
    //     });
    //   }
    // });
  }

  @HostListener('window:scroll', ['$event'])

    onWindowScroll(): void {
    const element = document.querySelector('#header-desktop');
    const element2 = document.querySelector('#header-mobile');
    // console.log(window.pageYOffset, this.isOnTop );
    if (window.pageYOffset > 150) {
      element.classList.remove('header-transparent');
      element.classList.add('header-fixed');
    } else {
      element.classList.remove('header-fixed');
      element.classList.add('header-transparent');
    }
    if (window.pageYOffset > 50) {
      element2.classList.add('header-fixed');
    } else {
      element2.classList.remove('header-fixed');
    }
  }

}

