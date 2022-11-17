import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './pages/Routes/Router/Router';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'


const queryClient = new QueryClient()
function App() {
  return (
    <div className='max-w-[1240px] mx-auto'>

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>

        </RouterProvider>
        <Toaster></Toaster>
      </QueryClientProvider>

    </div>
  );
}

export default App;
