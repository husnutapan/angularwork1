import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
       <input type="text" class="{{'blue'}}" value="{{onTest()}}">
       
    `,
})
export class AppComponent {
    onTest() {
        return true;
    }
}