var svg = d3.select('svg');

/* Your code goes here */


var circleData = [];
var angle = 0;
var ringRadius = 100;
var ringCenterX = 200;
var ringCenterY = 200;

for (i=0; i<12; i++){
     //try removing + ringCenterX and Y and ringRadius to see what happens
     circleData.push({ x: ringRadius * Math.sin(angle) + ringCenterX , y: ringRadius * Math.cos(angle) + ringCenterY , r:10});

    angle = angle + (2*Math.PI/12);
    console.log(circleData);
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























