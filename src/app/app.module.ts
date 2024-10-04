import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { HomeModule } from './home/home.module';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi, } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { MainInterceptor } from './interceptors/main.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    CookieService,
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    {provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
