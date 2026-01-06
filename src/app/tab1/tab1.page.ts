import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  standalone: false,
  selector: 'app-tab1',
  styleUrls: ['tab1.page.scss'],
  templateUrl: 'tab1.page.html',

})
export class Tab1Page implements OnInit {
  posts: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAllPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
