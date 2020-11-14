import { Component, OnInit } from '@angular/core';
import { BreakpointObserver,
  Breakpoints,
  BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  mobilefooter = false ;
  constructor(  public breakpointObserver: BreakpointObserver) {
     breakpointObserver.observe([Breakpoints.HandsetLandscape,Breakpoints.Handset]).subscribe(result => {
    if (result.matches) {
      this.mobilefooter = !this.mobilefooter
    }
});
}

  ngOnInit(): void {
  }

}
