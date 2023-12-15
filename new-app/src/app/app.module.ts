import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {UpgradeModule} from "@angular/upgrade/static";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {PhoneService} from "./phone/phone.service";
import {AppRoutingModule} from "./app.routes";
import {AppComponent} from "./app.component";
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [BrowserModule, UpgradeModule, HttpClientModule, CommonModule, RouterOutlet, AppRoutingModule],
  providers: [
    HttpClient,
    PhoneService,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
