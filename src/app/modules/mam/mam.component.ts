import {Component, OnInit} from '@angular/core';
import * as Mam from '@iota/mam';
import * as Converter from '@iota/converter';

@Component({
  selector: 'app-mam',
  templateUrl: './mam.component.html',
  styleUrls: ['./mam.component.scss']
})
export class MamComponent implements OnInit {
  mamState;

  constructor() {
    this.mamState = Mam.init('https://nodes.devnet.thetangle.org:443');
    this.mamState = Mam.changeMode(this.mamState, 'public');
  }

  ngOnInit() {
  }


  clickPublish() {
    this.publish('Super public message');
    this.publish('Super public message2');
  }

  clickReadMam() {
    this.readMam();
  }

  async publish(data) {
    const trytes = Converter.asciiToTrytes(data);
    const message = Mam.create(this.mamState, trytes);

    // Update the MAM state to the state of this latest message
    // We need this so the next publish action knows it's state
    this.mamState = message.state;

    // Attach the message
    await Mam.attach(message.payload, message.address, 3, 9);
    console.log('Sent message to the Tangle!');
    console.log('Address: ' + message.root);
  }


// Display coordinate data on our screen when we receive it
  async showData(raw) {
    const data = Converter.trytesToAscii(raw);
    console.log(data);
  }

  async readMam() {
    // const root = 'OXPOYTSZEOGUOITHYBWDYHXNCLRVQHGXMFMEIJLNHNDEWJYWQHGRPTQJ99MUWRDAOVPBIGSW9MSQLMOOA';
    const     root ='UHC9NVXVFOPJJMWYJGIDOHYIK9IVIEZXGLKMOQHAZCBQOBKLGXNJW9AQFGK9OIRXFOXQJARNQ9LNQQSQE';
    await Mam.fetch(root, 'public', null, this.showData);
  }


}
