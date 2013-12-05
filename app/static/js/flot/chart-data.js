//Flot Line Chart with Tooltips
$(document).ready(function(){
    console.log("document ready");
    var offset = 0;
    plot();
    function plot(){
        var bids = [[0.1, 1000],[0.2,850],[0.3,700],[0.4,500],[0.5,200],[0.6,100],[0.7,10]];
        var asks = [[0.8,10],[0.9,100],[1,1000]];
    
        var options = {
            series: {
                lines: { show: true },
                points: { show: true }
            },
            grid: {
                hoverable: true //IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "Volume: %y",
            }
        };
    
        var plotObj = $.plot( $("#flot-chart-line"),
            [{data:bids, label:"bids"}, {data:asks, label:"asks"}],
            options );
    }
});
//Flot Chart Dynamic Chart

$(function() {

    var container = $("#flot-chart-moving-line");

    // Determine how many data points to keep based on the placeholder's initial size;
    // this gives us a nice high-res plot while avoiding more than one point per pixel.

    var maximum = container.outerWidth() / 2 || 300;

    //

    var data = [];

    function getRandomData() {

        if (data.length) {
            data = data.slice(1);
        }

        while (data.length < maximum) {
            var previous = data.length ? data[data.length - 1] : 50;
            var y = previous + Math.random() * 10 - 5;
            data.push(y < 0 ? 0 : y > 100 ? 100 : y);
        }

        // zip the generated y values with the x values

        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }

        return res;
    }

    //

    series = [{
        data: getRandomData(),
        lines: {
            fill: true
        }
    }];

    //

    var plot = $.plot(container, series, {
        grid: {
            hoverable:true,
            borderWidth: 1,
            minBorderMargin: 20,
            labelMargin: 10,
            backgroundColor: {
                colors: ["#fff", "#e4f4f4"]
            },
            margin: {
                top: 8,
                bottom: 20,
                left: 20
            },
            markings: function(axes) {
                var markings = [];
                var xaxis = axes.xaxis;
                for (var x = Math.floor(xaxis.min); x < xaxis.max; x += xaxis.tickSize * 2) {
                    markings.push({ xaxis: { from: x, to: x + xaxis.tickSize }, color: "rgba(232, 232, 255, 0.2)" });
                }
                return markings;
            }
        },
        tooltip: true,
        tooltipOpts: {
            content: "%y"
        },
        xaxis: {
            tickFormatter: function() {
                return "";
            }
        },
        yaxis: {
            min: 0,
            max: 110
        },
        legend: {
            show: true
        }
    });

    // Update the random dataset at 25FPS for a smoothly-animating chart

    setInterval(function updateRandom() {
        series[0].data = getRandomData();
        plot.setData(series);
        plot.draw();
    }, 40);

});

//Flot Pie Chart with Tooltips
$(function () {

    var data = [
        { label: "Bitcoin", data: 53.7},
        { label: "Litecoin", data: 46.3 },
    ];
    
    var plotObj = $.plot($("#flot-chart-pie"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true 
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });
    
});
