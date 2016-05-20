import {Component} from 'angular2/core';
import {StringInterpolationDemo} from "./data-binding/string.interpolasyon";

@Component({
    selector: 'my-app',
    template: `
       <my-stringinterpolation></my-stringinterpolation>
       
    `,
    directives:[StringInterpolationDemo]
})
export class AppComponent {
    onTest() {
        return false;
    }
}