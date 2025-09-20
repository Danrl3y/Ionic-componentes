import { Component, OnInit } from '@angular/core';
import { text } from 'express';
import { h } from 'ionicons/dist/types/stencil-public-runtime';
import { connect } from 'rxjs';
import { ComponentsModule } from "src/app/components/components-module";

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
  standalone: false
})
export class DateTimePage implements OnInit {

  fechaNac: Date = new Date(); 

  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996, 2025];

  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: (event:any) => {
          console.log(event);
        }
      },
      {
        text: 'Mundo',
        handler: () => {
          console.log('log!');
        }
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event:any){
    console.log(event);
    console.log(new Date(event.detail.value));
  }
}