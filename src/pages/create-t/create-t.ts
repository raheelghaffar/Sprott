import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController} from 'ionic-angular';
import { task} from '../../task';
import Parse from 'parse';
import {TasklistPage} from '../tasklist/tasklist';
import { User} from '../../modal/';


/*
  Generated class for the CreateT page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-t',
  templateUrl: 'create-t.html'
})
export class CreateTPage {

   Submit : task={
	  
	client: "",
	room: "",
	task: ""
	
   };
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertctrl: AlertController ) {
  


  }

  

  add(){
  var Task = Parse.Object.extend("tasklist");
var   task = new (Task);
var me=this;
task.set("client", this.Submit.client);
task.set("room", this.Submit.room);
task.set("task", this.Submit.task);

task.save(null, {
  success: function(result) {
    // Execute any logic that should take place after the object is saved.
    me.alertctrl.create({
			   title:"Shift Report has been submitted in GSO email as well",
				 buttons:[{
					 
					 text: 'OK',
	          	handler: () => {
               		 me.navCtrl.setRoot(TasklistPage);
					 
				 }
        		}] 
		   }).present();
  },
  error: function(task, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  }
});


  }


gotolist(){
  
var me =this;

me.navCtrl.push(TasklistPage);

}

}
