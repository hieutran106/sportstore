import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { RouterModule } from '@angular/router';

let routing = RouterModule.forChild([
    {path: "auth", component: AuthComponent},
    {path: "main", component: AdminComponent, canActivate:[AuthGuard]},
    {path: "**", redirectTo: "auth"}
]);
@NgModule({
    imports:[CommonModule, FormsModule,routing],
    providers: [AuthGuard],
    declarations:[AuthComponent,AdminComponent]
})
export class AdminModule {}