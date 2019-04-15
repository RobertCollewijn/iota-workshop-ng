import {Component, Input, OnInit} from '@angular/core';

import * as IOTA from '@iota/core';
import {from} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AccountData} from '@iota/core';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss']
})
export class TokensComponent implements OnInit {
  iota;
  seed = 'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';
  address = '';
  balances;
  addresses: any[];
  balance;
  inputs;

  constructor() {
  }

  ngOnInit() {
    this.iota = IOTA.composeAPI({
      provider: 'https://nodes.devnet.thetangle.org:443'
    });
  }

  async getAccountData() {
    return await this.iota.getAccountData(this.seed)
      .then(
        (accountData: AccountData) => {
          this.addresses = accountData.addresses.map((address, index) => {
            return {'address': address};
          });

          this.balance = accountData.balance;
          this.inputs = accountData.inputs;
          accountData.inputs.forEach((input) =>
            this.addresses[input.keyIndex].balance = input.balance
          );
        }
      );
  }

  clickGetAccountData() {
    from(this.getAccountData()).pipe(
      tap(result => console.log(`result ${JSON.stringify(result)}`))
    ).subscribe();
  }

  clickCreateAddress() {
    // https://github.com/iotaledger/iota.go/blob/master/.docs/iota.go/reference/api_get_account_data.md
    this.iota
      .getNewAddress(this.seed, {index: 0, total: 1})
      .then(address => {
        this.address = address;
        console.log('Your address is: ' + address);
        console.log('Paste this address into https://faucet.devnet.iota.org');
      })
      .catch(err => {
        console.log(err);
      });

  }

  clickCheckBalance() {
    // const address = 'SHMORBLSLFAPXZ9VAGYODN9NFJDFSPTQZBFHCBPJPRPNHPUSLOQGQJBMXLOGK9RMNQEOMYWIXXPLJRRVBHUW9AFHBZ'
    // const address = 'SHMORBLSLFAPXZ9VAGYODN9NFJDFSPTQZBFHCBPJPRPNHPUSLOQGQJBMXLOGK9RMNQEOMYWIXXPLJRRVBHUW9AFHBZ';
    const addresses = [
      'SHMORBLSLFAPXZ9VAGYODN9NFJDFSPTQZBFHCBPJPRPNHPUSLOQGQJBMXLOGK9RMNQEOMYWIXXPLJRRVB',
      'XLENTF9LIDLC9BUIOOLUNFDYWNVFWHWA9LBELWFVWZBUYBBQXITA9JUMXTVJPVRYCHLKFHMNYAMKRIJIC'
    ];
    // Error: One of the transaction inputs is used as output.

    this.iota
      .getBalances(addresses, 100)
      .then(({balances}) => {
        this.balances = balances;
        console.log(balances);
      })
      .catch(err => {
        console.error(err);
      });

    // https://devnet.thetangle.org/address/
  }

  async clickTransfer() {
    // const receivingAddress = 'SHMORBLSLFAPXZ9VAGYODN9NFJDFSPTQZBFHCBPJPRPNHPUSLOQGQJBMXLOGK9RMNQEOMYWIXXPLJRRVB';
    const receivingAddress = await this.iota.getNewAddress(this.seed, {
      index: 3,
      total: 1
    })
    const transfers = [
      {
        value: 100,
        address: 'QZUQLKWVJXNITAKIJRMC9OLRAVMZCWAWOK99WXVOUHULIXHWUIMI9BYMJZZOXATKFUJFKUJT99NPU9ZY9',
        tag: 'MYMAGIC1'
      }

    ];
    console.log('Sending 500i to ' + receivingAddress)
    try {
      console.log('Construct bundle and convert to trytes')
      const trytes = await this.iota.prepareTransfers(this.seed, transfers)
      console.log('Send bundle to node.')
      const response = await this.iota.sendTrytes(trytes, 3, 9)

      console.log('Completed TXs')
      response.map(tx => console.log(tx));
    } catch (e) {
      console.log(e.message);
    }
  }
}
