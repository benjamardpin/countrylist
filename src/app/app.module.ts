import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { CountryItemComponent } from './components/country-item/country-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
