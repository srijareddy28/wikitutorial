const svg = d3.select("#editPreview")
  .append("svg")
  .attr("width", 400)
  .attr("height", 200);

svg.append("circle")
  .attr("cx", 200)
  .attr("cy", 100)
  .attr("r", 50)
  .attr("fill", "lightblue")
  .on("mouseover", function() {
    d3.select(this).attr("fill", "skyblue");
  })
  .on("mouseout", function() {
    d3.select(this).attr("fill", "lightblue");
  })
  .on("click", function() {
    alert("You clicked the circle!");
  });

svg.append("text")
  .attr("x", 200)
  .attr("y", 100)
  .attr("dy", ".35em")
  .attr("text-anchor", "middle")
  .text("Edit Preview");