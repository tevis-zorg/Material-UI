import React , {useState} from 'react'

import { Grid2, makeStyles } from '@mui/material';

import CommonBarChart from '../../components/common/CommonBarChart';
import CommonPieChart from '../../components/common/CommonPieChart';
import UnifiedChart from '../../components/common/UnifiedChart';

import { PieChart } from '@mui/x-charts';
import { BarChart } from '@mui/x-charts';

// dataset imports
import { 

    valueFormatter,
    desktopOS, 
    mobileAndDesktopOS,
    mobileOS, 
    seriesA, 
    seriesB, 
    seriesC,

} from '../../components/common/datasets/datasets';

// const useStyle = makeStyles((theme) => ({
//     parallax: {
//         width : '100%',
//         height : `${window.innerHeight}px`,
//         position: 'relative',
//     }
// }))


const Analysist = () => {
    // const classes = useStyle();
    const [highlightedItem, setHighlightedItem] = useState(null);

    return (
    <>
        <Grid2 
            container 
            style={
                {
                    display:'inline-flex',
                    marginLeft:"500px"
                }
            }
            sx={
                {
                    width: '100%',
                    height: 500,
                }
            }
            // className = {classes.parallax}
        
            >
            
            {/* <CommonPieChart
                series={[
                    {
                        data: mobileOS,
                        highlightScope: {
                            fade: 'global',
                            highlight: 'item',
                        },
                        faded: {
                            innerRadius: 30,
                            additionalRadius: -30,
                            color: 'gray',
                            valueFormatter,
                        }
                    }
                ]}
            /> */}

            {/* <CommonBarChart
                {...barChartProps}
                highlightedItem = {highlightedItem}
                onHighlightChange = {setHighlightedItem}
            />

            <CommonPieChart
                {...pieChartProps}
                highlightedItem = {highlightedItem}
                onHighlightChange = {setHighlightedItem}
            /> */}

            {/* <BarChart
                {...barChartProps}
                highlightedItem = {highlightedItem}
                onHighlightChange = {setHighlightedItem}
            />

            <PieChart
                {...pieChartProps}
                highlightedItem = {highlightedItem}
                onHighlightChange = {setHighlightedItem}
            /> */}

            {/* <UnifiedChart
                chartType="bar"
                {...barChartProps}
                // highlightedItem = {highlightedItem}
                // onHighlightChange={setHighlightedItem}
            />

            <UnifiedChart
                chartType="pie"
                {...pieChartProps}
                // highlightedItem = {highlightedItem}
                // onHighlightChange={setHighlightedItem}
            /> */}

            <UnifiedChart/>



        </Grid2>

        {/* <Stack
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
        </Stack> */}

    
    </>
    )
}

export default Analysist