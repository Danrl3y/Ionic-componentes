import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';
import { DataService } from 'src/app/services/data';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: false
})
export class ListPage implements OnInit {

  usuarios!: Observable<any>;

  @ViewChild(IonList) ionList!: IonList;

  constructor( private dataService: DataService ) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsuarios();

  }

  favorite(user: any) {
    console.log('favorite', user);
    this.ionList.closeSlidingItems();
  }

  share(user: any) {
    console.log('share', user);
    this.ionList.closeSlidingItems();
  }

  delete(user: any) {
    console.log('delete', user.name);
    this.ionList.closeSlidingItems();
  }



}
