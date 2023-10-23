// Angular Import
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
var device: { plateform: any; };
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // constructor
  constructor(private router: Router) {}
 
  // life cycle event
  ngOnInit() {
    document.addEventListener("deviceready",function(){
      alert(device.plateform);
    },false);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
