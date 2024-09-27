import { MyIterator, UserIterator } from "./MyIterator";
import { User } from "./User";

interface Collection<T>{
    createIterator():MyIterator<T>;
}

export class UserCollection implements Collection<User> {

    private users: User[];

    constructor(users: User[]){
        this.users = users;
    }

    createIterator(): MyIterator<User> {
        return new UserIterator(this);
    }

    getItems():User[]{
        return this.users;
    }
}