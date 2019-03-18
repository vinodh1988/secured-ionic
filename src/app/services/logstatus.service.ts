import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogstatusService {

  constructor() { 

  }

  getStatus(){
     if(localStorage.getItem("access_token"))
        return true;
      return false;
  }
}
