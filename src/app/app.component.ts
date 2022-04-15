import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}</div>`,
})
export class AppComponent {
  value = '';

  constructor(private http: HttpClient) {
    this.http.get('/api/Message?code=T8WcgrWRjOMuyEGE8M9veuqTXFnI2jmP8tgum/UaAyNCurZnUzlcMA==')
      .subscribe((resp: any) => this.value = resp.text);
  }
}
