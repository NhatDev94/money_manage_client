import { Select } from 'antd';
import React from 'react';
import { FaMoneyBill, FaMoneyCheck, FaWallet } from 'react-icons/fa'
import { GiTakeMyMoney } from 'react-icons/gi'

const Dashboard = () => {

    return (
        <div className=''>

            <div className='flex items-center justify-between mb-10'>
                <h4 className='text-xl font-bold text-black'>Dashboard</h4>
                <div className='flex item-center'>
                    <Select
                        className='min-w-[100px]'
                        style={{ marginRight: '20px' }}
                        placeholder='Month'
                    >
                        <Select.Option value={0}>Thang 1</Select.Option>
                        <Select.Option value={2}>Thang 2</Select.Option>
                    </Select>
                    <Select
                        className='min-w-[100px]'
                        placeholder='Year'
                    >
                        <Select.Option value={0}>2022</Select.Option>
                        <Select.Option value={1}>2023</Select.Option>
                    </Select>
                </div>
            </div>

            <div className='flex items-center justify-between gap-5'>
                <div className='w-1/4 bg-white py-2 px-5 rounded-md shadow-md'>
                    <div className='flex justify-between '>
                        <p className='text-xs font-bold'>Income</p>
                        <FaMoneyBill fill='green' size={20} />
                    </div>
                    <p className='text-md font-bold mt-4'>10.000.000d</p>
                </div>

                <div className='w-1/4 bg-white py-2 px-5 rounded-md shadow-md'>
                    <div className='flex justify-between'>
                        <p className='text-xs font-bold'>Outcome</p>
                        <FaMoneyCheck fill='red' />
                    </div>
                    <p className='text-md font-bold mt-4'>8.300.000d</p>
                </div>

                <div className='w-1/4 bg-white py-2 px-5 rounded-md shadow-md'>
                    <div className='flex justify-between'>
                        <p className='text-xs font-bold'>Save</p>
                        <GiTakeMyMoney fill='green'/>
                    </div>
                    <p className='text-md font-bold mt-4'>1.800.000d</p>
                </div>

                <div className='w-1/4 bg-white py-2 px-5 rounded-md shadow-md'>
                    <div className='flex justify-between'>
                        <p className='text-xs font-bold'>Walet</p>
                        <FaWallet />
                    </div>
                    <p className='text-md font-bold mt-4'>12.300.000d</p>
                </div>
            </div>

            <div className='flex items-center justify-between gap-x-5 mt-10'>
                <div className='w-2/3 min-h-[380px] bg-white shadow-md p-5 rounded-md'>Bieu do</div>
                <div className='w-1/3 min-h-[380px] bg-white shadow-md p-5 rounded-md'>Bieu do Tron</div>
            </div>
        </div>
    )
}

export default Dashboard