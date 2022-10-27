import React from "react";

const Blog = () => {
  return (
    <div className="lg:w-[800px] mx-auto w-[95%] lg:my-20 my10">
       <div className="my-8 text-left">
          <h1 className="lg:text-3xl text-2xl text-white capitalize font-bold mb-2">what is cors?</h1>
          <p className="text-white text-base">- CORS is a node. js package for providing a Connect/Express middleware that can be used to enable CORS with various options.</p>
       </div>
       <div className="my-8 text-left">
          <h1 className="lg:text-3xl text-2xl text-white capitalize font-bold mb-2">Why are you using firebase? What other options do you have to implement authentication?</h1>
          <p className="text-white text-base">- Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
          <br />
          other options :- Auth0, MongoDB, Passport, Okta.
          </p>
       </div>
       <div className="my-8 text-left">
          <h1 className="lg:text-3xl text-2xl text-white capitalize font-bold mb-2"> How does the private route work?</h1>
          <p className="text-white text-base">- The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
       </div>
       <div className="my-8 text-left">
          <h1 className="lg:text-3xl text-2xl text-white capitalize font-bold mb-2"> What is Node? How does Node work?</h1>
          <p className="text-white text-base">-It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
       </div>
    </div>
  );
};

export default Blog;
