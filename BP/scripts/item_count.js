import { world, system } from "@minecraft/server";

for (const objective of world.scoreboard.getObjectives()) {
    if (!objective.id.startsWith("inv:")) continue;
    world.scoreboard.removeObjective(objective);
}

system.runInterval(() => {
    const players = world.getAllPlayers();
    for (const player of players) {
        if (!player.lastInventory) player.lastInventory = {};
        const inv = player.getComponent("inventory").container;
        const itemAmounts = {};
        const cursorInv = player.getComponent('cursor_inventory');
        const cursor = cursorInv.item;
        const head = player.getComponent("equippable").getEquipment("Head");
        const chest = player.getComponent("equippable").getEquipment("Chest");
        const legs = player.getComponent("equippable").getEquipment("Legs");
        const feet = player.getComponent("equippable").getEquipment("Feet");
        const offhand = player.getComponent("equippable").getEquipment("Offhand");

        for (let i = 0; i < inv.size; i++) {
            const item = inv.getItem(i);
            if (!item) continue;
            const itemKey = item.typeId.replace("minecraft:", "inv:");
            const itemAmount = itemAmounts[itemKey] ?? 0;
            itemAmounts[itemKey] = itemAmount + item.amount;
        }
        if (cursor) {
            const itemKey = cursor.typeId.replace("minecraft:", "inv:");
            const itemAmount = itemAmounts[itemKey] ?? 0;
            itemAmounts[itemKey] = itemAmount + cursor.amount;
        }
        if (head) {
            const itemKey = head.typeId.replace("minecraft:", "inv:");
            const itemAmount = itemAmounts[itemKey] ?? 0;
            itemAmounts[itemKey] = itemAmount + head.amount;
        }
        if (chest) {
            const itemKey = chest.typeId.replace("minecraft:", "inv:");
            const itemAmount = itemAmounts[itemKey] ?? 0;
            itemAmounts[itemKey] = itemAmount + chest.amount;
        }
        if (legs) {
            const itemKey = legs.typeId.replace("minecraft:", "inv:");
            const itemAmount = itemAmounts[itemKey] ?? 0;
            itemAmounts[itemKey] = itemAmount + legs.amount;
        }
        if (feet) {
            const itemKey = feet.typeId.replace("minecraft:", "inv:");
            const itemAmount = itemAmounts[itemKey] ?? 0;
            itemAmounts[itemKey] = itemAmount + feet.amount;
        }
        if (offhand) {
            const itemKey = offhand.typeId.replace("minecraft:", "inv:");
            const itemAmount = itemAmounts[itemKey] ?? 0;
            itemAmounts[itemKey] = itemAmount + offhand.amount;
        }
        for (const itemKey in itemAmounts) {
            getObjective(itemKey).setScore(player, itemAmounts[itemKey]);
        }
        for (const itemKey in player.lastInventory) {
            if (!itemAmounts[itemKey]) {
                getObjective(itemKey).removeParticipant(player);
            }
        }
        player.lastInventory = itemAmounts;
    }
}, 1);

const objectiveCache = new Map();

/**
 * @param {string} id 
 * @returns {import("@minecraft/server").ScoreboardObjective}
 */
function getObjective(id) {
    return objectiveCache.get(id) ?? cacheObjective(id);
}

function cacheObjective(id) {
    const objective = world.scoreboard.getObjective(id) ?? world.scoreboard.addObjective(id);
    objectiveCache.set(id, objective);
    return objective;
}
