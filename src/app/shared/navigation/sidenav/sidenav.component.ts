import {Component, OnInit} from '@angular/core';

//import {select, Store} from "@ngrx/store";
import {Router, } from "@angular/router";

//import {Go} from "../../../core/routing/routing.store/router.action";


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  clickLink(link) {
    this.router.navigate([link])

  }


}
