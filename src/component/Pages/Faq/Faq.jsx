import React from 'react';

const Faq = () => {
  return (
    <div className="lg:w-[800px] mx-auto w-[95%] my-48">
    <div className="collapse collapse-arrow">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
      What are the technology requirements to take an Edule course?
      </div>
      <div className="collapse-content bg-primary text-primary-content   peer-checked:bg-secondary peer-checked:text-secondary-content text-justify">
        <p>
        You will need a computer, a high speed Internet connection, a newer version of a web browser, and access to common tools and software like word processors, email, etc. Some courses may have other software or technology requirements as well.
        </p>
      </div>
    </div>
    <div className="collapse collapse-arrow">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
      What are the admission requirements for Edule Learning courses?
      </div>
      <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        <p>
        The Edule Learning program currently operates in semesters and each Edule course carries between two and four semester credits. Registration begins when the course offerings are listed on the Edule Learning website and continues until the first day of classes or the course is full. Please carefully read through the registration section for your student status before you register
        </p>
      </div>
    </div>
    <div className="collapse collapse-arrow">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
      Is it possible to earn a degree through the Morris Edule Learning program?
      </div>
      <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        <p>
        The Morris campus does not currently offer entire degree programs Edule. The Edule Learning program is a set of lower division general education courses that can be applied to an associate or bachelor's degree. Transferring these credits to any institution of higher learning is possible after admission criteria are met at that institution and upon review of the requested transfer credits by the transferring-in institution’s registrar. Please feel free to contact the Edule Learning office with your questions on registering for these courses. University of Minnesota Morris Admissions office can assist you with your questions about admission to Morris.
        </p>
      </div>
    </div>
  </div>
  );
};

export default Faq;