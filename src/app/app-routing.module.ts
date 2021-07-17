import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllAnimalsComponent} from "./all-animals/all-animals.component";

const routes: Routes = [
  {path: '', redirectTo: 'all-animals', pathMatch: 'full'},
  {path: 'all-animals', component: AllAnimalsComponent, data: {animation: 'HomePage'}},
  {
    path: 'custom-animals',
    loadChildren: () => import('./custom-animals/custom-animals.module').then(m => m.CustomAnimalsModule),
    data: {animation: 'AboutPage'}
  },
  {path: '**', redirectTo: 'all-animals'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
