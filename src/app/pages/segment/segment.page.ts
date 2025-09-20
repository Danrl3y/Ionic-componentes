import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
  standalone: false
})

export class SegmentPage implements OnInit {

  superHeroes!: Observable<Componente[]>;
  publisher: string = '';

  constructor(private dataService: DataService ) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged( event:any ) {
    // console.log(event.detail.value);
    // if ( event.detail.value === 'todos' ) {
    //   return this.publisher = '';
    // }

    this.publisher = event.detail.value;
  }

}
