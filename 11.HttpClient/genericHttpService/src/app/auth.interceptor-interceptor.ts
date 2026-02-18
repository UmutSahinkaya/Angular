import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const clone = req.clone({
    // setHeaders: {
    //   Authorization: 'Bearer your-token-here',
    // },   Bu bana github copilot tarafından önerildi ama ben bunu kullanmak istemiyorum. 
    // Ben sadece header kısmına bir değer eklemek istiyorum.
    headers: new HttpHeaders({
      'Authorization': 'Bearer token ..........',
      'Year': '2026-06-01'
    })
  });
  return next(clone);
};
