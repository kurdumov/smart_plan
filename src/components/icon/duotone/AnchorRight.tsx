import React, {SVGProps} from 'react';

const SvgAnchorRight = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<circle fill='currentColor' opacity={0.3} cx={19} cy={12} r={3} />
				<path d='M2 4h16v16H2z' />
				<path
					d='M11 9v7a1 1 0 01-2 0V9H7a1 1 0 110-2h6a1 1 0 010 2h-2z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgAnchorRight;
