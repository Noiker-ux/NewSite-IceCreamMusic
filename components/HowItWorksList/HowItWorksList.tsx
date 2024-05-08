import { HowItWorks } from '../../data/HowItWorks/HowItWorks';
import { Subtitle } from '../Subtitle/Subtitle';
import { Title } from '../Title/Title';
import { HowItWorksItem } from './HowItWorksItem/HowItWorksItem';
import style from './HowItWorksList.module.css';

export const HowItWorksList = () => {
	return (
		<div className={style.container}>
			<div className={style.desc}>
				<Title>Как это работает?</Title>
				<Subtitle>
					6 простых шага, чтобы узнать как мы выкладываем ваш релиз на площадки
				</Subtitle>
			</div>
			<div className={style.wrapper}>
				{HowItWorks.map((item) => (
					<HowItWorksItem
						key={item.title}
						altIcon={item.altIcon}
						description={item.description}
						icon={item.icon}
						title={item.title}
					/>
				))}
			</div>
		</div>
	);
};
