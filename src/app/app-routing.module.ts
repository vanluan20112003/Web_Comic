import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { InfoTruyenComponent } from './info-truyen/info-truyen.component'; // Import InfoTruyenComponent
import { HomeComponent } from './home/home.component';
import { DanhmucComponent } from './danhmuc/danhmuc.component';
import { DMPhieuLuuComponent } from './dmphieu-luu/dmphieu-luu.component';
import { ChinhSachComponent } from './chinh-sach/chinh-sach.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DocTruyenComponent } from './doc-truyen/doc-truyen.component';
import { DangKiComponent } from './dang-ki/dang-ki.component';
import { ThongTinUserComponent } from './thong-tin-user/thong-tin-user.component';

const routes: Routes = [
  {
    path: 'info-truyen',
    component: InfoTruyenComponent
  }, // Sử dụng InfoTruyenComponent
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'DanhMuc',
    component: DanhmucComponent
  },
  {
    path: 'DanhMucPhieuLuu',
    component: DMPhieuLuuComponent
  },
  {
    path: 'ChinhSach',
    component: ChinhSachComponent
  },
  {
    path: 'DangNhap',
    component: DangNhapComponent
  },
  {
    path: 'DocTruyen',
    component: DocTruyenComponent
  },
  {
    path: 'DangKi',
    component: DangKiComponent
  },
  {
    path: 'ThongTinUser',
    component: ThongTinUserComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
