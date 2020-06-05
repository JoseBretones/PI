import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/models/instructor';
import { MatTableDataSource } from '@angular/material/table';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

 instructorCollection: Instructor[] = [];
  displayedColumns: string[] = ['nombre','apellidos','dni','telefono','email'];
  dataSource: MatTableDataSource<Instructor>;

  constructor(private instructorService: InstructorService) {
    this.getAllInstructor();
   }

  ngOnInit(): void {
  }

  getAllInstructor(){
    this.instructorService.lista().subscribe(priceList =>{
        this.instructorCollection = priceList;
        this.dataSource = new MatTableDataSource(this.instructorCollection);
      });
  }


}
