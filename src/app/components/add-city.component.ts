import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Http, HttpModule} from '@angular/http';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})


export class AddCityComponent implements OnInit {
  private static APPID = '2765e1be7926a66d3d64132e2164612f';

  @ViewChild('weatherForm') weatherForm: NgForm;

  weatherOfCities = [];

  // injection
  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  getWeather() {
    const cityName = this.weatherForm.value.cityName;
    console.log('city: %d', cityName);

    this.http.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: cityName,
        appid: AddCityComponent.APPID
      }
    }).subscribe(result => {
        this.weatherOfCities = result.json().weather;
        console.log('weather = ', this.weatherOfCities);
      },
      error => {
      });
  }
}

export interface WeatherData {
  id: number;
  main: string;
  description: string;
  icon: string;

}
