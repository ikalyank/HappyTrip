import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Flight } from '../models/Flight';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private httpClient:HttpClient) { }

  getCities():Observable<City[]>{
    return this.httpClient.get<City[]>("http://localhost:3000/airports");
  }

  getFlights():Observable<Flight[]>
  {
    return this.httpClient.get<Flight[]>("http://localhost:3000/flights");
  }
  
}
