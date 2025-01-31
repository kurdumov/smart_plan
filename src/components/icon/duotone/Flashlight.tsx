import React, {SVGProps} from 'react';

const SvgFlashlight = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M6 10V6h12v4c-2 1.52-3 2.853-3 4v6a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6c0-1.667-1-3-3-4zm6 1a2 2 0 00-2 2v2a2 2 0 104 0v-2a2 2 0 00-2-2zm0 3a1 1 0 110-2 1 1 0 010 2z'
					fill='currentColor'
				/>
				<path
					d='M7 2h10a1 1 0 011 1v1H6V3a1 1 0 011-1z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgFlashlight;
