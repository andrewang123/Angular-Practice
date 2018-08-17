import { Injectable } from '@angular/core'; // have to include for a service

import { Observable } from 'rxjs'
import { of } from 'rxjs' // allows the return of an array as observable

import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users : User[];
  data : Observable<any>; 
  num: number;

  constructor() { 
    this.num = 13;
    this.users = [
      {
        firstName: 'Andrew',
        lastName: 'Ang',
        email: 'aang@gmail.com',
        isActive: true,
        registered: new Date("01/02/2018 08:30:00"),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Devin',
        email: 'kd@gmail.com',
        isActive: false,
        registered: new Date("05/05/2015 01:12:00"),
        hide: true
      },
      {
        firstName: 'Miranda',
        lastName: 'Kerr',
        age: 27,
        email: 'mk@gmail.com',
        isActive: true,
        registered: new Date("1/1/2011 12:12:12"),
        hide: true
      }
    ];
  }


  getUsers(): Observable<User[]> {
    return of(this.users); // of wraps it to make it type observable
  }

  getNum(): Observable<any> {
    return of(this.num);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

    // just used to mimic a http request, not actually used
      // gives open data stream , good to work with asynchronous data
    // function: every second will fetch 1  - 4
    getData() {
      this.data = new Observable(observer => {
        setTimeout(() => {
          observer.next(1)
        }, 1000);
  
        setTimeout(() => {
          observer.next(2)
        }, 2000);
  
        setTimeout(() => {
          observer.next(3)
        }, 3000);
  
        setTimeout(() => {
          observer.next(4)
        }, 4000);
  
      });
      return this.data;
    }

}
