import { Directive, Input, Output, EventEmitter } from '../forks/angular-datetime-picker/node_modules/@angular/core/core';

// libs
import { BaseComponent } from '@multi/xplat/core';

@Directive()
export abstract class HeaderBaseComponent extends BaseComponent {
  /**
   * These are just samples to give you an idea of what can be done.
   * Change, remove and customize however you'd like!
   */
  @Input() title?: string;
  @Input() rightButton?: string;
  @Output() tappedRight: EventEmitter<boolean> = new EventEmitter();
}
