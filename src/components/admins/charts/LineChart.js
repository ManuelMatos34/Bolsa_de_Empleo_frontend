import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const labels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];

    const options = {
        responsive: true
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [1, 5, 7, 4, 2],
                borderColor: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
                backgroundColor: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
            }
        ],
    };

    return (
        <div className='card text-center mt-1'>
            {/* <div className='card-header'>
                <p className='m-1'>Grafico 3</p>
            </div> */}
            <div className='card-body'>
                <div className="container">
                    <Line options={options} data={data} />
                </div>
            </div>
        </div>
    )
}

export default LineChart
