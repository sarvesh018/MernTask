import React from "react";
import { Link } from "react-router-dom";
import { Components } from "./Constants";

export default function Home() {
  return (
    <>
      <div>
        <div className="mb-10">Mern Tasks</div>
        <div>
          {/* Task 1:<Link to="WordCount"> Word Count</Link> */}
        {Components.map((names) => (
            <ul key={names.id}>
                Link {names.id}: <Link to={names.name}>{names.name}</Link>
            </ul>
        ))}
        </div>
      </div>
    </>
  );
}
