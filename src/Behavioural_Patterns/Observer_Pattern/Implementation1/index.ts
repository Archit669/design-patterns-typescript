import {ConcreteObserver} from "./Observer";
import {ConcreteSubject} from "./Subject";


const sub1 = new ConcreteSubject(1);
const observer1 = new ConcreteObserver(1);

sub1.addObserver(observer1);
sub1.setState(2);

const sub2 = new ConcreteSubject(1);

sub2.addObserver(observer1);
sub2.setState(2);
