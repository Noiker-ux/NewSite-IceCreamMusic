import { Banner } from '../../../../components/Banner/Banner';
import { FAQ } from '../../../../components/FAQ/FAQ';
import { ListStores } from '../../../../components/ListStores/ListStores';
import { ReviewList } from '../../../../components/ReviewList/ReviewList';
import { BannerIntresting } from '../../../../data/BannerIntresting/BannerIntresting';
import { FAQ_data } from '../../../../data/FAQ/FAQ';
import style from './page.module.css';

export default function Home() {
	return (
		<main className='main'>
			<div className={style.preview}>
				<h1 className={style.title}>Часто задаваемые вопросы</h1>
				<p className={style.text}>
					Здесь вы найдете ответ на интересующий вас вопрос!
				</p>
			</div>
			<FAQ FAQ_data={FAQ_data} />
			<ListStores />
			<ReviewList />
			<Banner info={BannerIntresting} />
		</main>
	);
}
