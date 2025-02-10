// 20250210 황보도연 UI페이지 추가 
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import PageHeader from "../../components/common/PageHeader";
import { ApexOptions } from 'apexcharts'; // Import ApexOptions only

interface ChartConfig {
  title: string;
  subTitle1: string;
  subTitle2: string;
  linkText: string;
  showHeader: boolean;
  hideDownload: boolean;
  chartData: {
    options: ApexOptions;
    series: { name: string; data: [number, number][] }[]; // Series type defined directly
  };
}

const ServerManagement: React.FC = () => {
  const [chartOptions, setChartOptions] = useState<{ options: ApexOptions; series: { name: string; data: [number, number][] }[] } | null>(null);

  useEffect(() => {
    const chartConfig: ChartConfig = {
      title: "Stacked Area",
      subTitle1: "",
      subTitle2: "",
      linkText: "",
      showHeader: false,
      hideDownload: true,
      chartData: {
        options: {
          chart: {
            height: 300,
            type: 'area',
            stacked: true,
            toolbar: {
              show: false,
            },
            events: {
              selection: (chart: any, e: any) => {
                console.log(new Date(e.xaxis.min));
              }
            },
          },
          colors: ['#ffd55d', '#ff7f81', '#e4bd51', '#28a745'],
          dataLabels: {
            enabled: false
          },
          fill: {
            type: 'gradient',
            gradient: {
              opacityFrom: 0.6,
              opacityTo: 0.8,
            }
          },
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            show: true,
          },
          xaxis: {
            type: 'datetime',
          },
          grid: {
            yaxis: {
              lines: {
                show: false,
              }
            },
            padding: {
              top: 20,
              right: 0,
              bottom: 0,
              left: 0
            },
          },
          stroke: {
            show: true,
            curve: 'smooth',
            width: 2,
          },
        },
        series: [
          {
            name: 'CPU',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
              min: 10,
              max: 60
            })
          },
          {
            name: 'GPU',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
              min: 10,
              max: 20
            })
          },
          {
            name: '메모리',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
              min: 10,
              max: 15
            })
          },
          {
            name: '디스크',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
              min: 10,
              max: 15
            })
          }
        ], // No type assertion needed here
      }
    };

    setChartOptions(chartConfig.chartData);
  }, []);

  const generateDayWiseTimeSeries = (baseTime: number, count: number, { min, max }: { min: number, max: number }) => {
    const series: [number, number][] = []; // 반환 타입 명시
    for (let i = 0; i < count; i++) {
      const x = baseTime + i * 1000 * 3600 * 24;
      const y = Math.floor(Math.random() * (max - min + 1)) + min;
      series.push([x, y] as [number, number]); // 타입 단언 추가
    }
    return series;
  };

  if (!chartOptions) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-xxl">
      <PageHeader headerTitle="서버 모니터링" />
      <div className="row clearfix mb-3">
        <div>
          <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type="area"
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default ServerManagement;




