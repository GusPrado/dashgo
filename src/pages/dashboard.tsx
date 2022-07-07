import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-04-20T00:00:00.000Z',
      '2022-04-21T00:00:00.000Z',
      '2022-04-22T00:00:00.000Z',
      '2022-04-23T00:00:00.000Z',
      '2022-04-24T00:00:00.000Z',
      '2022-04-25T00:00:00.000Z',
      '2022-04-26T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  {
    name: 'series1',
    data: [63, 39, 109, 78, 112, 23, 90],
  },
];

export default function Dashboard() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <SimpleGrid
          flex='1'
          gap='4'
          minChildWidth='320px'
          alignItems='flex-start'
        >
          <Box p='8' bg='gray.800' borderRadius={8} pb='4'>
            <Text fontSize='large' mb='4'>
              Inscritos da semana
            </Text>
            <Chart type='area' height={160} options={options} series={series} />
          </Box>
          <Box p='8' bg='gray.800' borderRadius={8} pb='4'>
            <Text fontSize='large' mb='4'>
              Taxa de abertura
            </Text>
            <Chart type='area' height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
