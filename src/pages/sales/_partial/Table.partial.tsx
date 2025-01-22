import React, { FC, useEffect, useState } from 'react';
import {
	createColumnHelper,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import Card, { CardBody, CardHeader } from '../../../components/ui/Card';
import TableTemplate, {
	TableCardFooterTemplate,
} from '../../../templates/common/TableParts.template';
import { data } from './data.ts';
import SelectReact from '../../../components/form/SelectReact.tsx';

const columnHelper = createColumnHelper<any>();
const rows = [
	{
		group1: 'Группа 1',
	},
	{ group2: 'Группа 2' },
	{ group3: 'Группа 3' },
	{ productName: 'Название товара' },
	{ turnover: 'Оборот (шт)' },
	{ stockUnits: 'Товарный запас (шт)' },
	{ stockValueRub: 'Товарный запас (руб)' },
	{ stockDays: 'Товарный запас (дни)' },
	{ turnoverAfterLastOrder: 'Окупаемость заказов (дни)' },
];

interface IProps {
	metrics: {
		value: string;
		label: string;
	}[];
}

const TablePartial: FC<IProps> = ({ metrics }) => {
	const [selectedMetrics, setSelectedMetrics] = useState([
		{ value: '306180', label: 'Оборот за период' },
		{ value: '3039', label: 'Продано товаров' },
	]);
	const [globalFilter, setGlobalFilter] = useState<string>('');
	const [columns, setColumns] = useState([
		columnHelper.accessor('group1', {
			header: 'Position',
			footer: 'Position',
		}),
	]);

	useEffect(() => {
		const newColumns = Object.keys(data[0]).map((key) => {
			// @ts-ignore
			const row = rows.find((r) => r[key]);
			return columnHelper.accessor(key, {
				cell: (info) => <span className='whitespace-nowrap'>{info.getValue()}</span>,
				// @ts-ignore
				header: row ? row[key] : key,
				// @ts-ignore
				footer: row ? row[key] : key,
			});
		});
		setColumns(newColumns);
	}, []);

	const table = useReactTable({
		data,
		columns,
		state: {
			globalFilter,
		},
		enableSorting: false,
		enableGlobalFilter: false,
		onGlobalFilterChange: setGlobalFilter,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: { pageSize: 20 },
		},
		// debugTable: true,
	});

	return (
		<Card className='h-full'>
			<CardHeader>
				<div className='flex w-full justify-between'>
					<SelectReact
						options={metrics}
						className='w-[200px]'
						id='options'
						name='options'
						isMulti
						value={selectedMetrics}
						onChange={(value) => {
							// @ts-ignore
							setSelectedMetrics((prevState) => [...prevState, value]);
						}}
					/>
					<SelectReact
						options={metrics}
						className='w-[200px]'
						id='options'
						name='options'
						isMulti
						value={selectedMetrics}
						onChange={(value) => {
							// @ts-ignore
							setSelectedMetrics((prevState) => [...prevState, value]);
						}}
					/>
				</div>
			</CardHeader>
			<CardBody className='overflow-auto'>
				<TableTemplate
					className='table-fixed max-md:min-w-[70rem]'
					table={table}
					hasFooter={false}
				/>
			</CardBody>
			<TableCardFooterTemplate table={table} />
		</Card>
	);
};

export default TablePartial;
