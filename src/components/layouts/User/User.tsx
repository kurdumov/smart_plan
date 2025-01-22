import React, { FC, HTMLAttributes, ReactNode, useId, useState } from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import useRoundedSize from '../../../hooks/useRoundedSize';
import useAsideStatus from '../../../hooks/useAsideStatus';
import themeConfig from '../../../config/theme.config';
import getFirstLetter from '../../../utils/getFirstLetter';

interface IUserProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	src?: string;
	name: string;
	position: string;
	isLoading?: boolean;
}
const User: FC<IUserProps> = (props) => {
	const {
		children,
		className,
		name,
		position,
		src,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		isLoading = false,
		...rest
	} = props;

	const { asideStatus } = useAsideStatus();

	const id = useId();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const { roundedCustom } = useRoundedSize('rounded-xl');

	return (
		<div data-component-name='User' className={classNames('relative', className)} {...rest}>
			<div
				className={classNames(
					'mb-2 min-w-[4.5rem] overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-950',
					{
						'ltr:translate-x-[-0.625rem] rtl:translate-x-[0.625rem]': !asideStatus,
					},
					themeConfig.transition,
				)}>
				<div
					className={classNames(
						'flex cursor-pointer gap-3 p-3',
						'text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-100',
						'transition-all duration-300 ease-in-out',
					)}
					onClick={() => setIsOpen((prevState) => !prevState)}
					role='presentation'>
					{src ? (
						<img
							src={src}
							alt='Avatar'
							className={classNames('h-12 w-12 object-cover', [
								`${roundedCustom(-2)}`,
							])}
						/>
					) : (
						<div
							className={classNames(
								'flex aspect-square h-12 w-12 items-center justify-center bg-blue-500/20 text-blue-500',
								[`${roundedCustom(-2)}`],
							)}>
							{name && getFirstLetter(name)}
						</div>
					)}
					<div className='flex basis-full flex-wrap items-center truncate'>
						<div className='flex basis-full items-center gap-2 truncate'>
							<span className='truncate font-semibold'>{name}</span>
						</div>
						<div className='basis-full truncate text-xs'>{position}</div>
					</div>
				</div>
				<AnimatePresence>
					{isOpen && (
						<motion.ul
							key={id}
							initial='collapsed'
							animate='open'
							exit='collapsed'
							variants={{
								open: { height: 'auto' },
								collapsed: { height: 0 },
							}}
							transition={{ duration: 0.3 }}
							className='px-3'>
							{children}
						</motion.ul>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};
User.displayName = 'User';

export default User;
