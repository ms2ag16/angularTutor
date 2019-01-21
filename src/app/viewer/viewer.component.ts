import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  levelId = 0;
  usrRank = 0;
  getUserRank() {
    return this.usrRank;
  }

  ngOnInit() {
  }

}
