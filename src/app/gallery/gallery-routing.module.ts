import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleryComponent } from './gallery.component';
import { HomeComponent } from './home/home.component';

const galleryRoutes: Routes = [
  { path: '', component: GalleryComponent, children: [
    { path: 'home', component: HomeComponent }
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
