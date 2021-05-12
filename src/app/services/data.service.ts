import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  estadoS:number = 1;
  numOponentS:number = 0;
  gano:string = "";

  constructor() { }
  
}
