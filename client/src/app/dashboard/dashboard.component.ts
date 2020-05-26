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
  yourShareArray=[];
  currentUserId;
  constructor(private router: Router,
    private appService: AppService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllGroups()
    this.currentUserId=this.appService.getUserInfoFromLocalstorage().userId;
  }
  
  getAllGroups(){
    let userId= this.appService.getUserInfoFromLocalstorage().userId
    this.appService.getAllGroups(userId).subscribe( (res) =>{
      //console.log('res',res);
      if(!res.error){
      this.isGroupList=true;
      this.groupList=res.data;
      this.groupList.forEach(element => {
        this.getAllExpensesforYourShare(element.groupId,element.groupName);
      });
      console.log(this.yourShareArray);
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

  getAllExpensesforYourShare(groupId,groupName){
    this.appService.getAllExpenses(groupId,0,0).subscribe( (res) =>{
      if(!res.error){
        console.log(res.data);
        let netBalance=0;
        res.data.expenseList.forEach(element => {
          let currentUserId=element.expenseMembers.filter(el =>el.userId==this.currentUserId);
          if(currentUserId.length>0)
          netBalance=netBalance+(currentUserId['0'].paidShare-currentUserId['0'].owedShare)
        });
        
        let text= `you ${netBalance>0?'get back':'owe'}`
        let share= netBalance==0?`nothing`:Math.abs(netBalance).toFixed(2);
        let yourShare=`${text} <b>Rs.${share}</b> for Group <b>${groupName}</b> which has <span style="color: #666;">${res.data.count} expense(s)</span>`;
        console.log(yourShare);
        this.yourShareArray.push(yourShare);
      }
      else{
       this.toastr.error(res.message)
      }
    },(error)=>{
      console.log('error',error);
    })
  }

}
