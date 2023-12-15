import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {NgModule} from "@angular/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {PhoneService} from "./app/phone/phone.service";

@NgModule({
  imports: [BrowserModule, UpgradeModule, HttpClientModule],
  providers: [
    HttpClient,
    PhoneService
  ],
})
export class AppModule {
  ngDoBootstrap() {}
}
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
