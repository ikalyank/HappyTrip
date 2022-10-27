import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { Passengertype } from 'src/app/models/passengertype';
import { Travelclass } from 'src/app/models/travelclass';
import { Traveldirection } from 'src/app/models/traveldirection';
import { SearchServiceService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-searchforflights',
  templateUrl: './searchforflights.component.html',
  styleUrls: ['./searchforflights.component.css']
})
export class SearchforflightsComponent implements OnInit {
  
  constructor(private SearchService:SearchServiceService,private router:Router) { 
  }

  cities:City[]=[]
  travelClass=Object.values(Travelclass)
  PassengerType=Object.values(Passengertype)
  travelDirection=Object.values(Traveldirection)
  //
  selectedTrip=""
  selectedFromAirport=""
  selectedToAirport=""
  passengerType=""
  departureDate:Date|any;
  returnDate:any

  ngOnInit(): void {
    this.SearchService.getCities().subscribe(response=>{
      this.cities=response
      // console.log(this.cities)
    })
  }

  logData(){
    console.log("Type Of Trip : "+this.selectedTrip)
    console.log("From City : "+this.selectedFromAirport)
    console.log("To City : "+this.selectedToAirport)
    console.log("Passenger Type : "+this.passengerType)
    console.log("Departure Date : "+this.departureDate )
    console.log("Return Date : "+this.returnDate)
    console.log("Formatted From Date : "+this.DateConvertor(this.departureDate))
    console.log("Formatted Return Date :" + this.DateConvertor(this.returnDate));
    // console.log("qqq"+this.pip.transform(this.departureDate))
  }

  FilterAirports(e:any)
  {
    this.cities.find(x => x?.airport_name === e.target.value);
  }

  DateConvertor(passeddate:Date):string{
    var dd = String(passeddate.getDate()). padStart(2, '0');
    var mm = String(passeddate.getMonth() + 1). padStart(2, '0'); //January is 0!
    var yyyy = passeddate. getFullYear();
    const finalFormatedDate = mm + '/' + dd + '/' + yyyy;
    return finalFormatedDate;
  }

  searchFlights()
  {
    sessionStorage.setItem('From',this.selectedFromAirport);
    sessionStorage.setItem('To',this.selectedToAirport);
    sessionStorage.setItem('DepartureDate',this.DateConvertor(this.departureDate));
    this.router.navigateByUrl("/flightResults");
    console.log("Saved")
  }

  }

