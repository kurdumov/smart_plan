import React from 'react';
import PageWrapper from '../../components/layouts/PageWrapper/PageWrapper';
import Container from '../../components/layouts/Container/Container';
import Item from './_partial/Item.partial';
import ChartPartial from './_partial/Chart.partial';
import Card, { CardBody, CardTitle } from '../../components/ui/Card.tsx';
import Icon from '../../components/icon/Icon.tsx';
import themeConfig from '../../config/theme.config.ts';

const MainPage = () => {
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

	// TODO: менять плашки местами
	// TODO: возможность выбирать на графике дни/недели/месяца
	return (
		<PageWrapper name='Главная'>
			<Container className='h-full w-full'>
				<div className='grid grid-cols-12 gap-4'>
					{metrics.map((item) => (
						<div key={item.id} className='col-span-12 sm:col-span-6 2xl:col-span-2'>
							<Item label={item.label} value={item.value} />
						</div>
					))}
					<CardTitle className='col-span-12 mt-6'>
						Показатели на последнюю актуальную дату (07.02.2024)
					</CardTitle>
					<div className='col-span-4'>
						<Card className='h-full'>
							<CardBody>
								<div className='flex items-center gap-4'>
									<div className='flex-shrink-0'>
										<div className='rounded-full bg-blue-500/10 p-4'>
											<Icon
												icon='HeroUserGroup'
												size='text-5xl'
												color={themeConfig.themeColor}
											/>
										</div>
									</div>
									<div className='flex grow items-center'>
										<div>
											<div className='text-zinc-500'>
												Tоварный запас (дни)
											</div>
											<div className='text-3xl font-semibold'>9,0</div>
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-span-4'>
						<Card className='h-full'>
							<CardBody>
								<div className='flex items-center gap-4'>
									<div className='flex-shrink-0'>
										<div className='rounded-full bg-blue-500/10 p-4'>
											<Icon
												icon='HeroUserGroup'
												size='text-5xl'
												color={themeConfig.themeColor}
											/>
										</div>
									</div>
									<div className='flex grow items-center'>
										<div>
											<div className='text-zinc-500'>
												Tоварный запас (руб)
											</div>
											<div className='text-3xl font-semibold'>744 488</div>
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-span-4'>
						<Card className='h-full'>
							<CardBody>
								<div className='flex items-center gap-4'>
									<div className='flex-shrink-0'>
										<div className='rounded-full bg-blue-500/10 p-4'>
											<Icon
												icon='HeroUserGroup'
												size='text-5xl'
												color={themeConfig.themeColor}
											/>
										</div>
									</div>
									<div className='flex grow items-center'>
										<div>
											<div className='text-zinc-500'>
												Оборачиваемость последнего заказа (дни)
											</div>
											<div className='text-3xl font-semibold'>6,3</div>
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-span-3 mt-6'>
						<ChartPartial metrics={metrics} />
					</div>
					<div className='col-span-3 mt-6'>
						<ChartPartial metrics={metrics} />
					</div>
					<div className='col-span-3 mt-6'>
						<ChartPartial metrics={metrics} />
					</div>
					<div className='col-span-3 mt-6'>
						<ChartPartial metrics={metrics} />
					</div>
					<Card className='col-span-12 w-full'>
						<CardBody>
							<div className='flex flex-col gap-4'>
								<span className='text-xl text-white'>Порядок расчета заказа:</span>
								<ul className='ml-5 list-decimal text-lg'>
									<li className='text-zinc-500'>
										Синхронизировать данные в приложении с данными из системы
										учета
									</li>
									<li className='text-zinc-500'>Посмотреть свои показатели</li>
									<li className='text-zinc-500'>Запустить расчет прогноза</li>
									<li className='text-zinc-500'>
										Проверить прогноз, откорректировать отдельные позиции или
										группы в случае если не согласны
									</li>
									<li className='text-zinc-500'>
										Сформировать данные по заказу на основе прогноза на
										необходимый период
									</li>
								</ul>
							</div>
						</CardBody>
					</Card>
				</div>
			</Container>
		</PageWrapper>
	);
};

export default MainPage;
