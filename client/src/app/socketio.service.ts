import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket;
  constructor(private toastr: ToastrService,private router:Router,private appService: AppService) {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }
  
  setupSocketConnection(data) {
    console.log(this.socket);
    console.log(data);
    this.socket.on('notification', (data)=>{
    let userId=this.appService.getUserInfoFromLocalstorage().userId
     data.expenseMembers.forEach(element => {
       if(element.userId==userId){
        console.log('socket',data);
        let expenseHistoryNotes='';
        if(data.expenseHistoryObj.expenseHistoryNotes){
          data.expenseHistoryObj.expenseHistoryNotes.forEach(element => {
            expenseHistoryNotes=expenseHistoryNotes+`- ${element}<br>`;
          });
        }
        console.log(expenseHistoryNotes);
          this.toastr.info(expenseHistoryNotes,data.expenseHistoryObj.expenseHistoryNotesBy, {enableHtml: true})   
       }
     });  
    })         
  }
}

