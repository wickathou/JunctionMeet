import React from 'react';
import { Container, Form, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { applyFilter } from '../redux/challenges/challengesSlice';

function NavFilters() {
  const dispatch = useDispatch();
  const { challenges, challengeFilter } = useSelector((store) => store.challenges);

  const handleChallengeChange = (event) => {
    dispatch(applyFilter(event.target.value));
  };

  const resetFilters = () => {
    dispatch(applyFilter('All challenges'));
  };

  return (
    <Container className="d-flex justify-content-between align-items-center">
      <h1>Join team</h1>
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Form.Select value={challengeFilter} onChange={handleChallengeChange}>
            {challenges.map((challenge, index) => (
              <option key={index} value={challenge.name}>
                {challenge.name}
              </option>
            ))}
          </Form.Select>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={resetFilters}>Reset filter</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}

// function CategorySelector() {
//   const dispatch = useDispatch();
//   const { categories, categoryFilter } = useSelector((store) => store.categories);

//   const handleSelectChange = (event) => {
//     dispatch(applyFilter(event.target.value));
//   };
//   return (
//     <select className="px-2 pb-1 pt-2 text-sky-900 bg-white" value={categoryFilter} onChange={handleSelectChange}>
//       {categories.map((category) => (
//         <option key={category} value={category}>
//           {category}
//         </option>
//       ))}
//     </select>
//   );
// }

export default NavFilters;
