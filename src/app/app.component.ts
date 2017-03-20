import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import Parse from 'parse';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { ShiftRPage } from '../pages/shift-r/shift-r';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage ;

  constructor(platform: Platform) {
    
	
 
	  Parse.initialize("AppId1");
      Parse.serverURL= "http://192.168.0.21:8020/sprott";

      var current=Parse.User.current();
	  
	  if(current){
		  
		  this.rootPage=ShiftRPage;
		  
	  }else{
		  
		   this.rootPage=HomePage;
	  }
	
	
	
	platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     

   

     
	 StatusBar.styleDefault();
      Splashscreen.hide();

     

	  });
  }
}
