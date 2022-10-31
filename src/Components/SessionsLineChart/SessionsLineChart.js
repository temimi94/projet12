import { LineChart, XAxis, YAxis, Legend, Line, Tooltip } from 'recharts'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

/**
 * A line chart showing user's average session, builded with recharts.
 * @Component
 * @param {*} props
 */

const ContentTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="customTooltipLength">
                <span className="labelLenght">{`${payload[0].value} min`}</span>
            </div>
        )
    }
    return null
}

export default function SessionsLineChart(props) {
    const [data, setData] = useState()

    useEffect(() => {
        setData(props.session)
    }, [props.session])

    for (let i = 0; i < data?.length; i++) {
        data[i].day = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    }
    return (
        <div className="legendSession">
            <h6 className="titleSession">Durée moyenne des sessions</h6>
            <LineChart width={258} height={263} data={data}>
                <XAxis
                    dataKey="day"
                    tickLine={false}
                    axisLine={false}
                    type="category"
                    hide={false}
                    tick={{ stroke: '#fff', strokeWidth: 0.7 }}
                    opacity={0.6}
                />
                <YAxis
                    hide={true}
                    domain={['dataMin -40', 'dataMax +30']}
                    tickLine={false}
                    type="number"
                />
                <Tooltip
                    content={<ContentTooltip />}
                    cursor={{
                        strokeWidth: 0,
                    }}
                    wrapperStyle={{ outline: 'none' }}
                />
                <Legend align="left" verticalAlign="top" iconSize="0" />

                <Line
                    name=" "
                    type="natural"
                    dataKey="sessionLength"
                    stroke="#FFF"
                    dot={false}
                    activeDot={true}
                    strokeWidth="2px"
                    opacity={0.7}
                />
            </LineChart>
        </div>
    )
}

SessionsLineChart.propTypes = {
    session: PropTypes.array,
}
