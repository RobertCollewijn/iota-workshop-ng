import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  seed = ''

  constructor() {
  }

  ngOnInit() {
  }

  generateSeed() {
    this.seed = ''
    for (let i = 0; i < 81; i++) {
      const r = Math.floor(Math.random() * 27);
      this.seed += r === 0 ? '9' : String.fromCharCode(64 + r)
    }


  }

}
