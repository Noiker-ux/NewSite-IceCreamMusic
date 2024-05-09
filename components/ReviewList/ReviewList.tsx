import { Reviews } from '../../data/Reviews/Reviews';
import { Subtitle } from '../Subtitle/Subtitle';
import { Title } from '../Title/Title';
import { ReviewCard } from './ReviewCard/ReviewCard';
import style from './ReviewList.module.css';

export const ReviewList = () => {
	return (
		<div className={style.wrap}>
			<div className={style.text}>
				<Title>Впечатления артистов</Title>
				<Subtitle>Отзывы артистов о нашем сервисе</Subtitle>
			</div>
			<div className={style.review__list}>
				{Reviews.map((review) => (
					<ReviewCard
						name={review.name}
						review_text={review.review_text}
						role={review.role}
						key={review.review_text}
					/>
				))}
			</div>
		</div>
	);
};
