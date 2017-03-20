import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { SignupPage} from '../signup/signup';
import { User} from '../../modal';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import Parse from 'parse';
import {ShiftRPage} from '../shift-r/shift-r';
import {Storage} from '@ionic/storage';


@Component({
  
  templateUrl: 'home.html'
})
export class HomePage {

  user: User={
	  username: "",
	  password: ""
  };
  
  url: string;
   headers: Headers;
   response: any;
  
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertctrl: AlertController,public http: Http, public localStorage:Storage) {
  
  //Parse.initialize("AppId1");
  //Parse.serverURL= "http://localhost:1337/parse";
   	
	
	this.headers=new Headers();
	this.headers.append("X-Parse-Application-Id", "AppId1")  
  
  }

  
  gotosignup(){
	  
	  this.navCtrl.push(SignupPage);
	  
	  
  }

  
  login(){
	  if(!(this.user.username && this.user.password)){
			 this.alertctrl.create({
				 title:"Error",
				 buttons:['ok']
				 
				 
			 }).present();
			 return;
	  }

	    var me=this;
		
	   Parse.User.logIn(this.user.username,this.user.password,{
		   success: function(user){
			   me.navCtrl.setRoot(ShiftRPage);
                         	 
		}, error : function(user,error){
			console.log(error.message);
		}
		   
	   });
	    
	  /*
         this.url= "http://192.168.0.12:8020/sprott/login?username="+this.user.username+"&password="+this.user.password;
		  this.http.get(this.url,{headers:this.headers}).subscribe(res =>{
						  			 
										
										console.log(res);
                                          var object= res;  
											console.log("object id "+res.json().results[0].objectId)	;	
									 this.localStorage.set('users',res.json().results[0].objectId).then(()=>{
										 
										this.navCtrl.setRoot(ShiftRPage);
                                      	 
										 
									 },
									  err => {
										  console.log(err);
									  }
										 
									 					  
										
									      )});
										  */

  			  
/*

	var username=Parse.Object.extend("Users");	
	var pass = Parse.Object.extend("Users");
	
	var q=new Parse.Query(username);
	var qp=new Parse.Query(pass);   
	 q.equalTo("name",this.user.name);  
	 qp.equalTo("password",this.user.password)
     q.find().then(this.navCtrl.setRoot(ShiftRPage));
	

	
    	    
	   var username=Parse.Object.extend("users");	
	var pass = Parse.Object.extend("users");
	
	var q=new Parse.Query(username);
	var qp=new Parse.Query(pass);   
	 q.equalTo("name",this.user.name)  
	 qp.equalTo("password",this.user.password)
    
  var mainq=Parse.Query.or(q.find(),qp.find());
     mainq.find().then(funtion(results)){
		 
		 	console(results);
	 };


	*/
	   		
   
	  
	  
	  
/*      	  
	  	  	  	  	
   
   
   
   
   var qu = new Parse.Query(username);
   var qp= new Parse.Query(pass);
   
  qu.equalTo("name", this.user.name);
  qu.find().then({
	 
	success: function(results) {
      this.userL=results;
    

	});
       
  qp.equalTo("name", this.user.password);
  qp.find().then(
  
  success: function(results) {
      this.passL=results;
  });
 
 
 
 
 if(userL==this.user.name&&passL.this.user.name){
	 
	 this.navCtrl.setRoot(ShiftRPage);

 }  
  


	
    var username=Parse.Object.extend("users");	
	var pass = Parse.Object.extend("users");
	
	var q=new Parse.Query(username);
	var qp=new Parse.Query(pass);   
	 q.equalTo("name",this.user.name)  
	 qp.equalTo("password",this.user.password)
     q.find().then(this.localStorage.set('users', res.json().objectId).then(()=>{
	this.navCtrl.setRoot(ShiftRPage)
		  
		  }))
this.url= 'http://localhost:1337/parse/classes/users?where={"name":"'+this.user.name+'"}';
		  
		  
		  
		  
		  this.url= "http://localhost:1337/parse/classes/users?name="+this.user.name+ "&passowrd="+this.user.password;
		  this.http.get(this.url,{headers:this.headers}).map(res => res.json()).subscribe(res =>{
		 		this.navCtrl.setRoot(ShiftRPage);		  			  
		  })
		  
		  
		  */
		





  }


	 
}


	 	 
	 
	
     
			
	
	   
	   	   
	   	   
	   
  
   
  
  
  
