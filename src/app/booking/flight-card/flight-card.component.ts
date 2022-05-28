import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CityPipe } from "@demo/shared";
import { Flight, initFlight } from "@demo/data";
import { CdkMenuModule } from '@angular/cdk/menu';
import { Dialog } from '@angular/cdk/dialog';
import { NextFlightComponent } from "src/app/next-flight/next-flight.component";
import { DetailComponent } from "../detail/detail.component";

@Component({
  standalone: true,
  selector: 'flight-card',
  imports: [
    CommonModule, 
    RouterModule, 
    CityPipe,
    CdkMenuModule
  ],
  templateUrl: './flight-card.component.html',
})
export class FlightCardComponent {
  
  @Input() item: Flight = initFlight;
  @Input() selected: boolean | undefined;
  @Output() selectedChange = new EventEmitter<boolean>();
  @Input() showEditButton = true;

  constructor(private dialog: Dialog) {
  }

  select() {
    this.selected = true;
    this.selectedChange.next(true);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(false);
  }

  showDetail() {
    // open<boolean>

    const detailDialog = this.dialog.open<boolean>(DetailComponent, {
      data: { flight: this.item }
    });

    detailDialog.closed.subscribe(result => {
      console.log('closed', result);
    });

  }
}
