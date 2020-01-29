import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-infor-dialog',
  templateUrl: './infor-dialog.component.html',
  styleUrls: ['./infor-dialog.component.scss']
})
export class InforDialogComponent implements OnInit {

  Obj: any;
  constructor(public dialogRef: MatDialogRef<InforDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private sanitizer: DomSanitizer) {console.log(this.data); }

  ngOnInit() {
    this.Obj = this.data.data;
    // this.dialogRef.close();
  }

  // To Safe-Pass browser security
  getBackground(image) {
    return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
  }

  close() {
    this.dialogRef.close();
  }

}
