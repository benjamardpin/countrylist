import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    component: CountryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
