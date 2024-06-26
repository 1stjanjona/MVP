import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: any[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get<any[]>('http://localhost:8000/api/products')
            .subscribe(data => {
                this.products = data;
            });
    }
}
