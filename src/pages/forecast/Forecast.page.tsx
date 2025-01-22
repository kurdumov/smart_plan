import React from 'react';
import PageWrapper from '../../components/layouts/PageWrapper/PageWrapper';
import Container from '../../components/layouts/Container/Container';
import SemiDonutChartPartial from './_partial/SemiDonutChart.partial.tsx';

const ForecastPage = () => {
	return (
		<PageWrapper name='CRM Dashboard'>
			<Container className='h-full w-full'>
				<div className='grid grid-cols-12 gap-4'>
					<div className='col-span-12 mt-6'>
						<SemiDonutChartPartial />
					</div>
				</div>
			</Container>
		</PageWrapper>
	);
};

export default ForecastPage;
