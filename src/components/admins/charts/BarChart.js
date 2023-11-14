import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,

    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [1, 4, 2, 6, 8, 3, 7],
                backgroundColor: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
            }
        ],
    };

    return (
        <div className='card text-center mt-1'>
            {/* <div className='card-header'>
                <p className='m-1'>Grafico 2</p>
            </div> */}
            <div className='card-body'>
                <div className="container">
                    <Bar options={options} data={data} />
                </div>
            </div>
        </div>
    )
}

export default BarChart
