import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss'],
})
export class CinemasComponent implements OnInit {

  idCatch;
  localidades:any=[];
  selected!:any;
  movies:any=[];

  flag:boolean=false;
  movieFlag:boolean=false;

  constructor(private route: ActivatedRoute,private SVC:DataService,private peliSVC:PeliculasService) { }


  ngOnInit():void {
    this.route.paramMap.subscribe(
      params => this.idCatch =params.get('id'),
      err=> console.error("Ha ocurrido un error: ",err)
    )
    this.obtainCinemas(this.idCatch);

  }

    async obtainCinemas(city){
      if(city=="Bogota"){
        const response= await this.obtainLocalidades().then(res=>console.log("Hola",this.localidades));
      }else{
        console.log("No hay Peliculas para el resto del país");
      }
    }
    async obtainLocalidades(){
        return await this.SVC.getCol('cinemas',[],"-").subscribe(
          res=>{
            this.flag=true;
            return this.localidades=res.map((resp)=>resp.barrio)},
          err=> console.error("Ha ocurrido un error: ",err)
          );;
    }
    cathcData(){
      console.log(this.selected)
      if(this.idCatch=="Bogota"){
        this.peliSVC.obtainMovies("cinemas",this.selected).subscribe(
          res=>{
            this.movieFlag=true;
            console.log(res);
            return this.movies=res
          });
      }
    }
}
