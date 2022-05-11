import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/main" />
        <div>sad</div>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
