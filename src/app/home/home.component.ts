import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  products = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get().subscribe((data: any[])=>{
			console.log(data);
			this.products = data;
    })
  }

}
