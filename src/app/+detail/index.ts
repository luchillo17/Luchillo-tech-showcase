import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Detail } from './detail.component';

console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: '', component: Detail, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Detail
  ],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export default class AboutModule {
  static routes = routes;
}
