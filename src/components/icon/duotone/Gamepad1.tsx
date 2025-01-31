import React, {SVGProps} from 'react';

const SvgGamepad1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12.949 9.316l-1.898-.632c.765-2.294 1.992-3.725 3.706-4.154C15.65 4.307 17 2.87 17 2h2c0 1.797-1.984 4.027-3.757 4.47-.952.238-1.726 1.14-2.294 2.846z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M7.057 8.028C7.202 8.009 7.35 8 7.5 8h9c.15 0 .298.01.443.028A5.5 5.5 0 1113.257 17h-2.514a5.5 5.5 0 11-3.686-8.972zM5.5 10a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm2 2a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM19 12a1 1 0 100-2 1 1 0 000 2zm-1 3a1 1 0 100-2 1 1 0 000 2zM5.5 14a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm-2-2a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgGamepad1;
