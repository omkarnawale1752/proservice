import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  constructor() { }

  async setToken(value: string) {
    return await Preferences.set({
      key: 'token',
      value: value,

    });
  }
  async getToken() {
    return await Preferences.get({ key: 'token' });
  }

  async removetoken (){
    return await Preferences.remove({ key:'token'});
  }
}
 