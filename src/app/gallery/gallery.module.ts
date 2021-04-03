import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';

import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { FlexLayoutModule } from '@angular/flex-layout';
import { EllipsisModule } from 'ngx-ellipsis';

import { GalleryComponent } from './gallery.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    GalleryComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    EllipsisModule
  ]
})
export class GalleryModule { }
