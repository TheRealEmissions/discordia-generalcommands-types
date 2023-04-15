import App from "../App";
import { ICommand } from "./interfaces/ICommand";
import { BaseLang } from "../lang/BaseLang";
export declare abstract class BaseCommand implements ICommand {
    App: App;
    Lang: BaseLang;
    constructor(App: App);
    get [Symbol.toStringTag](): string;
}
