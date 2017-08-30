import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable';

import { IEvent } from '../interfaces/event/event.interface';

@Injectable()
export class EventService {

  private allEventsUrl: string = 'event';

  constructor(private http: Http) { }
  
  GetEvents(): Observable<IEvent[]>{
    const headers = new Headers();
    headers.append('ContentType', 'application/json');
    const options = new RequestOptions({headers: headers});
    return this.http.get(this.allEventsUrl, options)
      .map(response => response.json())
  }
}
