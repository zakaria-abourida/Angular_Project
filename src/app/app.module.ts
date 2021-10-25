import { NgModule } from '@angular/core';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideDatabase,getDatabase } from '@angular/fire/database';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';


import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

// import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';


import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SocialComponent } from './pages/social/social.component';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';


import { AngularFirestoreModule  } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';










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
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAnalytics(() => getAnalytics()),
    // provideAuth(() => getAuth()),
    // provideDatabase(() => getDatabase()),
    // provideFirestore(() => getFirestore()),
    // AngularFirestoreModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireAnalyticsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule ,
      AngularFireDatabaseModule,
      AngularFireStorageModule,
    
   

  ],
  providers: [
    // ScreenTrackingService,UserTrackingService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
