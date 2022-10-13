import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importa la ruta 
import { APP_ROUTING } from './app.routes';
import { from } from 'rxjs';
//importan los servicios
import { plantasService } from './services/plantas.service'; //nombre de la clase

//importamos los componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/utilidades/nabvar/nabvar.component';
import { FooterComponent } from './components/utilidades/footer/footer.component';
import { AutorComponent } from './components/utilidades/autor/autor.component';
import { InicioComponent } from './components/utilidades/inicio/inicio.component';
import { PlantasComponent } from './components/utilidades/plantas/plantas.component';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    FooterComponent,
    AutorComponent,
    InicioComponent,
    PlantasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING //
  ],
  providers: [plantasService],//colocaca el nombre de la clase /array
  bootstrap: [AppComponent]
})
export class AppModule { }
