import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Goal01} from "../goal01";

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  newGoal = new Goal01(0, "", "", new Date())

  /*
   * Broadcast data to parent component.
   */
  @Output() addGoal = new EventEmitter<Goal01>();
  submitGoal(){
    this.addGoal.emit(this.newGoal);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
