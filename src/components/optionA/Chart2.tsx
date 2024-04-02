import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ECharts, EChartsOption } from 'echarts';

const Chart2 = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let myChart: ECharts | null = null;
        if (chartRef.current) {
            myChart = echarts.init(chartRef.current, null, {
                renderer: 'canvas',
                useDirtyRect: false,
            });
            const option: EChartsOption = {
                tooltip: {
                    trigger: 'axis',
                },
                grid: {
                    top: 80,
                    bottom: 30,
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} pp',
                    },
                    splitLine: {
                        lineStyle: {
                            type: 'dashed',
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'black', 
                            width: 2, 
                        },
                    },
                },
                yAxis: {
                    type: 'category',
                    axisLine: { show: false },
                    axisLabel: { show: false },
                    axisTick: { show: false },
                    splitLine: { show: false },
                },
             series:[
                    {
                      name: 'Cost',
                      type: 'bar',
                      color: 'rgb(93 209 200)',
                      barWidth: 40,
                      label: {
                        show: true,
                        color: 'rgb(93 209 200)',
                        position: 'right',
                        formatter: function (params: any) {
                          return (
                            (params.data.value >= 0 ? '+' : '') + params.data.value + ' pp'
                          );
                        },
                      },
                      data: [
                        { value: 0.78 },
                        { value: 11.0 },
                        { value: 1.08 },
                        { value: 3.2 },
                        { value: -7.9 ,label: { position: 'left' }},
                        { value: 2.04 },
                        { value: -2.87,label: { position: 'left' } },
                        { value: 0.01 },
                      ],
                    },
                  ],
            };

            if (option && typeof option === 'object' && myChart) {
                myChart.setOption(option);
            }

            window.addEventListener('resize', () => {
                if (myChart) {
                    myChart.resize();
                }
            });

            return () => {
                window.removeEventListener('resize', () => {
                    if (myChart) {
                        myChart.resize();
                    }
                });

                if (myChart) {
                    myChart.dispose();
                }
            };
        }
    }, []);

    return <div className="chart2" ref={chartRef} style={{ width: '40%', height: '74vh',marginLeft:'20px' }}></div>;
}

export default Chart2