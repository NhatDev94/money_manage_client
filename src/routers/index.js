import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Spending from './spending';
import SpendingPlan from './spending-plan';
const Routers = () => {

    return (
        <Routes>
            <Route path='/spending' element={<Spending />} />
            <Route path='/spending-plan' element={<SpendingPlan />} />
            <Route path='/' element={<Dashboard />} />
        </Routes>
    )
}

export default Routers