import React from "react";
import * as d3 from "d3";

const HappyFace = () => {
  const svgRef = React.useRef();

  React.useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Set the dimensions and position of the SVG container
    const svgWidth = 100;
    const svgHeight = 100;
    const centerX = svgWidth / 2;
    const centerY = svgHeight / 2;

    // Draw the face circle
    svg
      .append("circle")
      .attr("cx", centerX)
      .attr("cy", centerY)
      .attr("r", 40)
      .attr("fill", "yellow");

    // Draw the eyes
    svg
      .append("circle")
      .attr("cx", centerX - 15)
      .attr("cy", centerY - 10)
      .attr("r", 5)
      .attr("fill", "black");

    svg
      .append("circle")
      .attr("cx", centerX + 15)
      .attr("cy", centerY - 10)
      .attr("r", 5)
      .attr("fill", "black");

    // Draw the mouth
    svg
      .append("path")
      .attr(
        "d",
        `M${centerX - 20} ${centerY + 10} Q ${centerX} ${centerY + 30}, ${centerX + 20} ${centerY + 10}`
      )
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 3);
  }, []);

  return (
    <svg
      ref={svgRef}
      width={100}
      height={100}
      style={{ display: "block", margin: "0 auto" }}
    />
  );
};

export default HappyFace;
