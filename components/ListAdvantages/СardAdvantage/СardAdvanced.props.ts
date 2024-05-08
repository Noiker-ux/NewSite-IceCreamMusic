import { DetailedHTMLProps, HTMLAttributes } from 'react';
import IAdvantage from '../../../data/Advantages/Advantages.inteface';

export default interface IСardAdvantage
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	data: IAdvantage;
}
