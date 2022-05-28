import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Flight } from '@demo/data';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private ref: DialogRef, @Inject(DIALOG_DATA) public flight: Flight) { }

  ngOnInit(): void {
  }

  close() {
    this.ref.close(true);
  }

  cancel() {
    this.ref.close(false);
  }

}
