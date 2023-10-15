import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InfoTruyenRoutingModule } from './info-truyen/info-truyen-routing.module';
import { InfoTruyenComponent } from './info-truyen/info-truyen.component';
import { HomeComponent } from './home/home.component';
import { DanhmucComponent } from './danhmuc/danhmuc.component';
import { DMPhieuLuuComponent } from './dmphieu-luu/dmphieu-luu.component';
import { ChinhSachComponent } from './chinh-sach/chinh-sach.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DocTruyenComponent } from './doc-truyen/doc-truyen.component';
import { DangKiComponent } from './dang-ki/dang-ki.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoTruyenComponent,
    HomeComponent,
    DanhmucComponent,
    DMPhieuLuuComponent,
    ChinhSachComponent,
    DangNhapComponent,
    DocTruyenComponent,
    DangKiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
