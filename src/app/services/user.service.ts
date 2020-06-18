import { User } from '../models/user.model';
import { Subject } from 'rxjs/Subject';

export class UserService{
    private users: User[] = [
        {
            firstName: 'james',
            lastName: 'smith',
            email: 'james@smith.com',
            drinkPreference: 'Coca',
            hobbies: ['coder','natation']
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers(){
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User){
        this.users.push(user);
        this.emitUsers();
    }
 
}