import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myfirstproj';
  ngOnInit(): void {
    const items = [
      {'name':'Bike', 'price':100},
      {'name':'TV', 'price':200},
      {'name':'Album', 'price':10},
      {'name':'Book', 'price':5},
      {'name':'Phone', 'price':500},
      {'name':'Computer', 'price':1000},
      {'name':'Keyboard', 'price':25},
      ];

      
  }
}
