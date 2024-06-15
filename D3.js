// This is the javascript file to add interactivity to the elements

// U94741303

// Implement form
document.addEventListener("DOMContentLoaded", function () {
    initialize();
});

// Implement chart
function initialize() {
    const chart = d3.select("#chart");

    // Generate data to put original colors
    const data = [1, 2, 3];

    // Bind data to div elements
    const divs = chart.selectAll(".datapoint")
        .data(data)
        .enter()
        .append("div")
        .attr("class", "datapoint")

        // Change background color when mousing over
        .on("mouseover", function () {
            d3.select(this)
                .style("background-color", "chartreuse");
        })
        .on("mouseout", function () {
            // Change background color back to default after
            d3.select(this)
                .style("background-color", "RebeccaPurple");
        });
}