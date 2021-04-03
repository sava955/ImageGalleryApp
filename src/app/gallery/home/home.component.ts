import { AfterContentInit, Component, OnInit } from '@angular/core';
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

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
    ]),
    trigger('left', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-50%)'
        }),
        animate("500ms ease-in", style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(200, [
            animate('500ms 500ms', style({ opacity: 1 }))
          ])
        ])
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
export class HomeComponent implements OnInit, AfterContentInit {

  firstGallery: any;
  mainGalleries: any[] = [];
  isLoaded: boolean = false;
  show: boolean = false;
  hoveredArr: any[] = [];
  hovered: boolean = false;

  galleries = [
    {
      id: 1,
      name: 'Gallery 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum sit amet ex quis condimentum. Etiam vestibulum ligula sapien, sit amet feugiat purus imperdiet eu. Donec efficitur odio felis, id placerat est pretium eu. Suspendisse felis mauris, luctus vitae ex ac, consequat maximus arcu. Integer iaculis hendrerit pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis iaculis suscipit nibh congue laoreet. Nam tincidunt in ipsum in vestibulum. Praesent gravida semper sapien ut vestibulum.',
      by: 'John Doe',
      likes: ['Donald Trump', 'Vladimir Putin', 'Angela Merkel'],
      comments: [],
      images: [
        {
          image: '../../assets/images/img-1.jpg',
          description: 'Lorem ipsum dolor sum',
          likes: ['Donald Trump', 'Vladimir Putin', 'Emanuel Macron', 'Angela Merkel'],
          comments: []
        }
      ],
      createdAt: new Date()
    },
    {
      id: 2,
      name: 'Gallery 2',
      description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum sit amet ex quis condimentum. Etiam vestibulum ligula sapien, sit amet feugiat purus imperdiet eu. Donec efficitur odio felis, id placerat est pretium eu. Suspendisse felis mauris, luctus vitae ex ac, consequat maximus arcu. Integer iaculis hendrerit pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis iaculis suscipit nibh congue laoreet. Nam tincidunt in ipsum in vestibulum. Praesent gravida semper sapien ut vestibulum.',
      by: 'John Doe',
      likes: ['Donald Trump', 'Vladimir Putin', 'Angela Merkel'],
      comments: [],
      images: [
        {
          image: '../../assets/images/img-2.jpg',
          description: 'Lorem ipsum dolor sum',
          likes: ['Donald Trump', 'Vladimir Putin', 'Emanuel Macron', 'Angela Merkel'],
          comments: []
        }
      ],
      createdAt: new Date()
    },
    {
      id: 3,
      name: 'Gallery 3',
      description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum sit amet ex quis condimentum. Etiam vestibulum ligula sapien, sit amet feugiat purus imperdiet eu. Donec efficitur odio felis, id placerat est pretium eu. Suspendisse felis mauris, luctus vitae ex ac, consequat maximus arcu. Integer iaculis hendrerit pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis iaculis suscipit nibh congue laoreet. Nam tincidunt in ipsum in vestibulum. Praesent gravida semper sapien ut vestibulum.',
      by: 'John Doe',
      likes: ['Donald Trump', 'Vladimir Putin', 'Angela Merkel'],
      comments: [],
      images: [
        {
          image: '../../assets/images/img-3.jpg',
          description: 'Lorem ipsum dolor sum',
          likes: ['Donald Trump', 'Vladimir Putin', 'Emanuel Macron', 'Angela Merkel'],
          comments: []
        }
      ],
      createdAt: new Date()
    },
    {
      id: 4,
      name: 'Gallery 4',
      description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum sit amet ex quis condimentum. Etiam vestibulum ligula sapien, sit amet feugiat purus imperdiet eu. Donec efficitur odio felis, id placerat est pretium eu. Suspendisse felis mauris, luctus vitae ex ac, consequat maximus arcu. Integer iaculis hendrerit pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis iaculis suscipit nibh congue laoreet. Nam tincidunt in ipsum in vestibulum. Praesent gravida semper sapien ut vestibulum.',
      by: 'John Doe',
      likes: ['Donald Trump', 'Vladimir Putin', 'Angela Merkel'],
      comments: [],
      images: [
        {
          image: '../../assets/images/img-4.jpg',
          description: 'Lorem ipsum dolor sum',
          likes: ['Donald Trump', 'Vladimir Putin', 'Emanuel Macron', 'Angela Merkel'],
          comments: []
        }
      ],
      createdAt: new Date()
    },
    {
      id: 5,
      name: 'Gallery 5',
      description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum sit amet ex quis condimentum. Etiam vestibulum ligula sapien, sit amet feugiat purus imperdiet eu. Donec efficitur odio felis, id placerat est pretium eu. Suspendisse felis mauris, luctus vitae ex ac, consequat maximus arcu. Integer iaculis hendrerit pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis iaculis suscipit nibh congue laoreet. Nam tincidunt in ipsum in vestibulum. Praesent gravida semper sapien ut vestibulum.',
      by: 'John Doe',
      likes: ['Donald Trump', 'Vladimir Putin', 'Angela Merkel'],
      comments: [],
      images: [
        {
          image: '../../assets/images/img-5.jpg',
          description: 'Lorem ipsum dolor sum',
          likes: ['Donald Trump', 'Vladimir Putin', 'Emanuel Macron', 'Angela Merkel'],
          comments: []
        }
      ],
      createdAt: new Date()
    }
  ];

  tiles: Tile[] = [
    { text: 'One', cols: 2, rows: 2, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' },
    { text: 'Five', cols: 1, rows: 1, color: 'pink' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.getGalleries();
  }

  ngAfterContentInit() { }

  getGalleries() {
    let i = 0;
    this.firstGallery = this.galleries[0];
    this.mainGalleries = this.galleries.splice(1, 5);
    this.mainGalleries.forEach(gallery => {
      this.hoveredArr[i] = this.hovered;
      i += 1;
    })
    this.isLoaded = true;
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
