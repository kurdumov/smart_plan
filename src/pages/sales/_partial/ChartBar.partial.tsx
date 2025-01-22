import React, { FC, useEffect, useState } from 'react';
import Card, { CardBody } from '../../../components/ui/Card';
import Chart from '../../../components/Chart';
import { IChartOptions } from '../../../interface/chart.interface';
import SelectReact from '../../../components/form/SelectReact.tsx';

interface IProps {
	metrics: {
		value: string;
		label: string;
	}[];
}

const ChartBarPartial: FC<IProps> = ({ metrics }) => {
	const [selectedMetric, setSelectedMetric] = useState('306180');

	const [data, setData] = useState<IChartOptions>({
		series: [],
		options: {
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '55%',
					borderRadiusWhenStacked: 'all',
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent'],
			},
			xaxis: {
				categories: [
					'01.02.2024',
					'02.02.2024',
					'03.02.2024',
					'04.02.2024',
					'05.02.2024',
					'06.02.2024',
					'07.02.2024',
				],
			},

			fill: {
				opacity: 1,
			},
			tooltip: {
				y: {
					formatter(val) {
						return `${val}`;
					},
				},
			},
		},
	});

	useEffect(() => {
		const getRandomValue = () => Math.floor(Math.random() * (120 - 40 + 1)) + 40;
		setData((prevState) => ({
			...prevState,
			series: metrics
				.filter((x) => selectedMetric === x.value)
				.map((item) => ({
					name: item.label,
					data: Array.from({ length: 7 }, getRandomValue),
				})),
		}));
	}, [selectedMetric]);

	return (
		<Card className='h-full'>
			<CardBody>
				<SelectReact
					options={metrics}
					id='options'
					name='options'
					value={metrics[0]}
					onChange={(value) => {
						// @ts-ignore
						setSelectedMetric(value?.value as any);
					}}
				/>
				<Chart series={data.series} options={data.options} type='bar' height={200} />
			</CardBody>
		</Card>
	);
};

export default ChartBarPartial;
