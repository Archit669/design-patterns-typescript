import { User } from "./User";
import { UserCollection } from "./Collection";

// create some users
const users = [new User("Alice"), new User("Bob"), new User("Charlie")];

// create a UserCollection and populate it with users
const userCollection = new UserCollection(users);

// create an iterator
const iterator = userCollection.createIterator();


// use the iterator to traverse the collection
while (iterator.hasNext()) {
  console.log(iterator.next().value?.name);
}

