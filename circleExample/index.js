var svg = d3.select('svg');


/*////////////////////////////////////
*  Make a ring of circles
*/////////////////////////////////////

var circleData = [];
var angle = 0;
var ringRadius = 100;
var ringCenterX = 200;
var ringCenterY = 200;

for (i=0; i<12; i++){
     //try removing + ringCenterX and Y and ringRadius to see what happens
     circleData.push({ x: ringRadius * Math.sin(angle) + ringCenterX , y: ringRadius * Math.cos(angle) + ringCenterY , r:10});

    angle = angle + (2*Math.PI/12);
}


svg.selectAll('circle')
    .data(circleData)
    .enter()
    .append('circle')
    .attr('cx', function(d){
        console.log(d.x);
        return d.x;
    })
    .attr('cy', function(d){
        return d.y;
    })
    .attr('r', function(d){
        return d.r;
    })
    .attr('fill', 'blue');


/*////////////////////////////////////
*  Add grid rectangles
*/////////////////////////////////////

var gridData = [];
var stepX = 25;
var stepY = 25;

var rectData = [];

//This one makes just a line of rectangles:
/*
for (i=0; i<8; i++){
    rectData.push({x: i*stepX, y: 0, width: 10, height:10});
}
*/

//to make a grid, use two for loops nested inside each other:
for (i=0; i<8; i++){
    for(j =0; j<8; j++){
        rectData.push({x: i*stepX, y: j*stepY, width: 10, height:10});
    }
}



svg.selectAll('rect')
    .data(rectData)
    .enter()
    .append('rect')
    .attr('x', function(d){
        return d.x;
    })
    .attr('y', function(d){
        return d.y;
    })
    .attr('width', function(d){
        return d.width;
    })
    .attr('height', function(d){
        return d.height;
    })
    .attr('fill', 'blue');
















