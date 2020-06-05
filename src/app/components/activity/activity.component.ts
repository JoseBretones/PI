import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activity';
import { MatTableDataSource } from '@angular/material/table';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activityCollection: Activity[] = [];
  displayedColumns: string[] = ['nombre' , 'descripcion'];
  dataSource: MatTableDataSource<Activity>;

  constructor(private activityService: ActivityService) {
    this.getAllActivities();
   }

  ngOnInit(): void {
  }

  getAllActivities(){

      this.activityService.lista().subscribe(activityList =>{
        this.activityCollection = activityList;
        this.dataSource = new MatTableDataSource(this.activityCollection);
      });

  }
}
