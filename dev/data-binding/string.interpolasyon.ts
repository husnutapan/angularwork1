/**
 * Created by husnu on 20.05.2016.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'my-stringinterpolation',
    template: `
                {{'Hey'}}
                {{onTest()}}
                {{name}}
                <input type="text" value="{{name}}" class="{{'green'}}">
                
               `

})

export class StringInterpolationDemo {
    name = 'Husnu';

    onTest() {
        return 1 === 1;
    }
}