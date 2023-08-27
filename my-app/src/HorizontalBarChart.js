import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const HorizontalBarChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const svg = d3.select(chartRef.current);
    const margin = { top: 20, right: 20, bottom: 20, left: 100 };
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

    svg
      .selectAll("rect")
      .data(sortedData)
      .enter()
      .append("rect")
      .attr("x", margin.left)
      .attr("y", d => y(d.name))
      .attr("width", d => x(d.vote))
      .attr("height", y.bandwidth())
      .attr("fill", "steelblue");

    svg
      .selectAll("text")
      .data(sortedData)
      .enter()
      .append("text")
      .attr("x", d => margin.left + x(d.vote) + 10)
      .attr("y", d => y(d.name) + y.bandwidth() / 2)
      .attr("dy", "0.35em")
      .text(d => d.vote);

    svg.attr("transform", `translate(${margin.left},${margin.top})`);
  }, [data]);

  return <svg ref={chartRef} width="600" height="400"></svg>;
};

export default HorizontalBarChart;

