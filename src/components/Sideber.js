import React from 'react'; 
import { Link } from 'react-router-dom';

export default function Sideber() {
    return (
        <>    

        <div className='w-64 h-screen bg-gray-800 text-white'>
            <div className='p-4'>
                <h2 className='text-xl font-bold'>Admin Dashboard</h2>
            </div>
            <nav className='mt-10'>
                <Link to='/' className='block p-4 hover:bg-gray-700'>
                    Dashboard
                </Link>
                <Link to='/myblog' className='block p-4 hover:bg-gray-700'>
                   จัดการโพส
                </Link>
                <Link to='/user' className='block p-4 hover:bg-gray-700'>
                    User
                </Link>
                <Link to='/about' className='block p-4 hover:bg-gray-700'>
                    About
                </Link>
                <Link to="/account" className="block py-3 px-4 hover:bg-gray-700">
                จัดการบัญชี
                </Link>




            </nav>

        </div>


        
        
        </>
    )
}