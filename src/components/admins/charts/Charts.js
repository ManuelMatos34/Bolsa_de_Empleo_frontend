import React from 'react'
import PieChart from './PieChart'
import BarChart from './BarChart'
import LineChart from './LineChart'

const Charts = () => {
    return (
        <div className='row'>
            <div className='col-md-3'>
                <PieChart />
            </div>
            <div className='col-md-3'>
                <BarChart />
            </div>
            <div className='col-md-3'>
                <LineChart />
            </div>
        </div>
    )
}

export default Charts
