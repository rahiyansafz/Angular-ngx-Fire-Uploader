import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './fire-photo-example/fire-photo-example.module#FirePhotoExampleModule',
    pathMatch: 'full'
  },
  {
    path: 'multiple-files-upload',
    loadChildren: './fire-manager-example/fire-manager-example.module#FireManagerExampleModule',
  }
];
