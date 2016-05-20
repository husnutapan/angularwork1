/**
 * Created by husnu on 20.05.2016.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'my-event',
    template: `
      <input type="text" [value]="name" [ngClass] ="{red:true}"
      (keyup)="onKeyup(inputElement.value)" #inputElement>
      <p>{{values}}</p>
    `
})
export class EventBinding {
    name = '';
    values = '';
    onKeyup(value : string){
        this.values +=value+' | ';
    }

}