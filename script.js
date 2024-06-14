// Create a function.
function main() {
    // Create interactive behavior with D3.
    d3.selectAll("div")
        .on("mouseover", function(){
            d3.select(this)
        })
        .on("mouseout", function(){
            d3.select(this)
        })
}