import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes, Router } from '@angular/router';//课上添加开始
import { HomeComponent } from './home/home.component';//终端创建菜单时自动添加
import { MenuComponent } from './menu/menu.component';//终端创建菜单时自动添加
import { ReserveComponent } from './reserve/reserve.component';//终端创建菜单时自动添加
import { ContactComponent } from './contact/contact.component'; //终端创建菜单时自动添加
 //定义路径 。
const routes: Routes = [
  {path : '', component: HomeComponent}, 
  {path : 'menu', component: MenuComponent},
  {path : 'reserve', component: ReserveComponent},
  {path : 'contact', component: ContactComponent}
];
                                                    //课上添加结束
                                                      
@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    MenuComponent,
    ReserveComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(routes) //ajout des rout
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
