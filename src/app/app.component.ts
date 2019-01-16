import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'Changed Title';
  
  myText:string 
  
  isHidden = true
  Bob = "Bob"
  myInput:string 
  
  isAdmin = false

  isBlue = true
  isClass2 = true
  isClass3 = true
  currentClasses = {};
  doublyBindedText:string='Default Vlaue'
  
  myList = []
  
  checkifAdmin(){
    //LOGIC
    //If success 
    this.isAdmin = true
  }

  ngOnInit(){
    this.setCurrentClasses()
    this.myList = [1,2,3,400,500,6,7,85,4,3,3]
    this.myText = 'Here\'s my text'
  }

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      'blue': this.isBlue,
      'class2': this.isClass2,
      'class3':  this.isClass3
    };
  }


  toggleBlue(){
    if (this.isBlue == true)
      this.isBlue = false
    else
      this.isBlue = true

    this.setCurrentClasses()
  }

  toggle2(){
    if (this.isClass2 == true)
      this.isClass2 = false
    else
      this.isClass2 = true
    this.setCurrentClasses()
  }

  toggle3(){
    if (this.isClass3 == true)
      this.isClass3 = false
    else
      this.isClass3 = true
      this.setCurrentClasses()
  }

  toggleHidden(){
    if (this.isHidden == true)
      this.isHidden = false
    else
      this.isHidden = true
  }

  someoneTyped(whateverrrr){
    console.log(whateverrrr)
    this.myInput = whateverrrr
  }
}
