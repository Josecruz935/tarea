import { Component,OnInit} from '@angular/core';
import { Empleado } from 'src/app/api/models';
import { EmpleadoControllerService } from 'src/app/api/services';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

empleado:Empleado[]=[];


contructor(
  private empleadoService:EmpleadoControllerService,

) {}
ngOnInit(): void {
  this.empleadoService.find().subscribe(data=>this.empleado=data)

}

eliminar(id?:string):void{
this.empleadoService.deleteById({id}).suscribe(()=>{
  this.empleado=this.empleado.filter(x=> x.id !==id);
  this.messageService.succes('registro Eliminado')
})

}



}
