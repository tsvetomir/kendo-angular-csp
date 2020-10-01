import { Component } from '@angular/core';
import { customers } from './customers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public gridData: any[] = customers;
}
