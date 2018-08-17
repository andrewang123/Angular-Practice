import { Component, OnInit, ViewChild} from '@angular/core'; // must havet this in beginning
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
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
  data: any;

  dummy: any;
  //currentClasses = {};
  //currentStyles = {};

  // having parameters injects the service into the component
  constructor(private userService : UserService) { }

  ngOnInit() { //life cycle method, run automatically when componenet initialized
    setTimeout(() => {
      // subscribe actually allows us to use the observable 
      // dummy data that just console log nothing to do with app
      this.userService.getData().subscribe(data => {
        console.log(data);
      });
      
      this.userService.getUsers().subscribe(users => {
        this.users = users;
        console.log(users);
        this.loaded = true;
      });

      this.userService.getNum().subscribe(num => {
        this.dummy = num;
        console.log(num)
      });

     
    }, 2000);



    //this.showExtended = false;

  } // end of ngoninit


  // using a template driven form
  // value is the user
  // valid is the boolean to chck if the form is valud
  // this function validates the user form and adds user if correct
  onSubmit({value, valid} : {value : User, valid : boolean}) {
    if(!valid){
      console.log("form is not valid");
    } else {
      // set the other properties
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.userService.addUser(value)

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
