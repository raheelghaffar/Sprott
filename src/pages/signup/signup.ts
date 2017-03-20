import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { HomePage} from '../home/home';
import { User} from '../../modal/';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import Parse from 'parse';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
	
	
	user: User={
	  username: "",
	  email: "",
	  password: ""
  };

   confirmpass: string;
   url: string;
   headers: Headers;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertctrl: AlertController,public http: Http) {
	  
	  
	this.headers=new Headers();
	this.headers.append("X-Parse-Application-Id", "AppId1")
    
  }
    

  
	gotologin(){
	
	this.navCtrl.push(HomePage);
	
	
   }
    
	  signup(){
		 if(this.user.password!=this.confirmpass){
			 this.alertctrl.create({
				 title:"Error",
				 buttons:['ok']
				 
				 
			 }).present();
			 return;
		 	 		 
		 } 
		 
		 var me=this;
		 
		 var user = new Parse.User();
		  user.set("username",this.user.username);
		  user.set("password",this.user.password);
		  user.set("email",this.user.email);
		  
		  user.signUp(null,{
			success: function(user){
			  me.alertctrl.create({
			   title:"Registered",
				 buttons:['ok']
				    }).present();
                         	 
		}, error : function(user,error){
			console.log(error.message);
		}
		     
		  });
		   
		 
		 
		 
		 
		
		 
		 
		 
		 /*
		  this.url= "http://192.168.0.12:1337/parse/users";
		  this.http.post(this.url,this.user,{headers:this.headers}).map(res => res.json()).subscribe(res =>{
						  			  
	       this.alertctrl.create({
			   title:"Registered",
				 buttons:['ok']
				 
				 
			   
			   
			   
		   }).present();
	   
	   
	   
	   
	   
	   
	   
	   },
		  err=>{
		  console.log(err);	  
			  			  
		  }
		  
		  		  )
		  */
	  }
	  
	
	  
	  
	  
	  }
	  
  
  
  
  

  
