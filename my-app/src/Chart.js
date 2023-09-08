import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import horseImage from './horse.png';

const Chart = ({ data, currentSlide, title }) => { // Add the 'title' prop
  const chartRef = useRef();

  useEffect(() => {
    const svg = d3.select(chartRef.current);
    const margin = { top: 30, right: 20, bottom: 20, left: 200 }; // Increased top margin for the title
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const sortedData = [...data].sort((a, b) => b.vote - a.vote);

    const x = d3.scaleLinear()
      .domain([0, d3.max(sortedData, d => d.vote)])
      .range([0, width]);

    const y = d3.scaleBand()
      .domain(sortedData.map(d => d.name))
      .range([25, height])
      .padding(0.1);

    svg.selectAll("*").remove(); // Clear existing elements

    // Add a title text element
    svg.append("text")
      .attr("x", width - 100)
      .attr("y", margin.top / 2) // Positioned above the chart
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .text(title);

    svg
      .selectAll("line") // Create dashed line elements
      .data(sortedData)
      .enter()
      .append("line")
      .attr("x1", margin.left) // Starting position on the left
      .attr("x2", d => margin.left + x(d.vote)) // Ending position
      .attr("y1", d => y(d.name) + y.bandwidth() / 2)
      .attr("y2", d => y(d.name) + y.bandwidth() / 2)
      .attr("stroke", "steelblue")
      .attr("stroke-dasharray", "3,3"); // Set the dash pattern

    svg
      .selectAll("image") // Create image elements
      .data(sortedData)
      .enter()
      .append("image")
      .attr("x", margin.left)
      .attr("y", d => y(d.name))
      .attr("width", 20) // Adjust the width of the image as needed
      .attr("height", y.bandwidth())
      .attr("xlink:href", horseImage) // Set the image source
      .transition()
      .duration(3000)
      .attr("x", d => margin.left + x(d.vote)) // final position

    // these are the numeric labels to the right of the image
    svg
      .selectAll(".text-label")
      .data(sortedData)
      .enter()
      .append("text")
      .attr("class", "text-label")
      .attr("x", d => margin.left + x(d.vote) + 30) // Adjusted to be right of the image
      .attr("y", d => y(d.name) + y.bandwidth() / 2)
      .attr("dy", "0.35em")
      .text(d => d.vote);

    // these are the name labels to the left of the y-axis
    svg
      .selectAll(".name-label")
      .data(sortedData)
      .enter()
      .append("text")
      .attr("class", "name-label")
      .attr("x", margin.left - 15)
      .attr("y", d => y(d.name) + y.bandwidth() / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .text(d => d.name);

    svg.attr("class", "chartClass");

    svg.attr("transform", `translate(${margin.left - 100},${margin.top})`);
  }, [data, currentSlide, title]); // Include 'title' in dependencies

  return <svg ref={chartRef} width="800" height="400"></svg>;
};

export default Chart;

