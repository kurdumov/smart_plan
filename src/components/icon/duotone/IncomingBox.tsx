import React, {SVGProps} from 'react';

const SvgIncomingBox = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M22 17v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4h4.28l.543 1.632A2 2 0 008.721 20h6.661a2 2 0 001.789-1.106L18.118 17H22z'
					fill='currentColor'
				/>
				<path
					d='M2.563 15l3.364-5.98A2 2 0 017.67 8h8.66a2 2 0 011.743 1.02L21.437 15h-3.319a2 2 0 00-1.789 1.106L15.382 18H8.721l-.544-1.632A2 2 0 006.279 15H2.563z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M14.888 2.83H12.93V.824a.5.5 0 00-.5-.5h-1.023a.5.5 0 00-.5.5v2.008H8.95a.5.5 0 00-.381.823l2.968 3.505a.5.5 0 00.763 0l2.968-3.505a.5.5 0 00-.381-.823z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgIncomingBox;
