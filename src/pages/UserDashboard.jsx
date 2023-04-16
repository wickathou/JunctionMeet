import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import DashCard from '../components/DashCard';

function userDashboard() {
  const teams = [1, 2, 3];
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
      <Masonry gutter="20px">
        {teams.map((item) => <DashCard key={item} data={item} />)}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default userDashboard;
