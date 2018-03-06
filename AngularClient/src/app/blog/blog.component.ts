import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { PagerService } from '../services/index';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  private allItems: any[];
  public posts: any;
  pager: any = {};
  constructor(public http: Http, private pagerService: PagerService) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.http.get('http://localhost:8080/user-portal/posts')
      .map(res => res.json())
      .subscribe(
        data => {
          this.allItems = data;
          this.setPage(1);
        },
        err => {
          alert(err);
        }
      );
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.posts = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  readmore(obj){
    this.http.get('http://localhost:8080/user-portal/posts/'+obj.id)
      .map(res => res.json())
      .subscribe(
        data => {
          
        },
        err => {
          alert(err);
        }
      );
  }

}
