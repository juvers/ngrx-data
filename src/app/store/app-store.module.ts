import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { DefaultDataServiceConfig, NgrxDataModule} from 'ngrx-data';
import { entityConfig } from './entity-metatdata';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    NgrxDataModule.forRoot(entityConfig),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ]
})
export class AppStoreModule { }
