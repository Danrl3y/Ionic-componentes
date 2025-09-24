import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
  standalone: false
})
export class SlidesPage implements OnInit {

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/1.jpg',
      titulo: '1',
      desc: 'Dog 1'
    },
    {
      img: '/assets/slides/2.jpg',
      titulo: '2',
      desc: 'Dog 2'
    },
    {
      img: '/assets/slides/3.webp',
      titulo: '3',
      desc: 'Dog 3'
    },
    {
      img: '/assets/slides/4.gif',
      titulo: '4',
      desc: 'Dog 4'
    },
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() { }

  onClick() {
    this.navCtrl.navigateBack('/');
  }
}
