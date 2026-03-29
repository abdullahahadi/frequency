const width = 600;
const height = 600;

// Add an svg element to the page
let svg = d3
    .select("body")
    .append("svg")
    .attr("width",  width)
    .attr("height", height)