import { Component, OnInit } from '@angular/core';
import { AttendClass } from 'src/app/models/attendClass';
import { MatTableDataSource } from '@angular/material/table';
import { AttendClassService } from 'src/app/services/attend-class.service';
import { ClienteService } from 'src/app/services/client.service';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-attend-class',
  templateUrl: './attend-class.component.html',
  styleUrls: ['./attend-class.component.css']
})
export class AttendClassComponent implements OnInit {

  attendClassCollection: AttendClass[] = [];
  displayedColumns: string[] = ['cliente','clase','nombreMonitor','horaComienzo','horaFinalizacion','fechaClase'];
  dataSource: MatTableDataSource<AttendClass>;


  constructor(private attendClassService: AttendClassService, private clientService: ClienteService
    , private classService: ClassService) {
    this.getAllAttendClass();
  }

  ngOnInit(): void {
  }

  getAllAttendClass(){
    this.attendClassService.lista().subscribe(attendClassList => {
      attendClassList.forEach(element => {
        this.clientService.detalle(element.cliente.id).subscribe(cliente =>{
            element.cliente = cliente.nombre;
        });
        this.classService.detalle(element.clase.id).subscribe(clase =>{
            element.clase = clase.actividad.nombre;
        });
        element.fechaClase = this.myDateParser(element.fechaClase);
      });
      this.attendClassCollection = attendClassList;
      this.dataSource = new MatTableDataSource(this.attendClassCollection);
    });
  }
  myDateParser(dateStr: string): string {
    // 1997-10-10T22:00:00.000+0000
    let date = dateStr.substring(0, 10);
    let validDate = date;
    return validDate
  }
}
