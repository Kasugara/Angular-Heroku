import { Injectable } from "@angular/core";
import Swal from "sweetalert2";


@Injectable()
export class MessageService{
    constructor() {}
    
    showSuccessMessage(msg1:string,msg2:string){
        Swal.fire(msg1,msg2,"success");
    }

    showErrorMessage(msg1:string,msg2:string){
        Swal.fire(msg1,msg2,"error");
    }

}