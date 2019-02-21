import { Component, OnInit } from '@angular/core';
import * as Mam from '@iota/mam';
import * as Converter from '@iota/converter';

@Component({
  selector: 'app-mam',
  templateUrl: './mam.component.html',
  styleUrls: ['./mam.component.scss']
})
export class MamComponent implements OnInit {
mamState
  constructor() {
    this.mamState = Mam.init('https://nodes.devnet.thetangle.org:443');
    this.mamState = Mam.changeMode(this.mamState, 'public');
  }

  ngOnInit() {
  }

}
