import React, { FC, ReactNode, useState } from 'react';
import classNames from 'classnames';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../context/authContext';
import { authPages } from '../../../config/pages.config';
import useDocumentTitle from '../../../hooks/useDocumentTitle';
import Header, { HeaderLeft, HeaderRight } from '../Header/Header.tsx';
import Label from '../../form/Label.tsx';
import SelectReact, { TSelectOptions } from '../../form/SelectReact.tsx';
import Dropdown, { DropdownMenu, DropdownToggle } from '../../ui/Dropdown.tsx';
import Button from '../../ui/Button.tsx';
import dayjs from 'dayjs';
import { DateRangePicker } from 'react-date-range';
import colors from 'tailwindcss/colors';
import themeConfig from '../../../config/theme.config.ts';
import { useFormik } from 'formik';
import 'dayjs/locale/en'; // Импортируйте нужную локаль

dayjs.locale('en'); // Установите локаль

interface IPageWrapperProps {
	children: ReactNode;
	className?: string;
	isProtectedRoute?: boolean;
	title?: string;
	name?: string;
}
const PageWrapper: FC<IPageWrapperProps> = (props) => {
	const { children, className, isProtectedRoute = true, title, name, ...rest } = props;

	useDocumentTitle({ title, name });

	const { usernameStorage } = useAuth();
	if (isProtectedRoute && !usernameStorage) {
		// user is not authenticated
		return <Navigate to={authPages.loginPage.to} />;
	}
	const options: TSelectOptions = [
		{ value: 'chocolate', label: 'Магнит' },
		{ value: 'strawberry', label: 'Лента' },
		{ value: 'vanilla', label: 'Ашан' },
	];
	const formik = useFormik({
		initialValues: {
			options: options[0],
		},
		onSubmit: () => {},
	});
	const [state, setState] = useState({
		selection: {
			startDate: dayjs().startOf('week').add(-1, 'week').toDate(),
			endDate: dayjs().endOf('week').toDate(),
			key: 'selection',
		},
		selection2: {
			startDate: dayjs().startOf('week').add(-1, 'week').add(2, 'day').toDate(),
			endDate: dayjs().endOf('week').add(-4, 'day').toDate(),
			key: 'selection2',
		},
		selection3: {
			startDate: dayjs().startOf('week').add(2, 'week').add(2, 'day').toDate(),
			endDate: dayjs().startOf('week').add(3, 'week').add(5, 'day').toDate(),
			key: 'selection3',
		},
	});

	return (
		<>
			<Header>
				<HeaderLeft>
					<div className='w-48'>
						<Label htmlFor='options'>Магазин:</Label>
						<SelectReact
							options={options}
							id='options'
							name='options'
							value={formik.values.options}
							onChange={(value) => formik.setFieldValue('options', value)}
						/>
					</div>
				</HeaderLeft>
				<HeaderRight>
					<Dropdown>
						<DropdownToggle>
							<Button icon='HeroCalendarDays'>{`${dayjs(state.selection.startDate)
								.locale('en')
								.format('LL')} - ${dayjs(state.selection3.endDate).format(
								'LL',
							)}`}</Button>
						</DropdownToggle>
						<DropdownMenu className='!p-0'>
							<DateRangePicker
								onChange={(item) =>
									setState({
										...state,
										...item,
									})
								}
								moveRangeOnFirstSelection={false}
								retainEndDateOnFirstSelection={false}
								months={2}
								ranges={Object.values(state)}
								direction='horizontal'
								rangeColors={[
									colors[themeConfig.themeColor][themeConfig.themeColorShade],
									colors.emerald[themeConfig.themeColorShade],
									colors.amber[themeConfig.themeColorShade],
								]}
							/>
						</DropdownMenu>
					</Dropdown>
				</HeaderRight>
			</Header>

			<main
				data-component-name='PageWrapper'
				className={classNames('flex shrink-0 grow flex-col', className)}
				{...rest}>
				{children}
			</main>
		</>
	);
};

export default PageWrapper;
