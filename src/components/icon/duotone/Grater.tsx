import React, {SVGProps} from 'react';

const SvgGrater = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M7.928 8.371L6.072 7.63l.885-2.215a5.431 5.431 0 0110.086 0l.885 2.215-1.856.742-.886-2.214a3.431 3.431 0 00-6.372 0L7.928 8.37z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M7.617 7h8.766a2 2 0 011.956 1.58l2.143 10A2 2 0 0118.526 21H5.474a2 2 0 01-1.956-2.42l2.143-10A2 2 0 017.617 7zM6 19a1 1 0 100-2 1 1 0 000 2zm2-4a1 1 0 100-2 1 1 0 000 2zm2-4a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2zm-2 4a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2zm-6 4a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgGrater;
