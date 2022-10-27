import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Flight } from 'src/app/models/Flight';
import { SearchServiceService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-viewflights',
  templateUrl: './viewflights.component.html',
  styleUrls: ['./viewflights.component.css']
})
export class ViewflightsComponent implements OnInit {

  constructor(private service:SearchServiceService) { }
  FilteredFlights:Flight[]=[]
  ngOnInit(): void {
  }
}
