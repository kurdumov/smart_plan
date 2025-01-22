import React, { FC, useEffect, useState } from 'react';
import Card, { CardBody } from '../../../components/ui/Card';
import { IChartOptions } from '../../../interface/chart.interface';
import Chart from '../../../components/Chart';
import SelectReact from '../../../components/form/SelectReact.tsx';

interface IProps {
	metrics: {
		value: string;
		label: string;
	}[];
}

const ChartAreaPartial: FC<IProps> = ({ metrics }) => {
	const [selectedMetrics, setSelectedMetrics] = useState(['306180', '3039']);
	const [data, setData] = useState<IChartOptions>({
		series: [],
		options: {
			chart: {
				height: 290,
				type: 'area',
				toolbar: {
					show: false,
				},
			},
			dataLabels: {
				enabled: true,
			},
			stroke: {
				curve: 'smooth',
			},
			markers: {
				size: 5,
			},
			yaxis: [
				{
					title: {
						text:
							metrics.find((metric) => metric.value === selectedMetrics[0])?.label ||
							'',
					},
					min: 100,
					max: 400,
				},
				{
					title: {
						text:
							metrics.find((metric) => metric.value === selectedMetrics[1])?.label ||
							'',
					},
					opposite: true,
					min: 50,
					max: 300,
				},
			],
			grid: {
				show: false,
			},
			fill: {
				type: 'gradient',
				gradient: {
					shadeIntensity: 1,
					opacityFrom: 0.3,
					opacityTo: 0,
				},
			},
		},
	});

	useEffect(() => {
		const getRandomValue = () => Math.floor(Math.random() * (300 - 150 + 1)) + 150;

		const newSeries = selectedMetrics.map((item) =>
			metrics
				.filter((x) => item === x.value)
				.map((item) => ({
					name: item.label,
					data: Array.from({ length: 7 }, getRandomValue),
				})),
		);

		setData((prevState) => ({
			...prevState,
			series: newSeries.flat(),
		}));

		setData((prevState) => ({
			...prevState,
			series: newSeries.flat(),
			options: {
				...prevState.options,
				yaxis: [
					{
						title: {
							text:
								metrics.find((metric) => metric.value === selectedMetrics[0])
									?.label || '',
						},
						min: 100,
						max: 400,
					},
					{
						title: {
							text:
								metrics.find((metric) => metric.value === selectedMetrics[1])
									?.label || '',
						},
						opposite: true,
						min: 50,
						max: 300,
					},
				],
			},
		}));
	}, [selectedMetrics, metrics]);

	return (
		<Card className='h-full'>
			<CardBody>
				<div className='flex justify-between'>
					<SelectReact
						className='w-[200px]'
						options={metrics}
						id='options1'
						name='options1'
						value={metrics.find((metric) => metric.value === selectedMetrics[0])}
						onChange={(value) => {
							// @ts-ignore
							setSelectedMetrics((prevState) => [value?.value as any, prevState[1]]);
						}}
					/>
					<SelectReact
						options={metrics}
						className='w-[200px]'
						id='options2'
						name='options2'
						value={metrics.find((metric) => metric.value === selectedMetrics[1])}
						onChange={(value) => {
							// @ts-ignore
							setSelectedMetrics((prevState) => [prevState[0], value?.value as any]);
						}}
					/>
				</div>

				<Chart series={data.series} options={data.options} type='area' height={300} />
			</CardBody>
		</Card>
	);
};

export default ChartAreaPartial;
