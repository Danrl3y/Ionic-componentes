import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false
})
export class AppComponent {
  componentes!: Observable<Componente[]>;

  constructor(private dataService: DataService) {
    this.initializeApp();
  }

  initializeApp() {
    // Cargamos las opciones del menú directamente
    this.componentes = this.dataService.getMenuOpts();
  }
}
