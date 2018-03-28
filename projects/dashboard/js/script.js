/*global $, alert, CanvasJS, Chart*/
window.onload = function () {
    "use strict";
    $('nav').height($(document).height());
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 10) {
            $('nav').css("z-index", "0");
        } else {
            $('nav').css("z-index", "2");
        }
    });
    CanvasJS.addColorSet("customColorSet1", [//colorSet Array
        "#ff9dc0",
        "#ffdf7d",
        "#3bc2e5",
        "#e83e3c",
        "#75de18"
    ]);
    var m = new CanvasJS.Chart("chartContainer", {

        data: [{
            type: "area",
            color: "#a1cad4",
			dataPoints: [
				{ x: 10, y: 30 },
				{ x: 20, y: 45 },
				{ x: 30, y: 50 },
				{ x: 40, y: 55 },
				{ x: 50, y: 52 },
				{ x: 60, y: 56 },
				{ x: 70, y: 58 },
				{ x: 80, y: 60 },
				{ x: 90, y: 55 },
                { x: 100, y: 50 },
				{ x: 110, y: 45 },
				{ x: 120, y: 50 },
				{ x: 130, y: 55 },
				{ x: 140, y: 52 },
				{ x: 150, y: 56 }
			]
        },
               {
				type: "area",
                color: "#f4abbb",
                dataPoints: [
                    {x: 10, y: 15},
                    {x: 20, y: 13},
                    {x: 30, y: 20},
                    {x: 40, y: 22},
                    {x: 50, y: 25},
                    {x: 60, y: 28},
                    {x: 70, y: 22},
                    {x: 80, y: 28},
                    {x: 90, y: 29},
                    {x: 100, y: 24},
                    {x: 110, y: 30},
                    {x: 120, y: 33},
                    {x: 130, y: 36},
                    {x: 140, y: 38},
                    {x: 150, y: 30}
                ]
            }
				]
        
    }),
        chart = new CanvasJS.Chart("pie-chart",
	        {
                colorSet : "customColorSet1",
                data: [
		            {
			            type: "doughnut",
                        dataPoints: [
                            { y: 75},
                            { y: 100},
                            { y: 120},
                            { y: 60},
                            { y: 45}
                        ]
                    }
                ]
            });

    m.render();
	chart.render();
    $('#circle1').circleProgress({
        value: 0.75,
        size: 80,
        thickness: 10,
        lineCap: "round",
        reverse: "true",
        emptyFill: "#fff",
        fill: {color: "#4ad0ed"
              }
    });
    $('#circle2').circleProgress({
        value: 0.45,
        size: 80,
        thickness: 10,
        lineCap: "round",
        reverse: "true",
        emptyFill: "#fff",
        fill: {color: "#72db15"
              }
    });
    $('#circle3').circleProgress({
        value: 0.75,
        size: 80,
        thickness: 10,
        lineCap: "round",
        reverse: "true",
        emptyFill: "#fff",
        fill: {color: "#ffa200"
              }
    });
    $('#circle4').circleProgress({
        value: 0.45,
        size: 80,
        thickness: 10,
        lineCap: "round",
        reverse: "true",
        emptyFill: "#fff",
        fill: {color: "#db4915"
              }
    });
    
};