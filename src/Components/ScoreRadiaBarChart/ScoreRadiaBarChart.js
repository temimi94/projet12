import { useState, useEffect } from 'react'
import {
    RadialBarChart,
    PolarAngleAxis,
    RadialBar,
    ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'


/**
 *  * A radial bar chart showing user's score of the day, builded with recharts.
 * @Component
 * @param {*} props
 */

export default function ScoreRadiaBarChart(props) {
    // data build a new array with the score to match with recharts data's syntax
    const [data, setData] = useState()

    useEffect(() => {
        setData([{ score: props.score }])
    }, [props.score])

    return (
        <div className="radialBarChart">
            <div className="radialBarChartScore">{props.score}%</div>
            <div className="radialBarChartScoreText">
                de votre<br></br>objectif
            </div>

            <ResponsiveContainer height="100%" width="100%">
                <RadialBarChart
                    innerRadius={105}
                    outerRadius={90}
                    data={data}
                    startAngle={-270}
                    endAngle={90}
                >
                    <PolarAngleAxis
                        domain={[0, 100]}
                        tick={false}
                        type="number"
                        angleAxisId={0}
                    />
                    <RadialBar
                        clockWise={false}
                        dataKey="score"
                        fill="#FF0000"
                        cornerRadius={10}
                    />
                    <text
                        x={50}
                        y={35}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="progress-label"
                    >
                        Score
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}

ScoreRadiaBarChart.propTypes = {
    score: PropTypes.number,
}
