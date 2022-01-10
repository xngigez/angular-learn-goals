/* Module that is the entry point for Angular application.
 * Declare all the components and modules that we are going to use in our application here.
 */

/*
 * Imports core
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Forms module need to be imported to be used.
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


/*
 * Other imports
 */
// Main Component, entry point.
import { AppComponent } from './app.component';

import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';



/*
 * @NgModule Decorator - a decorator function that identifies the AppModule as an ngModule class, takes metadata objects whose properties describe the module tells Angular how to run the application..
 * Decorators are functions that modify JavaScript classes. Used for attaching metadata to classes so that, it knows the
 * configuration of those classes and how they should work.
 */
@NgModule({
  /* declarations
   * The classes that are related to views and belong to this module.
   * There are three classes of Angular that can contain view: components, directives, and pipes.
   */
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent
  ],
  //  imports - Contains Modules whose classes are needed by the component of this module.
  imports: [
    BrowserModule,
    AppRoutingModule, // Angular routing module
    FormsModule // To interact with html forms
  ],
  /* providers - Contains Services present in one of the modules which are to be used in the other modules or components
   *            - register the different services needed by our application..
   */
  providers: [],
  /* The root component which is the main view of the application.
   * This root module only has this property and it indicates the component that is to be bootstrapped.
   */
  bootstrap: [AppComponent] // launch the application
})

// Exports the entire module as AppModule
export class AppModule { }
