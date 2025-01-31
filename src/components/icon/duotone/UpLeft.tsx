import React, {SVGProps} from 'react';

const SvgUpLeft = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='rotate(-45 12.354 12.854)'
					x={11.354}
					y={5.854}
					width={2}
					height={14}
					rx={1}
				/>
				<path
					d='M8.404 16.39a1 1 0 01-2 0V7.903a1 1 0 01.956-1l8.132-.353a1 1 0 01.087 1.998l-7.175.312v7.528z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgUpLeft;
