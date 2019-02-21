import { Component, OnInit } from '@angular/core';
// import * as ZMQ from 'zeromq';


@Component({
  selector: 'app-zmq',
  templateUrl: './zmq.component.html',
  styleUrls: ['./zmq.component.scss']
})
export class ZmqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   //  const sock = ZMQ.socket('sub');

   // sock.connect('tcp://zmq.devnet.iota.org:5556');

  }

}
