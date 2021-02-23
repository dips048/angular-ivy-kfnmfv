import { Component, OnInit } from '@angular/core';
import { FireService } from '../fire.service';
import { User } from '../user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: User[];

  constructor(private fire:FireService) { }
  
  ngOnInit() {
    this.fire.getUsers().subscribe(data => {
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data()as{})
        } as User;
      })
    });
  }

  delete(user){
    this.fire.delete(user);
  }

}
