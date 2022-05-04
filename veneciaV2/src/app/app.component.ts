import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponentComponent } from './custom/dialog-body-component/dialog-body-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'veneciaV2';

  constructor(public dialog: MatDialog){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '50%';
    dialogConfig.maxWidth = '700px';
    dialogConfig.minHeight = '400px';
    dialogConfig.maxHeight = '600px';

    this.dialog.open(DialogBodyComponentComponent, dialogConfig);
  }
}
