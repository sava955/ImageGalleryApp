import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-galleries-list',
  templateUrl: './galleries-list.component.html',
  styleUrls: ['./galleries-list.component.scss'],
  animations: [
    trigger('ngIfAnimation', [
      transition(':enter, :leave', [
        query('@*', animateChild())
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(200, [
            animate('500ms 500ms', style({ opacity: 1 }))
          ])
        ], {optional: true})
      ])
    ]),
    trigger('overlayText', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(50%)'
        }),
        animate("300ms 200ms ease-in", style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ]),
      transition('* => void', [
        style({
          transform: 'translateY(0)',
          opacity: 1
        }),
        animate("300ms 200ms ease-in", style({
          opacity: 0,
          transform: 'translateY(50%)'
        }))
      ])
    ]),
    trigger('overlayLeft', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'rotateY(90deg) translateX(-100%)'
        }),
        animate("300ms ease-in", style({
          transform: 'rotateY(0)',
          opacity: 1
        }))
      ]),
      transition('* => void', [
        style({
          transform: 'rotateY(0)',
          opacity: 1
        }),
        animate("300ms ease-in", style({
          opacity: 0,
          transform: 'rotateY(90deg) translateX(-100%)'
        }))
      ])
    ]),
    trigger('overlayRight', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'rotateY(90deg) translateX(100%)'
        }),
        animate("300ms ease-in", style({
          transform: 'rotateY(0)',
          opacity: 1
        }))
      ]),
      transition('* => void', [
        style({
          transform: 'rotateY(0)',
          opacity: 1
        }),
        animate("300ms ease-in", style({
          opacity: 0,
          transform: 'rotateY(90deg) translateX(100%)'
        }))
      ])
    ])
  ]
})
export class GalleriesListComponent implements OnInit {
  galleries: any[] = [];
  isLoaded: boolean = false;
  show: boolean = false;
  hoveredArr: any[] = [];
  hovered: boolean = false;

  constructor(
    private galleryService: GalleryService
  ) { }

  ngOnInit(): void {
    this.getGalleries();
  }

  ngAfterContentInit() { }

  getGalleries() {
    let i = 0;

    this.galleryService.getGalleries().subscribe((res) => {
      this.galleries = res;
      this.galleries.forEach(gallery => {
        this.hoveredArr[i] = this.hovered;
        i += 1;
      })
      this.isLoaded = true;
    });
  }

  animateDiv(event: any) {
    this.show = true;
  }

  stopAnimation(event: any) {
    this.show = false;
  }

  animateBox(i: number) {
    this.hoveredArr[i] = true;
  }

  stopAnimateBox(i: number) {
    this.hoveredArr[i] = false;
  }

}
