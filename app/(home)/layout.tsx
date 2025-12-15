import {  ReactNode } from 'react';
import Tabs from '@/components/tabs';
import { Header } from '@/components';

const layout = ({ children }: { children: ReactNode }) => {

  return (
    <div className='pt-20'>
        <Header />

        {/* Navigation par onglets */}
        <div className="bg-white rounded-xl shadow-lg mb-6 hidden lg:block">
          <Tabs  />
        </div>

        <div id="content" className='-translate-y-30' />

        { children }        
      </div>
  );
};

export default layout;