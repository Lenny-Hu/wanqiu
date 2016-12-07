import {Component} from '@angular/core';

@Component({
  selector: 'wq-header',
  template: require('./header.template.html')
})
export class HeaderComponent {
  constructor() {
    this.header = '我是头部啊。。。';
  }
}
