import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx'
declare var SMS:any;
declare var document:any;
var smsstat:boolean=false;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
regForm;
otpScreen:boolean=false;
otpflow:boolean=false;
pass:string;
cpass:string;
username:string;
otp:string;
  constructor(private reg:RegisterService,private fs:FormBuilder){
    this.regForm=   this.fs.group({
         username:["",[Validators.required,Validators.pattern("^[a-z][a-z0-9_]{4,}$")]],
         firstname:["",[Validators.required,Validators.pattern('^[A-Z][a-z]+$')]],
         email:['',[Validators.required, Validators.pattern(
          "^[A-Za-z][A-Za-z_\.0-9]+@[A-Za-z]+[\.][A-Za-z]{2,5}$")]],
         mobile:['',[Validators.required,Validators.pattern('^[1-9][0-9]{9}$')]]
       })
   }

  ngOnInit() {
   
  }

  register(){
    this.username=this.regForm.value.username;

    var temp:any={
      username: this.regForm.value.username,
      email: this.regForm.value.email,
      mobile:this.regForm.value.mobile,
      firstname:this.regForm.value.firstname
    }

    this.reg.postAccount(temp).subscribe(
      ()=>{
        this.otpScreen=true;
        this.otpflow=true;
        
      },
      ()=>{
        

      }
    )
  }

  verifyOTP(){
    let obj={username:this.username,password:this.otp}
       this.reg.verifyOTP(obj).subscribe(
         ()=>{
               this.otpflow=false;
               console.log("succeeded");
         },
         (error)=>{
           if(error.status==200)
                this.otpflow=false;
            else{
              console.log(error);
              console.log("failed");
            }
         }
       )
  }

  updatePassword(){
    if(this.pass==this.cpass){
      let obj={username:this.username,password:this.pass};
      console.log(obj);
      this.reg.updatePassword(obj).subscribe(
        ()=>{
           console.log("success");
        },
        ()=>{
            console.log("error.status");
        }
      )
    }
  }

}
