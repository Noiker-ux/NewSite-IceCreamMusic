import { Statistic } from '../../data/Statistics/Statistics';
import { Title } from '../Title/Title';
import { StatisticItem } from './StatisticItem/StatisticItem';
import style from './StatisticList.module.css';

export const StatisticList = () => {
	return (
		<div className={style.wrapper}>
			<Title>Наши цифры</Title>
			<div className={style.StatisticList}>
				{Statistic.map((StatisticElement) => (
					<StatisticItem
						key={StatisticElement.label}
						count={StatisticElement.count}
						label={StatisticElement.label}
					/>
				))}
			</div>
		</div>
	);
};
