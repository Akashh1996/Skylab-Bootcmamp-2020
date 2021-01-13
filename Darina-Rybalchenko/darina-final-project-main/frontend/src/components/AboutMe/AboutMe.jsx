import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <main className="about-me-container">
      <div className="about-me__image-container">
        <img className="about-me-image" src="https://trello-attachments.s3.amazonaws.com/5fc0f7845fca4370bc8c6bca/5fc759f5e328624c65261bc2/f0e93e21e3dfb95208c0a535471e945d/Daria.jpeg" alt="" />
      </div>
      <div className="about-me-text-container">
        <h1>About Me</h1>
        <p className="about-me-text">
          My name is Daria. I have been involved with movement and exercise for
          most of my life, practicing different  dance
          styles and physical activities.
        </p>
        <p className="about-me-text">
          In 2009 I qualified as a Pilates and Body flex instructor from the
          Lesgaft National State University of Physical Education in St. Petersburg.
          And since then, I completely fell in love with Pilates technique.
          I discovered a passion for helping people feel great through breath,
          movement and body work.
          I assisted many teacher trainings and
          seminars to develop a deeper understanding of the
          anatomy and movement and to create my own style of classes.
        </p>
        <p className="about-me-text">
          In my classes I use mix technique of Pilates,
          Yoga, gymnastic, assisted stretching and body ballet.
          I’m passionate about movement as a tool for physical,
          mental and emotional health and self-discovery.
          And I’m very excited to help you become more flexible.
        </p>
      </div>
    </main>
  );
}
export default AboutMe;
