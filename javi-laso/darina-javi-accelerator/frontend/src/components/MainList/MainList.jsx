import React from 'react';
import './MainList.css';
import ProjectListItem from '../ProjectListItem/ProjectListItem';
import Filters from '../Filters/Filters';

function MainList() {
  return (
    <main className="p-4 pt-5">
      <h2 className="mb-4 item-title">Search your job</h2>
      <div className="d-flex">
        <Filters />
        <ProjectListItem />
      </div>
    </main>
  );
}

export default MainList;
