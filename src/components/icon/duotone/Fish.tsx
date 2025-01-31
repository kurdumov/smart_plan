import React, {SVGProps} from 'react';

const SvgFish = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M7.223 10.494c.223-.002.447.01.67.034.061.56.04 1.127-.061 1.682.102.555.122 1.123.06 1.682a5.798 5.798 0 01-.669.035c-.257.47-.585.913-.984 1.312a5.754 5.754 0 01-4.71 1.653 5.753 5.753 0 011.625-4.682 5.753 5.753 0 01-1.626-4.682 5.754 5.754 0 014.71 1.654c.4.399.728.841.985 1.312z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M14 6c3.813 0 7.211 3.15 9.41 6.595C21.21 15.851 17.812 19 14 19c-3.813 0-7.211-3.15-9.41-6.405C6.79 9.15 10.188 6 14 6zm6 7a1 1 0 100-2 1 1 0 000 2z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgFish;
