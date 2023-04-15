import { CommandInteraction } from "discord.js";
import App from "../../App";
import { BaseCommand } from "../BaseCommand";
import HelpLang from "../../lang/Help";
export declare class HelpCommand extends BaseCommand {
    Lang: HelpLang;
    constructor(App: App);
    help(int: CommandInteraction): Promise<void>;
}
export default HelpCommand;
