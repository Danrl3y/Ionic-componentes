import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],

  imports: [CommonModule, IonicModule],

})
export class PopoverInfoComponent implements OnInit {

  items = Array(7);

  constructor( private popoverCtrl: PopoverController ) { }

  ngOnInit() {}

  onClick( valor: number ) {
    
    this.popoverCtrl.dismiss({
      item: valor
    });

  }

}