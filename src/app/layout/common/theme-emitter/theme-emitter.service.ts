import { Injectable } from '@angular/core';

export const COLOR_NAMES = {
  primary: 'primaryColor',
  accent: 'accentColor',
  warn: 'warnColor'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeEmitterService {

  private _primaryColor: string;
  private _accentColor: string;
  private _warnColor: string;

  constructor () {
  }

  getColor (colorName: string) {
    switch (colorName) {
      case COLOR_NAMES.primary:
        return this.primaryColor;
      case COLOR_NAMES.accent:
        return this.accentColor;
      case COLOR_NAMES.warn:
        return this.warnColor;
      default:
        return 'rgba(0, 0, 0, 1)'
    }
  }

  get primaryColor (): string {
    return this._primaryColor;
  }

  set primaryColor (value: string) {
    this._primaryColor = value;
  }

  get accentColor (): string {
    return this._accentColor;
  }

  set accentColor (value: string) {
    this._accentColor = value;
  }

  get warnColor (): string {
    return this._warnColor;
  }

  set warnColor (value: string) {
    this._warnColor = value;
  }

}
