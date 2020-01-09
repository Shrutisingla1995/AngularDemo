import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  dialogs: MatDialogRef<DialogComponent>;

  constructor(private dialogs: MatDialog) { }

  ngOnInit() {
  }
  openDialog() {
    this.dialogs.open(DialogComponent, {
        height: '400px',
        width: '600px',
    });
  }
}
