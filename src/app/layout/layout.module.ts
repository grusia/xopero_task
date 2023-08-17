import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ClassicComponent } from './layouts/classic/classic.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@shared/shared.module';
import { ThemeEmitterComponent } from './common/theme-emitter/theme-emitter.component';



@NgModule({
  declarations: [
    LayoutComponent,
    ClassicComponent,
    ThemeEmitterComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    RouterLink,
    MatSidenavModule,
    MatButtonModule,
    SharedModule
  ]
})
export class LayoutModule { }
