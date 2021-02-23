import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireService } from '../fire.service';
import { User } from '../user.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  user:User ={id:"",firstName:"",lastName:"",age:null,email:"",contact:null};
 
  constructor(private fire:FireService, private location:Location,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user.id=this.route.snapshot.params.id;

    this.fire.getUser(this.user.id).subscribe(doc => {
      this.user=doc.data()
      console.log(doc.id, '=>',doc.data())
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.fire.update(this.user);
    this.location.back();
  }

}
