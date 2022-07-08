import * as React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import GameMatcher from './GameMatcher';

import NumberBaseball from '../NumberBaseball/NumberBaseball';

const Games: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to='/game/number-baseball'>숫자야구</Link>
        &nbsp;
        <Link to='/game/rock-scissors-papaer'>가위바위보</Link>
        &nbsp;
        <Link to='/game/lotto-generator'>로또생성기</Link>
        &nbsp;
        <Link to='/game/index'>게임 매쳐</Link>
        <div>
          <Routes>
            <Route path='/' element={<GameMatcher />} />
            <Route path='/game/*' element={<GameMatcher />} />
            <Route path='/game/number-baseball' element={<NumberBaseball />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Games;
