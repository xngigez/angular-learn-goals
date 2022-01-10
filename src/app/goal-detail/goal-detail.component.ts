/* Core library Imports
 * OnInit - a lifecycle hook called each time the component is created.
 * Input - library allows us to do Input property binding.
 * Output, EventEmitter - libraries allows us to get data from child components
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

/*
 * Custom imports
 */
// Import goal01 class.
import {Goal01} from "../goal01";

// Decorator
@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  /*
   * Input property binding - will received goal data from a parent component
   */
  // v01 - does not work, undefined problem.
  // @Input() goal: Goal01;
  // Solution
  // @Input() goal: Goal01 = <Goal01>{};

  // Decorators
  @Input()  goal!: Goal01;

  // Emit isComplete event.
  // Define an eventEmitter that takes a boolean
  @Output() isComplete = new EventEmitter<boolean>();
  goalComplete(complete:boolean){
    this.isComplete.emit(complete); // Send a broadcast
  }
  goalDelete(complete:boolean){
    this.isComplete.emit(complete); // Send a broadcast
  }


  constructor() { }

  ngOnInit(): void {
  }
}
