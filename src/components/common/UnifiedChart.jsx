import React from 'react';

import { Stack } from '@mui/material';
import { BarChart, PieChart } from "@mui/x-charts";
import PropTypes from 'prop-types'

import { barChartProps, pieChartProps } from './datasets/datasets';

// export function UnifiedChart ({ chartType, ...props}) {
//   const [highligthedItem, setHighlightedItem] = React.useState(null);
//   const UniChartComponent = chartType === "bar" ? BarChart : PieChart;
//   return (
//     <UniChartComponent
//         {...props}
//         highlightedItem={highligthedItem}
//         onHighlightChange={setHighlightedItem}
//     />
//   )
// }

// UnifiedChart.controllerProps = {
//     chartType : PropTypes.oneOf(["bar", "pie"]).isRequired,
// };

const UnifiedChart = () => {
    const [highligthedItem, setHighlightedItem] = React.useState(null);
    return (
        <Stack
            direction={{xs: 'column', xl:'row'}}
            style={
                {
                    display:'flex',
                    margin:"0, auto"
                }
            }
            sx={
                {
                    width: '100%',
                    height: 500,
                }
            }
            >
            <BarChart
                {...barChartProps}
                highlightedItem={highligthedItem}
                onHighlightChange={setHighlightedItem}
            />
    
            <PieChart
                {...pieChartProps}
                highlightedItem={highligthedItem}
                onHighlightChange={setHighlightedItem}
            />

        </Stack>
    )
}

export default UnifiedChart
