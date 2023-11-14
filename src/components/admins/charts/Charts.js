import React from 'react'
import PieChart from './PieChart'
import BarChart from './BarChart'
import LineChart from './LineChart'

const Charts = () => {
    return (
        <div className='row'>
            <div>
                <BarChart />
            </div>
            <div >
                <LineChart />
            </div>
            <div>
                <PieChart />
            </div>
        </div>
    )
}

export default Charts
