import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  readonly #http = inject(HttpClient);

  get<T>(
    endpoint: string,
    callback: (res: T) => void,
    errorCallback?: (err: HttpErrorResponse) => void,
  ) {
    this.#http.get<T>(endpoint).subscribe({
      next: (res) => {
        callback(res);
      },
      error: (err) => {
        if (errorCallback) errorCallback(err);
      },
    });
  }
  post<T>(
    endpoint: string,
    body:any,
    callback: (res: T) => void,
    errorCallback?: (err: HttpErrorResponse) => void,
  ) {
    this.#http.post<T>(endpoint, body).subscribe({
      next: (res) => {
        callback(res);
      },
      error: (err) => {
        if (errorCallback) errorCallback(err);
      },
    });
  }
}
