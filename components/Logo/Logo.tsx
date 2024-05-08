import Image from 'next/image';
import Link from 'next/link';
import style from './Logo.module.css';
import classNames from 'classnames';
import ILogo from './Logo.props';

export const Logo = ({ className }: ILogo) => {
	return (
		<Link href={'/'}>
			<Image
				className={classNames(className, style.logo)}
				alt='IceCreamMusic логотип'
				src={'/logo.png'}
				width={100}
				height={100}
			/>
		</Link>
	);
};
