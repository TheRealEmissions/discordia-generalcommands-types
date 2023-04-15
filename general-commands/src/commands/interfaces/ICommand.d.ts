import App from "../../App";
import { BaseLang } from "../../lang/BaseLang";
export interface ICommand {
    App: App;
    Lang: BaseLang;
    get [Symbol.toStringTag](): string;
}
