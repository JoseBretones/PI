import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/models/class';
import { MatTableDataSource } from '@angular/material/table';
import { ClassService } from 'src/app/services/class.service';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  classCollection: Class[] = [];
  displayedColumns: string[] = ['diaSemana','horaComienzo','horaFinalizacion','actividad','monitor'];
  dataSource: MatTableDataSource<Class>;


  constructor(private classService: ClassService, private instructorService: InstructorService) {
    this.getAllClass();
  }

  ngOnInit(): void {
  }

  private getAllClass() {
    this.classService.lista().subscribe(classList =>{
      classList.forEach((element: Class) => {
        this.instructorService.detalle(element.monitor.id).subscribe(data=>{
            element.monitor = data;
        });
      });
      this.classCollection = classList;
      this.dataSource = new MatTableDataSource(this.classCollection);
    });
  }
}
