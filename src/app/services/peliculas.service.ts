import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  cinemasBog:any = [{id:'OllSp90536XL9is41FUc',name:"cedritos"},
  {id:'WORKEL1oYK1SrVwAKBtl',name:"chapinero"},
  {id:'dXCluRp3ZGXnTabk0GVg',name:"suba"},
  {id:'httAxH8SJXBQfJPIEKRf',name:"salitre"},
  {id:'k9fLNI5c4NWEQiAYWtu7',name:"suba"}];

  constructor(private db: AngularFirestore) { }



  obtainMovies(cinemaCity:string,name:string){
    let obj=this.cinemasBog.find(cine=>cine.name==name);
    let id=obj.id;
      let ref = this.db.collection(cinemaCity).doc(id).collection('peliculas');
      return ref.valueChanges();
  }
}
