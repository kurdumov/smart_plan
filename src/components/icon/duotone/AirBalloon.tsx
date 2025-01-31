import React, {SVGProps} from 'react';

const SvgAirBalloon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M10.157 15.71a6.672 6.672 0 003.61 0l.511 1.378a.424.424 0 01-.395.577l-1.077-.027c.056 1.188.488 1.87 1.61 2.25.443.149.681.632.534 1.08a.84.84 0 01-1.066.54c-1.812-.612-2.706-1.92-2.762-3.843h-1.08a.429.429 0 01-.395-.577l.51-1.378z'
					fill='currentColor'
				/>
				<path
					d='M12 16a7 7 0 110-14 7 7 0 010 14zM8.816 8.8a.656.656 0 10-1.31.092c.117 1.661.89 2.972 2.289 3.875a.656.656 0 00.712-1.102c-1.051-.68-1.604-1.616-1.691-2.864z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgAirBalloon;
