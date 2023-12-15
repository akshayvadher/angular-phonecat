import {UpgradeModule} from '@angular/upgrade/static';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err))
  .then((platformRef) => {
    console.log('Angular Bootstrap!');
    const upgrade = platformRef?.injector.get(UpgradeModule) as UpgradeModule;
    console.log('Injected the UpgradeModule!');
    upgrade.bootstrap(document.body, ['phonecatApp'], {
      strictDi: false,
    });
    console.log('AngularJS Bootstrap!');
  });
