import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loginpage',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path:'product',
    loadChildren: () => import('./product/product.component').then( m => m.ProductModule)

  },
  
  {
    path: 'hospital',
    loadChildren: () => import('./pages/hospital/hospital.module').then( m => m.HospitalPageModule)
  },
  {
    path: 'hospitalinfo',
    loadChildren: () => import('./pages/hospitalinfo/hospitalinfo.module').then( m => m.HospitalinfoPageModule)
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: 'templatedrivenform',
    loadChildren: () => import('./templatedrivenform/templatedrivenform.module').then( m => m.TemplatedrivenformPageModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./pages/task/task.module').then( m => m.TaskPageModule)
  },
  {
    path: 'camera-plugin',
    loadChildren: () => import('./pages/camera-plugin/camera-plugin.module').then( m => m.CameraPluginPageModule)
  },
  {
    path: 'menupage',
    loadChildren: () => import('./pages/menupage/menupage.module').then( m => m.MenupagePageModule)
  },
  {
    path: 'browser',
    loadChildren: () => import('./pages/browser/browser.module').then( m => m.BrowserPageModule)
  },
  {
    path: 'device',
    loadChildren: () => import('./pages/device/device.module').then( m => m.DevicePageModule)
  },
  {
    path: 'email',
    loadChildren: () => import('./pages/email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'file-transfer',
    loadChildren: () => import('./pages/file-transfer/file-transfer.module').then( m => m.FileTransferPageModule)
  },
  {
    path: 'push',
    loadChildren: () => import('./pages/push/push.module').then( m => m.PushPageModule)
  },
  {
    path: 'infinatescroll',
    loadChildren: () => import('./infinatescroll/infinatescroll.module').then( m => m.InfinatescrollPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
