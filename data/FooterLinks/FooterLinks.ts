import IFooterLinks from './FooterLinks.interface';

export const FooterData: IFooterLinks = {
	data: [
		{
			title: 'Основное',
			block: [
				{ label: 'Главная', href: '/' },
				{ label: 'Дистрибуция', href: '/distribution' },
				{ label: 'Платформы', href: '/stores' },
				{ label: 'Вопросы', href: '/questions' },
			],
		},
		{
			title: 'Каталог',
			block: [
				{ label: 'Кабинет', href: '/' },
				{ label: 'Аналитика', href: '/distribution' },
				{ label: 'Финансы', href: '/stores' },
				{ label: 'Смарт-ссылка', href: '/questions' },
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
