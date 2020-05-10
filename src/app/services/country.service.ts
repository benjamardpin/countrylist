import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Country } from '../models/country';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url = environment.apiUrl
  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.url}/all`)
  }
}
