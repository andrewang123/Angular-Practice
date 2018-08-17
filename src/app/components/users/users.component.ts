import { Component, OnInit, ViewChild} from '@angular/core'; // must havet this in beginning
import { User } from '../../models/User';
import { userInfo } from 'os';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm')form: any;
  //currentClasses = {};
  //currentStyles = {};

  constructor() { }

  ngOnInit() { //life cycle method, run automatically when componenet initialized
    setTimeout(() => {
      this.users = [
        {
          firstName: 'Andrew',
          lastName: 'Ang',
          // age: 20,
          // address: {
          //   street: '50th ave',
          //   city: 'Seattle',
          //   state: 'WA'
          // },
          email: 'aang@gmail.com',
          //image: "https://placeimg.com/600/600/people/1",
          isActive: true,
          //balence: 100,
          registered: new Date("01/02/2018 08:30:00"),
          hide: true
        },
        {
          firstName: 'Kevin',
          lastName: 'Devin',
          // age: 16,
          // address: {
          //   street: 'So Cool Street',
          //   city: 'San Fransisco',
          //   state: 'CA'
          // },
          email: 'kd@gmail.com',
          //image: "https://placeimg.com/600/600/people/2",
          isActive: false,
          //balence: 200,
          registered: new Date("05/05/2015 01:12:00"),
          hide: true
        },
        {
          firstName: 'Miranda',
          lastName: 'Kerr',
          age: 27,
          // address: {
          //   street: 'Lol street',
          //   city: 'New Yrok',
          //   state: 'NY'
          // },
          email: 'mk@gmail.com',
          //image: "https://placeimg.com/600/600/people/3",
          isActive: true,
          //balence: 50,
          registered: new Date("1/1/2011 12:12:12"),
          hide: true
        }
      ];

      // this.addUser({
      //   firstName: 'Tony',
      //   lastName: 'Stark',
      // });
      this.loaded = true;
      //this.setCurrentClasses();
      //this.setCurrentStyles();
    }, 2000);



    //this.showExtended = false;

  } // end of ngoninit

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();

  //   this.users.unshift(this.user); // add to begining of array
  //   this.user = { // clear the form
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //     // age: null,
  //     // address: {
  //     //   street: '',
  //     //   city: '',
  //     //   state: ''
  //     // }
  //   };
  // }

  // using a template driven form
  // value is the user
  // valid is the boolean to chck if the form is valud
  onSubmit({value, valid} : {value : User, valid : boolean}) {
    if(!valid){
      console.log("form is not valid");
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);

      this.form.reset();
    }
   

  }

  // fireEvent(e) {
  //   console.log(e.target.value);
  //   console.log(e.type);
  // }

  // setCurrentClasses () {
  //   this.currentClasses = {
  //     'btn-success': this.enableAdd, // assigns to btn succes if is enabled, ternary statment
  //     'big-text': this.showExtended
  //   }
  // }

  // setCurrentStyles () {
  //   this.currentStyles = {
  //     'padding-top' : this.showExtended ? '0' : '40px',
  //     'font-size': this.showExtended ? '' : '40px'
  //   }
  // }

  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  // }
}
