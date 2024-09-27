import { CurrentConditionsDisplay } from "./Observer";
import { WeatherData } from "./Subject";

const sub = new WeatherData();
const observer = new CurrentConditionsDisplay();

sub.registerObserver(observer);
observer.display()

sub.setMeasurements(10,20,30);
observer.display();

sub.setMeasurements(20,30,30);
observer.display();

sub.setMeasurements(20,10,5);
observer.display();