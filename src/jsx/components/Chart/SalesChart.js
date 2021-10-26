import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class SalesChart extends Component {
   render() {
      const data = {
			labels: ["January", "February", "March", "April", "May"],
			datasets: [{
				label: "",
				backgroundColor: ['#36b5ec85'],
				borderColor: '#36b5ec',
				pointBackgroundColor: '#36b5ec',
				pointBorderColor: '#36b5ec',
				borderWidth:4,
				borderRadius:10,
				pointHoverBackgroundColor: '#36b5ec',
				pointHoverBorderColor: '#36b5ec',
				data: [0, 4, 2, 5, 6]
			}]
      };
      const options = {
		responsive: true,
		maintainAspectRatio: false,
			title: {
				display: 1
			},
			tooltips: {
				enabled: false,
				intersect: !1,
				mode: "nearest",
				xPadding: 10,
				yPadding: 10,
				caretPadding: 10
			},
			legend: {
				display: !1
			},
			responsive: !0,
			maintainAspectRatio: !1,
			hover: {
				mode: "index"
			},
			scales: {
				xAxes: [{
					display: !1,
					gridLines: !1,
					scaleLabel: {
						display: !0,
						labelString: "Month"
					}
				}],
				yAxes: [{
					display: !1,
					gridLines: !1,
					scaleLabel: {
						display: !0,
						labelString: "Value"
					},
					ticks: {
						beginAtZero: !0
					}
				}]
			},
			elements: {
				point: {
					radius: 0,
					borderWidth: 0
				}
			},
			layout: {
				padding: {
					left: 0,
					right: 0,
					top: 5,
					bottom: 0
				}
			}
      };

      return (
         <>
            <Line data={data} height={89} options={options} />
         </>
      );
   }
}

export default SalesChart;
