/*
 * Imports; modules
 * Directive library -
 * ElementRef - Inject a reference to the host DOM element.
 * HostListener - Define the events that will be initiated by user actions
 */
import {Directive, ElementRef, HostListener} from '@angular/core';

// Decorator
@Directive({
  /*
   * selector - Identifies custom name where the directive will be installed, when Angular renders the page on the browser.
   * [] makes it an attribute directive
   */
  selector: '[appStrikethrough]'
})

// Exports the entire module as StrikethroughDirective class
export class StrikethroughDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.textDecoration = 'line-through';
  }

  @HostListener("click") onClicks() {
    this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClicks() {
    this.textDeco("None")
  }

  private textDeco(action: string) {
    this.elem.nativeElement.style.textDecoration = action;
  }
}
