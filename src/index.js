import 'core-js/client/shim';
import 'zone.js/dist/zone';

import '@angular/common';
import 'rxjs';
/**
 * 公共css*
 */
import './public/css/bootstrap.css';
import './public/css/app.css';
import './index.less';

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app';

window.$ = require('../node_modules/jquery/dist/jquery.js');

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
} else {
  Error['stackTraceLimit'] = Infinity; // eslint-disable-line dot-notation
  require('zone.js/dist/long-stack-trace-zone');
}

platformBrowserDynamic().bootstrapModule(AppModule);
