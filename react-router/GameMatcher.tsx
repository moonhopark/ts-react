import * as React from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router';

import NumberBaseball from '../NumberBaseball/NumberBaseball';
import RSP from '../RSP/RSP';
import Lotto from '../Lotto/Lotto';

const GameMatcher = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let urlSearchParams = new URLSearchParams(location.search.slice(1)); // 쿼리스트링 부분
  console.log(urlSearchParams.get('page'));

  return (
    <Routes>
      <Route path='number-baseball' element={<NumberBaseball />} />
      <Route path='rock-scissors-paper' element={<RSP />} />
      <Route path='lotto-generator' element={<Lotto />} />
      <Route path='*' element={<div>일치하는 게임이 없습니다</div>} />
    </Routes>
  );
};

export default GameMatcher;
