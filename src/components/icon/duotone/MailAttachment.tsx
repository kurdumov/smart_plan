import React, {SVGProps} from 'react';

const SvgMailAttachment = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M14.857 13c.093-.278.143-.574.143-.881V6.881C15 5.29 13.657 4 12 4h-.273C10.221 4 9 5.173 9 6.619h1.09c0-.868.734-1.571 1.637-1.571H12c1.054 0 1.91.82 1.91 1.833v5.238c0 .32-.086.62-.235.881h-3.35a1.768 1.768 0 01-.234-.881V9.5c0-.434.366-.786.818-.786.452 0 .818.352.818.786v1.833h1.091V9.5c0-1.013-.855-1.833-1.909-1.833S9 8.487 9 9.5v2.619c0 .307.05.603.143.881H6a1 1 0 01-1-1V3a1 1 0 011-1h12a1 1 0 011 1v9a1 1 0 01-1 1h-3.143z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M9 10.333v1.786C9 13.71 10.343 15 12 15s3-1.29 3-2.881v-1.786l5.207-3.76a.5.5 0 01.793.405V17a2 2 0 01-2 2H5a2 2 0 01-2-2V6.978a.5.5 0 01.793-.405L9 10.333zm1.09.788L12 12.5l1.91-1.379v.998c0 1.013-.856 1.833-1.91 1.833-1.054 0-1.91-.82-1.91-1.833v-.998z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgMailAttachment;
