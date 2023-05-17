import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/home';
import AddNote from './pages/add-notes';
import AddTag from './pages/add-tag';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/add-note',
    element: <AddNote />,
  },
  {
    path: '/add-tag',
    element: <AddTag />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
