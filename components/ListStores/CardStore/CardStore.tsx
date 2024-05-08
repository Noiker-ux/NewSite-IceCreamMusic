import Image from 'next/image';
import style from './CardStore.module.css';
import IStore from '../../../data/Stores/Stores.interface';
export const CardStore = ({ image, alt }: IStore) => {
	return (
		<div className={style.card}>
			<Image
				className={style.image}
				alt={alt}
				src={image}
				width={225}
				height={80}
			/>
		</div>
	);
};
