import { Injectable } from '@angular/core';
import * as createHyphenator from 'hyphen';
import { HyphenationFunctionSync } from 'hyphen';
import * as patternsSk from 'hyphen/patterns/sk';
import * as patternsEn from 'hyphen/patterns/sk';

@Injectable({
  providedIn: 'root',
})
export class HyphenateService {
  public hyphenate: HyphenationFunctionSync = <HyphenationFunctionSync>(
    createHyphenator(patternsEn)
  );

  public setHyphenateFunction(locale: 'en' | 'sk') {
    if (locale === 'sk') {
      this.hyphenate = <HyphenationFunctionSync>createHyphenator(patternsSk);
    } else {
      this.hyphenate = <HyphenationFunctionSync>createHyphenator(patternsEn);
    }
  }
}
