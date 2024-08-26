import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.Component.html',
    styles: ['./header.component.css']
})

export class HeaderComponent{

    @Input() item = 0;
    @Input() ayu = 0;


    updateChild(){

    }
}