import React from 'react';
import SideBar from './side-bar';

const Layout = ({ children }) => {

    return (
        <div className='w-screen h-screen flex items-center'>
            <div className=' w-60 h-full bg-white border-r border-black/10'>
                <SideBar />
            </div>
            <div className='w-[calc(100%-240px)] h-full p-5 bg-gray-100'>
                {children}
            </div>
        </div>
    )
}

export default Layout