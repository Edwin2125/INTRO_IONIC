import { Component, ComponentRef, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

//crear una interface para definir propiedades que el componente lista va a tener 
interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false
})
export class InicioPage implements OnInit {
  //crear nuevo listado 

  //componentes: any[] = []; 
  componentes!: Observable<Componente[]>;

  constructor(private menuCtrl: MenuController,
    private dataService: DataService) { }
    
  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  mostrarMenu() {
    this.menuCtrl.open('first');
  }

} 