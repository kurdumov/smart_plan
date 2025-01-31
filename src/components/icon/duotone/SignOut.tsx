import React, {SVGProps} from 'react';

const SvgSignOut = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M14 7a1 1 0 102 0V6a4 4 0 00-3.998-4H6.005a4 4 0 00-3.998 4v12a4 4 0 003.998 4h6.004a4 4 0 003.998-4v-1a1 1 0 10-2 0v1a2 2 0 01-1.998 2H6.005a2 2 0 01-1.999-2V6a2 2 0 012-2h5.996A2 2 0 0114 6v1z'
					fill='currentColor'
					opacity={0.3}
				/>
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='rotate(90 14 12)'
					x={13}
					y={6}
					width={2}
					height={12}
					rx={1}
				/>
				<path
					d='M17.293 9.707a1 1 0 011.414-1.414l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L19.586 12l-2.293-2.293z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgSignOut;
