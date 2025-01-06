import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { LoginComponent } from './component/login/login.component';
import { CakecardComponent } from './component/cakecard/cakecard.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CakecardComponent,
    FooterComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,MatDialogModule,MatFormFieldModule,FormsModule, MatIconModule,MatSelectModule, MatRadioModule, ReactiveFormsModule,FormBuilder,FormControl,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
