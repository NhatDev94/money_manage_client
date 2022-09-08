import classNames from 'classnames';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
    const location = useLocation()
    const menu = [
        {
            title: 'Dashboard',
            path: '/'
        },
        {
            title: 'Spending',
            path: '/spending'
        },
        {
            title: 'Spending Plan',
            path: '/spending-plan'
        }
    ]
    return (
        <div className='p-5'>
            {
                menu.map((item, index) => (
                    <Link
                        className={classNames('block my-4 text-xs font-semibold text-gray-500', {
                            'text-black font-bold': item?.path === location.pathname
                        })}
                        to={item.path}
                    >{item.title}</Link>
                ))
            }
        </div>
    )
}

export default SideBar