import { Component } from '@angular/core';

// Import Goal class.
import {Goal} from "./goal";

/*
 * Component - controls one or more sections on the screen called a view, has the files
 *  app.component.ts - entry point for the app component.
 *  app.component.specs.ts - will have all the test code for the app component.
 *  app.component.css - Contains CSS styles that can only be applied to the app component.
 *  app.component.html - Contains the HTML template code for the App Component.
 */

/*
 * @Component Decorator - tells Angular that the file is a component.
 */
@Component({
  //@Component Decorator properties;
  selector: 'app-root', // 1. Identifies a custom HTML tag where the component will be installed, when Angular renders the page on the browser.
  templateUrl: './app.component.html', // 2. Loads HTML template file for the component
  styleUrls: ['./app.component.css'] // 3. Loads css file for the component.
})

// Exports the entire Component as AppComponent
export class AppComponent {
  goal = 'Watch Finding Nemo'; // Variable only accessible within app.component.html
  goals = ["Watch Finding Nemo", "Buy Cookies", "Get new phone case"] // or
  // goals:string[];
  // constructor() {
  //   this.goals = ["Watch Finding Nemo", "Buy Cookies", "Get new phone case"]
  // }

  // Array of Goal objects
  goalsObjects:Goal[] = [
    {id:1, name:'Watch finding Nemo'},
    {id:2,name:'Buy Cookies'},
    {id:3,name:'Get new Phone Case'},
    {id:4,name:'Get Dog Food'},
    {id:5,name:'Solve math homework'},
    {id:6,name:'Plot my world domination plan'},
  ];
}
