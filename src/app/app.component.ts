import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HyphenateService } from './hyphenate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'translations';

  constructor(
    private _translateService: TranslateService,
    private _hyphenateService: HyphenateService
  ) {
    _translateService.setDefaultLang('en');
    _translateService.use('en');
  }

  public changeLang(locale: 'en' | 'sk'): void {
    this._hyphenateService.setHyphenateFunction(locale);
    this._translateService.use(locale);
  }
}
