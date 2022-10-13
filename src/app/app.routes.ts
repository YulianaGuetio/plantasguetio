import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';

import { NabvarComponent } from "./components/utilidades/nabvar/nabvar.component";
import { AutorComponent } from "./components/utilidades/autor/autor.component";
import { FooterComponent } from "./components/utilidades/footer/footer.component";
import { InicioComponent } from './components/utilidades/inicio/inicio.component';
import { PlantasComponent } from './components/utilidades/plantas/plantas.component';

//se crean las rutas 
const APP_ROUTES:Routes=[ //se crean los objetos de la ruta
//el objeto se compone de un atributo llamado path va ser la ruta que se va a crear
    
    {path:'navbar',component:NabvarComponent}, //va se la ruta con el componete que se quiere
    {path:'footer',component:FooterComponent},
    {path:'autor',component:AutorComponent},
    {path:'inicio',component:InicioComponent},
    {path:'plantas',component:PlantasComponent},
    {path:'**',pathMatch:'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);