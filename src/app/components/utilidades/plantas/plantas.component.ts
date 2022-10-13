import { Component, OnInit } from '@angular/core'; 
//importamos la clase le pasamos la interface planta
import { plantasService, Planta } from 'src/app/services/plantas.service'; 

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {


  mostrar:boolean=true;
  


  plantas: Planta[] = []; //Arreglo de objetos = arreglo vacio porwue vamos a traer los datos del servicio

//inyectamos en el constructor le asignamos un _nombre: nombre de la clase
//con esto estamos ocupando los servicios en la pestaña plantas.
  constructor(private _plantaservice:plantasService) { } 

  ngOnInit(): void {
    this.plantas= this._plantaservice.getplantas(); //nombre del servicio . funcion getplantas que obtiene los objetos
    //con eso se llena plantas con las informacion q contiene el servicio
    console.log(this.plantas)
  }

}
