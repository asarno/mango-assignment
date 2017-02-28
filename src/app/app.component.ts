import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DataService]
})

export class AppComponent implements OnInit {
  countries = [];
  columns = [
    {
      title: 'COUNTRY-NAME',
      variable: 'name',
    },
    {
      title: 'SYMBOL',
      variable: 'code',
    },

  ];

  reverseOrder() {
    this.countries = this.countries.reverse().slice(0);
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      data => this.countries = data
    )
  }

}

