import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[selectItem]'
})
export class SelectItemDirective {
  @Input() set selectItem (selected: boolean) {
    if (selected) {
      this.element.nativeElement.classList.add('selected-item');
    } else {
      this.element.nativeElement.classList.remove('selected-item');
    }
  };

  constructor (
    private element: ElementRef
  ) {
  }

}
