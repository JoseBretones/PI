import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  currentRoute='';

  @Input() displayedColumns: string[];
  @Input() dataSource: MatTableDataSource<any>;

  constructor(private router: Router , private activatedRoute: ActivatedRoute) {
    this.currentRoute = this.activatedRoute.snapshot.routeConfig.path;
   }

  ngOnInit(): void {
    this.displayedColumns.push('Acciones');
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  goToNewEntity(){
    this.router.navigateByUrl(this.currentRoute+'/nuevo');
  }
  goToEditEntity(entidad){
    this.router.navigateByUrl(`${this.currentRoute}/editar/${entidad.id}`);

  }
}
