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
				{ label: 'Кабинет', href: 'https://lk.icecreammusic.ru/' },
				{ label: 'Аналитика', href: 'https://lk.icecreammusic.ru/' },
				{ label: 'Финансы', href: 'https://lk.icecreammusic.ru/' },
				{ label: 'Смарт-ссылка', href: 'https://lk.icecreammusic.ru/' },
			],
		},
		{
			title: 'Панель управления',
			block: [{ label: 'Войти', href: 'https://lk.icecreammusic.ru/' }],
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
