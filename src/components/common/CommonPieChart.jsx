import React from 'react'

import { PieChart } from '@mui/x-charts/PieChart'

const CommonPieChart = ({series, height, sx}) => {
  return (
    <PieChart
        series={series}
        height={height}
        sx={sx}
    />
  )
}

export default CommonPieChart
