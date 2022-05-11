import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 김형석
import HengxiLogin from './pages/Hengxi/Login/Login.js';
import HengxiMain from './pages/Hengxi/Main/Main.js';

// 최현민
import HyunminChoiLogin from './pages/hyunminChoi/Login/Login.js';
import HyunminChoiMain from './pages/hyunminChoi/Main/Main.js';

// 염종은
import JongeunLogin from './pages/jongeun/Login/Login.js';
import JongeunMain from './pages/jongeun/Main/Main.js';

// 박주영
import JooyongParkLogin from './pages/jooyoungPark/Login/Login.js';
import JooyongParkMain from './pages/jooyoungPark/Main/Main.js';

// 김정준
import JungjunKimLogin from './pages/jungjunKim/Login/Login.js';
import JungjunKimMain from './pages/jungjunKim/Main/Main.js';

// 장수연
import SooyeonJangLogin from './pages/sooyeonJang/Login/Login.js';
import SooyeonJangMain from './pages/sooyeonJang/Main/Main.js';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HengxiLogin />} />
        <Route path="/main-hs" element={<HengxiMain />} />

        <Route path="/login-hm" element={<HyunminChoiLogin />} />
        <Route path="/main-hm" element={<HyunminChoiMain />} />

        <Route path="/login-ju" element={<JongeunLogin />} />
        <Route path="/main-ju" element={<JongeunMain />} />

        <Route path="/login-jy" element={<JooyongParkLogin />} />
        <Route path="/main-jy" element={<JooyongParkMain />} />

        <Route path="/login-jj" element={<JungjunKimLogin />} />
        <Route path="/main-jj" element={<JungjunKimMain />} />

        <Route path="/login-sy" element={<SooyeonJangLogin />} />
        <Route path="/main-sy" element={<SooyeonJangMain />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
