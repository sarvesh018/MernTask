import React from "react";
import { Link } from "react-router-dom";
import { Components } from "./Constants";

export default function Home() {
  return (
    <>
      <div>
        <div className="mb-10 text-2xl font-extrabold">Mern Tasks</div>
        <div className="my-10">
          <p>Github Repository Link: <a href="https://github.com/sarvesh018/MernTask">Link</a></p>
        </div>
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
