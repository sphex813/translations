import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  TranslateDefaultParser,
  TranslateLoader,
  TranslateModule,
  TranslateParser,
} from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HyphenateService } from './hyphenate.service';

class CustomTranslateParser extends TranslateDefaultParser {
  constructor(private _hyphenateService: HyphenateService) {
    super();
  }

  override interpolate(expr: string | Function, params?: any): string {
    return this._hyphenateService.hyphenate(super.interpolate(expr, params));
  }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      parser: {
        provide: TranslateParser,
        useClass: CustomTranslateParser,
        deps: [HyphenateService],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
