import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    ResponsiveContainer,
} from 'recharts'

import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './barChartActivity.css'

/**
 * A bar chart showing user activity, builded with recharts.
 */

/*
 * A customised tooltip with recharts (for bar chart only).
 * more info at https://recharts.org/en-US/examples/CustomContentOfTooltip
 */

const CustomBar = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div id="tooltipActivity">
                <span className="labelActivity">{`${payload[0].value} kg`}</span>
                <br />
                <span className="labelActivity">{`${payload[1].value} kCal`}</span>
            </div>
        )
    }
    return null
}

export default function BarChartActivity(props) {
    const [data, setData] = useState()

    useEffect(() => {
        setData(props.activity)
    }, [props.activity])

    // The loop changes the dates in numbers to match with the figma model
    for (let i = 0; i < data?.length; i++) {
        data[i].day = [1, 2, 3, 4, 5, 6, 7]
    }
    return (
        <div>
            <h6 className="titleActivity">Activité quotidienne</h6>
            <ResponsiveContainer width="100%" height={272}>
                <BarChart data={data} barCategoryGap="27" barGap="8">
                    <CartesianGrid strokeDasharray="3" vertical={false} />
                    <XAxis tickLine={false} domain={['dataMin', 'dataMax']} />
                    <YAxis
                        orientation="right"
                        tickMargin={20}
                        tickCount={3}
                        tickLine={false}
                        domain={['dataMin -1', 'dataMax +2']}
                        axisLine={false}
                        dataKey="kilogram"
                        fontSize={14}
                    />
                    <YAxis
                        tickLine={false}
                        domain={[0, 'dataMax +50']}
                        axisLine={false}
                        dataKey="calories"
                        tick={false}
                        yAxisId="left"
                    />
                    <Tooltip
                        content={<CustomBar active={true} />}
                        wrapperStyle={{ outline: 'none' }}
                    />
                    <Legend
                        width="277"
                        iconType="circle"
                        align="right"
                        verticalAlign="top"
                        iconSize="8"
                        wrapperStyle={{
                            padding: '0 0 50px 0',
                        }}
                    />
                    <Bar
                        name="Poids (kg)"
                        dataKey="kilogram"
                        fill="#282D30"
                        radius={[10, 10, 0, 0]}
                        barSize={7}
                        type="date"
                    />
                    <Bar
                        yAxisId="left"
                        name="Calories brûlées (kCal)"
                        dataKey="calories"
                        fill="#E60000"
                        radius={[10, 10, 0, 0]}
                        barSize={7}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

//ensemble de validateurs utilisés pour s’assurer que la donnée que je reçois est valide.

BarChartActivity.propTypes = {
    activity: PropTypes.array,
}
