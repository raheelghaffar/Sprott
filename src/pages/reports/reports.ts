import { Component } from '@angular/core';

import { NavController, NavParams,AlertController  } from 'ionic-angular';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';
import Parse from 'parse';

/*
  Generated class for the Reports page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html'
})
export class ReportsPage {
	 reports: any[];
	 url: string;
   headers: Headers;
	userId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertctrl: AlertController,public http: Http,public localStorage: Storage) {
	  
	  
   
	  this.headers=new Headers();
	this.headers.append("X-Parse-Application-Id", "AppId1");
     //this.localStorage.get('users').then((value)=>{
       //this.userId=value;		
	 
// });
      
	this.userId=navParams.get("viewUserId");
     console.log(this.userId);
	 this.getreports(null);
	}



  getreports(refresher){
	     
	   this.url= 'http://192.168.0.21:8020/sprott/classes/submit?where={"owner":"'+this.userId+'"}'; 
	    this.http.get(this.url,{headers:this.headers}).map(res => res.json()).subscribe(res =>{
		 console.log(res);
        
				
				 this.reports = res.results;		 
				   console.log(this.reports);
			   
				if(refresher!=null){
	             refresher.complete();
			}
				
				
				},err=> {
				this.alertctrl.create({
			   title:"error",
				 buttons:['ok']
			 
		   }).present();
	   
	   	     }
		  
		  
		)
				
	}	


} 