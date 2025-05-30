//import { Header } from '@/components/header';
//import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <div className='grid-background'></div>
      
       <main className='min-h-screen container'>
        <Header/>
       < Outlet /> {/* This will render the child route component  all route should render at htis place*/}
       </main> 
        <div className='p-10 text-center bg-gray-800 m-10'>
            made with by roadsidecoder
        </div>
     
      
        
     
    </div>
  );
};

export default AppLayout;
