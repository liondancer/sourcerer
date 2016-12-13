import React, { PropTypes } from 'react';
import { Doughnut } from 'react-chartjs-2';

function makeRandomColor() {
    var c = '';
    while (c.length < 3) {
        c += (Math.random()).toString(16).substr(-3).substr(-1)
    }
    return '#'+c;
}


const DisplayChart = ({tags}) => {
    if (Object.getOwnPropertyNames(tags).length !== 0) {
        let labels = Object.keys(tags);
        let chartData = labels.map(k => tags[k]);
        let randomColors = labels.map(k => makeRandomColor());
        // console.log(randomColors);
        let data = {
            labels: labels,
            datasets: [{
                data: chartData,
                backgroundColor: randomColors
            }]
        };
        return (
            <Doughnut data={ data } />
        );
    } else {
        return (
            <div />
        );
    }

};

DisplayChart.propTypes = {
    tags: PropTypes.object
};

export default DisplayChart;