import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponentComponent } from '../dialog-body-component/dialog-body-component.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

   openDialog() {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.minWidth = '300px';
        dialogConfig.maxWidth = '500px';
        dialogConfig.minWidth = '200px';
        dialogConfig.maxHeight = '300px';

        this.dialog.open(DialogBodyComponentComponent, dialogConfig);
  }

  ngOnInit(): void {}

}
