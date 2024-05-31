import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICity, ICountry, ISelectVal, IState } from '../interface';

import { state } from '@angular/animations';
interface City {
  id: number;
  name: string;
}

interface State {
  id: number;
  name: string;
  flag: string;
  cities: City[];
}

@Component({
  selector: 'app-cascada-select',
  templateUrl: './cascada-select.component.html',
  styleUrls: ['./cascada-select.component.scss'],
})
export class CascadaSelectComponent {
  btn: string = ' Select a City ';
  isActive: boolean = false;
  isSame: any | undefined;

  countries: { id: number; name: string; flag: string }[] = [
    {
      id: 1,
      name: 'USA',
      flag: 'https://flagpedia.net/data/flags/w702/us.webp',
    },
    {
      id: 2,
      name: 'Canada',
      flag: 'https://flagpedia.net/data/flags/w702/ca.webp',
    },
    {
      id: 3,
      name: 'UK',
      flag: 'https://flagpedia.net/data/flags/w702/gb.webp',
    },
    {
      id: 4,
      name: 'Poland',
      flag: 'https://flagpedia.net/data/flags/w702/pl.webp',
    },
  ];

  statesAndCities: State[][] = [
    // USA
    [
      {
        id: 1,
        name: 'California',
        flag: 'https://flagpedia.net/data/us/w702/ca.webp',
        cities: [
          { id: 1, name: 'Los Angeles' },
          { id: 2, name: 'San Francisco' },
          { id: 3, name: 'San Diego' },
        ],
      },
      {
        id: 2,
        flag: 'https://flagpedia.net/data/us/w702/ny.webp',
        name: 'New York',
        cities: [
          { id: 3, name: 'New York City' },
          { id: 4, name: 'Buffalo' },
          { id: 5, name: 'Tioga' },
        ],
      },
      // Add more states and cities as needed...
    ],
    // Canada
    [
      {
        id: 5,
        flag: 'https://cdn.britannica.com/25/3225-004-EB60D413/Flag-Ontario.jpg',
        name: 'Ontario',
        cities: [
          { id: 5, name: 'Toronto' },
          { id: 6, name: 'Ottawa' },
        ],
      },
      {
        id: 6,
        flag: 'https://cdn.britannica.com/72/3672-004-46FACC65/Flag-Quebec.jpg',
        name: 'Quebec',
        cities: [
          { id: 7, name: 'Montreal' },
          { id: 8, name: 'Quebec City' },
        ],
      },
      // Add more states and cities as needed...
    ],
    // UK
    [
      {
        id: 9,
        flag: 'https://flagpedia.net/data/flags/w702/gb.webp',
        name: 'England',
        cities: [
          { id: 9, name: 'London' },
          { id: 10, name: 'Manchester' },
        ],
      },
      {
        id: 10,
        flag: 'https://flagpedia.net/data/flags/w702/gb-sct.webp',
        name: 'Scotland',
        cities: [
          { id: 11, name: 'Edinburgh' },
          { id: 12, name: 'Glasgow' },
        ],
      },
      // Add more states and cities as needed...
    ],
    // Poland
    [
      {
        id: 11,
        flag: 'https://iflagi.pl/environment/cache/images/500_500_productGfx_5031/flaga-woj-mazowieckie.jpg',
        name: 'Mazowieckie',
        cities: [
          { id: 13, name: 'Warsaw' },
          { id: 14, name: 'Radom' },
        ],
      },
      {
        id: 12,
        flag: 'https://studioflag.pl/839-large_default/flaga-wojewodztwa-malopolskiego-z-herbem-100x60cm.webp',
        name: 'Malopolskie',
        cities: [
          { id: 15, name: 'Krakow' },
          { id: 16, name: 'Tarnow' },
        ],
      },
      // Add more states and cities as needed...

      {
        id: 12,
        flag: 'https://studioflag.pl/940-large_default/flaga-wojewodztwa-lubuskiego-z-herbem-100x60cm.webp',
        name: 'Lubuskie',
        cities: [
          { id: 15, name: 'Gorzów Wielkopolski	' },
          { id: 16, name: 'Zielona Gora' },
        ],
      },
    ],
  ];

  selectedState: { id: number; name: string; flag: string; cities: City[] }[] =
    [];

  selectState(id: number) {
    this.isSame = id;
    const countryIndex = this.countries.findIndex(
      (country) => country.id === id
    );
    if (countryIndex !== -1) {
      this.selectedState = this.statesAndCities[countryIndex];
      this.selectedCities = [];
    } else {
      console.error('Country not found!');
    }
  }

  selectedCities: any[] = [];

  selectCities(item: any) {
    this.isSame = item.id;
    console.log(item.cities);
    this.selectedCities = item.cities;
  }

  selectName(item: any) {
    console.log(item.name);
    this.btn = item.name;
    this.isActive = false;
    this.selectedCities = [];
  }

  addActive() {
    this.isActive = !this.isActive;
    this.selectedState = [];
  }
}
