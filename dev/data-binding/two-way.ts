/**
 * Created by husnu on 20.05.2016.
 */

import {Component} from 'angular2/core';

@Component({
    selector: 'my-twoway',
    template: `
                 <input type="text" [value]="name" [ngClass] ="{red:true}" 
                 (keyup)="onKeyup(inputelement.value)" #inputelement>
                 <p>{{values}}</p>
                 <br><br>
                 <input type="text" [(ngModel)]="name">
                 <p>Your name : {{name}}</p>
               `
})
export class TwowayBinding {
    name = 'Husnu';
    values = '';

    onKeyup(value:string) {

        this.values += value + ' | ';

    }

}
