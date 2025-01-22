import React, { SVGProps } from 'react';

const SvgGroupFolders = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M4.5 21h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0021.5 7H11L8.44 4.44A1.5 1.5 0 007.378 4H4.5A1.5 1.5 0 003 5.5v14A1.5 1.5 0 004.5 21z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M2.5 19h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0019.5 5H9L6.44 2.44A1.5 1.5 0 005.378 2H2.5A1.5 1.5 0 001 3.5v14A1.5 1.5 0 002.5 19z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgGroupFolders;
