import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts"; // ✅ ApexOptions 타입 import

interface ChartProps {
    title: string;
    categories: string[];
    data: number[];
    label: string;
}

const ChartComponent: React.FC<ChartProps> = ({ title, categories, data, label }) => {
    const options: ApexOptions = {  // ✅ 타입을 ApexOptions으로 지정
        chart: {
            type: "bar", // ✅ 문자열 그대로 사용 가능
        },
        xaxis: { categories },  // ✅ categories는 string[]이므로 문제 없음
        plotOptions: { 
            bar: { horizontal: false }  // ✅ boolean 값 문제 없음
        },
        dataLabels: { enabled: true }  // ✅ boolean 값 문제 없음
    };

    const series = [{ name: label, data }];  // ✅ 데이터 타입 올바름

    return (
        <div className="tour-chart-wrapper">
            <h2>{title}</h2>
            <Chart options={options} series={series} type="bar" height={300} />
        </div>
    );
};

export default ChartComponent;
