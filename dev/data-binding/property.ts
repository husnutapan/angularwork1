/**
 * Created by husnu on 20.05.2016.
 */
import {Component, OnInit} from 'angular2/core';
import {TodoCmp} from "./todo-cmp";

@Component({
    selector: 'my-property',
    template: `
                {{'Hey'}}
                {{onTest()}}
                {{name}}
                <input type="text" [value]="name" [ngClass]="{red: onBind()}" [disabled]="1===1">
                
                <my-todocmp></my-todocmp>
                
               `,

    directives : [TodoCmp]
})

export class PropertyBindingDemo implements OnInit{
    public deger;
    ngOnInit() {
        this.deger=false;
    }

    onBind(){
       return false;
    }

    name = 'Husnu';

    onTest() {
        return 1 === 1;
    }
}