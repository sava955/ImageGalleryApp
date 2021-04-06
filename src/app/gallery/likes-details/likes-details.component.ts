import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  image: any
}

@Component({
  selector: 'app-likes-details',
  templateUrl: './likes-details.component.html',
  styleUrls: ['./likes-details.component.scss']
})
export class LikesDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LikesDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
    debugger;
    console.log(this.data.image);
  }

  close() {
    this.dialogRef.close();
  }

}
