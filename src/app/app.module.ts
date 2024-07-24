import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LayoutModule } from './layout/layout.module';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {ProjectsStore} from "./shared/projects.store";
import {ProjectsService} from "./shared/projects.service";


@NgModule({ declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        LayoutModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            registrationStrategy: 'registerWhenStable:30000'
        })], providers: [
        {
            provide: ProjectsStore,
            deps: [ProjectsService]
        },
        {
            provide: ProjectsService
        },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
