import React, { useEffect, useState } from 'react'
// import PieChart from './PieChart'
import BarChart from './BarChart'
import LineChart from './LineChart'
import { chartsByComp, chartsByOfer } from '../../../services/services'

const Charts = () => {
    const [dataComp, setDataComp] = useState(null);
    const [dataOfer, setDataOfer] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                let getResponseOfer = await chartsByOfer();
                let responseOfer = getResponseOfer.data;
                setDataOfer(responseOfer);

                let getResponseComp = await chartsByComp();
                let responseComp = getResponseComp.data;
                setDataComp(responseComp);
            } catch (error) {
                // Manejo de errores
                console.error("error", error);
                setDataComp(null);
            }
        };
        getUser();
    }, []);

    return (
        <div className='row'>
            <div>
                <BarChart dataComp={dataComp}/>
            </div>
            <div >
                <LineChart dataOfer={dataOfer}/>
            </div>
            {/* <div>
                <PieChart />
            </div> */}
        </div>
    )
}

export default Charts
