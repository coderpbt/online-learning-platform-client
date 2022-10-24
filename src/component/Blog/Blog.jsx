import React from "react";

const Blog = () => {
  return (
    <div className="lg:w-[600px] mx-auto w-[95%] my-48">
      <div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          What is purpose react router?
        </div>
        <div className="collapse-content bg-primary text-primary-content   peer-checked:bg-secondary peer-checked:text-secondary-content text-justify">
          <p>
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL.
          </p>
          <p>
            It keeps track of the location and renders different Routes as it
            changes, and it also gives you tools to update the location using
            Links and the history API.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          How does context api work?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          How does useref work in react?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            useRef returns a mutable ref object whose .current property is
            initialized to the passed argument ( initialValue ). The returned
            object will persist for the full lifetime of the component.
            Essentially, useRef is like a “box” that can hold a mutable value in
            its .current property.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
