import {Component} from '@angular/core';
import {appConfig} from '../app.config';

@Component({
  selector: 'wq-footer',
  template: require('./footer.template.html')
})
export class FooterComponent {
  constructor() {
    this.appConfig = appConfig;
  }
}
