import { CanDeactivateFn } from '@angular/router';
import { Home } from './home/home';

export const checkGuard: CanDeactivateFn<Home> = (component, currentRoute, currentState, nextState) => {
  component.name="Guard";
  //component.checkStatus=blablabla; buradan component içindeki değişkenlere erişebiliriz.
  var result=confirm("Çıkmak istediğinize emin misiniz?");
  return result;
};
