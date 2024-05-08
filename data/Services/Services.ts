import IService from './Service.interface';

export const Services: IService[] = [
	{
		title: 'Премиум артист',
		description:
			'Данная подписка действует, при наличии от 10к прослушиваний в месяц. Подписка также распространяется на лэйблы.',
		icon: '/service/microphone.png',
		altIcon: 'Иконка микрофона',
		countBuy: 263,
		color: 'green',
		price: 0,
		timeframe: 'навсегда',
		href: '/',
		listBenefit: [
			'Личный кабинет',
			'Премиальная промо-поддержка',
			'Изменение копирайта',
			'Бесплатная дистрибуция',
			'Создание смарт-ссылок',
		],
		labelButton: 'Попробовать',
	},
	{
		title: 'Профессиональная',
		description:
			'Погрузитесь в мир уникальных возможностей и эксклюзивных преимуществ. Подходит для тех, кто стремится к максимальному успеху.',
		icon: '/service/moneyBack.png',
		altIcon: 'Иконка портфеля',
		countBuy: 329,
		href: '/',
		labelButton: 'Купить',
		price: 4499,
		color: 'orange',
		timeframe: 'навсегда',
		listBenefit: [
			'Премиальная промо-поддержка',
			'Изменение копирайта',
			'Добавление караоке-текстов',
			'Приоритетная поддержка с личным менеджером',
			'Премиальные функции',
		],
	},
	{
		title: 'Премиум',
		description:
			'Получите полный доступ ко всем функциям платформы. Подходит для тех, кто стремится к серьезному росту.',
		icon: '/service/dollar.png',
		altIcon: 'Иконка доллара',
		countBuy: 642,
		href: '/',
		labelButton: 'Купить',
		price: 1499,
		color: 'purple',
		timeframe: 'навсегда',
		listBenefit: [
			'90% от дохода',
			'Премиальная отгрузка',
			'Расширенная аналитика',
			'Приоритетная поддержка с личным менеджером',
		],
	},
];
