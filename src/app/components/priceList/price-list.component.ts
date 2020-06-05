import { Component, OnInit } from '@angular/core';
import { PriceList } from 'src/app/models/priceList';
import { MatTableDataSource } from '@angular/material/table';
import { PriceListService } from 'src/app/services/priceList.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {


  priceListCollection: PriceList[] = [];
  displayedColumns: string[] = ['tipo', 'coste'];
  dataSource: MatTableDataSource<PriceList>;


  constructor(private priceListService: PriceListService) {
    this.getAllPriceList();
   }

  ngOnInit(): void {
  }

  getAllPriceList(){
    this.priceListService.lista().subscribe(priceList =>{
        this.priceListCollection = priceList;
        this.dataSource = new MatTableDataSource(this.priceListCollection);
      });
  }

}
