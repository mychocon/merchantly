// First Chart Example - Area Line Chart

Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'morris-chart-area-order-book',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { rate: 1, a: 1},
    { rate: 2, a: 10},
    { rate: 3, a: 1},
    { rate: 4, a: 1},
    { rate: 5, a: 1},
    { rate: 6, a: 1},
    { rate: 7, a: 100},
    { rate: 8, a: 1},
    { rate: 9, a: 1},
    { rate: 10, a: 1},
    { rate: 11, b: 1},
    { rate: 12, b: 1},
    { rate: 13, b: 1},
    { rate: 14, b: 1},
    { rate: 15, b: 1},
    { rate: 16, b: 1},
    { rate: 17, b: 1},
    { rate: 18, b: 1}
  ],
  // The name of the data record attribute that contains x-visitss.
  xkey: 'rate',
  // A list of names of data record attributes that contain y-visitss.
  ykeys: ['a', 'b'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Amount'],
  // Disables line smoothing
  smooth: false,
});


Morris.Area({
  // ID of the element in which to draw the chart.
  element: 'morris-chart-area',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
	{ d: '2012-10-01', Rate: 0.01},
	{ d: '2012-10-02', Rate: 0.034},
	{ d: '2012-10-03', Rate: 0.024},
	{ d: '2012-10-04', Rate: 0.014},
	{ d: '2012-10-05', Rate: 0.034},
	{ d: '2012-10-06', Rate: 0.035},
	{ d: '2012-10-07', Rate: 0.036},
	{ d: '2012-10-08', Rate: 0.037},
	{ d: '2012-10-09', Rate: 0.038},
	{ d: '2012-10-10', Rate: 0.044},
	{ d: '2012-10-11', Rate: 0.044},
	{ d: '2012-10-12', Rate: 0.044},
	{ d: '2012-10-13', Rate: 0.042},
	{ d: '2012-10-14', Rate: 0.024},
	{ d: '2012-10-15', Rate: 0.025},
	{ d: '2012-10-16', Rate: 0.026},
	{ d: '2012-10-17', Rate: 0.022},
	{ d: '2012-10-18', Rate: 0.020},
	{ d: '2012-10-19', Rate: 0.018},
	{ d: '2012-10-20', Rate: 0.01},
	{ d: '2012-10-21', Rate: 0.012},
	{ d: '2012-10-22', Rate: 0.013},
	{ d: '2012-10-23', Rate: 0.03},
	{ d: '2012-10-24', Rate: 0.034},
	{ d: '2012-10-25', Rate: 0.03},
	{ d: '2012-10-26', Rate: 0.034},
	{ d: '2012-10-27', Rate: 0.034},
	{ d: '2012-10-28', Rate: 0.034},
	{ d: '2012-10-29', Rate: 0.034},
	{ d: '2012-10-30', Rate: 0.034},
	{ d: '2012-10-31', Rate: 0.034},
  ],
  // The name of the data record attribute that contains x-visitss.
  xkey: 'd',
  // A list of names of data record attributes that contain y-visitss.
  ykeys: ['Rate'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['rate'],
  // Disables line smoothing
  smooth: false,
});

Morris.Donut({
  element: 'morris-chart-donut',
  data: [
    {label: "Bitcoin", value: 42.7},
    {label: "Litecoin", value: 57.3}
  ],
  formatter: function (y) { return y + "%" ;}
});

Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'morris-chart-line',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
	{ d: '2012-10-01', visits: 802 },
	{ d: '2012-10-02', visits: 783 },
	{ d: '2012-10-03', visits:  820 },
	{ d: '2012-10-04', visits: 839 },
	{ d: '2012-10-05', visits: 792 },
	{ d: '2012-10-06', visits: 859 },
	{ d: '2012-10-07', visits: 790 },
	{ d: '2012-10-08', visits: 1680 },
	{ d: '2012-10-09', visits: 1592 },
	{ d: '2012-10-10', visits: 1420 },
	{ d: '2012-10-11', visits: 882 },
	{ d: '2012-10-12', visits: 889 },
	{ d: '2012-10-13', visits: 819 },
	{ d: '2012-10-14', visits: 849 },
	{ d: '2012-10-15', visits: 870 },
	{ d: '2012-10-16', visits: 1063 },
	{ d: '2012-10-17', visits: 1192 },
	{ d: '2012-10-18', visits: 1224 },
	{ d: '2012-10-19', visits: 1329 },
	{ d: '2012-10-20', visits: 1329 },
	{ d: '2012-10-21', visits: 1239 },
	{ d: '2012-10-22', visits: 1190 },
	{ d: '2012-10-23', visits: 1312 },
	{ d: '2012-10-24', visits: 1293 },
	{ d: '2012-10-25', visits: 1283 },
	{ d: '2012-10-26', visits: 1248 },
	{ d: '2012-10-27', visits: 1323 },
	{ d: '2012-10-28', visits: 1390 },
	{ d: '2012-10-29', visits: 1420 },
	{ d: '2012-10-30', visits: 1529 },
	{ d: '2012-10-31', visits: 1892 },
  ],
  // The name of the data record attribute that contains x-visitss.
  xkey: 'd',
  // A list of names of data record attributes that contain y-visitss.
  ykeys: ['visits'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Visits'],
  // Disables line smoothing
  smooth: false,
});

Morris.Bar ({
  element: 'morris-chart-bar',
  data: [
	{device: 'iPhone', geekbench: 136},
	{device: 'iPhone 3G', geekbench: 137},
	{device: 'iPhone 3GS', geekbench: 275},
	{device: 'iPhone 4', geekbench: 380},
	{device: 'iPhone 4S', geekbench: 655},
	{device: 'iPhone 5', geekbench: 1571}
  ],
  xkey: 'device',
  ykeys: ['geekbench'],
  labels: ['Geekbench'],
  barRatio: 0.4,
  xLabelAngle: 35,
  hideHover: 'auto'
});
