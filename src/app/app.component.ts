import { Component, OnInit, ViewChild} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  @ViewChild('1') winner1: any;
   winnerslist = [1, 11, 13, 17, 24, 34, 35];
   status  = true;
   powerball = 19;
// tslint:disable-next-line: prefer-const
 //  win1: number = this.winnerslist.length;
  constructor() { }
  ngOnInit() {

  }
  getWinners() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.winnerslist.length; i++) {
  //    // tslint:disable-next-line:no-unused-expression
             document.getElementById(this.winnerslist[i].toString()).classList.add('focused');
             document.getElementById('pb').classList.add('focused');
}
}
}


