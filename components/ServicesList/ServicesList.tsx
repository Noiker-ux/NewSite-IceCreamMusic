import { Services } from '../../data/Services/Services';
import { Subtitle } from '../Subtitle/Subtitle';
import { Title } from '../Title/Title';
import { ServiceItem } from './ServiceItem/ServiceItem';
import style from './ServicesList.module.css';

export const ServicesList = () => {
	return (
		<div className={style.container}>
			<div className={style.description}>
				<Title>Наши услуги</Title>
				<Subtitle>
					Ознакомьтесь с уловиями работы с нами! У нас есть бесплатный и платный
					тариф!
				</Subtitle>
			</div>
			<div className={style.wrapper}>
				{Services.map((Service) => (
					<ServiceItem
						key={Service.title}
						altIcon={Service.altIcon}
						countBuy={Service.countBuy}
						description={Service.description}
						href={Service.href}
						icon={Service.icon}
						labelButton={Service.labelButton}
						price={Service.price}
						title={Service.title}
						timeframe={Service.timeframe}
						listBenefit={Service.listBenefit}
						color={Service.color}
					/>
				))}
			</div>
		</div>
	);
};
