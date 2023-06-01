import Base from "ts-modular-bot-file-design";
import { Dependency } from "ada-types";
import Events from "ada-events-types";
import DiscordClient from "ada-discordclient-types";
declare abstract class BaseApp extends Base {
    constructor();
    type: Dependency;
    name: string;
    load: boolean;
    static Client: typeof DiscordClient;
    getClient(): import("ada-discordclient-types/discord-client/src/App").default;
    static Events: typeof Events;
    getEvents(): import("ada-events-types/events/src/App").default;
    abstract init(): Promise<void>;
    getDependencies(): Dependency[];
}
export default BaseApp;
