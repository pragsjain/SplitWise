import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { SocketioService } from './socketio.service';
 

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestResetComponent } from './request-reset/request-reset.component';
import { ResponseResetComponent } from './response-reset/response-reset.component';
import { GroupNewComponent } from './group-new/group-new.component';
import { GroupEditComponent } from './group-edit/group-edit.component';
import { GroupDescComponent } from './group-desc/group-desc.component';
import { ExpenseNewComponent } from './expense-new/expense-new.component';
import { ExpenseHistoryComponent } from './expense-history/expense-history.component';
import { ExpenseDescComponent } from './expense-desc/expense-desc.component';

import { AuthService }from './auth/auth.service'
import { TokenInterceptor } from './auth/token.interceptor';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent  },
  { path: 'dashboard', component: DashboardComponent  },
  { path: 'request-reset-password', component: RequestResetComponent  },
  { path: 'response-reset-password/:token', component: ResponseResetComponent  },
  { path: '',redirectTo: '/login',pathMatch: 'full' },
  { path: 'group-new', component: GroupNewComponent  },
  { path: 'group-edit/:groupId', component: GroupEditComponent  },
  { path: 'group/:groupId', component: GroupDescComponent  },
  { path: 'expense-new', component: ExpenseNewComponent  },
  { path: 'expense/:expenseId', component: ExpenseDescComponent  },
  { path: 'expense-history', component: ExpenseHistoryComponent  },
  { path: '**', component: LoginComponent }
];
// Configs 
const config = new AuthServiceConfig(
  [
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("192608161695474")
    },
    // {
    //   id: GoogleLoginProvider.PROVIDER_ID,
    //   provider: new GoogleLoginProvider("Your-Google-Client-Id")
    // }
  ]);
export function provideConfig() {
return config;
}
export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    RequestResetComponent,
    ResponseResetComponent,
    GroupNewComponent,
    GroupDescComponent,
    ExpenseNewComponent,
    ExpenseHistoryComponent,
    ExpenseDescComponent,
    GroupEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    MatFormFieldModule,MatInputModule,MatSelectModule,MatCardModule,MatDividerModule,MatTableModule,MatPaginatorModule,MatSortModule,MatIconModule,MatTooltipModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    JwtModule.forRoot({
      config: {
        tokenGetter:tokenGetter,
        whitelistedDomains: ['http://localhost:4200/','http://52.66.252.216:3000']
      }
    })
  ],
  providers: [ {provide: AuthServiceConfig,useFactory: provideConfig},
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
    bootstrap: [AppComponent]
})
export class AppModule { }


