import {Component} from 'angular2/core';
import {StringInterpolationDemo} from "./data-binding/string.interpolasyon";
import {PropertyBindingDemo} from "./data-binding/property";
import {EventBinding} from "./data-binding/eventbinding";
import {TwowayBinding} from "./data-binding/two-way";
import {PropertyBindingComponent} from "./bind-component/property-binding.component";

@Component({
    selector: 'my-app',
    template: `
    <section class="parent">
        <h2>This is the parent component</h2>
        <h4>Please enter your name</h4>
        <input type="text" [(ngModel)]="name">
        <section class="child">
             <my-property-binding [myName]="name" [myAge]="35"
             (hobbiesChanged)="hobbies=$event"></my-property-binding>
        </section>
        <p>My hobbies are : {{hobbies}}</p>
    </section>
  
    `,
    directives: [PropertyBindingComponent]
})
export class AppComponent {
    name:'';
    hobbies = '';
}