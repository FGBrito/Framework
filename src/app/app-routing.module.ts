import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    children:[
      {path: 'postagens', loadChildren: () => import('./pages/postagens/postagens.module').then(m => m.PostagensModule)},
      {path: 'albuns', loadChildren: () => import('./pages/albuns/albuns.module').then(m => m.AlbunsModule)},
      {path: 'to_do', loadChildren: () => import('./pages/to-dos/to-dos.module').then(m => m.ToDosModule)},
      {path: '', pathMatch: 'full', redirectTo: 'postagens'},
      {path: '**', redirectTo: '404'},
      {path: '404', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
