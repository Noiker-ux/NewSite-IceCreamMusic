import { Banner } from '../../../../components/Banner/Banner';

import { ListStores } from '../../../../components/ListStores/ListStores';
import { ReviewList } from '../../../../components/ReviewList/ReviewList';
import style from './page.module.css';
import { BannerIntresting } from '../../../../data/BannerIntresting/BannerIntresting';

import { FAQ } from '../../../../components/FAQ/FAQ';
import { FAQ_data } from '../../../../data/FAQ/FAQ';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'ICECREAMMUSIC | Платформы',
	description:
		'ICECREAMMUSIC - Основные площадки. Мы предоставляем большой выбор популярных площадок! Делись своим творчеством со всем миром и будь услышанным!',
};

export default function Home() {
	return (
		<main className='main'>
			<div className={style.preview}>
				<h1 className={style.title}>Основные площадки</h1>
				<p className={style.text}>
					Мы предоставляем большой выбор популярных площадок! Делись своим
					творчеством со всем миром и будь услышанным!
				</p>
			</div>
			<ListStores />
			<FAQ
				FAQ_data={FAQ_data.filter((item) => {
					return item.important;
				})}
			/>

			<ReviewList />
			<Banner info={BannerIntresting} />
		</main>
	);
}
