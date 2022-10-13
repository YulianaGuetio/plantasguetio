import { Injectable } from '@angular/core'; // importacion desde angular cor

@Injectable()
export class plantasService { //se crea una clase llamada plantasService 

    private plantas:Planta[]= //se crea arreglo plantas se le psa a la interfaz planta y se crean los onjetos
    [
        {
          nombre_cientifico: "Apium graveolens",
          nombre: "Apio",
          nombre_nasa: "eç  çxũpx",
          img: "assets/img/apio.jpg",
          clasificacion: "Planta caliente",
          parte_utilizada:"Tallo y hojas"
        },
        {
            nombre_cientifico: "Artemisia absinthium",
            nombre: "Ajenjo",
            nombre_nasa: "eç  tuhme",
            img: "assets/img/ajenjo.jpg",
            clasificacion: "Planta caliente",
            parte_utilizada:"Tallo y hojas "
        },
        {
            nombre_cientifico: "Sphagneticola trilobata",
            nombre: "Botoncillo",
            nombre_nasa: "bu’çx",
            img: "assets/img/botoncillo.jpg",
            clasificacion: "Planta caliente",
            parte_utilizada:"Toda la Planta"
        },
        {
            nombre_cientifico: "Impatiens balsamina",
            nombre: "alegria",
            nombre_nasa: "çxaayu’çe",
            img: "assets/img/alegria.jpg",
            clasificacion: "Plantas fria",
            parte_utilizada:"Ramas y hojas"
        },
        {
            nombre_cientifico: "Dianthus caryophyllus",
            nombre: "clavel blanco",
            nombre_nasa: "kite  çxihme",
            img: "assets/img/clavelblanco.jpg",
            clasificacion: "Planta fria",
            parte_utilizada:"Flor"
        },
        {
            nombre_cientifico: "Alchemilla orbiculata",
            nombre: "Orejuela",
            nombre_nasa: "sxũu",
            img: "assets/img/orejuela.jpg",
            clasificacion: "Planta fria",
            parte_utilizada:"Hojas"
        },
        {
            nombre_cientifico: "Viola tricolor L",
            nombre: "Pensamiento",
            nombre_nasa: "yaatx  kite",
            img: "assets/img/pensamiento.jpg",
            clasificacion: "Planta fresca",
            parte_utilizada:"Flor"
        }
      ];

    constructor() {
     //se hace un console .log y se coloco el mensaje se puede visualizar en inspeccionar de la pagina
        console.log("aqui esta el servicio planas funcionndo");

     }
        getplantas():Planta[]{ //obtiene plantas en el arreglo planta 
        return this.plantas; //retorna los objetos q se crearon
     }
 
}

export interface Planta{ //eportamos la interfaz planta declaramos los atributos del objeto
nombre_cientifico: String;
nombre: String;
nombre_nasa:String;
img: String;
clasificacion: String;
parte_utilizada: String;
}