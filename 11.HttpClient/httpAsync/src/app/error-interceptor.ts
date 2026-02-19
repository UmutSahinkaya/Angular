import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, of } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err:HttpErrorResponse) => {

      debugger
      console.error('HTTP Error:', err);
      return of();
    })
  );
};
