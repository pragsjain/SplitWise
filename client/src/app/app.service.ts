import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Observable,throwError, of } from 'rxjs';
import { map ,catchError} from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  //private url =  'https://chatapi.edwisor.com';
  private url =  environment.SOCKET_ENDPOINT

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
  ) {} 
  getUserInfoFromLocalstorage = () => {
    return JSON.parse(localStorage.getItem('userInfo'));
  } 
  setUserInfoInLocalStorage = (data) =>{
    localStorage.setItem('userInfo', JSON.stringify(data));
  }
  getTokenFromLocalstorage = () => {
    return JSON.parse(localStorage.getItem('authtoken'));
  } 
  setTokenInLocalStorage = (data) =>{
    localStorage.setItem('token', JSON.stringify(data));
  }

  fullNameSource = new BehaviorSubject<string>('');
  fullName = this.fullNameSource.asObservable()


  signupFunction(formdata): Observable<any> {
    return this.http.post(`${this.url}/api/v1/users/signup`, formdata);
  } 

  signinFunction(formdata): Observable<any> {
    return this.http.post(`${this.url}/api/v1/users/login`, formdata);
  } 

  logout(userId): Observable<any> {
    return this.http.post(`${this.url}/api/v1/users/${userId}/delete`,userId);
  } 

  requestReset(body): Observable<any> {
    return this.http.post(`${this.url}/api/v1/users/req-reset-password`, body);
  }

  newPassword(body): Observable<any> {
    return this.http.post(`${this.url}/api/v1/users/new-password`, body);
  }

  ValidPasswordToken(body): Observable<any> {
    return this.http.post(`${this.url}/api/v1/users/valid-password-token`, body);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.url}/api/v1/users/all`)
    .pipe(map((response:any) =>{
        return response;
    }),catchError(<T>(error: any, result?: T) => {
      console.log(error);
      return this.handleError(error)
    }))
  } 

  //GROUPS
  createGroup(formdata): Observable<any> {
      return this.http.post(`${this.url}/api/v1/groups/create`, formdata);
  } 

  getAllGroups(userId): Observable<any> {
    return this.http.get(`${this.url}/api/v1/groups/${userId}/all`)
    .pipe(map((response:any) =>{
        return response;
    }),catchError(<T>(error: any, result?: T) => {
      console.log(error);
      return this.handleError(error)
    }))
  } 

  getGroupById(groupId): Observable<any> {
    return this.http.get(`${this.url}/api/v1/groups/view/${groupId}`);
  }  

  editGroup(data): Observable<any> {
    return this.http.put(`${this.url}/api/v1/groups/${data['groupId']}/edit`, data);
  } 

  deleteGroup(groupId): Observable<any> {
    return this.http.post(`${this.url}/api/v1/groups/${groupId}/delete`,groupId);
  } 

  //EXPENSES
  createExpense(formdata): Observable<any> {
      return this.http.post(`${this.url}/api/v1/expenses/create`, formdata);
  } 

  getAllExpenses(groupId,page,numberOfExpensePerPage): Observable<any> {
    return this.http.get(`${this.url}/api/v1/expenses/${groupId}/all?page=${page}&numberOfExpensePerPage=${numberOfExpensePerPage}`)
    .pipe(map((response:any) =>{
        return response;
    }),catchError(<T>(error: any, result?: T) => {
      console.log(error);
      return this.handleError(error)
    }))
  } 

  getExpenseById(expenseId): Observable<any> {
    return this.http.get(`${this.url}/api/v1/expenses/view/${expenseId}`);
  }  

  editExpense(data): Observable<any> {
    return this.http.put(`${this.url}/api/v1/expenses/${data['expenseId']}/edit`, data);
  } 

  deleteExpense(expenseId): Observable<any> {
    return this.http.post(`${this.url}/api/v1/expenses/${expenseId}/delete`,expenseId);
  } 


  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.error.text}`;

    } // end condition *if

    this.toastr.error(err.error.text);
    return throwError(errorMessage);

  }  // END handleError

}
