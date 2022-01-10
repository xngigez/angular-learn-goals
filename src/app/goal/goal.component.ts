// OnInit - a lifecycle hook called each time the component is created.
import { Component, OnInit } from '@angular/core';

// Import Goal class.
import {Goal01} from "../goal01";

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'], // External styling
  styles: ['h6 {color: red} '] // Component metadata styling
})
export class GoalComponent implements OnInit {

  // v01
  // goalsObjects:Goal01[] = [
  //   {id:1, name:'Watch finding Nemo',description:'Find an online version and watch merlin find his son'},
  //   {id:2,name:'Buy Cookies',description:'I have to buy cookies for the parrot'},
  //   {id:3,name:'Get new Phone Case',description:'Diana has her birthday coming up soon'},
  //   {id:4,name:'Get Dog Food',description:'Pupper likes expensive sancks'},
  //   {id:5,name:'Solve math homework',description:'Damn Math'},
  //   {id:6,name:'Plot my world domination plan',description:'Cause I am an evil overlord'},
  // ];

  goalsObjects: Goal01[] = [
    new Goal01(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date(2022,1,9)),
    new Goal01(2,'Buy Cookies','I have to buy cookies for the parrot', new Date(2019,6,9)),
    new Goal01(3,'Get new Phone Case','Diana has her birthday coming up soon', new Date(2019,6,9)),
    new Goal01(4,'Get Dog Food','Pupper likes expensive snacks', new Date(2019,6,9)),
    new Goal01(5,'Solve math homework','Damn Math', new Date(2019,6,9)),
    new Goal01(6,'Plot my world domination plan','Cause I am an evil overlord', new Date(2019,6,9)),
  ];

  /*
   * Methods
   */
  toggleDetails(index: number){
    this.goalsObjects[index].showDescription = !this.goalsObjects[index].showDescription;
  }
  completeGoal(isComplete: boolean, index: number){
    if (isComplete) {
      this.goalsObjects.splice(index,1);
    }
  }
  deleteGoal(isComplete: boolean, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goalsObjects[index].name}?`)

      if (toDelete){
        this.goalsObjects.splice(index,1)
      }
    }
  }

  addNewGoal(goal: Goal01){
    let goalLength = this.goalsObjects.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goalsObjects.push(goal)
  }

  constructor() { }

  ngOnInit(): void {
  }
}
