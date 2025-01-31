import React, {SVGProps} from 'react';

const SvgBucket = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' opacity={0.3} x={7} y={1} width={10} height={3} rx={1} />
				<path
					d='M9.322 6h5.356a5 5 0 014.99 5.312l-.55 8.813A2 2 0 0117.12 22H6.88a2 2 0 01-1.996-1.875l-.551-8.813A5 5 0 019.322 6zM9 9a2 2 0 00-2 2v1a2 2 0 002 2h6a2 2 0 002-2v-1a2 2 0 00-2-2H9z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgBucket;
