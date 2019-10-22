import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'microapp1';

  displayMessage (evt) {
    console.log("Receiving message from Mural Shell");
    console.log(evt);
    var message;
    /*
    if (evt.origin !== "https://robertnyman.com") {
      message = "You are not worthy";
    } 
    else { */
      message = "I got " + evt.data + " from " + evt.origin;
    //}
    document.getElementById("message-div").innerHTML = message;
    this.title = evt.data;
  }
  
  ngOnInit() {
    console.log("In ngonit of appComponents.ts of microapp1");
    if (window.addEventListener) {
      // For standards-compliant web browsers
      window.addEventListener("message", this.displayMessage, false);
    }
    /*
    else {
      window.attachEvent("onmessage", displayMessage);
    } */
  }
}
