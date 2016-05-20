import {Component} from 'angular2/core';
import {StringInterpolationDemo} from "./data-binding/string.interpolasyon";
import {PropertyBindingDemo} from "./data-binding/property";
import {EventBinding} from "./data-binding/eventbinding";

@Component({
    selector: 'my-app',
    template: `
    `,
    directives:[StringInterpolationDemo,PropertyBindingDemo,EventBinding]
})
export class AppComponent {
    onTest() {
        return false;
    }
}