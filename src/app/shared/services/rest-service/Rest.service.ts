import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.apiUrl;

  private getApiUrl(url: string): string {
    return `${this.apiUrl}${url}`;
  }

  // Generic method to handle GET requests
  get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http
      .get<T>(this.getApiUrl(url), { params })
      .pipe(catchError(this.handleError));
  }

  // Generic method to handle POST requests
  post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http
      .post<T>(this.getApiUrl(url), body, { headers })
      .pipe(catchError(this.handleError));
  }

  // Generic method to handle PUT requests
  put<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http
      .put<T>(this.getApiUrl(url), body, { headers })
      .pipe(catchError(this.handleError));
  }

  // Generic method to handle DELETE requests
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url).pipe(catchError(this.handleError));
  }

  // Error handling method
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }
}
