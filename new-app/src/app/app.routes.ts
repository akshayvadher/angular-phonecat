import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {PhoneListComponent} from "./phone/phone-list/phone-list/phone-list.component";
import {EmptyComponent} from "./empty/empty.component";

export const routes: Routes = [
  {path: '', redirectTo: 'phones', pathMatch: 'full'},
  {path: 'phones', component: PhoneListComponent},
  {path: '**', component: EmptyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    // {provide: APP_BASE_HREF, useValue: '!'},
    // {provide: LocationStrategy, useClass: HashLocationStrategy},
  ]
})
export class AppRoutingModule {
}
