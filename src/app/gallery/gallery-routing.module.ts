import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleriesListComponent } from './galleries-list/galleries-list.component';
import { GalleryDetailsComponent } from './gallery-details/gallery-details.component';

import { GalleryComponent } from './gallery.component';
import { HomeComponent } from './home/home.component';

const galleryRoutes: Routes = [
  { path: '', component: GalleryComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'all-galleries', component: GalleriesListComponent },
    { path: 'gallery/:id', component: GalleryDetailsComponent }
  ] }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(galleryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GalleryRoutingModule { }
