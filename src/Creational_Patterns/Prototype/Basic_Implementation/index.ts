interface UserDetails{
    name: string;
    age: number;
    email: string;
}

interface Prototype{
    clone():Prototype;
    getUserDetails():UserDetails;
}


class ConcretePrototype implements Prototype{
    private user: UserDetails;

    constructor(user: UserDetails){
        this.user = user;
    }

    clone(): Prototype {
        const clone = Object.create(this);
        clone.user = {...this.user};
        return clone;
    }

    getUserDetails(): UserDetails {
        console.log(`user details are \n name - ${this.user.name} \n age - ${this.user.age} \n email - ${this.user.email}`);
        return this.user;
    }
}

/**
 * The client code.
 */
function clientCode() {
    const p1 = new ConcretePrototype({
      name: "John",
      age: 30,
      email: "john@example.com",
    });
    const p2 = p1.clone();

    console.log(p1)
    console.log(p2)
  
    if (p1.getUserDetails() === p2.getUserDetails()) {
      console.log("Cloned objects are the same instance.");
    } else {
      console.log("Cloned objects are not the same instance.");
    }
}
  
clientCode();