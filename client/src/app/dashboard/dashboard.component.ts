import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isGroupList=false;
  groupList=[];
  constructor(private router: Router,
    private appService: AppService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllGroups()
  }
  
  getAllGroups(){
    this.appService.getAllGroups().subscribe( (res) =>{
      //console.log('res',res);
      if(!res.error){
      this.isGroupList=true;
      this.groupList=res.data;
      }
      else{
        this.isGroupList=false;
        this.toastr.error(res.message)
        }
      },(error)=>{
        this.isGroupList=false;
        console.log('error',error);
      })
  }

  goTonewGroup(){
    this.router.navigate(['/group-new']);
  }

  removeGroup(groupId){
    this.appService.deleteGroup(groupId).subscribe( (res) =>{
      console.log(res);
      this.getAllGroups()
    })
  }

  editGroup(groupId){
    this.router.navigate(['/group',groupId]);
  }

}
