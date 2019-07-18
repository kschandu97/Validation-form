import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms';
import { ValidationComponent } from './app.validation';
import {Routes,RouterModule} from '@angular/router';

const routes:Routes=[
    { path: '', redirectTo: 'form', pathMatch: 'full' },
   {path:'form',component:ValidationComponent},
    
   
   
]

@NgModule({
    imports: [
        BrowserModule,FormsModule,RouterModule.forRoot(routes)
        
    ],
    declarations: [
        AppComponent,ValidationComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }