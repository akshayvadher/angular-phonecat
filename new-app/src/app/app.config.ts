import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {UpgradeModule} from "@angular/upgrade/static";
import {PhoneService} from "./phone/phone.service";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), PhoneService, UpgradeModule]
};
