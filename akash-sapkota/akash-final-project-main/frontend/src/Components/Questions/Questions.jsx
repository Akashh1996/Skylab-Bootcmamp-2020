import React from 'react';
import QuestionList from './QuestionList/QuestionList';
import SecondaryNav from './Header/SecondHeader';
import SideBarLeft from './Tags/Tags';
import './questions.css';

function Questions() {
  return (

    <>
      <div className="banner" />
      <main>
        <div className="main-content">
          <SecondaryNav />
          <span className="side-bar-mobile">
            {' '}
            <SideBarLeft />
            {' '}
          </span>
          <QuestionList />
        </div>
        <div className="side-tag">
          <SideBarLeft />
        </div>
      </main>
    </>

  );
}
export default Questions;
