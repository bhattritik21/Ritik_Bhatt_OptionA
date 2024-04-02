import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";


const Chart1 = () => {

    const chartRef = useRef<HTMLDivElement>(null);
    let myChart: echarts.ECharts | null = null;

    useEffect(() => {
        if (chartRef.current) {
            myChart = echarts.init(chartRef.current, null, {
              renderer: "canvas",
              useDirtyRect: false,
            });
      
            const profession = [
              "Operations",
              "Sales",
              "IT",
              "HR",
              "Finance",
              "Customer_Service",
              "Marketing",
              "Office_of_CEO",
              "Products",
            ];
            const Pdata = [16.6, 15.3, 13.7, 12.9, 12.5, 12.3, 11.9, 11, 9.37];
            const Ldata = [16.6, 18.1, 11.6, 20.8, 9.27, 12, 10.9, 0, 8.59];
      
            const option = {
              grid: {
                left: 100,
              },
              xAxis: {
                type: "value",
                axisLabel: {
                  formatter: "{value}%",
                },
                axisLine: {
                  lineStyle: {
                      color: 'black', 
                      width: 2, 
                  },
              },
                
              },
              yAxis: {
                type: "category",
                inverse: true,
                data: profession,
                axisLabel: {
                  margin: 20,
                  rich: {
                    Cloudy: {
                      height: 10,
                      align: "center",
                    },
                    Showers: {
                      height: 10,
                      align: "center",
                    },
                  },
                },
              },
              series: [
                {
                  name: "profit",
                  type: "bar",
                  color: "rgb(93 181 227)",
                  data: Pdata,
                  label: {
                    show: true,
                    formatter: "{c}%",
                    position: "right",
                    color: "rgb(93 181 227)",
                  },
                },
                {
                  name: "loss",
                  type: "bar",
                  color: "rgb(242 143 120)",
                  data: Ldata,
                  label: {
                    show: true,
                    formatter: "{c}%",
                    position: "right",
                    color: "rgb(242 143 120)",
                  },
                },
              ],
            };
      
            if (option && typeof option === "object" && myChart) {
              myChart.setOption(option);
            }
      
            window.addEventListener("resize", handleResize);
      
            // Cleanup function to remove event listener and dispose chart
            return () => {
              window.removeEventListener("resize", handleResize);
              if (myChart) {
                myChart.dispose();
              }
            };
          }
        }, []);

        const handleResize = () => {
            if (myChart) {
              myChart.resize();
            }
          };
  return (
    <div className="chart1" ref={chartRef} style={{ width: "50%", height: "77vh",marginLeft:"20px" }} />
  )
}

export default Chart1