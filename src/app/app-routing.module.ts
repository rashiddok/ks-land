import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',

    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./views/about/about.module').then(m=>m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./views/contact/contact.module').then(m=>m.ContactModule)
  },
  {
    path: 'projects/:project',
    loadChildren: () => import('./views/project/project.module').then(m=>m.ProjectModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
