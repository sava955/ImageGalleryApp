import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../gallery.service';
import { MatDialog } from '@angular/material/dialog';
import { ImageDetailsComponent } from '../image-details/image-details.component';

@Component({
  selector: 'app-gallery-details',
  templateUrl: './gallery-details.component.html',
  styleUrls: ['./gallery-details.component.scss']
})
export class GalleryDetailsComponent implements OnInit {
  id: any;
  gallery: any;
  images: any[] = [];
  limit: number = 15;
  allLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private galleryService: GalleryService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getGallery(this.id);
  }

  getGallery(id: any) {
    this.galleryService.getGallery(id).subscribe((res) => {
      this.gallery = res;

      if (this.gallery.images.length > this.limit) {
        this.images = this.gallery.images.splice(0, this.limit);
        this.allLoaded = false;
      } else {
        this.images = this.gallery.images;
        this.allLoaded = true;
      }
    });
  }

  loadMore() {
    this.limit += this.limit;
    this.getGallery(this.id);
  }

  getImageDetails(i: number) {
    const dialogRef = this.dialog.open(ImageDetailsComponent, {
      width: '80%',
      height: 'auto',
      data: {
        i: i,
        images: this.gallery.images
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
