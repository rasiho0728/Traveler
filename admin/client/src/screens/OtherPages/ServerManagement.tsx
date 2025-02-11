// 20250210 황보도연 UI페이지 추가 
// 20250210 황보도연 UI페이지 추가 
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import PageHeader from "../../components/common/PageHeader";
import { ApexOptions } from 'apexcharts';

interface ChartConfig {
  options: ApexOptions;
  series: { name: string; data: [number, number][] }[];
}

const ServerManagement: React.FC = () => {
  const [chartData, setChartData] = useState<{ [key: string]: ChartConfig } | null>(null);

  useEffect(() => {
    const generateDayWiseTimeSeries = (baseTime: number, count: number, { min, max }: { min: number, max: number }) => {
      const series: [number, number][] = [];
      for (let i = 0; i < count; i++) {
        const x = baseTime + i * 1000 * 3600 * 24;
        const y = Math.floor(Math.random() * (max - min + 1)) + min;
        series.push([x, y]);
      }
      return series;
    };

    const baseTime = new Date('11 Feb 2017 GMT').getTime();

    const chartTypes = [
      { name: 'CPU', color: '#ffd55d', range: { min: 10, max: 60 } },
      { name: 'GPU', color: '#ff7f81', range: { min: 10, max: 20 } },
      { name: '메모리', color: '#e4bd51', range: { min: 10, max: 15 } },
      { name: '디스크', color: '#28a745', range: { min: 10, max: 15 } }
    ];

    const charts = chartTypes.reduce((acc, { name, color, range }) => {
      acc[name] = {
        options: {
          chart: {
            height: 300,
            type: 'area',
            toolbar: { show: false },
          },
          colors: [color],
          dataLabels: { enabled: false },
          fill: {
            type: 'gradient',
            gradient: { opacityFrom: 0.6, opacityTo: 0.8 },
          },
          legend: { position: 'top', horizontalAlign: 'right', show: true },
          xaxis: { type: 'datetime' },
          grid: {
            yaxis: { lines: { show: false } },
            padding: { top: 20, right: 0, bottom: 0, left: 0 },
          },
          stroke: { show: true, curve: 'smooth', width: 2 },
          title: {
            text: `${name} 사용량`,
            align: 'center',
            style: { fontSize: '16px' }
          }
        },
        series: [{ name, data: generateDayWiseTimeSeries(baseTime, 20, range) }]
      };
      return acc;
    }, {} as { [key: string]: ChartConfig });

    setChartData(charts);
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-xxl">
      <PageHeader headerTitle="서버 모니터링" />
      <div className="row clearfix mb-3">
        {Object.keys(chartData).map((key, index) => (
          <div key={index} className="col-md-12 mb-4">
            <Chart options={chartData[key].options} series={chartData[key].series} type="area" height={300} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerManagement;





