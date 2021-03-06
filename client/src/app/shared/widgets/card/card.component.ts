import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;

  @Input() data: [];

  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
        chart: {
            type: 'area',
            backgroundColor: null,
            borderWidth: 0,
            margin: [2,2,2,2],
            height: 60
        },
        colors: ["#4ECDC4", "#1A535C","#F7FFF7", "#FF6B6B", "#FFE66D"],
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        tooltip: {
            split: true,
            outside: true
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        series: [{
          data: this.data
        }]
    }
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300);
  }

}
