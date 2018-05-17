import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { GridModule } from '@progress/kendo-angular-grid';

/* Loading CLDR data, see
 * http://www.telerik.com/kendo-angular-ui/components/internationalization/
 *
 * // Load all required data for the de locale
 * import '@progress/kendo-angular-intl/locales/de/all';
 */


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,

    GridModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
