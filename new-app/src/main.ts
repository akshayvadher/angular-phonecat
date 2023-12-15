import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';
import {UpgradeModule, setAngularJSGlobal} from '@angular/upgrade/static';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err))
  .then((platformRef) => {
    console.log('Angular Bootstrap!');
    const upgrade = platformRef?.injector.get(UpgradeModule) as UpgradeModule;
    console.log('Injected the UpgradeModule!');
    // upgrade.bootstrap(document.body, ['phonecatApp'], {
    //   strictDi: false,
    // });
    console.log('AngularJS Bootstrap!');
  });
