import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListViewsComponent } from './list-views/list-views.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './login/login.component';
import { MostrarMilesPipe } from './mostrar-miles.pipe';
import { SoloMobileDirective } from './solo-mobile.directive';
import { SinImageDirective } from './sin-image.directive';
import { MyFocusDirective } from './my-focus.directive';
import { ImagenRotaDirective } from './imagen-rota.directive';
import { SubirArchivoComponent } from './subir-archivo/subir-archivo.component';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { OnlySessionDirective } from './only-session.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    SidebarComponent,
    PostDetailComponent,
    HomeComponent,
    ListViewsComponent,
    LoginComponent,
    MostrarMilesPipe,
    SoloMobileDirective,
    SinImageDirective,
    MyFocusDirective,
    ImagenRotaDirective,
    SubirArchivoComponent,
    UploadPageComponent,
    FileUploadComponent,
    OnlySessionDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
