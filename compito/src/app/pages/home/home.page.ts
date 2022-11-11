import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/classes/movies';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  movies: Movies[] = [];

  constructor(private http: HttpClient) {
    this.http.get(environment.urlAPI + 'movies').subscribe((obj: any) => (this.movies = obj));
  }

  ngOnInit(): void {}

  ngDoCheck(): void {
    console.log(this.movies);
  }
}
