import { Component } from '@angular/core';
import { RestService } from './service/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Star Wars';
  
  constructor(public restProvider: RestService) {
    
  }
  
  vaders: any;
  lukes: any;
  
  ngOnInit() {
    this.getVader();
    this.getLuke();
  }
  
  getVader() {
    this.restProvider.getVader().then(data => {
      this.vaders  = data;
      console.log(this.vaders);
    });
  }
  
  getLuke() {
    this.restProvider.getLuke().then(data => {
      this.lukes = data;
      console.log(this.lukes);
    });
  }
  
}
