import React, { Fragment, useState, useEffect } from "react";
import './styles/Report.css';
import Plot from 'react-plotly.js';

const Report = props => {
    return(
        <Fragment>
            <div className="user-report-area">
                <h1>Relatório simplificado</h1>
                <Plot
                data={[
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                },
                {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ]}
                layout={ {width: 650, height: 400, title: 'A Fancy Plot'} }
            />
            </div>
        </Fragment>
    )
};

export default Report;