import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-hello',
    template: '<p>{{ message }}</p>'
})
export class HelloComponent implements OnInit {
    message: string;

    constructor(private http: HttpClient) {
      this.message = '';
    }

    ngOnInit(): void {
        // this.http.get<{ message: string }>('http://127.0.0.1:5000/api/hello').subscribe(data => {
            // this.message = data.message;
        this.message="AWS says Hello";
        });
    }
}
