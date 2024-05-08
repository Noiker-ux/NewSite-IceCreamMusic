import IFAQ from '../../data/FAQ/FAQ.interface';
import { Title } from '../Title/Title';
import style from './FAQ.module.css';
import { FAQ__item } from './FAQ__item/FAQ__item';
export const FAQ = ({ FAQ_data }: { FAQ_data: IFAQ[] }) => {
	return (
		<div className={style.wrap}>
			<Title>Часто задаваемые вопросы</Title>
			<div className={style.faq}>
				{FAQ_data.map((FAQ_item) => (
					<FAQ__item
						key={FAQ_item.question}
						question={FAQ_item.question}
						answer={FAQ_item.answer}
						important={FAQ_item.important}
					/>
				))}
			</div>
		</div>
	);
};
