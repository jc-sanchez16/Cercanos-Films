import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  cities=[
  {name:"Bogota",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMzjO8PI_YGeAWd8AKuRuZ7Ty7ZkCHDkiBsKyYL6lcnrcpmDEOGXeKsT0I0NKBq3T1MM&usqp=CAU"},
  {name:"Medellin",imgUrl:"https://cdn.getyourguide.com/img/location/5cced3db8b581.jpeg/68.jpg"},
  {name:"Cali",imgUrl:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5e/9e/19/caption.jpg?w=600&h=400&s=1"},
  {name:"Barranquilla",imgUrl:"https://www.eluniversal.com.co/binrepository/942x700/0c0/0d0/none/13704/CYFB/ventana-del-mundojpeg_6070466_20220406114340.jpg"},
  {name:"Villavicencio",imgUrl:"https://files.rcnradio.com/2021-05/img-20210428-wa0352_3_0.jpg?VersionId=3hcyvuG1rDKj4If5QVM76OxLsqmcrUPf"}
  ];



  constructor(private SVC:DataService) {}
  ngOnInit(): void {
    this.obtainData();
  }

  obtainData(){

     // this.SVC.getCol("city",[],9).subscribe((res:any)=>console.log("hola Perro",res))
//     this.SVC.getDoc('cinemas',this.cinemas[0]).subscribe(res=>console.log(res))
   }


}
