import { useRoutes } from 'react-router-dom';

import Home from '../pages/Home';

const routes = [{ path: '/', element: <Home /> }];

function AppRoutes() {
  const element = useRoutes([...routes]);
  return element;
}

export default AppRoutes;
