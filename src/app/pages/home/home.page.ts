import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  componentes!: Observable<Componente[]>;

  constructor( private menuCtrl: MenuController,
               private dataService: DataService ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  mostrarMenu() {
    this.menuCtrl.open('first');
  }

}