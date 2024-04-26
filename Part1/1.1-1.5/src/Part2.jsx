import React from "react";

function Part2({ course }) {
  return (
    <div>
      <p>
        {course.parts[1].name} {course.parts[1].exercises}
      </p>
    </div>
  );
}

export default Part2;
