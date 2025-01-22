import React from 'react';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import dayjs from 'dayjs';
import colors from 'tailwindcss/colors';
import AsideRouter from '../components/router/AsideRouter';
import Wrapper from '../components/layouts/Wrapper/Wrapper';
import HeaderRouter from '../components/router/HeaderRouter';
import ContentRouter from '../components/router/ContentRouter';
import useFontSize from '../hooks/useFontSize';
import getOS from '../utils/getOS.util';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	getOS();

	const { fontSize } = useFontSize();
	dayjs.extend(localizedFormat);

	return (
		<>
			<style>{`:root {font-size: ${fontSize}px;
			--toastify-toast-bd-radius: 0.75rem;
			--toastify-color-dark:  ${colors.zinc['800']};
			--toastify-color-info: ${colors.blue['500']};
			--toastify-color-success: ${colors.emerald['500']};
			--toastify-color-warning: ${colors.amber['500']};
			--toastify-color-error: ${colors.red['500']};
			--toastify-color-progress-light: linear-gradient(
				to right,
    			${colors.blue['500']},
    			${colors.emerald['500']},
    			${colors.amber['500']},
				${colors.red['500']});`}</style>
			<div data-component-name='App' className='flex grow flex-col'>
				<AsideRouter />
				<Wrapper>
					<HeaderRouter />
					<ContentRouter />
				</Wrapper>
			</div>
		</>
	);
};

export default App;
