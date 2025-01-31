import React, {SVGProps} from 'react';

const SvgSad = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect
					fill='currentColor'
					opacity={0.3}
					x={2}
					y={2}
					width={20}
					height={20}
					rx={10}
				/>
				<path
					d='M6.168 16.445a1 1 0 001.664 1.11C8.99 15.819 10.354 15 12 15c1.646 0 3.01.819 4.168 2.555a1 1 0 101.664-1.11C16.322 14.181 14.354 13 12 13c-2.354 0-4.322 1.18-5.832 3.445z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgSad;
