import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    ResponsiveContainer,
} from 'recharts'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'


/**
 *  * A radar chart showing user's performances, builded with recharts.
 * @Component
 * @param {*} props
 */

export default function PerformanceRadarChart(props) {
    const [performance, setPerformance] = useState()
    const [kind, setKind] = useState()

    useEffect(() => {
        setPerformance(props.performance?.data)
        setKind(props.performance?.kind)
    }, [props.performance])

    // The loop changes the numbers to their corresponding performance, according to the figma model
    for (let i = 0; i < performance?.length; i++) {
        performance[i].kind =
            kind[i + 1].charAt(0).toUpperCase() + kind[i + 1].slice(1) // put captial on first letter
    }

    return (
        <div className="performanceRadar">
            <ResponsiveContainer height="100%" width="100%">
                <RadarChart
                    outerRadius={80}
                    width={258}
                    height={263}
                    data={performance}
                >
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        stroke="#FFF"
                        fontSize="12px"
                        tickLine={true}
                        dataKey="kind"
                        dy={2.5}
                    />
                    <PolarRadiusAxis
                        axisLine={false}
                        tick={false}
                        domain={[0, 200]}
                    />
                    <Radar fill="#FF0101B2" dataKey="value" />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

PerformanceRadarChart.propTypes = {
    performance: PropTypes.object,
}
