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
    const options: ApexOptions = {
        chart: {
            type: "bar",
            fontFamily: "Poppins, sans-serif", // ✅ 차트 폰트 스타일 적용
            foreColor: "#444", // ✅ 기본 글자색
        },
        plotOptions: { 
            bar: { 
                horizontal: false,
                borderRadius: 8, // ✅ 막대 둥글게 적용
                colors: {
                    ranges: [{ from: 0, to: 100, color: "#2f89fc" }], // ✅ 특정 값 범위 색상 지정
                },
            }  
        },
        xaxis: { 
            categories,
            labels: { 
                style: { fontSize: "14px", fontWeight: 600, colors: "#444" } 
            },
        },
        yaxis: {
            labels: { 
                style: { fontSize: "14px", fontWeight: 600, colors: "#666" } 
            },
        },
        tooltip: {
            theme: "dark", // ✅ 툴팁 다크 테마 적용
            style: { fontSize: "14px", fontFamily: "Poppins, sans-serif" },
        },
        dataLabels: { 
            style: { fontSize: "16px", fontWeight: "bold", colors: ["#fff"] } 
        },
        colors:["#F85959"],
    };

    const series = [{ name: label, data }];

    return (
        <div style={{
            height: "270px",
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
            transition: "all 0.3s ease-in-out",
        }}>
            <h2 style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "black",
                marginBottom: "10px",
                fontFamily: "Poppins, sans-serif"
            }}>
                {title}
            </h2>
            <Chart options={options} series={series} type="bar" height={300} width="340px"/>
        </div>
    );
};

export default ChartComponent;
