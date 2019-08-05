import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AgComponent} from './ag-component/ag.component';
import {AgGridModule} from 'ag-grid-angular';
import {ThumbnailImageComponent} from './thumbnail-image/thumbnail-image.component';
import {DateColumnComponent} from './date-column/date-column.component';
import {TitleColumnComponent} from './title-column/title-column.component';
import {CheckboxComponent} from './checkbox-component/checkbox.component';
import {CustomHeaderComponent} from './custom-header/custom-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AgComponent,
    ThumbnailImageComponent,
    DateColumnComponent,
    TitleColumnComponent,
    CheckboxComponent,
    CustomHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([ThumbnailImageComponent, DateColumnComponent,
      TitleColumnComponent, CheckboxComponent, CustomHeaderComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
