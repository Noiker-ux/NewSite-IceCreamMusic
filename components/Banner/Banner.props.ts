import { DetailedHTMLProps, HTMLAttributes } from 'react';
import IBannerIntresting from '../../data/BannerIntresting/BannerIntresting.interface';

export default interface IBannerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	fromColor?: string;
	toColor?: string;
	info: IBannerIntresting;
}
