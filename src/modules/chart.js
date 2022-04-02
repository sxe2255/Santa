/* Imports */
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';


const createChart = (userData) => {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create('chartdiv', am4charts.XYChart);
    for(let key in userData.dateHistory){
        if(key === '0'){
            chart.data.push({
                'месяц':'Январь',
                'Подарков отправлено': userData.dateHistory[key]
            });
        }else if(key === '1'){
            chart.data.push({
                'месяц':'Февраль',
                'Подарков отправлено': userData.dateHistory[key]
            });
        }else if(key === '2'){
            chart.data.push({
                'месяц':'Март',
                'Подарков отправлено': userData.dateHistory[key]
            });
        }else if(key === '3'){
            chart.data.push({
                'месяц':'Апрель',
                'Подарков отправлено': userData.dateHistory[key]
            });
        }else if(key === '4'){
            chart.data.push({
                'месяц':'Май',
                'Подарков отправлено': userData.dateHistory[key]
            });
        }else if(key === '5'){
            chart.data.push({
                'месяц':'Июнь',
                'Подарков отправлено': userData.dateHistory[key]
            });
        }else if(key === '6'){
            chart.data.push({
                'месяц':'Июль',
                'Подарков отправлено': userData.dateHistory[key]
            });
        }else if(key === '7'){
            chart.data.push({
                'месяц':'Август',
                'Подарков отправлено': userData.dateHistory[key]
            });
        }else if(key === '8'){
            chart.data.push({
                'месяц':'Сентябрь',
                'Подарков отправлено': userData.dateHistory[key]
            });
        }else if(key === '9'){
            chart.data.push({
                'месяц':'Октябрь',
                'Подарков отправлено': userData.dateHistory[key]
            });
        }else if(key === '10'){
            chart.data.push({
                'месяц':'Ноябрь',
                'Подарков отправлено': userData.dateHistory[key]
            });
        }else if(key === '11'){
            chart.data.push({
                'месяц':'Декабрь',
                'Подарков отправлено': userData.dateHistory[key]
            });
        }
    }

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'месяц';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add('dy', function(dy, target) {
    if (target.dataItem && target.dataItem.index & 2 == 2) {
        return dy + 25;
    }
    return dy;
    });

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'Подарков отправлено';
    series.dataFields.categoryX = 'месяц';
    series.name = 'Подарков отправлено';
    series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]';
    series.columns.template.fillOpacity = .8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
}

export {createChart}