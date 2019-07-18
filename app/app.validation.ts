import {Component} from '@angular/core';

@Component({
    selector:'add-det',
    templateUrl:'validation.html'
})
export class ValidationComponent{
    status:any="INVALID"
    Name:any="";
    Address:any="";
    Pincode:any="";


 // change the status

    addData(){
        this.status="Valid";
    }
     
        
      
}
