import { Component, Input, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/Flight';
import { SearchServiceService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-flightblock',
  templateUrl: './flightblock.component.html',
  styleUrls: ['./flightblock.component.css']
})
export class FlightblockComponent implements OnInit {

  constructor(private service:SearchServiceService) { }

  FilteredFlights:Flight[]=[]

   ngOnInit():void {
    this.service.getFlights().subscribe(response => {
      this.FilteredFlights = response;
      console.log("from component" + this.FilteredFlights);
    })
  }
}
