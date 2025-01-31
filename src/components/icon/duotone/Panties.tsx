import React, {SVGProps} from 'react';

const SvgPanties = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M1 10V9a1 1 0 011-1h20a1 1 0 011 1v1a1 1 0 01-1 1c-4.03.47-7.258 3.808-7.888 8H9.888C9.258 14.808 6.03 11.47 2 11a1 1 0 01-1-1z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgPanties;
