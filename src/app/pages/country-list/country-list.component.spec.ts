import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryListComponent } from './country-list.component';
import { CountryService } from 'src/app/services/country.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Country } from 'src/app/models/country';
import { of } from 'rxjs/internal/observable/of';
import { SearchPipe } from './search.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { throwError } from 'rxjs';

describe('CountryListComponent', () => {
  let component: CountryListComponent;
  let fixture: ComponentFixture<CountryListComponent>;
  let countryService: CountryService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
      declarations: [ CountryListComponent, SearchPipe ],
      providers: [
        {
          provide: CountryService, useValue: {
            getCountries: () => of([
              {
                name: "Afghanistan",
                region: "Europe",
                population: 28875,
                latlng: [
                  60.116667,
                  19.9
                ],
                area: 1580.0,
                subregion: "Northern Europe",
                nativeName: "Åland"
              },
              {
                name: "Albania",
                region: "Europe",
                population: 2886026,
                latlng: [
                  41.0,
                  20.0
                ],
                area: 28748.0,
                subregion: "Southern Europe",
                nativeName: "ShqipëriaShqipëria"
              }
            ])
          }
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListComponent);
    component = fixture.componentInstance;
    countryService = TestBed.get(CountryService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load country list', () => {
    spyOn(countryService, 'getCountries')
    .and
    .callThrough();
    component.ngOnInit();
    expect(countryService.getCountries).toHaveBeenCalled();
    const countries: Country[] = [
      {
        name: "Afghanistan",
        region: "Europe",
        population: 28875,
        latlng: [
          60.116667,
          19.9
        ],
        area: 1580.0,
        subregion: "Northern Europe",
        nativeName: "Åland"
      },
      {
        name: "Albania",
        region: "Europe",
        population: 2886026,
        latlng: [
          41.0,
          20.0
        ],
        area: 28748.0,
        subregion: "Southern Europe",
        nativeName: "ShqipëriaShqipëria"
      }
    ]
    expect(component.countries).toEqual(countries)
    expect(component.countries.length).toEqual(2)
  })
});
