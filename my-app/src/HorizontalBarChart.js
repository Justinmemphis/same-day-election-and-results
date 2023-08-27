import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import horseImage from './horse.png';

const HorizontalBarChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const svg = d3.select(chartRef.current);
    const margin = { top: 20, right: 20, bottom: 20, left: 150 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const sortedData = [...data].sort((a, b) => b.vote - a.vote);

    const x = d3.scaleLinear()
      .domain([0, d3.max(sortedData, d => d.vote)])
      .range([0, width]);

    const y = d3.scaleBand()
      .domain(sortedData.map(d => d.name))
      .range([0, height])
      .padding(0.1);

    svg.selectAll("*").remove(); // Clear existing elements

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

    svg.attr("transform", `translate(${margin.left},${margin.top})`);
  }, [data]);

  return <svg ref={chartRef} width="800" height="400"></svg>;
};

export default HorizontalBarChart;

