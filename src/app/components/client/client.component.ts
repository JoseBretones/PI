import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {


  clientCollection: Client[] = [];
  displayedColumns: string[] = ['nombre', 'apellidos', 'direccion', 'fechaNacimiento', 'telefono', 'dni', 'email',
    'fechaAlta', 'diasEntrenados', 'tarifa'];
  dataSource: MatTableDataSource<Client>;

  constructor(private clientService: ClienteService) {
    this.getAllClients();
  }


  ngOnInit(): void { }


  private getAllClients() {
    this.clientService.lista().subscribe(clientList => {
      clientList.forEach(element => {
        element.fechaNacimiento = this.myDateParser(element.fechaNacimiento);
        element.fechaAlta = this.myDateParser(element.fechaAlta);
      });
      this.clientCollection = clientList;
      this.dataSource = new MatTableDataSource(this.clientCollection);
    });
  }



  myDateParser(dateStr: string): string {
    // 1997-10-10T22:00:00.000+0000
    let date = dateStr.substring(0, 10);
    let validDate = date;
    return validDate
  }



}
