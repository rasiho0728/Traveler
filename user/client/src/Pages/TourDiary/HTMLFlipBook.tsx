import React from 'react';
import { IEventProps, IFlipSetting } from 'react-pageflip/build/html-flip-book/settings';
interface IProps extends IFlipSetting, IEventProps {
    className: string;
    style: React.CSSProperties;
    children: React.ReactNode;
    renderOnlyPageLengthChange?: boolean;
}
export declare const HTMLFlipBook: React.MemoExoticComponent<React.ForwardRefExoticComponent<IProps & React.RefAttributes<any>>>;
export {};
