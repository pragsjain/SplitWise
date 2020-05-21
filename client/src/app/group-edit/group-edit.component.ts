import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {
  isUserList=false;
  userList=[];
  selectedGroupMember=[];
  createGroupForm:FormGroup;
  group;
  isGroupMembersChanged:boolean;
  isGroupEdit:boolean;
  constructor(private appService: AppService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private route:ActivatedRoute) { 
      this.resetForm()
    }

    ngOnInit(): void {
      this.getAllUsers()
      //get group
      this.route.params.subscribe(params =>{
        console.log(params.groupId);
          this.appService.getGroupById(params.groupId).subscribe( (res) =>{
            //console.log('res',res);
            if(!res.error){
            this.setFormValue(res.data);
            }
            else{
             this.toastr.error(res.message)
            }
          },(error)=>{
            console.log('error',error);
          })
        })
}

getAllUsers(){
  this.appService.getAllUsers().subscribe( (res) =>{
    //console.log('res',res);
    if(!res.error){
    this.isUserList=true;
    this.userList=res.data;
    }
    else{
      this.toastr.error(res.message)
      }
    },(error)=>{
      console.log('error',error);
    })
}

setFormValue(res){
  this.group=res;
    this.createGroupForm.get('groupName').setValue(res.groupName);
    res.groupMembers.forEach(element => {
      this.selectedGroupMember.push(element)
    });
}

resetForm(){
  this.createGroupForm = this.fb.group({
    groupName:['',Validators.required],
    groupMembers:[[]],
  })
}

addUserToGroup(userId){
  this.isGroupMembersChanged=true;
  let filtered = this.userList.filter(function (value) {
    return value.userId == userId;
  });
  var selectedItemExist=false;
  this.selectedGroupMember.forEach(element => {
    if(element.userId==userId)
    selectedItemExist=true;
  });
  if(!selectedItemExist)
  this.selectedGroupMember.push(filtered['0'])  
}

removeUserFromGroup(userId){
  this.isGroupMembersChanged=true;
  var filtered = this.selectedGroupMember.filter(function(value){ return value.userId !== userId});
  this.selectedGroupMember=filtered;
}

editGroup: any = () => {
  let createGroupFormValue=this.createGroupForm.value;
    let data = {
      groupId: this.group.groupId,
      groupName: createGroupFormValue.groupName,
      groupMembers: this.selectedGroupMember
    }
    console.log(data);

    this.appService.editGroup(data)
      .subscribe((apiResponse) => {
        console.log(apiResponse);
        if (apiResponse.status === 200) {
          this.toastr.success(`${data.groupName} edited succesfully`);
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 2000);
        } else {
          this.toastr.error(apiResponse.message);
        }
      }, (err) => {
        this.toastr.error('Some error occured');
      });
  } // end signupFunction


}
