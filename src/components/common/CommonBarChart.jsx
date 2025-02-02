
import { BarChart } from '@mui/x-charts/BarChart'

const CommonBarChart = ({xAxis, width, height, series,sx}) => {
  return (
    <BarChart
        xAxis={xAxis}
        width={width}
        height={height}
        series={series}
        sx={sx}
        highlightedItem={null}
        onHighlightChange={null}
    />
  )
}

export default CommonBarChart
