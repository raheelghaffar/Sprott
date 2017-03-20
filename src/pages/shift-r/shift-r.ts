import {  Component,NgModule } from '@angular/core';
import { NavController, NavParams,AlertController,App  } from 'ionic-angular';
import { User} from '../../modal/';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { ReportsPage} from '../reports/reports';
import {CreateRPage} from '../create-r/create-r';
import { HomePage} from '../home/home';
import {Storage} from '@ionic/storage';
import Parse from 'parse';
import { TasksPage} from '../tasks/tasks';
import { CreateTPage} from '../create-t/create-t';
/*
  Generated class for the ShiftR page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shift-r',
  templateUrl: 'shift-r.html'
})
export class ShiftRPage {

	consultants: any[];
  
   url: string;
   headers: Headers;
   userId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertctrl: AlertController,public http: Http, public localStorage: Storage) {
	  
	  this.headers=new Headers();
	this.headers.append("X-Parse-Application-Id", "AppId1")
     
     
	this.localStorage.get('users').then((value)=>{
     this.userId=value;		 
		});	
	
	 this.getconsultants(null); 
    
 
 }

  
  
  
  getconsultants(refresher){
	   this.url= "http://192.168.0.21:8020/sprott/Users"; 
	    this.http.get(this.url,{headers:this.headers}).map(res => res.json()).subscribe(res =>{
		 console.log(res);
         this.consultants = res.results;		 
				if(refresher!=null){
	             refresher.complete();
			}
				
				
				},err=> {
				this.alertctrl.create({
			   title:"error",
				 buttons:['ok']
			 
		   }).present();
	   
	   	     }
		  
		  
		);
  }


	   
				
		
  
  gotoreports(viewUserId:String){
	   
	  this.navCtrl.push(ReportsPage,{
		  viewUserId: viewUserId
	  });
	  
	  
  }
  
  
   createR(){
	   
	   console.log("user id is this "+ this.userId);
     	this.navCtrl.push(CreateRPage);
	
	
	  
  }
  
 
   logout(){
	
  Parse.User.logOut().then(() => {
  var currentUser = Parse.User.current();  // this will now be null
  	this.navCtrl.setRoot(HomePage);
  
  });

	//  this.localStorage.remove('users').then(()=>{
	   
	   this.navCtrl.setRoot(HomePage);
	   
	   
	   
	   
   }


	gototasks()	{

     this.navCtrl.push(CreateTPage);
	   


	}  
	  
	  

 }
 

