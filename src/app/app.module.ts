import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './main/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './main/navigation/navigation.component';
import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './main/footer/footer.component';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './layout/shared/modulos/material/material.module';
import { AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { AuthModule } from './auth/auth.module';
import { CookieService} from 'ngx-cookie-service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './store/app.state';
import { AppEfeccts } from './store/app.effects';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([AppEfeccts]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  exports: [
  ],
  providers: [ CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
