import React, { SVGProps } from 'react';

const SvgFolderStar = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3.5 21h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 7H10L7.44 4.44A1.5 1.5 0 006.378 4H3.5A1.5 1.5 0 002 5.5v14A1.5 1.5 0 003.5 21z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M12 17.228l-2.198 1.207a.527.527 0 01-.727-.236.585.585 0 01-.054-.357l.42-2.557-1.778-1.812a.58.58 0 01-.01-.795.53.53 0 01.308-.164l2.457-.373 1.1-2.327a.528.528 0 01.965 0l1.099 2.327 2.457.373a.56.56 0 01.455.637.572.572 0 01-.157.322l-1.778 1.812.42 2.557a.56.56 0 01-.44.65.518.518 0 01-.34-.057L12 17.228z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgFolderStar;
