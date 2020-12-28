import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items: any=[];

  constructor() { 
  this.items = [
    {title: "Kelantan"},
    {title: "Terengganu"},
    {title: "Selangor"},
    {title: "Perak"},
    {title: "Kuala Lumpur"},
  ];
}

filterItems(searchTerm) {
  return this.items.filter(item => {
    return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  });
}
}