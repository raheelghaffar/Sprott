import { Component } from '@angular/core';
import { NavController, NavParams,AlertController} from 'ionic-angular';
import { submitreport} from '../../submitreport';
import { Http, Headers, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map'
import {Storage} from '@ionic/storage';
import { ShiftRPage} from '../shift-r/shift-r';
import Parse from 'parse';
import { HTTP } from 'ionic-native';
//import {TasksPage} from '../tasks/tasks'
import { Toast } from 'ionic-native';
import { User} from '../../modal/';
import { TasklistPage} from '../tasklist/tasklist';

/*
  Generated class for the CreateR page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-r',
  templateUrl: 'create-r.html'
})
export class CreateRPage {

   Submit : submitreport={
	  
	date: "",
	StartTime: "",
	EndTime : "",
	Report : "",
   }
   
     
 url: string;
 url2: string  
   headers: Headers;
   userId: any; 
   ObjId: string;
   Pendings: string;
   gettasks: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertctrl: AlertController,public http: Http, public localStorage: Storage) {
	  
	 
	 this.headers=new Headers();
	this.headers.append("X-Parse-Application-Id", "AppId1")
    var me=this;
	
			me.ObjId=navParams.get("index");
		   
	var currentUser = Parse.User.current();
		if (currentUser) {
			// do stuff with the user
			console.log(currentUser);
			this.userId = currentUser.id;
		    
			console.log("Current User id is: " + this.userId+"      "+ me.ObjId);
	      	
              this.getfinishedtask();	
              
} else {
			// show the signup or login page
		}
	
		/*
	this.localStorage.get('users').then((value)=>{
    this.userId=value;		 
		});	
		
		*/
	

  }


  
  
    
   public create (){
	   var me = this;
	    this.url= "http://192.168.0.21:8020/sprott/classes/submit";
		 this.http.post(this.url,{date:this.Submit.date,StartT:this.Submit.StartTime,EndT:this.Submit.EndTime,report:this.Submit.Report,owner:this.userId,
		 tasks: me.gettasks},{headers:this.headers, }).map(res => res.json()).subscribe(res =>{
   
   
 var me = this;
	// var Removetask= Parse.Object.extend("tasklist");
    //     var removetaskobj= new Removetask();
	      
   Parse.Object.destroyAll(me.gettasks,{
success: function(results){
         console.log(results);

},error:function(results,error){
   console.log(error.message);

}

   });

		  /*  var query= new Parse.Query("tasklist");
		   query.equalTo("objectId", me.gettasks.id)
            query.find({
success : function(results){
             //results.destroy();
                results.destroy();
		   }			
		
	
});

           */
        
/*

    HTTP.useBasicAuth("api", "key-36e842a3801f6285e3316093e6ef5acb");
    var mailUrl = "https://api.mailgun.net/v3/sandbox06511f1efd644835b6bea3453303b826.mailgun.org/messages";
    HTTP.post(mailUrl, {from: "Sprott IT  <postmaster@sandbox06511f1efd644835b6bea3453303b826.mailgun.org>",
        to:"Raheel Ghaffar <raheel_ghaffar@hotmail.com>", subject: "Shift Report"+this.Submit.date+ " " + "("+this.Submit.StartTime+"-----"+this.Submit.EndTime+")",
        text: "This is a test email from HTTP ionic."+ this.Submit.Report}, {}).then(data =>{
          console.log(data);

  */          
     


	      this.alertctrl.create({
			   title:"Shift Report has been submitted in GSO email as well",
				 buttons:[{
					 
					 text: 'OK',
        				handler: () => {
               		 
			  			
           
						
					this.navCtrl.setRoot(ShiftRPage);
					 
				 }}] 
		   }).present();
		 
	   
	     // me.events.publish("toast:event", {message: "Email Sent", timer: 3000, position: 'bottom'});
        }
		, error=>{
          console.log(error);
          //me.events.publish("toast:event", {message: "Error: " + error.error, timer: 3000, position: 'bottom'});
        });
		  
		  
		  
		 
		  
		// });
		  
		  /*
		   var mailurl= "https://api.mailgun.net/v3/sandbox06511f1efd644835b6bea3453303b826.mailgun.org/messages";
		    var encoding = window.btoa("api:key-36e842a3801f6285e3316093e6ef5acb");
			
			var mailHeaders = new Headers();
			mailHeaders.append("Authorization", "Basic " + encoding);
			mailHeaders.append("Content-Type", "application/x-www-form-urlencoded");
			var currentUser = Parse.User.current();
			var subject = currentUser.username + ": Shift Report: " + this.Submit.StartTime + " - " + this.Submit.EndTime;
			this.http.request(new Request({
            	method: RequestMethod.Post,
            	url: mailurl,
            	body: "from=Mailgun Sandbox <postmaster@sandbox06511f1efd644835b6bea3453303b826.mailgun.org>&to=Sahaj Arora <sahajarora1286@gmail.com&subject=" + subject + "&text=" + this.Submit.Report,
            	headers: mailHeaders
        	})).subscribe(success => {
            console.log("SUCCESS -> " + JSON.stringify(success));
			this.alertctrl.create({
			   title:"Submitted",
				 buttons:[{
					 
					 text: 'OK',
        				handler: () => {
               		 this.navCtrl.setRoot(ShiftRPage);
					 
				 }}] 
		   }).present();
        }, error => {
            console.log("ERROR -> " + JSON.stringify(error));
			 this.alertctrl.create({
			   title:"Error",
			   message: error.json().error,
				 buttons:[{
					 
					 text: 'OK'}] 
		   }).present();
			 });
        });
		/*	
			
			
			
			
			/*
			this.http.post(mailurl, {from: "Mailgun Sandbox <postmaster@sandbox06511f1efd644835b6bea3453303b826.mailgun.org>", to: "Sahaj Arora <sahajarora1286@gmail.com", 
			subject: currentUser.username + ": Shift Report: " + this.Submit.StartTime + " - " + this.Submit.EndTime,
		 text: this.Submit.Report},
			 {headers: mailHeaders}).map(res => res.json()).subscribe(res =>{
				this.alertctrl.create({
			   title:"Submitted",
				 buttons:[{
					 
					 text: 'OK',
        				handler: () => {
               		 this.navCtrl.setRoot(ShiftRPage);
					 
				 }}] 
		   }).present();
			 }, err =>{
				 console.log(err);
				 this.alertctrl.create({
			   title:"Error",
			   message: err.json().error,
				 buttons:[{
					 
					 text: 'OK'}] 
		   }).present();
			 });
			 */
  
	   
	   
   }
  

getfinishedtask(){
	var me=this;
   var user= Parse.User.current();
  var relation= user.relation("tasks")
  var query= relation.query().find({
     success : function(results){
    me.gettasks = results;
     console.log(this.gettasks);
     



 



	 }
	  
  })   

}








   
/*
update(){

  
 


  
  this.url2= 'http://173.35.92.227:8020/sprott/classes/tasks?where={"objectId":"'+this.ObjId+'"}'; 
	    this.http.get(this.url2,{headers:this.headers}).map(res => res.json()).subscribe(res =>{
		 console.log(res);
        
				
				 this.Pendings= res.results;		 
              
                  console.log("pending log"+this.Pendings);
	                 
              



	});


/*
         
          var me = this;  ;
	 var id = Parse.Object.extend("Task");
         var query = new Parse.Query(id);
         query.equalTo("objectId",me.ObjId) ;
          
         query.find({
  success: function(res) {
    // Successfully retrieved the object.
    this.Pendings = res.results;  
   



    console.log("this is the pendin log"+this.Pendings);

 
    
   


},
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
}
*/





}
