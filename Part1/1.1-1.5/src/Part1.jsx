import React from "react";

function Part1({ course }) {
  return (
    <div>
      <p>
        {course.parts[0].name} {course.parts[0].exercises}
      </p>
    </div>
  );
}

export default Part1;
