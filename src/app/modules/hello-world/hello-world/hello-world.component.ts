import {Component, OnInit} from '@angular/core';
import * as iotaLibrary from "@iota/core"

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  iota;
  provider = 'https://nodes.devnet.thetangle.org:443';
  address = 'HELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORL9D'
  responses: any[] = [];
  err;

  constructor() {
  }

  ngOnInit() {
    this.iota = iotaLibrary.composeAPI({
      provider: 'https://nodes.devnet.thetangle.org:443'
    })
  }

  async clickHelloWorld() {


    await this.iota
      .getNodeInfo()
      .then(response => {
        this.responses = [response];
        console.log(response)
      })
      .catch(err => {
        this.err = err;
        console.error('getNodeInfo', err)
      })
  }

  async clickSendHello() {
    const seed =
      'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX'

    const transfers = [
      {
        value: 0,
        address: this.address,
        message: 'HELLOWORLDFROMMINIMARS'
      }
    ]

   await this.iota
      .prepareTransfers(seed, transfers)
      .then(trytes => this.iota.sendTrytes(trytes, 3, 9))
      .then((bundle: any[]) => {
        this.responses = bundle;
        console.log(bundle)
      })
      .catch(err => {
        this.err = err;
        console.error(err)
      })
  }

  async clickFetchHello() {
    await this.iota
      .findTransactionObjects({addresses: [this.address]})
      .then((responses: any[]) => {
        this.responses = responses.sort(
          (r1:any,r2:any)=> r1.attachmentTimestamp<r2.attachmentTimestamp?1:-1
        );
        console.log(responses)
      })
      .catch(err => {
        this.err = err;
        console.error(err)
      })
  }
}
