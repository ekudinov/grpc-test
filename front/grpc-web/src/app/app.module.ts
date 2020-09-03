import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {GRPC_CLIENT_FACTORY, GRPC_CONSOLE_LOGGER_ENABLED, GRPC_INTERCEPTORS, GrpcConsoleLoggerInterceptor} from "@ngx-grpc/core";
import { GrpcWebClientFactory} from "@ngx-grpc/grpc-web-client";
import {GrpcClientSettings} from "@ngx-grpc/common";
import {environment} from "../environments/environment";
import {GRPC_CALCULATOR_CLIENT_SETTINGS} from "../proto/calculator.pbconf";
import {GRPC_HISTORY_CLIENT_SETTINGS} from "../proto/history.pbconf";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
    { provide: GRPC_CLIENT_FACTORY, useClass: GrpcWebClientFactory },
    { provide: GRPC_CALCULATOR_CLIENT_SETTINGS, useValue: { host: environment.gRpcServer + '/calculator' } as GrpcClientSettings },
    { provide: GRPC_HISTORY_CLIENT_SETTINGS, useValue: { host: environment.gRpcServer } as GrpcClientSettings },
    { provide: GRPC_CONSOLE_LOGGER_ENABLED, useFactory: () => localStorage.getItem('GRPC_CONSOLE_LOGGER_ENABLED') === 'true' || !environment.production},
    { provide: GRPC_INTERCEPTORS, useClass: GrpcConsoleLoggerInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
