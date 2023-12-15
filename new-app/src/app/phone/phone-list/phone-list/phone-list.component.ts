import {Component, OnInit} from '@angular/core';
import {PhoneService} from "../../phone.service";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ]
})
export class PhoneListComponent implements OnInit {
  phones: any[] = [];
  orderProp: string = 'age';
  query: string = '';

  constructor(private phoneService: PhoneService) {
  }

  ngOnInit(): void {
    this.phoneService.getAll().subscribe(response => {
      this.phones = response;
    });
  }
}

