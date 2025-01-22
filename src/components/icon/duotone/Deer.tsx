import React, { SVGProps } from 'react';

const SvgDeer = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M21.982 8.19a.993.993 0 01-.468.667l-5 3A1 1 0 0116 12H8a1 1 0 01-.514-.143l-5-3a.993.993 0 01-.468-.668l-.999-4.993a1 1 0 011.962-.392l.633 3.168 2.679-2.68a1 1 0 011.414 1.415L4.613 7.801 8.277 10h7.446l3.664-2.199-3.094-3.094a1 1 0 111.414-1.414l2.679 2.679.633-3.168a1 1 0 011.962.392l-.999 4.993zm-6.93.704a1 1 0 01.895-1.788l3 1.5a1 1 0 01.067 1.751l-2.5 1.5A1 1 0 0116 12H8a1 1 0 01-.514-.143l-2.5-1.5a1 1 0 010-1.714l2.5-1.5a1 1 0 011.028 1.714l-1.07.643.833.5h7.446l.7-.42-1.37-.686z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M9.855 10h4.29a2 2 0 011.88 2.683l-2.683 7.377a1.428 1.428 0 01-2.683 0l-2.683-7.377A2 2 0 019.856 10z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgDeer;
