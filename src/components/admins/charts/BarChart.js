import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const BarChart = ({ dataComp }) => {
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

    const labels = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];

    const data = {
        labels,
        datasets: [
            {
                label: "Data",
                data: labels.map((label) => {
                    const matchingItem = dataComp ? dataComp.find((item) => {
                        const monthTranslations = {
                            "Enero": "January",
                            "Febrero": "February",
                            "Marzo": "March",
                            "Abril": "April",
                            "Mayo": "May",
                            "Junio": "June",
                            "Julio": "July",
                            "Agosto": "August",
                            "Septiembre": "September",
                            "Octubre": "October",
                            "Noviembre": "November",
                            "Diciembre": "December",
                        };
    
                        return item.Month === monthTranslations[label];
                    }) : null;
    
                    return matchingItem ? matchingItem.NumEmpresasRegistradas : 0;
                }),
                backgroundColor: [
                    "#FFB6C1",
                    "#FFD700",
                    "#FFA07A",
                    "#98FB98",
                    "#ADD8E6",
                    "#FFC0CB",
                    "#87CEEB",
                    "#FFDAB9",
                    "#FFE4E1",
                    "#F0E68C",
                    "#AFEEEE",
                    "#FFEFD5",
                ],
            },
        ],
    };

    return (
        <div className="card text-center mt-1">
            <div className="card-header">
                <p className="m-1">Empresas creadas por mes</p>
            </div>
            <div className="card-body">
                <div className="container">
                    <Bar options={options} data={data} />
                </div>
            </div>
        </div>
    );
};

export default BarChart;
