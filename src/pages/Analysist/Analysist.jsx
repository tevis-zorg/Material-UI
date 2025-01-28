import React from 'react'

import { Grid2 } from '@mui/material';

import CommonBarChart from '../../components/common/CommonBarChart';
import CommonPieChart from '../../components/common/CommonPieChart';

import { 

    valueFormatter,
    desktopOS, 
    mobileOS, 
    seriesA, 
    seriesB, 
    seriesC 

} from '../../components/common/datasets/datasets';



const Analysist = () => {

    const barStyle = {
        scaleType:'band'
    }    

    return (
    <>
        <Grid2 container style={{marginLeft:"500px"}}>

            <CommonBarChart
            // xAxis = {
            //     [
            //         {
            //             scaleType: 'band',
            //             data: [
            //                 seriesA.label,
            //                 seriesB.label,
            //                 seriesC.label,
            //             ]
            //         }
            //     ]
            // }
            width={500}
            height={300}
            series= {
                [
                    {...seriesA, stack: 'total', color:"#333"},
                    {...seriesB, stack: 'total'},
                    {...seriesC, stack: 'total'},
                ]
            }
            sx={barStyle}
            />

            <CommonPieChart
                series={
                    [
                        {
                            data:desktopOS,
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
                    ]
                }
                height={400}
                // sx={pieChartDesktopStyle}
            />

            <CommonPieChart
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
                height={350}
            />

        </Grid2>

        <Grid2 container style={
            {
                marginLeft: "500px",
            }
        }>

        </Grid2>
    
    </>
    )
}

export default Analysist
