import React from "react";
import * as d3 from "d3";

const NeutralFace = () => {
  const svgRef = React.useRef();

  React.useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Draw the face circle
    svg
      .append("circle")
      .attr("cx", 50)
      .attr("cy", 50)
      .attr("r", 40)
      .attr("fill", "yellow");

    // Draw the eyes
    svg
      .append("circle")
      .attr("cx", 35)
      .attr("cy", 40)
      .attr("r", 5)
      .attr("fill", "black");

    svg
      .append("circle")
      .attr("cx", 65)
      .attr("cy", 40)
      .attr("r", 5)
      .attr("fill", "black");

    // Draw the mouth
    svg
      .append("path")
      .attr(
        "d",
        "M30 60 Q 50 70, 70 60"
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

export default NeutralFace;
