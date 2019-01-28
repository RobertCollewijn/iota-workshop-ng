import {Component, OnInit} from '@angular/core';
import * as crypto from 'crypto-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  seed = '';

  constructor() {
  }

  ngOnInit() {
  }

  generateRandomSeed() {
    this.seed = '';
    for (let i = 0; i < 81; i++) {
      const r = Math.floor(Math.random() * 27);
      this.seed += r === 0 ? '9' : String.fromCharCode(64 + r);
    }
  }


  getRandomChar() {
    const tryte = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ9'.split('');
    const min = 0;
    const max = 26;
    const range = max - min + 1;
    const max_range = 256;
    const byteArray = new Uint8Array(1);
    window.crypto.getRandomValues(byteArray);

    if (byteArray[0] >= Math.floor(max_range / range) * range) {
      return this.getRandomChar();
    } else {
      return tryte[min + (byteArray[0] % range)];
    }

  }

  /* example
  getRandomInt(min, max) {
    // Create byte array and fill with 1 random number
    const byteArray = new Uint8Array(1);
    window.crypto.getRandomValues(byteArray);

    const range = max - min + 1;
    const max_range = 256;
    if (byteArray[0] >= Math.floor(max_range / range) * range) {
      return this.getRandomInt(min, max);
    } else {
      return min + (byteArray[0] % range);
    }
  }
  */

  generateCryptoSeed() {
    {
      this.seed = '';
      for (let i = 0; i < 81; i++) {
        this.seed += (this.getRandomChar());
      }
    }

  }
}
