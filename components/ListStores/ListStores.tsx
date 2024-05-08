import { Stores } from '../../data/Stores/Stores';
import { Subtitle } from '../Subtitle/Subtitle';
import { Title } from '../Title/Title';
import { CardStore } from './CardStore/CardStore';
import style from './ListStores.module.css';

export const ListStores = () => {
	return (
		<div className={style.wrap}>
			<div className={style.description}>
				<Title>Основные площадки</Title>
				<Subtitle>
					6 простых шага, чтобы узнать как мы выкладываем ваш релиз на площадки
				</Subtitle>
			</div>
			<div className={style.storesWrapper}>
				{Stores.map((store) => (
					<CardStore key={store.image} alt={store.alt} image={store.image} />
				))}
				<div className={style.cardMore}>И ещё 240 площадок</div>
			</div>
		</div>
	);
};
