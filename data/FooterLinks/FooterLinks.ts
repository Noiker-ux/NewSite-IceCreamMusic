import IFooterLinks from './FooterLinks.interface';

export const FooterData: IFooterLinks = {
	data: [
		{
			title: 'Основное',
			block: [
				{ label: 'Главная', href: '/' },
				{ label: 'Дистрибуция', href: '/distribution' },
				{ label: 'Платформы', href: '/platforms' },
				{ label: 'Вопросы', href: '/questions' },
			],
		},
		{
			title: 'Каталог',
			block: [
				{ label: 'Кабинет', href: '/' },
				{ label: 'Аналитика', href: '/' },
				{ label: 'Финансы', href: '/' },
				{ label: 'Смарт-ссылка', href: '/' },
			],
		},
		{
			title: 'Панель управления',
			block: [{ label: 'Войти', href: '/' }],
		},
		{
			title: 'Документы',
			block: [
				{ label: 'Политика конфиденциальности', href: '/privacy' },
				{ label: 'Публичная оферта', href: '/terms' },
			],
		},
	],
};
