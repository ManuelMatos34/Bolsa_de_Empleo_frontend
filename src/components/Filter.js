import React from 'react'

const Filter = () => {
    return (
        <div className='card'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                        <div className='form-group'>
                            <input type='text' className='form-control' placeholder='Buscar...' />
                        </div>
                    </div>
                    <div className='col-6 col-md-2'>
                        <div className='form-group'>
                            <select className='form-control'>
                                <option value=''>Opción 1</option>
                                <option value=''>Opción 2</option>
                                <option value=''>Opción 3</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-6 col-md-2'>
                        <div className='form-group'>
                            <select className='form-control'>
                                <option value=''>Opción A</option>
                                <option value=''>Opción B</option>
                                <option value=''>Opción C</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-6 col-md-2'>
                        <div className='form-group'>
                            <select className='form-control'>
                                <option value=''>Filtro 1</option>
                                <option value=''>Filtro 2</option>
                                <option value=''>Filtro 3</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-6 col-md-2'>
                        <div className='form-group'>
                            <select className='form-control'>
                                <option value=''>Filtro X</option>
                                <option value=''>Filtro Y</option>
                                <option value=''>Filtro Z</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter
