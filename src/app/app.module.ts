import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ModalComponent } from './shared/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './pages/login/login.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuLateralComponent } from './shared/menu-lateral/menu-lateral.component';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { MatPaginatorIntlCro } from './shared/MatPaginatorIntlCro';
import { MatSelectModule } from '@angular/material/select'
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ModalComponent,
    LoginComponent,
    DashboardComponent,
    MenuLateralComponent,
    LoaderComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [
    provideNgxMask(),
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
