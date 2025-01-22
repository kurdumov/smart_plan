import React, { FC } from 'react';
import Card, { CardBody } from '../../../components/ui/Card';

interface IProps {
	label: string;
	value: string;
	id: number;
}

const Item: FC<IProps> = ({ label }) => {
	return (
		<Card className='h-full'>
			<CardBody>
				<div className='relative flex h-full grow flex-col'>
					<div className='text-center text-lg font-semibold'>{label}</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default Item;
