import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ThemeEmitterService } from './theme-emitter.service';

@Component({
  selector: 'theme-emitter',
  template: `
    <div class="theme-emitter-wrapper">
      <div #primaryEmitter class='primary'></div>
      <div #accentEmitter class='accent'></div>
      <div #warnEmitter class='warn'></div>
    </div>
  `,
  styleUrls: ['./theme-emitter.component.scss']
})
export class ThemeEmitterComponent implements AfterViewInit {

  @ViewChild('primaryEmitter') primaryElement: ElementRef;
  @ViewChild('accentEmitter') accentElement: ElementRef;
  @ViewChild('warnEmitter') warnElement: ElementRef;

  constructor (
    private service:  ThemeEmitterService
  ) { }

  ngAfterViewInit (): void {
    this.service.primaryColor =
      getComputedStyle(this.primaryElement.nativeElement).color;
    this.service.accentColor =
      getComputedStyle(this.accentElement.nativeElement).color;
    this.service.warnColor =
      getComputedStyle(this.primaryElement.nativeElement).color;
  }

}
