import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController} from 'ionic-angular';
import { task} from '../../task';
import Parse from 'parse';
import { User} from '../../modal/';


/*
  Generated class for the Tasklist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html'
})
export class TasklistPage {


  lists : any[];
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  var me=this;
   me.getlist();

  }

  
getlist(){
    var me =this;
 //  var GameScore = Parse.Object.extend();
var query = new Parse.Query("tasklist");
//query.equalTo("playerName", "Dan Stemkoski");  
 
query.find().then(function(res) {
         
      
      
         me.lists=res;            
         console.log(me.lists);
  
}
);


}
  
save(tasktoadd){
   var me = this;
 var user=Parse.User.current();
 
var relation = user.relation("tasks")
    relation.add(tasktoadd)
    user.save();



    //alert('New object created with objectId: ' + gameScore.id);
  

}
      

     


  


}





 