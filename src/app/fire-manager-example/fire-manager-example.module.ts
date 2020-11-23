import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap/collapse/collapse.module';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap/progressbar/progressbar.module';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { FireManagerModule } from '@ngx-fire-uploader/manager';

import { FireManagerExampleComponent } from './fire-manager-example/fire-manager-example.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule.forRoot(),
    NgbCollapseModule,
    NgbProgressbarModule.forRoot(),
    SimpleNotificationsModule,
    FireManagerModule.forRoot({
      extensions: {
        pdf: 'url("assets/pdf.svg")',
        doc: '#335599'
      }
    }),
    RouterModule.forChild([
      {
        path: '',
        component: FireManagerExampleComponent
      }
    ])
  ],
  declarations: [FireManagerExampleComponent]
})
export class FireManagerExampleModule { }