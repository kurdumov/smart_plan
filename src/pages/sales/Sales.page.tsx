import React from 'react';
import PageWrapper from '../../components/layouts/PageWrapper/PageWrapper';
import Container from '../../components/layouts/Container/Container';
import ChartAreaPartial from './_partial/ChartArea.partial.tsx';
import ChartBarPartial from './_partial/ChartBar.partial.tsx';
import TablePartial from './_partial/Table.partial.tsx';

const SalesPage = () => {
	const metrics = [
		{ id: 1, value: '306180', label: 'Оборот за период' },
		{ id: 2, value: '3039', label: 'Продано товаров' },
		{ id: 3, value: '138698', label: 'Прибыль за период' },
		{ id: 4, value: '2498', label: 'Чеков за период' },
		{ id: 5, value: '1.22', label: 'Товаров в чеке' },
		{ id: 6, value: '45.3', label: 'Наценка (%)' },
		{ id: 7, value: '43740', label: 'Оборот в день' },
		{ id: 8, value: '434', label: 'Продано в день' },
		{ id: 9, value: '19814', label: 'Прибыль в день' },
		{ id: 10, value: '357', label: 'Чеков в день' },
		{ id: 11, value: '122.6', label: 'Средний чек' },
		{ id: 12, value: '562', label: 'Товаров в ассортименте' },
	];

	return (
		<PageWrapper name='CRM Dashboard'>
			<Container className='h-full w-full'>
				<div className='grid grid-cols-12 gap-4'>
					<div className='col-span-6'>
						<TablePartial metrics={metrics} />
					</div>
					<div className='col-span-6 grid gap-4'>
						<div className='col-span-6'>
							<ChartAreaPartial metrics={metrics} />
						</div>
						<div className='col-span-6 grid grid-cols-2 grid-rows-2 gap-4'>
							<div className='col-span-1'>
								<ChartBarPartial metrics={metrics} />
							</div>
							<div className='col-span-1'>
								<ChartBarPartial metrics={metrics} />
							</div>
							<div className='col-span-1'>
								<ChartBarPartial metrics={metrics} />
							</div>
							<div className='col-span-1'>
								<ChartBarPartial metrics={metrics} />
							</div>
						</div>
					</div>
				</div>
			</Container>
		</PageWrapper>
	);
};

export default SalesPage;
