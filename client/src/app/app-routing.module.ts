import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'auth',  loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)  },
  { path: '',  loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
