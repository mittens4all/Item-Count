import { world } from "@minecraft/server";

world.afterEvents.worldLoad.subscribe(() => {
    import("./item_count.js");
});
