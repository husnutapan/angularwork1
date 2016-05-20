/**
 * Created by husnu on 20.05.2016.
 */
import  {Component, Input, EventEmitter} from 'angular2/core';

@Component({
    selector: 'my-property-binding',
    template: `
            <h2>This is the child component</h2>
            <p>Hey!!!{{name}} and I'm {{age}}</p>
            
            <h4>My hobbies are:</h4>
            <input type="text" (keyup)="onHobbiesChanged(hobbies.value)" #hobbies>
            
           `,

    inputs: ['age:myAge'],
    outputs: ['hobbiesChanged']
})

export class PropertyBindingComponent {
    @Input('myName') name:'';
    age = 20;
    hobbiesChanged = new EventEmitter<string>();

    onHobbiesChanged(hobbies:string) {
        this.hobbiesChanged.emit(hobbies);
    }
}