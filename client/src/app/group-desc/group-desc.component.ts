import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
//declare var jQuery:any;

@Component({
  selector: 'app-group-desc',
  templateUrl: './group-desc.component.html',
  styleUrls: ['./group-desc.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GroupDescComponent implements OnInit {
  isGroupList=false;
  groupList=[];
  addEditLabel:String;
  currentUserId;
  currentUserName;
  createGroupForm:FormGroup;
  group;
  isExpenseRecords:boolean;
  createExpenseForm:FormGroup;
  expense;
  expenseList=[];
  expenseMembers=[];
  expenseHistory=[];
  displayMultiplePayer:boolean;
  displayPayer;
  splitOption:string;
  isExpenseChanged:boolean;
  expenseInitial;
  expenseMembersInitial;
  expenseHistoryNotes=[];

  @ViewChild('closeBtnAddExpense') closeBtn: ElementRef;

  constructor( private appService: AppService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private route:ActivatedRoute) { 
      this.resetForm()
      this.getAllGroups()
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
      updatedBy:[null],
      expenseHistory:[[]]
    })
  }

  resetExpense(){
    this.resetForm()
    //set default payer
    this.addSinglePayer(this.currentUserId);
    //initially split equally and split share to all group members
    this.splitOption='equal';
    this.expenseMembers.forEach(element => {
      element.isOwer=true;
    });
  }

  createExpense(){
    let amountFilled =this.createExpenseForm.value.amount
    //if single payer, add paidShare 
    if(!this.displayMultiplePayer){
      this.expenseMembers.forEach(element => {
        element.paidShare=element.isSolePayer?amountFilled:0;
      })
    }
    //check if total cost is same as paid share and owed share
    let paidAmount = this.expenseMembers.reduce((total, element) => total + element.paidShare, 0);
    let owedAmount = this.expenseMembers.reduce((total, element) => total + element.owedShare, 0);
    //console.log(paidAmount);
    //console.log(owedAmount);
    //if amount is 0
    if(amountFilled==0){
      this.toastr.error(`You must enter an amount.` )
    }
    else if(paidAmount!==amountFilled)
    {
      this.toastr.error(`The total of everyone's paid share (Rs.${paidAmount}) is different than total cost (Rs.${amountFilled})` )
    }
    else if(owedAmount!==amountFilled)
    {
      this.toastr.error(`The total of everyone's owed share (Rs.${owedAmount}) is different than total cost (Rs.${amountFilled})` )
    }
    else if(this.addEditLabel=='Add'){
      //console.log(this.expenseMembers)
      //console.log(this.createExpenseForm.value)
      let expenseFormValue=this.createExpenseForm.value;
      let expenseHistoryNotesBy=`${this.currentUserName} created this expense`;
      let expenseHistoryObj ={
        expenseHistoryNotesBy:expenseHistoryNotesBy
      }
      let expenseHistory=[]
      expenseHistory.push(expenseHistoryObj);
      
      let data = {
        expenseName: expenseFormValue.expenseName,
        amount: expenseFormValue.amount,
        splitOption: this.splitOption,
        groupId: this.group.groupId,
        addedOn: Date.now(),
        addedBy: this.currentUserName,
        expenseMembers: this.expenseMembers,
        expenseHistory: expenseHistory
      }
      console.log(data);
      this.appService.createExpense(data)
      .subscribe((res) => {
        console.log(res);
        if (!res.error) {
          this.resetForm();
          //close addexpense modal
          //jQuery("#myModal").modal("hide");
          this.closeBtn.nativeElement.click();
          this.toastr.success('Expense Added');
          this.getAllExpenses();
          this.notify(this.expenseMembers,expenseHistoryObj);
          this.expenseHistoryNotes=[]
        } else {
          this.toastr.error(res.message);
        }
      }, (error) => {
        console.log('error',error);
      });
    }
    else if(this.addEditLabel=='Edit'){
      //console.log(this.expenseMembers)
      //console.log(this.createExpenseForm.value)
      this.onFormChanges()
      let expenseHistoryNotesBy=`${this.currentUserName} updated this expense`;
      let expenseHistoryObj ={
        expenseHistoryNotesBy:expenseHistoryNotesBy,
        expenseHistoryNotes:this.expenseHistoryNotes
      }
      console.log('expenseHistoryNotes',this.expenseHistoryNotes);
      this.expense.expenseHistory.push(expenseHistoryObj);

      let expenseFormValue=this.createExpenseForm.value;

      let data = {
        expenseId: this.expense.expenseId,
        expenseName: expenseFormValue.expenseName,
        amount: expenseFormValue.amount,
        splitOption: this.splitOption,
        groupId:this.group.groupId,
        updatedOn: Date.now(),
        updatedBy: this.currentUserName,
        expenseMembers: this.expenseMembers,
        expenseHistory:this.expense.expenseHistory
      }

      console.log(data);
      this.appService.editExpense(data)
      .subscribe((res) => {
        console.log(res);
        if (!res.error) {
          this.resetForm();
          this.closeBtn.nativeElement.click();
          this.toastr.success('Expense Edited');
          this.getAllExpenses();
          this.notify(this.expenseMembers,expenseHistoryObj)
          this.expenseHistoryNotes=[]
        } else {
          this.toastr.error(res.message);
        }
      }, (error) => {
        console.log('error',error);
      });

    }
  }

  onFormChanges(){
    let expenseFormValue=this.createExpenseForm.value;
    //let expenseHistoryNotes=[];
    if(this.expenseInitial.expenseName!==expenseFormValue.expenseName)
    this.expenseHistoryNotes.push(`Expense Name has changed from '${this.expenseInitial.expenseName}' to '${expenseFormValue.expenseName}'`)
    if(this.expenseInitial.amount!==expenseFormValue.amount)
    this.expenseHistoryNotes.push(`Expense Name has changed from ${this.expenseInitial.amount} to ${expenseFormValue.amount}`)
    //compare expense members 
    //console.log('expenseMembersInitial',JSON.parse(this.expenseMembersInitial));
    let isSolePayer=this.expenseMembers.filter(element =>element.isSolePayer==true);
    let isSolePayerInitial=JSON.parse(this.expenseMembersInitial).filter(element =>element.isSolePayer==true);

    //if payshare changed
    let ispaidShareChanged=false;
    JSON.parse(this.expenseMembersInitial).forEach((element) => {
      let expenseObj=this.expenseMembers.filter(value=>value.userId==element.userId)
      if(expenseObj.length>0){
        if(expenseObj['0'].paidShare!==element.paidShare)
        {ispaidShareChanged=true; }
      }
    });
    if(isSolePayer.length>0 && isSolePayerInitial.length>0)
    {
      if(isSolePayer['0'].userId!==isSolePayerInitial['0'].userId){
        this.expenseHistoryNotes.push(`Payer changed from ${isSolePayerInitial['0'].fullName} to ${isSolePayer['0'].fullName}`);
      }
    }
    else if(ispaidShareChanged){
      let payshareText='Payer changed from ';
      JSON.parse(this.expenseMembersInitial).forEach((element,index) => {
        if(element.paidShare!=0)
        payshareText=payshareText+`${index==JSON.parse(this.expenseMembersInitial).length-1?'and':(index==0?'':',')} ${element.firstName}(Rs.${element.paidShare})`
        });
      payshareText=payshareText+' to ';
      this.expenseMembers.forEach((element,index) => {
        if(element.paidShare!=0)
        payshareText=payshareText+`${element.firstName}(Rs.${element.paidShare})${index==this.expenseInitial.length-1?'and':','}`
      });
      this.expenseHistoryNotes.push(payshareText);
    }
    

    JSON.parse(this.expenseMembersInitial).forEach((element) => {
      //find current expense member
      let expenseObj=this.expenseMembers.filter(value=>value.userId==element.userId)
      if(expenseObj.length>0){
      if(expenseObj['0'].owedShare!==element.owedShare)
      this.expenseHistoryNotes.push(`${element.fullName} share changed from Rs.${element.owedShare} to Rs.${expenseObj['0'].owedShare}`);
      }
  });
    
  }

  getAllExpenses(){
    this.appService.getAllExpenses(this.group.groupId).subscribe( (res) =>{
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
      console.log('->',res.data.expenseMembers);
      this.expense=res.data;
      this.expenseInitial= res.data;
      this.expenseMembersInitial=JSON.stringify(res.data.expenseMembers);
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
      this.expenseMembers=this.expense.expenseMembers;
      this.createExpenseForm.get('expenseName').setValue(this.expense.expenseName);
      this.createExpenseForm.get('amount').setValue(this.expense.amount);
      this.createExpenseForm.get('expenseMembers').setValue(this.expense.expenseMembers);
      this.splitOption=this.expense.splitOption;
      this.setDisplayPayer();
  }

  deleteExpense(expense){
    this.appService.deleteExpense(expense.expenseId).subscribe( (res) =>{
      console.log(res);
      this.getAllExpenses()
    })
  }


  setDisplayPayer(){
      let isSolePayer=this.expenseMembers.filter(function (value) {
        return value.isSolePayer == true;
      });
      if(isSolePayer.length>0){
        this.displayPayer=isSolePayer['0'].fullName==this.currentUserName?'you':isSolePayer['0'].fullName
      }
      let isMultiplePayer=this.expenseMembers.filter(function (value) {
        return value.isMultiplePayer == true;
      });
      if(isMultiplePayer.length>0){
        this.displayPayer='multiple people'
      }
  }


  addSinglePayer(userId){
    this.isExpenseChanged=true;
    //console.log(userId)
    this.displayMultiplePayer=false;
    let displayPayerObj= this.expenseMembers.filter(element => element.userId==userId)['0'];
    this.displayPayer=displayPayerObj.userId==this.currentUserId?'you':displayPayerObj.fullName;

    this.expenseMembers.forEach(element => {
      element.isMultiplePayer=false;
      if(element.userId==userId)
      {
        element.isSolePayer=true;
        element.paidShare=this.createExpenseForm.value.amount;
      }
      else{
        element.isSolePayer=false;
        element.paidShare=0.00;
      }
    });
  }

  addMultiplePayer(){
    this.isExpenseChanged=true;
    this.displayMultiplePayer=true;
    this.displayPayer= 'multiple people'
    this.expenseMembers.forEach(element => {
      {
        element.isSolePayer=false;
        element.isMultiplePayer=true;
      }
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
    this.isExpenseChanged=true;
    var filteredName = this.expenseMembers.filter(value=> value.userId == userId)['0'].fullName;
    var filtered = this.expenseMembers.filter(function(value){ return value.userId !== userId});
    this.expenseMembers=filtered;
    
    this.expenseHistoryNotes.push(`${filteredName} is removed from Expense`);
  }

  addExpenseMember(userId){
    this.isExpenseChanged=true;
    let filtered = this.group.groupMembers.filter(function (value) {
      return value.userId == userId;
    });
    var selectedItemExist=false;
    this.expenseMembers.forEach(element => {
      if(element.userId==userId)
      selectedItemExist=true;
    });
    if(!selectedItemExist){
    this.expenseMembers.push(filtered['0'])  
    this.expenseHistoryNotes.push(`${filtered['0'].fullName} is added in Expense`);
    }
  }

  expensePayerText(expense){
   let isMultiplePayer = expense.expenseMembers['0'].isMultiplePayer;
   if(isMultiplePayer){
    let noOfPayers=expense.expenseMembers.filter(value=>value.paidShare>0).length;
    return `${noOfPayers} people paid`
   }
   else{
    let isSolePayer=expense.expenseMembers.filter(value=>value.isSolePayer==true)
    if(isSolePayer.length>0){
      let payer=isSolePayer['0'].fullName;
    return `${payer} paid`
    }
   }
  }

  yourShareText(expense){
    var isMultiplePayer = expense.expenseMembers['0'].isMultiplePayer;
    if(isMultiplePayer){
      let yourExpense= expense.expenseMembers.filter(value=>value.userId==this.currentUserId);
      let netBalance=yourExpense['0'].paidShare-yourExpense['0'].owedShare;
      return `you ${netBalance>0?'lent':'borrowed'}`
    }else{
      var isSolePayer=expense.expenseMembers.filter(value=>value.isSolePayer==true);
      if(isSolePayer.length>0){
        return isSolePayer['0'].userId==this.currentUserId?'you lent':isSolePayer['0'].fullName+' lent you';
      }
    }
  }

  yourShare(expense){
    let isCurrentUserExpense=expense.expenseMembers.filter(value=>value.userId==this.currentUserId);
    if(isCurrentUserExpense.length>0){
      let netBalance=isCurrentUserExpense['0'].paidShare-isCurrentUserExpense['0'].owedShare;
    return netBalance==0?`nothing`:Math.abs(netBalance);
    }else{
      return 0;
    }
  }

  isUserInvolved(expense){
    let isCurrentUserExpense=expense.expenseMembers.filter(value=>value.userId==this.currentUserId);
    return isCurrentUserExpense.length>0?true:false;
  }

  getAllGroups(){
    let userId= this.appService.getUserInfoFromLocalstorage().userId
    this.appService.getAllGroups(userId).subscribe( (res) =>{
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

  calculateBalance(groupMember){
    let paidAmount=0;
    let owedAmount=0
    this.expenseList.forEach(element => {
       let member=element.expenseMembers.filter(value=>value.userId==groupMember.userId);
        if(member.length>0)
        {paidAmount=paidAmount+member['0'].paidShare
         owedAmount=owedAmount+member['0'].owedShare
        }
    });
    let netBalance=paidAmount-owedAmount
    return  netBalance>0?`gets back Rs.${netBalance}`:`owes Rs.${Math.abs(netBalance)} `;
  }

  notify(expenseMembers,expenseHistoryObj){
//   let notification={}
//   notification['expenseMembers']=expenseMembers;
//   notification['expenseHistoryObj']=expenseHistoryObj
//   this.socketService.socket.emit('sendnotification', notification);
  }
  

}
