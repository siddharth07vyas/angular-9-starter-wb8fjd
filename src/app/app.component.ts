import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  constructor(private httpClient: HttpClient) {}
  fetch() {
    this.httpClient
      .get('./assets/base.xls', { responseType: 'text' })
      .subscribe(x => {
        console.log(x);
      });
  }
}
