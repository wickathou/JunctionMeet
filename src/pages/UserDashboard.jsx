import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useSelector } from 'react-redux';
import DashCard from '../components/DashCard';

function userDashboard() {
  const { status } = useSelector((store) => store.user);
  const { teams } = useSelector((store) => store.teams);
  const { challenges, challengeFilter } = useSelector((store) => store.challenges);

  let teamTiles;
  if (challengeFilter !== 'All challenges') {
    teamTiles = teams.filter((team) => team.challenge === challengeFilter);
  } else {
    teamTiles = teams;
  }

  let content;
  if (status === 'Signed in') {
    content = (
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
        <Masonry gutter="20px">
          {teamTiles.map((team, index) => <DashCard key={index} data={team} />)}
        </Masonry>
      </ResponsiveMasonry>
    );
  } else {
    content = (
      <div>
        <h1>We would love to show you this ✨</h1>
        <h2>Just sign in!</h2>
      </div>
    );
  }

  return (
    <main>
      {content}
    </main>
  );
}

export default userDashboard;
