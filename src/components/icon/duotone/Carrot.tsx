import React, {SVGProps} from 'react';

const SvgCarrot = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12.886 11.478c-1.601-5.836-.611-9.529 2.97-11.08 2.204 3.101 1.215 6.795-2.97 11.08z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M23.06 7.669c-5.836-1.601-9.53-.612-11.08 2.969 3.1 2.205 6.794 1.215 11.08-2.969z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M20.005 3.495c-5.854 1.53-8.558 4.234-8.11 8.11 3.787.36 6.49-2.344 8.11-8.11z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M2.578 17.513l.29.29a1 1 0 101.414-1.414l-.69-.691 1.012-1.816 1.093 1.093A1 1 0 007.11 13.56l-1.414-1.415a1.011 1.011 0 00-.083-.074l1.016-1.82 1.895 1.894a1 1 0 101.414-1.414L7.818 8.611a1.002 1.002 0 00-.19-.15l.245-.437a2 2 0 013.16-.44l4.883 4.883a2 2 0 01-.44 3.16l-12.007 6.7a1.687 1.687 0 01-2.295-2.296l1.404-2.518z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgCarrot;
