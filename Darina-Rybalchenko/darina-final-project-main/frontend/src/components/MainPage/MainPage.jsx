import React from 'react';
import './MainPage.css';
import WorkoutList from './WorkoutList';
import WorkoutSlider from './WorkoutSlider';

function MainPage() {
  return (
    <>
      <WorkoutSlider />

      <div className="web-description">
        <p>
          Daria Power Stretch is a contemporary stretching,
          yoga &
          pilates outdoor workout classes offering professional instruction
          to those seeking balance of mind and body.
        </p>
      </div>
      <WorkoutList />
    </>
  );
}

export default MainPage;
