import { Advantages } from '../../data/Advantages/Advantages';
import { СardAdvantage } from './СardAdvantage/СardAdvantage';
import style from './ListAdvantages.module.css';
import { Title } from '../Title/Title';
export const ListAdvantages = () => {
	return (
		<div className={style.wrap}>
			<Title>Наши преимущества</Title>
			<div className={style.advantages}>
				{Advantages.map((Advantage) => (
					<СardAdvantage key={Advantage.title} data={Advantage} />
				))}
			</div>
		</div>
	);
};
