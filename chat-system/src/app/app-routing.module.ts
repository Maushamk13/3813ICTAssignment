import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SuperAdminComponent } from './super-admin/super-admin.component'; // Import SuperAdminComponent
import { GroupAdminComponent } from './group-admin/group-admin.component'; // Import GroupAdminComponent
import { ChatUserComponent } from './chat-user/chat-user.component'; // Import ChatUserComponent

const routes: Routes = [
  // Pre-login layout (Login and Registration)
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
    ],
  },
  // Individual components for each user role
  { path: 'super-admin', component: SuperAdminComponent },
  { path: 'group-admin', component: GroupAdminComponent },
  { path: 'chat-user', component: ChatUserComponent },
  // Add more routes for other user roles here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}



