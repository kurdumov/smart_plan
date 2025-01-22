import React, { FC } from 'react';
import Card, { CardBody } from '../../../components/ui/Card';
import { BalanceIcon } from '../../../components/Balance';
import classNames from 'classnames';

interface IProps {
	label: string;
	value: string;
}

const Item: FC<IProps> = ({ label, value }) => {
	return (
		<Card className='h-full'>
			<CardBody>
				<div className='relative flex h-full grow flex-col'>
					<div className='flex-1 text-zinc-500'>{label}</div>
					<div className='text-3xl font-semibold'>
						{value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
					</div>
					<div className='flex items-center gap-2 text-sm text-zinc-500'>
						<span>с прошлого месяца</span>
						<span
							className={classNames(
								Number(value) / 100 < 100 ? 'text-red-500' : 'text-emerald-500',
							)}>
							{(Number(value) / 100).toFixed(0)}%
						</span>
						<BalanceIcon status={Number(value) / 100 < 100 ? 'negative' : 'positive'} />
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default Item;
