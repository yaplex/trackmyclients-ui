import { HttpEvent, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';

export function baseApiUrlHttpInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  debugger;
  const apiReq = req.clone({ url: `https://get-from-config${req.url}` });
  return next(apiReq);
}