import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchPipe } from './pages/country-list/search.pipe';
import { MatInputModule } from '@angular/material/input'
import { CountryService } from './services/country.service';
@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent],
  exports: [MatFormFieldModule, MatInputModule]
})
export class AppModule { }
