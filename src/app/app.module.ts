import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SocialComponent } from './pages/social/social.component';



// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SocialComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    // AngularFirestoreModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireAnalyticsModule,
    
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
