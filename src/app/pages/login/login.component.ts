import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/emitter/modal.service';
import { LoginResponse } from 'src/app/model/response/loginResponse';
import { LoginSignature } from 'src/app/model/signature/loginSignature';
import { LoginService } from 'src/app/services/login.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm :any;
  public loding:boolean = false;


  constructor(public dialog:MatDialog, 
    private modalService:ModalService, 
    private loginService:LoginService, 
     private router:Router){
    this.InicializarFormularioLogin();
  }

  InicializarFormularioLogin(){
    this.loginForm = new FormGroup({
      usuario: new FormControl('',Validators.required),
      senha : new FormControl('',Validators.required)
    })
  }

  EfetuarLogin(){    
    this.loding = true;
   let loginSignature = new LoginSignature();
   loginSignature.usuario = this.usuario;
   loginSignature.senha = this.senha;

   const myObserver = {
    next: (x: LoginResponse[]) =>{ 
      if(x[0].sucess === true){
        this.router.navigateByUrl('dashboard/home');
      }else{

        // let config = new MatDialogConfig()      
        // config.minWidth = "400px";
        // config.maxWidth = "900px";          
        // config.enterAnimationDuration = '2000ms';
        // config.exitAnimationDuration = '1000ms';
  
        // this.dialog.open(ModalComponent,config)
        this.modalService.AbrirModal("Não foi possível realizar o login , tente novamente")
        this.loding = false;
      }
    },
    error: (err: any) => {  
      console.log(err);
      this.modalService.AbrirModal(err.message)
      this.loding = false;

    },
    complete: () => {    },
   }

   this.loginService.Login(loginSignature).subscribe(myObserver);

  }


 get usuario() { 
  return this.loginForm.get('usuario').value; 
}
 
 get senha() { 
  return this.loginForm.get('senha').value; 
 }

}
