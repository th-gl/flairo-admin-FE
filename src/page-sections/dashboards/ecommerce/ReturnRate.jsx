import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import useTheme from '@mui/material/styles/useTheme';
import merge from 'lodash.merge';
import Chart from 'react-apexcharts';
// CUSTOM COMPONENTS
import MoreButton from '@/components/more-button';
import FlexBetween from '@/components/flexbox/FlexBetween';
import { H6, Paragraph, Span } from '@/components/typography'; // CUSTOM UTILS METHOD

import { baseChartOptions } from '@/utils/baseChartOptions';
export default function ReturnRate() {
  const theme = useTheme(); // REACT CHART CATEGORIES LABEL

  const chartCategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']; // REACT CHART DATA SERIES

  const chartSeries = [{
    name: 'Returning',
    data: [20, 150, 75, 150, 300, 400]
  }, {
    name: 'New',
    data: [0, 250, 100, 17, 122, 18]
  }]; // REACT CHART OPTIONS

  const chartOptions = merge(baseChartOptions(theme), {
    colors: [theme.palette.success.main, theme.palette.primary.main],
    markers: {
      strokeColors: theme.palette.success.main
    },
    legend: {
      show: true,
      position: 'top',
      itemMargin: {
        horizontal: 10
      },
      markers: {
        size: 5,
        offsetX: -2
      }
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: theme.palette.divider
    },
    xaxis: {
      categories: chartCategories,
      labels: {
        show: true,
        style: {
          colors: theme.palette.text.secondary
        }
      },
      crosshairs: {
        show: true,
        fill: {
          color: theme.palette.success.main
        },
        stroke: {
          color: theme.palette.success.main
        }
      }
    },
    yaxis: {
      min: 0,
      max: 500,
      show: true,
      tickAmount: 5,
      labels: {
        style: {
          colors: theme.palette.text.secondary,
          fontWeight: 500
        }
      }
    }
  });
  return <Card className="h-full">
      <FlexBetween p={3}>
        <div>
          <H6 fontSize={22} lineHeight={1.3} display="flex" alignItems="center">
            50.56%
            <Span pl={1} fontSize={14} color="success.main">
              +2.5%
            </Span>
          </H6>

          <Paragraph color="text.secondary">Returning Rate</Paragraph>
        </div>

        <MoreButton size="small" />
      </FlexBetween>

      <Box px={1}>
        <Chart type="line" height={280} options={chartOptions} series={chartSeries} width="100%" />
      </Box>
    </Card>;
}