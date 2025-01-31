import React, {SVGProps} from 'react';

const SvgKitchenScale = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5 8h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2zm7 12a5 5 0 100-10 5 5 0 000 10zm-.427-6.438L12 11l.427 2.562a1.5 1.5 0 11-.854 0z'
					fill='currentColor'
				/>
				<path
					d='M14 6v2h-4V6H7.803A3.369 3.369 0 015 4.5l-.482-.723A.5.5 0 014.934 3h14.132a.5.5 0 01.416.777L19 4.5A3.369 3.369 0 0116.197 6H14z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgKitchenScale;
