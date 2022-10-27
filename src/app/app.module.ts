import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchforflightsComponent } from './Search/searchforflights/searchforflights.component';
import { ViewflightsComponent } from './Search/viewflights/viewflights.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { BookTicketComponent } from './Booking/book-ticket/book-ticket.component';
import { ConfirmTicketComponent } from './Booking/confirm-ticket/confirm-ticket.component';
import { MakePaymentComponent } from './Booking/make-payment/make-payment.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { MyCustomDatePipePipe } from './pipes/my-custom-date-pipe.pipe';
import { MatButtonModule } from '@angular/material/button';
import { SideNavComponent } from './Search/side-nav/side-nav.component';
import { RSideNavComponent } from './Search/r-side-nav/r-side-nav.component'
import { LandingPageComponent } from './Search/landing-page/landing-page.component';
import { ExComponentsComponent } from './Search/ex-components/ex-components.component';
import { FilterComponentComponent } from './Search/results/filter-component/filter-component.component';
import { FlightblockComponent } from './Search/results/flightblock/flightblock.component';
import { MainLandingComponent } from './Search/main-landing/main-landing.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchforflightsComponent,
    ViewflightsComponent,
    BookTicketComponent,
    ConfirmTicketComponent,
    MakePaymentComponent,
    HeaderComponent,
    FooterComponent,
    MyCustomDatePipePipe,
    SideNavComponent,
    RSideNavComponent,
    LandingPageComponent,
    ExComponentsComponent,
    FilterComponentComponent,
    FlightblockComponent,
    MainLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    DatePipe,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
