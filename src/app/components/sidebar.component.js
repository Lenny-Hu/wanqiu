import {Component, Output} from '@angular/core';

@Component({
  selector: 'sidebar',
  template: require('./sidebar.template.html')
})
export class SidebarComponent {
  constructor() {
    this.navs = [
      {
        name: '新闻',
        snavs: [
          {
            name: '央视新闻'
          },
          {
            name: '环球新闻'
          },
          {
            name: '腾讯新闻'
          },
          {
            name: '百度新闻'
          }
        ]
      },
      {
        name: '科学知识',
        snavs: [
          {
            name: '果壳网'
          },
          {
            name: '最美科技'
          },
          {
            name: '知乎'
          }
        ]
      }
    ];
    this.select = {
      nav: this.navs[0],
      snav: this.navs[0].snavs[0]
    };
  }
  @Output() test = false;
  onSelect(type, current, parent) {
    switch (type) {
      case 'nav':
        this.select.nav = current;
        this.select.snav = {};
        break;
      case 'snav':
        this.select.nav = parent;
        this.select.snav = current;
        break;
      default:
        return;
    }
  }
}
