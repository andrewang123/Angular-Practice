import { Component, OnInit } from '@angular/core'; // must havet this in beginning
import { User } from '../../models/User'; // used for the template class
@Component({ //Decorated, allows extra information from component
    selector: 'app-user', // essentially the name of the html tag being called
    //template: '<h2>Andrew</h2>'
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    // styles: [`  // An alternative to making css instead of putting in another file (bad)
    //     h1 {
    //         color : blue
    //     }
    // `]
})

// MUST USE EXPORT IF WANT TO BE SEEN OUTSIDE OF IMMEDIATE LOCATION
export class UserComponent implements OnInit {
    // properties
    user: User;

    //methods
    constructor() { // used to inject dependancies, bring in data service

    }

    ngOnInit() {
        //console.log('in constructor');
        // this.sayHello();
        // this.user = {
        //     firstName: 'Andrew',
        //     lastName: 'Ang',
        //     age: 20,
        //     address: {
        //         street: '50th ave',
        //         city: 'Seattle',
        //         state: 'WA'
        //     }
        // } 
    }

    sayHello() {
        console.log('hello ${this.firstName}'); // es6 same as hello + this.firstName
    }

    // hasBirthday() {
    //     this.user.age += 1;
    // }
    //nginit AJAX calls or service calls

}
