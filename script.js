const width = 600;
const height = 600;

// Add an svg element to the page
let svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

function update(data) {
    // Select all existing rect elements and bind the new data to them
    svg
        .selectAll("rect")
        .data(data)
        // Join the data to rect elements (create, update, or remove as needed)
        .join("rect")
        // Set the width of each bar proportional to the character's frequency
        .attr("width", (d, i) => d.count * 5)
        // Set a fixed height of 10 pixels for each bar
        .attr("height", 10)
        // Position all bars at x = 20 (left alignment)
        .attr("x", 20)
        // Stack bars vertically with 20 pixels spacing between each
        .attr("y", (d, i) => i * 20)
}

d3.select("textarea").on("input", e => {

    const frequencies = {};
    e.target.value.split("").forEach(char => {
        let currentCount = frequencies[char] || 0;
        frequencies[char] = currentCount + 1;
    });

    let data = Object.entries(frequencies).map(pair => {
        return {
            char: pair[0],
            count: pair[1]
        }
    })
    data.sort((a, b) => d3.ascending(a.char, b.char));
    update(data)
})