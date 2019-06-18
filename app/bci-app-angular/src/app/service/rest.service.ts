import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService { 
  apiUrl = 'http://localhost:9990/api/characters/';
  constructor(private http: HttpClient) {  }
  


  getVader() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'darth-vader').subscribe(data => {
        resolve(data);
      },
      err => {
        console.log(err);
      });
    });
  }

  getLuke() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'luke').subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        });
    });
  }
  
  
  
  
  
  
}
