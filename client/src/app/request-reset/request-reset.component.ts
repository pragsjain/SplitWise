import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  RequestResetForm: FormGroup;
  IsvalidForm = true;

  constructor(private appService: AppService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.RequestResetForm = new FormGroup({
      //'email': new FormControl(null, [Validators.required, Validators.email]),
      'userName': new FormControl('',[Validators.required])
    });
  }

  RequestResetUser(form) {
    console.log(form)
    if (form.valid) {
      this.IsvalidForm = true;
      this.appService.requestReset(this.RequestResetForm.value).subscribe(
        data => {
          if(!data.error){
            this.RequestResetForm.reset();
            this.toastr.success("Reset password link send to email sucessfully.")
            setTimeout(() => {
              this.router.navigate(['login']);
            }, 3000);
         }
          else {
            this.toastr.error(data.message)
          }
        },
        err => {
          if (err.error.message) {
            this.toastr.error('Some error occured '+err.error.message)
          }
        }
      );
    } else {
      this.IsvalidForm = false;
    }
  }
}



