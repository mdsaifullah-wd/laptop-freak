import React from "react";

const Qna = ({ question, answer }) => {
  return (
    <div className='mb-7'>
      <h3 className='text-3xl mb-4 font-semibold text-primary'>{question}</h3>
      <p className='text-lg'>{answer}</p>
    </div>
  );
};

export default Qna;
