import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-new',
  templateUrl: './group-new.component.html',
  styleUrls: ['./group-new.component.css']
})
export class GroupNewComponent implements OnInit {
  isUserList=false;
  userList=[];
  selectedUserList=[];
  createGroupForm:FormGroup;

  constructor( private appService: AppService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
          this.resetForm()
          //get all users
          this.getAllUsers()
         
  }

  getAllUsers(){
    this.appService.getAllUsers().subscribe( (res) =>{
      //console.log('res',res);
      if(!res.error){
      this.isUserList=true;
      this.userList=res.data;
      //add signedIn user to group by default
        let userId= this.appService.getUserInfoFromLocalstorage().userId
        this.addUserToGroup(userId)
      }
      else{
        this.toastr.error(res.message)
        }
      },(error)=>{
        console.log('error',error);
      })
  }

  resetForm(){
    this.createGroupForm = this.fb.group({
      groupName:['',Validators.required],
      groupMembers:[[]],
    })
  }
  
  addUserToGroup(userId){
    let filtered = this.userList.filter(function (value) {
      return value.userId == userId;
    });
    if(this.selectedUserList.indexOf(filtered['0'])==-1)
    this.selectedUserList.push(filtered['0'])
  }

  removeUserFromGroup(userId){
    var filtered = this.selectedUserList.filter(function(value){ return value.userId !== userId});
    this.selectedUserList=filtered;
  }

  createGroup: any = () => {
    let createGroupFormValue=this.createGroupForm.value;
      let data = {
        groupName: createGroupFormValue.groupName,
        groupMembers: this.selectedUserList
      }
      console.log(data);

      this.appService.createGroup(data)
        .subscribe((apiResponse) => {
          console.log(apiResponse);
          if (apiResponse.status === 200) {
            this.toastr.success(`${data.groupName} created succesfully`);
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
