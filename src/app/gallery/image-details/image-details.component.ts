import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { GalleryService } from '../gallery.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  stagger
} from '@angular/animations';
import { LikesDetailsComponent } from '../likes-details/likes-details.component';

export interface DialogData {
  i: number,
  images: any[]
}

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss'],
  animations: [
    trigger('ngIfAnimation', [
      transition(':enter, :leave', [
        query('@*', animateChild())
      ])
    ]),
    trigger('hoverAnimation', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'rotateY(90deg) translateY(50%)'
        }),
        animate("200ms ease-in", style({
          transform: 'rotateY(0deg) translateY(0)',
          opacity: 1
        }))
      ]),
      transition('* => void', [
        style({
          transform: 'translateY(0)',
          opacity: 1
        }),
        animate("200ms ease-in", style({
          opacity: 0,
          transform: 'translateY(50%)'
        }))
      ])
    ])
  ]
})
export class ImageDetailsComponent implements OnInit {
  image: any;
  hovered: boolean = false;
  comment: string = '';
  showEmojiPicker: boolean = false;
  showEllipsis = true;
   
  constructor(
    public dialogRef: MatDialogRef<ImageDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog,
    private galleryService: GalleryService
  ) { }

  ngOnInit(): void {
    this.image = this.data.images[this.data.i];
  }

  close() {
    this.dialogRef.close();
  }

  aStart() {
    this.hovered = true;
  }

  aStop() {
    this.hovered = false;
  }

  getLikeDetails() {
    const dialogRef = this.dialog.open(LikesDetailsComponent, {
      width: '20%',
      data: {
        image: this.image
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  nextImage() {
    this.data.i = this.data.i + 1;

    if (this.data.i > this.data.images.length - 1) {
      this.data.i = 0;
      this.image = this.data.images[this.data.i];
    } else {
      this.image = this.data.images[this.data.i];
    }
  }

  prevImage() {
    this.data.i = this.data.i - 1;

    if (this.data.i < 0) {
      this.data.i = this.data.images.length - 1;
      this.image = this.data.images[this.data.i];
    } else {
      this.image = this.data.images[this.data.i];
    }
  }

  scrollToCommentForm($element: any): void {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event: any) {
    const text = `${this.comment}${event.emoji.native}`;

    this.comment = text;
    this.showEmojiPicker = false;
  }

  commentImage() {
    console.log(this.comment);
    this.comment = '';
  }

}
