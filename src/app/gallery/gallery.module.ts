import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { FlexLayoutModule } from '@angular/flex-layout';
import { EllipsisModule } from 'ngx-ellipsis';
import { NgxMasonryModule } from 'ngx-masonry';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { GalleryComponent } from './gallery.component';
import { HomeComponent } from './home/home.component';
import { GalleryService } from './gallery.service';
import { GalleryDetailsComponent } from './gallery-details/gallery-details.component';
import { GalleriesListComponent } from './galleries-list/galleries-list.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { LikesDetailsComponent } from './likes-details/likes-details.component';

@NgModule({
  declarations: [
    GalleryComponent,
    HomeComponent,
    GalleryDetailsComponent,
    GalleriesListComponent,
    ImageDetailsComponent,
    LikesDetailsComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    HttpClientModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    EllipsisModule,
    NgxMasonryModule,
    PickerModule
  ],
  providers: [
    GalleryService
  ]
})
export class GalleryModule { }
