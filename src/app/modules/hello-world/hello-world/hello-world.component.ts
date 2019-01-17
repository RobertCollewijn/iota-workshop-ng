import {Component, OnInit} from '@angular/core';
import * as iotaLibrary from "@iota/core"
import * as Converter from "@iota/converter"

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  iota;
  provider = 'https://nodes.devnet.thetangle.org:443';
  //address = 'HELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORL9D'
//  address ='IRZBQCZFOJXUPJKTEBQJBGQIUBV9EDLIUBEWRAWAQRIU9G9CEJETFO9NLABP9J9FXEUDEQDKPSTPNTJMZXSDVLXVBX'
  address = 'SHMORBLSLFAPXZ9VAGYODN9NFJDFSPTQZBFHCBPJPRPNHPUSLOQGQJBMXLOGK9RMNQEOMYWIXXPLJRRVBHUW9AFHBZ'
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
    const seed = 'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX'
    //acount name = IOTA-WORKSHOP
    //password = I0T@-w0Rk$H0P2019

    const message = Converter.asciiToTrytes('IOTA Workshop is top!')


    console.log('message',message)
    const transfers = [
      {
        value: 0,
        address: this.address,
        message: message //message: 'HELLOWORLDFROMMINIMARS'
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
        responses.map(response => {
          console.log(response.signatureMessageFragment);
          const trytes = response.signatureMessageFragment.slice(0, -1)

          //Convert trytes to plan text
       
          response.message = Converter.trytesToAscii(trytes)
          return response
        })
        this.responses = responses.sort(
          (r1: any, r2: any) => r1.attachmentTimestamp < r2.attachmentTimestamp ? 1 : -1
        );
        console.log(responses)
      })
      .catch(err => {
        this.err = err;
        console.error(err)
      })
  }
}
