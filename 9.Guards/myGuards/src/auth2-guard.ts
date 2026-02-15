import { inject } from '@angular/core/primitives/di';
import { CanActivateFn, Router } from '@angular/router';

export const auth2Guard: CanActivateFn = (route, state) => {
  const token: string | null = localStorage.getItem('token');
  const router = inject(Router);
  if (!token) {
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
