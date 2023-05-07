import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService, private authService: AuthService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value);
      this.authService.login(loginModel).subscribe(response => {
        window.localStorage.setItem("token",response.data.token);
        this.toastrService.success(response.message, "Giriş Başarılı");
        //console.log(response);
      }
        , responseError => {
          //console.log(responseError);
          this.toastrService.error(responseError.error.message, "Giriş Başarısız");
        })
    }
    else {
      this.toastrService.error("Formunuz Eksik!", "Hata");
    }
  }

}
