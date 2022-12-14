/// <reference types="react" />
import { Wait } from "./sequence/wait";
interface Props {
    children: string | (string | Wait)[];
    style?: CSSStyleDeclaration;
}
export declare const Header: (props: Props) => JSX.Element;
export {};
//# sourceMappingURL=header.d.ts.map