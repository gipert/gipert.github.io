import * as OfflinePluginRuntime from 'offline-plugin/runtime';
require('./style.styl');
import Vue from 'vue';
import { state } from './data';
import { snakeCase } from './util';
import { Section, Language, languages } from './data_types';

// 0 -> Monokai (in index.html)
// 1 -> One Dark
// 2 -> One Light
let theme = 0;
const themeCount = 3;

if (state.language === undefined) {
  state.language = languages[Math.floor(Math.random() * languages.length)];
}

document.addEventListener('keydown', function (e) {
  switch (e.which) {
    case 32: { // space
      e.preventDefault();
      theme += 1;
      for (var i = 0; i < themeCount; i++) {
        document.body.classList.remove(`theme-${i}`);
      }
      document.body.classList.add(`theme-${theme % themeCount}`);
      break;
    }
    case 82: { // R
      state.language = Language.ruby;
      break;
    }
    case 74: { // J
      // state.language = Language.javascript;
      state.language = Language.julia;
      break;
    }
    case 84: { // T
      state.language = Language.typescript;
      break;
    }
  }
});

Vue.mixin({
  data() {
    return {
      Section,
      state,
    };
  },
  methods: {
    snakeCase(str: string) {
      if ((<any>this).isRuby || (<any>this).isJulia) { return snakeCase(str); }
      else { return str; }
    }
  },
  computed: {
    isJs() {
      return this.state.currentLanguage === Language.javascript
        || this.state.currentLanguage === Language.typescript;
      ;
    },
    isTs() {
      return this.state.currentLanguage === Language.typescript;
      ;
    },
    isRuby() {
      return this.state.currentLanguage === Language.ruby;
    },
    isJulia() {
      return this.state.currentLanguage === Language.julia;
    },
  },
});

console.log(
  '%cgipert.github.io %c%c  master %c cat %cREADME.md\n\n%c# gipert.github.io\n\nCheck out the source on [GitHub](https://github.com/gipert/gipert.github.io)',
  'font-family: "Fira Code", monospace; padding: 2px 0; background-color: #2E8CCF; color: #000000;',
  'font-family: "Fira Code", monospace; padding: 2px 0; background-color: #85981C; color: #2E8CCF;',
  'font-family: "Fira Code", monospace; padding: 2px 0; background-color: #85981C; color: #000000;',
  'font-family: "Fira Code", monospace; padding: 2px 0; color: #75880C;',
  'font-family: "Fira Code", monospace; padding: 2px 0; color: #011;',
  'font-family: "Fira Code", monospace; padding: 2px 0; color: #233;',
);

OfflinePluginRuntime.install({
  onUpdateReady: function () {
    OfflinePluginRuntime.applyUpdate();
  },
  onUpdated: function () {
    window.location.reload();
  }
});
