import React from "react";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

function Content({ course }) {
  return (
    <div>
      <Part1 course={course} />

      <Part2 course={course} />

      <Part3 course={course} />
    </div>
  );
}

export default Content;
