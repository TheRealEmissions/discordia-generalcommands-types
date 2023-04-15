import App from "../App";
import { BaseLang } from "./BaseLang";
import { SlashCommandBuilder } from "@discordjs/builders";
declare class HelpLang extends BaseLang {
    constructor(App: App);
    commandList(commands: SlashCommandBuilder[]): import("discord.js").APIEmbed & {
        content?: string | undefined;
    };
}
export default HelpLang;
