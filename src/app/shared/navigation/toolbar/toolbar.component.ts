import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {ExampleDialogComponent} from "./example-dialog/example-dialog.component";
import * as iotaLibrary from "@iota/core"

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  animal: string;
  name: string;
  title = 'iota-workshop-ng';

  constructor(private dialog: MatDialog,) {
  }

  ngOnInit() {
  }

  openDialogs() {
    this.dialog
      .open(ExampleDialogComponent, {
        // position: {top: '60px'},
        height:'400px',
        width: '600px',

      })
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '400px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {name: this.name, animal: this.animal};

    const dialogRef = this.dialog.open(ExampleDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      alert("response: " + result)
    });
  }

  helloWorld(){
    const iota = iotaLibrary.composeAPI({
      provider: 'https://nodes.devnet.thetangle.org:443'
    })

    iota
      .getNodeInfo()
      .then(response => console.log(response))
      .catch(err => {
        console.error(err)
      })
  }
}
