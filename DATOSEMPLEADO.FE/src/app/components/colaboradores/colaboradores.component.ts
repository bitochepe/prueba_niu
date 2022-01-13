import { Component, OnInit } from '@angular/core';
import { ColaboradoresService } from '../../services/colaboradores.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  Lcolaboradores:any;

  constructor(private colaboradoresService:ColaboradoresService) { 
    this.Lcolaboradores = [];
  }

  ngOnInit(): void {
  }

  getAll(){
    this.colaboradoresService.getAll().subscribe({
      next: (data:any) => {
        console.log(data)
        if(data.status == true){
          this.Lcolaboradores = data.result;
          Swal.fire({
            icon: 'success',
            title: 'Datos cargados',
            text: 'Datos cargados correctamente'
          })
        }
        else{
          console.log(data)
          Swal.fire('Error',data.err,'error');
        }
      },
      error: (err) => {
        Swal.fire('Error',err.message,'error');
        console.log(err);
      }
    });
  }

  getInfo(age:number){
    Swal.fire({
      icon: 'info',
      title: 'Nivel de riesgo',
      text: this.getmessage(age)
    })
  }

  private getmessage(age:number){
    if (age >=18 && age <=25){
      return 'FUERA DE PELIGRO';
    }
    if (age >=26 && age <=50){
      return 'TENGA CUIDADO, TOME TODAS LAS MEDIDAS DE PREVENSION';
    }
    return "POR FAVOR QUEDARSE EN CASA"
  }
}
