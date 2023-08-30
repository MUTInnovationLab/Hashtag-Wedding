import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


// const routes: Routes = [
//   {
//     path: 'home',
//     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
//   },
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
//   },
//   {
//     path: 'register',
//     loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
//   },
//   {
//     path: 'login',
//     loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
//   },
//   {
//     path: 'profile',
//     loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
//   },
//   {
//     path: 'edit',
//     loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
//   },
//   {
//     path: 'view-profile',
//     loadChildren: () => import('./view-profile/view-profile.module').then( m => m.ViewProfilePageModule)
//   },
//   {
//     path: 'edit-profile',
//     loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
//   },


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./view-profile/view-profile.module').then( m => m.ViewProfilePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'view-profile',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
 
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },

 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
