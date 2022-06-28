import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  option: EChartsOption;
  offerBarChartData$ = new BehaviorSubject<EChartsOption>(null);

  ngOnInit() {
    this.InitPipe();
  }

  private InitPipe(): void {
    this.option = {
      legend: {
        data: ['bar', 'bar2', 'bar3', 'bar4'],
        left: '10%',
      },
      toolbox: {
        feature: {
          magicType: {
            type: ['stack'],
          },
        },
      },
      tooltip: {},
      xAxis: {
        data: ['bar', 'bar2', 'bar3', 'bar4'],
        name: 'X Axis',
      },
      yAxis: {},
      grid: {
        bottom: 100,
      },
      series: [
        {
          name: 'bar',
          type: 'bar',
          stack: 'one',
          data: [7, 8, 9, 2],
        },
        {
          name: 'bar2',
          type: 'bar',
          stack: 'one',
          data: [7, 8, 9, 2],
        },
        {
          name: 'bar3',
          type: 'bar',
          stack: 'two',
          data: [7, 8, 9, 2],
        },
        {
          name: 'bar4',
          type: 'bar',
          stack: 'two',
          data: [1, 2, 8, 6],
        },
      ],
    };

    setTimeout(() => {
      this.offerBarChartData$.next({
        legend: {
          data: ['bar', 'bar2', 'bar3', 'bar4'],
          left: '10%',
        },
        xAxis: {
          data: ['bar', 'bar2', 'bar3', 'bar4'],
        },
        yAxis: {},
        series: [
          {
            name: 'bar',
            type: 'bar',
            stack: 'one',
            data: [1, 2, 3, 4],
          },
          {
            name: 'bar2',
            type: 'bar',
            stack: 'one',
            data: [1, 2, 3, 4],
          },
          {
            name: 'bar3',
            type: 'bar',
            stack: 'two',
            data: [1, 2, 3, 4],
          },
          {
            name: 'bar4',
            type: 'bar',
            stack: 'two',
            data: [1, 2, 3, 4],
          },
        ],
      });
    }, 1500);
  }
}
