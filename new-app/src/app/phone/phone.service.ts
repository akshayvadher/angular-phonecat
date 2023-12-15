import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {downgradeInjectable} from '@angular/upgrade/static';

declare const angular: any;

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private apiUrl = 'assets/phones/';

  constructor(private http: HttpClient) {
  }

  get({phoneId}: { phoneId: string }) {
    return this.http.get<any[]>(this.apiUrl + phoneId + '.json').toPromise();
  }

  getAll() {
    return this.http.get<any[]>('assets/phones/phones.json').toPromise();
  }
}

angular.module('core.phone')
  .factory('Phone', downgradeInjectable(PhoneService));
