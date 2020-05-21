import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-group-desc',
  templateUrl: './group-desc.component.html',
  styleUrls: ['./group-desc.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GroupDescComponent implements OnInit {
  currentUserId;
  currentUserName;
  createGroupForm:FormGroup;
  group;
  isExpenseRecords:boolean;
  isNewExpense:boolean;
  createExpenseForm:FormGroup;
  expense;
  expenseList=[];
  expenseMembers=[];
  displayMultiplePayer:boolean;
  displayPayer;
  createPayerForm:FormGroup
  splitOption:string;

  constructor( private appService: AppService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private route:ActivatedRoute) { 
      this.resetForm()
    }

  ngOnInit(): void {
          //get group
          this.currentUserId=this.appService.getUserInfoFromLocalstorage().userId;
          this.currentUserName=this.appService.getUserInfoFromLocalstorage().fullName;
          this.route.params.subscribe(params =>{
            //console.log(params.groupId);
              this.appService.getGroupById(params.groupId).subscribe( (res) =>{
                if(!res.error){
                this.group=res.data;
                //console.log(res.data);
                //console.log(this.group.groupMembers);
                this.expenseMembers=this.group.groupMembers;
                this.setDefaultPayer();
                this.setDefaultSplitOption();
                this.getAllExpenses();
                }
                else{
                 this.toastr.error(res.message)
                }
              },(error)=>{
                console.log('error',error);
              })
            })
  }


  resetForm(){
    this.createExpenseForm = this.fb.group({
      expenseName:['',Validators.required],
      expenseMembers:[[]],
      amount:[0.00],
      splitOption:['equal'],
      groupId:[''],
      expenseOn:[null],
      addedOn:[null],
      addedBy:[null],
      deletedOn:[null],
      deletedBy:[null],
      updatedOn:[null],
      updatedBy:[null]
    })


    this.createPayerForm =this.fb.group({
      user:[],
      netBalance:[],
      owedShare:[],
      paidShare:[],
      isPayer:[],
      isMultiplePayer:[]
    })
  }

  createExpense(){
    //if single payer, add paidShare 
    if(!this.displayMultiplePayer){
      this.expenseMembers.forEach(element => {
        element.paidShare=element.isPayer?this.createExpenseForm.value.amount:0;
      })
    }
    //check if total cost is same as paid share and owed share
    let paidAmount = this.expenseMembers.reduce((total, element) => total + element.paidShare, 0);
    let owedAmount = this.expenseMembers.reduce((total, element) => total + element.owedShare, 0);
    //console.log(paidAmount);
    //console.log(owedAmount);
    if(paidAmount!==this.createExpenseForm.value.amount)
    {
      this.toastr.error(`The total of everyone's paid share (Rs.${paidAmount}) is different than total cost (Rs.${this.createExpenseForm.value.amount})` )
    }
    else if(owedAmount!==this.createExpenseForm.value.amount)
    {
      this.toastr.error(`The total of everyone's owed share (Rs.${owedAmount}) is different than total cost (Rs.${this.createExpenseForm.value.amount})` )
    }
    else{
      //console.log(this.expenseMembers)
      //console.log(this.createExpenseForm.value)
      let expenseFormValue=this.createExpenseForm.value;

      let data = {
        expenseName: expenseFormValue.expenseName,
        amount: expenseFormValue.amount,
        splitOption: this.splitOption,
        groupId: this.group.groupId,
        addedOn: Date.now(),
        addedBy: this.currentUserName,
        expenseMembers: this.expenseMembers
      }
      console.log(data);
      this.appService.createExpense(data)
      .subscribe((res) => {
        console.log(res);
        if (!res.error) {
          this.resetForm();
          this.isNewExpense=!this.isNewExpense
          this.toastr.success('Expense Added');
          this.getAllExpenses();
        } else {
          this.toastr.error(res.message);
        }
      }, (error) => {
        console.log('error',error);
      });

    }
  }

  getAllExpenses(){
    this.appService.getAllExpenses().subscribe( (res) =>{
      if(!res.error){
      console.log(res.data);
      this.expenseList=res.data;
      this.isExpenseRecords=this.expenseList.length>0?true:false
      }
      else{
       this.toastr.error(res.message)
      }
    },(error)=>{
      console.log('error',error);
    })
  }

  getExpenseById(expenseId){
    this.appService.getExpenseById(expenseId).subscribe( (res) =>{
      if(!res.error){
      this.expense=res.data;
      console.log(res.data);
      this.setFormValue();
      }
      else{
       this.toastr.error(res.message)
      }
    },(error)=>{
      console.log('error',error);
    })
  }

  setFormValue(){
      this.createExpenseForm.get('expenseName').setValue(this.expense.expenseName);
      this.createExpenseForm.get('amount').setValue(this.expense.amount);
      this.createExpenseForm.get('expenseMembers').setValue(this.expense.expenseMembers);
      this.splitOption=this.expense.splitOption;
  }

  deleteExpense(expenseId){
    this.appService.deleteExpense(expenseId).subscribe( (res) =>{
      console.log(res);
      this.getAllExpenses()
    })
  }

  //if no payer is selected select current user as default payer
  setDefaultPayer(){
    let issinglePayer=this.expenseMembers.filter(function (value) {
      return value.isPayer == true;
    });
    let isMultiplePayer=this.expenseMembers.filter(function (value) {
      return value.isMultiplePayer == true;
    });
    if(isMultiplePayer.length>0)
    this.displayMultiplePayer=true;
    if(issinglePayer.length==0 && isMultiplePayer.length==0)
    {
     this.displayPayer='you';
     this.addSinglePayer(this.currentUserId);
    }
  }

  addSinglePayer(userId){
    //console.log(userId)
    this.displayMultiplePayer=false;
    let displayPayerObj= this.expenseMembers.filter(element => element.userId==userId)['0'];
    this.displayPayer=displayPayerObj.userId==this.currentUserId?'you':displayPayerObj.fullName;

    this.expenseMembers.forEach(element => {
      element.isMultiplePayer=false;
      if(element.userId==userId)
      {
        element.isPayer=true;
        element.paidShare=this.createExpenseForm.value.amount;
      }
      else{
        element.isPayer=false;
        element.paidShare=0.00;
      }
    });
  }

  addMultiplePayer(){
    this.displayMultiplePayer=true;
    this.displayPayer= 'multiple people'
    this.expenseMembers.forEach(element => {
      {
        element.isPayer=false;
        element.isMultiplePayer=true;
      }
    });
  }

  //initially split equally ans split share to all group members
  setDefaultSplitOption(){
    this.splitOption='equal';
    this.expenseMembers.forEach(element => {
      element.isOwer=true;
    });
  }

  calculateOwedShare(element){
    let noOfSplitMembers=this.expenseMembers.filter(element =>element.isOwer==true).length;
    element.owedShare=element.isOwer?this.createExpenseForm.value.amount/noOfSplitMembers:0;
    return element.isOwer?this.createExpenseForm.value.amount/noOfSplitMembers:0;
  }

  calculateOwedSharePercentage(element){
    element.owedShare=element.owedPercentageShare?element.owedPercentageShare/100*this.createExpenseForm.value.amount:0;
    return element.owedShare;
  }

  removeExpenseMember(userId){
    var filtered = this.expenseMembers.filter(function(value){ return value.userId !== userId});
    this.expenseMembers=filtered;
  }

  addExpenseMember(userId){
    let filtered = this.group.groupMembers.filter(function (value) {
      return value.userId == userId;
    });
    var selectedItemExist=false;
    this.expenseMembers.forEach(element => {
      if(element.userId==userId)
      selectedItemExist=true;
    });
    if(!selectedItemExist)
    this.expenseMembers.push(filtered['0'])  
  }
  

}
