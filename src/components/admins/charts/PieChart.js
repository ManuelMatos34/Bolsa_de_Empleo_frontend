import React from 'react'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const PieChart = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const options = {
        plugins: {
            responsive: true,
            datalabels: {
                color: "#fff",
            },
        },
    };

    const data = {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [1, 1, 1, 1, 1],
                backgroundColor: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
            }
        ]
    };

    return (
        <div className='card text-center mt-1'>
            {/* <div className='card-header'>
                <p className='m-1'>Grafico 1</p>
            </div> */}
            <div className='card-body'>
                <div className="container">
                    <Pie data={data} options={options} />
                </div>
            </div>
        </div>
    )
}

export default PieChart
