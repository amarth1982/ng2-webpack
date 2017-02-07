import { Component, NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
class AppComponent {
    constructor(){
        
    }
 }

 @NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
 })
 export class AppModule{}
