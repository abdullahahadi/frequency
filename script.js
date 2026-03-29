const width = 600;
const height = 600;

// Add an svg element to the page
let svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)


d3.select("textarea").on("input", e => {

    const frequency = {};
    e.target.value.split("").forEach(char => {
        let currentCount = frequency[char] || 0;
        frequency[char] = currentCount + 1;
    });
    console.log(frequency)
})