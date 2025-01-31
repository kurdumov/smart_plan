import React, {SVGProps} from 'react';

const SvgEraser = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5.929 14.828l4.243 4.243L13 16.243 8.757 12 5.93 14.828zm-1.238-1.59l9.546-9.547c.88-.878 2.167-1.015 2.877-.305l4.5 4.5c.71.71.573 1.998-.305 2.877l-9.546 9.546c-.88.878-2.167 1.015-2.877.305l-4.5-4.5c-.71-.71-.573-1.998.305-2.877z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgEraser;
