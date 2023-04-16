import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import DashCard from '../components/DashCard'

function userDashboard() {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2}}>
      <Masonry gutter="20px">
        {testArray.map((item) => <DashCard key={item} data={item} />)}
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default userDashboard