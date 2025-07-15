import { world, system } from "@minecraft/server";

// Create Scoreboard Objectives
const objAcaciaBoat = world.scoreboard.getObjective("item_count:acacia_boat") ?? world.scoreboard.addObjective("item_count:acacia_boat");
const objAcaciaButton = world.scoreboard.getObjective("item_count:acacia_button") ?? world.scoreboard.addObjective("item_count:acacia_button");
const objAcaciaChestBoat = world.scoreboard.getObjective("item_count:acacia_chest_boat") ?? world.scoreboard.addObjective("item_count:acacia_chest_boat");
const objAcaciaDoor = world.scoreboard.getObjective("item_count:acacia_door") ?? world.scoreboard.addObjective("item_count:acacia_door");
const objAcaciaFence = world.scoreboard.getObjective("item_count:acacia_fence") ?? world.scoreboard.addObjective("item_count:acacia_fence");
const objAcaciaFenceGate = world.scoreboard.getObjective("item_count:acacia_fence_gate") ?? world.scoreboard.addObjective("item_count:acacia_fence_gate");
const objAcaciaHangingSign = world.scoreboard.getObjective("item_count:acacia_hanging_sign") ?? world.scoreboard.addObjective("item_count:acacia_hanging_sign");
const objAcaciaLeaves = world.scoreboard.getObjective("item_count:acacia_leaves") ?? world.scoreboard.addObjective("item_count:acacia_leaves");
const objAcaciaLog = world.scoreboard.getObjective("item_count:acacia_log") ?? world.scoreboard.addObjective("item_count:acacia_log");
const objAcaciaPlanks = world.scoreboard.getObjective("item_count:acacia_planks") ?? world.scoreboard.addObjective("item_count:acacia_planks");
const objAcaciaPressurePlate = world.scoreboard.getObjective("item_count:acacia_pressure_plate") ?? world.scoreboard.addObjective("item_count:acacia_pressure_plate");
const objAcaciaSapling = world.scoreboard.getObjective("item_count:acacia_sapling") ?? world.scoreboard.addObjective("item_count:acacia_sapling");
const objAcaciaSign = world.scoreboard.getObjective("item_count:acacia_sign") ?? world.scoreboard.addObjective("item_count:acacia_sign");
const objAcaciaSlab = world.scoreboard.getObjective("item_count:acacia_slab") ?? world.scoreboard.addObjective("item_count:acacia_slab");
const objAcaciaStairs = world.scoreboard.getObjective("item_count:acacia_stairs") ?? world.scoreboard.addObjective("item_count:acacia_stairs");
const objAcaciaTrapdoor = world.scoreboard.getObjective("item_count:acacia_trapdoor") ?? world.scoreboard.addObjective("item_count:acacia_trapdoor");
const objAcaciaWood = world.scoreboard.getObjective("item_count:acacia_wood") ?? world.scoreboard.addObjective("item_count:acacia_wood");
const objActivatorRail = world.scoreboard.getObjective("item_count:activator_rail") ?? world.scoreboard.addObjective("item_count:activator_rail");
const objAllaySpawnEgg = world.scoreboard.getObjective("item_count:allay_spawn_egg") ?? world.scoreboard.addObjective("item_count:allay_spawn_egg");
const objAllium = world.scoreboard.getObjective("item_count:allium") ?? world.scoreboard.addObjective("item_count:allium");
const objAllow = world.scoreboard.getObjective("item_count:allow") ?? world.scoreboard.addObjective("item_count:allow");
const objAmethystBlock = world.scoreboard.getObjective("item_count:amethyst_block") ?? world.scoreboard.addObjective("item_count:amethyst_block");
const objAmethystCluster = world.scoreboard.getObjective("item_count:amethyst_cluster") ?? world.scoreboard.addObjective("item_count:amethyst_cluster");
const objAmethystShard = world.scoreboard.getObjective("item_count:amethyst_shard") ?? world.scoreboard.addObjective("item_count:amethyst_shard");
const objAncientDebris = world.scoreboard.getObjective("item_count:ancient_debris") ?? world.scoreboard.addObjective("item_count:ancient_debris");
const objAndesite = world.scoreboard.getObjective("item_count:andesite") ?? world.scoreboard.addObjective("item_count:andesite");
const objAndesiteSlab = world.scoreboard.getObjective("item_count:andesite_slab") ?? world.scoreboard.addObjective("item_count:andesite_slab");
const objAndesiteStairs = world.scoreboard.getObjective("item_count:andesite_stairs") ?? world.scoreboard.addObjective("item_count:andesite_stairs");
const objAndesiteWall = world.scoreboard.getObjective("item_count:andesite_wall") ?? world.scoreboard.addObjective("item_count:andesite_wall");
const objAnglerPotterySherd = world.scoreboard.getObjective("item_count:angler_pottery_sherd") ?? world.scoreboard.addObjective("item_count:angler_pottery_sherd");
const objAnvil = world.scoreboard.getObjective("item_count:anvil") ?? world.scoreboard.addObjective("item_count:anvil");
const objApple = world.scoreboard.getObjective("item_count:apple") ?? world.scoreboard.addObjective("item_count:apple");
const objArcherPotterySherd = world.scoreboard.getObjective("item_count:archer_pottery_sherd") ?? world.scoreboard.addObjective("item_count:archer_pottery_sherd");
const objArmadilloScute = world.scoreboard.getObjective("item_count:armadillo_scute") ?? world.scoreboard.addObjective("item_count:armadillo_scute");
const objArmadilloSpawnEgg = world.scoreboard.getObjective("item_count:armadillo_spawn_egg") ?? world.scoreboard.addObjective("item_count:armadillo_spawn_egg");
const objArmorStand = world.scoreboard.getObjective("item_count:armor_stand") ?? world.scoreboard.addObjective("item_count:armor_stand");
const objArmsUpPotterySherd = world.scoreboard.getObjective("item_count:arms_up_pottery_sherd") ?? world.scoreboard.addObjective("item_count:arms_up_pottery_sherd");
const objArrow = world.scoreboard.getObjective("item_count:arrow") ?? world.scoreboard.addObjective("item_count:arrow");
const objAxolotlBucket = world.scoreboard.getObjective("item_count:axolotl_bucket") ?? world.scoreboard.addObjective("item_count:axolotl_bucket");
const objAxolotlSpawnEgg = world.scoreboard.getObjective("item_count:axolotl_spawn_egg") ?? world.scoreboard.addObjective("item_count:axolotl_spawn_egg");
const objAzalea = world.scoreboard.getObjective("item_count:azalea") ?? world.scoreboard.addObjective("item_count:azalea");
const objAzaleaLeaves = world.scoreboard.getObjective("item_count:azalea_leaves") ?? world.scoreboard.addObjective("item_count:azalea_leaves");
const objAzaleaLeavesFlowered = world.scoreboard.getObjective("item_count:azalea_leaves_flowered") ?? world.scoreboard.addObjective("item_count:azalea_leaves_flowered");
const objAzureBluet = world.scoreboard.getObjective("item_count:azure_bluet") ?? world.scoreboard.addObjective("item_count:azure_bluet");
const objBakedPotato = world.scoreboard.getObjective("item_count:baked_potato") ?? world.scoreboard.addObjective("item_count:baked_potato");
const objBamboo = world.scoreboard.getObjective("item_count:bamboo") ?? world.scoreboard.addObjective("item_count:bamboo");
const objBambooBlock = world.scoreboard.getObjective("item_count:bamboo_block") ?? world.scoreboard.addObjective("item_count:bamboo_block");
const objBambooButton = world.scoreboard.getObjective("item_count:bamboo_button") ?? world.scoreboard.addObjective("item_count:bamboo_button");
const objBambooChestRaft = world.scoreboard.getObjective("item_count:bamboo_chest_raft") ?? world.scoreboard.addObjective("item_count:bamboo_chest_raft");
const objBambooDoor = world.scoreboard.getObjective("item_count:bamboo_door") ?? world.scoreboard.addObjective("item_count:bamboo_door");
const objBambooFence = world.scoreboard.getObjective("item_count:bamboo_fence") ?? world.scoreboard.addObjective("item_count:bamboo_fence");
const objBambooFenceGate = world.scoreboard.getObjective("item_count:bamboo_fence_gate") ?? world.scoreboard.addObjective("item_count:bamboo_fence_gate");
const objBambooHangingSign = world.scoreboard.getObjective("item_count:bamboo_hanging_sign") ?? world.scoreboard.addObjective("item_count:bamboo_hanging_sign");
const objBambooMosaic = world.scoreboard.getObjective("item_count:bamboo_mosaic") ?? world.scoreboard.addObjective("item_count:bamboo_mosaic");
const objBambooMosaicSlab = world.scoreboard.getObjective("item_count:bamboo_mosaic_slab") ?? world.scoreboard.addObjective("item_count:bamboo_mosaic_slab");
const objBambooMosaicStairs = world.scoreboard.getObjective("item_count:bamboo_mosaic_stairs") ?? world.scoreboard.addObjective("item_count:bamboo_mosaic_stairs");
const objBambooPlanks = world.scoreboard.getObjective("item_count:bamboo_planks") ?? world.scoreboard.addObjective("item_count:bamboo_planks");
const objBambooPressurePlate = world.scoreboard.getObjective("item_count:bamboo_pressure_plate") ?? world.scoreboard.addObjective("item_count:bamboo_pressure_plate");
const objBambooRaft = world.scoreboard.getObjective("item_count:bamboo_raft") ?? world.scoreboard.addObjective("item_count:bamboo_raft");
const objBambooSign = world.scoreboard.getObjective("item_count:bamboo_sign") ?? world.scoreboard.addObjective("item_count:bamboo_sign");
const objBambooSlab = world.scoreboard.getObjective("item_count:bamboo_slab") ?? world.scoreboard.addObjective("item_count:bamboo_slab");
const objBambooStairs = world.scoreboard.getObjective("item_count:bamboo_stairs") ?? world.scoreboard.addObjective("item_count:bamboo_stairs");
const objBambooTrapdoor = world.scoreboard.getObjective("item_count:bamboo_trapdoor") ?? world.scoreboard.addObjective("item_count:bamboo_trapdoor");
const objBanner = world.scoreboard.getObjective("item_count:banner") ?? world.scoreboard.addObjective("item_count:banner");
const objBarrel = world.scoreboard.getObjective("item_count:barrel") ?? world.scoreboard.addObjective("item_count:barrel");
const objBarrier = world.scoreboard.getObjective("item_count:barrier") ?? world.scoreboard.addObjective("item_count:barrier");
const objBasalt = world.scoreboard.getObjective("item_count:basalt") ?? world.scoreboard.addObjective("item_count:basalt");
const objBatSpawnEgg = world.scoreboard.getObjective("item_count:bat_spawn_egg") ?? world.scoreboard.addObjective("item_count:bat_spawn_egg");
const objBeacon = world.scoreboard.getObjective("item_count:beacon") ?? world.scoreboard.addObjective("item_count:beacon");
const objBed = world.scoreboard.getObjective("item_count:bed") ?? world.scoreboard.addObjective("item_count:bed");
const objBedrock = world.scoreboard.getObjective("item_count:bedrock") ?? world.scoreboard.addObjective("item_count:bedrock");
const objBeeNest = world.scoreboard.getObjective("item_count:bee_nest") ?? world.scoreboard.addObjective("item_count:bee_nest");
const objBeeSpawnEgg = world.scoreboard.getObjective("item_count:bee_spawn_egg") ?? world.scoreboard.addObjective("item_count:bee_spawn_egg");
const objBeef = world.scoreboard.getObjective("item_count:beef") ?? world.scoreboard.addObjective("item_count:beef");
const objBeehive = world.scoreboard.getObjective("item_count:beehive") ?? world.scoreboard.addObjective("item_count:beehive");
const objBeetroot = world.scoreboard.getObjective("item_count:beetroot") ?? world.scoreboard.addObjective("item_count:beetroot");
const objBeetrootSeeds = world.scoreboard.getObjective("item_count:beetroot_seeds") ?? world.scoreboard.addObjective("item_count:beetroot_seeds");
const objBeetrootSoup = world.scoreboard.getObjective("item_count:beetroot_soup") ?? world.scoreboard.addObjective("item_count:beetroot_soup");
const objBell = world.scoreboard.getObjective("item_count:bell") ?? world.scoreboard.addObjective("item_count:bell");
const objBigDripleaf = world.scoreboard.getObjective("item_count:big_dripleaf") ?? world.scoreboard.addObjective("item_count:big_dripleaf");
const objBirchBoat = world.scoreboard.getObjective("item_count:birch_boat") ?? world.scoreboard.addObjective("item_count:birch_boat");
const objBirchButton = world.scoreboard.getObjective("item_count:birch_button") ?? world.scoreboard.addObjective("item_count:birch_button");
const objBirchChestBoat = world.scoreboard.getObjective("item_count:birch_chest_boat") ?? world.scoreboard.addObjective("item_count:birch_chest_boat");
const objBirchDoor = world.scoreboard.getObjective("item_count:birch_door") ?? world.scoreboard.addObjective("item_count:birch_door");
const objBirchFence = world.scoreboard.getObjective("item_count:birch_fence") ?? world.scoreboard.addObjective("item_count:birch_fence");
const objBirchFenceGate = world.scoreboard.getObjective("item_count:birch_fence_gate") ?? world.scoreboard.addObjective("item_count:birch_fence_gate");
const objBirchHangingSign = world.scoreboard.getObjective("item_count:birch_hanging_sign") ?? world.scoreboard.addObjective("item_count:birch_hanging_sign");
const objBirchLeaves = world.scoreboard.getObjective("item_count:birch_leaves") ?? world.scoreboard.addObjective("item_count:birch_leaves");
const objBirchLog = world.scoreboard.getObjective("item_count:birch_log") ?? world.scoreboard.addObjective("item_count:birch_log");
const objBirchPlanks = world.scoreboard.getObjective("item_count:birch_planks") ?? world.scoreboard.addObjective("item_count:birch_planks");
const objBirchPressurePlate = world.scoreboard.getObjective("item_count:birch_pressure_plate") ?? world.scoreboard.addObjective("item_count:birch_pressure_plate");
const objBirchSapling = world.scoreboard.getObjective("item_count:birch_sapling") ?? world.scoreboard.addObjective("item_count:birch_sapling");
const objBirchSign = world.scoreboard.getObjective("item_count:birch_sign") ?? world.scoreboard.addObjective("item_count:birch_sign");
const objBirchSlab = world.scoreboard.getObjective("item_count:birch_slab") ?? world.scoreboard.addObjective("item_count:birch_slab");
const objBirchStairs = world.scoreboard.getObjective("item_count:birch_stairs") ?? world.scoreboard.addObjective("item_count:birch_stairs");
const objBirchTrapdoor = world.scoreboard.getObjective("item_count:birch_trapdoor") ?? world.scoreboard.addObjective("item_count:birch_trapdoor");
const objBirchWood = world.scoreboard.getObjective("item_count:birch_wood") ?? world.scoreboard.addObjective("item_count:birch_wood");
const objBlackBundle = world.scoreboard.getObjective("item_count:black_bundle") ?? world.scoreboard.addObjective("item_count:black_bundle");
const objBlackCandle = world.scoreboard.getObjective("item_count:black_candle") ?? world.scoreboard.addObjective("item_count:black_candle");
const objBlackCarpet = world.scoreboard.getObjective("item_count:black_carpet") ?? world.scoreboard.addObjective("item_count:black_carpet");
const objBlackConcrete = world.scoreboard.getObjective("item_count:black_concrete") ?? world.scoreboard.addObjective("item_count:black_concrete");
const objBlackConcretePowder = world.scoreboard.getObjective("item_count:black_concrete_powder") ?? world.scoreboard.addObjective("item_count:black_concrete_powder");
const objBlackDye = world.scoreboard.getObjective("item_count:black_dye") ?? world.scoreboard.addObjective("item_count:black_dye");
const objBlackGlazedTerracotta = world.scoreboard.getObjective("item_count:black_glazed_terracotta") ?? world.scoreboard.addObjective("item_count:black_glazed_terracotta");
const objBlackHarness = world.scoreboard.getObjective("item_count:black_harness") ?? world.scoreboard.addObjective("item_count:black_harness");
const objBlackShulkerBox = world.scoreboard.getObjective("item_count:black_shulker_box") ?? world.scoreboard.addObjective("item_count:black_shulker_box");
const objBlackStainedGlass = world.scoreboard.getObjective("item_count:black_stained_glass") ?? world.scoreboard.addObjective("item_count:black_stained_glass");
const objBlackStainedGlassPane = world.scoreboard.getObjective("item_count:black_stained_glass_pane") ?? world.scoreboard.addObjective("item_count:black_stained_glass_pane");
const objBlackTerracotta = world.scoreboard.getObjective("item_count:black_terracotta") ?? world.scoreboard.addObjective("item_count:black_terracotta");
const objBlackWool = world.scoreboard.getObjective("item_count:black_wool") ?? world.scoreboard.addObjective("item_count:black_wool");
const objBlackstone = world.scoreboard.getObjective("item_count:blackstone") ?? world.scoreboard.addObjective("item_count:blackstone");
const objBlackstoneSlab = world.scoreboard.getObjective("item_count:blackstone_slab") ?? world.scoreboard.addObjective("item_count:blackstone_slab");
const objBlackstoneStairs = world.scoreboard.getObjective("item_count:blackstone_stairs") ?? world.scoreboard.addObjective("item_count:blackstone_stairs");
const objBlackstoneWall = world.scoreboard.getObjective("item_count:blackstone_wall") ?? world.scoreboard.addObjective("item_count:blackstone_wall");
const objBladePotterySherd = world.scoreboard.getObjective("item_count:blade_pottery_sherd") ?? world.scoreboard.addObjective("item_count:blade_pottery_sherd");
const objBlastFurnace = world.scoreboard.getObjective("item_count:blast_furnace") ?? world.scoreboard.addObjective("item_count:blast_furnace");
const objBlazePowder = world.scoreboard.getObjective("item_count:blaze_powder") ?? world.scoreboard.addObjective("item_count:blaze_powder");
const objBlazeRod = world.scoreboard.getObjective("item_count:blaze_rod") ?? world.scoreboard.addObjective("item_count:blaze_rod");
const objBlazeSpawnEgg = world.scoreboard.getObjective("item_count:blaze_spawn_egg") ?? world.scoreboard.addObjective("item_count:blaze_spawn_egg");
const objBlueBundle = world.scoreboard.getObjective("item_count:blue_bundle") ?? world.scoreboard.addObjective("item_count:blue_bundle");
const objBlueCandle = world.scoreboard.getObjective("item_count:blue_candle") ?? world.scoreboard.addObjective("item_count:blue_candle");
const objBlueCarpet = world.scoreboard.getObjective("item_count:blue_carpet") ?? world.scoreboard.addObjective("item_count:blue_carpet");
const objBlueConcrete = world.scoreboard.getObjective("item_count:blue_concrete") ?? world.scoreboard.addObjective("item_count:blue_concrete");
const objBlueConcretePowder = world.scoreboard.getObjective("item_count:blue_concrete_powder") ?? world.scoreboard.addObjective("item_count:blue_concrete_powder");
const objBlueDye = world.scoreboard.getObjective("item_count:blue_dye") ?? world.scoreboard.addObjective("item_count:blue_dye");
const objBlueEgg = world.scoreboard.getObjective("item_count:blue_egg") ?? world.scoreboard.addObjective("item_count:blue_egg");
const objBlueGlazedTerracotta = world.scoreboard.getObjective("item_count:blue_glazed_terracotta") ?? world.scoreboard.addObjective("item_count:blue_glazed_terracotta");
const objBlueHarness = world.scoreboard.getObjective("item_count:blue_harness") ?? world.scoreboard.addObjective("item_count:blue_harness");
const objBlueIce = world.scoreboard.getObjective("item_count:blue_ice") ?? world.scoreboard.addObjective("item_count:blue_ice");
const objBlueOrchid = world.scoreboard.getObjective("item_count:blue_orchid") ?? world.scoreboard.addObjective("item_count:blue_orchid");
const objBlueShulkerBox = world.scoreboard.getObjective("item_count:blue_shulker_box") ?? world.scoreboard.addObjective("item_count:blue_shulker_box");
const objBlueStainedGlass = world.scoreboard.getObjective("item_count:blue_stained_glass") ?? world.scoreboard.addObjective("item_count:blue_stained_glass");
const objBlueStainedGlassPane = world.scoreboard.getObjective("item_count:blue_stained_glass_pane") ?? world.scoreboard.addObjective("item_count:blue_stained_glass_pane");
const objBlueTerracotta = world.scoreboard.getObjective("item_count:blue_terracotta") ?? world.scoreboard.addObjective("item_count:blue_terracotta");
const objBlueWool = world.scoreboard.getObjective("item_count:blue_wool") ?? world.scoreboard.addObjective("item_count:blue_wool");
const objBoggedSpawnEgg = world.scoreboard.getObjective("item_count:bogged_spawn_egg") ?? world.scoreboard.addObjective("item_count:bogged_spawn_egg");
const objBoltArmorTrimSmithingTemplate = world.scoreboard.getObjective("item_count:bolt_armor_trim_smithing_template") ?? world.scoreboard.addObjective("item_count:bolt_armor_trim_smithing_template");
const objBone = world.scoreboard.getObjective("item_count:bone") ?? world.scoreboard.addObjective("item_count:bone");
const objBoneBlock = world.scoreboard.getObjective("item_count:bone_block") ?? world.scoreboard.addObjective("item_count:bone_block");
const objBoneMeal = world.scoreboard.getObjective("item_count:bone_meal") ?? world.scoreboard.addObjective("item_count:bone_meal");
const objBook = world.scoreboard.getObjective("item_count:book") ?? world.scoreboard.addObjective("item_count:book");
const objBookshelf = world.scoreboard.getObjective("item_count:bookshelf") ?? world.scoreboard.addObjective("item_count:bookshelf");
const objBorderBlock = world.scoreboard.getObjective("item_count:border_block") ?? world.scoreboard.addObjective("item_count:border_block");
const objBordureIndentedBannerPattern = world.scoreboard.getObjective("item_count:bordure_indented_banner_pattern") ?? world.scoreboard.addObjective("item_count:bordure_indented_banner_pattern");
const objBow = world.scoreboard.getObjective("item_count:bow") ?? world.scoreboard.addObjective("item_count:bow");
const objBowl = world.scoreboard.getObjective("item_count:bowl") ?? world.scoreboard.addObjective("item_count:bowl");
const objBrainCoral = world.scoreboard.getObjective("item_count:brain_coral") ?? world.scoreboard.addObjective("item_count:brain_coral");
const objBrainCoralBlock = world.scoreboard.getObjective("item_count:brain_coral_block") ?? world.scoreboard.addObjective("item_count:brain_coral_block");
const objBrainCoralFan = world.scoreboard.getObjective("item_count:brain_coral_fan") ?? world.scoreboard.addObjective("item_count:brain_coral_fan");
const objBread = world.scoreboard.getObjective("item_count:bread") ?? world.scoreboard.addObjective("item_count:bread");
const objBreezeRod = world.scoreboard.getObjective("item_count:breeze_rod") ?? world.scoreboard.addObjective("item_count:breeze_rod");
const objBreezeSpawnEgg = world.scoreboard.getObjective("item_count:breeze_spawn_egg") ?? world.scoreboard.addObjective("item_count:breeze_spawn_egg");
const objBrewerPotterySherd = world.scoreboard.getObjective("item_count:brewer_pottery_sherd") ?? world.scoreboard.addObjective("item_count:brewer_pottery_sherd");
const objBrewingStand = world.scoreboard.getObjective("item_count:brewing_stand") ?? world.scoreboard.addObjective("item_count:brewing_stand");
const objBrick = world.scoreboard.getObjective("item_count:brick") ?? world.scoreboard.addObjective("item_count:brick");
const objBrickBlock = world.scoreboard.getObjective("item_count:brick_block") ?? world.scoreboard.addObjective("item_count:brick_block");
const objBrickSlab = world.scoreboard.getObjective("item_count:brick_slab") ?? world.scoreboard.addObjective("item_count:brick_slab");
const objBrickStairs = world.scoreboard.getObjective("item_count:brick_stairs") ?? world.scoreboard.addObjective("item_count:brick_stairs");
const objBrickWall = world.scoreboard.getObjective("item_count:brick_wall") ?? world.scoreboard.addObjective("item_count:brick_wall");
const objBrownBundle = world.scoreboard.getObjective("item_count:brown_bundle") ?? world.scoreboard.addObjective("item_count:brown_bundle");
const objBrownCandle = world.scoreboard.getObjective("item_count:brown_candle") ?? world.scoreboard.addObjective("item_count:brown_candle");
const objBrownCarpet = world.scoreboard.getObjective("item_count:brown_carpet") ?? world.scoreboard.addObjective("item_count:brown_carpet");
const objBrownConcrete = world.scoreboard.getObjective("item_count:brown_concrete") ?? world.scoreboard.addObjective("item_count:brown_concrete");
const objBrownConcretePowder = world.scoreboard.getObjective("item_count:brown_concrete_powder") ?? world.scoreboard.addObjective("item_count:brown_concrete_powder");
const objBrownDye = world.scoreboard.getObjective("item_count:brown_dye") ?? world.scoreboard.addObjective("item_count:brown_dye");
const objBrownEgg = world.scoreboard.getObjective("item_count:brown_egg") ?? world.scoreboard.addObjective("item_count:brown_egg");
const objBrownGlazedTerracotta = world.scoreboard.getObjective("item_count:brown_glazed_terracotta") ?? world.scoreboard.addObjective("item_count:brown_glazed_terracotta");
const objBrownHarness = world.scoreboard.getObjective("item_count:brown_harness") ?? world.scoreboard.addObjective("item_count:brown_harness");
const objBrownMushroom = world.scoreboard.getObjective("item_count:brown_mushroom") ?? world.scoreboard.addObjective("item_count:brown_mushroom");
const objBrownMushroomBlock = world.scoreboard.getObjective("item_count:brown_mushroom_block") ?? world.scoreboard.addObjective("item_count:brown_mushroom_block");
const objBrownShulkerBox = world.scoreboard.getObjective("item_count:brown_shulker_box") ?? world.scoreboard.addObjective("item_count:brown_shulker_box");
const objBrownStainedGlass = world.scoreboard.getObjective("item_count:brown_stained_glass") ?? world.scoreboard.addObjective("item_count:brown_stained_glass");
const objBrownStainedGlassPane = world.scoreboard.getObjective("item_count:brown_stained_glass_pane") ?? world.scoreboard.addObjective("item_count:brown_stained_glass_pane");
const objBrownTerracotta = world.scoreboard.getObjective("item_count:brown_terracotta") ?? world.scoreboard.addObjective("item_count:brown_terracotta");
const objBrownWool = world.scoreboard.getObjective("item_count:brown_wool") ?? world.scoreboard.addObjective("item_count:brown_wool");
const objBrush = world.scoreboard.getObjective("item_count:brush") ?? world.scoreboard.addObjective("item_count:brush");
const objBubbleCoral = world.scoreboard.getObjective("item_count:bubble_coral") ?? world.scoreboard.addObjective("item_count:bubble_coral");
const objBubbleCoralBlock = world.scoreboard.getObjective("item_count:bubble_coral_block") ?? world.scoreboard.addObjective("item_count:bubble_coral_block");
const objBubbleCoralFan = world.scoreboard.getObjective("item_count:bubble_coral_fan") ?? world.scoreboard.addObjective("item_count:bubble_coral_fan");
const objBucket = world.scoreboard.getObjective("item_count:bucket") ?? world.scoreboard.addObjective("item_count:bucket");
const objBuddingAmethyst = world.scoreboard.getObjective("item_count:budding_amethyst") ?? world.scoreboard.addObjective("item_count:budding_amethyst");
const objBundle = world.scoreboard.getObjective("item_count:bundle") ?? world.scoreboard.addObjective("item_count:bundle");
const objBurnPotterySherd = world.scoreboard.getObjective("item_count:burn_pottery_sherd") ?? world.scoreboard.addObjective("item_count:burn_pottery_sherd");
const objBush = world.scoreboard.getObjective("item_count:bush") ?? world.scoreboard.addObjective("item_count:bush");
const objCactus = world.scoreboard.getObjective("item_count:cactus") ?? world.scoreboard.addObjective("item_count:cactus");
const objCactusFlower = world.scoreboard.getObjective("item_count:cactus_flower") ?? world.scoreboard.addObjective("item_count:cactus_flower");
const objCake = world.scoreboard.getObjective("item_count:cake") ?? world.scoreboard.addObjective("item_count:cake");
const objCalcite = world.scoreboard.getObjective("item_count:calcite") ?? world.scoreboard.addObjective("item_count:calcite");
const objCalibratedSculkSensor = world.scoreboard.getObjective("item_count:calibrated_sculk_sensor") ?? world.scoreboard.addObjective("item_count:calibrated_sculk_sensor");
const objCamelSpawnEgg = world.scoreboard.getObjective("item_count:camel_spawn_egg") ?? world.scoreboard.addObjective("item_count:camel_spawn_egg");
const objCampfire = world.scoreboard.getObjective("item_count:campfire") ?? world.scoreboard.addObjective("item_count:campfire");
const objCandle = world.scoreboard.getObjective("item_count:candle") ?? world.scoreboard.addObjective("item_count:candle");
const objCarpet = world.scoreboard.getObjective("item_count:carpet") ?? world.scoreboard.addObjective("item_count:carpet");
const objCarrot = world.scoreboard.getObjective("item_count:carrot") ?? world.scoreboard.addObjective("item_count:carrot");
const objCarrotOnAStick = world.scoreboard.getObjective("item_count:carrot_on_a_stick") ?? world.scoreboard.addObjective("item_count:carrot_on_a_stick");
const objCartographyTable = world.scoreboard.getObjective("item_count:cartography_table") ?? world.scoreboard.addObjective("item_count:cartography_table");
const objCarvedPumpkin = world.scoreboard.getObjective("item_count:carved_pumpkin") ?? world.scoreboard.addObjective("item_count:carved_pumpkin");
const objCatSpawnEgg = world.scoreboard.getObjective("item_count:cat_spawn_egg") ?? world.scoreboard.addObjective("item_count:cat_spawn_egg");
const objCauldron = world.scoreboard.getObjective("item_count:cauldron") ?? world.scoreboard.addObjective("item_count:cauldron");
const objCaveSpiderSpawnEgg = world.scoreboard.getObjective("item_count:cave_spider_spawn_egg") ?? world.scoreboard.addObjective("item_count:cave_spider_spawn_egg");
const objChain = world.scoreboard.getObjective("item_count:chain") ?? world.scoreboard.addObjective("item_count:chain");
const objChainCommandBlock = world.scoreboard.getObjective("item_count:chain_command_block") ?? world.scoreboard.addObjective("item_count:chain_command_block");
const objChainmailBoots = world.scoreboard.getObjective("item_count:chainmail_boots") ?? world.scoreboard.addObjective("item_count:chainmail_boots");
const objChainmailChestplate = world.scoreboard.getObjective("item_count:chainmail_chestplate") ?? world.scoreboard.addObjective("item_count:chainmail_chestplate");
const objChainmailHelmet = world.scoreboard.getObjective("item_count:chainmail_helmet") ?? world.scoreboard.addObjective("item_count:chainmail_helmet");
const objChainmailLeggings = world.scoreboard.getObjective("item_count:chainmail_leggings") ?? world.scoreboard.addObjective("item_count:chainmail_leggings");
const objCharcoal = world.scoreboard.getObjective("item_count:charcoal") ?? world.scoreboard.addObjective("item_count:charcoal");
const objCherryBoat = world.scoreboard.getObjective("item_count:cherry_boat") ?? world.scoreboard.addObjective("item_count:cherry_boat");
const objCherryButton = world.scoreboard.getObjective("item_count:cherry_button") ?? world.scoreboard.addObjective("item_count:cherry_button");
const objCherryChestBoat = world.scoreboard.getObjective("item_count:cherry_chest_boat") ?? world.scoreboard.addObjective("item_count:cherry_chest_boat");
const objCherryDoor = world.scoreboard.getObjective("item_count:cherry_door") ?? world.scoreboard.addObjective("item_count:cherry_door");
const objCherryFence = world.scoreboard.getObjective("item_count:cherry_fence") ?? world.scoreboard.addObjective("item_count:cherry_fence");
const objCherryFenceGate = world.scoreboard.getObjective("item_count:cherry_fence_gate") ?? world.scoreboard.addObjective("item_count:cherry_fence_gate");
const objCherryHangingSign = world.scoreboard.getObjective("item_count:cherry_hanging_sign") ?? world.scoreboard.addObjective("item_count:cherry_hanging_sign");
const objCherryLeaves = world.scoreboard.getObjective("item_count:cherry_leaves") ?? world.scoreboard.addObjective("item_count:cherry_leaves");
const objCherryLog = world.scoreboard.getObjective("item_count:cherry_log") ?? world.scoreboard.addObjective("item_count:cherry_log");
const objCherryPlanks = world.scoreboard.getObjective("item_count:cherry_planks") ?? world.scoreboard.addObjective("item_count:cherry_planks");
const objCherryPressurePlate = world.scoreboard.getObjective("item_count:cherry_pressure_plate") ?? world.scoreboard.addObjective("item_count:cherry_pressure_plate");
const objCherrySapling = world.scoreboard.getObjective("item_count:cherry_sapling") ?? world.scoreboard.addObjective("item_count:cherry_sapling");
const objCherrySign = world.scoreboard.getObjective("item_count:cherry_sign") ?? world.scoreboard.addObjective("item_count:cherry_sign");
const objCherrySlab = world.scoreboard.getObjective("item_count:cherry_slab") ?? world.scoreboard.addObjective("item_count:cherry_slab");
const objCherryStairs = world.scoreboard.getObjective("item_count:cherry_stairs") ?? world.scoreboard.addObjective("item_count:cherry_stairs");
const objCherryTrapdoor = world.scoreboard.getObjective("item_count:cherry_trapdoor") ?? world.scoreboard.addObjective("item_count:cherry_trapdoor");
const objCherryWood = world.scoreboard.getObjective("item_count:cherry_wood") ?? world.scoreboard.addObjective("item_count:cherry_wood");
const objChest = world.scoreboard.getObjective("item_count:chest") ?? world.scoreboard.addObjective("item_count:chest");
const objChestBoat = world.scoreboard.getObjective("item_count:chest_boat") ?? world.scoreboard.addObjective("item_count:chest_boat");
const objChestMinecart = world.scoreboard.getObjective("item_count:chest_minecart") ?? world.scoreboard.addObjective("item_count:chest_minecart");
const objChicken = world.scoreboard.getObjective("item_count:chicken") ?? world.scoreboard.addObjective("item_count:chicken");
const objChickenSpawnEgg = world.scoreboard.getObjective("item_count:chicken_spawn_egg") ?? world.scoreboard.addObjective("item_count:chicken_spawn_egg");
const objChippedAnvil = world.scoreboard.getObjective("item_count:chipped_anvil") ?? world.scoreboard.addObjective("item_count:chipped_anvil");
const objChiseledBookshelf = world.scoreboard.getObjective("item_count:chiseled_bookshelf") ?? world.scoreboard.addObjective("item_count:chiseled_bookshelf");
const objChiseledCopper = world.scoreboard.getObjective("item_count:chiseled_copper") ?? world.scoreboard.addObjective("item_count:chiseled_copper");
const objChiseledDeepslate = world.scoreboard.getObjective("item_count:chiseled_deepslate") ?? world.scoreboard.addObjective("item_count:chiseled_deepslate");
const objChiseledNetherBricks = world.scoreboard.getObjective("item_count:chiseled_nether_bricks") ?? world.scoreboard.addObjective("item_count:chiseled_nether_bricks");
const objChiseledPolishedBlackstone = world.scoreboard.getObjective("item_count:chiseled_polished_blackstone") ?? world.scoreboard.addObjective("item_count:chiseled_polished_blackstone");
const objChiseledQuartzBlock = world.scoreboard.getObjective("item_count:chiseled_quartz_block") ?? world.scoreboard.addObjective("item_count:chiseled_quartz_block");
const objChiseledRedSandstone = world.scoreboard.getObjective("item_count:chiseled_red_sandstone") ?? world.scoreboard.addObjective("item_count:chiseled_red_sandstone");
const objChiseledResinBricks = world.scoreboard.getObjective("item_count:chiseled_resin_bricks") ?? world.scoreboard.addObjective("item_count:chiseled_resin_bricks");
const objChiseledSandstone = world.scoreboard.getObjective("item_count:chiseled_sandstone") ?? world.scoreboard.addObjective("item_count:chiseled_sandstone");
const objChiseledStoneBricks = world.scoreboard.getObjective("item_count:chiseled_stone_bricks") ?? world.scoreboard.addObjective("item_count:chiseled_stone_bricks");
const objChiseledTuff = world.scoreboard.getObjective("item_count:chiseled_tuff") ?? world.scoreboard.addObjective("item_count:chiseled_tuff");
const objChiseledTuffBricks = world.scoreboard.getObjective("item_count:chiseled_tuff_bricks") ?? world.scoreboard.addObjective("item_count:chiseled_tuff_bricks");
const objChorusFlower = world.scoreboard.getObjective("item_count:chorus_flower") ?? world.scoreboard.addObjective("item_count:chorus_flower");
const objChorusFruit = world.scoreboard.getObjective("item_count:chorus_fruit") ?? world.scoreboard.addObjective("item_count:chorus_fruit");
const objChorusPlant = world.scoreboard.getObjective("item_count:chorus_plant") ?? world.scoreboard.addObjective("item_count:chorus_plant");
const objClay = world.scoreboard.getObjective("item_count:clay") ?? world.scoreboard.addObjective("item_count:clay");
const objClayBall = world.scoreboard.getObjective("item_count:clay_ball") ?? world.scoreboard.addObjective("item_count:clay_ball");
const objClock = world.scoreboard.getObjective("item_count:clock") ?? world.scoreboard.addObjective("item_count:clock");
const objClosedEyeblossom = world.scoreboard.getObjective("item_count:closed_eyeblossom") ?? world.scoreboard.addObjective("item_count:closed_eyeblossom");
const objCoal = world.scoreboard.getObjective("item_count:coal") ?? world.scoreboard.addObjective("item_count:coal");
const objCoalBlock = world.scoreboard.getObjective("item_count:coal_block") ?? world.scoreboard.addObjective("item_count:coal_block");
const objCoalOre = world.scoreboard.getObjective("item_count:coal_ore") ?? world.scoreboard.addObjective("item_count:coal_ore");
const objCoarseDirt = world.scoreboard.getObjective("item_count:coarse_dirt") ?? world.scoreboard.addObjective("item_count:coarse_dirt");
const objCoastArmorTrimSmithingTemplate = world.scoreboard.getObjective("item_count:coast_armor_trim_smithing_template") ?? world.scoreboard.addObjective("item_count:coast_armor_trim_smithing_template");
const objCobbledDeepslate = world.scoreboard.getObjective("item_count:cobbled_deepslate") ?? world.scoreboard.addObjective("item_count:cobbled_deepslate");
const objCobbledDeepslateSlab = world.scoreboard.getObjective("item_count:cobbled_deepslate_slab") ?? world.scoreboard.addObjective("item_count:cobbled_deepslate_slab");
const objCobbledDeepslateStairs = world.scoreboard.getObjective("item_count:cobbled_deepslate_stairs") ?? world.scoreboard.addObjective("item_count:cobbled_deepslate_stairs");
const objCobbledDeepslateWall = world.scoreboard.getObjective("item_count:cobbled_deepslate_wall") ?? world.scoreboard.addObjective("item_count:cobbled_deepslate_wall");
const objCobblestone = world.scoreboard.getObjective("item_count:cobblestone") ?? world.scoreboard.addObjective("item_count:cobblestone");
const objCobblestoneSlab = world.scoreboard.getObjective("item_count:cobblestone_slab") ?? world.scoreboard.addObjective("item_count:cobblestone_slab");
const objCobblestoneWall = world.scoreboard.getObjective("item_count:cobblestone_wall") ?? world.scoreboard.addObjective("item_count:cobblestone_wall");
const objCocoaBeans = world.scoreboard.getObjective("item_count:cocoa_beans") ?? world.scoreboard.addObjective("item_count:cocoa_beans");
const objCod = world.scoreboard.getObjective("item_count:cod") ?? world.scoreboard.addObjective("item_count:cod");
const objCodBucket = world.scoreboard.getObjective("item_count:cod_bucket") ?? world.scoreboard.addObjective("item_count:cod_bucket");
const objCodSpawnEgg = world.scoreboard.getObjective("item_count:cod_spawn_egg") ?? world.scoreboard.addObjective("item_count:cod_spawn_egg");
const objCommandBlock = world.scoreboard.getObjective("item_count:command_block") ?? world.scoreboard.addObjective("item_count:command_block");
const objCommandBlockMinecart = world.scoreboard.getObjective("item_count:command_block_minecart") ?? world.scoreboard.addObjective("item_count:command_block_minecart");
const objComparator = world.scoreboard.getObjective("item_count:comparator") ?? world.scoreboard.addObjective("item_count:comparator");
const objCompass = world.scoreboard.getObjective("item_count:compass") ?? world.scoreboard.addObjective("item_count:compass");
const objComposter = world.scoreboard.getObjective("item_count:composter") ?? world.scoreboard.addObjective("item_count:composter");
const objConduit = world.scoreboard.getObjective("item_count:conduit") ?? world.scoreboard.addObjective("item_count:conduit");
const objCookedBeef = world.scoreboard.getObjective("item_count:cooked_beef") ?? world.scoreboard.addObjective("item_count:cooked_beef");
const objCookedChicken = world.scoreboard.getObjective("item_count:cooked_chicken") ?? world.scoreboard.addObjective("item_count:cooked_chicken");
const objCookedCod = world.scoreboard.getObjective("item_count:cooked_cod") ?? world.scoreboard.addObjective("item_count:cooked_cod");
const objCookedMutton = world.scoreboard.getObjective("item_count:cooked_mutton") ?? world.scoreboard.addObjective("item_count:cooked_mutton");
const objCookedPorkchop = world.scoreboard.getObjective("item_count:cooked_porkchop") ?? world.scoreboard.addObjective("item_count:cooked_porkchop");
const objCookedRabbit = world.scoreboard.getObjective("item_count:cooked_rabbit") ?? world.scoreboard.addObjective("item_count:cooked_rabbit");
const objCookedSalmon = world.scoreboard.getObjective("item_count:cooked_salmon") ?? world.scoreboard.addObjective("item_count:cooked_salmon");
const objCookie = world.scoreboard.getObjective("item_count:cookie") ?? world.scoreboard.addObjective("item_count:cookie");
const objCopperBlock = world.scoreboard.getObjective("item_count:copper_block") ?? world.scoreboard.addObjective("item_count:copper_block");
const objCopperBulb = world.scoreboard.getObjective("item_count:copper_bulb") ?? world.scoreboard.addObjective("item_count:copper_bulb");
const objCopperDoor = world.scoreboard.getObjective("item_count:copper_door") ?? world.scoreboard.addObjective("item_count:copper_door");
const objCopperGrate = world.scoreboard.getObjective("item_count:copper_grate") ?? world.scoreboard.addObjective("item_count:copper_grate");
const objCopperIngot = world.scoreboard.getObjective("item_count:copper_ingot") ?? world.scoreboard.addObjective("item_count:copper_ingot");
const objCopperOre = world.scoreboard.getObjective("item_count:copper_ore") ?? world.scoreboard.addObjective("item_count:copper_ore");
const objCopperTrapdoor = world.scoreboard.getObjective("item_count:copper_trapdoor") ?? world.scoreboard.addObjective("item_count:copper_trapdoor");
const objCornflower = world.scoreboard.getObjective("item_count:cornflower") ?? world.scoreboard.addObjective("item_count:cornflower");
const objCowSpawnEgg = world.scoreboard.getObjective("item_count:cow_spawn_egg") ?? world.scoreboard.addObjective("item_count:cow_spawn_egg");
const objCrackedDeepslateBricks = world.scoreboard.getObjective("item_count:cracked_deepslate_bricks") ?? world.scoreboard.addObjective("item_count:cracked_deepslate_bricks");
const objCrackedDeepslateTiles = world.scoreboard.getObjective("item_count:cracked_deepslate_tiles") ?? world.scoreboard.addObjective("item_count:cracked_deepslate_tiles");
const objCrackedNetherBricks = world.scoreboard.getObjective("item_count:cracked_nether_bricks") ?? world.scoreboard.addObjective("item_count:cracked_nether_bricks");
const objCrackedPolishedBlackstoneBricks = world.scoreboard.getObjective("item_count:cracked_polished_blackstone_bricks") ?? world.scoreboard.addObjective("item_count:cracked_polished_blackstone_bricks");
const objCrackedStoneBricks = world.scoreboard.getObjective("item_count:cracked_stone_bricks") ?? world.scoreboard.addObjective("item_count:cracked_stone_bricks");
const objCrafter = world.scoreboard.getObjective("item_count:crafter") ?? world.scoreboard.addObjective("item_count:crafter");
const objCraftingTable = world.scoreboard.getObjective("item_count:crafting_table") ?? world.scoreboard.addObjective("item_count:crafting_table");
const objCreakingHeart = world.scoreboard.getObjective("item_count:creaking_heart") ?? world.scoreboard.addObjective("item_count:creaking_heart");
const objCreakingSpawnEgg = world.scoreboard.getObjective("item_count:creaking_spawn_egg") ?? world.scoreboard.addObjective("item_count:creaking_spawn_egg");
const objCreeperBannerPattern = world.scoreboard.getObjective("item_count:creeper_banner_pattern") ?? world.scoreboard.addObjective("item_count:creeper_banner_pattern");
const objCreeperHead = world.scoreboard.getObjective("item_count:creeper_head") ?? world.scoreboard.addObjective("item_count:creeper_head");
const objCreeperSpawnEgg = world.scoreboard.getObjective("item_count:creeper_spawn_egg") ?? world.scoreboard.addObjective("item_count:creeper_spawn_egg");
const objCrimsonButton = world.scoreboard.getObjective("item_count:crimson_button") ?? world.scoreboard.addObjective("item_count:crimson_button");
const objCrimsonDoor = world.scoreboard.getObjective("item_count:crimson_door") ?? world.scoreboard.addObjective("item_count:crimson_door");
const objCrimsonFence = world.scoreboard.getObjective("item_count:crimson_fence") ?? world.scoreboard.addObjective("item_count:crimson_fence");
const objCrimsonFenceGate = world.scoreboard.getObjective("item_count:crimson_fence_gate") ?? world.scoreboard.addObjective("item_count:crimson_fence_gate");
const objCrimsonFungus = world.scoreboard.getObjective("item_count:crimson_fungus") ?? world.scoreboard.addObjective("item_count:crimson_fungus");
const objCrimsonHangingSign = world.scoreboard.getObjective("item_count:crimson_hanging_sign") ?? world.scoreboard.addObjective("item_count:crimson_hanging_sign");
const objCrimsonHyphae = world.scoreboard.getObjective("item_count:crimson_hyphae") ?? world.scoreboard.addObjective("item_count:crimson_hyphae");
const objCrimsonNylium = world.scoreboard.getObjective("item_count:crimson_nylium") ?? world.scoreboard.addObjective("item_count:crimson_nylium");
const objCrimsonPlanks = world.scoreboard.getObjective("item_count:crimson_planks") ?? world.scoreboard.addObjective("item_count:crimson_planks");
const objCrimsonPressurePlate = world.scoreboard.getObjective("item_count:crimson_pressure_plate") ?? world.scoreboard.addObjective("item_count:crimson_pressure_plate");
const objCrimsonRoots = world.scoreboard.getObjective("item_count:crimson_roots") ?? world.scoreboard.addObjective("item_count:crimson_roots");
const objCrimsonSign = world.scoreboard.getObjective("item_count:crimson_sign") ?? world.scoreboard.addObjective("item_count:crimson_sign");
const objCrimsonSlab = world.scoreboard.getObjective("item_count:crimson_slab") ?? world.scoreboard.addObjective("item_count:crimson_slab");
const objCrimsonStairs = world.scoreboard.getObjective("item_count:crimson_stairs") ?? world.scoreboard.addObjective("item_count:crimson_stairs");
const objCrimsonStem = world.scoreboard.getObjective("item_count:crimson_stem") ?? world.scoreboard.addObjective("item_count:crimson_stem");
const objCrimsonTrapdoor = world.scoreboard.getObjective("item_count:crimson_trapdoor") ?? world.scoreboard.addObjective("item_count:crimson_trapdoor");
const objCrossbow = world.scoreboard.getObjective("item_count:crossbow") ?? world.scoreboard.addObjective("item_count:crossbow");
const objCryingObsidian = world.scoreboard.getObjective("item_count:crying_obsidian") ?? world.scoreboard.addObjective("item_count:crying_obsidian");
const objCutCopper = world.scoreboard.getObjective("item_count:cut_copper") ?? world.scoreboard.addObjective("item_count:cut_copper");
const objCutCopperSlab = world.scoreboard.getObjective("item_count:cut_copper_slab") ?? world.scoreboard.addObjective("item_count:cut_copper_slab");
const objCutCopperStairs = world.scoreboard.getObjective("item_count:cut_copper_stairs") ?? world.scoreboard.addObjective("item_count:cut_copper_stairs");
const objCutRedSandstone = world.scoreboard.getObjective("item_count:cut_red_sandstone") ?? world.scoreboard.addObjective("item_count:cut_red_sandstone");
const objCutRedSandstoneSlab = world.scoreboard.getObjective("item_count:cut_red_sandstone_slab") ?? world.scoreboard.addObjective("item_count:cut_red_sandstone_slab");
const objCutSandstone = world.scoreboard.getObjective("item_count:cut_sandstone") ?? world.scoreboard.addObjective("item_count:cut_sandstone");
const objCutSandstoneSlab = world.scoreboard.getObjective("item_count:cut_sandstone_slab") ?? world.scoreboard.addObjective("item_count:cut_sandstone_slab");
const objCyanBundle = world.scoreboard.getObjective("item_count:cyan_bundle") ?? world.scoreboard.addObjective("item_count:cyan_bundle");
const objCyanCandle = world.scoreboard.getObjective("item_count:cyan_candle") ?? world.scoreboard.addObjective("item_count:cyan_candle");
const objCyanCarpet = world.scoreboard.getObjective("item_count:cyan_carpet") ?? world.scoreboard.addObjective("item_count:cyan_carpet");
const objCyanConcrete = world.scoreboard.getObjective("item_count:cyan_concrete") ?? world.scoreboard.addObjective("item_count:cyan_concrete");
const objCyanConcretePowder = world.scoreboard.getObjective("item_count:cyan_concrete_powder") ?? world.scoreboard.addObjective("item_count:cyan_concrete_powder");
const objCyanDye = world.scoreboard.getObjective("item_count:cyan_dye") ?? world.scoreboard.addObjective("item_count:cyan_dye");
const objCyanGlazedTerracotta = world.scoreboard.getObjective("item_count:cyan_glazed_terracotta") ?? world.scoreboard.addObjective("item_count:cyan_glazed_terracotta");
const objCyanHarness = world.scoreboard.getObjective("item_count:cyan_harness") ?? world.scoreboard.addObjective("item_count:cyan_harness");
const objCyanShulkerBox = world.scoreboard.getObjective("item_count:cyan_shulker_box") ?? world.scoreboard.addObjective("item_count:cyan_shulker_box");
const objCyanStainedGlass = world.scoreboard.getObjective("item_count:cyan_stained_glass") ?? world.scoreboard.addObjective("item_count:cyan_stained_glass");
const objCyanStainedGlassPane = world.scoreboard.getObjective("item_count:cyan_stained_glass_pane") ?? world.scoreboard.addObjective("item_count:cyan_stained_glass_pane");
const objCyanTerracotta = world.scoreboard.getObjective("item_count:cyan_terracotta") ?? world.scoreboard.addObjective("item_count:cyan_terracotta");
const objCyanWool = world.scoreboard.getObjective("item_count:cyan_wool") ?? world.scoreboard.addObjective("item_count:cyan_wool");
const objDamagedAnvil = world.scoreboard.getObjective("item_count:damaged_anvil") ?? world.scoreboard.addObjective("item_count:damaged_anvil");
const objDandelion = world.scoreboard.getObjective("item_count:dandelion") ?? world.scoreboard.addObjective("item_count:dandelion");
const objDangerPotterySherd = world.scoreboard.getObjective("item_count:danger_pottery_sherd") ?? world.scoreboard.addObjective("item_count:danger_pottery_sherd");
const objDarkOakBoat = world.scoreboard.getObjective("item_count:dark_oak_boat") ?? world.scoreboard.addObjective("item_count:dark_oak_boat");
const objDarkOakButton = world.scoreboard.getObjective("item_count:dark_oak_button") ?? world.scoreboard.addObjective("item_count:dark_oak_button");
const objDarkOakChestBoat = world.scoreboard.getObjective("item_count:dark_oak_chest_boat") ?? world.scoreboard.addObjective("item_count:dark_oak_chest_boat");
const objDarkOakDoor = world.scoreboard.getObjective("item_count:dark_oak_door") ?? world.scoreboard.addObjective("item_count:dark_oak_door");
const objDarkOakFence = world.scoreboard.getObjective("item_count:dark_oak_fence") ?? world.scoreboard.addObjective("item_count:dark_oak_fence");
const objDarkOakFenceGate = world.scoreboard.getObjective("item_count:dark_oak_fence_gate") ?? world.scoreboard.addObjective("item_count:dark_oak_fence_gate");
const objDarkOakHangingSign = world.scoreboard.getObjective("item_count:dark_oak_hanging_sign") ?? world.scoreboard.addObjective("item_count:dark_oak_hanging_sign");
const objDarkOakLeaves = world.scoreboard.getObjective("item_count:dark_oak_leaves") ?? world.scoreboard.addObjective("item_count:dark_oak_leaves");
const objDarkOakLog = world.scoreboard.getObjective("item_count:dark_oak_log") ?? world.scoreboard.addObjective("item_count:dark_oak_log");
const objDarkOakPlanks = world.scoreboard.getObjective("item_count:dark_oak_planks") ?? world.scoreboard.addObjective("item_count:dark_oak_planks");
const objDarkOakPressurePlate = world.scoreboard.getObjective("item_count:dark_oak_pressure_plate") ?? world.scoreboard.addObjective("item_count:dark_oak_pressure_plate");
const objDarkOakSapling = world.scoreboard.getObjective("item_count:dark_oak_sapling") ?? world.scoreboard.addObjective("item_count:dark_oak_sapling");
const objDarkOakSign = world.scoreboard.getObjective("item_count:dark_oak_sign") ?? world.scoreboard.addObjective("item_count:dark_oak_sign");
const objDarkOakSlab = world.scoreboard.getObjective("item_count:dark_oak_slab") ?? world.scoreboard.addObjective("item_count:dark_oak_slab");
const objDarkOakStairs = world.scoreboard.getObjective("item_count:dark_oak_stairs") ?? world.scoreboard.addObjective("item_count:dark_oak_stairs");
const objDarkOakTrapdoor = world.scoreboard.getObjective("item_count:dark_oak_trapdoor") ?? world.scoreboard.addObjective("item_count:dark_oak_trapdoor");
const objDarkOakWood = world.scoreboard.getObjective("item_count:dark_oak_wood") ?? world.scoreboard.addObjective("item_count:dark_oak_wood");
const objDarkPrismarine = world.scoreboard.getObjective("item_count:dark_prismarine") ?? world.scoreboard.addObjective("item_count:dark_prismarine");
const objDarkPrismarineSlab = world.scoreboard.getObjective("item_count:dark_prismarine_slab") ?? world.scoreboard.addObjective("item_count:dark_prismarine_slab");
const objDarkPrismarineStairs = world.scoreboard.getObjective("item_count:dark_prismarine_stairs") ?? world.scoreboard.addObjective("item_count:dark_prismarine_stairs");
const objDaylightDetector = world.scoreboard.getObjective("item_count:daylight_detector") ?? world.scoreboard.addObjective("item_count:daylight_detector");
const objDeadBrainCoral = world.scoreboard.getObjective("item_count:dead_brain_coral") ?? world.scoreboard.addObjective("item_count:dead_brain_coral");
const objDeadBrainCoralBlock = world.scoreboard.getObjective("item_count:dead_brain_coral_block") ?? world.scoreboard.addObjective("item_count:dead_brain_coral_block");
const objDeadBrainCoralFan = world.scoreboard.getObjective("item_count:dead_brain_coral_fan") ?? world.scoreboard.addObjective("item_count:dead_brain_coral_fan");
const objDeadBubbleCoral = world.scoreboard.getObjective("item_count:dead_bubble_coral") ?? world.scoreboard.addObjective("item_count:dead_bubble_coral");
const objDeadBubbleCoralBlock = world.scoreboard.getObjective("item_count:dead_bubble_coral_block") ?? world.scoreboard.addObjective("item_count:dead_bubble_coral_block");
const objDeadBubbleCoralFan = world.scoreboard.getObjective("item_count:dead_bubble_coral_fan") ?? world.scoreboard.addObjective("item_count:dead_bubble_coral_fan");
const objDeadFireCoral = world.scoreboard.getObjective("item_count:dead_fire_coral") ?? world.scoreboard.addObjective("item_count:dead_fire_coral");
const objDeadFireCoralBlock = world.scoreboard.getObjective("item_count:dead_fire_coral_block") ?? world.scoreboard.addObjective("item_count:dead_fire_coral_block");
const objDeadFireCoralFan = world.scoreboard.getObjective("item_count:dead_fire_coral_fan") ?? world.scoreboard.addObjective("item_count:dead_fire_coral_fan");
const objDeadHornCoral = world.scoreboard.getObjective("item_count:dead_horn_coral") ?? world.scoreboard.addObjective("item_count:dead_horn_coral");
const objDeadHornCoralBlock = world.scoreboard.getObjective("item_count:dead_horn_coral_block") ?? world.scoreboard.addObjective("item_count:dead_horn_coral_block");
const objDeadHornCoralFan = world.scoreboard.getObjective("item_count:dead_horn_coral_fan") ?? world.scoreboard.addObjective("item_count:dead_horn_coral_fan");
const objDeadTubeCoral = world.scoreboard.getObjective("item_count:dead_tube_coral") ?? world.scoreboard.addObjective("item_count:dead_tube_coral");
const objDeadTubeCoralBlock = world.scoreboard.getObjective("item_count:dead_tube_coral_block") ?? world.scoreboard.addObjective("item_count:dead_tube_coral_block");
const objDeadbush = world.scoreboard.getObjective("item_count:deadbush") ?? world.scoreboard.addObjective("item_count:deadbush");
const objDecoratedPot = world.scoreboard.getObjective("item_count:decorated_pot") ?? world.scoreboard.addObjective("item_count:decorated_pot");
const objDeepslate = world.scoreboard.getObjective("item_count:deepslate") ?? world.scoreboard.addObjective("item_count:deepslate");
const objDeepslateBrickSlab = world.scoreboard.getObjective("item_count:deepslate_brick_slab") ?? world.scoreboard.addObjective("item_count:deepslate_brick_slab");
const objDeepslateBrickStairs = world.scoreboard.getObjective("item_count:deepslate_brick_stairs") ?? world.scoreboard.addObjective("item_count:deepslate_brick_stairs");
const objDeepslateBrickWall = world.scoreboard.getObjective("item_count:deepslate_brick_wall") ?? world.scoreboard.addObjective("item_count:deepslate_brick_wall");
const objDeepslateBricks = world.scoreboard.getObjective("item_count:deepslate_bricks") ?? world.scoreboard.addObjective("item_count:deepslate_bricks");
const objDeepslateCoalOre = world.scoreboard.getObjective("item_count:deepslate_coal_ore") ?? world.scoreboard.addObjective("item_count:deepslate_coal_ore");
const objDeepslateCopperOre = world.scoreboard.getObjective("item_count:deepslate_copper_ore") ?? world.scoreboard.addObjective("item_count:deepslate_copper_ore");
const objDeepslateDiamondOre = world.scoreboard.getObjective("item_count:deepslate_diamond_ore") ?? world.scoreboard.addObjective("item_count:deepslate_diamond_ore");
const objDeepslateEmeraldOre = world.scoreboard.getObjective("item_count:deepslate_emerald_ore") ?? world.scoreboard.addObjective("item_count:deepslate_emerald_ore");
const objDeepslateGoldOre = world.scoreboard.getObjective("item_count:deepslate_gold_ore") ?? world.scoreboard.addObjective("item_count:deepslate_gold_ore");
const objDeepslateIronOre = world.scoreboard.getObjective("item_count:deepslate_iron_ore") ?? world.scoreboard.addObjective("item_count:deepslate_iron_ore");
const objDeepslateLapisOre = world.scoreboard.getObjective("item_count:deepslate_lapis_ore") ?? world.scoreboard.addObjective("item_count:deepslate_lapis_ore");
const objDeepslateRedstoneOre = world.scoreboard.getObjective("item_count:deepslate_redstone_ore") ?? world.scoreboard.addObjective("item_count:deepslate_redstone_ore");
const objDeepslateTileSlab = world.scoreboard.getObjective("item_count:deepslate_tile_slab") ?? world.scoreboard.addObjective("item_count:deepslate_tile_slab");
const objDeepslateTileStairs = world.scoreboard.getObjective("item_count:deepslate_tile_stairs") ?? world.scoreboard.addObjective("item_count:deepslate_tile_stairs");
const objDeepslateTileWall = world.scoreboard.getObjective("item_count:deepslate_tile_wall") ?? world.scoreboard.addObjective("item_count:deepslate_tile_wall");
const objDeepslateTiles = world.scoreboard.getObjective("item_count:deepslate_tiles") ?? world.scoreboard.addObjective("item_count:deepslate_tiles");
const objDeny = world.scoreboard.getObjective("item_count:deny") ?? world.scoreboard.addObjective("item_count:deny");
const objDetectorRail = world.scoreboard.getObjective("item_count:detector_rail") ?? world.scoreboard.addObjective("item_count:detector_rail");
const objDiamond = world.scoreboard.getObjective("item_count:diamond") ?? world.scoreboard.addObjective("item_count:diamond");
const objDiamondAxe = world.scoreboard.getObjective("item_count:diamond_axe") ?? world.scoreboard.addObjective("item_count:diamond_axe");
const objDiamondBlock = world.scoreboard.getObjective("item_count:diamond_block") ?? world.scoreboard.addObjective("item_count:diamond_block");
const objDiamondBoots = world.scoreboard.getObjective("item_count:diamond_boots") ?? world.scoreboard.addObjective("item_count:diamond_boots");
const objDiamondChestplate = world.scoreboard.getObjective("item_count:diamond_chestplate") ?? world.scoreboard.addObjective("item_count:diamond_chestplate");
const objDiamondHelmet = world.scoreboard.getObjective("item_count:diamond_helmet") ?? world.scoreboard.addObjective("item_count:diamond_helmet");
const objDiamondHoe = world.scoreboard.getObjective("item_count:diamond_hoe") ?? world.scoreboard.addObjective("item_count:diamond_hoe");
const objDiamondHorseArmor = world.scoreboard.getObjective("item_count:diamond_horse_armor") ?? world.scoreboard.addObjective("item_count:diamond_horse_armor");
const objDiamondLeggings = world.scoreboard.getObjective("item_count:diamond_leggings") ?? world.scoreboard.addObjective("item_count:diamond_leggings");
const objDiamondOre = world.scoreboard.getObjective("item_count:diamond_ore") ?? world.scoreboard.addObjective("item_count:diamond_ore");
const objDiamondPickaxe = world.scoreboard.getObjective("item_count:diamond_pickaxe") ?? world.scoreboard.addObjective("item_count:diamond_pickaxe");
const objDiamondShovel = world.scoreboard.getObjective("item_count:diamond_shovel") ?? world.scoreboard.addObjective("item_count:diamond_shovel");
const objDiamondSword = world.scoreboard.getObjective("item_count:diamond_sword") ?? world.scoreboard.addObjective("item_count:diamond_sword");
const objDiorite = world.scoreboard.getObjective("item_count:diorite") ?? world.scoreboard.addObjective("item_count:diorite");
const objDioriteSlab = world.scoreboard.getObjective("item_count:diorite_slab") ?? world.scoreboard.addObjective("item_count:diorite_slab");
const objDioriteStairs = world.scoreboard.getObjective("item_count:diorite_stairs") ?? world.scoreboard.addObjective("item_count:diorite_stairs");
const objDioriteWall = world.scoreboard.getObjective("item_count:diorite_wall") ?? world.scoreboard.addObjective("item_count:diorite_wall");
const objDirt = world.scoreboard.getObjective("item_count:dirt") ?? world.scoreboard.addObjective("item_count:dirt");
const objDirtWithRoots = world.scoreboard.getObjective("item_count:dirt_with_roots") ?? world.scoreboard.addObjective("item_count:dirt_with_roots");
const objDiscFragment5 = world.scoreboard.getObjective("item_count:disc_fragment_5") ?? world.scoreboard.addObjective("item_count:disc_fragment_5");
const objDispenser = world.scoreboard.getObjective("item_count:dispenser") ?? world.scoreboard.addObjective("item_count:dispenser");
const objDolphinSpawnEgg = world.scoreboard.getObjective("item_count:dolphin_spawn_egg") ?? world.scoreboard.addObjective("item_count:dolphin_spawn_egg");
const objDonkeySpawnEgg = world.scoreboard.getObjective("item_count:donkey_spawn_egg") ?? world.scoreboard.addObjective("item_count:donkey_spawn_egg");
const objDragonBreath = world.scoreboard.getObjective("item_count:dragon_breath") ?? world.scoreboard.addObjective("item_count:dragon_breath");
const objDragonEgg = world.scoreboard.getObjective("item_count:dragon_egg") ?? world.scoreboard.addObjective("item_count:dragon_egg");
const objDragonHead = world.scoreboard.getObjective("item_count:dragon_head") ?? world.scoreboard.addObjective("item_count:dragon_head");
const objDriedGhast = world.scoreboard.getObjective("item_count:dried_ghast") ?? world.scoreboard.addObjective("item_count:dried_ghast");
const objDriedKelp = world.scoreboard.getObjective("item_count:dried_kelp") ?? world.scoreboard.addObjective("item_count:dried_kelp");
const objDriedKelpBlock = world.scoreboard.getObjective("item_count:dried_kelp_block") ?? world.scoreboard.addObjective("item_count:dried_kelp_block");
const objDripstoneBlock = world.scoreboard.getObjective("item_count:dripstone_block") ?? world.scoreboard.addObjective("item_count:dripstone_block");
const objDropper = world.scoreboard.getObjective("item_count:dropper") ?? world.scoreboard.addObjective("item_count:dropper");
const objDrownedSpawnEgg = world.scoreboard.getObjective("item_count:drowned_spawn_egg") ?? world.scoreboard.addObjective("item_count:drowned_spawn_egg");
const objDuneArmorTrimSmithingTemplate = world.scoreboard.getObjective("item_count:dune_armor_trim_smithing_template") ?? world.scoreboard.addObjective("item_count:dune_armor_trim_smithing_template");
const objEchoShard = world.scoreboard.getObjective("item_count:echo_shard") ?? world.scoreboard.addObjective("item_count:echo_shard");
const objEgg = world.scoreboard.getObjective("item_count:egg") ?? world.scoreboard.addObjective("item_count:egg");
const objElderGuardianSpawnEgg = world.scoreboard.getObjective("item_count:elder_guardian_spawn_egg") ?? world.scoreboard.addObjective("item_count:elder_guardian_spawn_egg");
const objElytra = world.scoreboard.getObjective("item_count:elytra") ?? world.scoreboard.addObjective("item_count:elytra");
const objEmerald = world.scoreboard.getObjective("item_count:emerald") ?? world.scoreboard.addObjective("item_count:emerald");
const objEmeraldBlock = world.scoreboard.getObjective("item_count:emerald_block") ?? world.scoreboard.addObjective("item_count:emerald_block");
const objEmeraldOre = world.scoreboard.getObjective("item_count:emerald_ore") ?? world.scoreboard.addObjective("item_count:emerald_ore");
const objEmptyMap = world.scoreboard.getObjective("item_count:empty_map") ?? world.scoreboard.addObjective("item_count:empty_map");
const objEnchantedBook = world.scoreboard.getObjective("item_count:enchanted_book") ?? world.scoreboard.addObjective("item_count:enchanted_book");
const objEnchantedGoldenApple = world.scoreboard.getObjective("item_count:enchanted_golden_apple") ?? world.scoreboard.addObjective("item_count:enchanted_golden_apple");
const objEnchantingTable = world.scoreboard.getObjective("item_count:enchanting_table") ?? world.scoreboard.addObjective("item_count:enchanting_table");
const objEndBrickStairs = world.scoreboard.getObjective("item_count:end_brick_stairs") ?? world.scoreboard.addObjective("item_count:end_brick_stairs");
const objEndBricks = world.scoreboard.getObjective("item_count:end_bricks") ?? world.scoreboard.addObjective("item_count:end_bricks");
const objEndCrystal = world.scoreboard.getObjective("item_count:end_crystal") ?? world.scoreboard.addObjective("item_count:end_crystal");
const objEndPortalFrame = world.scoreboard.getObjective("item_count:end_portal_frame") ?? world.scoreboard.addObjective("item_count:end_portal_frame");
const objEndRod = world.scoreboard.getObjective("item_count:end_rod") ?? world.scoreboard.addObjective("item_count:end_rod");
const objEndStone = world.scoreboard.getObjective("item_count:end_stone") ?? world.scoreboard.addObjective("item_count:end_stone");
const objEndStoneBrickSlab = world.scoreboard.getObjective("item_count:end_stone_brick_slab") ?? world.scoreboard.addObjective("item_count:end_stone_brick_slab");
const objEndStoneBrickWall = world.scoreboard.getObjective("item_count:end_stone_brick_wall") ?? world.scoreboard.addObjective("item_count:end_stone_brick_wall");
const objEnderChest = world.scoreboard.getObjective("item_count:ender_chest") ?? world.scoreboard.addObjective("item_count:ender_chest");
const objEnderDragonSpawnEgg = world.scoreboard.getObjective("item_count:ender_dragon_spawn_egg") ?? world.scoreboard.addObjective("item_count:ender_dragon_spawn_egg");
const objEnderEye = world.scoreboard.getObjective("item_count:ender_eye") ?? world.scoreboard.addObjective("item_count:ender_eye");
const objEnderPearl = world.scoreboard.getObjective("item_count:ender_pearl") ?? world.scoreboard.addObjective("item_count:ender_pearl");
const objEndermanSpawnEgg = world.scoreboard.getObjective("item_count:enderman_spawn_egg") ?? world.scoreboard.addObjective("item_count:enderman_spawn_egg");
const objEndermiteSpawnEgg = world.scoreboard.getObjective("item_count:endermite_spawn_egg") ?? world.scoreboard.addObjective("item_count:endermite_spawn_egg");
const objEvokerSpawnEgg = world.scoreboard.getObjective("item_count:evoker_spawn_egg") ?? world.scoreboard.addObjective("item_count:evoker_spawn_egg");
const objExperienceBottle = world.scoreboard.getObjective("item_count:experience_bottle") ?? world.scoreboard.addObjective("item_count:experience_bottle");
const objExplorerPotterySherd = world.scoreboard.getObjective("item_count:explorer_pottery_sherd") ?? world.scoreboard.addObjective("item_count:explorer_pottery_sherd");
const objExposedChiseledCopper = world.scoreboard.getObjective("item_count:exposed_chiseled_copper") ?? world.scoreboard.addObjective("item_count:exposed_chiseled_copper");
const objExposedCopper = world.scoreboard.getObjective("item_count:exposed_copper") ?? world.scoreboard.addObjective("item_count:exposed_copper");
const objExposedCopperBulb = world.scoreboard.getObjective("item_count:exposed_copper_bulb") ?? world.scoreboard.addObjective("item_count:exposed_copper_bulb");
const objExposedCopperDoor = world.scoreboard.getObjective("item_count:exposed_copper_door") ?? world.scoreboard.addObjective("item_count:exposed_copper_door");
const objExposedCopperGrate = world.scoreboard.getObjective("item_count:exposed_copper_grate") ?? world.scoreboard.addObjective("item_count:exposed_copper_grate");
const objExposedCopperTrapdoor = world.scoreboard.getObjective("item_count:exposed_copper_trapdoor") ?? world.scoreboard.addObjective("item_count:exposed_copper_trapdoor");
const objExposedCutCopper = world.scoreboard.getObjective("item_count:exposed_cut_copper") ?? world.scoreboard.addObjective("item_count:exposed_cut_copper");
const objExposedCutCopperSlab = world.scoreboard.getObjective("item_count:exposed_cut_copper_slab") ?? world.scoreboard.addObjective("item_count:exposed_cut_copper_slab");
const objExposedCutCopperStairs = world.scoreboard.getObjective("item_count:exposed_cut_copper_stairs") ?? world.scoreboard.addObjective("item_count:exposed_cut_copper_stairs");
const objEyeArmorTrimSmithingTemplate = world.scoreboard.getObjective("item_count:eye_armor_trim_smithing_template") ?? world.scoreboard.addObjective("item_count:eye_armor_trim_smithing_template");
const objFarmland = world.scoreboard.getObjective("item_count:farmland") ?? world.scoreboard.addObjective("item_count:farmland");
const objFeather = world.scoreboard.getObjective("item_count:feather") ?? world.scoreboard.addObjective("item_count:feather");
const objFenceGate = world.scoreboard.getObjective("item_count:fence_gate") ?? world.scoreboard.addObjective("item_count:fence_gate");
const objFermentedSpiderEye = world.scoreboard.getObjective("item_count:fermented_spider_eye") ?? world.scoreboard.addObjective("item_count:fermented_spider_eye");
const objFern = world.scoreboard.getObjective("item_count:fern") ?? world.scoreboard.addObjective("item_count:fern");
const objFieldMasonedBannerPattern = world.scoreboard.getObjective("item_count:field_masoned_banner_pattern") ?? world.scoreboard.addObjective("item_count:field_masoned_banner_pattern");
const objFilledMap = world.scoreboard.getObjective("item_count:filled_map") ?? world.scoreboard.addObjective("item_count:filled_map");
const objFireCharge = world.scoreboard.getObjective("item_count:fire_charge") ?? world.scoreboard.addObjective("item_count:fire_charge");
const objFireCoral = world.scoreboard.getObjective("item_count:fire_coral") ?? world.scoreboard.addObjective("item_count:fire_coral");
const objFireCoralBlock = world.scoreboard.getObjective("item_count:fire_coral_block") ?? world.scoreboard.addObjective("item_count:fire_coral_block");
const objFireCoralFan = world.scoreboard.getObjective("item_count:fire_coral_fan") ?? world.scoreboard.addObjective("item_count:fire_coral_fan");
const objFireflyBush = world.scoreboard.getObjective("item_count:firefly_bush") ?? world.scoreboard.addObjective("item_count:firefly_bush");
const objFireworkRocket = world.scoreboard.getObjective("item_count:firework_rocket") ?? world.scoreboard.addObjective("item_count:firework_rocket");
const objFireworkStar = world.scoreboard.getObjective("item_count:firework_star") ?? world.scoreboard.addObjective("item_count:firework_star");
const objFishingRod = world.scoreboard.getObjective("item_count:fishing_rod") ?? world.scoreboard.addObjective("item_count:fishing_rod");
const objFletchingTable = world.scoreboard.getObjective("item_count:fletching_table") ?? world.scoreboard.addObjective("item_count:fletching_table");
const objFlint = world.scoreboard.getObjective("item_count:flint") ?? world.scoreboard.addObjective("item_count:flint");
const objFlintAndSteel = world.scoreboard.getObjective("item_count:flint_and_steel") ?? world.scoreboard.addObjective("item_count:flint_and_steel");
const objFlowArmorTrimSmithingTemplate = world.scoreboard.getObjective("item_count:flow_armor_trim_smithing_template") ?? world.scoreboard.addObjective("item_count:flow_armor_trim_smithing_template");
const objFlowBannerPattern = world.scoreboard.getObjective("item_count:flow_banner_pattern") ?? world.scoreboard.addObjective("item_count:flow_banner_pattern");
const objFlowPotterySherd = world.scoreboard.getObjective("item_count:flow_pottery_sherd") ?? world.scoreboard.addObjective("item_count:flow_pottery_sherd");
const objFlowerBannerPattern = world.scoreboard.getObjective("item_count:flower_banner_pattern") ?? world.scoreboard.addObjective("item_count:flower_banner_pattern");
const objFlowerPot = world.scoreboard.getObjective("item_count:flower_pot") ?? world.scoreboard.addObjective("item_count:flower_pot");
const objFloweringAzalea = world.scoreboard.getObjective("item_count:flowering_azalea") ?? world.scoreboard.addObjective("item_count:flowering_azalea");
const objFoxSpawnEgg = world.scoreboard.getObjective("item_count:fox_spawn_egg") ?? world.scoreboard.addObjective("item_count:fox_spawn_egg");
const objFrame = world.scoreboard.getObjective("item_count:frame") ?? world.scoreboard.addObjective("item_count:frame");
const objFriendPotterySherd = world.scoreboard.getObjective("item_count:friend_pottery_sherd") ?? world.scoreboard.addObjective("item_count:friend_pottery_sherd");
const objFrogSpawn = world.scoreboard.getObjective("item_count:frog_spawn") ?? world.scoreboard.addObjective("item_count:frog_spawn");
const objFrogSpawnEgg = world.scoreboard.getObjective("item_count:frog_spawn_egg") ?? world.scoreboard.addObjective("item_count:frog_spawn_egg");
const objFrostedIce = world.scoreboard.getObjective("item_count:frosted_ice") ?? world.scoreboard.addObjective("item_count:frosted_ice");
const objFurnace = world.scoreboard.getObjective("item_count:furnace") ?? world.scoreboard.addObjective("item_count:furnace");
const objGhastSpawnEgg = world.scoreboard.getObjective("item_count:ghast_spawn_egg") ?? world.scoreboard.addObjective("item_count:ghast_spawn_egg");
const objGhastTear = world.scoreboard.getObjective("item_count:ghast_tear") ?? world.scoreboard.addObjective("item_count:ghast_tear");
const objGildedBlackstone = world.scoreboard.getObjective("item_count:gilded_blackstone") ?? world.scoreboard.addObjective("item_count:gilded_blackstone");
const objGlass = world.scoreboard.getObjective("item_count:glass") ?? world.scoreboard.addObjective("item_count:glass");
const objGlassBottle = world.scoreboard.getObjective("item_count:glass_bottle") ?? world.scoreboard.addObjective("item_count:glass_bottle");
const objGlassPane = world.scoreboard.getObjective("item_count:glass_pane") ?? world.scoreboard.addObjective("item_count:glass_pane");
const objGlisteringMelonSlice = world.scoreboard.getObjective("item_count:glistering_melon_slice") ?? world.scoreboard.addObjective("item_count:glistering_melon_slice");
const objGlobeBannerPattern = world.scoreboard.getObjective("item_count:globe_banner_pattern") ?? world.scoreboard.addObjective("item_count:globe_banner_pattern");
const objGlowBerries = world.scoreboard.getObjective("item_count:glow_berries") ?? world.scoreboard.addObjective("item_count:glow_berries");
const objGlowFrame = world.scoreboard.getObjective("item_count:glow_frame") ?? world.scoreboard.addObjective("item_count:glow_frame");
const objGlowInkSac = world.scoreboard.getObjective("item_count:glow_ink_sac") ?? world.scoreboard.addObjective("item_count:glow_ink_sac");
const objGlowLichen = world.scoreboard.getObjective("item_count:glow_lichen") ?? world.scoreboard.addObjective("item_count:glow_lichen");
const objGlowSquidSpawnEgg = world.scoreboard.getObjective("item_count:glow_squid_spawn_egg") ?? world.scoreboard.addObjective("item_count:glow_squid_spawn_egg");
const objGlowstone = world.scoreboard.getObjective("item_count:glowstone") ?? world.scoreboard.addObjective("item_count:glowstone");
const objGlowstoneDust = world.scoreboard.getObjective("item_count:glowstone_dust") ?? world.scoreboard.addObjective("item_count:glowstone_dust");
const objGoatHorn = world.scoreboard.getObjective("item_count:goat_horn") ?? world.scoreboard.addObjective("item_count:goat_horn");
const objGoatSpawnEgg = world.scoreboard.getObjective("item_count:goat_spawn_egg") ?? world.scoreboard.addObjective("item_count:goat_spawn_egg");
const objGoldBlock = world.scoreboard.getObjective("item_count:gold_block") ?? world.scoreboard.addObjective("item_count:gold_block");
const objGoldIngot = world.scoreboard.getObjective("item_count:gold_ingot") ?? world.scoreboard.addObjective("item_count:gold_ingot");
const objGoldNugget = world.scoreboard.getObjective("item_count:gold_nugget") ?? world.scoreboard.addObjective("item_count:gold_nugget");
const objGoldOre = world.scoreboard.getObjective("item_count:gold_ore") ?? world.scoreboard.addObjective("item_count:gold_ore");
const objGoldenApple = world.scoreboard.getObjective("item_count:golden_apple") ?? world.scoreboard.addObjective("item_count:golden_apple");
const objGoldenAxe = world.scoreboard.getObjective("item_count:golden_axe") ?? world.scoreboard.addObjective("item_count:golden_axe");
const objGoldenBoots = world.scoreboard.getObjective("item_count:golden_boots") ?? world.scoreboard.addObjective("item_count:golden_boots");
const objGoldenCarrot = world.scoreboard.getObjective("item_count:golden_carrot") ?? world.scoreboard.addObjective("item_count:golden_carrot");
const objGoldenChestplate = world.scoreboard.getObjective("item_count:golden_chestplate") ?? world.scoreboard.addObjective("item_count:golden_chestplate");
const objGoldenHelmet = world.scoreboard.getObjective("item_count:golden_helmet") ?? world.scoreboard.addObjective("item_count:golden_helmet");
const objGoldenHoe = world.scoreboard.getObjective("item_count:golden_hoe") ?? world.scoreboard.addObjective("item_count:golden_hoe");
const objGoldenHorseArmor = world.scoreboard.getObjective("item_count:golden_horse_armor") ?? world.scoreboard.addObjective("item_count:golden_horse_armor");
const objGoldenLeggings = world.scoreboard.getObjective("item_count:golden_leggings") ?? world.scoreboard.addObjective("item_count:golden_leggings");
const objGoldenPickaxe = world.scoreboard.getObjective("item_count:golden_pickaxe") ?? world.scoreboard.addObjective("item_count:golden_pickaxe");
const objGoldenRail = world.scoreboard.getObjective("item_count:golden_rail") ?? world.scoreboard.addObjective("item_count:golden_rail");
const objGoldenShovel = world.scoreboard.getObjective("item_count:golden_shovel") ?? world.scoreboard.addObjective("item_count:golden_shovel");
const objGoldenSword = world.scoreboard.getObjective("item_count:golden_sword") ?? world.scoreboard.addObjective("item_count:golden_sword");
const objGranite = world.scoreboard.getObjective("item_count:granite") ?? world.scoreboard.addObjective("item_count:granite");
const objGraniteSlab = world.scoreboard.getObjective("item_count:granite_slab") ?? world.scoreboard.addObjective("item_count:granite_slab");
const objGraniteStairs = world.scoreboard.getObjective("item_count:granite_stairs") ?? world.scoreboard.addObjective("item_count:granite_stairs");
const objGraniteWall = world.scoreboard.getObjective("item_count:granite_wall") ?? world.scoreboard.addObjective("item_count:granite_wall");
const objGrassBlock = world.scoreboard.getObjective("item_count:grass_block") ?? world.scoreboard.addObjective("item_count:grass_block");
const objGrassPath = world.scoreboard.getObjective("item_count:grass_path") ?? world.scoreboard.addObjective("item_count:grass_path");
const objGravel = world.scoreboard.getObjective("item_count:gravel") ?? world.scoreboard.addObjective("item_count:gravel");
const objGrayBundle = world.scoreboard.getObjective("item_count:gray_bundle") ?? world.scoreboard.addObjective("item_count:gray_bundle");
const objGrayCandle = world.scoreboard.getObjective("item_count:gray_candle") ?? world.scoreboard.addObjective("item_count:gray_candle");
const objGrayCarpet = world.scoreboard.getObjective("item_count:gray_carpet") ?? world.scoreboard.addObjective("item_count:gray_carpet");
const objGrayConcrete = world.scoreboard.getObjective("item_count:gray_concrete") ?? world.scoreboard.addObjective("item_count:gray_concrete");
const objGrayConcretePowder = world.scoreboard.getObjective("item_count:gray_concrete_powder") ?? world.scoreboard.addObjective("item_count:gray_concrete_powder");
const objGrayDye = world.scoreboard.getObjective("item_count:gray_dye") ?? world.scoreboard.addObjective("item_count:gray_dye");
const objGrayGlazedTerracotta = world.scoreboard.getObjective("item_count:gray_glazed_terracotta") ?? world.scoreboard.addObjective("item_count:gray_glazed_terracotta");
const objGrayHarness = world.scoreboard.getObjective("item_count:gray_harness") ?? world.scoreboard.addObjective("item_count:gray_harness");
const objGrayShulkerBox = world.scoreboard.getObjective("item_count:gray_shulker_box") ?? world.scoreboard.addObjective("item_count:gray_shulker_box");
const objGrayStainedGlass = world.scoreboard.getObjective("item_count:gray_stained_glass") ?? world.scoreboard.addObjective("item_count:gray_stained_glass");
const objGrayStainedGlassPane = world.scoreboard.getObjective("item_count:gray_stained_glass_pane") ?? world.scoreboard.addObjective("item_count:gray_stained_glass_pane");
const objGrayTerracotta = world.scoreboard.getObjective("item_count:gray_terracotta") ?? world.scoreboard.addObjective("item_count:gray_terracotta");
const objGrayWool = world.scoreboard.getObjective("item_count:gray_wool") ?? world.scoreboard.addObjective("item_count:gray_wool");
const objGreenBundle = world.scoreboard.getObjective("item_count:green_bundle") ?? world.scoreboard.addObjective("item_count:green_bundle");
const objGreenCandle = world.scoreboard.getObjective("item_count:green_candle") ?? world.scoreboard.addObjective("item_count:green_candle");
const objGreenCarpet = world.scoreboard.getObjective("item_count:green_carpet") ?? world.scoreboard.addObjective("item_count:green_carpet");
const objGreenConcrete = world.scoreboard.getObjective("item_count:green_concrete") ?? world.scoreboard.addObjective("item_count:green_concrete");
const objGreenConcretePowder = world.scoreboard.getObjective("item_count:green_concrete_powder") ?? world.scoreboard.addObjective("item_count:green_concrete_powder");
const objGreenDye = world.scoreboard.getObjective("item_count:green_dye") ?? world.scoreboard.addObjective("item_count:green_dye");
const objGreenGlazedTerracotta = world.scoreboard.getObjective("item_count:green_glazed_terracotta") ?? world.scoreboard.addObjective("item_count:green_glazed_terracotta");
const objGreenHarness = world.scoreboard.getObjective("item_count:green_harness") ?? world.scoreboard.addObjective("item_count:green_harness");
const objGreenShulkerBox = world.scoreboard.getObjective("item_count:green_shulker_box") ?? world.scoreboard.addObjective("item_count:green_shulker_box");
const objGreenStainedGlass = world.scoreboard.getObjective("item_count:green_stained_glass") ?? world.scoreboard.addObjective("item_count:green_stained_glass");
const objGreenStainedGlassPane = world.scoreboard.getObjective("item_count:green_stained_glass_pane") ?? world.scoreboard.addObjective("item_count:green_stained_glass_pane");
const objGreenTerracotta = world.scoreboard.getObjective("item_count:green_terracotta") ?? world.scoreboard.addObjective("item_count:green_terracotta");
const objGreenWool = world.scoreboard.getObjective("item_count:green_wool") ?? world.scoreboard.addObjective("item_count:green_wool");
const objGrindstone = world.scoreboard.getObjective("item_count:grindstone") ?? world.scoreboard.addObjective("item_count:grindstone");
const objGuardianSpawnEgg = world.scoreboard.getObjective("item_count:guardian_spawn_egg") ?? world.scoreboard.addObjective("item_count:guardian_spawn_egg");
const objGunpowder = world.scoreboard.getObjective("item_count:gunpowder") ?? world.scoreboard.addObjective("item_count:gunpowder");
const objGusterBannerPattern = world.scoreboard.getObjective("item_count:guster_banner_pattern") ?? world.scoreboard.addObjective("item_count:guster_banner_pattern");
const objGusterPotterySherd = world.scoreboard.getObjective("item_count:guster_pottery_sherd") ?? world.scoreboard.addObjective("item_count:guster_pottery_sherd");
const objHangingRoots = world.scoreboard.getObjective("item_count:hanging_roots") ?? world.scoreboard.addObjective("item_count:hanging_roots");
const objHappyGhastSpawnEgg = world.scoreboard.getObjective("item_count:happy_ghast_spawn_egg") ?? world.scoreboard.addObjective("item_count:happy_ghast_spawn_egg");
const objHardenedClay = world.scoreboard.getObjective("item_count:hardened_clay") ?? world.scoreboard.addObjective("item_count:hardened_clay");
const objHayBlock = world.scoreboard.getObjective("item_count:hay_block") ?? world.scoreboard.addObjective("item_count:hay_block");
const objHeartOfTheSea = world.scoreboard.getObjective("item_count:heart_of_the_sea") ?? world.scoreboard.addObjective("item_count:heart_of_the_sea");
const objHeartPotterySherd = world.scoreboard.getObjective("item_count:heart_pottery_sherd") ?? world.scoreboard.addObjective("item_count:heart_pottery_sherd");
const objHeartbreakPotterySherd = world.scoreboard.getObjective("item_count:heartbreak_pottery_sherd") ?? world.scoreboard.addObjective("item_count:heartbreak_pottery_sherd");
const objHeavyCore = world.scoreboard.getObjective("item_count:heavy_core") ?? world.scoreboard.addObjective("item_count:heavy_core");
const objHeavyWeightedPressurePlate = world.scoreboard.getObjective("item_count:heavy_weighted_pressure_plate") ?? world.scoreboard.addObjective("item_count:heavy_weighted_pressure_plate");
const objHoglinSpawnEgg = world.scoreboard.getObjective("item_count:hoglin_spawn_egg") ?? world.scoreboard.addObjective("item_count:hoglin_spawn_egg");
const objHoneyBlock = world.scoreboard.getObjective("item_count:honey_block") ?? world.scoreboard.addObjective("item_count:honey_block");
const objHoneyBottle = world.scoreboard.getObjective("item_count:honey_bottle") ?? world.scoreboard.addObjective("item_count:honey_bottle");
const objHoneycomb = world.scoreboard.getObjective("item_count:honeycomb") ?? world.scoreboard.addObjective("item_count:honeycomb");
const objHoneycombBlock = world.scoreboard.getObjective("item_count:honeycomb_block") ?? world.scoreboard.addObjective("item_count:honeycomb_block");
const objHopper = world.scoreboard.getObjective("item_count:hopper") ?? world.scoreboard.addObjective("item_count:hopper");
const objHopperMinecart = world.scoreboard.getObjective("item_count:hopper_minecart") ?? world.scoreboard.addObjective("item_count:hopper_minecart");
const objHornCoral = world.scoreboard.getObjective("item_count:horn_coral") ?? world.scoreboard.addObjective("item_count:horn_coral");
const objHornCoralBlock = world.scoreboard.getObjective("item_count:horn_coral_block") ?? world.scoreboard.addObjective("item_count:horn_coral_block");
const objHornCoralFan = world.scoreboard.getObjective("item_count:horn_coral_fan") ?? world.scoreboard.addObjective("item_count:horn_coral_fan");
const objHorseSpawnEgg = world.scoreboard.getObjective("item_count:horse_spawn_egg") ?? world.scoreboard.addObjective("item_count:horse_spawn_egg");
const objHostArmorTrimSmithingTemplate = world.scoreboard.getObjective("item_count:host_armor_trim_smithing_template") ?? world.scoreboard.addObjective("item_count:host_armor_trim_smithing_template");
const objHowlPotterySherd = world.scoreboard.getObjective("item_count:howl_pottery_sherd") ?? world.scoreboard.addObjective("item_count:howl_pottery_sherd");
const objHuskSpawnEgg = world.scoreboard.getObjective("item_count:husk_spawn_egg") ?? world.scoreboard.addObjective("item_count:husk_spawn_egg");
const objIce = world.scoreboard.getObjective("item_count:ice") ?? world.scoreboard.addObjective("item_count:ice");
const objInfestedChiseledStoneBricks = world.scoreboard.getObjective("item_count:infested_chiseled_stone_bricks") ?? world.scoreboard.addObjective("item_count:infested_chiseled_stone_bricks");
const objInfestedCobblestone = world.scoreboard.getObjective("item_count:infested_cobblestone") ?? world.scoreboard.addObjective("item_count:infested_cobblestone");
const objInfestedCrackedStoneBricks = world.scoreboard.getObjective("item_count:infested_cracked_stone_bricks") ?? world.scoreboard.addObjective("item_count:infested_cracked_stone_bricks");
const objInfestedDeepslate = world.scoreboard.getObjective("item_count:infested_deepslate") ?? world.scoreboard.addObjective("item_count:infested_deepslate");
const objInfestedMossyStoneBricks = world.scoreboard.getObjective("item_count:infested_mossy_stone_bricks") ?? world.scoreboard.addObjective("item_count:infested_mossy_stone_bricks");
const objInfestedStone = world.scoreboard.getObjective("item_count:infested_stone") ?? world.scoreboard.addObjective("item_count:infested_stone");
const objInfestedStoneBricks = world.scoreboard.getObjective("item_count:infested_stone_bricks") ?? world.scoreboard.addObjective("item_count:infested_stone_bricks");
const objInkSac = world.scoreboard.getObjective("item_count:ink_sac") ?? world.scoreboard.addObjective("item_count:ink_sac");
const objIronAxe = world.scoreboard.getObjective("item_count:iron_axe") ?? world.scoreboard.addObjective("item_count:iron_axe");
const objIronBars = world.scoreboard.getObjective("item_count:iron_bars") ?? world.scoreboard.addObjective("item_count:iron_bars");
const objIronBlock = world.scoreboard.getObjective("item_count:iron_block") ?? world.scoreboard.addObjective("item_count:iron_block");
const objIronBoots = world.scoreboard.getObjective("item_count:iron_boots") ?? world.scoreboard.addObjective("item_count:iron_boots");
const objIronChestplate = world.scoreboard.getObjective("item_count:iron_chestplate") ?? world.scoreboard.addObjective("item_count:iron_chestplate");
const objIronDoor = world.scoreboard.getObjective("item_count:iron_door") ?? world.scoreboard.addObjective("item_count:iron_door");
const objIronGolemSpawnEgg = world.scoreboard.getObjective("item_count:iron_golem_spawn_egg") ?? world.scoreboard.addObjective("item_count:iron_golem_spawn_egg");
const objIronHelmet = world.scoreboard.getObjective("item_count:iron_helmet") ?? world.scoreboard.addObjective("item_count:iron_helmet");
const objIronHoe = world.scoreboard.getObjective("item_count:iron_hoe") ?? world.scoreboard.addObjective("item_count:iron_hoe");
const objIronHorseArmor = world.scoreboard.getObjective("item_count:iron_horse_armor") ?? world.scoreboard.addObjective("item_count:iron_horse_armor");
const objIronIngot = world.scoreboard.getObjective("item_count:iron_ingot") ?? world.scoreboard.addObjective("item_count:iron_ingot");
const objIronLeggings = world.scoreboard.getObjective("item_count:iron_leggings") ?? world.scoreboard.addObjective("item_count:iron_leggings");
const objIronNugget = world.scoreboard.getObjective("item_count:iron_nugget") ?? world.scoreboard.addObjective("item_count:iron_nugget");
const objIronOre = world.scoreboard.getObjective("item_count:iron_ore") ?? world.scoreboard.addObjective("item_count:iron_ore");
const objIronPickaxe = world.scoreboard.getObjective("item_count:iron_pickaxe") ?? world.scoreboard.addObjective("item_count:iron_pickaxe");
const objIronShovel = world.scoreboard.getObjective("item_count:iron_shovel") ?? world.scoreboard.addObjective("item_count:iron_shovel");
const objIronSword = world.scoreboard.getObjective("item_count:iron_sword") ?? world.scoreboard.addObjective("item_count:iron_sword");
const objIronTrapdoor = world.scoreboard.getObjective("item_count:iron_trapdoor") ?? world.scoreboard.addObjective("item_count:iron_trapdoor");
const objJigsaw = world.scoreboard.getObjective("item_count:jigsaw") ?? world.scoreboard.addObjective("item_count:jigsaw");
const objJukebox = world.scoreboard.getObjective("item_count:jukebox") ?? world.scoreboard.addObjective("item_count:jukebox");
const objJungleBoat = world.scoreboard.getObjective("item_count:jungle_boat") ?? world.scoreboard.addObjective("item_count:jungle_boat");
const objJungleButton = world.scoreboard.getObjective("item_count:jungle_button") ?? world.scoreboard.addObjective("item_count:jungle_button");
const objJungleChestBoat = world.scoreboard.getObjective("item_count:jungle_chest_boat") ?? world.scoreboard.addObjective("item_count:jungle_chest_boat");
const objJungleDoor = world.scoreboard.getObjective("item_count:jungle_door") ?? world.scoreboard.addObjective("item_count:jungle_door");
const objJungleFence = world.scoreboard.getObjective("item_count:jungle_fence") ?? world.scoreboard.addObjective("item_count:jungle_fence");
const objJungleFenceGate = world.scoreboard.getObjective("item_count:jungle_fence_gate") ?? world.scoreboard.addObjective("item_count:jungle_fence_gate");
const objJungleHangingSign = world.scoreboard.getObjective("item_count:jungle_hanging_sign") ?? world.scoreboard.addObjective("item_count:jungle_hanging_sign");
const objJungleLeaves = world.scoreboard.getObjective("item_count:jungle_leaves") ?? world.scoreboard.addObjective("item_count:jungle_leaves");
const objJungleLog = world.scoreboard.getObjective("item_count:jungle_log") ?? world.scoreboard.addObjective("item_count:jungle_log");
const objJunglePlanks = world.scoreboard.getObjective("item_count:jungle_planks") ?? world.scoreboard.addObjective("item_count:jungle_planks");
const objJunglePressurePlate = world.scoreboard.getObjective("item_count:jungle_pressure_plate") ?? world.scoreboard.addObjective("item_count:jungle_pressure_plate");
const objJungleSapling = world.scoreboard.getObjective("item_count:jungle_sapling") ?? world.scoreboard.addObjective("item_count:jungle_sapling");
const objJungleSign = world.scoreboard.getObjective("item_count:jungle_sign") ?? world.scoreboard.addObjective("item_count:jungle_sign");
const objJungleSlab = world.scoreboard.getObjective("item_count:jungle_slab") ?? world.scoreboard.addObjective("item_count:jungle_slab");
const objJungleStairs = world.scoreboard.getObjective("item_count:jungle_stairs") ?? world.scoreboard.addObjective("item_count:jungle_stairs");
const objJungleTrapdoor = world.scoreboard.getObjective("item_count:jungle_trapdoor") ?? world.scoreboard.addObjective("item_count:jungle_trapdoor");
const objJungleWood = world.scoreboard.getObjective("item_count:jungle_wood") ?? world.scoreboard.addObjective("item_count:jungle_wood");
const objKelp = world.scoreboard.getObjective("item_count:kelp") ?? world.scoreboard.addObjective("item_count:kelp");
const objLadder = world.scoreboard.getObjective("item_count:ladder") ?? world.scoreboard.addObjective("item_count:ladder");
const objLantern = world.scoreboard.getObjective("item_count:lantern") ?? world.scoreboard.addObjective("item_count:lantern");
const objLapisBlock = world.scoreboard.getObjective("item_count:lapis_block") ?? world.scoreboard.addObjective("item_count:lapis_block");
const objLapisLazuli = world.scoreboard.getObjective("item_count:lapis_lazuli") ?? world.scoreboard.addObjective("item_count:lapis_lazuli");
const objLapisOre = world.scoreboard.getObjective("item_count:lapis_ore") ?? world.scoreboard.addObjective("item_count:lapis_ore");
const objLargeAmethystBud = world.scoreboard.getObjective("item_count:large_amethyst_bud") ?? world.scoreboard.addObjective("item_count:large_amethyst_bud");
const objLargeFern = world.scoreboard.getObjective("item_count:large_fern") ?? world.scoreboard.addObjective("item_count:large_fern");
const objLavaBucket = world.scoreboard.getObjective("item_count:lava_bucket") ?? world.scoreboard.addObjective("item_count:lava_bucket");
const objLead = world.scoreboard.getObjective("item_count:lead") ?? world.scoreboard.addObjective("item_count:lead");
const objLeafLitter = world.scoreboard.getObjective("item_count:leaf_litter") ?? world.scoreboard.addObjective("item_count:leaf_litter");
const objLeather = world.scoreboard.getObjective("item_count:leather") ?? world.scoreboard.addObjective("item_count:leather");
const objLeatherBoots = world.scoreboard.getObjective("item_count:leather_boots") ?? world.scoreboard.addObjective("item_count:leather_boots");
const objLeatherChestplate = world.scoreboard.getObjective("item_count:leather_chestplate") ?? world.scoreboard.addObjective("item_count:leather_chestplate");
const objLeatherHelmet = world.scoreboard.getObjective("item_count:leather_helmet") ?? world.scoreboard.addObjective("item_count:leather_helmet");
const objLeatherHorseArmor = world.scoreboard.getObjective("item_count:leather_horse_armor") ?? world.scoreboard.addObjective("item_count:leather_horse_armor");
const objLeatherLeggings = world.scoreboard.getObjective("item_count:leather_leggings") ?? world.scoreboard.addObjective("item_count:leather_leggings");
const objLectern = world.scoreboard.getObjective("item_count:lectern") ?? world.scoreboard.addObjective("item_count:lectern");
const objLever = world.scoreboard.getObjective("item_count:lever") ?? world.scoreboard.addObjective("item_count:lever");
const objLightBlock0 = world.scoreboard.getObjective("item_count:light_block_0") ?? world.scoreboard.addObjective("item_count:light_block_0");
const objLightBlock1 = world.scoreboard.getObjective("item_count:light_block_1") ?? world.scoreboard.addObjective("item_count:light_block_1");
const objLightBlock10 = world.scoreboard.getObjective("item_count:light_block_10") ?? world.scoreboard.addObjective("item_count:light_block_10");
const objLightBlock11 = world.scoreboard.getObjective("item_count:light_block_11") ?? world.scoreboard.addObjective("item_count:light_block_11");
const objLightBlock12 = world.scoreboard.getObjective("item_count:light_block_12") ?? world.scoreboard.addObjective("item_count:light_block_12");
const objLightBlock13 = world.scoreboard.getObjective("item_count:light_block_13") ?? world.scoreboard.addObjective("item_count:light_block_13");
const objLightBlock14 = world.scoreboard.getObjective("item_count:light_block_14") ?? world.scoreboard.addObjective("item_count:light_block_14");
const objLightBlock15 = world.scoreboard.getObjective("item_count:light_block_15") ?? world.scoreboard.addObjective("item_count:light_block_15");
const objLightBlock2 = world.scoreboard.getObjective("item_count:light_block_2") ?? world.scoreboard.addObjective("item_count:light_block_2");
const objLightBlock3 = world.scoreboard.getObjective("item_count:light_block_3") ?? world.scoreboard.addObjective("item_count:light_block_3");
const objLightBlock4 = world.scoreboard.getObjective("item_count:light_block_4") ?? world.scoreboard.addObjective("item_count:light_block_4");
const objLightBlock5 = world.scoreboard.getObjective("item_count:light_block_5") ?? world.scoreboard.addObjective("item_count:light_block_5");
const objLightBlock6 = world.scoreboard.getObjective("item_count:light_block_6") ?? world.scoreboard.addObjective("item_count:light_block_6");
const objLightBlock7 = world.scoreboard.getObjective("item_count:light_block_7") ?? world.scoreboard.addObjective("item_count:light_block_7");
const objLightBlock8 = world.scoreboard.getObjective("item_count:light_block_8") ?? world.scoreboard.addObjective("item_count:light_block_8");
const objLightBlock9 = world.scoreboard.getObjective("item_count:light_block_9") ?? world.scoreboard.addObjective("item_count:light_block_9");
const objLightBlueBundle = world.scoreboard.getObjective("item_count:light_blue_bundle") ?? world.scoreboard.addObjective("item_count:light_blue_bundle");
const objLightBlueCandle = world.scoreboard.getObjective("item_count:light_blue_candle") ?? world.scoreboard.addObjective("item_count:light_blue_candle");
const objLightBlueCarpet = world.scoreboard.getObjective("item_count:light_blue_carpet") ?? world.scoreboard.addObjective("item_count:light_blue_carpet");
const objLightBlueConcrete = world.scoreboard.getObjective("item_count:light_blue_concrete") ?? world.scoreboard.addObjective("item_count:light_blue_concrete");
const objLightBlueConcretePowder = world.scoreboard.getObjective("item_count:light_blue_concrete_powder") ?? world.scoreboard.addObjective("item_count:light_blue_concrete_powder");
const objLightBlueDye = world.scoreboard.getObjective("item_count:light_blue_dye") ?? world.scoreboard.addObjective("item_count:light_blue_dye");
const objLightBlueGlazedTerracotta = world.scoreboard.getObjective("item_count:light_blue_glazed_terracotta") ?? world.scoreboard.addObjective("item_count:light_blue_glazed_terracotta");
const objLightBlueHarness = world.scoreboard.getObjective("item_count:light_blue_harness") ?? world.scoreboard.addObjective("item_count:light_blue_harness");
const objLightBlueShulkerBox = world.scoreboard.getObjective("item_count:light_blue_shulker_box") ?? world.scoreboard.addObjective("item_count:light_blue_shulker_box");
const objLightBlueStainedGlass = world.scoreboard.getObjective("item_count:light_blue_stained_glass") ?? world.scoreboard.addObjective("item_count:light_blue_stained_glass");
const objLightBlueStainedGlassPane = world.scoreboard.getObjective("item_count:light_blue_stained_glass_pane") ?? world.scoreboard.addObjective("item_count:light_blue_stained_glass_pane");
const objLightBlueTerracotta = world.scoreboard.getObjective("item_count:light_blue_terracotta") ?? world.scoreboard.addObjective("item_count:light_blue_terracotta");
const objLightBlueWool = world.scoreboard.getObjective("item_count:light_blue_wool") ?? world.scoreboard.addObjective("item_count:light_blue_wool");
const objLightGrayBundle = world.scoreboard.getObjective("item_count:light_gray_bundle") ?? world.scoreboard.addObjective("item_count:light_gray_bundle");
const objLightGrayCandle = world.scoreboard.getObjective("item_count:light_gray_candle") ?? world.scoreboard.addObjective("item_count:light_gray_candle");
const objLightGrayCarpet = world.scoreboard.getObjective("item_count:light_gray_carpet") ?? world.scoreboard.addObjective("item_count:light_gray_carpet");
const objLightGrayConcrete = world.scoreboard.getObjective("item_count:light_gray_concrete") ?? world.scoreboard.addObjective("item_count:light_gray_concrete");
const objLightGrayConcretePowder = world.scoreboard.getObjective("item_count:light_gray_concrete_powder") ?? world.scoreboard.addObjective("item_count:light_gray_concrete_powder");
const objLightGrayDye = world.scoreboard.getObjective("item_count:light_gray_dye") ?? world.scoreboard.addObjective("item_count:light_gray_dye");
const objLightGrayHarness = world.scoreboard.getObjective("item_count:light_gray_harness") ?? world.scoreboard.addObjective("item_count:light_gray_harness");
const objLightGrayShulkerBox = world.scoreboard.getObjective("item_count:light_gray_shulker_box") ?? world.scoreboard.addObjective("item_count:light_gray_shulker_box");
const objLightGrayStainedGlass = world.scoreboard.getObjective("item_count:light_gray_stained_glass") ?? world.scoreboard.addObjective("item_count:light_gray_stained_glass");
const objLightGrayStainedGlassPane = world.scoreboard.getObjective("item_count:light_gray_stained_glass_pane") ?? world.scoreboard.addObjective("item_count:light_gray_stained_glass_pane");
const objLightGrayTerracotta = world.scoreboard.getObjective("item_count:light_gray_terracotta") ?? world.scoreboard.addObjective("item_count:light_gray_terracotta");
const objLightGrayWool = world.scoreboard.getObjective("item_count:light_gray_wool") ?? world.scoreboard.addObjective("item_count:light_gray_wool");
const objLightWeightedPressurePlate = world.scoreboard.getObjective("item_count:light_weighted_pressure_plate") ?? world.scoreboard.addObjective("item_count:light_weighted_pressure_plate");
const objLightningRod = world.scoreboard.getObjective("item_count:lightning_rod") ?? world.scoreboard.addObjective("item_count:lightning_rod");
const objLilac = world.scoreboard.getObjective("item_count:lilac") ?? world.scoreboard.addObjective("item_count:lilac");
const objLilyOfTheValley = world.scoreboard.getObjective("item_count:lily_of_the_valley") ?? world.scoreboard.addObjective("item_count:lily_of_the_valley");
const objLimeBundle = world.scoreboard.getObjective("item_count:lime_bundle") ?? world.scoreboard.addObjective("item_count:lime_bundle");
const objLimeCandle = world.scoreboard.getObjective("item_count:lime_candle") ?? world.scoreboard.addObjective("item_count:lime_candle");
const objLimeCarpet = world.scoreboard.getObjective("item_count:lime_carpet") ?? world.scoreboard.addObjective("item_count:lime_carpet");
const objLimeConcrete = world.scoreboard.getObjective("item_count:lime_concrete") ?? world.scoreboard.addObjective("item_count:lime_concrete");
const objLimeConcretePowder = world.scoreboard.getObjective("item_count:lime_concrete_powder") ?? world.scoreboard.addObjective("item_count:lime_concrete_powder");
const objLimeDye = world.scoreboard.getObjective("item_count:lime_dye") ?? world.scoreboard.addObjective("item_count:lime_dye");
const objLimeGlazedTerracotta = world.scoreboard.getObjective("item_count:lime_glazed_terracotta") ?? world.scoreboard.addObjective("item_count:lime_glazed_terracotta");
const objLimeHarness = world.scoreboard.getObjective("item_count:lime_harness") ?? world.scoreboard.addObjective("item_count:lime_harness");
const objLimeShulkerBox = world.scoreboard.getObjective("item_count:lime_shulker_box") ?? world.scoreboard.addObjective("item_count:lime_shulker_box");
const objLimeStainedGlass = world.scoreboard.getObjective("item_count:lime_stained_glass") ?? world.scoreboard.addObjective("item_count:lime_stained_glass");
const objLimeStainedGlassPane = world.scoreboard.getObjective("item_count:lime_stained_glass_pane") ?? world.scoreboard.addObjective("item_count:lime_stained_glass_pane");
const objLimeTerracotta = world.scoreboard.getObjective("item_count:lime_terracotta") ?? world.scoreboard.addObjective("item_count:lime_terracotta");
const objLimeWool = world.scoreboard.getObjective("item_count:lime_wool") ?? world.scoreboard.addObjective("item_count:lime_wool");
const objLingeringPotion = world.scoreboard.getObjective("item_count:lingering_potion") ?? world.scoreboard.addObjective("item_count:lingering_potion");
const objLitPumpkin = world.scoreboard.getObjective("item_count:lit_pumpkin") ?? world.scoreboard.addObjective("item_count:lit_pumpkin");
const objLlamaSpawnEgg = world.scoreboard.getObjective("item_count:llama_spawn_egg") ?? world.scoreboard.addObjective("item_count:llama_spawn_egg");
const objLodestone = world.scoreboard.getObjective("item_count:lodestone") ?? world.scoreboard.addObjective("item_count:lodestone");
const objLodestoneCompass = world.scoreboard.getObjective("item_count:lodestone_compass") ?? world.scoreboard.addObjective("item_count:lodestone_compass");
const objLoom = world.scoreboard.getObjective("item_count:loom") ?? world.scoreboard.addObjective("item_count:loom");
const objMace = world.scoreboard.getObjective("item_count:mace") ?? world.scoreboard.addObjective("item_count:mace");
const objMagentaBundle = world.scoreboard.getObjective("item_count:magenta_bundle") ?? world.scoreboard.addObjective("item_count:magenta_bundle");
const objMagentaCandle = world.scoreboard.getObjective("item_count:magenta_candle") ?? world.scoreboard.addObjective("item_count:magenta_candle");
const objMagentaCarpet = world.scoreboard.getObjective("item_count:magenta_carpet") ?? world.scoreboard.addObjective("item_count:magenta_carpet");
const objMagentaConcrete = world.scoreboard.getObjective("item_count:magenta_concrete") ?? world.scoreboard.addObjective("item_count:magenta_concrete");
const objMagentaConcretePowder = world.scoreboard.getObjective("item_count:magenta_concrete_powder") ?? world.scoreboard.addObjective("item_count:magenta_concrete_powder");
const objMagentaDye = world.scoreboard.getObjective("item_count:magenta_dye") ?? world.scoreboard.addObjective("item_count:magenta_dye");
const objMagentaGlazedTerracotta = world.scoreboard.getObjective("item_count:magenta_glazed_terracotta") ?? world.scoreboard.addObjective("item_count:magenta_glazed_terracotta");
const objMagentaHarness = world.scoreboard.getObjective("item_count:magenta_harness") ?? world.scoreboard.addObjective("item_count:magenta_harness");
const objMagentaShulkerBox = world.scoreboard.getObjective("item_count:magenta_shulker_box") ?? world.scoreboard.addObjective("item_count:magenta_shulker_box");
const objMagentaStainedGlass = world.scoreboard.getObjective("item_count:magenta_stained_glass") ?? world.scoreboard.addObjective("item_count:magenta_stained_glass");
const objMagentaStainedGlassPane = world.scoreboard.getObjective("item_count:magenta_stained_glass_pane") ?? world.scoreboard.addObjective("item_count:magenta_stained_glass_pane");
const objMagentaTerracotta = world.scoreboard.getObjective("item_count:magenta_terracotta") ?? world.scoreboard.addObjective("item_count:magenta_terracotta");
const objMagentaWool = world.scoreboard.getObjective("item_count:magenta_wool") ?? world.scoreboard.addObjective("item_count:magenta_wool");
const objMagma = world.scoreboard.getObjective("item_count:magma") ?? world.scoreboard.addObjective("item_count:magma");
const objMagmaCream = world.scoreboard.getObjective("item_count:magma_cream") ?? world.scoreboard.addObjective("item_count:magma_cream");
const objMagmaCubeSpawnEgg = world.scoreboard.getObjective("item_count:magma_cube_spawn_egg") ?? world.scoreboard.addObjective("item_count:magma_cube_spawn_egg");
const objMangroveBoat = world.scoreboard.getObjective("item_count:mangrove_boat") ?? world.scoreboard.addObjective("item_count:mangrove_boat");
const objMangroveButton = world.scoreboard.getObjective("item_count:mangrove_button") ?? world.scoreboard.addObjective("item_count:mangrove_button");
const objMangroveChestBoat = world.scoreboard.getObjective("item_count:mangrove_chest_boat") ?? world.scoreboard.addObjective("item_count:mangrove_chest_boat");
const objMangroveDoor = world.scoreboard.getObjective("item_count:mangrove_door") ?? world.scoreboard.addObjective("item_count:mangrove_door");
const objMangroveFence = world.scoreboard.getObjective("item_count:mangrove_fence") ?? world.scoreboard.addObjective("item_count:mangrove_fence");
const objMangroveFenceGate = world.scoreboard.getObjective("item_count:mangrove_fence_gate") ?? world.scoreboard.addObjective("item_count:mangrove_fence_gate");
const objMangroveHangingSign = world.scoreboard.getObjective("item_count:mangrove_hanging_sign") ?? world.scoreboard.addObjective("item_count:mangrove_hanging_sign");
const objMangroveLeaves = world.scoreboard.getObjective("item_count:mangrove_leaves") ?? world.scoreboard.addObjective("item_count:mangrove_leaves");
const objMangroveLog = world.scoreboard.getObjective("item_count:mangrove_log") ?? world.scoreboard.addObjective("item_count:mangrove_log");
const objMangrovePlanks = world.scoreboard.getObjective("item_count:mangrove_planks") ?? world.scoreboard.addObjective("item_count:mangrove_planks");
const objMangrovePressurePlate = world.scoreboard.getObjective("item_count:mangrove_pressure_plate") ?? world.scoreboard.addObjective("item_count:mangrove_pressure_plate");
const objMangrovePropagule = world.scoreboard.getObjective("item_count:mangrove_propagule") ?? world.scoreboard.addObjective("item_count:mangrove_propagule");
const objMangroveRoots = world.scoreboard.getObjective("item_count:mangrove_roots") ?? world.scoreboard.addObjective("item_count:mangrove_roots");
const objMangroveSign = world.scoreboard.getObjective("item_count:mangrove_sign") ?? world.scoreboard.addObjective("item_count:mangrove_sign");
const objMangroveSlab = world.scoreboard.getObjective("item_count:mangrove_slab") ?? world.scoreboard.addObjective("item_count:mangrove_slab");
const objMangroveStairs = world.scoreboard.getObjective("item_count:mangrove_stairs") ?? world.scoreboard.addObjective("item_count:mangrove_stairs");
const objMangroveTrapdoor = world.scoreboard.getObjective("item_count:mangrove_trapdoor") ?? world.scoreboard.addObjective("item_count:mangrove_trapdoor");
const objMangroveWood = world.scoreboard.getObjective("item_count:mangrove_wood") ?? world.scoreboard.addObjective("item_count:mangrove_wood");
const objMediumAmethystBud = world.scoreboard.getObjective("item_count:medium_amethyst_bud") ?? world.scoreboard.addObjective("item_count:medium_amethyst_bud");
const objMelonBlock = world.scoreboard.getObjective("item_count:melon_block") ?? world.scoreboard.addObjective("item_count:melon_block");
const objMelonSeeds = world.scoreboard.getObjective("item_count:melon_seeds") ?? world.scoreboard.addObjective("item_count:melon_seeds");
const objMelonSlice = world.scoreboard.getObjective("item_count:melon_slice") ?? world.scoreboard.addObjective("item_count:melon_slice");
const objMilkBucket = world.scoreboard.getObjective("item_count:milk_bucket") ?? world.scoreboard.addObjective("item_count:milk_bucket");
const objMinecart = world.scoreboard.getObjective("item_count:minecart") ?? world.scoreboard.addObjective("item_count:minecart");
const objMinerPotterySherd = world.scoreboard.getObjective("item_count:miner_pottery_sherd") ?? world.scoreboard.addObjective("item_count:miner_pottery_sherd");
const objMobSpawner = world.scoreboard.getObjective("item_count:mob_spawner") ?? world.scoreboard.addObjective("item_count:mob_spawner");
const objMojangBannerPattern = world.scoreboard.getObjective("item_count:mojang_banner_pattern") ?? world.scoreboard.addObjective("item_count:mojang_banner_pattern");
const objMooshroomSpawnEgg = world.scoreboard.getObjective("item_count:mooshroom_spawn_egg") ?? world.scoreboard.addObjective("item_count:mooshroom_spawn_egg");
const objMossBlock = world.scoreboard.getObjective("item_count:moss_block") ?? world.scoreboard.addObjective("item_count:moss_block");
const objMossCarpet = world.scoreboard.getObjective("item_count:moss_carpet") ?? world.scoreboard.addObjective("item_count:moss_carpet");
const objMossyCobblestone = world.scoreboard.getObjective("item_count:mossy_cobblestone") ?? world.scoreboard.addObjective("item_count:mossy_cobblestone");
const objMossyCobblestoneSlab = world.scoreboard.getObjective("item_count:mossy_cobblestone_slab") ?? world.scoreboard.addObjective("item_count:mossy_cobblestone_slab");
const objMossyCobblestoneStairs = world.scoreboard.getObjective("item_count:mossy_cobblestone_stairs") ?? world.scoreboard.addObjective("item_count:mossy_cobblestone_stairs");
const objMossyCobblestoneWall = world.scoreboard.getObjective("item_count:mossy_cobblestone_wall") ?? world.scoreboard.addObjective("item_count:mossy_cobblestone_wall");
const objMossyStoneBrickSlab = world.scoreboard.getObjective("item_count:mossy_stone_brick_slab") ?? world.scoreboard.addObjective("item_count:mossy_stone_brick_slab");
const objMossyStoneBrickStairs = world.scoreboard.getObjective("item_count:mossy_stone_brick_stairs") ?? world.scoreboard.addObjective("item_count:mossy_stone_brick_stairs");
const objMossyStoneBrickWall = world.scoreboard.getObjective("item_count:mossy_stone_brick_wall") ?? world.scoreboard.addObjective("item_count:mossy_stone_brick_wall");
const objMossyStoneBricks = world.scoreboard.getObjective("item_count:mossy_stone_bricks") ?? world.scoreboard.addObjective("item_count:mossy_stone_bricks");
const objMournerPotterySherd = world.scoreboard.getObjective("item_count:mourner_pottery_sherd") ?? world.scoreboard.addObjective("item_count:mourner_pottery_sherd");
const objMud = world.scoreboard.getObjective("item_count:mud") ?? world.scoreboard.addObjective("item_count:mud");
const objMudBrickSlab = world.scoreboard.getObjective("item_count:mud_brick_slab") ?? world.scoreboard.addObjective("item_count:mud_brick_slab");
const objMudBrickStairs = world.scoreboard.getObjective("item_count:mud_brick_stairs") ?? world.scoreboard.addObjective("item_count:mud_brick_stairs");
const objMudBrickWall = world.scoreboard.getObjective("item_count:mud_brick_wall") ?? world.scoreboard.addObjective("item_count:mud_brick_wall");
const objMudBricks = world.scoreboard.getObjective("item_count:mud_bricks") ?? world.scoreboard.addObjective("item_count:mud_bricks");
const objMuddyMangroveRoots = world.scoreboard.getObjective("item_count:muddy_mangrove_roots") ?? world.scoreboard.addObjective("item_count:muddy_mangrove_roots");
const objMuleSpawnEgg = world.scoreboard.getObjective("item_count:mule_spawn_egg") ?? world.scoreboard.addObjective("item_count:mule_spawn_egg");
const objMushroomStem = world.scoreboard.getObjective("item_count:mushroom_stem") ?? world.scoreboard.addObjective("item_count:mushroom_stem");
const objMushroomStew = world.scoreboard.getObjective("item_count:mushroom_stew") ?? world.scoreboard.addObjective("item_count:mushroom_stew");
const objMusicDisc11 = world.scoreboard.getObjective("item_count:music_disc_11") ?? world.scoreboard.addObjective("item_count:music_disc_11");
const objMusicDisc13 = world.scoreboard.getObjective("item_count:music_disc_13") ?? world.scoreboard.addObjective("item_count:music_disc_13");
const objMusicDisc5 = world.scoreboard.getObjective("item_count:music_disc_5") ?? world.scoreboard.addObjective("item_count:music_disc_5");
const objMusicDiscBlocks = world.scoreboard.getObjective("item_count:music_disc_blocks") ?? world.scoreboard.addObjective("item_count:music_disc_blocks");
const objMusicDiscCat = world.scoreboard.getObjective("item_count:music_disc_cat") ?? world.scoreboard.addObjective("item_count:music_disc_cat");
const objMusicDiscChirp = world.scoreboard.getObjective("item_count:music_disc_chirp") ?? world.scoreboard.addObjective("item_count:music_disc_chirp");
const objMusicDiscCreator = world.scoreboard.getObjective("item_count:music_disc_creator") ?? world.scoreboard.addObjective("item_count:music_disc_creator");
const objMusicDiscCreatorMusicBox = world.scoreboard.getObjective("item_count:music_disc_creator_music_box") ?? world.scoreboard.addObjective("item_count:music_disc_creator_music_box");
const objMusicDiscFar = world.scoreboard.getObjective("item_count:music_disc_far") ?? world.scoreboard.addObjective("item_count:music_disc_far");
const objMusicDiscLavaChicken = world.scoreboard.getObjective("item_count:music_disc_lava_chicken") ?? world.scoreboard.addObjective("item_count:music_disc_lava_chicken");
const objMusicDiscMall = world.scoreboard.getObjective("item_count:music_disc_mall") ?? world.scoreboard.addObjective("item_count:music_disc_mall");
const objMusicDiscMellohi = world.scoreboard.getObjective("item_count:music_disc_mellohi") ?? world.scoreboard.addObjective("item_count:music_disc_mellohi");
const objMusicDiscOtherside = world.scoreboard.getObjective("item_count:music_disc_otherside") ?? world.scoreboard.addObjective("item_count:music_disc_otherside");
const objMusicDiscPigstep = world.scoreboard.getObjective("item_count:music_disc_pigstep") ?? world.scoreboard.addObjective("item_count:music_disc_pigstep");
const objMusicDiscPrecipice = world.scoreboard.getObjective("item_count:music_disc_precipice") ?? world.scoreboard.addObjective("item_count:music_disc_precipice");
const objMusicDiscRelic = world.scoreboard.getObjective("item_count:music_disc_relic") ?? world.scoreboard.addObjective("item_count:music_disc_relic");
const objMusicDiscStal = world.scoreboard.getObjective("item_count:music_disc_stal") ?? world.scoreboard.addObjective("item_count:music_disc_stal");
const objMusicDiscStrad = world.scoreboard.getObjective("item_count:music_disc_strad") ?? world.scoreboard.addObjective("item_count:music_disc_strad");
const objMusicDiscTears = world.scoreboard.getObjective("item_count:music_disc_tears") ?? world.scoreboard.addObjective("item_count:music_disc_tears");
const objMusicDiscWait = world.scoreboard.getObjective("item_count:music_disc_wait") ?? world.scoreboard.addObjective("item_count:music_disc_wait");
const objMusicDiscWard = world.scoreboard.getObjective("item_count:music_disc_ward") ?? world.scoreboard.addObjective("item_count:music_disc_ward");
const objMutton = world.scoreboard.getObjective("item_count:mutton") ?? world.scoreboard.addObjective("item_count:mutton");
const objMycelium = world.scoreboard.getObjective("item_count:mycelium") ?? world.scoreboard.addObjective("item_count:mycelium");
const objNameTag = world.scoreboard.getObjective("item_count:name_tag") ?? world.scoreboard.addObjective("item_count:name_tag");
const objNautilusShell = world.scoreboard.getObjective("item_count:nautilus_shell") ?? world.scoreboard.addObjective("item_count:nautilus_shell");
const objNetherBrick = world.scoreboard.getObjective("item_count:nether_brick") ?? world.scoreboard.addObjective("item_count:nether_brick");
const objNetherBrickFence = world.scoreboard.getObjective("item_count:nether_brick_fence") ?? world.scoreboard.addObjective("item_count:nether_brick_fence");
const objNetherBrickSlab = world.scoreboard.getObjective("item_count:nether_brick_slab") ?? world.scoreboard.addObjective("item_count:nether_brick_slab");
const objNetherBrickStairs = world.scoreboard.getObjective("item_count:nether_brick_stairs") ?? world.scoreboard.addObjective("item_count:nether_brick_stairs");
const objNetherBrickWall = world.scoreboard.getObjective("item_count:nether_brick_wall") ?? world.scoreboard.addObjective("item_count:nether_brick_wall");
const objNetherGoldOre = world.scoreboard.getObjective("item_count:nether_gold_ore") ?? world.scoreboard.addObjective("item_count:nether_gold_ore");
const objNetherSprouts = world.scoreboard.getObjective("item_count:nether_sprouts") ?? world.scoreboard.addObjective("item_count:nether_sprouts");
const objNetherStar = world.scoreboard.getObjective("item_count:nether_star") ?? world.scoreboard.addObjective("item_count:nether_star");
const objNetherWart = world.scoreboard.getObjective("item_count:nether_wart") ?? world.scoreboard.addObjective("item_count:nether_wart");
const objNetherWartBlock = world.scoreboard.getObjective("item_count:nether_wart_block") ?? world.scoreboard.addObjective("item_count:nether_wart_block");
const objNetherbrick = world.scoreboard.getObjective("item_count:netherbrick") ?? world.scoreboard.addObjective("item_count:netherbrick");
const objNetheriteAxe = world.scoreboard.getObjective("item_count:netherite_axe") ?? world.scoreboard.addObjective("item_count:netherite_axe");
const objNetheriteBlock = world.scoreboard.getObjective("item_count:netherite_block") ?? world.scoreboard.addObjective("item_count:netherite_block");
const objNetheriteBoots = world.scoreboard.getObjective("item_count:netherite_boots") ?? world.scoreboard.addObjective("item_count:netherite_boots");
const objNetheriteChestplate = world.scoreboard.getObjective("item_count:netherite_chestplate") ?? world.scoreboard.addObjective("item_count:netherite_chestplate");
const objNetheriteHelmet = world.scoreboard.getObjective("item_count:netherite_helmet") ?? world.scoreboard.addObjective("item_count:netherite_helmet");
const objNetheriteHoe = world.scoreboard.getObjective("item_count:netherite_hoe") ?? world.scoreboard.addObjective("item_count:netherite_hoe");
const objNetheriteIngot = world.scoreboard.getObjective("item_count:netherite_ingot") ?? world.scoreboard.addObjective("item_count:netherite_ingot");
const objNetheriteLeggings = world.scoreboard.getObjective("item_count:netherite_leggings") ?? world.scoreboard.addObjective("item_count:netherite_leggings");
const objNetheritePickaxe = world.scoreboard.getObjective("item_count:netherite_pickaxe") ?? world.scoreboard.addObjective("item_count:netherite_pickaxe");
const objNetheriteScrap = world.scoreboard.getObjective("item_count:netherite_scrap") ?? world.scoreboard.addObjective("item_count:netherite_scrap");
const objNetheriteShovel = world.scoreboard.getObjective("item_count:netherite_shovel") ?? world.scoreboard.addObjective("item_count:netherite_shovel");
const objNetheriteSword = world.scoreboard.getObjective("item_count:netherite_sword") ?? world.scoreboard.addObjective("item_count:netherite_sword");
const objNetheriteUpgradeSmithingTemplate = world.scoreboard.getObjective("item_count:netherite_upgrade_smithing_template") ?? world.scoreboard.addObjective("item_count:netherite_upgrade_smithing_template");
const objNetherrack = world.scoreboard.getObjective("item_count:netherrack") ?? world.scoreboard.addObjective("item_count:netherrack");
const objNormalStoneSlab = world.scoreboard.getObjective("item_count:normal_stone_slab") ?? world.scoreboard.addObjective("item_count:normal_stone_slab");
const objNormalStoneStairs = world.scoreboard.getObjective("item_count:normal_stone_stairs") ?? world.scoreboard.addObjective("item_count:normal_stone_stairs");
const objNoteblock = world.scoreboard.getObjective("item_count:noteblock") ?? world.scoreboard.addObjective("item_count:noteblock");
const objOakBoat = world.scoreboard.getObjective("item_count:oak_boat") ?? world.scoreboard.addObjective("item_count:oak_boat");
const objOakChestBoat = world.scoreboard.getObjective("item_count:oak_chest_boat") ?? world.scoreboard.addObjective("item_count:oak_chest_boat");
const objOakFence = world.scoreboard.getObjective("item_count:oak_fence") ?? world.scoreboard.addObjective("item_count:oak_fence");
const objOakHangingSign = world.scoreboard.getObjective("item_count:oak_hanging_sign") ?? world.scoreboard.addObjective("item_count:oak_hanging_sign");
const objOakLeaves = world.scoreboard.getObjective("item_count:oak_leaves") ?? world.scoreboard.addObjective("item_count:oak_leaves");
const objOakLog = world.scoreboard.getObjective("item_count:oak_log") ?? world.scoreboard.addObjective("item_count:oak_log");
const objOakPlanks = world.scoreboard.getObjective("item_count:oak_planks") ?? world.scoreboard.addObjective("item_count:oak_planks");
const objOakSapling = world.scoreboard.getObjective("item_count:oak_sapling") ?? world.scoreboard.addObjective("item_count:oak_sapling");
const objOakSign = world.scoreboard.getObjective("item_count:oak_sign") ?? world.scoreboard.addObjective("item_count:oak_sign");
const objOakSlab = world.scoreboard.getObjective("item_count:oak_slab") ?? world.scoreboard.addObjective("item_count:oak_slab");
const objOakStairs = world.scoreboard.getObjective("item_count:oak_stairs") ?? world.scoreboard.addObjective("item_count:oak_stairs");
const objOakWood = world.scoreboard.getObjective("item_count:oak_wood") ?? world.scoreboard.addObjective("item_count:oak_wood");
const objObserver = world.scoreboard.getObjective("item_count:observer") ?? world.scoreboard.addObjective("item_count:observer");
const objObsidian = world.scoreboard.getObjective("item_count:obsidian") ?? world.scoreboard.addObjective("item_count:obsidian");
const objOcelotSpawnEgg = world.scoreboard.getObjective("item_count:ocelot_spawn_egg") ?? world.scoreboard.addObjective("item_count:ocelot_spawn_egg");
const objOchreFroglight = world.scoreboard.getObjective("item_count:ochre_froglight") ?? world.scoreboard.addObjective("item_count:ochre_froglight");
const objOminousBottle = world.scoreboard.getObjective("item_count:ominous_bottle") ?? world.scoreboard.addObjective("item_count:ominous_bottle");
const objOminousTrialKey = world.scoreboard.getObjective("item_count:ominous_trial_key") ?? world.scoreboard.addObjective("item_count:ominous_trial_key");
const objOpenEyeblossom = world.scoreboard.getObjective("item_count:open_eyeblossom") ?? world.scoreboard.addObjective("item_count:open_eyeblossom");
const objOrangeBundle = world.scoreboard.getObjective("item_count:orange_bundle") ?? world.scoreboard.addObjective("item_count:orange_bundle");
const objOrangeCandle = world.scoreboard.getObjective("item_count:orange_candle") ?? world.scoreboard.addObjective("item_count:orange_candle");
const objOrangeCarpet = world.scoreboard.getObjective("item_count:orange_carpet") ?? world.scoreboard.addObjective("item_count:orange_carpet");
const objOrangeConcrete = world.scoreboard.getObjective("item_count:orange_concrete") ?? world.scoreboard.addObjective("item_count:orange_concrete");
const objOrangeConcretePowder = world.scoreboard.getObjective("item_count:orange_concrete_powder") ?? world.scoreboard.addObjective("item_count:orange_concrete_powder");
const objOrangeDye = world.scoreboard.getObjective("item_count:orange_dye") ?? world.scoreboard.addObjective("item_count:orange_dye");
const objOrangeGlazedTerracotta = world.scoreboard.getObjective("item_count:orange_glazed_terracotta") ?? world.scoreboard.addObjective("item_count:orange_glazed_terracotta");
const objOrangeHarness = world.scoreboard.getObjective("item_count:orange_harness") ?? world.scoreboard.addObjective("item_count:orange_harness");
const objOrangeShulkerBox = world.scoreboard.getObjective("item_count:orange_shulker_box") ?? world.scoreboard.addObjective("item_count:orange_shulker_box");
const objOrangeStainedGlass = world.scoreboard.getObjective("item_count:orange_stained_glass") ?? world.scoreboard.addObjective("item_count:orange_stained_glass");
const objOrangeStainedGlassPane = world.scoreboard.getObjective("item_count:orange_stained_glass_pane") ?? world.scoreboard.addObjective("item_count:orange_stained_glass_pane");
const objOrangeTerracotta = world.scoreboard.getObjective("item_count:orange_terracotta") ?? world.scoreboard.addObjective("item_count:orange_terracotta");
const objOrangeTulip = world.scoreboard.getObjective("item_count:orange_tulip") ?? world.scoreboard.addObjective("item_count:orange_tulip");
const objOrangeWool = world.scoreboard.getObjective("item_count:orange_wool") ?? world.scoreboard.addObjective("item_count:orange_wool");
const objOxeyeDaisy = world.scoreboard.getObjective("item_count:oxeye_daisy") ?? world.scoreboard.addObjective("item_count:oxeye_daisy");
const objOxidizedChiseledCopper = world.scoreboard.getObjective("item_count:oxidized_chiseled_copper") ?? world.scoreboard.addObjective("item_count:oxidized_chiseled_copper");
const objOxidizedCopper = world.scoreboard.getObjective("item_count:oxidized_copper") ?? world.scoreboard.addObjective("item_count:oxidized_copper");
const objOxidizedCopperBulb = world.scoreboard.getObjective("item_count:oxidized_copper_bulb") ?? world.scoreboard.addObjective("item_count:oxidized_copper_bulb");
const objOxidizedCopperDoor = world.scoreboard.getObjective("item_count:oxidized_copper_door") ?? world.scoreboard.addObjective("item_count:oxidized_copper_door");
const objOxidizedCopperGrate = world.scoreboard.getObjective("item_count:oxidized_copper_grate") ?? world.scoreboard.addObjective("item_count:oxidized_copper_grate");
const objOxidizedCopperTrapdoor = world.scoreboard.getObjective("item_count:oxidized_copper_trapdoor") ?? world.scoreboard.addObjective("item_count:oxidized_copper_trapdoor");
const objOxidizedCutCopper = world.scoreboard.getObjective("item_count:oxidized_cut_copper") ?? world.scoreboard.addObjective("item_count:oxidized_cut_copper");
const objOxidizedCutCopperSlab = world.scoreboard.getObjective("item_count:oxidized_cut_copper_slab") ?? world.scoreboard.addObjective("item_count:oxidized_cut_copper_slab");
const objOxidizedCutCopperStairs = world.scoreboard.getObjective("item_count:oxidized_cut_copper_stairs") ?? world.scoreboard.addObjective("item_count:oxidized_cut_copper_stairs");
const objPackedIce = world.scoreboard.getObjective("item_count:packed_ice") ?? world.scoreboard.addObjective("item_count:packed_ice");
const objPackedMud = world.scoreboard.getObjective("item_count:packed_mud") ?? world.scoreboard.addObjective("item_count:packed_mud");
const objPainting = world.scoreboard.getObjective("item_count:painting") ?? world.scoreboard.addObjective("item_count:painting");
const objPaleHangingMoss = world.scoreboard.getObjective("item_count:pale_hanging_moss") ?? world.scoreboard.addObjective("item_count:pale_hanging_moss");
const objPaleMossBlock = world.scoreboard.getObjective("item_count:pale_moss_block") ?? world.scoreboard.addObjective("item_count:pale_moss_block");
const objPaleMossCarpet = world.scoreboard.getObjective("item_count:pale_moss_carpet") ?? world.scoreboard.addObjective("item_count:pale_moss_carpet");
const objPaleOakBoat = world.scoreboard.getObjective("item_count:pale_oak_boat") ?? world.scoreboard.addObjective("item_count:pale_oak_boat");
const objPaleOakButton = world.scoreboard.getObjective("item_count:pale_oak_button") ?? world.scoreboard.addObjective("item_count:pale_oak_button");
const objPaleOakChestBoat = world.scoreboard.getObjective("item_count:pale_oak_chest_boat") ?? world.scoreboard.addObjective("item_count:pale_oak_chest_boat");
const objPaleOakDoor = world.scoreboard.getObjective("item_count:pale_oak_door") ?? world.scoreboard.addObjective("item_count:pale_oak_door");
const objPaleOakFence = world.scoreboard.getObjective("item_count:pale_oak_fence") ?? world.scoreboard.addObjective("item_count:pale_oak_fence");
const objPaleOakFenceGate = world.scoreboard.getObjective("item_count:pale_oak_fence_gate") ?? world.scoreboard.addObjective("item_count:pale_oak_fence_gate");
const objPaleOakHangingSign = world.scoreboard.getObjective("item_count:pale_oak_hanging_sign") ?? world.scoreboard.addObjective("item_count:pale_oak_hanging_sign");
const objPaleOakLeaves = world.scoreboard.getObjective("item_count:pale_oak_leaves") ?? world.scoreboard.addObjective("item_count:pale_oak_leaves");
const objPaleOakLog = world.scoreboard.getObjective("item_count:pale_oak_log") ?? world.scoreboard.addObjective("item_count:pale_oak_log");
const objPaleOakPlanks = world.scoreboard.getObjective("item_count:pale_oak_planks") ?? world.scoreboard.addObjective("item_count:pale_oak_planks");
const objPaleOakPressurePlate = world.scoreboard.getObjective("item_count:pale_oak_pressure_plate") ?? world.scoreboard.addObjective("item_count:pale_oak_pressure_plate");
const objPaleOakSapling = world.scoreboard.getObjective("item_count:pale_oak_sapling") ?? world.scoreboard.addObjective("item_count:pale_oak_sapling");
const objPaleOakSign = world.scoreboard.getObjective("item_count:pale_oak_sign") ?? world.scoreboard.addObjective("item_count:pale_oak_sign");
const objPaleOakSlab = world.scoreboard.getObjective("item_count:pale_oak_slab") ?? world.scoreboard.addObjective("item_count:pale_oak_slab");
const objPaleOakStairs = world.scoreboard.getObjective("item_count:pale_oak_stairs") ?? world.scoreboard.addObjective("item_count:pale_oak_stairs");
const objPaleOakTrapdoor = world.scoreboard.getObjective("item_count:pale_oak_trapdoor") ?? world.scoreboard.addObjective("item_count:pale_oak_trapdoor");
const objPaleOakWood = world.scoreboard.getObjective("item_count:pale_oak_wood") ?? world.scoreboard.addObjective("item_count:pale_oak_wood");
const objPandaSpawnEgg = world.scoreboard.getObjective("item_count:panda_spawn_egg") ?? world.scoreboard.addObjective("item_count:panda_spawn_egg");
const objPaper = world.scoreboard.getObjective("item_count:paper") ?? world.scoreboard.addObjective("item_count:paper");
const objParrotSpawnEgg = world.scoreboard.getObjective("item_count:parrot_spawn_egg") ?? world.scoreboard.addObjective("item_count:parrot_spawn_egg");
const objPearlescentFroglight = world.scoreboard.getObjective("item_count:pearlescent_froglight") ?? world.scoreboard.addObjective("item_count:pearlescent_froglight");
const objPeony = world.scoreboard.getObjective("item_count:peony") ?? world.scoreboard.addObjective("item_count:peony");
const objPetrifiedOakSlab = world.scoreboard.getObjective("item_count:petrified_oak_slab") ?? world.scoreboard.addObjective("item_count:petrified_oak_slab");
const objPhantomMembrane = world.scoreboard.getObjective("item_count:phantom_membrane") ?? world.scoreboard.addObjective("item_count:phantom_membrane");
const objPhantomSpawnEgg = world.scoreboard.getObjective("item_count:phantom_spawn_egg") ?? world.scoreboard.addObjective("item_count:phantom_spawn_egg");
const objPigSpawnEgg = world.scoreboard.getObjective("item_count:pig_spawn_egg") ?? world.scoreboard.addObjective("item_count:pig_spawn_egg");
const objPiglinBannerPattern = world.scoreboard.getObjective("item_count:piglin_banner_pattern") ?? world.scoreboard.addObjective("item_count:piglin_banner_pattern");
const objPiglinBruteSpawnEgg = world.scoreboard.getObjective("item_count:piglin_brute_spawn_egg") ?? world.scoreboard.addObjective("item_count:piglin_brute_spawn_egg");
const objPiglinHead = world.scoreboard.getObjective("item_count:piglin_head") ?? world.scoreboard.addObjective("item_count:piglin_head");
const objPiglinSpawnEgg = world.scoreboard.getObjective("item_count:piglin_spawn_egg") ?? world.scoreboard.addObjective("item_count:piglin_spawn_egg");
const objPillagerSpawnEgg = world.scoreboard.getObjective("item_count:pillager_spawn_egg") ?? world.scoreboard.addObjective("item_count:pillager_spawn_egg");
const objPinkBundle = world.scoreboard.getObjective("item_count:pink_bundle") ?? world.scoreboard.addObjective("item_count:pink_bundle");
const objPinkCandle = world.scoreboard.getObjective("item_count:pink_candle") ?? world.scoreboard.addObjective("item_count:pink_candle");
const objPinkCarpet = world.scoreboard.getObjective("item_count:pink_carpet") ?? world.scoreboard.addObjective("item_count:pink_carpet");
const objPinkConcrete = world.scoreboard.getObjective("item_count:pink_concrete") ?? world.scoreboard.addObjective("item_count:pink_concrete");
const objPinkConcretePowder = world.scoreboard.getObjective("item_count:pink_concrete_powder") ?? world.scoreboard.addObjective("item_count:pink_concrete_powder");
const objPinkDye = world.scoreboard.getObjective("item_count:pink_dye") ?? world.scoreboard.addObjective("item_count:pink_dye");
const objPinkGlazedTerracotta = world.scoreboard.getObjective("item_count:pink_glazed_terracotta") ?? world.scoreboard.addObjective("item_count:pink_glazed_terracotta");
const objPinkHarness = world.scoreboard.getObjective("item_count:pink_harness") ?? world.scoreboard.addObjective("item_count:pink_harness");
const objPinkPetals = world.scoreboard.getObjective("item_count:pink_petals") ?? world.scoreboard.addObjective("item_count:pink_petals");
const objPinkShulkerBox = world.scoreboard.getObjective("item_count:pink_shulker_box") ?? world.scoreboard.addObjective("item_count:pink_shulker_box");
const objPinkStainedGlass = world.scoreboard.getObjective("item_count:pink_stained_glass") ?? world.scoreboard.addObjective("item_count:pink_stained_glass");
const objPinkStainedGlassPane = world.scoreboard.getObjective("item_count:pink_stained_glass_pane") ?? world.scoreboard.addObjective("item_count:pink_stained_glass_pane");
const objPinkTerracotta = world.scoreboard.getObjective("item_count:pink_terracotta") ?? world.scoreboard.addObjective("item_count:pink_terracotta");
const objPinkTulip = world.scoreboard.getObjective("item_count:pink_tulip") ?? world.scoreboard.addObjective("item_count:pink_tulip");
const objPinkWool = world.scoreboard.getObjective("item_count:pink_wool") ?? world.scoreboard.addObjective("item_count:pink_wool");
const objPiston = world.scoreboard.getObjective("item_count:piston") ?? world.scoreboard.addObjective("item_count:piston");
const objPitcherPlant = world.scoreboard.getObjective("item_count:pitcher_plant") ?? world.scoreboard.addObjective("item_count:pitcher_plant");
const objPitcherPod = world.scoreboard.getObjective("item_count:pitcher_pod") ?? world.scoreboard.addObjective("item_count:pitcher_pod");
const objPlayerHead = world.scoreboard.getObjective("item_count:player_head") ?? world.scoreboard.addObjective("item_count:player_head");
const objPlentyPotterySherd = world.scoreboard.getObjective("item_count:plenty_pottery_sherd") ?? world.scoreboard.addObjective("item_count:plenty_pottery_sherd");
const objPodzol = world.scoreboard.getObjective("item_count:podzol") ?? world.scoreboard.addObjective("item_count:podzol");
const objPointedDripstone = world.scoreboard.getObjective("item_count:pointed_dripstone") ?? world.scoreboard.addObjective("item_count:pointed_dripstone");
const objPoisonousPotato = world.scoreboard.getObjective("item_count:poisonous_potato") ?? world.scoreboard.addObjective("item_count:poisonous_potato");
const objPolarBearSpawnEgg = world.scoreboard.getObjective("item_count:polar_bear_spawn_egg") ?? world.scoreboard.addObjective("item_count:polar_bear_spawn_egg");
const objPolishedAndesite = world.scoreboard.getObjective("item_count:polished_andesite") ?? world.scoreboard.addObjective("item_count:polished_andesite");
const objPolishedAndesiteSlab = world.scoreboard.getObjective("item_count:polished_andesite_slab") ?? world.scoreboard.addObjective("item_count:polished_andesite_slab");
const objPolishedAndesiteStairs = world.scoreboard.getObjective("item_count:polished_andesite_stairs") ?? world.scoreboard.addObjective("item_count:polished_andesite_stairs");
const objPolishedBasalt = world.scoreboard.getObjective("item_count:polished_basalt") ?? world.scoreboard.addObjective("item_count:polished_basalt");
const objPolishedBlackstone = world.scoreboard.getObjective("item_count:polished_blackstone") ?? world.scoreboard.addObjective("item_count:polished_blackstone");
const objPolishedBlackstoneBrickSlab = world.scoreboard.getObjective("item_count:polished_blackstone_brick_slab") ?? world.scoreboard.addObjective("item_count:polished_blackstone_brick_slab");
const objPolishedBlackstoneBrickStairs = world.scoreboard.getObjective("item_count:polished_blackstone_brick_stairs") ?? world.scoreboard.addObjective("item_count:polished_blackstone_brick_stairs");
const objPolishedBlackstoneBrickWall = world.scoreboard.getObjective("item_count:polished_blackstone_brick_wall") ?? world.scoreboard.addObjective("item_count:polished_blackstone_brick_wall");
const objPolishedBlackstoneBricks = world.scoreboard.getObjective("item_count:polished_blackstone_bricks") ?? world.scoreboard.addObjective("item_count:polished_blackstone_bricks");
const objPolishedBlackstoneButton = world.scoreboard.getObjective("item_count:polished_blackstone_button") ?? world.scoreboard.addObjective("item_count:polished_blackstone_button");
const objPolishedBlackstonePressurePlate = world.scoreboard.getObjective("item_count:polished_blackstone_pressure_plate") ?? world.scoreboard.addObjective("item_count:polished_blackstone_pressure_plate");
const objPolishedBlackstoneSlab = world.scoreboard.getObjective("item_count:polished_blackstone_slab") ?? world.scoreboard.addObjective("item_count:polished_blackstone_slab");
const objPolishedBlackstoneStairs = world.scoreboard.getObjective("item_count:polished_blackstone_stairs") ?? world.scoreboard.addObjective("item_count:polished_blackstone_stairs");
const objPolishedBlackstoneWall = world.scoreboard.getObjective("item_count:polished_blackstone_wall") ?? world.scoreboard.addObjective("item_count:polished_blackstone_wall");
const objPolishedDeepslate = world.scoreboard.getObjective("item_count:polished_deepslate") ?? world.scoreboard.addObjective("item_count:polished_deepslate");
const objPolishedDeepslateSlab = world.scoreboard.getObjective("item_count:polished_deepslate_slab") ?? world.scoreboard.addObjective("item_count:polished_deepslate_slab");
const objPolishedDeepslateStairs = world.scoreboard.getObjective("item_count:polished_deepslate_stairs") ?? world.scoreboard.addObjective("item_count:polished_deepslate_stairs");
const objPolishedDeepslateWall = world.scoreboard.getObjective("item_count:polished_deepslate_wall") ?? world.scoreboard.addObjective("item_count:polished_deepslate_wall");
const objPolishedDiorite = world.scoreboard.getObjective("item_count:polished_diorite") ?? world.scoreboard.addObjective("item_count:polished_diorite");
const objPolishedDioriteSlab = world.scoreboard.getObjective("item_count:polished_diorite_slab") ?? world.scoreboard.addObjective("item_count:polished_diorite_slab");
const objPolishedDioriteStairs = world.scoreboard.getObjective("item_count:polished_diorite_stairs") ?? world.scoreboard.addObjective("item_count:polished_diorite_stairs");
const objPolishedGranite = world.scoreboard.getObjective("item_count:polished_granite") ?? world.scoreboard.addObjective("item_count:polished_granite");
const objPolishedGraniteSlab = world.scoreboard.getObjective("item_count:polished_granite_slab") ?? world.scoreboard.addObjective("item_count:polished_granite_slab");
const objPolishedGraniteStairs = world.scoreboard.getObjective("item_count:polished_granite_stairs") ?? world.scoreboard.addObjective("item_count:polished_granite_stairs");
const objPolishedTuff = world.scoreboard.getObjective("item_count:polished_tuff") ?? world.scoreboard.addObjective("item_count:polished_tuff");
const objPolishedTuffSlab = world.scoreboard.getObjective("item_count:polished_tuff_slab") ?? world.scoreboard.addObjective("item_count:polished_tuff_slab");
const objPolishedTuffStairs = world.scoreboard.getObjective("item_count:polished_tuff_stairs") ?? world.scoreboard.addObjective("item_count:polished_tuff_stairs");
const objPolishedTuffWall = world.scoreboard.getObjective("item_count:polished_tuff_wall") ?? world.scoreboard.addObjective("item_count:polished_tuff_wall");
const objPoppedChorusFruit = world.scoreboard.getObjective("item_count:popped_chorus_fruit") ?? world.scoreboard.addObjective("item_count:popped_chorus_fruit");
const objPoppy = world.scoreboard.getObjective("item_count:poppy") ?? world.scoreboard.addObjective("item_count:poppy");
const objPorkchop = world.scoreboard.getObjective("item_count:porkchop") ?? world.scoreboard.addObjective("item_count:porkchop");
const objPotato = world.scoreboard.getObjective("item_count:potato") ?? world.scoreboard.addObjective("item_count:potato");
const objPotion = world.scoreboard.getObjective("item_count:potion") ?? world.scoreboard.addObjective("item_count:potion");
const objPowderSnowBucket = world.scoreboard.getObjective("item_count:powder_snow_bucket") ?? world.scoreboard.addObjective("item_count:powder_snow_bucket");
const objPrismarine = world.scoreboard.getObjective("item_count:prismarine") ?? world.scoreboard.addObjective("item_count:prismarine");
const objPrismarineBrickSlab = world.scoreboard.getObjective("item_count:prismarine_brick_slab") ?? world.scoreboard.addObjective("item_count:prismarine_brick_slab");
const objPrismarineBricks = world.scoreboard.getObjective("item_count:prismarine_bricks") ?? world.scoreboard.addObjective("item_count:prismarine_bricks");
const objPrismarineBricksStairs = world.scoreboard.getObjective("item_count:prismarine_bricks_stairs") ?? world.scoreboard.addObjective("item_count:prismarine_bricks_stairs");
const objPrismarineCrystals = world.scoreboard.getObjective("item_count:prismarine_crystals") ?? world.scoreboard.addObjective("item_count:prismarine_crystals");
const objPrismarineShard = world.scoreboard.getObjective("item_count:prismarine_shard") ?? world.scoreboard.addObjective("item_count:prismarine_shard");
const objPrismarineSlab = world.scoreboard.getObjective("item_count:prismarine_slab") ?? world.scoreboard.addObjective("item_count:prismarine_slab");
const objPrismarineStairs = world.scoreboard.getObjective("item_count:prismarine_stairs") ?? world.scoreboard.addObjective("item_count:prismarine_stairs");
const objPrismarineWall = world.scoreboard.getObjective("item_count:prismarine_wall") ?? world.scoreboard.addObjective("item_count:prismarine_wall");
const objPrizePotterySherd = world.scoreboard.getObjective("item_count:prize_pottery_sherd") ?? world.scoreboard.addObjective("item_count:prize_pottery_sherd");
const objPufferfish = world.scoreboard.getObjective("item_count:pufferfish") ?? world.scoreboard.addObjective("item_count:pufferfish");
const objPufferfishBucket = world.scoreboard.getObjective("item_count:pufferfish_bucket") ?? world.scoreboard.addObjective("item_count:pufferfish_bucket");
const objPufferfishSpawnEgg = world.scoreboard.getObjective("item_count:pufferfish_spawn_egg") ?? world.scoreboard.addObjective("item_count:pufferfish_spawn_egg");
const objPumpkin = world.scoreboard.getObjective("item_count:pumpkin") ?? world.scoreboard.addObjective("item_count:pumpkin");
const objPumpkinPie = world.scoreboard.getObjective("item_count:pumpkin_pie") ?? world.scoreboard.addObjective("item_count:pumpkin_pie");
const objPumpkinSeeds = world.scoreboard.getObjective("item_count:pumpkin_seeds") ?? world.scoreboard.addObjective("item_count:pumpkin_seeds");
const objPurpleBundle = world.scoreboard.getObjective("item_count:purple_bundle") ?? world.scoreboard.addObjective("item_count:purple_bundle");
const objPurpleCandle = world.scoreboard.getObjective("item_count:purple_candle") ?? world.scoreboard.addObjective("item_count:purple_candle");
const objPurpleCarpet = world.scoreboard.getObjective("item_count:purple_carpet") ?? world.scoreboard.addObjective("item_count:purple_carpet");
const objPurpleConcrete = world.scoreboard.getObjective("item_count:purple_concrete") ?? world.scoreboard.addObjective("item_count:purple_concrete");
const objPurpleConcretePowder = world.scoreboard.getObjective("item_count:purple_concrete_powder") ?? world.scoreboard.addObjective("item_count:purple_concrete_powder");
const objPurpleDye = world.scoreboard.getObjective("item_count:purple_dye") ?? world.scoreboard.addObjective("item_count:purple_dye");
const objPurpleGlazedTerracotta = world.scoreboard.getObjective("item_count:purple_glazed_terracotta") ?? world.scoreboard.addObjective("item_count:purple_glazed_terracotta");
const objPurpleHarness = world.scoreboard.getObjective("item_count:purple_harness") ?? world.scoreboard.addObjective("item_count:purple_harness");
const objPurpleShulkerBox = world.scoreboard.getObjective("item_count:purple_shulker_box") ?? world.scoreboard.addObjective("item_count:purple_shulker_box");
const objPurpleStainedGlass = world.scoreboard.getObjective("item_count:purple_stained_glass") ?? world.scoreboard.addObjective("item_count:purple_stained_glass");
const objPurpleStainedGlassPane = world.scoreboard.getObjective("item_count:purple_stained_glass_pane") ?? world.scoreboard.addObjective("item_count:purple_stained_glass_pane");
const objPurpleTerracotta = world.scoreboard.getObjective("item_count:purple_terracotta") ?? world.scoreboard.addObjective("item_count:purple_terracotta");
const objPurpleWool = world.scoreboard.getObjective("item_count:purple_wool") ?? world.scoreboard.addObjective("item_count:purple_wool");
const objPurpurBlock = world.scoreboard.getObjective("item_count:purpur_block") ?? world.scoreboard.addObjective("item_count:purpur_block");
const objPurpurPillar = world.scoreboard.getObjective("item_count:purpur_pillar") ?? world.scoreboard.addObjective("item_count:purpur_pillar");
const objPurpurSlab = world.scoreboard.getObjective("item_count:purpur_slab") ?? world.scoreboard.addObjective("item_count:purpur_slab");
const objPurpurStairs = world.scoreboard.getObjective("item_count:purpur_stairs") ?? world.scoreboard.addObjective("item_count:purpur_stairs");
const objQuartz = world.scoreboard.getObjective("item_count:quartz") ?? world.scoreboard.addObjective("item_count:quartz");
const objQuartzBlock = world.scoreboard.getObjective("item_count:quartz_block") ?? world.scoreboard.addObjective("item_count:quartz_block");
const objQuartzBricks = world.scoreboard.getObjective("item_count:quartz_bricks") ?? world.scoreboard.addObjective("item_count:quartz_bricks");
const objQuartzOre = world.scoreboard.getObjective("item_count:quartz_ore") ?? world.scoreboard.addObjective("item_count:quartz_ore");
const objQuartzPillar = world.scoreboard.getObjective("item_count:quartz_pillar") ?? world.scoreboard.addObjective("item_count:quartz_pillar");
const objQuartzSlab = world.scoreboard.getObjective("item_count:quartz_slab") ?? world.scoreboard.addObjective("item_count:quartz_slab");
const objQuartzStairs = world.scoreboard.getObjective("item_count:quartz_stairs") ?? world.scoreboard.addObjective("item_count:quartz_stairs");
const objRabbit = world.scoreboard.getObjective("item_count:rabbit") ?? world.scoreboard.addObjective("item_count:rabbit");
const objRabbitFoot = world.scoreboard.getObjective("item_count:rabbit_foot") ?? world.scoreboard.addObjective("item_count:rabbit_foot");
const objRabbitHide = world.scoreboard.getObjective("item_count:rabbit_hide") ?? world.scoreboard.addObjective("item_count:rabbit_hide");
const objRabbitSpawnEgg = world.scoreboard.getObjective("item_count:rabbit_spawn_egg") ?? world.scoreboard.addObjective("item_count:rabbit_spawn_egg");
const objRabbitStew = world.scoreboard.getObjective("item_count:rabbit_stew") ?? world.scoreboard.addObjective("item_count:rabbit_stew");
const objRail = world.scoreboard.getObjective("item_count:rail") ?? world.scoreboard.addObjective("item_count:rail");
const objRaiserArmorTrimSmithingTemplate = world.scoreboard.getObjective("item_count:raiser_armor_trim_smithing_template") ?? world.scoreboard.addObjective("item_count:raiser_armor_trim_smithing_template");
const objRavagerSpawnEgg = world.scoreboard.getObjective("item_count:ravager_spawn_egg") ?? world.scoreboard.addObjective("item_count:ravager_spawn_egg");
const objRawCopper = world.scoreboard.getObjective("item_count:raw_copper") ?? world.scoreboard.addObjective("item_count:raw_copper");
const objRawCopperBlock = world.scoreboard.getObjective("item_count:raw_copper_block") ?? world.scoreboard.addObjective("item_count:raw_copper_block");
const objRawGold = world.scoreboard.getObjective("item_count:raw_gold") ?? world.scoreboard.addObjective("item_count:raw_gold");
const objRawGoldBlock = world.scoreboard.getObjective("item_count:raw_gold_block") ?? world.scoreboard.addObjective("item_count:raw_gold_block");
const objRawIron = world.scoreboard.getObjective("item_count:raw_iron") ?? world.scoreboard.addObjective("item_count:raw_iron");
const objRawIronBlock = world.scoreboard.getObjective("item_count:raw_iron_block") ?? world.scoreboard.addObjective("item_count:raw_iron_block");
const objRecoveryCompass = world.scoreboard.getObjective("item_count:recovery_compass") ?? world.scoreboard.addObjective("item_count:recovery_compass");
const objRedBundle = world.scoreboard.getObjective("item_count:red_bundle") ?? world.scoreboard.addObjective("item_count:red_bundle");
const objRedCandle = world.scoreboard.getObjective("item_count:red_candle") ?? world.scoreboard.addObjective("item_count:red_candle");
const objRedCarpet = world.scoreboard.getObjective("item_count:red_carpet") ?? world.scoreboard.addObjective("item_count:red_carpet");
const objRedConcrete = world.scoreboard.getObjective("item_count:red_concrete") ?? world.scoreboard.addObjective("item_count:red_concrete");
const objRedConcretePowder = world.scoreboard.getObjective("item_count:red_concrete_powder") ?? world.scoreboard.addObjective("item_count:red_concrete_powder");
const objRedDye = world.scoreboard.getObjective("item_count:red_dye") ?? world.scoreboard.addObjective("item_count:red_dye");
const objRedGlazedTerracotta = world.scoreboard.getObjective("item_count:red_glazed_terracotta") ?? world.scoreboard.addObjective("item_count:red_glazed_terracotta");
const objRedHarness = world.scoreboard.getObjective("item_count:red_harness") ?? world.scoreboard.addObjective("item_count:red_harness");
const objRedMushroom = world.scoreboard.getObjective("item_count:red_mushroom") ?? world.scoreboard.addObjective("item_count:red_mushroom");
const objRedMushroomBlock = world.scoreboard.getObjective("item_count:red_mushroom_block") ?? world.scoreboard.addObjective("item_count:red_mushroom_block");
const objRedNetherBrick = world.scoreboard.getObjective("item_count:red_nether_brick") ?? world.scoreboard.addObjective("item_count:red_nether_brick");
const objRedNetherBrickSlab = world.scoreboard.getObjective("item_count:red_nether_brick_slab") ?? world.scoreboard.addObjective("item_count:red_nether_brick_slab");
const objRedNetherBrickStairs = world.scoreboard.getObjective("item_count:red_nether_brick_stairs") ?? world.scoreboard.addObjective("item_count:red_nether_brick_stairs");
const objRedNetherBrickWall = world.scoreboard.getObjective("item_count:red_nether_brick_wall") ?? world.scoreboard.addObjective("item_count:red_nether_brick_wall");
const objRedSand = world.scoreboard.getObjective("item_count:red_sand") ?? world.scoreboard.addObjective("item_count:red_sand");
const objRedSandstone = world.scoreboard.getObjective("item_count:red_sandstone") ?? world.scoreboard.addObjective("item_count:red_sandstone");
const objRedSandstoneSlab = world.scoreboard.getObjective("item_count:red_sandstone_slab") ?? world.scoreboard.addObjective("item_count:red_sandstone_slab");
const objRedSandstoneStairs = world.scoreboard.getObjective("item_count:red_sandstone_stairs") ?? world.scoreboard.addObjective("item_count:red_sandstone_stairs");
const objRedSandstoneWall = world.scoreboard.getObjective("item_count:red_sandstone_wall") ?? world.scoreboard.addObjective("item_count:red_sandstone_wall");
const objRedShulkerBox = world.scoreboard.getObjective("item_count:red_shulker_box") ?? world.scoreboard.addObjective("item_count:red_shulker_box");
const objRedStainedGlass = world.scoreboard.getObjective("item_count:red_stained_glass") ?? world.scoreboard.addObjective("item_count:red_stained_glass");
const objRedStainedGlassPane = world.scoreboard.getObjective("item_count:red_stained_glass_pane") ?? world.scoreboard.addObjective("item_count:red_stained_glass_pane");
const objRedTerracotta = world.scoreboard.getObjective("item_count:red_terracotta") ?? world.scoreboard.addObjective("item_count:red_terracotta");
const objRedTulip = world.scoreboard.getObjective("item_count:red_tulip") ?? world.scoreboard.addObjective("item_count:red_tulip");
const objRedWool = world.scoreboard.getObjective("item_count:red_wool") ?? world.scoreboard.addObjective("item_count:red_wool");
const objRedstone = world.scoreboard.getObjective("item_count:redstone") ?? world.scoreboard.addObjective("item_count:redstone");
const objRedstoneBlock = world.scoreboard.getObjective("item_count:redstone_block") ?? world.scoreboard.addObjective("item_count:redstone_block");
const objRedstoneLamp = world.scoreboard.getObjective("item_count:redstone_lamp") ?? world.scoreboard.addObjective("item_count:redstone_lamp");
const objRedstoneOre = world.scoreboard.getObjective("item_count:redstone_ore") ?? world.scoreboard.addObjective("item_count:redstone_ore");
const objRedstoneTorch = world.scoreboard.getObjective("item_count:redstone_torch") ?? world.scoreboard.addObjective("item_count:redstone_torch");
const objReinforcedDeepslate = world.scoreboard.getObjective("item_count:reinforced_deepslate") ?? world.scoreboard.addObjective("item_count:reinforced_deepslate");
const objRepeater = world.scoreboard.getObjective("item_count:repeater") ?? world.scoreboard.addObjective("item_count:repeater");
const objRepeatingCommandBlock = world.scoreboard.getObjective("item_count:repeating_command_block") ?? world.scoreboard.addObjective("item_count:repeating_command_block");
const objResinBlock = world.scoreboard.getObjective("item_count:resin_block") ?? world.scoreboard.addObjective("item_count:resin_block");
const objResinBrick = world.scoreboard.getObjective("item_count:resin_brick") ?? world.scoreboard.addObjective("item_count:resin_brick");
const objResinBrickSlab = world.scoreboard.getObjective("item_count:resin_brick_slab") ?? world.scoreboard.addObjective("item_count:resin_brick_slab");
const objResinBrickStairs = world.scoreboard.getObjective("item_count:resin_brick_stairs") ?? world.scoreboard.addObjective("item_count:resin_brick_stairs");
const objResinBrickWall = world.scoreboard.getObjective("item_count:resin_brick_wall") ?? world.scoreboard.addObjective("item_count:resin_brick_wall");
const objResinBricks = world.scoreboard.getObjective("item_count:resin_bricks") ?? world.scoreboard.addObjective("item_count:resin_bricks");
const objResinClump = world.scoreboard.getObjective("item_count:resin_clump") ?? world.scoreboard.addObjective("item_count:resin_clump");
const objRespawnAnchor = world.scoreboard.getObjective("item_count:respawn_anchor") ?? world.scoreboard.addObjective("item_count:respawn_anchor");
const objRibArmorTrimSmithingTemplate = world.scoreboard.getObjective("item_count:rib_armor_trim_smithing_template") ?? world.scoreboard.addObjective("item_count:rib_armor_trim_smithing_template");
const objRoseBush = world.scoreboard.getObjective("item_count:rose_bush") ?? world.scoreboard.addObjective("item_count:rose_bush");
const objRottenFlesh = world.scoreboard.getObjective("item_count:rotten_flesh") ?? world.scoreboard.addObjective("item_count:rotten_flesh");
const objSaddle = world.scoreboard.getObjective("item_count:saddle") ?? world.scoreboard.addObjective("item_count:saddle");
const objSalmon = world.scoreboard.getObjective("item_count:salmon") ?? world.scoreboard.addObjective("item_count:salmon");
const objSalmonBucket = world.scoreboard.getObjective("item_count:salmon_bucket") ?? world.scoreboard.addObjective("item_count:salmon_bucket");
const objSalmonSpawnEgg = world.scoreboard.getObjective("item_count:salmon_spawn_egg") ?? world.scoreboard.addObjective("item_count:salmon_spawn_egg");
const objSand = world.scoreboard.getObjective("item_count:sand") ?? world.scoreboard.addObjective("item_count:sand");
const objSandstone = world.scoreboard.getObjective("item_count:sandstone") ?? world.scoreboard.addObjective("item_count:sandstone");
const objSandstoneSlab = world.scoreboard.getObjective("item_count:sandstone_slab") ?? world.scoreboard.addObjective("item_count:sandstone_slab");
const objSandstoneStairs = world.scoreboard.getObjective("item_count:sandstone_stairs") ?? world.scoreboard.addObjective("item_count:sandstone_stairs");
const objSandstoneWall = world.scoreboard.getObjective("item_count:sandstone_wall") ?? world.scoreboard.addObjective("item_count:sandstone_wall");
const objScaffolding = world.scoreboard.getObjective("item_count:scaffolding") ?? world.scoreboard.addObjective("item_count:scaffolding");
const objScrapePotterySherd = world.scoreboard.getObjective("item_count:scrape_pottery_sherd") ?? world.scoreboard.addObjective("item_count:scrape_pottery_sherd");
const objSculk = world.scoreboard.getObjective("item_count:sculk") ?? world.scoreboard.addObjective("item_count:sculk");
const objSculkCatalyst = world.scoreboard.getObjective("item_count:sculk_catalyst") ?? world.scoreboard.addObjective("item_count:sculk_catalyst");
const objSculkSensor = world.scoreboard.getObjective("item_count:sculk_sensor") ?? world.scoreboard.addObjective("item_count:sculk_sensor");
const objSculkShrieker = world.scoreboard.getObjective("item_count:sculk_shrieker") ?? world.scoreboard.addObjective("item_count:sculk_shrieker");
const objSculkVein = world.scoreboard.getObjective("item_count:sculk_vein") ?? world.scoreboard.addObjective("item_count:sculk_vein");
const objSeaLantern = world.scoreboard.getObjective("item_count:sea_lantern") ?? world.scoreboard.addObjective("item_count:sea_lantern");
const objSeaPickle = world.scoreboard.getObjective("item_count:sea_pickle") ?? world.scoreboard.addObjective("item_count:sea_pickle");
const objSeagrass = world.scoreboard.getObjective("item_count:seagrass") ?? world.scoreboard.addObjective("item_count:seagrass");
const objSentryArmorTrimSmithingTemplate = world.scoreboard.getObjective("item_count:sentry_armor_trim_smithing_template") ?? world.scoreboard.addObjective("item_count:sentry_armor_trim_smithing_template");
const objShaperArmorTrimSmithingTemplate = world.scoreboard.getObjective("item_count:shaper_armor_trim_smithing_template") ?? world.scoreboard.addObjective("item_count:shaper_armor_trim_smithing_template");
const objSheafPotterySherd = world.scoreboard.getObjective("item_count:sheaf_pottery_sherd") ?? world.scoreboard.addObjective("item_count:sheaf_pottery_sherd");
const objShears = world.scoreboard.getObjective("item_count:shears") ?? world.scoreboard.addObjective("item_count:shears");
const objSheepSpawnEgg = world.scoreboard.getObjective("item_count:sheep_spawn_egg") ?? world.scoreboard.addObjective("item_count:sheep_spawn_egg");
const objShelterPotterySherd = world.scoreboard.getObjective("item_count:shelter_pottery_sherd") ?? world.scoreboard.addObjective("item_count:shelter_pottery_sherd");
const objShield = world.scoreboard.getObjective("item_count:shield") ?? world.scoreboard.addObjective("item_count:shield");
const objShortDryGrass = world.scoreboard.getObjective("item_count:short_dry_grass") ?? world.scoreboard.addObjective("item_count:short_dry_grass");
const objShortGrass = world.scoreboard.getObjective("item_count:short_grass") ?? world.scoreboard.addObjective("item_count:short_grass");
const objShroomlight = world.scoreboard.getObjective("item_count:shroomlight") ?? world.scoreboard.addObjective("item_count:shroomlight");
const objShulkerShell = world.scoreboard.getObjective("item_count:shulker_shell") ?? world.scoreboard.addObjective("item_count:shulker_shell");
const objShulkerSpawnEgg = world.scoreboard.getObjective("item_count:shulker_spawn_egg") ?? world.scoreboard.addObjective("item_count:shulker_spawn_egg");
const objSilenceArmorTrimSmithingTemplate = world.scoreboard.getObjective("item_count:silence_armor_trim_smithing_template") ?? world.scoreboard.addObjective("item_count:silence_armor_trim_smithing_template");
const objSilverGlazedTerracotta = world.scoreboard.getObjective("item_count:silver_glazed_terracotta") ?? world.scoreboard.addObjective("item_count:silver_glazed_terracotta");
const objSilverfishSpawnEgg = world.scoreboard.getObjective("item_count:silverfish_spawn_egg") ?? world.scoreboard.addObjective("item_count:silverfish_spawn_egg");
const objSkeletonHorseSpawnEgg = world.scoreboard.getObjective("item_count:skeleton_horse_spawn_egg") ?? world.scoreboard.addObjective("item_count:skeleton_horse_spawn_egg");
const objSkeletonSkull = world.scoreboard.getObjective("item_count:skeleton_skull") ?? world.scoreboard.addObjective("item_count:skeleton_skull");
const objSkeletonSpawnEgg = world.scoreboard.getObjective("item_count:skeleton_spawn_egg") ?? world.scoreboard.addObjective("item_count:skeleton_spawn_egg");
const objSkullBannerPattern = world.scoreboard.getObjective("item_count:skull_banner_pattern") ?? world.scoreboard.addObjective("item_count:skull_banner_pattern");
const objSkullPotterySherd = world.scoreboard.getObjective("item_count:skull_pottery_sherd") ?? world.scoreboard.addObjective("item_count:skull_pottery_sherd");
const objSlime = world.scoreboard.getObjective("item_count:slime") ?? world.scoreboard.addObjective("item_count:slime");
const objSlimeBall = world.scoreboard.getObjective("item_count:slime_ball") ?? world.scoreboard.addObjective("item_count:slime_ball");
const objSlimeSpawnEgg = world.scoreboard.getObjective("item_count:slime_spawn_egg") ?? world.scoreboard.addObjective("item_count:slime_spawn_egg");
const objSmallAmethystBud = world.scoreboard.getObjective("item_count:small_amethyst_bud") ?? world.scoreboard.addObjective("item_count:small_amethyst_bud");
const objSmallDripleafBlock = world.scoreboard.getObjective("item_count:small_dripleaf_block") ?? world.scoreboard.addObjective("item_count:small_dripleaf_block");
const objSmithingTable = world.scoreboard.getObjective("item_count:smithing_table") ?? world.scoreboard.addObjective("item_count:smithing_table");
const objSmoker = world.scoreboard.getObjective("item_count:smoker") ?? world.scoreboard.addObjective("item_count:smoker");
const objSmoothBasalt = world.scoreboard.getObjective("item_count:smooth_basalt") ?? world.scoreboard.addObjective("item_count:smooth_basalt");
const objSmoothQuartz = world.scoreboard.getObjective("item_count:smooth_quartz") ?? world.scoreboard.addObjective("item_count:smooth_quartz");
const objSmoothQuartzSlab = world.scoreboard.getObjective("item_count:smooth_quartz_slab") ?? world.scoreboard.addObjective("item_count:smooth_quartz_slab");
const objSmoothQuartzStairs = world.scoreboard.getObjective("item_count:smooth_quartz_stairs") ?? world.scoreboard.addObjective("item_count:smooth_quartz_stairs");
const objSmoothRedSandstone = world.scoreboard.getObjective("item_count:smooth_red_sandstone") ?? world.scoreboard.addObjective("item_count:smooth_red_sandstone");
const objSmoothRedSandstoneSlab = world.scoreboard.getObjective("item_count:smooth_red_sandstone_slab") ?? world.scoreboard.addObjective("item_count:smooth_red_sandstone_slab");
const objSmoothRedSandstoneStairs = world.scoreboard.getObjective("item_count:smooth_red_sandstone_stairs") ?? world.scoreboard.addObjective("item_count:smooth_red_sandstone_stairs");
const objSmoothSandstone = world.scoreboard.getObjective("item_count:smooth_sandstone") ?? world.scoreboard.addObjective("item_count:smooth_sandstone");
const objSmoothSandstoneSlab = world.scoreboard.getObjective("item_count:smooth_sandstone_slab") ?? world.scoreboard.addObjective("item_count:smooth_sandstone_slab");
const objSmoothSandstoneStairs = world.scoreboard.getObjective("item_count:smooth_sandstone_stairs") ?? world.scoreboard.addObjective("item_count:smooth_sandstone_stairs");
const objSmoothStone = world.scoreboard.getObjective("item_count:smooth_stone") ?? world.scoreboard.addObjective("item_count:smooth_stone");
const objSmoothStoneSlab = world.scoreboard.getObjective("item_count:smooth_stone_slab") ?? world.scoreboard.addObjective("item_count:smooth_stone_slab");
const objSnifferEgg = world.scoreboard.getObjective("item_count:sniffer_egg") ?? world.scoreboard.addObjective("item_count:sniffer_egg");
const objSnifferSpawnEgg = world.scoreboard.getObjective("item_count:sniffer_spawn_egg") ?? world.scoreboard.addObjective("item_count:sniffer_spawn_egg");
const objSnortPotterySherd = world.scoreboard.getObjective("item_count:snort_pottery_sherd") ?? world.scoreboard.addObjective("item_count:snort_pottery_sherd");
const objSnoutArmorTrimSmithingTemplate = world.scoreboard.getObjective("item_count:snout_armor_trim_smithing_template") ?? world.scoreboard.addObjective("item_count:snout_armor_trim_smithing_template");
const objSnow = world.scoreboard.getObjective("item_count:snow") ?? world.scoreboard.addObjective("item_count:snow");
const objSnowGolemSpawnEgg = world.scoreboard.getObjective("item_count:snow_golem_spawn_egg") ?? world.scoreboard.addObjective("item_count:snow_golem_spawn_egg");
const objSnowLayer = world.scoreboard.getObjective("item_count:snow_layer") ?? world.scoreboard.addObjective("item_count:snow_layer");
const objSnowball = world.scoreboard.getObjective("item_count:snowball") ?? world.scoreboard.addObjective("item_count:snowball");
const objSoulCampfire = world.scoreboard.getObjective("item_count:soul_campfire") ?? world.scoreboard.addObjective("item_count:soul_campfire");
const objSoulLantern = world.scoreboard.getObjective("item_count:soul_lantern") ?? world.scoreboard.addObjective("item_count:soul_lantern");
const objSoulSand = world.scoreboard.getObjective("item_count:soul_sand") ?? world.scoreboard.addObjective("item_count:soul_sand");
const objSoulSoil = world.scoreboard.getObjective("item_count:soul_soil") ?? world.scoreboard.addObjective("item_count:soul_soil");
const objSoulTorch = world.scoreboard.getObjective("item_count:soul_torch") ?? world.scoreboard.addObjective("item_count:soul_torch");
const objSpiderEye = world.scoreboard.getObjective("item_count:spider_eye") ?? world.scoreboard.addObjective("item_count:spider_eye");
const objSpiderSpawnEgg = world.scoreboard.getObjective("item_count:spider_spawn_egg") ?? world.scoreboard.addObjective("item_count:spider_spawn_egg");
const objSpireArmorTrimSmithingTemplate = world.scoreboard.getObjective("item_count:spire_armor_trim_smithing_template") ?? world.scoreboard.addObjective("item_count:spire_armor_trim_smithing_template");
const objSplashPotion = world.scoreboard.getObjective("item_count:splash_potion") ?? world.scoreboard.addObjective("item_count:splash_potion");
const objSponge = world.scoreboard.getObjective("item_count:sponge") ?? world.scoreboard.addObjective("item_count:sponge");
const objSporeBlossom = world.scoreboard.getObjective("item_count:spore_blossom") ?? world.scoreboard.addObjective("item_count:spore_blossom");
const objSpruceBoat = world.scoreboard.getObjective("item_count:spruce_boat") ?? world.scoreboard.addObjective("item_count:spruce_boat");
const objSpruceButton = world.scoreboard.getObjective("item_count:spruce_button") ?? world.scoreboard.addObjective("item_count:spruce_button");
const objSpruceChestBoat = world.scoreboard.getObjective("item_count:spruce_chest_boat") ?? world.scoreboard.addObjective("item_count:spruce_chest_boat");
const objSpruceDoor = world.scoreboard.getObjective("item_count:spruce_door") ?? world.scoreboard.addObjective("item_count:spruce_door");
const objSpruceFence = world.scoreboard.getObjective("item_count:spruce_fence") ?? world.scoreboard.addObjective("item_count:spruce_fence");
const objSpruceFenceGate = world.scoreboard.getObjective("item_count:spruce_fence_gate") ?? world.scoreboard.addObjective("item_count:spruce_fence_gate");
const objSpruceHangingSign = world.scoreboard.getObjective("item_count:spruce_hanging_sign") ?? world.scoreboard.addObjective("item_count:spruce_hanging_sign");
const objSpruceLeaves = world.scoreboard.getObjective("item_count:spruce_leaves") ?? world.scoreboard.addObjective("item_count:spruce_leaves");
const objSpruceLog = world.scoreboard.getObjective("item_count:spruce_log") ?? world.scoreboard.addObjective("item_count:spruce_log");
const objSprucePlanks = world.scoreboard.getObjective("item_count:spruce_planks") ?? world.scoreboard.addObjective("item_count:spruce_planks");
const objSprucePressurePlate = world.scoreboard.getObjective("item_count:spruce_pressure_plate") ?? world.scoreboard.addObjective("item_count:spruce_pressure_plate");
const objSpruceSapling = world.scoreboard.getObjective("item_count:spruce_sapling") ?? world.scoreboard.addObjective("item_count:spruce_sapling");
const objSpruceSign = world.scoreboard.getObjective("item_count:spruce_sign") ?? world.scoreboard.addObjective("item_count:spruce_sign");
const objSpruceSlab = world.scoreboard.getObjective("item_count:spruce_slab") ?? world.scoreboard.addObjective("item_count:spruce_slab");
const objSpruceStairs = world.scoreboard.getObjective("item_count:spruce_stairs") ?? world.scoreboard.addObjective("item_count:spruce_stairs");
const objSpruceTrapdoor = world.scoreboard.getObjective("item_count:spruce_trapdoor") ?? world.scoreboard.addObjective("item_count:spruce_trapdoor");
const objSpruceWood = world.scoreboard.getObjective("item_count:spruce_wood") ?? world.scoreboard.addObjective("item_count:spruce_wood");
const objSpyglass = world.scoreboard.getObjective("item_count:spyglass") ?? world.scoreboard.addObjective("item_count:spyglass");
const objSquidSpawnEgg = world.scoreboard.getObjective("item_count:squid_spawn_egg") ?? world.scoreboard.addObjective("item_count:squid_spawn_egg");
const objStick = world.scoreboard.getObjective("item_count:stick") ?? world.scoreboard.addObjective("item_count:stick");
const objStickyPiston = world.scoreboard.getObjective("item_count:sticky_piston") ?? world.scoreboard.addObjective("item_count:sticky_piston");
const objStone = world.scoreboard.getObjective("item_count:stone") ?? world.scoreboard.addObjective("item_count:stone");
const objStoneAxe = world.scoreboard.getObjective("item_count:stone_axe") ?? world.scoreboard.addObjective("item_count:stone_axe");
const objStoneBrickSlab = world.scoreboard.getObjective("item_count:stone_brick_slab") ?? world.scoreboard.addObjective("item_count:stone_brick_slab");
const objStoneBrickStairs = world.scoreboard.getObjective("item_count:stone_brick_stairs") ?? world.scoreboard.addObjective("item_count:stone_brick_stairs");
const objStoneBrickWall = world.scoreboard.getObjective("item_count:stone_brick_wall") ?? world.scoreboard.addObjective("item_count:stone_brick_wall");
const objStoneBricks = world.scoreboard.getObjective("item_count:stone_bricks") ?? world.scoreboard.addObjective("item_count:stone_bricks");
const objStoneButton = world.scoreboard.getObjective("item_count:stone_button") ?? world.scoreboard.addObjective("item_count:stone_button");
const objStoneHoe = world.scoreboard.getObjective("item_count:stone_hoe") ?? world.scoreboard.addObjective("item_count:stone_hoe");
const objStonePickaxe = world.scoreboard.getObjective("item_count:stone_pickaxe") ?? world.scoreboard.addObjective("item_count:stone_pickaxe");
const objStonePressurePlate = world.scoreboard.getObjective("item_count:stone_pressure_plate") ?? world.scoreboard.addObjective("item_count:stone_pressure_plate");
const objStoneShovel = world.scoreboard.getObjective("item_count:stone_shovel") ?? world.scoreboard.addObjective("item_count:stone_shovel");
const objStoneStairs = world.scoreboard.getObjective("item_count:stone_stairs") ?? world.scoreboard.addObjective("item_count:stone_stairs");
const objStoneSword = world.scoreboard.getObjective("item_count:stone_sword") ?? world.scoreboard.addObjective("item_count:stone_sword");
const objStonecutterBlock = world.scoreboard.getObjective("item_count:stonecutter_block") ?? world.scoreboard.addObjective("item_count:stonecutter_block");
const objStraySpawnEgg = world.scoreboard.getObjective("item_count:stray_spawn_egg") ?? world.scoreboard.addObjective("item_count:stray_spawn_egg");
const objStriderSpawnEgg = world.scoreboard.getObjective("item_count:strider_spawn_egg") ?? world.scoreboard.addObjective("item_count:strider_spawn_egg");
const objString = world.scoreboard.getObjective("item_count:string") ?? world.scoreboard.addObjective("item_count:string");
const objStrippedAcaciaLog = world.scoreboard.getObjective("item_count:stripped_acacia_log") ?? world.scoreboard.addObjective("item_count:stripped_acacia_log");
const objStrippedAcaciaWood = world.scoreboard.getObjective("item_count:stripped_acacia_wood") ?? world.scoreboard.addObjective("item_count:stripped_acacia_wood");
const objStrippedBambooBlock = world.scoreboard.getObjective("item_count:stripped_bamboo_block") ?? world.scoreboard.addObjective("item_count:stripped_bamboo_block");
const objStrippedBirchLog = world.scoreboard.getObjective("item_count:stripped_birch_log") ?? world.scoreboard.addObjective("item_count:stripped_birch_log");
const objStrippedBirchWood = world.scoreboard.getObjective("item_count:stripped_birch_wood") ?? world.scoreboard.addObjective("item_count:stripped_birch_wood");
const objStrippedCherryLog = world.scoreboard.getObjective("item_count:stripped_cherry_log") ?? world.scoreboard.addObjective("item_count:stripped_cherry_log");
const objStrippedCherryWood = world.scoreboard.getObjective("item_count:stripped_cherry_wood") ?? world.scoreboard.addObjective("item_count:stripped_cherry_wood");
const objStrippedCrimsonHyphae = world.scoreboard.getObjective("item_count:stripped_crimson_hyphae") ?? world.scoreboard.addObjective("item_count:stripped_crimson_hyphae");
const objStrippedCrimsonStem = world.scoreboard.getObjective("item_count:stripped_crimson_stem") ?? world.scoreboard.addObjective("item_count:stripped_crimson_stem");
const objStrippedDarkOakLog = world.scoreboard.getObjective("item_count:stripped_dark_oak_log") ?? world.scoreboard.addObjective("item_count:stripped_dark_oak_log");
const objStrippedDarkOakWood = world.scoreboard.getObjective("item_count:stripped_dark_oak_wood") ?? world.scoreboard.addObjective("item_count:stripped_dark_oak_wood");
const objStrippedJungleLog = world.scoreboard.getObjective("item_count:stripped_jungle_log") ?? world.scoreboard.addObjective("item_count:stripped_jungle_log");
const objStrippedJungleWood = world.scoreboard.getObjective("item_count:stripped_jungle_wood") ?? world.scoreboard.addObjective("item_count:stripped_jungle_wood");
const objStrippedMangroveLog = world.scoreboard.getObjective("item_count:stripped_mangrove_log") ?? world.scoreboard.addObjective("item_count:stripped_mangrove_log");
const objStrippedMangroveWood = world.scoreboard.getObjective("item_count:stripped_mangrove_wood") ?? world.scoreboard.addObjective("item_count:stripped_mangrove_wood");
const objStrippedOakLog = world.scoreboard.getObjective("item_count:stripped_oak_log") ?? world.scoreboard.addObjective("item_count:stripped_oak_log");
const objStrippedOakWood = world.scoreboard.getObjective("item_count:stripped_oak_wood") ?? world.scoreboard.addObjective("item_count:stripped_oak_wood");
const objStrippedPaleOakLog = world.scoreboard.getObjective("item_count:stripped_pale_oak_log") ?? world.scoreboard.addObjective("item_count:stripped_pale_oak_log");
const objStrippedPaleOakWood = world.scoreboard.getObjective("item_count:stripped_pale_oak_wood") ?? world.scoreboard.addObjective("item_count:stripped_pale_oak_wood");
const objStrippedSpruceLog = world.scoreboard.getObjective("item_count:stripped_spruce_log") ?? world.scoreboard.addObjective("item_count:stripped_spruce_log");
const objStrippedSpruceWood = world.scoreboard.getObjective("item_count:stripped_spruce_wood") ?? world.scoreboard.addObjective("item_count:stripped_spruce_wood");
const objStrippedWarpedHyphae = world.scoreboard.getObjective("item_count:stripped_warped_hyphae") ?? world.scoreboard.addObjective("item_count:stripped_warped_hyphae");
const objStrippedWarpedStem = world.scoreboard.getObjective("item_count:stripped_warped_stem") ?? world.scoreboard.addObjective("item_count:stripped_warped_stem");
const objStructureBlock = world.scoreboard.getObjective("item_count:structure_block") ?? world.scoreboard.addObjective("item_count:structure_block");
const objStructureVoid = world.scoreboard.getObjective("item_count:structure_void") ?? world.scoreboard.addObjective("item_count:structure_void");
const objSugar = world.scoreboard.getObjective("item_count:sugar") ?? world.scoreboard.addObjective("item_count:sugar");
const objSugarCane = world.scoreboard.getObjective("item_count:sugar_cane") ?? world.scoreboard.addObjective("item_count:sugar_cane");
const objSunflower = world.scoreboard.getObjective("item_count:sunflower") ?? world.scoreboard.addObjective("item_count:sunflower");
const objSuspiciousGravel = world.scoreboard.getObjective("item_count:suspicious_gravel") ?? world.scoreboard.addObjective("item_count:suspicious_gravel");
const objSuspiciousSand = world.scoreboard.getObjective("item_count:suspicious_sand") ?? world.scoreboard.addObjective("item_count:suspicious_sand");
const objSuspiciousStew = world.scoreboard.getObjective("item_count:suspicious_stew") ?? world.scoreboard.addObjective("item_count:suspicious_stew");
const objSweetBerries = world.scoreboard.getObjective("item_count:sweet_berries") ?? world.scoreboard.addObjective("item_count:sweet_berries");
const objTadpoleBucket = world.scoreboard.getObjective("item_count:tadpole_bucket") ?? world.scoreboard.addObjective("item_count:tadpole_bucket");
const objTadpoleSpawnEgg = world.scoreboard.getObjective("item_count:tadpole_spawn_egg") ?? world.scoreboard.addObjective("item_count:tadpole_spawn_egg");
const objTallDryGrass = world.scoreboard.getObjective("item_count:tall_dry_grass") ?? world.scoreboard.addObjective("item_count:tall_dry_grass");
const objTallGrass = world.scoreboard.getObjective("item_count:tall_grass") ?? world.scoreboard.addObjective("item_count:tall_grass");
const objTarget = world.scoreboard.getObjective("item_count:target") ?? world.scoreboard.addObjective("item_count:target");
const objTideArmorTrimSmithingTemplate = world.scoreboard.getObjective("item_count:tide_armor_trim_smithing_template") ?? world.scoreboard.addObjective("item_count:tide_armor_trim_smithing_template");
const objTintedGlass = world.scoreboard.getObjective("item_count:tinted_glass") ?? world.scoreboard.addObjective("item_count:tinted_glass");
const objTnt = world.scoreboard.getObjective("item_count:tnt") ?? world.scoreboard.addObjective("item_count:tnt");
const objTntMinecart = world.scoreboard.getObjective("item_count:tnt_minecart") ?? world.scoreboard.addObjective("item_count:tnt_minecart");
const objTorch = world.scoreboard.getObjective("item_count:torch") ?? world.scoreboard.addObjective("item_count:torch");
const objTorchflower = world.scoreboard.getObjective("item_count:torchflower") ?? world.scoreboard.addObjective("item_count:torchflower");
const objTorchflowerSeeds = world.scoreboard.getObjective("item_count:torchflower_seeds") ?? world.scoreboard.addObjective("item_count:torchflower_seeds");
const objTotemOfUndying = world.scoreboard.getObjective("item_count:totem_of_undying") ?? world.scoreboard.addObjective("item_count:totem_of_undying");
const objTraderLlamaSpawnEgg = world.scoreboard.getObjective("item_count:trader_llama_spawn_egg") ?? world.scoreboard.addObjective("item_count:trader_llama_spawn_egg");
const objTrapdoor = world.scoreboard.getObjective("item_count:trapdoor") ?? world.scoreboard.addObjective("item_count:trapdoor");
const objTrappedChest = world.scoreboard.getObjective("item_count:trapped_chest") ?? world.scoreboard.addObjective("item_count:trapped_chest");
const objTrialKey = world.scoreboard.getObjective("item_count:trial_key") ?? world.scoreboard.addObjective("item_count:trial_key");
const objTrialSpawner = world.scoreboard.getObjective("item_count:trial_spawner") ?? world.scoreboard.addObjective("item_count:trial_spawner");
const objTrident = world.scoreboard.getObjective("item_count:trident") ?? world.scoreboard.addObjective("item_count:trident");
const objTripwireHook = world.scoreboard.getObjective("item_count:tripwire_hook") ?? world.scoreboard.addObjective("item_count:tripwire_hook");
const objTropicalFish = world.scoreboard.getObjective("item_count:tropical_fish") ?? world.scoreboard.addObjective("item_count:tropical_fish");
const objTropicalFishBucket = world.scoreboard.getObjective("item_count:tropical_fish_bucket") ?? world.scoreboard.addObjective("item_count:tropical_fish_bucket");
const objTropicalFishSpawnEgg = world.scoreboard.getObjective("item_count:tropical_fish_spawn_egg") ?? world.scoreboard.addObjective("item_count:tropical_fish_spawn_egg");
const objTubeCoral = world.scoreboard.getObjective("item_count:tube_coral") ?? world.scoreboard.addObjective("item_count:tube_coral");
const objTubeCoralBlock = world.scoreboard.getObjective("item_count:tube_coral_block") ?? world.scoreboard.addObjective("item_count:tube_coral_block");
const objTubeCoralFan = world.scoreboard.getObjective("item_count:tube_coral_fan") ?? world.scoreboard.addObjective("item_count:tube_coral_fan");
const objTuff = world.scoreboard.getObjective("item_count:tuff") ?? world.scoreboard.addObjective("item_count:tuff");
const objTuffBrickSlab = world.scoreboard.getObjective("item_count:tuff_brick_slab") ?? world.scoreboard.addObjective("item_count:tuff_brick_slab");
const objTuffBrickStairs = world.scoreboard.getObjective("item_count:tuff_brick_stairs") ?? world.scoreboard.addObjective("item_count:tuff_brick_stairs");
const objTuffBrickWall = world.scoreboard.getObjective("item_count:tuff_brick_wall") ?? world.scoreboard.addObjective("item_count:tuff_brick_wall");
const objTuffBricks = world.scoreboard.getObjective("item_count:tuff_bricks") ?? world.scoreboard.addObjective("item_count:tuff_bricks");
const objTuffSlab = world.scoreboard.getObjective("item_count:tuff_slab") ?? world.scoreboard.addObjective("item_count:tuff_slab");
const objTuffStairs = world.scoreboard.getObjective("item_count:tuff_stairs") ?? world.scoreboard.addObjective("item_count:tuff_stairs");
const objTuffWall = world.scoreboard.getObjective("item_count:tuff_wall") ?? world.scoreboard.addObjective("item_count:tuff_wall");
const objTurtleEgg = world.scoreboard.getObjective("item_count:turtle_egg") ?? world.scoreboard.addObjective("item_count:turtle_egg");
const objTurtleHelmet = world.scoreboard.getObjective("item_count:turtle_helmet") ?? world.scoreboard.addObjective("item_count:turtle_helmet");
const objTurtleScute = world.scoreboard.getObjective("item_count:turtle_scute") ?? world.scoreboard.addObjective("item_count:turtle_scute");
const objTurtleSpawnEgg = world.scoreboard.getObjective("item_count:turtle_spawn_egg") ?? world.scoreboard.addObjective("item_count:turtle_spawn_egg");
const objTwistingVines = world.scoreboard.getObjective("item_count:twisting_vines") ?? world.scoreboard.addObjective("item_count:twisting_vines");
const objUndyedShulkerBox = world.scoreboard.getObjective("item_count:undyed_shulker_box") ?? world.scoreboard.addObjective("item_count:undyed_shulker_box");
const objVault = world.scoreboard.getObjective("item_count:vault") ?? world.scoreboard.addObjective("item_count:vault");
const objVerdantFroglight = world.scoreboard.getObjective("item_count:verdant_froglight") ?? world.scoreboard.addObjective("item_count:verdant_froglight");
const objVexArmorTrimSmithingTemplate = world.scoreboard.getObjective("item_count:vex_armor_trim_smithing_template") ?? world.scoreboard.addObjective("item_count:vex_armor_trim_smithing_template");
const objVexSpawnEgg = world.scoreboard.getObjective("item_count:vex_spawn_egg") ?? world.scoreboard.addObjective("item_count:vex_spawn_egg");
const objVillagerSpawnEgg = world.scoreboard.getObjective("item_count:villager_spawn_egg") ?? world.scoreboard.addObjective("item_count:villager_spawn_egg");
const objVindicatorSpawnEgg = world.scoreboard.getObjective("item_count:vindicator_spawn_egg") ?? world.scoreboard.addObjective("item_count:vindicator_spawn_egg");
const objVine = world.scoreboard.getObjective("item_count:vine") ?? world.scoreboard.addObjective("item_count:vine");
const objWanderingTraderSpawnEgg = world.scoreboard.getObjective("item_count:wandering_trader_spawn_egg") ?? world.scoreboard.addObjective("item_count:wandering_trader_spawn_egg");
const objWardArmorTrimSmithingTemplate = world.scoreboard.getObjective("item_count:ward_armor_trim_smithing_template") ?? world.scoreboard.addObjective("item_count:ward_armor_trim_smithing_template");
const objWardenSpawnEgg = world.scoreboard.getObjective("item_count:warden_spawn_egg") ?? world.scoreboard.addObjective("item_count:warden_spawn_egg");
const objWarpedButton = world.scoreboard.getObjective("item_count:warped_button") ?? world.scoreboard.addObjective("item_count:warped_button");
const objWarpedDoor = world.scoreboard.getObjective("item_count:warped_door") ?? world.scoreboard.addObjective("item_count:warped_door");
const objWarpedFence = world.scoreboard.getObjective("item_count:warped_fence") ?? world.scoreboard.addObjective("item_count:warped_fence");
const objWarpedFenceGate = world.scoreboard.getObjective("item_count:warped_fence_gate") ?? world.scoreboard.addObjective("item_count:warped_fence_gate");
const objWarpedFungus = world.scoreboard.getObjective("item_count:warped_fungus") ?? world.scoreboard.addObjective("item_count:warped_fungus");
const objWarpedFungusOnAStick = world.scoreboard.getObjective("item_count:warped_fungus_on_a_stick") ?? world.scoreboard.addObjective("item_count:warped_fungus_on_a_stick");
const objWarpedHangingSign = world.scoreboard.getObjective("item_count:warped_hanging_sign") ?? world.scoreboard.addObjective("item_count:warped_hanging_sign");
const objWarpedHyphae = world.scoreboard.getObjective("item_count:warped_hyphae") ?? world.scoreboard.addObjective("item_count:warped_hyphae");
const objWarpedNylium = world.scoreboard.getObjective("item_count:warped_nylium") ?? world.scoreboard.addObjective("item_count:warped_nylium");
const objWarpedPlanks = world.scoreboard.getObjective("item_count:warped_planks") ?? world.scoreboard.addObjective("item_count:warped_planks");
const objWarpedPressurePlate = world.scoreboard.getObjective("item_count:warped_pressure_plate") ?? world.scoreboard.addObjective("item_count:warped_pressure_plate");
const objWarpedRoots = world.scoreboard.getObjective("item_count:warped_roots") ?? world.scoreboard.addObjective("item_count:warped_roots");
const objWarpedSign = world.scoreboard.getObjective("item_count:warped_sign") ?? world.scoreboard.addObjective("item_count:warped_sign");
const objWarpedSlab = world.scoreboard.getObjective("item_count:warped_slab") ?? world.scoreboard.addObjective("item_count:warped_slab");
const objWarpedStairs = world.scoreboard.getObjective("item_count:warped_stairs") ?? world.scoreboard.addObjective("item_count:warped_stairs");
const objWarpedStem = world.scoreboard.getObjective("item_count:warped_stem") ?? world.scoreboard.addObjective("item_count:warped_stem");
const objWarpedTrapdoor = world.scoreboard.getObjective("item_count:warped_trapdoor") ?? world.scoreboard.addObjective("item_count:warped_trapdoor");
const objWarpedWartBlock = world.scoreboard.getObjective("item_count:warped_wart_block") ?? world.scoreboard.addObjective("item_count:warped_wart_block");
const objWaterBucket = world.scoreboard.getObjective("item_count:water_bucket") ?? world.scoreboard.addObjective("item_count:water_bucket");
const objWaterlily = world.scoreboard.getObjective("item_count:waterlily") ?? world.scoreboard.addObjective("item_count:waterlily");
const objWaxedChiseledCopper = world.scoreboard.getObjective("item_count:waxed_chiseled_copper") ?? world.scoreboard.addObjective("item_count:waxed_chiseled_copper");
const objWaxedCopper = world.scoreboard.getObjective("item_count:waxed_copper") ?? world.scoreboard.addObjective("item_count:waxed_copper");
const objWaxedCopperBulb = world.scoreboard.getObjective("item_count:waxed_copper_bulb") ?? world.scoreboard.addObjective("item_count:waxed_copper_bulb");
const objWaxedCopperDoor = world.scoreboard.getObjective("item_count:waxed_copper_door") ?? world.scoreboard.addObjective("item_count:waxed_copper_door");
const objWaxedCopperGrate = world.scoreboard.getObjective("item_count:waxed_copper_grate") ?? world.scoreboard.addObjective("item_count:waxed_copper_grate");
const objWaxedCopperTrapdoor = world.scoreboard.getObjective("item_count:waxed_copper_trapdoor") ?? world.scoreboard.addObjective("item_count:waxed_copper_trapdoor");
const objWaxedCutCopper = world.scoreboard.getObjective("item_count:waxed_cut_copper") ?? world.scoreboard.addObjective("item_count:waxed_cut_copper");
const objWaxedCutCopperSlab = world.scoreboard.getObjective("item_count:waxed_cut_copper_slab") ?? world.scoreboard.addObjective("item_count:waxed_cut_copper_slab");
const objWaxedCutCopperStairs = world.scoreboard.getObjective("item_count:waxed_cut_copper_stairs") ?? world.scoreboard.addObjective("item_count:waxed_cut_copper_stairs");
const objWaxedExposedChiseledCopper = world.scoreboard.getObjective("item_count:waxed_exposed_chiseled_copper") ?? world.scoreboard.addObjective("item_count:waxed_exposed_chiseled_copper");
const objWaxedExposedCopper = world.scoreboard.getObjective("item_count:waxed_exposed_copper") ?? world.scoreboard.addObjective("item_count:waxed_exposed_copper");
const objWaxedExposedCopperBulb = world.scoreboard.getObjective("item_count:waxed_exposed_copper_bulb") ?? world.scoreboard.addObjective("item_count:waxed_exposed_copper_bulb");
const objWaxedExposedCopperDoor = world.scoreboard.getObjective("item_count:waxed_exposed_copper_door") ?? world.scoreboard.addObjective("item_count:waxed_exposed_copper_door");
const objWaxedExposedCopperGrate = world.scoreboard.getObjective("item_count:waxed_exposed_copper_grate") ?? world.scoreboard.addObjective("item_count:waxed_exposed_copper_grate");
const objWaxedExposedCopperTrapdoor = world.scoreboard.getObjective("item_count:waxed_exposed_copper_trapdoor") ?? world.scoreboard.addObjective("item_count:waxed_exposed_copper_trapdoor");
const objWaxedExposedCutCopper = world.scoreboard.getObjective("item_count:waxed_exposed_cut_copper") ?? world.scoreboard.addObjective("item_count:waxed_exposed_cut_copper");
const objWaxedExposedCutCopperSlab = world.scoreboard.getObjective("item_count:waxed_exposed_cut_copper_slab") ?? world.scoreboard.addObjective("item_count:waxed_exposed_cut_copper_slab");
const objWaxedExposedCutCopperStairs = world.scoreboard.getObjective("item_count:waxed_exposed_cut_copper_stairs") ?? world.scoreboard.addObjective("item_count:waxed_exposed_cut_copper_stairs");
const objWaxedOxidizedChiseledCopper = world.scoreboard.getObjective("item_count:waxed_oxidized_chiseled_copper") ?? world.scoreboard.addObjective("item_count:waxed_oxidized_chiseled_copper");
const objWaxedOxidizedCopper = world.scoreboard.getObjective("item_count:waxed_oxidized_copper") ?? world.scoreboard.addObjective("item_count:waxed_oxidized_copper");
const objWaxedOxidizedCopperBulb = world.scoreboard.getObjective("item_count:waxed_oxidized_copper_bulb") ?? world.scoreboard.addObjective("item_count:waxed_oxidized_copper_bulb");
const objWaxedOxidizedCopperDoor = world.scoreboard.getObjective("item_count:waxed_oxidized_copper_door") ?? world.scoreboard.addObjective("item_count:waxed_oxidized_copper_door");
const objWaxedOxidizedCopperGrate = world.scoreboard.getObjective("item_count:waxed_oxidized_copper_grate") ?? world.scoreboard.addObjective("item_count:waxed_oxidized_copper_grate");
const objWaxedOxidizedCopperTrapdoor = world.scoreboard.getObjective("item_count:waxed_oxidized_copper_trapdoor") ?? world.scoreboard.addObjective("item_count:waxed_oxidized_copper_trapdoor");
const objWaxedOxidizedCutCopper = world.scoreboard.getObjective("item_count:waxed_oxidized_cut_copper") ?? world.scoreboard.addObjective("item_count:waxed_oxidized_cut_copper");
const objWaxedOxidizedCutCopperSlab = world.scoreboard.getObjective("item_count:waxed_oxidized_cut_copper_slab") ?? world.scoreboard.addObjective("item_count:waxed_oxidized_cut_copper_slab");
const objWaxedOxidizedCutCopperStairs = world.scoreboard.getObjective("item_count:waxed_oxidized_cut_copper_stairs") ?? world.scoreboard.addObjective("item_count:waxed_oxidized_cut_copper_stairs");
const objWaxedWeatheredChiseledCopper = world.scoreboard.getObjective("item_count:waxed_weathered_chiseled_copper") ?? world.scoreboard.addObjective("item_count:waxed_weathered_chiseled_copper");
const objWaxedWeatheredCopper = world.scoreboard.getObjective("item_count:waxed_weathered_copper") ?? world.scoreboard.addObjective("item_count:waxed_weathered_copper");
const objWaxedWeatheredCopperBulb = world.scoreboard.getObjective("item_count:waxed_weathered_copper_bulb") ?? world.scoreboard.addObjective("item_count:waxed_weathered_copper_bulb");
const objWaxedWeatheredCopperDoor = world.scoreboard.getObjective("item_count:waxed_weathered_copper_door") ?? world.scoreboard.addObjective("item_count:waxed_weathered_copper_door");
const objWaxedWeatheredCopperGrate = world.scoreboard.getObjective("item_count:waxed_weathered_copper_grate") ?? world.scoreboard.addObjective("item_count:waxed_weathered_copper_grate");
const objWaxedWeatheredCopperTrapdoor = world.scoreboard.getObjective("item_count:waxed_weathered_copper_trapdoor") ?? world.scoreboard.addObjective("item_count:waxed_weathered_copper_trapdoor");
const objWaxedWeatheredCutCopper = world.scoreboard.getObjective("item_count:waxed_weathered_cut_copper") ?? world.scoreboard.addObjective("item_count:waxed_weathered_cut_copper");
const objWaxedWeatheredCutCopperSlab = world.scoreboard.getObjective("item_count:waxed_weathered_cut_copper_slab") ?? world.scoreboard.addObjective("item_count:waxed_weathered_cut_copper_slab");
const objWaxedWeatheredCutCopperStairs = world.scoreboard.getObjective("item_count:waxed_weathered_cut_copper_stairs") ?? world.scoreboard.addObjective("item_count:waxed_weathered_cut_copper_stairs");
const objWayfinderArmorTrimSmithingTemplate = world.scoreboard.getObjective("item_count:wayfinder_armor_trim_smithing_template") ?? world.scoreboard.addObjective("item_count:wayfinder_armor_trim_smithing_template");
const objWeatheredChiseledCopper = world.scoreboard.getObjective("item_count:weathered_chiseled_copper") ?? world.scoreboard.addObjective("item_count:weathered_chiseled_copper");
const objWeatheredCopper = world.scoreboard.getObjective("item_count:weathered_copper") ?? world.scoreboard.addObjective("item_count:weathered_copper");
const objWeatheredCopperBulb = world.scoreboard.getObjective("item_count:weathered_copper_bulb") ?? world.scoreboard.addObjective("item_count:weathered_copper_bulb");
const objWeatheredCopperDoor = world.scoreboard.getObjective("item_count:weathered_copper_door") ?? world.scoreboard.addObjective("item_count:weathered_copper_door");
const objWeatheredCopperGrate = world.scoreboard.getObjective("item_count:weathered_copper_grate") ?? world.scoreboard.addObjective("item_count:weathered_copper_grate");
const objWeatheredCopperTrapdoor = world.scoreboard.getObjective("item_count:weathered_copper_trapdoor") ?? world.scoreboard.addObjective("item_count:weathered_copper_trapdoor");
const objWeatheredCutCopper = world.scoreboard.getObjective("item_count:weathered_cut_copper") ?? world.scoreboard.addObjective("item_count:weathered_cut_copper");
const objWeatheredCutCopperSlab = world.scoreboard.getObjective("item_count:weathered_cut_copper_slab") ?? world.scoreboard.addObjective("item_count:weathered_cut_copper_slab");
const objWeatheredCutCopperStairs = world.scoreboard.getObjective("item_count:weathered_cut_copper_stairs") ?? world.scoreboard.addObjective("item_count:weathered_cut_copper_stairs");
const objWeb = world.scoreboard.getObjective("item_count:web") ?? world.scoreboard.addObjective("item_count:web");
const objWeepingVines = world.scoreboard.getObjective("item_count:weeping_vines") ?? world.scoreboard.addObjective("item_count:weeping_vines");
const objWetSponge = world.scoreboard.getObjective("item_count:wet_sponge") ?? world.scoreboard.addObjective("item_count:wet_sponge");
const objWheat = world.scoreboard.getObjective("item_count:wheat") ?? world.scoreboard.addObjective("item_count:wheat");
const objWheatSeeds = world.scoreboard.getObjective("item_count:wheat_seeds") ?? world.scoreboard.addObjective("item_count:wheat_seeds");
const objWhiteBundle = world.scoreboard.getObjective("item_count:white_bundle") ?? world.scoreboard.addObjective("item_count:white_bundle");
const objWhiteCandle = world.scoreboard.getObjective("item_count:white_candle") ?? world.scoreboard.addObjective("item_count:white_candle");
const objWhiteCarpet = world.scoreboard.getObjective("item_count:white_carpet") ?? world.scoreboard.addObjective("item_count:white_carpet");
const objWhiteConcrete = world.scoreboard.getObjective("item_count:white_concrete") ?? world.scoreboard.addObjective("item_count:white_concrete");
const objWhiteConcretePowder = world.scoreboard.getObjective("item_count:white_concrete_powder") ?? world.scoreboard.addObjective("item_count:white_concrete_powder");
const objWhiteDye = world.scoreboard.getObjective("item_count:white_dye") ?? world.scoreboard.addObjective("item_count:white_dye");
const objWhiteGlazedTerracotta = world.scoreboard.getObjective("item_count:white_glazed_terracotta") ?? world.scoreboard.addObjective("item_count:white_glazed_terracotta");
const objWhiteHarness = world.scoreboard.getObjective("item_count:white_harness") ?? world.scoreboard.addObjective("item_count:white_harness");
const objWhiteShulkerBox = world.scoreboard.getObjective("item_count:white_shulker_box") ?? world.scoreboard.addObjective("item_count:white_shulker_box");
const objWhiteStainedGlass = world.scoreboard.getObjective("item_count:white_stained_glass") ?? world.scoreboard.addObjective("item_count:white_stained_glass");
const objWhiteStainedGlassPane = world.scoreboard.getObjective("item_count:white_stained_glass_pane") ?? world.scoreboard.addObjective("item_count:white_stained_glass_pane");
const objWhiteTerracotta = world.scoreboard.getObjective("item_count:white_terracotta") ?? world.scoreboard.addObjective("item_count:white_terracotta");
const objWhiteTulip = world.scoreboard.getObjective("item_count:white_tulip") ?? world.scoreboard.addObjective("item_count:white_tulip");
const objWhiteWool = world.scoreboard.getObjective("item_count:white_wool") ?? world.scoreboard.addObjective("item_count:white_wool");
const objWildArmorTrimSmithingTemplate = world.scoreboard.getObjective("item_count:wild_armor_trim_smithing_template") ?? world.scoreboard.addObjective("item_count:wild_armor_trim_smithing_template");
const objWildflowers = world.scoreboard.getObjective("item_count:wildflowers") ?? world.scoreboard.addObjective("item_count:wildflowers");
const objWindCharge = world.scoreboard.getObjective("item_count:wind_charge") ?? world.scoreboard.addObjective("item_count:wind_charge");
const objWitchSpawnEgg = world.scoreboard.getObjective("item_count:witch_spawn_egg") ?? world.scoreboard.addObjective("item_count:witch_spawn_egg");
const objWitherRose = world.scoreboard.getObjective("item_count:wither_rose") ?? world.scoreboard.addObjective("item_count:wither_rose");
const objWitherSkeletonSkull = world.scoreboard.getObjective("item_count:wither_skeleton_skull") ?? world.scoreboard.addObjective("item_count:wither_skeleton_skull");
const objWitherSkeletonSpawnEgg = world.scoreboard.getObjective("item_count:wither_skeleton_spawn_egg") ?? world.scoreboard.addObjective("item_count:wither_skeleton_spawn_egg");
const objWitherSpawnEgg = world.scoreboard.getObjective("item_count:wither_spawn_egg") ?? world.scoreboard.addObjective("item_count:wither_spawn_egg");
const objWolfArmor = world.scoreboard.getObjective("item_count:wolf_armor") ?? world.scoreboard.addObjective("item_count:wolf_armor");
const objWolfSpawnEgg = world.scoreboard.getObjective("item_count:wolf_spawn_egg") ?? world.scoreboard.addObjective("item_count:wolf_spawn_egg");
const objWoodenAxe = world.scoreboard.getObjective("item_count:wooden_axe") ?? world.scoreboard.addObjective("item_count:wooden_axe");
const objWoodenButton = world.scoreboard.getObjective("item_count:wooden_button") ?? world.scoreboard.addObjective("item_count:wooden_button");
const objWoodenDoor = world.scoreboard.getObjective("item_count:wooden_door") ?? world.scoreboard.addObjective("item_count:wooden_door");
const objWoodenHoe = world.scoreboard.getObjective("item_count:wooden_hoe") ?? world.scoreboard.addObjective("item_count:wooden_hoe");
const objWoodenPickaxe = world.scoreboard.getObjective("item_count:wooden_pickaxe") ?? world.scoreboard.addObjective("item_count:wooden_pickaxe");
const objWoodenPressurePlate = world.scoreboard.getObjective("item_count:wooden_pressure_plate") ?? world.scoreboard.addObjective("item_count:wooden_pressure_plate");
const objWoodenShovel = world.scoreboard.getObjective("item_count:wooden_shovel") ?? world.scoreboard.addObjective("item_count:wooden_shovel");
const objWoodenSlab = world.scoreboard.getObjective("item_count:wooden_slab") ?? world.scoreboard.addObjective("item_count:wooden_slab");
const objWoodenSword = world.scoreboard.getObjective("item_count:wooden_sword") ?? world.scoreboard.addObjective("item_count:wooden_sword");
const objWritableBook = world.scoreboard.getObjective("item_count:writable_book") ?? world.scoreboard.addObjective("item_count:writable_book");
const objYellowBundle = world.scoreboard.getObjective("item_count:yellow_bundle") ?? world.scoreboard.addObjective("item_count:yellow_bundle");
const objYellowCandle = world.scoreboard.getObjective("item_count:yellow_candle") ?? world.scoreboard.addObjective("item_count:yellow_candle");
const objYellowCarpet = world.scoreboard.getObjective("item_count:yellow_carpet") ?? world.scoreboard.addObjective("item_count:yellow_carpet");
const objYellowConcrete = world.scoreboard.getObjective("item_count:yellow_concrete") ?? world.scoreboard.addObjective("item_count:yellow_concrete");
const objYellowConcretePowder = world.scoreboard.getObjective("item_count:yellow_concrete_powder") ?? world.scoreboard.addObjective("item_count:yellow_concrete_powder");
const objYellowDye = world.scoreboard.getObjective("item_count:yellow_dye") ?? world.scoreboard.addObjective("item_count:yellow_dye");
const objYellowGlazedTerracotta = world.scoreboard.getObjective("item_count:yellow_glazed_terracotta") ?? world.scoreboard.addObjective("item_count:yellow_glazed_terracotta");
const objYellowHarness = world.scoreboard.getObjective("item_count:yellow_harness") ?? world.scoreboard.addObjective("item_count:yellow_harness");
const objYellowShulkerBox = world.scoreboard.getObjective("item_count:yellow_shulker_box") ?? world.scoreboard.addObjective("item_count:yellow_shulker_box");
const objYellowStainedGlass = world.scoreboard.getObjective("item_count:yellow_stained_glass") ?? world.scoreboard.addObjective("item_count:yellow_stained_glass");
const objYellowStainedGlassPane = world.scoreboard.getObjective("item_count:yellow_stained_glass_pane") ?? world.scoreboard.addObjective("item_count:yellow_stained_glass_pane");
const objYellowTerracotta = world.scoreboard.getObjective("item_count:yellow_terracotta") ?? world.scoreboard.addObjective("item_count:yellow_terracotta");
const objYellowWool = world.scoreboard.getObjective("item_count:yellow_wool") ?? world.scoreboard.addObjective("item_count:yellow_wool");
const objZoglinSpawnEgg = world.scoreboard.getObjective("item_count:zoglin_spawn_egg") ?? world.scoreboard.addObjective("item_count:zoglin_spawn_egg");
const objZombieHead = world.scoreboard.getObjective("item_count:zombie_head") ?? world.scoreboard.addObjective("item_count:zombie_head");
const objZombieHorseSpawnEgg = world.scoreboard.getObjective("item_count:zombie_horse_spawn_egg") ?? world.scoreboard.addObjective("item_count:zombie_horse_spawn_egg");
const objZombiePigmanSpawnEgg = world.scoreboard.getObjective("item_count:zombie_pigman_spawn_egg") ?? world.scoreboard.addObjective("item_count:zombie_pigman_spawn_egg");
const objZombieSpawnEgg = world.scoreboard.getObjective("item_count:zombie_spawn_egg") ?? world.scoreboard.addObjective("item_count:zombie_spawn_egg");
const objZombieVillagerSpawnEgg = world.scoreboard.getObjective("item_count:zombie_villager_spawn_egg") ?? world.scoreboard.addObjective("item_count:zombie_villager_spawn_egg");


system.runInterval(() => {
    for (const player of world.getPlayers()) {
        // Get Inventory
        const inventory = player.getComponent('inventory')?.container;
        const cursor = player.getComponent('cursor_inventory');
        const head = player.getComponent("equippable").getEquipment("Head");
        const chest = player.getComponent("equippable").getEquipment("Chest");
        const legs = player.getComponent("equippable").getEquipment("Legs");
        const feet = player.getComponent("equippable").getEquipment("Feet");
        const offhand = player.getComponent("equippable").getEquipment("Offhand");

        // Set Scores to Zero
        objAcaciaBoat.setScore(player, 0);
        objAcaciaButton.setScore(player, 0);
        objAcaciaChestBoat.setScore(player, 0);
        objAcaciaDoor.setScore(player, 0);
        objAcaciaFence.setScore(player, 0);
        objAcaciaFenceGate.setScore(player, 0);
        objAcaciaHangingSign.setScore(player, 0);
        objAcaciaLeaves.setScore(player, 0);
        objAcaciaLog.setScore(player, 0);
        objAcaciaPlanks.setScore(player, 0);
        objAcaciaPressurePlate.setScore(player, 0);
        objAcaciaSapling.setScore(player, 0);
        objAcaciaSign.setScore(player, 0);
        objAcaciaSlab.setScore(player, 0);
        objAcaciaStairs.setScore(player, 0);
        objAcaciaTrapdoor.setScore(player, 0);
        objAcaciaWood.setScore(player, 0);
        objActivatorRail.setScore(player, 0);
        objAllaySpawnEgg.setScore(player, 0);
        objAllium.setScore(player, 0);
        objAllow.setScore(player, 0);
        objAmethystBlock.setScore(player, 0);
        objAmethystCluster.setScore(player, 0);
        objAmethystShard.setScore(player, 0);
        objAncientDebris.setScore(player, 0);
        objAndesite.setScore(player, 0);
        objAndesiteSlab.setScore(player, 0);
        objAndesiteStairs.setScore(player, 0);
        objAndesiteWall.setScore(player, 0);
        objAnglerPotterySherd.setScore(player, 0);
        objAnvil.setScore(player, 0);
        objApple.setScore(player, 0);
        objArcherPotterySherd.setScore(player, 0);
        objArmadilloScute.setScore(player, 0);
        objArmadilloSpawnEgg.setScore(player, 0);
        objArmorStand.setScore(player, 0);
        objArmsUpPotterySherd.setScore(player, 0);
        objArrow.setScore(player, 0);
        objAxolotlBucket.setScore(player, 0);
        objAxolotlSpawnEgg.setScore(player, 0);
        objAzalea.setScore(player, 0);
        objAzaleaLeaves.setScore(player, 0);
        objAzaleaLeavesFlowered.setScore(player, 0);
        objAzureBluet.setScore(player, 0);
        objBakedPotato.setScore(player, 0);
        objBamboo.setScore(player, 0);
        objBambooBlock.setScore(player, 0);
        objBambooButton.setScore(player, 0);
        objBambooChestRaft.setScore(player, 0);
        objBambooDoor.setScore(player, 0);
        objBambooFence.setScore(player, 0);
        objBambooFenceGate.setScore(player, 0);
        objBambooHangingSign.setScore(player, 0);
        objBambooMosaic.setScore(player, 0);
        objBambooMosaicSlab.setScore(player, 0);
        objBambooMosaicStairs.setScore(player, 0);
        objBambooPlanks.setScore(player, 0);
        objBambooPressurePlate.setScore(player, 0);
        objBambooRaft.setScore(player, 0);
        objBambooSign.setScore(player, 0);
        objBambooSlab.setScore(player, 0);
        objBambooStairs.setScore(player, 0);
        objBambooTrapdoor.setScore(player, 0);
        objBanner.setScore(player, 0);
        objBarrel.setScore(player, 0);
        objBarrier.setScore(player, 0);
        objBasalt.setScore(player, 0);
        objBatSpawnEgg.setScore(player, 0);
        objBeacon.setScore(player, 0);
        objBed.setScore(player, 0);
        objBedrock.setScore(player, 0);
        objBeeNest.setScore(player, 0);
        objBeeSpawnEgg.setScore(player, 0);
        objBeef.setScore(player, 0);
        objBeehive.setScore(player, 0);
        objBeetroot.setScore(player, 0);
        objBeetrootSeeds.setScore(player, 0);
        objBeetrootSoup.setScore(player, 0);
        objBell.setScore(player, 0);
        objBigDripleaf.setScore(player, 0);
        objBirchBoat.setScore(player, 0);
        objBirchButton.setScore(player, 0);
        objBirchChestBoat.setScore(player, 0);
        objBirchDoor.setScore(player, 0);
        objBirchFence.setScore(player, 0);
        objBirchFenceGate.setScore(player, 0);
        objBirchHangingSign.setScore(player, 0);
        objBirchLeaves.setScore(player, 0);
        objBirchLog.setScore(player, 0);
        objBirchPlanks.setScore(player, 0);
        objBirchPressurePlate.setScore(player, 0);
        objBirchSapling.setScore(player, 0);
        objBirchSign.setScore(player, 0);
        objBirchSlab.setScore(player, 0);
        objBirchStairs.setScore(player, 0);
        objBirchTrapdoor.setScore(player, 0);
        objBirchWood.setScore(player, 0);
        objBlackBundle.setScore(player, 0);
        objBlackCandle.setScore(player, 0);
        objBlackCarpet.setScore(player, 0);
        objBlackConcrete.setScore(player, 0);
        objBlackConcretePowder.setScore(player, 0);
        objBlackDye.setScore(player, 0);
        objBlackGlazedTerracotta.setScore(player, 0);
        objBlackHarness.setScore(player, 0);
        objBlackShulkerBox.setScore(player, 0);
        objBlackStainedGlass.setScore(player, 0);
        objBlackStainedGlassPane.setScore(player, 0);
        objBlackTerracotta.setScore(player, 0);
        objBlackWool.setScore(player, 0);
        objBlackstone.setScore(player, 0);
        objBlackstoneSlab.setScore(player, 0);
        objBlackstoneStairs.setScore(player, 0);
        objBlackstoneWall.setScore(player, 0);
        objBladePotterySherd.setScore(player, 0);
        objBlastFurnace.setScore(player, 0);
        objBlazePowder.setScore(player, 0);
        objBlazeRod.setScore(player, 0);
        objBlazeSpawnEgg.setScore(player, 0);
        objBlueBundle.setScore(player, 0);
        objBlueCandle.setScore(player, 0);
        objBlueCarpet.setScore(player, 0);
        objBlueConcrete.setScore(player, 0);
        objBlueConcretePowder.setScore(player, 0);
        objBlueDye.setScore(player, 0);
        objBlueEgg.setScore(player, 0);
        objBlueGlazedTerracotta.setScore(player, 0);
        objBlueHarness.setScore(player, 0);
        objBlueIce.setScore(player, 0);
        objBlueOrchid.setScore(player, 0);
        objBlueShulkerBox.setScore(player, 0);
        objBlueStainedGlass.setScore(player, 0);
        objBlueStainedGlassPane.setScore(player, 0);
        objBlueTerracotta.setScore(player, 0);
        objBlueWool.setScore(player, 0);
        objBoggedSpawnEgg.setScore(player, 0);
        objBoltArmorTrimSmithingTemplate.setScore(player, 0);
        objBone.setScore(player, 0);
        objBoneBlock.setScore(player, 0);
        objBoneMeal.setScore(player, 0);
        objBook.setScore(player, 0);
        objBookshelf.setScore(player, 0);
        objBorderBlock.setScore(player, 0);
        objBordureIndentedBannerPattern.setScore(player, 0);
        objBow.setScore(player, 0);
        objBowl.setScore(player, 0);
        objBrainCoral.setScore(player, 0);
        objBrainCoralBlock.setScore(player, 0);
        objBrainCoralFan.setScore(player, 0);
        objBread.setScore(player, 0);
        objBreezeRod.setScore(player, 0);
        objBreezeSpawnEgg.setScore(player, 0);
        objBrewerPotterySherd.setScore(player, 0);
        objBrewingStand.setScore(player, 0);
        objBrick.setScore(player, 0);
        objBrickBlock.setScore(player, 0);
        objBrickSlab.setScore(player, 0);
        objBrickStairs.setScore(player, 0);
        objBrickWall.setScore(player, 0);
        objBrownBundle.setScore(player, 0);
        objBrownCandle.setScore(player, 0);
        objBrownCarpet.setScore(player, 0);
        objBrownConcrete.setScore(player, 0);
        objBrownConcretePowder.setScore(player, 0);
        objBrownDye.setScore(player, 0);
        objBrownEgg.setScore(player, 0);
        objBrownGlazedTerracotta.setScore(player, 0);
        objBrownHarness.setScore(player, 0);
        objBrownMushroom.setScore(player, 0);
        objBrownMushroomBlock.setScore(player, 0);
        objBrownShulkerBox.setScore(player, 0);
        objBrownStainedGlass.setScore(player, 0);
        objBrownStainedGlassPane.setScore(player, 0);
        objBrownTerracotta.setScore(player, 0);
        objBrownWool.setScore(player, 0);
        objBrush.setScore(player, 0);
        objBubbleCoral.setScore(player, 0);
        objBubbleCoralBlock.setScore(player, 0);
        objBubbleCoralFan.setScore(player, 0);
        objBucket.setScore(player, 0);
        objBuddingAmethyst.setScore(player, 0);
        objBundle.setScore(player, 0);
        objBurnPotterySherd.setScore(player, 0);
        objBush.setScore(player, 0);
        objCactus.setScore(player, 0);
        objCactusFlower.setScore(player, 0);
        objCake.setScore(player, 0);
        objCalcite.setScore(player, 0);
        objCalibratedSculkSensor.setScore(player, 0);
        objCamelSpawnEgg.setScore(player, 0);
        objCampfire.setScore(player, 0);
        objCandle.setScore(player, 0);
        objCarpet.setScore(player, 0);
        objCarrot.setScore(player, 0);
        objCarrotOnAStick.setScore(player, 0);
        objCartographyTable.setScore(player, 0);
        objCarvedPumpkin.setScore(player, 0);
        objCatSpawnEgg.setScore(player, 0);
        objCauldron.setScore(player, 0);
        objCaveSpiderSpawnEgg.setScore(player, 0);
        objChain.setScore(player, 0);
        objChainCommandBlock.setScore(player, 0);
        objChainmailBoots.setScore(player, 0);
        objChainmailChestplate.setScore(player, 0);
        objChainmailHelmet.setScore(player, 0);
        objChainmailLeggings.setScore(player, 0);
        objCharcoal.setScore(player, 0);
        objCherryBoat.setScore(player, 0);
        objCherryButton.setScore(player, 0);
        objCherryChestBoat.setScore(player, 0);
        objCherryDoor.setScore(player, 0);
        objCherryFence.setScore(player, 0);
        objCherryFenceGate.setScore(player, 0);
        objCherryHangingSign.setScore(player, 0);
        objCherryLeaves.setScore(player, 0);
        objCherryLog.setScore(player, 0);
        objCherryPlanks.setScore(player, 0);
        objCherryPressurePlate.setScore(player, 0);
        objCherrySapling.setScore(player, 0);
        objCherrySign.setScore(player, 0);
        objCherrySlab.setScore(player, 0);
        objCherryStairs.setScore(player, 0);
        objCherryTrapdoor.setScore(player, 0);
        objCherryWood.setScore(player, 0);
        objChest.setScore(player, 0);
        objChestBoat.setScore(player, 0);
        objChestMinecart.setScore(player, 0);
        objChicken.setScore(player, 0);
        objChickenSpawnEgg.setScore(player, 0);
        objChippedAnvil.setScore(player, 0);
        objChiseledBookshelf.setScore(player, 0);
        objChiseledCopper.setScore(player, 0);
        objChiseledDeepslate.setScore(player, 0);
        objChiseledNetherBricks.setScore(player, 0);
        objChiseledPolishedBlackstone.setScore(player, 0);
        objChiseledQuartzBlock.setScore(player, 0);
        objChiseledRedSandstone.setScore(player, 0);
        objChiseledResinBricks.setScore(player, 0);
        objChiseledSandstone.setScore(player, 0);
        objChiseledStoneBricks.setScore(player, 0);
        objChiseledTuff.setScore(player, 0);
        objChiseledTuffBricks.setScore(player, 0);
        objChorusFlower.setScore(player, 0);
        objChorusFruit.setScore(player, 0);
        objChorusPlant.setScore(player, 0);
        objClay.setScore(player, 0);
        objClayBall.setScore(player, 0);
        objClock.setScore(player, 0);
        objClosedEyeblossom.setScore(player, 0);
        objCoal.setScore(player, 0);
        objCoalBlock.setScore(player, 0);
        objCoalOre.setScore(player, 0);
        objCoarseDirt.setScore(player, 0);
        objCoastArmorTrimSmithingTemplate.setScore(player, 0);
        objCobbledDeepslate.setScore(player, 0);
        objCobbledDeepslateSlab.setScore(player, 0);
        objCobbledDeepslateStairs.setScore(player, 0);
        objCobbledDeepslateWall.setScore(player, 0);
        objCobblestone.setScore(player, 0);
        objCobblestoneSlab.setScore(player, 0);
        objCobblestoneWall.setScore(player, 0);
        objCocoaBeans.setScore(player, 0);
        objCod.setScore(player, 0);
        objCodBucket.setScore(player, 0);
        objCodSpawnEgg.setScore(player, 0);
        objCommandBlock.setScore(player, 0);
        objCommandBlockMinecart.setScore(player, 0);
        objComparator.setScore(player, 0);
        objCompass.setScore(player, 0);
        objComposter.setScore(player, 0);
        objConduit.setScore(player, 0);
        objCookedBeef.setScore(player, 0);
        objCookedChicken.setScore(player, 0);
        objCookedCod.setScore(player, 0);
        objCookedMutton.setScore(player, 0);
        objCookedPorkchop.setScore(player, 0);
        objCookedRabbit.setScore(player, 0);
        objCookedSalmon.setScore(player, 0);
        objCookie.setScore(player, 0);
        objCopperBlock.setScore(player, 0);
        objCopperBulb.setScore(player, 0);
        objCopperDoor.setScore(player, 0);
        objCopperGrate.setScore(player, 0);
        objCopperIngot.setScore(player, 0);
        objCopperOre.setScore(player, 0);
        objCopperTrapdoor.setScore(player, 0);
        objCornflower.setScore(player, 0);
        objCowSpawnEgg.setScore(player, 0);
        objCrackedDeepslateBricks.setScore(player, 0);
        objCrackedDeepslateTiles.setScore(player, 0);
        objCrackedNetherBricks.setScore(player, 0);
        objCrackedPolishedBlackstoneBricks.setScore(player, 0);
        objCrackedStoneBricks.setScore(player, 0);
        objCrafter.setScore(player, 0);
        objCraftingTable.setScore(player, 0);
        objCreakingHeart.setScore(player, 0);
        objCreakingSpawnEgg.setScore(player, 0);
        objCreeperBannerPattern.setScore(player, 0);
        objCreeperHead.setScore(player, 0);
        objCreeperSpawnEgg.setScore(player, 0);
        objCrimsonButton.setScore(player, 0);
        objCrimsonDoor.setScore(player, 0);
        objCrimsonFence.setScore(player, 0);
        objCrimsonFenceGate.setScore(player, 0);
        objCrimsonFungus.setScore(player, 0);
        objCrimsonHangingSign.setScore(player, 0);
        objCrimsonHyphae.setScore(player, 0);
        objCrimsonNylium.setScore(player, 0);
        objCrimsonPlanks.setScore(player, 0);
        objCrimsonPressurePlate.setScore(player, 0);
        objCrimsonRoots.setScore(player, 0);
        objCrimsonSign.setScore(player, 0);
        objCrimsonSlab.setScore(player, 0);
        objCrimsonStairs.setScore(player, 0);
        objCrimsonStem.setScore(player, 0);
        objCrimsonTrapdoor.setScore(player, 0);
        objCrossbow.setScore(player, 0);
        objCryingObsidian.setScore(player, 0);
        objCutCopper.setScore(player, 0);
        objCutCopperSlab.setScore(player, 0);
        objCutCopperStairs.setScore(player, 0);
        objCutRedSandstone.setScore(player, 0);
        objCutRedSandstoneSlab.setScore(player, 0);
        objCutSandstone.setScore(player, 0);
        objCutSandstoneSlab.setScore(player, 0);
        objCyanBundle.setScore(player, 0);
        objCyanCandle.setScore(player, 0);
        objCyanCarpet.setScore(player, 0);
        objCyanConcrete.setScore(player, 0);
        objCyanConcretePowder.setScore(player, 0);
        objCyanDye.setScore(player, 0);
        objCyanGlazedTerracotta.setScore(player, 0);
        objCyanHarness.setScore(player, 0);
        objCyanShulkerBox.setScore(player, 0);
        objCyanStainedGlass.setScore(player, 0);
        objCyanStainedGlassPane.setScore(player, 0);
        objCyanTerracotta.setScore(player, 0);
        objCyanWool.setScore(player, 0);
        objDamagedAnvil.setScore(player, 0);
        objDandelion.setScore(player, 0);
        objDangerPotterySherd.setScore(player, 0);
        objDarkOakBoat.setScore(player, 0);
        objDarkOakButton.setScore(player, 0);
        objDarkOakChestBoat.setScore(player, 0);
        objDarkOakDoor.setScore(player, 0);
        objDarkOakFence.setScore(player, 0);
        objDarkOakFenceGate.setScore(player, 0);
        objDarkOakHangingSign.setScore(player, 0);
        objDarkOakLeaves.setScore(player, 0);
        objDarkOakLog.setScore(player, 0);
        objDarkOakPlanks.setScore(player, 0);
        objDarkOakPressurePlate.setScore(player, 0);
        objDarkOakSapling.setScore(player, 0);
        objDarkOakSign.setScore(player, 0);
        objDarkOakSlab.setScore(player, 0);
        objDarkOakStairs.setScore(player, 0);
        objDarkOakTrapdoor.setScore(player, 0);
        objDarkOakWood.setScore(player, 0);
        objDarkPrismarine.setScore(player, 0);
        objDarkPrismarineSlab.setScore(player, 0);
        objDarkPrismarineStairs.setScore(player, 0);
        objDaylightDetector.setScore(player, 0);
        objDeadBrainCoral.setScore(player, 0);
        objDeadBrainCoralBlock.setScore(player, 0);
        objDeadBrainCoralFan.setScore(player, 0);
        objDeadBubbleCoral.setScore(player, 0);
        objDeadBubbleCoralBlock.setScore(player, 0);
        objDeadBubbleCoralFan.setScore(player, 0);
        objDeadFireCoral.setScore(player, 0);
        objDeadFireCoralBlock.setScore(player, 0);
        objDeadFireCoralFan.setScore(player, 0);
        objDeadHornCoral.setScore(player, 0);
        objDeadHornCoralBlock.setScore(player, 0);
        objDeadHornCoralFan.setScore(player, 0);
        objDeadTubeCoral.setScore(player, 0);
        objDeadTubeCoralBlock.setScore(player, 0);
        objDeadbush.setScore(player, 0);
        objDecoratedPot.setScore(player, 0);
        objDeepslate.setScore(player, 0);
        objDeepslateBrickSlab.setScore(player, 0);
        objDeepslateBrickStairs.setScore(player, 0);
        objDeepslateBrickWall.setScore(player, 0);
        objDeepslateBricks.setScore(player, 0);
        objDeepslateCoalOre.setScore(player, 0);
        objDeepslateCopperOre.setScore(player, 0);
        objDeepslateDiamondOre.setScore(player, 0);
        objDeepslateEmeraldOre.setScore(player, 0);
        objDeepslateGoldOre.setScore(player, 0);
        objDeepslateIronOre.setScore(player, 0);
        objDeepslateLapisOre.setScore(player, 0);
        objDeepslateRedstoneOre.setScore(player, 0);
        objDeepslateTileSlab.setScore(player, 0);
        objDeepslateTileStairs.setScore(player, 0);
        objDeepslateTileWall.setScore(player, 0);
        objDeepslateTiles.setScore(player, 0);
        objDeny.setScore(player, 0);
        objDetectorRail.setScore(player, 0);
        objDiamond.setScore(player, 0);
        objDiamondAxe.setScore(player, 0);
        objDiamondBlock.setScore(player, 0);
        objDiamondBoots.setScore(player, 0);
        objDiamondChestplate.setScore(player, 0);
        objDiamondHelmet.setScore(player, 0);
        objDiamondHoe.setScore(player, 0);
        objDiamondHorseArmor.setScore(player, 0);
        objDiamondLeggings.setScore(player, 0);
        objDiamondOre.setScore(player, 0);
        objDiamondPickaxe.setScore(player, 0);
        objDiamondShovel.setScore(player, 0);
        objDiamondSword.setScore(player, 0);
        objDiorite.setScore(player, 0);
        objDioriteSlab.setScore(player, 0);
        objDioriteStairs.setScore(player, 0);
        objDioriteWall.setScore(player, 0);
        objDirt.setScore(player, 0);
        objDirtWithRoots.setScore(player, 0);
        objDiscFragment5.setScore(player, 0);
        objDispenser.setScore(player, 0);
        objDolphinSpawnEgg.setScore(player, 0);
        objDonkeySpawnEgg.setScore(player, 0);
        objDragonBreath.setScore(player, 0);
        objDragonEgg.setScore(player, 0);
        objDragonHead.setScore(player, 0);
        objDriedGhast.setScore(player, 0);
        objDriedKelp.setScore(player, 0);
        objDriedKelpBlock.setScore(player, 0);
        objDripstoneBlock.setScore(player, 0);
        objDropper.setScore(player, 0);
        objDrownedSpawnEgg.setScore(player, 0);
        objDuneArmorTrimSmithingTemplate.setScore(player, 0);
        objEchoShard.setScore(player, 0);
        objEgg.setScore(player, 0);
        objElderGuardianSpawnEgg.setScore(player, 0);
        objElytra.setScore(player, 0);
        objEmerald.setScore(player, 0);
        objEmeraldBlock.setScore(player, 0);
        objEmeraldOre.setScore(player, 0);
        objEmptyMap.setScore(player, 0);
        objEnchantedBook.setScore(player, 0);
        objEnchantedGoldenApple.setScore(player, 0);
        objEnchantingTable.setScore(player, 0);
        objEndBrickStairs.setScore(player, 0);
        objEndBricks.setScore(player, 0);
        objEndCrystal.setScore(player, 0);
        objEndPortalFrame.setScore(player, 0);
        objEndRod.setScore(player, 0);
        objEndStone.setScore(player, 0);
        objEndStoneBrickSlab.setScore(player, 0);
        objEndStoneBrickWall.setScore(player, 0);
        objEnderChest.setScore(player, 0);
        objEnderDragonSpawnEgg.setScore(player, 0);
        objEnderEye.setScore(player, 0);
        objEnderPearl.setScore(player, 0);
        objEndermanSpawnEgg.setScore(player, 0);
        objEndermiteSpawnEgg.setScore(player, 0);
        objEvokerSpawnEgg.setScore(player, 0);
        objExperienceBottle.setScore(player, 0);
        objExplorerPotterySherd.setScore(player, 0);
        objExposedChiseledCopper.setScore(player, 0);
        objExposedCopper.setScore(player, 0);
        objExposedCopperBulb.setScore(player, 0);
        objExposedCopperDoor.setScore(player, 0);
        objExposedCopperGrate.setScore(player, 0);
        objExposedCopperTrapdoor.setScore(player, 0);
        objExposedCutCopper.setScore(player, 0);
        objExposedCutCopperSlab.setScore(player, 0);
        objExposedCutCopperStairs.setScore(player, 0);
        objEyeArmorTrimSmithingTemplate.setScore(player, 0);
        objFarmland.setScore(player, 0);
        objFeather.setScore(player, 0);
        objFenceGate.setScore(player, 0);
        objFermentedSpiderEye.setScore(player, 0);
        objFern.setScore(player, 0);
        objFieldMasonedBannerPattern.setScore(player, 0);
        objFilledMap.setScore(player, 0);
        objFireCharge.setScore(player, 0);
        objFireCoral.setScore(player, 0);
        objFireCoralBlock.setScore(player, 0);
        objFireCoralFan.setScore(player, 0);
        objFireflyBush.setScore(player, 0);
        objFireworkRocket.setScore(player, 0);
        objFireworkStar.setScore(player, 0);
        objFishingRod.setScore(player, 0);
        objFletchingTable.setScore(player, 0);
        objFlint.setScore(player, 0);
        objFlintAndSteel.setScore(player, 0);
        objFlowArmorTrimSmithingTemplate.setScore(player, 0);
        objFlowBannerPattern.setScore(player, 0);
        objFlowPotterySherd.setScore(player, 0);
        objFlowerBannerPattern.setScore(player, 0);
        objFlowerPot.setScore(player, 0);
        objFloweringAzalea.setScore(player, 0);
        objFoxSpawnEgg.setScore(player, 0);
        objFrame.setScore(player, 0);
        objFriendPotterySherd.setScore(player, 0);
        objFrogSpawn.setScore(player, 0);
        objFrogSpawnEgg.setScore(player, 0);
        objFrostedIce.setScore(player, 0);
        objFurnace.setScore(player, 0);
        objGhastSpawnEgg.setScore(player, 0);
        objGhastTear.setScore(player, 0);
        objGildedBlackstone.setScore(player, 0);
        objGlass.setScore(player, 0);
        objGlassBottle.setScore(player, 0);
        objGlassPane.setScore(player, 0);
        objGlisteringMelonSlice.setScore(player, 0);
        objGlobeBannerPattern.setScore(player, 0);
        objGlowBerries.setScore(player, 0);
        objGlowFrame.setScore(player, 0);
        objGlowInkSac.setScore(player, 0);
        objGlowLichen.setScore(player, 0);
        objGlowSquidSpawnEgg.setScore(player, 0);
        objGlowstone.setScore(player, 0);
        objGlowstoneDust.setScore(player, 0);
        objGoatHorn.setScore(player, 0);
        objGoatSpawnEgg.setScore(player, 0);
        objGoldBlock.setScore(player, 0);
        objGoldIngot.setScore(player, 0);
        objGoldNugget.setScore(player, 0);
        objGoldOre.setScore(player, 0);
        objGoldenApple.setScore(player, 0);
        objGoldenAxe.setScore(player, 0);
        objGoldenBoots.setScore(player, 0);
        objGoldenCarrot.setScore(player, 0);
        objGoldenChestplate.setScore(player, 0);
        objGoldenHelmet.setScore(player, 0);
        objGoldenHoe.setScore(player, 0);
        objGoldenHorseArmor.setScore(player, 0);
        objGoldenLeggings.setScore(player, 0);
        objGoldenPickaxe.setScore(player, 0);
        objGoldenRail.setScore(player, 0);
        objGoldenShovel.setScore(player, 0);
        objGoldenSword.setScore(player, 0);
        objGranite.setScore(player, 0);
        objGraniteSlab.setScore(player, 0);
        objGraniteStairs.setScore(player, 0);
        objGraniteWall.setScore(player, 0);
        objGrassBlock.setScore(player, 0);
        objGrassPath.setScore(player, 0);
        objGravel.setScore(player, 0);
        objGrayBundle.setScore(player, 0);
        objGrayCandle.setScore(player, 0);
        objGrayCarpet.setScore(player, 0);
        objGrayConcrete.setScore(player, 0);
        objGrayConcretePowder.setScore(player, 0);
        objGrayDye.setScore(player, 0);
        objGrayGlazedTerracotta.setScore(player, 0);
        objGrayHarness.setScore(player, 0);
        objGrayShulkerBox.setScore(player, 0);
        objGrayStainedGlass.setScore(player, 0);
        objGrayStainedGlassPane.setScore(player, 0);
        objGrayTerracotta.setScore(player, 0);
        objGrayWool.setScore(player, 0);
        objGreenBundle.setScore(player, 0);
        objGreenCandle.setScore(player, 0);
        objGreenCarpet.setScore(player, 0);
        objGreenConcrete.setScore(player, 0);
        objGreenConcretePowder.setScore(player, 0);
        objGreenDye.setScore(player, 0);
        objGreenGlazedTerracotta.setScore(player, 0);
        objGreenHarness.setScore(player, 0);
        objGreenShulkerBox.setScore(player, 0);
        objGreenStainedGlass.setScore(player, 0);
        objGreenStainedGlassPane.setScore(player, 0);
        objGreenTerracotta.setScore(player, 0);
        objGreenWool.setScore(player, 0);
        objGrindstone.setScore(player, 0);
        objGuardianSpawnEgg.setScore(player, 0);
        objGunpowder.setScore(player, 0);
        objGusterBannerPattern.setScore(player, 0);
        objGusterPotterySherd.setScore(player, 0);
        objHangingRoots.setScore(player, 0);
        objHappyGhastSpawnEgg.setScore(player, 0);
        objHardenedClay.setScore(player, 0);
        objHayBlock.setScore(player, 0);
        objHeartOfTheSea.setScore(player, 0);
        objHeartPotterySherd.setScore(player, 0);
        objHeartbreakPotterySherd.setScore(player, 0);
        objHeavyCore.setScore(player, 0);
        objHeavyWeightedPressurePlate.setScore(player, 0);
        objHoglinSpawnEgg.setScore(player, 0);
        objHoneyBlock.setScore(player, 0);
        objHoneyBottle.setScore(player, 0);
        objHoneycomb.setScore(player, 0);
        objHoneycombBlock.setScore(player, 0);
        objHopper.setScore(player, 0);
        objHopperMinecart.setScore(player, 0);
        objHornCoral.setScore(player, 0);
        objHornCoralBlock.setScore(player, 0);
        objHornCoralFan.setScore(player, 0);
        objHorseSpawnEgg.setScore(player, 0);
        objHostArmorTrimSmithingTemplate.setScore(player, 0);
        objHowlPotterySherd.setScore(player, 0);
        objHuskSpawnEgg.setScore(player, 0);
        objIce.setScore(player, 0);
        objInfestedChiseledStoneBricks.setScore(player, 0);
        objInfestedCobblestone.setScore(player, 0);
        objInfestedCrackedStoneBricks.setScore(player, 0);
        objInfestedDeepslate.setScore(player, 0);
        objInfestedMossyStoneBricks.setScore(player, 0);
        objInfestedStone.setScore(player, 0);
        objInfestedStoneBricks.setScore(player, 0);
        objInkSac.setScore(player, 0);
        objIronAxe.setScore(player, 0);
        objIronBars.setScore(player, 0);
        objIronBlock.setScore(player, 0);
        objIronBoots.setScore(player, 0);
        objIronChestplate.setScore(player, 0);
        objIronDoor.setScore(player, 0);
        objIronGolemSpawnEgg.setScore(player, 0);
        objIronHelmet.setScore(player, 0);
        objIronHoe.setScore(player, 0);
        objIronHorseArmor.setScore(player, 0);
        objIronIngot.setScore(player, 0);
        objIronLeggings.setScore(player, 0);
        objIronNugget.setScore(player, 0);
        objIronOre.setScore(player, 0);
        objIronPickaxe.setScore(player, 0);
        objIronShovel.setScore(player, 0);
        objIronSword.setScore(player, 0);
        objIronTrapdoor.setScore(player, 0);
        objJigsaw.setScore(player, 0);
        objJukebox.setScore(player, 0);
        objJungleBoat.setScore(player, 0);
        objJungleButton.setScore(player, 0);
        objJungleChestBoat.setScore(player, 0);
        objJungleDoor.setScore(player, 0);
        objJungleFence.setScore(player, 0);
        objJungleFenceGate.setScore(player, 0);
        objJungleHangingSign.setScore(player, 0);
        objJungleLeaves.setScore(player, 0);
        objJungleLog.setScore(player, 0);
        objJunglePlanks.setScore(player, 0);
        objJunglePressurePlate.setScore(player, 0);
        objJungleSapling.setScore(player, 0);
        objJungleSign.setScore(player, 0);
        objJungleSlab.setScore(player, 0);
        objJungleStairs.setScore(player, 0);
        objJungleTrapdoor.setScore(player, 0);
        objJungleWood.setScore(player, 0);
        objKelp.setScore(player, 0);
        objLadder.setScore(player, 0);
        objLantern.setScore(player, 0);
        objLapisBlock.setScore(player, 0);
        objLapisLazuli.setScore(player, 0);
        objLapisOre.setScore(player, 0);
        objLargeAmethystBud.setScore(player, 0);
        objLargeFern.setScore(player, 0);
        objLavaBucket.setScore(player, 0);
        objLead.setScore(player, 0);
        objLeafLitter.setScore(player, 0);
        objLeather.setScore(player, 0);
        objLeatherBoots.setScore(player, 0);
        objLeatherChestplate.setScore(player, 0);
        objLeatherHelmet.setScore(player, 0);
        objLeatherHorseArmor.setScore(player, 0);
        objLeatherLeggings.setScore(player, 0);
        objLectern.setScore(player, 0);
        objLever.setScore(player, 0);
        objLightBlock0.setScore(player, 0);
        objLightBlock1.setScore(player, 0);
        objLightBlock10.setScore(player, 0);
        objLightBlock11.setScore(player, 0);
        objLightBlock12.setScore(player, 0);
        objLightBlock13.setScore(player, 0);
        objLightBlock14.setScore(player, 0);
        objLightBlock15.setScore(player, 0);
        objLightBlock2.setScore(player, 0);
        objLightBlock3.setScore(player, 0);
        objLightBlock4.setScore(player, 0);
        objLightBlock5.setScore(player, 0);
        objLightBlock6.setScore(player, 0);
        objLightBlock7.setScore(player, 0);
        objLightBlock8.setScore(player, 0);
        objLightBlock9.setScore(player, 0);
        objLightBlueBundle.setScore(player, 0);
        objLightBlueCandle.setScore(player, 0);
        objLightBlueCarpet.setScore(player, 0);
        objLightBlueConcrete.setScore(player, 0);
        objLightBlueConcretePowder.setScore(player, 0);
        objLightBlueDye.setScore(player, 0);
        objLightBlueGlazedTerracotta.setScore(player, 0);
        objLightBlueHarness.setScore(player, 0);
        objLightBlueShulkerBox.setScore(player, 0);
        objLightBlueStainedGlass.setScore(player, 0);
        objLightBlueStainedGlassPane.setScore(player, 0);
        objLightBlueTerracotta.setScore(player, 0);
        objLightBlueWool.setScore(player, 0);
        objLightGrayBundle.setScore(player, 0);
        objLightGrayCandle.setScore(player, 0);
        objLightGrayCarpet.setScore(player, 0);
        objLightGrayConcrete.setScore(player, 0);
        objLightGrayConcretePowder.setScore(player, 0);
        objLightGrayDye.setScore(player, 0);
        objLightGrayHarness.setScore(player, 0);
        objLightGrayShulkerBox.setScore(player, 0);
        objLightGrayStainedGlass.setScore(player, 0);
        objLightGrayStainedGlassPane.setScore(player, 0);
        objLightGrayTerracotta.setScore(player, 0);
        objLightGrayWool.setScore(player, 0);
        objLightWeightedPressurePlate.setScore(player, 0);
        objLightningRod.setScore(player, 0);
        objLilac.setScore(player, 0);
        objLilyOfTheValley.setScore(player, 0);
        objLimeBundle.setScore(player, 0);
        objLimeCandle.setScore(player, 0);
        objLimeCarpet.setScore(player, 0);
        objLimeConcrete.setScore(player, 0);
        objLimeConcretePowder.setScore(player, 0);
        objLimeDye.setScore(player, 0);
        objLimeGlazedTerracotta.setScore(player, 0);
        objLimeHarness.setScore(player, 0);
        objLimeShulkerBox.setScore(player, 0);
        objLimeStainedGlass.setScore(player, 0);
        objLimeStainedGlassPane.setScore(player, 0);
        objLimeTerracotta.setScore(player, 0);
        objLimeWool.setScore(player, 0);
        objLingeringPotion.setScore(player, 0);
        objLitPumpkin.setScore(player, 0);
        objLlamaSpawnEgg.setScore(player, 0);
        objLodestone.setScore(player, 0);
        objLodestoneCompass.setScore(player, 0);
        objLoom.setScore(player, 0);
        objMace.setScore(player, 0);
        objMagentaBundle.setScore(player, 0);
        objMagentaCandle.setScore(player, 0);
        objMagentaCarpet.setScore(player, 0);
        objMagentaConcrete.setScore(player, 0);
        objMagentaConcretePowder.setScore(player, 0);
        objMagentaDye.setScore(player, 0);
        objMagentaGlazedTerracotta.setScore(player, 0);
        objMagentaHarness.setScore(player, 0);
        objMagentaShulkerBox.setScore(player, 0);
        objMagentaStainedGlass.setScore(player, 0);
        objMagentaStainedGlassPane.setScore(player, 0);
        objMagentaTerracotta.setScore(player, 0);
        objMagentaWool.setScore(player, 0);
        objMagma.setScore(player, 0);
        objMagmaCream.setScore(player, 0);
        objMagmaCubeSpawnEgg.setScore(player, 0);
        objMangroveBoat.setScore(player, 0);
        objMangroveButton.setScore(player, 0);
        objMangroveChestBoat.setScore(player, 0);
        objMangroveDoor.setScore(player, 0);
        objMangroveFence.setScore(player, 0);
        objMangroveFenceGate.setScore(player, 0);
        objMangroveHangingSign.setScore(player, 0);
        objMangroveLeaves.setScore(player, 0);
        objMangroveLog.setScore(player, 0);
        objMangrovePlanks.setScore(player, 0);
        objMangrovePressurePlate.setScore(player, 0);
        objMangrovePropagule.setScore(player, 0);
        objMangroveRoots.setScore(player, 0);
        objMangroveSign.setScore(player, 0);
        objMangroveSlab.setScore(player, 0);
        objMangroveStairs.setScore(player, 0);
        objMangroveTrapdoor.setScore(player, 0);
        objMangroveWood.setScore(player, 0);
        objMediumAmethystBud.setScore(player, 0);
        objMelonBlock.setScore(player, 0);
        objMelonSeeds.setScore(player, 0);
        objMelonSlice.setScore(player, 0);
        objMilkBucket.setScore(player, 0);
        objMinecart.setScore(player, 0);
        objMinerPotterySherd.setScore(player, 0);
        objMobSpawner.setScore(player, 0);
        objMojangBannerPattern.setScore(player, 0);
        objMooshroomSpawnEgg.setScore(player, 0);
        objMossBlock.setScore(player, 0);
        objMossCarpet.setScore(player, 0);
        objMossyCobblestone.setScore(player, 0);
        objMossyCobblestoneSlab.setScore(player, 0);
        objMossyCobblestoneStairs.setScore(player, 0);
        objMossyCobblestoneWall.setScore(player, 0);
        objMossyStoneBrickSlab.setScore(player, 0);
        objMossyStoneBrickStairs.setScore(player, 0);
        objMossyStoneBrickWall.setScore(player, 0);
        objMossyStoneBricks.setScore(player, 0);
        objMournerPotterySherd.setScore(player, 0);
        objMud.setScore(player, 0);
        objMudBrickSlab.setScore(player, 0);
        objMudBrickStairs.setScore(player, 0);
        objMudBrickWall.setScore(player, 0);
        objMudBricks.setScore(player, 0);
        objMuddyMangroveRoots.setScore(player, 0);
        objMuleSpawnEgg.setScore(player, 0);
        objMushroomStem.setScore(player, 0);
        objMushroomStew.setScore(player, 0);
        objMusicDisc11.setScore(player, 0);
        objMusicDisc13.setScore(player, 0);
        objMusicDisc5.setScore(player, 0);
        objMusicDiscBlocks.setScore(player, 0);
        objMusicDiscCat.setScore(player, 0);
        objMusicDiscChirp.setScore(player, 0);
        objMusicDiscCreator.setScore(player, 0);
        objMusicDiscCreatorMusicBox.setScore(player, 0);
        objMusicDiscFar.setScore(player, 0);
        objMusicDiscLavaChicken.setScore(player, 0);
        objMusicDiscMall.setScore(player, 0);
        objMusicDiscMellohi.setScore(player, 0);
        objMusicDiscOtherside.setScore(player, 0);
        objMusicDiscPigstep.setScore(player, 0);
        objMusicDiscPrecipice.setScore(player, 0);
        objMusicDiscRelic.setScore(player, 0);
        objMusicDiscStal.setScore(player, 0);
        objMusicDiscStrad.setScore(player, 0);
        objMusicDiscTears.setScore(player, 0);
        objMusicDiscWait.setScore(player, 0);
        objMusicDiscWard.setScore(player, 0);
        objMutton.setScore(player, 0);
        objMycelium.setScore(player, 0);
        objNameTag.setScore(player, 0);
        objNautilusShell.setScore(player, 0);
        objNetherBrick.setScore(player, 0);
        objNetherBrickFence.setScore(player, 0);
        objNetherBrickSlab.setScore(player, 0);
        objNetherBrickStairs.setScore(player, 0);
        objNetherBrickWall.setScore(player, 0);
        objNetherGoldOre.setScore(player, 0);
        objNetherSprouts.setScore(player, 0);
        objNetherStar.setScore(player, 0);
        objNetherWart.setScore(player, 0);
        objNetherWartBlock.setScore(player, 0);
        objNetherbrick.setScore(player, 0);
        objNetheriteAxe.setScore(player, 0);
        objNetheriteBlock.setScore(player, 0);
        objNetheriteBoots.setScore(player, 0);
        objNetheriteChestplate.setScore(player, 0);
        objNetheriteHelmet.setScore(player, 0);
        objNetheriteHoe.setScore(player, 0);
        objNetheriteIngot.setScore(player, 0);
        objNetheriteLeggings.setScore(player, 0);
        objNetheritePickaxe.setScore(player, 0);
        objNetheriteScrap.setScore(player, 0);
        objNetheriteShovel.setScore(player, 0);
        objNetheriteSword.setScore(player, 0);
        objNetheriteUpgradeSmithingTemplate.setScore(player, 0);
        objNetherrack.setScore(player, 0);
        objNormalStoneSlab.setScore(player, 0);
        objNormalStoneStairs.setScore(player, 0);
        objNoteblock.setScore(player, 0);
        objOakBoat.setScore(player, 0);
        objOakChestBoat.setScore(player, 0);
        objOakFence.setScore(player, 0);
        objOakHangingSign.setScore(player, 0);
        objOakLeaves.setScore(player, 0);
        objOakLog.setScore(player, 0);
        objOakPlanks.setScore(player, 0);
        objOakSapling.setScore(player, 0);
        objOakSign.setScore(player, 0);
        objOakSlab.setScore(player, 0);
        objOakStairs.setScore(player, 0);
        objOakWood.setScore(player, 0);
        objObserver.setScore(player, 0);
        objObsidian.setScore(player, 0);
        objOcelotSpawnEgg.setScore(player, 0);
        objOchreFroglight.setScore(player, 0);
        objOminousBottle.setScore(player, 0);
        objOminousTrialKey.setScore(player, 0);
        objOpenEyeblossom.setScore(player, 0);
        objOrangeBundle.setScore(player, 0);
        objOrangeCandle.setScore(player, 0);
        objOrangeCarpet.setScore(player, 0);
        objOrangeConcrete.setScore(player, 0);
        objOrangeConcretePowder.setScore(player, 0);
        objOrangeDye.setScore(player, 0);
        objOrangeGlazedTerracotta.setScore(player, 0);
        objOrangeHarness.setScore(player, 0);
        objOrangeShulkerBox.setScore(player, 0);
        objOrangeStainedGlass.setScore(player, 0);
        objOrangeStainedGlassPane.setScore(player, 0);
        objOrangeTerracotta.setScore(player, 0);
        objOrangeTulip.setScore(player, 0);
        objOrangeWool.setScore(player, 0);
        objOxeyeDaisy.setScore(player, 0);
        objOxidizedChiseledCopper.setScore(player, 0);
        objOxidizedCopper.setScore(player, 0);
        objOxidizedCopperBulb.setScore(player, 0);
        objOxidizedCopperDoor.setScore(player, 0);
        objOxidizedCopperGrate.setScore(player, 0);
        objOxidizedCopperTrapdoor.setScore(player, 0);
        objOxidizedCutCopper.setScore(player, 0);
        objOxidizedCutCopperSlab.setScore(player, 0);
        objOxidizedCutCopperStairs.setScore(player, 0);
        objPackedIce.setScore(player, 0);
        objPackedMud.setScore(player, 0);
        objPainting.setScore(player, 0);
        objPaleHangingMoss.setScore(player, 0);
        objPaleMossBlock.setScore(player, 0);
        objPaleMossCarpet.setScore(player, 0);
        objPaleOakBoat.setScore(player, 0);
        objPaleOakButton.setScore(player, 0);
        objPaleOakChestBoat.setScore(player, 0);
        objPaleOakDoor.setScore(player, 0);
        objPaleOakFence.setScore(player, 0);
        objPaleOakFenceGate.setScore(player, 0);
        objPaleOakHangingSign.setScore(player, 0);
        objPaleOakLeaves.setScore(player, 0);
        objPaleOakLog.setScore(player, 0);
        objPaleOakPlanks.setScore(player, 0);
        objPaleOakPressurePlate.setScore(player, 0);
        objPaleOakSapling.setScore(player, 0);
        objPaleOakSign.setScore(player, 0);
        objPaleOakSlab.setScore(player, 0);
        objPaleOakStairs.setScore(player, 0);
        objPaleOakTrapdoor.setScore(player, 0);
        objPaleOakWood.setScore(player, 0);
        objPandaSpawnEgg.setScore(player, 0);
        objPaper.setScore(player, 0);
        objParrotSpawnEgg.setScore(player, 0);
        objPearlescentFroglight.setScore(player, 0);
        objPeony.setScore(player, 0);
        objPetrifiedOakSlab.setScore(player, 0);
        objPhantomMembrane.setScore(player, 0);
        objPhantomSpawnEgg.setScore(player, 0);
        objPigSpawnEgg.setScore(player, 0);
        objPiglinBannerPattern.setScore(player, 0);
        objPiglinBruteSpawnEgg.setScore(player, 0);
        objPiglinHead.setScore(player, 0);
        objPiglinSpawnEgg.setScore(player, 0);
        objPillagerSpawnEgg.setScore(player, 0);
        objPinkBundle.setScore(player, 0);
        objPinkCandle.setScore(player, 0);
        objPinkCarpet.setScore(player, 0);
        objPinkConcrete.setScore(player, 0);
        objPinkConcretePowder.setScore(player, 0);
        objPinkDye.setScore(player, 0);
        objPinkGlazedTerracotta.setScore(player, 0);
        objPinkHarness.setScore(player, 0);
        objPinkPetals.setScore(player, 0);
        objPinkShulkerBox.setScore(player, 0);
        objPinkStainedGlass.setScore(player, 0);
        objPinkStainedGlassPane.setScore(player, 0);
        objPinkTerracotta.setScore(player, 0);
        objPinkTulip.setScore(player, 0);
        objPinkWool.setScore(player, 0);
        objPiston.setScore(player, 0);
        objPitcherPlant.setScore(player, 0);
        objPitcherPod.setScore(player, 0);
        objPlayerHead.setScore(player, 0);
        objPlentyPotterySherd.setScore(player, 0);
        objPodzol.setScore(player, 0);
        objPointedDripstone.setScore(player, 0);
        objPoisonousPotato.setScore(player, 0);
        objPolarBearSpawnEgg.setScore(player, 0);
        objPolishedAndesite.setScore(player, 0);
        objPolishedAndesiteSlab.setScore(player, 0);
        objPolishedAndesiteStairs.setScore(player, 0);
        objPolishedBasalt.setScore(player, 0);
        objPolishedBlackstone.setScore(player, 0);
        objPolishedBlackstoneBrickSlab.setScore(player, 0);
        objPolishedBlackstoneBrickStairs.setScore(player, 0);
        objPolishedBlackstoneBrickWall.setScore(player, 0);
        objPolishedBlackstoneBricks.setScore(player, 0);
        objPolishedBlackstoneButton.setScore(player, 0);
        objPolishedBlackstonePressurePlate.setScore(player, 0);
        objPolishedBlackstoneSlab.setScore(player, 0);
        objPolishedBlackstoneStairs.setScore(player, 0);
        objPolishedBlackstoneWall.setScore(player, 0);
        objPolishedDeepslate.setScore(player, 0);
        objPolishedDeepslateSlab.setScore(player, 0);
        objPolishedDeepslateStairs.setScore(player, 0);
        objPolishedDeepslateWall.setScore(player, 0);
        objPolishedDiorite.setScore(player, 0);
        objPolishedDioriteSlab.setScore(player, 0);
        objPolishedDioriteStairs.setScore(player, 0);
        objPolishedGranite.setScore(player, 0);
        objPolishedGraniteSlab.setScore(player, 0);
        objPolishedGraniteStairs.setScore(player, 0);
        objPolishedTuff.setScore(player, 0);
        objPolishedTuffSlab.setScore(player, 0);
        objPolishedTuffStairs.setScore(player, 0);
        objPolishedTuffWall.setScore(player, 0);
        objPoppedChorusFruit.setScore(player, 0);
        objPoppy.setScore(player, 0);
        objPorkchop.setScore(player, 0);
        objPotato.setScore(player, 0);
        objPotion.setScore(player, 0);
        objPowderSnowBucket.setScore(player, 0);
        objPrismarine.setScore(player, 0);
        objPrismarineBrickSlab.setScore(player, 0);
        objPrismarineBricks.setScore(player, 0);
        objPrismarineBricksStairs.setScore(player, 0);
        objPrismarineCrystals.setScore(player, 0);
        objPrismarineShard.setScore(player, 0);
        objPrismarineSlab.setScore(player, 0);
        objPrismarineStairs.setScore(player, 0);
        objPrismarineWall.setScore(player, 0);
        objPrizePotterySherd.setScore(player, 0);
        objPufferfish.setScore(player, 0);
        objPufferfishBucket.setScore(player, 0);
        objPufferfishSpawnEgg.setScore(player, 0);
        objPumpkin.setScore(player, 0);
        objPumpkinPie.setScore(player, 0);
        objPumpkinSeeds.setScore(player, 0);
        objPurpleBundle.setScore(player, 0);
        objPurpleCandle.setScore(player, 0);
        objPurpleCarpet.setScore(player, 0);
        objPurpleConcrete.setScore(player, 0);
        objPurpleConcretePowder.setScore(player, 0);
        objPurpleDye.setScore(player, 0);
        objPurpleGlazedTerracotta.setScore(player, 0);
        objPurpleHarness.setScore(player, 0);
        objPurpleShulkerBox.setScore(player, 0);
        objPurpleStainedGlass.setScore(player, 0);
        objPurpleStainedGlassPane.setScore(player, 0);
        objPurpleTerracotta.setScore(player, 0);
        objPurpleWool.setScore(player, 0);
        objPurpurBlock.setScore(player, 0);
        objPurpurPillar.setScore(player, 0);
        objPurpurSlab.setScore(player, 0);
        objPurpurStairs.setScore(player, 0);
        objQuartz.setScore(player, 0);
        objQuartzBlock.setScore(player, 0);
        objQuartzBricks.setScore(player, 0);
        objQuartzOre.setScore(player, 0);
        objQuartzPillar.setScore(player, 0);
        objQuartzSlab.setScore(player, 0);
        objQuartzStairs.setScore(player, 0);
        objRabbit.setScore(player, 0);
        objRabbitFoot.setScore(player, 0);
        objRabbitHide.setScore(player, 0);
        objRabbitSpawnEgg.setScore(player, 0);
        objRabbitStew.setScore(player, 0);
        objRail.setScore(player, 0);
        objRaiserArmorTrimSmithingTemplate.setScore(player, 0);
        objRavagerSpawnEgg.setScore(player, 0);
        objRawCopper.setScore(player, 0);
        objRawCopperBlock.setScore(player, 0);
        objRawGold.setScore(player, 0);
        objRawGoldBlock.setScore(player, 0);
        objRawIron.setScore(player, 0);
        objRawIronBlock.setScore(player, 0);
        objRecoveryCompass.setScore(player, 0);
        objRedBundle.setScore(player, 0);
        objRedCandle.setScore(player, 0);
        objRedCarpet.setScore(player, 0);
        objRedConcrete.setScore(player, 0);
        objRedConcretePowder.setScore(player, 0);
        objRedDye.setScore(player, 0);
        objRedGlazedTerracotta.setScore(player, 0);
        objRedHarness.setScore(player, 0);
        objRedMushroom.setScore(player, 0);
        objRedMushroomBlock.setScore(player, 0);
        objRedNetherBrick.setScore(player, 0);
        objRedNetherBrickSlab.setScore(player, 0);
        objRedNetherBrickStairs.setScore(player, 0);
        objRedNetherBrickWall.setScore(player, 0);
        objRedSand.setScore(player, 0);
        objRedSandstone.setScore(player, 0);
        objRedSandstoneSlab.setScore(player, 0);
        objRedSandstoneStairs.setScore(player, 0);
        objRedSandstoneWall.setScore(player, 0);
        objRedShulkerBox.setScore(player, 0);
        objRedStainedGlass.setScore(player, 0);
        objRedStainedGlassPane.setScore(player, 0);
        objRedTerracotta.setScore(player, 0);
        objRedTulip.setScore(player, 0);
        objRedWool.setScore(player, 0);
        objRedstone.setScore(player, 0);
        objRedstoneBlock.setScore(player, 0);
        objRedstoneLamp.setScore(player, 0);
        objRedstoneOre.setScore(player, 0);
        objRedstoneTorch.setScore(player, 0);
        objReinforcedDeepslate.setScore(player, 0);
        objRepeater.setScore(player, 0);
        objRepeatingCommandBlock.setScore(player, 0);
        objResinBlock.setScore(player, 0);
        objResinBrick.setScore(player, 0);
        objResinBrickSlab.setScore(player, 0);
        objResinBrickStairs.setScore(player, 0);
        objResinBrickWall.setScore(player, 0);
        objResinBricks.setScore(player, 0);
        objResinClump.setScore(player, 0);
        objRespawnAnchor.setScore(player, 0);
        objRibArmorTrimSmithingTemplate.setScore(player, 0);
        objRoseBush.setScore(player, 0);
        objRottenFlesh.setScore(player, 0);
        objSaddle.setScore(player, 0);
        objSalmon.setScore(player, 0);
        objSalmonBucket.setScore(player, 0);
        objSalmonSpawnEgg.setScore(player, 0);
        objSand.setScore(player, 0);
        objSandstone.setScore(player, 0);
        objSandstoneSlab.setScore(player, 0);
        objSandstoneStairs.setScore(player, 0);
        objSandstoneWall.setScore(player, 0);
        objScaffolding.setScore(player, 0);
        objScrapePotterySherd.setScore(player, 0);
        objSculk.setScore(player, 0);
        objSculkCatalyst.setScore(player, 0);
        objSculkSensor.setScore(player, 0);
        objSculkShrieker.setScore(player, 0);
        objSculkVein.setScore(player, 0);
        objSeaLantern.setScore(player, 0);
        objSeaPickle.setScore(player, 0);
        objSeagrass.setScore(player, 0);
        objSentryArmorTrimSmithingTemplate.setScore(player, 0);
        objShaperArmorTrimSmithingTemplate.setScore(player, 0);
        objSheafPotterySherd.setScore(player, 0);
        objShears.setScore(player, 0);
        objSheepSpawnEgg.setScore(player, 0);
        objShelterPotterySherd.setScore(player, 0);
        objShield.setScore(player, 0);
        objShortDryGrass.setScore(player, 0);
        objShortGrass.setScore(player, 0);
        objShroomlight.setScore(player, 0);
        objShulkerShell.setScore(player, 0);
        objShulkerSpawnEgg.setScore(player, 0);
        objSilenceArmorTrimSmithingTemplate.setScore(player, 0);
        objSilverGlazedTerracotta.setScore(player, 0);
        objSilverfishSpawnEgg.setScore(player, 0);
        objSkeletonHorseSpawnEgg.setScore(player, 0);
        objSkeletonSkull.setScore(player, 0);
        objSkeletonSpawnEgg.setScore(player, 0);
        objSkullBannerPattern.setScore(player, 0);
        objSkullPotterySherd.setScore(player, 0);
        objSlime.setScore(player, 0);
        objSlimeBall.setScore(player, 0);
        objSlimeSpawnEgg.setScore(player, 0);
        objSmallAmethystBud.setScore(player, 0);
        objSmallDripleafBlock.setScore(player, 0);
        objSmithingTable.setScore(player, 0);
        objSmoker.setScore(player, 0);
        objSmoothBasalt.setScore(player, 0);
        objSmoothQuartz.setScore(player, 0);
        objSmoothQuartzSlab.setScore(player, 0);
        objSmoothQuartzStairs.setScore(player, 0);
        objSmoothRedSandstone.setScore(player, 0);
        objSmoothRedSandstoneSlab.setScore(player, 0);
        objSmoothRedSandstoneStairs.setScore(player, 0);
        objSmoothSandstone.setScore(player, 0);
        objSmoothSandstoneSlab.setScore(player, 0);
        objSmoothSandstoneStairs.setScore(player, 0);
        objSmoothStone.setScore(player, 0);
        objSmoothStoneSlab.setScore(player, 0);
        objSnifferEgg.setScore(player, 0);
        objSnifferSpawnEgg.setScore(player, 0);
        objSnortPotterySherd.setScore(player, 0);
        objSnoutArmorTrimSmithingTemplate.setScore(player, 0);
        objSnow.setScore(player, 0);
        objSnowGolemSpawnEgg.setScore(player, 0);
        objSnowLayer.setScore(player, 0);
        objSnowball.setScore(player, 0);
        objSoulCampfire.setScore(player, 0);
        objSoulLantern.setScore(player, 0);
        objSoulSand.setScore(player, 0);
        objSoulSoil.setScore(player, 0);
        objSoulTorch.setScore(player, 0);
        objSpiderEye.setScore(player, 0);
        objSpiderSpawnEgg.setScore(player, 0);
        objSpireArmorTrimSmithingTemplate.setScore(player, 0);
        objSplashPotion.setScore(player, 0);
        objSponge.setScore(player, 0);
        objSporeBlossom.setScore(player, 0);
        objSpruceBoat.setScore(player, 0);
        objSpruceButton.setScore(player, 0);
        objSpruceChestBoat.setScore(player, 0);
        objSpruceDoor.setScore(player, 0);
        objSpruceFence.setScore(player, 0);
        objSpruceFenceGate.setScore(player, 0);
        objSpruceHangingSign.setScore(player, 0);
        objSpruceLeaves.setScore(player, 0);
        objSpruceLog.setScore(player, 0);
        objSprucePlanks.setScore(player, 0);
        objSprucePressurePlate.setScore(player, 0);
        objSpruceSapling.setScore(player, 0);
        objSpruceSign.setScore(player, 0);
        objSpruceSlab.setScore(player, 0);
        objSpruceStairs.setScore(player, 0);
        objSpruceTrapdoor.setScore(player, 0);
        objSpruceWood.setScore(player, 0);
        objSpyglass.setScore(player, 0);
        objSquidSpawnEgg.setScore(player, 0);
        objStick.setScore(player, 0);
        objStickyPiston.setScore(player, 0);
        objStone.setScore(player, 0);
        objStoneAxe.setScore(player, 0);
        objStoneBrickSlab.setScore(player, 0);
        objStoneBrickStairs.setScore(player, 0);
        objStoneBrickWall.setScore(player, 0);
        objStoneBricks.setScore(player, 0);
        objStoneButton.setScore(player, 0);
        objStoneHoe.setScore(player, 0);
        objStonePickaxe.setScore(player, 0);
        objStonePressurePlate.setScore(player, 0);
        objStoneShovel.setScore(player, 0);
        objStoneStairs.setScore(player, 0);
        objStoneSword.setScore(player, 0);
        objStonecutterBlock.setScore(player, 0);
        objStraySpawnEgg.setScore(player, 0);
        objStriderSpawnEgg.setScore(player, 0);
        objString.setScore(player, 0);
        objStrippedAcaciaLog.setScore(player, 0);
        objStrippedAcaciaWood.setScore(player, 0);
        objStrippedBambooBlock.setScore(player, 0);
        objStrippedBirchLog.setScore(player, 0);
        objStrippedBirchWood.setScore(player, 0);
        objStrippedCherryLog.setScore(player, 0);
        objStrippedCherryWood.setScore(player, 0);
        objStrippedCrimsonHyphae.setScore(player, 0);
        objStrippedCrimsonStem.setScore(player, 0);
        objStrippedDarkOakLog.setScore(player, 0);
        objStrippedDarkOakWood.setScore(player, 0);
        objStrippedJungleLog.setScore(player, 0);
        objStrippedJungleWood.setScore(player, 0);
        objStrippedMangroveLog.setScore(player, 0);
        objStrippedMangroveWood.setScore(player, 0);
        objStrippedOakLog.setScore(player, 0);
        objStrippedOakWood.setScore(player, 0);
        objStrippedPaleOakLog.setScore(player, 0);
        objStrippedPaleOakWood.setScore(player, 0);
        objStrippedSpruceLog.setScore(player, 0);
        objStrippedSpruceWood.setScore(player, 0);
        objStrippedWarpedHyphae.setScore(player, 0);
        objStrippedWarpedStem.setScore(player, 0);
        objStructureBlock.setScore(player, 0);
        objStructureVoid.setScore(player, 0);
        objSugar.setScore(player, 0);
        objSugarCane.setScore(player, 0);
        objSunflower.setScore(player, 0);
        objSuspiciousGravel.setScore(player, 0);
        objSuspiciousSand.setScore(player, 0);
        objSuspiciousStew.setScore(player, 0);
        objSweetBerries.setScore(player, 0);
        objTadpoleBucket.setScore(player, 0);
        objTadpoleSpawnEgg.setScore(player, 0);
        objTallDryGrass.setScore(player, 0);
        objTallGrass.setScore(player, 0);
        objTarget.setScore(player, 0);
        objTideArmorTrimSmithingTemplate.setScore(player, 0);
        objTintedGlass.setScore(player, 0);
        objTnt.setScore(player, 0);
        objTntMinecart.setScore(player, 0);
        objTorch.setScore(player, 0);
        objTorchflower.setScore(player, 0);
        objTorchflowerSeeds.setScore(player, 0);
        objTotemOfUndying.setScore(player, 0);
        objTraderLlamaSpawnEgg.setScore(player, 0);
        objTrapdoor.setScore(player, 0);
        objTrappedChest.setScore(player, 0);
        objTrialKey.setScore(player, 0);
        objTrialSpawner.setScore(player, 0);
        objTrident.setScore(player, 0);
        objTripwireHook.setScore(player, 0);
        objTropicalFish.setScore(player, 0);
        objTropicalFishBucket.setScore(player, 0);
        objTropicalFishSpawnEgg.setScore(player, 0);
        objTubeCoral.setScore(player, 0);
        objTubeCoralBlock.setScore(player, 0);
        objTubeCoralFan.setScore(player, 0);
        objTuff.setScore(player, 0);
        objTuffBrickSlab.setScore(player, 0);
        objTuffBrickStairs.setScore(player, 0);
        objTuffBrickWall.setScore(player, 0);
        objTuffBricks.setScore(player, 0);
        objTuffSlab.setScore(player, 0);
        objTuffStairs.setScore(player, 0);
        objTuffWall.setScore(player, 0);
        objTurtleEgg.setScore(player, 0);
        objTurtleHelmet.setScore(player, 0);
        objTurtleScute.setScore(player, 0);
        objTurtleSpawnEgg.setScore(player, 0);
        objTwistingVines.setScore(player, 0);
        objUndyedShulkerBox.setScore(player, 0);
        objVault.setScore(player, 0);
        objVerdantFroglight.setScore(player, 0);
        objVexArmorTrimSmithingTemplate.setScore(player, 0);
        objVexSpawnEgg.setScore(player, 0);
        objVillagerSpawnEgg.setScore(player, 0);
        objVindicatorSpawnEgg.setScore(player, 0);
        objVine.setScore(player, 0);
        objWanderingTraderSpawnEgg.setScore(player, 0);
        objWardArmorTrimSmithingTemplate.setScore(player, 0);
        objWardenSpawnEgg.setScore(player, 0);
        objWarpedButton.setScore(player, 0);
        objWarpedDoor.setScore(player, 0);
        objWarpedFence.setScore(player, 0);
        objWarpedFenceGate.setScore(player, 0);
        objWarpedFungus.setScore(player, 0);
        objWarpedFungusOnAStick.setScore(player, 0);
        objWarpedHangingSign.setScore(player, 0);
        objWarpedHyphae.setScore(player, 0);
        objWarpedNylium.setScore(player, 0);
        objWarpedPlanks.setScore(player, 0);
        objWarpedPressurePlate.setScore(player, 0);
        objWarpedRoots.setScore(player, 0);
        objWarpedSign.setScore(player, 0);
        objWarpedSlab.setScore(player, 0);
        objWarpedStairs.setScore(player, 0);
        objWarpedStem.setScore(player, 0);
        objWarpedTrapdoor.setScore(player, 0);
        objWarpedWartBlock.setScore(player, 0);
        objWaterBucket.setScore(player, 0);
        objWaterlily.setScore(player, 0);
        objWaxedChiseledCopper.setScore(player, 0);
        objWaxedCopper.setScore(player, 0);
        objWaxedCopperBulb.setScore(player, 0);
        objWaxedCopperDoor.setScore(player, 0);
        objWaxedCopperGrate.setScore(player, 0);
        objWaxedCopperTrapdoor.setScore(player, 0);
        objWaxedCutCopper.setScore(player, 0);
        objWaxedCutCopperSlab.setScore(player, 0);
        objWaxedCutCopperStairs.setScore(player, 0);
        objWaxedExposedChiseledCopper.setScore(player, 0);
        objWaxedExposedCopper.setScore(player, 0);
        objWaxedExposedCopperBulb.setScore(player, 0);
        objWaxedExposedCopperDoor.setScore(player, 0);
        objWaxedExposedCopperGrate.setScore(player, 0);
        objWaxedExposedCopperTrapdoor.setScore(player, 0);
        objWaxedExposedCutCopper.setScore(player, 0);
        objWaxedExposedCutCopperSlab.setScore(player, 0);
        objWaxedExposedCutCopperStairs.setScore(player, 0);
        objWaxedOxidizedChiseledCopper.setScore(player, 0);
        objWaxedOxidizedCopper.setScore(player, 0);
        objWaxedOxidizedCopperBulb.setScore(player, 0);
        objWaxedOxidizedCopperDoor.setScore(player, 0);
        objWaxedOxidizedCopperGrate.setScore(player, 0);
        objWaxedOxidizedCopperTrapdoor.setScore(player, 0);
        objWaxedOxidizedCutCopper.setScore(player, 0);
        objWaxedOxidizedCutCopperSlab.setScore(player, 0);
        objWaxedOxidizedCutCopperStairs.setScore(player, 0);
        objWaxedWeatheredChiseledCopper.setScore(player, 0);
        objWaxedWeatheredCopper.setScore(player, 0);
        objWaxedWeatheredCopperBulb.setScore(player, 0);
        objWaxedWeatheredCopperDoor.setScore(player, 0);
        objWaxedWeatheredCopperGrate.setScore(player, 0);
        objWaxedWeatheredCopperTrapdoor.setScore(player, 0);
        objWaxedWeatheredCutCopper.setScore(player, 0);
        objWaxedWeatheredCutCopperSlab.setScore(player, 0);
        objWaxedWeatheredCutCopperStairs.setScore(player, 0);
        objWayfinderArmorTrimSmithingTemplate.setScore(player, 0);
        objWeatheredChiseledCopper.setScore(player, 0);
        objWeatheredCopper.setScore(player, 0);
        objWeatheredCopperBulb.setScore(player, 0);
        objWeatheredCopperDoor.setScore(player, 0);
        objWeatheredCopperGrate.setScore(player, 0);
        objWeatheredCopperTrapdoor.setScore(player, 0);
        objWeatheredCutCopper.setScore(player, 0);
        objWeatheredCutCopperSlab.setScore(player, 0);
        objWeatheredCutCopperStairs.setScore(player, 0);
        objWeb.setScore(player, 0);
        objWeepingVines.setScore(player, 0);
        objWetSponge.setScore(player, 0);
        objWheat.setScore(player, 0);
        objWheatSeeds.setScore(player, 0);
        objWhiteBundle.setScore(player, 0);
        objWhiteCandle.setScore(player, 0);
        objWhiteCarpet.setScore(player, 0);
        objWhiteConcrete.setScore(player, 0);
        objWhiteConcretePowder.setScore(player, 0);
        objWhiteDye.setScore(player, 0);
        objWhiteGlazedTerracotta.setScore(player, 0);
        objWhiteHarness.setScore(player, 0);
        objWhiteShulkerBox.setScore(player, 0);
        objWhiteStainedGlass.setScore(player, 0);
        objWhiteStainedGlassPane.setScore(player, 0);
        objWhiteTerracotta.setScore(player, 0);
        objWhiteTulip.setScore(player, 0);
        objWhiteWool.setScore(player, 0);
        objWildArmorTrimSmithingTemplate.setScore(player, 0);
        objWildflowers.setScore(player, 0);
        objWindCharge.setScore(player, 0);
        objWitchSpawnEgg.setScore(player, 0);
        objWitherRose.setScore(player, 0);
        objWitherSkeletonSkull.setScore(player, 0);
        objWitherSkeletonSpawnEgg.setScore(player, 0);
        objWitherSpawnEgg.setScore(player, 0);
        objWolfArmor.setScore(player, 0);
        objWolfSpawnEgg.setScore(player, 0);
        objWoodenAxe.setScore(player, 0);
        objWoodenButton.setScore(player, 0);
        objWoodenDoor.setScore(player, 0);
        objWoodenHoe.setScore(player, 0);
        objWoodenPickaxe.setScore(player, 0);
        objWoodenPressurePlate.setScore(player, 0);
        objWoodenShovel.setScore(player, 0);
        objWoodenSlab.setScore(player, 0);
        objWoodenSword.setScore(player, 0);
        objWritableBook.setScore(player, 0);
        objYellowBundle.setScore(player, 0);
        objYellowCandle.setScore(player, 0);
        objYellowCarpet.setScore(player, 0);
        objYellowConcrete.setScore(player, 0);
        objYellowConcretePowder.setScore(player, 0);
        objYellowDye.setScore(player, 0);
        objYellowGlazedTerracotta.setScore(player, 0);
        objYellowHarness.setScore(player, 0);
        objYellowShulkerBox.setScore(player, 0);
        objYellowStainedGlass.setScore(player, 0);
        objYellowStainedGlassPane.setScore(player, 0);
        objYellowTerracotta.setScore(player, 0);
        objYellowWool.setScore(player, 0);
        objZoglinSpawnEgg.setScore(player, 0);
        objZombieHead.setScore(player, 0);
        objZombieHorseSpawnEgg.setScore(player, 0);
        objZombiePigmanSpawnEgg.setScore(player, 0);
        objZombieSpawnEgg.setScore(player, 0);
        objZombieVillagerSpawnEgg.setScore(player, 0);

        // Set Scores for Items in slot.armor.head
        if (head?.typeId === "minecraft:carved_pumpkin") {
            objCarvedPumpkin.addScore(player, 1);
        }
        if (head?.typeId === "minecraft:chainmail_helmet") {
            objChainmailHelmet.addScore(player, 1);
        }
        if (head?.typeId === "minecraft:creeper_head") {
            objCreeperHead.addScore(player, 1);
        }
        if (head?.typeId === "minecraft:diamond_helmet") {
            objDiamondHelmet.addScore(player, 1);
        }
        if (head?.typeId === "minecraft:dragon_head") {
            objDragonHead.addScore(player, 1);
        }
        if (head?.typeId === "minecraft:golden_helmet") {
            objGoldenHelmet.addScore(player, 1);
        }
        if (head?.typeId === "minecraft:iron_helmet") {
            objIronHelmet.addScore(player, 1);
        }
        if (head?.typeId === "minecraft:leather_helmet") {
            objLeatherHelmet.addScore(player, 1);
        }
        if (head?.typeId === "minecraft:netherite_helmet") {
            objNetheriteHelmet.addScore(player, 1);
        }
        if (head?.typeId === "minecraft:piglin_head") {
            objPiglinHead.addScore(player, 1);
        }
        if (head?.typeId === "minecraft:player_head") {
            objPlayerHead.addScore(player, 1);
        }
        if (head?.typeId === "minecraft:skeleton_skull") {
            objSkeletonSkull.addScore(player, 1);
        }
        if (head?.typeId === "minecraft:turtle_helmet") {
            objTurtleHelmet.addScore(player, 1);
        }
        if (head?.typeId === "minecraft:wither_skeleton_skull") {
            objWitherSkeletonSkull.addScore(player, 1);
        }
        if (head?.typeId === "minecraft:zombie_head") {
            objZombieHead.addScore(player, 1);
        }

        // Set Scores for slot.armor.chest
        if (chest?.typeId === "minecraft:chainmail_chestplate") {
            objChainmailChestplate.addScore(player, 1);
        }
        if (chest?.typeId === "minecraft:diamond_chestplate") {
            objDiamondChestplate.addScore(player, 1);
        }
        if (chest?.typeId === "minecraft:elytra") {
            objElytra.addScore(player, 1);
        }
        if (chest?.typeId === "minecraft:golden_chestplate") {
            objGoldenChestplate.addScore(player, 1);
        }
        if (chest?.typeId === "minecraft:iron_chestplate") {
            objIronChestplate.addScore(player, 1);
        }
        if (chest?.typeId === "minecraft:leather_chestplate") {
            objLeatherChestplate.addScore(player, 1);
        }
        if (chest?.typeId === "minecraft:netherite_chestplate") {
            objNetheriteChestplate.addScore(player, 1);
        }

        // Set Scores for slot.armor.legs
        if (legs?.typeId === "minecraft:chainmail_leggings") {
            objChainmailLeggings.addScore(player, 1);
        }
        if (legs?.typeId === "minecraft:diamond_leggings") {
            objDiamondLeggings.addScore(player, 1);
        }
        if (legs?.typeId === "minecraft:golden_leggings") {
            objGoldenLeggings.addScore(player, 1);
        }
        if (legs?.typeId === "minecraft:iron_leggings") {
            objIronLeggings.addScore(player, 1);
        }
        if (legs?.typeId === "minecraft:leather_leggings") {
            objLeatherLeggings.addScore(player, 1);
        }
        if (legs?.typeId === "minecraft:netherite_leggings") {
            objNetheriteLeggings.addScore(player, 1);
        }

        // Set Scores for slot.armor.feet
        if (feet?.typeId === "minecraft:chainmail_boots") {
            objChainmailBoots.addScore(player, 1);
        }
        if (feet?.typeId === "minecraft:diamond_boots") {
            objDiamondBoots.addScore(player, 1);
        }
        if (feet?.typeId === "minecraft:golden_boots") {
            objGoldenBoots.addScore(player, 1);
        }
        if (feet?.typeId === "minecraft:iron_boots") {
            objIronBoots.addScore(player, 1);
        }
        if (feet?.typeId === "minecraft:leather_boots") {
            objLeatherBoots.addScore(player, 1);
        }
        if (feet?.typeId === "minecraft:netherite_boots") {
            objNetheriteBoots.addScore(player, 1);
        }

        // Set Score for non-stackables in slot.weapon.offhand
        if (offhand?.typeId === "minecraft:filled_map") {
            objFilledMap.addScore(player, 1);
        }
        if (offhand?.typeId === "minecraft:totem_of_undying") {
            objTotemOfUndying.addScore(player, 1);
        }
        if (offhand?.typeId === "minecraft:shield") {
            objShield.addScore(player, 1);
        }

        // Set Score for stackables in slot.weapon.offhand
        if (offhand?.typeId === "minecraft:arrow" || offhand?.typeId === "minecraft:firework_rocket" || offhand?.typeId === "minecraft:nautilus_shell") {
            world.getDimension("overworld").runCommand("/function item_count_offhand");
        }

        // Set Scores for Items in Cursor
        const item = cursor.item;
        if (item && item.typeId === "minecraft:acacia_boat") {
            objAcaciaBoat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:acacia_button") {
            objAcaciaButton.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:acacia_chest_boat") {
            objAcaciaChestBoat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:acacia_door") {
            objAcaciaDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:acacia_fence") {
            objAcaciaFence.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:acacia_fence_gate") {
            objAcaciaFenceGate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:acacia_hanging_sign") {
            objAcaciaHangingSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:acacia_leaves") {
            objAcaciaLeaves.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:acacia_log") {
            objAcaciaLog.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:acacia_planks") {
            objAcaciaPlanks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:acacia_pressure_plate") {
            objAcaciaPressurePlate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:acacia_sapling") {
            objAcaciaSapling.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:acacia_sign") {
            objAcaciaSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:acacia_slab") {
            objAcaciaSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:acacia_stairs") {
            objAcaciaStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:acacia_trapdoor") {
            objAcaciaTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:acacia_wood") {
            objAcaciaWood.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:activator_rail") {
            objActivatorRail.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:allay_spawn_egg") {
            objAllaySpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:allium") {
            objAllium.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:allow") {
            objAllow.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:amethyst_block") {
            objAmethystBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:amethyst_cluster") {
            objAmethystCluster.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:amethyst_shard") {
            objAmethystShard.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:ancient_debris") {
            objAncientDebris.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:andesite") {
            objAndesite.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:andesite_slab") {
            objAndesiteSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:andesite_stairs") {
            objAndesiteStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:andesite_wall") {
            objAndesiteWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:angler_pottery_sherd") {
            objAnglerPotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:anvil") {
            objAnvil.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:apple") {
            objApple.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:archer_pottery_sherd") {
            objArcherPotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:armadillo_scute") {
            objArmadilloScute.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:armadillo_spawn_egg") {
            objArmadilloSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:armor_stand") {
            objArmorStand.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:arms_up_pottery_sherd") {
            objArmsUpPotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:arrow") {
            objArrow.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:axolotl_bucket") {
            objAxolotlBucket.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:axolotl_spawn_egg") {
            objAxolotlSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:azalea") {
            objAzalea.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:azalea_leaves") {
            objAzaleaLeaves.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:azalea_leaves_flowered") {
            objAzaleaLeavesFlowered.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:azure_bluet") {
            objAzureBluet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:baked_potato") {
            objBakedPotato.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bamboo") {
            objBamboo.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bamboo_block") {
            objBambooBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bamboo_button") {
            objBambooButton.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bamboo_chest_raft") {
            objBambooChestRaft.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bamboo_door") {
            objBambooDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bamboo_fence") {
            objBambooFence.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bamboo_fence_gate") {
            objBambooFenceGate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bamboo_hanging_sign") {
            objBambooHangingSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bamboo_mosaic") {
            objBambooMosaic.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bamboo_mosaic_slab") {
            objBambooMosaicSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bamboo_mosaic_stairs") {
            objBambooMosaicStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bamboo_planks") {
            objBambooPlanks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bamboo_pressure_plate") {
            objBambooPressurePlate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bamboo_raft") {
            objBambooRaft.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bamboo_sign") {
            objBambooSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bamboo_slab") {
            objBambooSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bamboo_stairs") {
            objBambooStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bamboo_trapdoor") {
            objBambooTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:banner") {
            objBanner.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:barrel") {
            objBarrel.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:barrier") {
            objBarrier.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:basalt") {
            objBasalt.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bat_spawn_egg") {
            objBatSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:beacon") {
            objBeacon.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bed") {
            objBed.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bedrock") {
            objBedrock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bee_nest") {
            objBeeNest.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bee_spawn_egg") {
            objBeeSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:beef") {
            objBeef.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:beehive") {
            objBeehive.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:beetroot") {
            objBeetroot.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:beetroot_seeds") {
            objBeetrootSeeds.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:beetroot_soup") {
            objBeetrootSoup.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bell") {
            objBell.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:big_dripleaf") {
            objBigDripleaf.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:birch_boat") {
            objBirchBoat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:birch_button") {
            objBirchButton.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:birch_chest_boat") {
            objBirchChestBoat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:birch_door") {
            objBirchDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:birch_fence") {
            objBirchFence.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:birch_fence_gate") {
            objBirchFenceGate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:birch_hanging_sign") {
            objBirchHangingSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:birch_leaves") {
            objBirchLeaves.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:birch_log") {
            objBirchLog.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:birch_planks") {
            objBirchPlanks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:birch_pressure_plate") {
            objBirchPressurePlate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:birch_sapling") {
            objBirchSapling.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:birch_sign") {
            objBirchSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:birch_slab") {
            objBirchSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:birch_stairs") {
            objBirchStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:birch_trapdoor") {
            objBirchTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:birch_wood") {
            objBirchWood.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:black_bundle") {
            objBlackBundle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:black_candle") {
            objBlackCandle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:black_carpet") {
            objBlackCarpet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:black_concrete") {
            objBlackConcrete.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:black_concrete_powder") {
            objBlackConcretePowder.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:black_dye") {
            objBlackDye.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:black_glazed_terracotta") {
            objBlackGlazedTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:black_harness") {
            objBlackHarness.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:black_shulker_box") {
            objBlackShulkerBox.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:black_stained_glass") {
            objBlackStainedGlass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:black_stained_glass_pane") {
            objBlackStainedGlassPane.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:black_terracotta") {
            objBlackTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:black_wool") {
            objBlackWool.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blackstone") {
            objBlackstone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blackstone_slab") {
            objBlackstoneSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blackstone_stairs") {
            objBlackstoneStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blackstone_wall") {
            objBlackstoneWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blade_pottery_sherd") {
            objBladePotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blast_furnace") {
            objBlastFurnace.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blaze_powder") {
            objBlazePowder.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blaze_rod") {
            objBlazeRod.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blaze_spawn_egg") {
            objBlazeSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blue_bundle") {
            objBlueBundle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blue_candle") {
            objBlueCandle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blue_carpet") {
            objBlueCarpet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blue_concrete") {
            objBlueConcrete.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blue_concrete_powder") {
            objBlueConcretePowder.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blue_dye") {
            objBlueDye.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blue_egg") {
            objBlueEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blue_glazed_terracotta") {
            objBlueGlazedTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blue_harness") {
            objBlueHarness.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blue_ice") {
            objBlueIce.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blue_orchid") {
            objBlueOrchid.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blue_shulker_box") {
            objBlueShulkerBox.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blue_stained_glass") {
            objBlueStainedGlass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blue_stained_glass_pane") {
            objBlueStainedGlassPane.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blue_terracotta") {
            objBlueTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:blue_wool") {
            objBlueWool.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bogged_spawn_egg") {
            objBoggedSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bolt_armor_trim_smithing_template") {
            objBoltArmorTrimSmithingTemplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bone") {
            objBone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bone_block") {
            objBoneBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bone_meal") {
            objBoneMeal.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:book") {
            objBook.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bookshelf") {
            objBookshelf.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:border_block") {
            objBorderBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bordure_indented_banner_pattern") {
            objBordureIndentedBannerPattern.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bow") {
            objBow.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bowl") {
            objBowl.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brain_coral") {
            objBrainCoral.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brain_coral_block") {
            objBrainCoralBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brain_coral_fan") {
            objBrainCoralFan.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bread") {
            objBread.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:breeze_rod") {
            objBreezeRod.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:breeze_spawn_egg") {
            objBreezeSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brewer_pottery_sherd") {
            objBrewerPotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brewing_stand") {
            objBrewingStand.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brick") {
            objBrick.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brick_block") {
            objBrickBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brick_slab") {
            objBrickSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brick_stairs") {
            objBrickStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brick_wall") {
            objBrickWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brown_bundle") {
            objBrownBundle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brown_candle") {
            objBrownCandle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brown_carpet") {
            objBrownCarpet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brown_concrete") {
            objBrownConcrete.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brown_concrete_powder") {
            objBrownConcretePowder.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brown_dye") {
            objBrownDye.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brown_egg") {
            objBrownEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brown_glazed_terracotta") {
            objBrownGlazedTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brown_harness") {
            objBrownHarness.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brown_mushroom") {
            objBrownMushroom.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brown_mushroom_block") {
            objBrownMushroomBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brown_shulker_box") {
            objBrownShulkerBox.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brown_stained_glass") {
            objBrownStainedGlass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brown_stained_glass_pane") {
            objBrownStainedGlassPane.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brown_terracotta") {
            objBrownTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brown_wool") {
            objBrownWool.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:brush") {
            objBrush.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bubble_coral") {
            objBubbleCoral.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bubble_coral_block") {
            objBubbleCoralBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bubble_coral_fan") {
            objBubbleCoralFan.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bucket") {
            objBucket.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:budding_amethyst") {
            objBuddingAmethyst.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bundle") {
            objBundle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:burn_pottery_sherd") {
            objBurnPotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:bush") {
            objBush.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cactus") {
            objCactus.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cactus_flower") {
            objCactusFlower.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cake") {
            objCake.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:calcite") {
            objCalcite.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:calibrated_sculk_sensor") {
            objCalibratedSculkSensor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:camel_spawn_egg") {
            objCamelSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:campfire") {
            objCampfire.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:candle") {
            objCandle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:carpet") {
            objCarpet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:carrot") {
            objCarrot.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:carrot_on_a_stick") {
            objCarrotOnAStick.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cartography_table") {
            objCartographyTable.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:carved_pumpkin") {
            objCarvedPumpkin.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cat_spawn_egg") {
            objCatSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cauldron") {
            objCauldron.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cave_spider_spawn_egg") {
            objCaveSpiderSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chain") {
            objChain.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chain_command_block") {
            objChainCommandBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chainmail_boots") {
            objChainmailBoots.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chainmail_chestplate") {
            objChainmailChestplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chainmail_helmet") {
            objChainmailHelmet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chainmail_leggings") {
            objChainmailLeggings.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:charcoal") {
            objCharcoal.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cherry_boat") {
            objCherryBoat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cherry_button") {
            objCherryButton.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cherry_chest_boat") {
            objCherryChestBoat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cherry_door") {
            objCherryDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cherry_fence") {
            objCherryFence.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cherry_fence_gate") {
            objCherryFenceGate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cherry_hanging_sign") {
            objCherryHangingSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cherry_leaves") {
            objCherryLeaves.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cherry_log") {
            objCherryLog.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cherry_planks") {
            objCherryPlanks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cherry_pressure_plate") {
            objCherryPressurePlate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cherry_sapling") {
            objCherrySapling.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cherry_sign") {
            objCherrySign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cherry_slab") {
            objCherrySlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cherry_stairs") {
            objCherryStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cherry_trapdoor") {
            objCherryTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cherry_wood") {
            objCherryWood.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chest") {
            objChest.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chest_boat") {
            objChestBoat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chest_minecart") {
            objChestMinecart.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chicken") {
            objChicken.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chicken_spawn_egg") {
            objChickenSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chipped_anvil") {
            objChippedAnvil.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chiseled_bookshelf") {
            objChiseledBookshelf.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chiseled_copper") {
            objChiseledCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chiseled_deepslate") {
            objChiseledDeepslate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chiseled_nether_bricks") {
            objChiseledNetherBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chiseled_polished_blackstone") {
            objChiseledPolishedBlackstone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chiseled_quartz_block") {
            objChiseledQuartzBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chiseled_red_sandstone") {
            objChiseledRedSandstone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chiseled_resin_bricks") {
            objChiseledResinBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chiseled_sandstone") {
            objChiseledSandstone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chiseled_stone_bricks") {
            objChiseledStoneBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chiseled_tuff") {
            objChiseledTuff.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chiseled_tuff_bricks") {
            objChiseledTuffBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chorus_flower") {
            objChorusFlower.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chorus_fruit") {
            objChorusFruit.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:chorus_plant") {
            objChorusPlant.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:clay") {
            objClay.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:clay_ball") {
            objClayBall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:clock") {
            objClock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:closed_eyeblossom") {
            objClosedEyeblossom.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:coal") {
            objCoal.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:coal_block") {
            objCoalBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:coal_ore") {
            objCoalOre.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:coarse_dirt") {
            objCoarseDirt.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:coast_armor_trim_smithing_template") {
            objCoastArmorTrimSmithingTemplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cobbled_deepslate") {
            objCobbledDeepslate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cobbled_deepslate_slab") {
            objCobbledDeepslateSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cobbled_deepslate_stairs") {
            objCobbledDeepslateStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cobbled_deepslate_wall") {
            objCobbledDeepslateWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cobblestone") {
            objCobblestone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cobblestone_slab") {
            objCobblestoneSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cobblestone_wall") {
            objCobblestoneWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cocoa_beans") {
            objCocoaBeans.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cod") {
            objCod.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cod_bucket") {
            objCodBucket.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cod_spawn_egg") {
            objCodSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:command_block") {
            objCommandBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:command_block_minecart") {
            objCommandBlockMinecart.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:comparator") {
            objComparator.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:compass") {
            objCompass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:composter") {
            objComposter.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:conduit") {
            objConduit.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cooked_beef") {
            objCookedBeef.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cooked_chicken") {
            objCookedChicken.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cooked_cod") {
            objCookedCod.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cooked_mutton") {
            objCookedMutton.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cooked_porkchop") {
            objCookedPorkchop.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cooked_rabbit") {
            objCookedRabbit.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cooked_salmon") {
            objCookedSalmon.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cookie") {
            objCookie.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:copper_block") {
            objCopperBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:copper_bulb") {
            objCopperBulb.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:copper_door") {
            objCopperDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:copper_grate") {
            objCopperGrate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:copper_ingot") {
            objCopperIngot.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:copper_ore") {
            objCopperOre.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:copper_trapdoor") {
            objCopperTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cornflower") {
            objCornflower.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cow_spawn_egg") {
            objCowSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cracked_deepslate_bricks") {
            objCrackedDeepslateBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cracked_deepslate_tiles") {
            objCrackedDeepslateTiles.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cracked_nether_bricks") {
            objCrackedNetherBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cracked_polished_blackstone_bricks") {
            objCrackedPolishedBlackstoneBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cracked_stone_bricks") {
            objCrackedStoneBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:crafter") {
            objCrafter.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:crafting_table") {
            objCraftingTable.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:creaking_heart") {
            objCreakingHeart.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:creaking_spawn_egg") {
            objCreakingSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:creeper_banner_pattern") {
            objCreeperBannerPattern.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:creeper_head") {
            objCreeperHead.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:creeper_spawn_egg") {
            objCreeperSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:crimson_button") {
            objCrimsonButton.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:crimson_door") {
            objCrimsonDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:crimson_fence") {
            objCrimsonFence.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:crimson_fence_gate") {
            objCrimsonFenceGate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:crimson_fungus") {
            objCrimsonFungus.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:crimson_hanging_sign") {
            objCrimsonHangingSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:crimson_hyphae") {
            objCrimsonHyphae.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:crimson_nylium") {
            objCrimsonNylium.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:crimson_planks") {
            objCrimsonPlanks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:crimson_pressure_plate") {
            objCrimsonPressurePlate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:crimson_roots") {
            objCrimsonRoots.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:crimson_sign") {
            objCrimsonSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:crimson_slab") {
            objCrimsonSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:crimson_stairs") {
            objCrimsonStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:crimson_stem") {
            objCrimsonStem.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:crimson_trapdoor") {
            objCrimsonTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:crossbow") {
            objCrossbow.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:crying_obsidian") {
            objCryingObsidian.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cut_copper") {
            objCutCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cut_copper_slab") {
            objCutCopperSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cut_copper_stairs") {
            objCutCopperStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cut_red_sandstone") {
            objCutRedSandstone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cut_red_sandstone_slab") {
            objCutRedSandstoneSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cut_sandstone") {
            objCutSandstone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cut_sandstone_slab") {
            objCutSandstoneSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cyan_bundle") {
            objCyanBundle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cyan_candle") {
            objCyanCandle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cyan_carpet") {
            objCyanCarpet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cyan_concrete") {
            objCyanConcrete.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cyan_concrete_powder") {
            objCyanConcretePowder.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cyan_dye") {
            objCyanDye.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cyan_glazed_terracotta") {
            objCyanGlazedTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cyan_harness") {
            objCyanHarness.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cyan_shulker_box") {
            objCyanShulkerBox.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cyan_stained_glass") {
            objCyanStainedGlass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cyan_stained_glass_pane") {
            objCyanStainedGlassPane.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cyan_terracotta") {
            objCyanTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:cyan_wool") {
            objCyanWool.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:damaged_anvil") {
            objDamagedAnvil.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dandelion") {
            objDandelion.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:danger_pottery_sherd") {
            objDangerPotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dark_oak_boat") {
            objDarkOakBoat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dark_oak_button") {
            objDarkOakButton.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dark_oak_chest_boat") {
            objDarkOakChestBoat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dark_oak_door") {
            objDarkOakDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dark_oak_fence") {
            objDarkOakFence.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dark_oak_fence_gate") {
            objDarkOakFenceGate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dark_oak_hanging_sign") {
            objDarkOakHangingSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dark_oak_leaves") {
            objDarkOakLeaves.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dark_oak_log") {
            objDarkOakLog.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dark_oak_planks") {
            objDarkOakPlanks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dark_oak_pressure_plate") {
            objDarkOakPressurePlate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dark_oak_sapling") {
            objDarkOakSapling.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dark_oak_sign") {
            objDarkOakSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dark_oak_slab") {
            objDarkOakSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dark_oak_stairs") {
            objDarkOakStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dark_oak_trapdoor") {
            objDarkOakTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dark_oak_wood") {
            objDarkOakWood.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dark_prismarine") {
            objDarkPrismarine.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dark_prismarine_slab") {
            objDarkPrismarineSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dark_prismarine_stairs") {
            objDarkPrismarineStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:daylight_detector") {
            objDaylightDetector.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dead_brain_coral") {
            objDeadBrainCoral.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dead_brain_coral_block") {
            objDeadBrainCoralBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dead_brain_coral_fan") {
            objDeadBrainCoralFan.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dead_bubble_coral") {
            objDeadBubbleCoral.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dead_bubble_coral_block") {
            objDeadBubbleCoralBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dead_bubble_coral_fan") {
            objDeadBubbleCoralFan.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dead_fire_coral") {
            objDeadFireCoral.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dead_fire_coral_block") {
            objDeadFireCoralBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dead_fire_coral_fan") {
            objDeadFireCoralFan.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dead_horn_coral") {
            objDeadHornCoral.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dead_horn_coral_block") {
            objDeadHornCoralBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dead_horn_coral_fan") {
            objDeadHornCoralFan.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dead_tube_coral") {
            objDeadTubeCoral.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dead_tube_coral_block") {
            objDeadTubeCoralBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:deadbush") {
            objDeadbush.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:decorated_pot") {
            objDecoratedPot.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:deepslate") {
            objDeepslate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:deepslate_brick_slab") {
            objDeepslateBrickSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:deepslate_brick_stairs") {
            objDeepslateBrickStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:deepslate_brick_wall") {
            objDeepslateBrickWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:deepslate_bricks") {
            objDeepslateBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:deepslate_coal_ore") {
            objDeepslateCoalOre.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:deepslate_copper_ore") {
            objDeepslateCopperOre.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:deepslate_diamond_ore") {
            objDeepslateDiamondOre.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:deepslate_emerald_ore") {
            objDeepslateEmeraldOre.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:deepslate_gold_ore") {
            objDeepslateGoldOre.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:deepslate_iron_ore") {
            objDeepslateIronOre.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:deepslate_lapis_ore") {
            objDeepslateLapisOre.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:deepslate_redstone_ore") {
            objDeepslateRedstoneOre.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:deepslate_tile_slab") {
            objDeepslateTileSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:deepslate_tile_stairs") {
            objDeepslateTileStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:deepslate_tile_wall") {
            objDeepslateTileWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:deepslate_tiles") {
            objDeepslateTiles.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:deny") {
            objDeny.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:detector_rail") {
            objDetectorRail.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:diamond") {
            objDiamond.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:diamond_axe") {
            objDiamondAxe.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:diamond_block") {
            objDiamondBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:diamond_boots") {
            objDiamondBoots.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:diamond_chestplate") {
            objDiamondChestplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:diamond_helmet") {
            objDiamondHelmet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:diamond_hoe") {
            objDiamondHoe.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:diamond_horse_armor") {
            objDiamondHorseArmor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:diamond_leggings") {
            objDiamondLeggings.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:diamond_ore") {
            objDiamondOre.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:diamond_pickaxe") {
            objDiamondPickaxe.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:diamond_shovel") {
            objDiamondShovel.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:diamond_sword") {
            objDiamondSword.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:diorite") {
            objDiorite.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:diorite_slab") {
            objDioriteSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:diorite_stairs") {
            objDioriteStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:diorite_wall") {
            objDioriteWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dirt") {
            objDirt.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dirt_with_roots") {
            objDirtWithRoots.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:disc_fragment_5") {
            objDiscFragment5.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dispenser") {
            objDispenser.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dolphin_spawn_egg") {
            objDolphinSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:donkey_spawn_egg") {
            objDonkeySpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dragon_breath") {
            objDragonBreath.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dragon_egg") {
            objDragonEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dragon_head") {
            objDragonHead.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dried_ghast") {
            objDriedGhast.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dried_kelp") {
            objDriedKelp.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dried_kelp_block") {
            objDriedKelpBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dripstone_block") {
            objDripstoneBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dropper") {
            objDropper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:drowned_spawn_egg") {
            objDrownedSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:dune_armor_trim_smithing_template") {
            objDuneArmorTrimSmithingTemplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:echo_shard") {
            objEchoShard.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:egg") {
            objEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:elder_guardian_spawn_egg") {
            objElderGuardianSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:elytra") {
            objElytra.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:emerald") {
            objEmerald.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:emerald_block") {
            objEmeraldBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:emerald_ore") {
            objEmeraldOre.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:empty_map") {
            objEmptyMap.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:enchanted_book") {
            objEnchantedBook.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:enchanted_golden_apple") {
            objEnchantedGoldenApple.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:enchanting_table") {
            objEnchantingTable.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:end_brick_stairs") {
            objEndBrickStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:end_bricks") {
            objEndBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:end_crystal") {
            objEndCrystal.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:end_portal_frame") {
            objEndPortalFrame.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:end_rod") {
            objEndRod.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:end_stone") {
            objEndStone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:end_stone_brick_slab") {
            objEndStoneBrickSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:end_stone_brick_wall") {
            objEndStoneBrickWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:ender_chest") {
            objEnderChest.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:ender_dragon_spawn_egg") {
            objEnderDragonSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:ender_eye") {
            objEnderEye.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:ender_pearl") {
            objEnderPearl.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:enderman_spawn_egg") {
            objEndermanSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:endermite_spawn_egg") {
            objEndermiteSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:evoker_spawn_egg") {
            objEvokerSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:experience_bottle") {
            objExperienceBottle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:explorer_pottery_sherd") {
            objExplorerPotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:exposed_chiseled_copper") {
            objExposedChiseledCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:exposed_copper") {
            objExposedCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:exposed_copper_bulb") {
            objExposedCopperBulb.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:exposed_copper_door") {
            objExposedCopperDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:exposed_copper_grate") {
            objExposedCopperGrate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:exposed_copper_trapdoor") {
            objExposedCopperTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:exposed_cut_copper") {
            objExposedCutCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:exposed_cut_copper_slab") {
            objExposedCutCopperSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:exposed_cut_copper_stairs") {
            objExposedCutCopperStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:eye_armor_trim_smithing_template") {
            objEyeArmorTrimSmithingTemplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:farmland") {
            objFarmland.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:feather") {
            objFeather.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:fence_gate") {
            objFenceGate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:fermented_spider_eye") {
            objFermentedSpiderEye.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:fern") {
            objFern.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:field_masoned_banner_pattern") {
            objFieldMasonedBannerPattern.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:filled_map") {
            objFilledMap.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:fire_charge") {
            objFireCharge.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:fire_coral") {
            objFireCoral.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:fire_coral_block") {
            objFireCoralBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:fire_coral_fan") {
            objFireCoralFan.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:firefly_bush") {
            objFireflyBush.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:firework_rocket") {
            objFireworkRocket.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:firework_star") {
            objFireworkStar.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:fishing_rod") {
            objFishingRod.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:fletching_table") {
            objFletchingTable.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:flint") {
            objFlint.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:flint_and_steel") {
            objFlintAndSteel.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:flow_armor_trim_smithing_template") {
            objFlowArmorTrimSmithingTemplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:flow_banner_pattern") {
            objFlowBannerPattern.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:flow_pottery_sherd") {
            objFlowPotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:flower_banner_pattern") {
            objFlowerBannerPattern.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:flower_pot") {
            objFlowerPot.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:flowering_azalea") {
            objFloweringAzalea.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:fox_spawn_egg") {
            objFoxSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:frame") {
            objFrame.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:friend_pottery_sherd") {
            objFriendPotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:frog_spawn") {
            objFrogSpawn.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:frog_spawn_egg") {
            objFrogSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:frosted_ice") {
            objFrostedIce.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:furnace") {
            objFurnace.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:ghast_spawn_egg") {
            objGhastSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:ghast_tear") {
            objGhastTear.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:gilded_blackstone") {
            objGildedBlackstone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:glass") {
            objGlass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:glass_bottle") {
            objGlassBottle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:glass_pane") {
            objGlassPane.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:glistering_melon_slice") {
            objGlisteringMelonSlice.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:globe_banner_pattern") {
            objGlobeBannerPattern.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:glow_berries") {
            objGlowBerries.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:glow_frame") {
            objGlowFrame.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:glow_ink_sac") {
            objGlowInkSac.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:glow_lichen") {
            objGlowLichen.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:glow_squid_spawn_egg") {
            objGlowSquidSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:glowstone") {
            objGlowstone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:glowstone_dust") {
            objGlowstoneDust.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:goat_horn") {
            objGoatHorn.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:goat_spawn_egg") {
            objGoatSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:gold_block") {
            objGoldBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:gold_ingot") {
            objGoldIngot.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:gold_nugget") {
            objGoldNugget.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:gold_ore") {
            objGoldOre.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:golden_apple") {
            objGoldenApple.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:golden_axe") {
            objGoldenAxe.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:golden_boots") {
            objGoldenBoots.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:golden_carrot") {
            objGoldenCarrot.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:golden_chestplate") {
            objGoldenChestplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:golden_helmet") {
            objGoldenHelmet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:golden_hoe") {
            objGoldenHoe.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:golden_horse_armor") {
            objGoldenHorseArmor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:golden_leggings") {
            objGoldenLeggings.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:golden_pickaxe") {
            objGoldenPickaxe.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:golden_rail") {
            objGoldenRail.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:golden_shovel") {
            objGoldenShovel.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:golden_sword") {
            objGoldenSword.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:granite") {
            objGranite.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:granite_slab") {
            objGraniteSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:granite_stairs") {
            objGraniteStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:granite_wall") {
            objGraniteWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:grass_block") {
            objGrassBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:grass_path") {
            objGrassPath.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:gravel") {
            objGravel.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:gray_bundle") {
            objGrayBundle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:gray_candle") {
            objGrayCandle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:gray_carpet") {
            objGrayCarpet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:gray_concrete") {
            objGrayConcrete.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:gray_concrete_powder") {
            objGrayConcretePowder.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:gray_dye") {
            objGrayDye.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:gray_glazed_terracotta") {
            objGrayGlazedTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:gray_harness") {
            objGrayHarness.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:gray_shulker_box") {
            objGrayShulkerBox.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:gray_stained_glass") {
            objGrayStainedGlass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:gray_stained_glass_pane") {
            objGrayStainedGlassPane.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:gray_terracotta") {
            objGrayTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:gray_wool") {
            objGrayWool.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:green_bundle") {
            objGreenBundle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:green_candle") {
            objGreenCandle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:green_carpet") {
            objGreenCarpet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:green_concrete") {
            objGreenConcrete.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:green_concrete_powder") {
            objGreenConcretePowder.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:green_dye") {
            objGreenDye.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:green_glazed_terracotta") {
            objGreenGlazedTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:green_harness") {
            objGreenHarness.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:green_shulker_box") {
            objGreenShulkerBox.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:green_stained_glass") {
            objGreenStainedGlass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:green_stained_glass_pane") {
            objGreenStainedGlassPane.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:green_terracotta") {
            objGreenTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:green_wool") {
            objGreenWool.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:grindstone") {
            objGrindstone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:guardian_spawn_egg") {
            objGuardianSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:gunpowder") {
            objGunpowder.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:guster_banner_pattern") {
            objGusterBannerPattern.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:guster_pottery_sherd") {
            objGusterPotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:hanging_roots") {
            objHangingRoots.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:happy_ghast_spawn_egg") {
            objHappyGhastSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:hardened_clay") {
            objHardenedClay.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:hay_block") {
            objHayBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:heart_of_the_sea") {
            objHeartOfTheSea.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:heart_pottery_sherd") {
            objHeartPotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:heartbreak_pottery_sherd") {
            objHeartbreakPotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:heavy_core") {
            objHeavyCore.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:heavy_weighted_pressure_plate") {
            objHeavyWeightedPressurePlate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:hoglin_spawn_egg") {
            objHoglinSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:honey_block") {
            objHoneyBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:honey_bottle") {
            objHoneyBottle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:honeycomb") {
            objHoneycomb.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:honeycomb_block") {
            objHoneycombBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:hopper") {
            objHopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:hopper_minecart") {
            objHopperMinecart.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:horn_coral") {
            objHornCoral.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:horn_coral_block") {
            objHornCoralBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:horn_coral_fan") {
            objHornCoralFan.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:horse_spawn_egg") {
            objHorseSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:host_armor_trim_smithing_template") {
            objHostArmorTrimSmithingTemplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:howl_pottery_sherd") {
            objHowlPotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:husk_spawn_egg") {
            objHuskSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:ice") {
            objIce.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:infested_chiseled_stone_bricks") {
            objInfestedChiseledStoneBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:infested_cobblestone") {
            objInfestedCobblestone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:infested_cracked_stone_bricks") {
            objInfestedCrackedStoneBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:infested_deepslate") {
            objInfestedDeepslate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:infested_mossy_stone_bricks") {
            objInfestedMossyStoneBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:infested_stone") {
            objInfestedStone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:infested_stone_bricks") {
            objInfestedStoneBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:ink_sac") {
            objInkSac.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:iron_axe") {
            objIronAxe.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:iron_bars") {
            objIronBars.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:iron_block") {
            objIronBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:iron_boots") {
            objIronBoots.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:iron_chestplate") {
            objIronChestplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:iron_door") {
            objIronDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:iron_golem_spawn_egg") {
            objIronGolemSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:iron_helmet") {
            objIronHelmet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:iron_hoe") {
            objIronHoe.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:iron_horse_armor") {
            objIronHorseArmor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:iron_ingot") {
            objIronIngot.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:iron_leggings") {
            objIronLeggings.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:iron_nugget") {
            objIronNugget.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:iron_ore") {
            objIronOre.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:iron_pickaxe") {
            objIronPickaxe.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:iron_shovel") {
            objIronShovel.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:iron_sword") {
            objIronSword.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:iron_trapdoor") {
            objIronTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:jigsaw") {
            objJigsaw.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:jukebox") {
            objJukebox.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:jungle_boat") {
            objJungleBoat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:jungle_button") {
            objJungleButton.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:jungle_chest_boat") {
            objJungleChestBoat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:jungle_door") {
            objJungleDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:jungle_fence") {
            objJungleFence.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:jungle_fence_gate") {
            objJungleFenceGate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:jungle_hanging_sign") {
            objJungleHangingSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:jungle_leaves") {
            objJungleLeaves.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:jungle_log") {
            objJungleLog.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:jungle_planks") {
            objJunglePlanks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:jungle_pressure_plate") {
            objJunglePressurePlate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:jungle_sapling") {
            objJungleSapling.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:jungle_sign") {
            objJungleSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:jungle_slab") {
            objJungleSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:jungle_stairs") {
            objJungleStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:jungle_trapdoor") {
            objJungleTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:jungle_wood") {
            objJungleWood.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:kelp") {
            objKelp.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:ladder") {
            objLadder.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lantern") {
            objLantern.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lapis_block") {
            objLapisBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lapis_lazuli") {
            objLapisLazuli.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lapis_ore") {
            objLapisOre.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:large_amethyst_bud") {
            objLargeAmethystBud.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:large_fern") {
            objLargeFern.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lava_bucket") {
            objLavaBucket.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lead") {
            objLead.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:leaf_litter") {
            objLeafLitter.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:leather") {
            objLeather.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:leather_boots") {
            objLeatherBoots.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:leather_chestplate") {
            objLeatherChestplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:leather_helmet") {
            objLeatherHelmet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:leather_horse_armor") {
            objLeatherHorseArmor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:leather_leggings") {
            objLeatherLeggings.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lectern") {
            objLectern.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lever") {
            objLever.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_block_0") {
            objLightBlock0.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_block_1") {
            objLightBlock1.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_block_10") {
            objLightBlock10.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_block_11") {
            objLightBlock11.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_block_12") {
            objLightBlock12.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_block_13") {
            objLightBlock13.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_block_14") {
            objLightBlock14.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_block_15") {
            objLightBlock15.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_block_2") {
            objLightBlock2.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_block_3") {
            objLightBlock3.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_block_4") {
            objLightBlock4.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_block_5") {
            objLightBlock5.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_block_6") {
            objLightBlock6.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_block_7") {
            objLightBlock7.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_block_8") {
            objLightBlock8.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_block_9") {
            objLightBlock9.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_blue_bundle") {
            objLightBlueBundle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_blue_candle") {
            objLightBlueCandle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_blue_carpet") {
            objLightBlueCarpet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_blue_concrete") {
            objLightBlueConcrete.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_blue_concrete_powder") {
            objLightBlueConcretePowder.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_blue_dye") {
            objLightBlueDye.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_blue_glazed_terracotta") {
            objLightBlueGlazedTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_blue_harness") {
            objLightBlueHarness.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_blue_shulker_box") {
            objLightBlueShulkerBox.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_blue_stained_glass") {
            objLightBlueStainedGlass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_blue_stained_glass_pane") {
            objLightBlueStainedGlassPane.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_blue_terracotta") {
            objLightBlueTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_blue_wool") {
            objLightBlueWool.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_gray_bundle") {
            objLightGrayBundle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_gray_candle") {
            objLightGrayCandle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_gray_carpet") {
            objLightGrayCarpet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_gray_concrete") {
            objLightGrayConcrete.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_gray_concrete_powder") {
            objLightGrayConcretePowder.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_gray_dye") {
            objLightGrayDye.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_gray_harness") {
            objLightGrayHarness.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_gray_shulker_box") {
            objLightGrayShulkerBox.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_gray_stained_glass") {
            objLightGrayStainedGlass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_gray_stained_glass_pane") {
            objLightGrayStainedGlassPane.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_gray_terracotta") {
            objLightGrayTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_gray_wool") {
            objLightGrayWool.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:light_weighted_pressure_plate") {
            objLightWeightedPressurePlate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lightning_rod") {
            objLightningRod.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lilac") {
            objLilac.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lily_of_the_valley") {
            objLilyOfTheValley.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lime_bundle") {
            objLimeBundle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lime_candle") {
            objLimeCandle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lime_carpet") {
            objLimeCarpet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lime_concrete") {
            objLimeConcrete.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lime_concrete_powder") {
            objLimeConcretePowder.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lime_dye") {
            objLimeDye.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lime_glazed_terracotta") {
            objLimeGlazedTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lime_harness") {
            objLimeHarness.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lime_shulker_box") {
            objLimeShulkerBox.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lime_stained_glass") {
            objLimeStainedGlass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lime_stained_glass_pane") {
            objLimeStainedGlassPane.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lime_terracotta") {
            objLimeTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lime_wool") {
            objLimeWool.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lingering_potion") {
            objLingeringPotion.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lit_pumpkin") {
            objLitPumpkin.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:llama_spawn_egg") {
            objLlamaSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lodestone") {
            objLodestone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:lodestone_compass") {
            objLodestoneCompass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:loom") {
            objLoom.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mace") {
            objMace.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:magenta_bundle") {
            objMagentaBundle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:magenta_candle") {
            objMagentaCandle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:magenta_carpet") {
            objMagentaCarpet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:magenta_concrete") {
            objMagentaConcrete.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:magenta_concrete_powder") {
            objMagentaConcretePowder.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:magenta_dye") {
            objMagentaDye.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:magenta_glazed_terracotta") {
            objMagentaGlazedTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:magenta_harness") {
            objMagentaHarness.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:magenta_shulker_box") {
            objMagentaShulkerBox.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:magenta_stained_glass") {
            objMagentaStainedGlass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:magenta_stained_glass_pane") {
            objMagentaStainedGlassPane.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:magenta_terracotta") {
            objMagentaTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:magenta_wool") {
            objMagentaWool.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:magma") {
            objMagma.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:magma_cream") {
            objMagmaCream.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:magma_cube_spawn_egg") {
            objMagmaCubeSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mangrove_boat") {
            objMangroveBoat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mangrove_button") {
            objMangroveButton.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mangrove_chest_boat") {
            objMangroveChestBoat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mangrove_door") {
            objMangroveDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mangrove_fence") {
            objMangroveFence.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mangrove_fence_gate") {
            objMangroveFenceGate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mangrove_hanging_sign") {
            objMangroveHangingSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mangrove_leaves") {
            objMangroveLeaves.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mangrove_log") {
            objMangroveLog.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mangrove_planks") {
            objMangrovePlanks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mangrove_pressure_plate") {
            objMangrovePressurePlate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mangrove_propagule") {
            objMangrovePropagule.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mangrove_roots") {
            objMangroveRoots.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mangrove_sign") {
            objMangroveSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mangrove_slab") {
            objMangroveSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mangrove_stairs") {
            objMangroveStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mangrove_trapdoor") {
            objMangroveTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mangrove_wood") {
            objMangroveWood.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:medium_amethyst_bud") {
            objMediumAmethystBud.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:melon_block") {
            objMelonBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:melon_seeds") {
            objMelonSeeds.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:melon_slice") {
            objMelonSlice.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:milk_bucket") {
            objMilkBucket.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:minecart") {
            objMinecart.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:miner_pottery_sherd") {
            objMinerPotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mob_spawner") {
            objMobSpawner.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mojang_banner_pattern") {
            objMojangBannerPattern.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mooshroom_spawn_egg") {
            objMooshroomSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:moss_block") {
            objMossBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:moss_carpet") {
            objMossCarpet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mossy_cobblestone") {
            objMossyCobblestone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mossy_cobblestone_slab") {
            objMossyCobblestoneSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mossy_cobblestone_stairs") {
            objMossyCobblestoneStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mossy_cobblestone_wall") {
            objMossyCobblestoneWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mossy_stone_brick_slab") {
            objMossyStoneBrickSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mossy_stone_brick_stairs") {
            objMossyStoneBrickStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mossy_stone_brick_wall") {
            objMossyStoneBrickWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mossy_stone_bricks") {
            objMossyStoneBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mourner_pottery_sherd") {
            objMournerPotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mud") {
            objMud.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mud_brick_slab") {
            objMudBrickSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mud_brick_stairs") {
            objMudBrickStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mud_brick_wall") {
            objMudBrickWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mud_bricks") {
            objMudBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:muddy_mangrove_roots") {
            objMuddyMangroveRoots.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mule_spawn_egg") {
            objMuleSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mushroom_stem") {
            objMushroomStem.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mushroom_stew") {
            objMushroomStew.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_11") {
            objMusicDisc11.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_13") {
            objMusicDisc13.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_5") {
            objMusicDisc5.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_blocks") {
            objMusicDiscBlocks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_cat") {
            objMusicDiscCat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_chirp") {
            objMusicDiscChirp.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_creator") {
            objMusicDiscCreator.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_creator_music_box") {
            objMusicDiscCreatorMusicBox.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_far") {
            objMusicDiscFar.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_lava_chicken") {
            objMusicDiscLavaChicken.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_mall") {
            objMusicDiscMall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_mellohi") {
            objMusicDiscMellohi.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_otherside") {
            objMusicDiscOtherside.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_pigstep") {
            objMusicDiscPigstep.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_precipice") {
            objMusicDiscPrecipice.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_relic") {
            objMusicDiscRelic.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_stal") {
            objMusicDiscStal.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_strad") {
            objMusicDiscStrad.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_tears") {
            objMusicDiscTears.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_wait") {
            objMusicDiscWait.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:music_disc_ward") {
            objMusicDiscWard.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mutton") {
            objMutton.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:mycelium") {
            objMycelium.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:name_tag") {
            objNameTag.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:nautilus_shell") {
            objNautilusShell.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:nether_brick") {
            objNetherBrick.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:nether_brick_fence") {
            objNetherBrickFence.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:nether_brick_slab") {
            objNetherBrickSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:nether_brick_stairs") {
            objNetherBrickStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:nether_brick_wall") {
            objNetherBrickWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:nether_gold_ore") {
            objNetherGoldOre.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:nether_sprouts") {
            objNetherSprouts.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:nether_star") {
            objNetherStar.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:nether_wart") {
            objNetherWart.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:nether_wart_block") {
            objNetherWartBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:netherbrick") {
            objNetherbrick.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:netherite_axe") {
            objNetheriteAxe.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:netherite_block") {
            objNetheriteBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:netherite_boots") {
            objNetheriteBoots.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:netherite_chestplate") {
            objNetheriteChestplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:netherite_helmet") {
            objNetheriteHelmet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:netherite_hoe") {
            objNetheriteHoe.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:netherite_ingot") {
            objNetheriteIngot.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:netherite_leggings") {
            objNetheriteLeggings.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:netherite_pickaxe") {
            objNetheritePickaxe.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:netherite_scrap") {
            objNetheriteScrap.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:netherite_shovel") {
            objNetheriteShovel.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:netherite_sword") {
            objNetheriteSword.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:netherite_upgrade_smithing_template") {
            objNetheriteUpgradeSmithingTemplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:netherrack") {
            objNetherrack.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:normal_stone_slab") {
            objNormalStoneSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:normal_stone_stairs") {
            objNormalStoneStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:noteblock") {
            objNoteblock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oak_boat") {
            objOakBoat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oak_chest_boat") {
            objOakChestBoat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oak_fence") {
            objOakFence.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oak_hanging_sign") {
            objOakHangingSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oak_leaves") {
            objOakLeaves.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oak_log") {
            objOakLog.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oak_planks") {
            objOakPlanks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oak_sapling") {
            objOakSapling.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oak_sign") {
            objOakSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oak_slab") {
            objOakSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oak_stairs") {
            objOakStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oak_wood") {
            objOakWood.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:observer") {
            objObserver.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:obsidian") {
            objObsidian.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:ocelot_spawn_egg") {
            objOcelotSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:ochre_froglight") {
            objOchreFroglight.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:ominous_bottle") {
            objOminousBottle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:ominous_trial_key") {
            objOminousTrialKey.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:open_eyeblossom") {
            objOpenEyeblossom.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:orange_bundle") {
            objOrangeBundle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:orange_candle") {
            objOrangeCandle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:orange_carpet") {
            objOrangeCarpet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:orange_concrete") {
            objOrangeConcrete.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:orange_concrete_powder") {
            objOrangeConcretePowder.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:orange_dye") {
            objOrangeDye.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:orange_glazed_terracotta") {
            objOrangeGlazedTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:orange_harness") {
            objOrangeHarness.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:orange_shulker_box") {
            objOrangeShulkerBox.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:orange_stained_glass") {
            objOrangeStainedGlass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:orange_stained_glass_pane") {
            objOrangeStainedGlassPane.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:orange_terracotta") {
            objOrangeTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:orange_tulip") {
            objOrangeTulip.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:orange_wool") {
            objOrangeWool.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oxeye_daisy") {
            objOxeyeDaisy.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oxidized_chiseled_copper") {
            objOxidizedChiseledCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oxidized_copper") {
            objOxidizedCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oxidized_copper_bulb") {
            objOxidizedCopperBulb.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oxidized_copper_door") {
            objOxidizedCopperDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oxidized_copper_grate") {
            objOxidizedCopperGrate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oxidized_copper_trapdoor") {
            objOxidizedCopperTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oxidized_cut_copper") {
            objOxidizedCutCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oxidized_cut_copper_slab") {
            objOxidizedCutCopperSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:oxidized_cut_copper_stairs") {
            objOxidizedCutCopperStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:packed_ice") {
            objPackedIce.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:packed_mud") {
            objPackedMud.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:painting") {
            objPainting.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pale_hanging_moss") {
            objPaleHangingMoss.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pale_moss_block") {
            objPaleMossBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pale_moss_carpet") {
            objPaleMossCarpet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pale_oak_boat") {
            objPaleOakBoat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pale_oak_button") {
            objPaleOakButton.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pale_oak_chest_boat") {
            objPaleOakChestBoat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pale_oak_door") {
            objPaleOakDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pale_oak_fence") {
            objPaleOakFence.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pale_oak_fence_gate") {
            objPaleOakFenceGate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pale_oak_hanging_sign") {
            objPaleOakHangingSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pale_oak_leaves") {
            objPaleOakLeaves.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pale_oak_log") {
            objPaleOakLog.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pale_oak_planks") {
            objPaleOakPlanks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pale_oak_pressure_plate") {
            objPaleOakPressurePlate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pale_oak_sapling") {
            objPaleOakSapling.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pale_oak_sign") {
            objPaleOakSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pale_oak_slab") {
            objPaleOakSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pale_oak_stairs") {
            objPaleOakStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pale_oak_trapdoor") {
            objPaleOakTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pale_oak_wood") {
            objPaleOakWood.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:panda_spawn_egg") {
            objPandaSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:paper") {
            objPaper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:parrot_spawn_egg") {
            objParrotSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pearlescent_froglight") {
            objPearlescentFroglight.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:peony") {
            objPeony.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:petrified_oak_slab") {
            objPetrifiedOakSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:phantom_membrane") {
            objPhantomMembrane.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:phantom_spawn_egg") {
            objPhantomSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pig_spawn_egg") {
            objPigSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:piglin_banner_pattern") {
            objPiglinBannerPattern.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:piglin_brute_spawn_egg") {
            objPiglinBruteSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:piglin_head") {
            objPiglinHead.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:piglin_spawn_egg") {
            objPiglinSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pillager_spawn_egg") {
            objPillagerSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pink_bundle") {
            objPinkBundle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pink_candle") {
            objPinkCandle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pink_carpet") {
            objPinkCarpet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pink_concrete") {
            objPinkConcrete.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pink_concrete_powder") {
            objPinkConcretePowder.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pink_dye") {
            objPinkDye.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pink_glazed_terracotta") {
            objPinkGlazedTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pink_harness") {
            objPinkHarness.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pink_petals") {
            objPinkPetals.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pink_shulker_box") {
            objPinkShulkerBox.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pink_stained_glass") {
            objPinkStainedGlass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pink_stained_glass_pane") {
            objPinkStainedGlassPane.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pink_terracotta") {
            objPinkTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pink_tulip") {
            objPinkTulip.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pink_wool") {
            objPinkWool.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:piston") {
            objPiston.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pitcher_plant") {
            objPitcherPlant.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pitcher_pod") {
            objPitcherPod.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:player_head") {
            objPlayerHead.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:plenty_pottery_sherd") {
            objPlentyPotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:podzol") {
            objPodzol.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pointed_dripstone") {
            objPointedDripstone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:poisonous_potato") {
            objPoisonousPotato.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polar_bear_spawn_egg") {
            objPolarBearSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_andesite") {
            objPolishedAndesite.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_andesite_slab") {
            objPolishedAndesiteSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_andesite_stairs") {
            objPolishedAndesiteStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_basalt") {
            objPolishedBasalt.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_blackstone") {
            objPolishedBlackstone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_blackstone_brick_slab") {
            objPolishedBlackstoneBrickSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_blackstone_brick_stairs") {
            objPolishedBlackstoneBrickStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_blackstone_brick_wall") {
            objPolishedBlackstoneBrickWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_blackstone_bricks") {
            objPolishedBlackstoneBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_blackstone_button") {
            objPolishedBlackstoneButton.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_blackstone_pressure_plate") {
            objPolishedBlackstonePressurePlate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_blackstone_slab") {
            objPolishedBlackstoneSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_blackstone_stairs") {
            objPolishedBlackstoneStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_blackstone_wall") {
            objPolishedBlackstoneWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_deepslate") {
            objPolishedDeepslate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_deepslate_slab") {
            objPolishedDeepslateSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_deepslate_stairs") {
            objPolishedDeepslateStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_deepslate_wall") {
            objPolishedDeepslateWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_diorite") {
            objPolishedDiorite.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_diorite_slab") {
            objPolishedDioriteSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_diorite_stairs") {
            objPolishedDioriteStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_granite") {
            objPolishedGranite.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_granite_slab") {
            objPolishedGraniteSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_granite_stairs") {
            objPolishedGraniteStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_tuff") {
            objPolishedTuff.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_tuff_slab") {
            objPolishedTuffSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_tuff_stairs") {
            objPolishedTuffStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:polished_tuff_wall") {
            objPolishedTuffWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:popped_chorus_fruit") {
            objPoppedChorusFruit.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:poppy") {
            objPoppy.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:porkchop") {
            objPorkchop.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:potato") {
            objPotato.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:potion") {
            objPotion.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:powder_snow_bucket") {
            objPowderSnowBucket.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:prismarine") {
            objPrismarine.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:prismarine_brick_slab") {
            objPrismarineBrickSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:prismarine_bricks") {
            objPrismarineBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:prismarine_bricks_stairs") {
            objPrismarineBricksStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:prismarine_crystals") {
            objPrismarineCrystals.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:prismarine_shard") {
            objPrismarineShard.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:prismarine_slab") {
            objPrismarineSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:prismarine_stairs") {
            objPrismarineStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:prismarine_wall") {
            objPrismarineWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:prize_pottery_sherd") {
            objPrizePotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pufferfish") {
            objPufferfish.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pufferfish_bucket") {
            objPufferfishBucket.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pufferfish_spawn_egg") {
            objPufferfishSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pumpkin") {
            objPumpkin.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pumpkin_pie") {
            objPumpkinPie.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:pumpkin_seeds") {
            objPumpkinSeeds.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:purple_bundle") {
            objPurpleBundle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:purple_candle") {
            objPurpleCandle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:purple_carpet") {
            objPurpleCarpet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:purple_concrete") {
            objPurpleConcrete.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:purple_concrete_powder") {
            objPurpleConcretePowder.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:purple_dye") {
            objPurpleDye.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:purple_glazed_terracotta") {
            objPurpleGlazedTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:purple_harness") {
            objPurpleHarness.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:purple_shulker_box") {
            objPurpleShulkerBox.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:purple_stained_glass") {
            objPurpleStainedGlass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:purple_stained_glass_pane") {
            objPurpleStainedGlassPane.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:purple_terracotta") {
            objPurpleTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:purple_wool") {
            objPurpleWool.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:purpur_block") {
            objPurpurBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:purpur_pillar") {
            objPurpurPillar.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:purpur_slab") {
            objPurpurSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:purpur_stairs") {
            objPurpurStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:quartz") {
            objQuartz.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:quartz_block") {
            objQuartzBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:quartz_bricks") {
            objQuartzBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:quartz_ore") {
            objQuartzOre.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:quartz_pillar") {
            objQuartzPillar.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:quartz_slab") {
            objQuartzSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:quartz_stairs") {
            objQuartzStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:rabbit") {
            objRabbit.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:rabbit_foot") {
            objRabbitFoot.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:rabbit_hide") {
            objRabbitHide.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:rabbit_spawn_egg") {
            objRabbitSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:rabbit_stew") {
            objRabbitStew.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:rail") {
            objRail.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:raiser_armor_trim_smithing_template") {
            objRaiserArmorTrimSmithingTemplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:ravager_spawn_egg") {
            objRavagerSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:raw_copper") {
            objRawCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:raw_copper_block") {
            objRawCopperBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:raw_gold") {
            objRawGold.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:raw_gold_block") {
            objRawGoldBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:raw_iron") {
            objRawIron.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:raw_iron_block") {
            objRawIronBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:recovery_compass") {
            objRecoveryCompass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_bundle") {
            objRedBundle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_candle") {
            objRedCandle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_carpet") {
            objRedCarpet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_concrete") {
            objRedConcrete.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_concrete_powder") {
            objRedConcretePowder.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_dye") {
            objRedDye.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_glazed_terracotta") {
            objRedGlazedTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_harness") {
            objRedHarness.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_mushroom") {
            objRedMushroom.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_mushroom_block") {
            objRedMushroomBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_nether_brick") {
            objRedNetherBrick.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_nether_brick_slab") {
            objRedNetherBrickSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_nether_brick_stairs") {
            objRedNetherBrickStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_nether_brick_wall") {
            objRedNetherBrickWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_sand") {
            objRedSand.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_sandstone") {
            objRedSandstone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_sandstone_slab") {
            objRedSandstoneSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_sandstone_stairs") {
            objRedSandstoneStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_sandstone_wall") {
            objRedSandstoneWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_shulker_box") {
            objRedShulkerBox.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_stained_glass") {
            objRedStainedGlass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_stained_glass_pane") {
            objRedStainedGlassPane.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_terracotta") {
            objRedTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_tulip") {
            objRedTulip.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:red_wool") {
            objRedWool.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:redstone") {
            objRedstone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:redstone_block") {
            objRedstoneBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:redstone_lamp") {
            objRedstoneLamp.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:redstone_ore") {
            objRedstoneOre.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:redstone_torch") {
            objRedstoneTorch.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:reinforced_deepslate") {
            objReinforcedDeepslate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:repeater") {
            objRepeater.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:repeating_command_block") {
            objRepeatingCommandBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:resin_block") {
            objResinBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:resin_brick") {
            objResinBrick.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:resin_brick_slab") {
            objResinBrickSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:resin_brick_stairs") {
            objResinBrickStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:resin_brick_wall") {
            objResinBrickWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:resin_bricks") {
            objResinBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:resin_clump") {
            objResinClump.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:respawn_anchor") {
            objRespawnAnchor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:rib_armor_trim_smithing_template") {
            objRibArmorTrimSmithingTemplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:rose_bush") {
            objRoseBush.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:rotten_flesh") {
            objRottenFlesh.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:saddle") {
            objSaddle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:salmon") {
            objSalmon.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:salmon_bucket") {
            objSalmonBucket.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:salmon_spawn_egg") {
            objSalmonSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sand") {
            objSand.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sandstone") {
            objSandstone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sandstone_slab") {
            objSandstoneSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sandstone_stairs") {
            objSandstoneStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sandstone_wall") {
            objSandstoneWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:scaffolding") {
            objScaffolding.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:scrape_pottery_sherd") {
            objScrapePotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sculk") {
            objSculk.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sculk_catalyst") {
            objSculkCatalyst.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sculk_sensor") {
            objSculkSensor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sculk_shrieker") {
            objSculkShrieker.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sculk_vein") {
            objSculkVein.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sea_lantern") {
            objSeaLantern.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sea_pickle") {
            objSeaPickle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:seagrass") {
            objSeagrass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sentry_armor_trim_smithing_template") {
            objSentryArmorTrimSmithingTemplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:shaper_armor_trim_smithing_template") {
            objShaperArmorTrimSmithingTemplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sheaf_pottery_sherd") {
            objSheafPotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:shears") {
            objShears.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sheep_spawn_egg") {
            objSheepSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:shelter_pottery_sherd") {
            objShelterPotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:shield") {
            objShield.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:short_dry_grass") {
            objShortDryGrass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:short_grass") {
            objShortGrass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:shroomlight") {
            objShroomlight.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:shulker_shell") {
            objShulkerShell.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:shulker_spawn_egg") {
            objShulkerSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:silence_armor_trim_smithing_template") {
            objSilenceArmorTrimSmithingTemplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:silver_glazed_terracotta") {
            objSilverGlazedTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:silverfish_spawn_egg") {
            objSilverfishSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:skeleton_horse_spawn_egg") {
            objSkeletonHorseSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:skeleton_skull") {
            objSkeletonSkull.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:skeleton_spawn_egg") {
            objSkeletonSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:skull_banner_pattern") {
            objSkullBannerPattern.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:skull_pottery_sherd") {
            objSkullPotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:slime") {
            objSlime.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:slime_ball") {
            objSlimeBall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:slime_spawn_egg") {
            objSlimeSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:small_amethyst_bud") {
            objSmallAmethystBud.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:small_dripleaf_block") {
            objSmallDripleafBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:smithing_table") {
            objSmithingTable.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:smoker") {
            objSmoker.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:smooth_basalt") {
            objSmoothBasalt.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:smooth_quartz") {
            objSmoothQuartz.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:smooth_quartz_slab") {
            objSmoothQuartzSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:smooth_quartz_stairs") {
            objSmoothQuartzStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:smooth_red_sandstone") {
            objSmoothRedSandstone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:smooth_red_sandstone_slab") {
            objSmoothRedSandstoneSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:smooth_red_sandstone_stairs") {
            objSmoothRedSandstoneStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:smooth_sandstone") {
            objSmoothSandstone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:smooth_sandstone_slab") {
            objSmoothSandstoneSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:smooth_sandstone_stairs") {
            objSmoothSandstoneStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:smooth_stone") {
            objSmoothStone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:smooth_stone_slab") {
            objSmoothStoneSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sniffer_egg") {
            objSnifferEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sniffer_spawn_egg") {
            objSnifferSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:snort_pottery_sherd") {
            objSnortPotterySherd.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:snout_armor_trim_smithing_template") {
            objSnoutArmorTrimSmithingTemplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:snow") {
            objSnow.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:snow_golem_spawn_egg") {
            objSnowGolemSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:snow_layer") {
            objSnowLayer.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:snowball") {
            objSnowball.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:soul_campfire") {
            objSoulCampfire.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:soul_lantern") {
            objSoulLantern.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:soul_sand") {
            objSoulSand.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:soul_soil") {
            objSoulSoil.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:soul_torch") {
            objSoulTorch.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spider_eye") {
            objSpiderEye.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spider_spawn_egg") {
            objSpiderSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spire_armor_trim_smithing_template") {
            objSpireArmorTrimSmithingTemplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:splash_potion") {
            objSplashPotion.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sponge") {
            objSponge.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spore_blossom") {
            objSporeBlossom.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spruce_boat") {
            objSpruceBoat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spruce_button") {
            objSpruceButton.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spruce_chest_boat") {
            objSpruceChestBoat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spruce_door") {
            objSpruceDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spruce_fence") {
            objSpruceFence.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spruce_fence_gate") {
            objSpruceFenceGate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spruce_hanging_sign") {
            objSpruceHangingSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spruce_leaves") {
            objSpruceLeaves.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spruce_log") {
            objSpruceLog.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spruce_planks") {
            objSprucePlanks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spruce_pressure_plate") {
            objSprucePressurePlate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spruce_sapling") {
            objSpruceSapling.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spruce_sign") {
            objSpruceSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spruce_slab") {
            objSpruceSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spruce_stairs") {
            objSpruceStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spruce_trapdoor") {
            objSpruceTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spruce_wood") {
            objSpruceWood.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:spyglass") {
            objSpyglass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:squid_spawn_egg") {
            objSquidSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stick") {
            objStick.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sticky_piston") {
            objStickyPiston.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stone") {
            objStone.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stone_axe") {
            objStoneAxe.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stone_brick_slab") {
            objStoneBrickSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stone_brick_stairs") {
            objStoneBrickStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stone_brick_wall") {
            objStoneBrickWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stone_bricks") {
            objStoneBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stone_button") {
            objStoneButton.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stone_hoe") {
            objStoneHoe.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stone_pickaxe") {
            objStonePickaxe.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stone_pressure_plate") {
            objStonePressurePlate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stone_shovel") {
            objStoneShovel.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stone_stairs") {
            objStoneStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stone_sword") {
            objStoneSword.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stonecutter_block") {
            objStonecutterBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stray_spawn_egg") {
            objStraySpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:strider_spawn_egg") {
            objStriderSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:string") {
            objString.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_acacia_log") {
            objStrippedAcaciaLog.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_acacia_wood") {
            objStrippedAcaciaWood.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_bamboo_block") {
            objStrippedBambooBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_birch_log") {
            objStrippedBirchLog.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_birch_wood") {
            objStrippedBirchWood.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_cherry_log") {
            objStrippedCherryLog.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_cherry_wood") {
            objStrippedCherryWood.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_crimson_hyphae") {
            objStrippedCrimsonHyphae.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_crimson_stem") {
            objStrippedCrimsonStem.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_dark_oak_log") {
            objStrippedDarkOakLog.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_dark_oak_wood") {
            objStrippedDarkOakWood.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_jungle_log") {
            objStrippedJungleLog.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_jungle_wood") {
            objStrippedJungleWood.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_mangrove_log") {
            objStrippedMangroveLog.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_mangrove_wood") {
            objStrippedMangroveWood.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_oak_log") {
            objStrippedOakLog.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_oak_wood") {
            objStrippedOakWood.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_pale_oak_log") {
            objStrippedPaleOakLog.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_pale_oak_wood") {
            objStrippedPaleOakWood.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_spruce_log") {
            objStrippedSpruceLog.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_spruce_wood") {
            objStrippedSpruceWood.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_warped_hyphae") {
            objStrippedWarpedHyphae.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:stripped_warped_stem") {
            objStrippedWarpedStem.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:structure_block") {
            objStructureBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:structure_void") {
            objStructureVoid.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sugar") {
            objSugar.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sugar_cane") {
            objSugarCane.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sunflower") {
            objSunflower.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:suspicious_gravel") {
            objSuspiciousGravel.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:suspicious_sand") {
            objSuspiciousSand.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:suspicious_stew") {
            objSuspiciousStew.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:sweet_berries") {
            objSweetBerries.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tadpole_bucket") {
            objTadpoleBucket.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tadpole_spawn_egg") {
            objTadpoleSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tall_dry_grass") {
            objTallDryGrass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tall_grass") {
            objTallGrass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:target") {
            objTarget.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tide_armor_trim_smithing_template") {
            objTideArmorTrimSmithingTemplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tinted_glass") {
            objTintedGlass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tnt") {
            objTnt.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tnt_minecart") {
            objTntMinecart.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:torch") {
            objTorch.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:torchflower") {
            objTorchflower.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:torchflower_seeds") {
            objTorchflowerSeeds.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:totem_of_undying") {
            objTotemOfUndying.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:trader_llama_spawn_egg") {
            objTraderLlamaSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:trapdoor") {
            objTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:trapped_chest") {
            objTrappedChest.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:trial_key") {
            objTrialKey.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:trial_spawner") {
            objTrialSpawner.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:trident") {
            objTrident.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tripwire_hook") {
            objTripwireHook.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tropical_fish") {
            objTropicalFish.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tropical_fish_bucket") {
            objTropicalFishBucket.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tropical_fish_spawn_egg") {
            objTropicalFishSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tube_coral") {
            objTubeCoral.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tube_coral_block") {
            objTubeCoralBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tube_coral_fan") {
            objTubeCoralFan.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tuff") {
            objTuff.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tuff_brick_slab") {
            objTuffBrickSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tuff_brick_stairs") {
            objTuffBrickStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tuff_brick_wall") {
            objTuffBrickWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tuff_bricks") {
            objTuffBricks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tuff_slab") {
            objTuffSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tuff_stairs") {
            objTuffStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:tuff_wall") {
            objTuffWall.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:turtle_egg") {
            objTurtleEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:turtle_helmet") {
            objTurtleHelmet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:turtle_scute") {
            objTurtleScute.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:turtle_spawn_egg") {
            objTurtleSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:twisting_vines") {
            objTwistingVines.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:undyed_shulker_box") {
            objUndyedShulkerBox.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:vault") {
            objVault.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:verdant_froglight") {
            objVerdantFroglight.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:vex_armor_trim_smithing_template") {
            objVexArmorTrimSmithingTemplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:vex_spawn_egg") {
            objVexSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:villager_spawn_egg") {
            objVillagerSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:vindicator_spawn_egg") {
            objVindicatorSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:vine") {
            objVine.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wandering_trader_spawn_egg") {
            objWanderingTraderSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:ward_armor_trim_smithing_template") {
            objWardArmorTrimSmithingTemplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:warden_spawn_egg") {
            objWardenSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:warped_button") {
            objWarpedButton.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:warped_door") {
            objWarpedDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:warped_fence") {
            objWarpedFence.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:warped_fence_gate") {
            objWarpedFenceGate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:warped_fungus") {
            objWarpedFungus.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:warped_fungus_on_a_stick") {
            objWarpedFungusOnAStick.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:warped_hanging_sign") {
            objWarpedHangingSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:warped_hyphae") {
            objWarpedHyphae.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:warped_nylium") {
            objWarpedNylium.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:warped_planks") {
            objWarpedPlanks.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:warped_pressure_plate") {
            objWarpedPressurePlate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:warped_roots") {
            objWarpedRoots.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:warped_sign") {
            objWarpedSign.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:warped_slab") {
            objWarpedSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:warped_stairs") {
            objWarpedStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:warped_stem") {
            objWarpedStem.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:warped_trapdoor") {
            objWarpedTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:warped_wart_block") {
            objWarpedWartBlock.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:water_bucket") {
            objWaterBucket.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waterlily") {
            objWaterlily.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_chiseled_copper") {
            objWaxedChiseledCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_copper") {
            objWaxedCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_copper_bulb") {
            objWaxedCopperBulb.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_copper_door") {
            objWaxedCopperDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_copper_grate") {
            objWaxedCopperGrate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_copper_trapdoor") {
            objWaxedCopperTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_cut_copper") {
            objWaxedCutCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_cut_copper_slab") {
            objWaxedCutCopperSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_cut_copper_stairs") {
            objWaxedCutCopperStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_exposed_chiseled_copper") {
            objWaxedExposedChiseledCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_exposed_copper") {
            objWaxedExposedCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_exposed_copper_bulb") {
            objWaxedExposedCopperBulb.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_exposed_copper_door") {
            objWaxedExposedCopperDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_exposed_copper_grate") {
            objWaxedExposedCopperGrate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_exposed_copper_trapdoor") {
            objWaxedExposedCopperTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_exposed_cut_copper") {
            objWaxedExposedCutCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_exposed_cut_copper_slab") {
            objWaxedExposedCutCopperSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_exposed_cut_copper_stairs") {
            objWaxedExposedCutCopperStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_oxidized_chiseled_copper") {
            objWaxedOxidizedChiseledCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_oxidized_copper") {
            objWaxedOxidizedCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_oxidized_copper_bulb") {
            objWaxedOxidizedCopperBulb.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_oxidized_copper_door") {
            objWaxedOxidizedCopperDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_oxidized_copper_grate") {
            objWaxedOxidizedCopperGrate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_oxidized_copper_trapdoor") {
            objWaxedOxidizedCopperTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_oxidized_cut_copper") {
            objWaxedOxidizedCutCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_oxidized_cut_copper_slab") {
            objWaxedOxidizedCutCopperSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_oxidized_cut_copper_stairs") {
            objWaxedOxidizedCutCopperStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_weathered_chiseled_copper") {
            objWaxedWeatheredChiseledCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_weathered_copper") {
            objWaxedWeatheredCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_weathered_copper_bulb") {
            objWaxedWeatheredCopperBulb.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_weathered_copper_door") {
            objWaxedWeatheredCopperDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_weathered_copper_grate") {
            objWaxedWeatheredCopperGrate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_weathered_copper_trapdoor") {
            objWaxedWeatheredCopperTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_weathered_cut_copper") {
            objWaxedWeatheredCutCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_weathered_cut_copper_slab") {
            objWaxedWeatheredCutCopperSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:waxed_weathered_cut_copper_stairs") {
            objWaxedWeatheredCutCopperStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wayfinder_armor_trim_smithing_template") {
            objWayfinderArmorTrimSmithingTemplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:weathered_chiseled_copper") {
            objWeatheredChiseledCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:weathered_copper") {
            objWeatheredCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:weathered_copper_bulb") {
            objWeatheredCopperBulb.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:weathered_copper_door") {
            objWeatheredCopperDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:weathered_copper_grate") {
            objWeatheredCopperGrate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:weathered_copper_trapdoor") {
            objWeatheredCopperTrapdoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:weathered_cut_copper") {
            objWeatheredCutCopper.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:weathered_cut_copper_slab") {
            objWeatheredCutCopperSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:weathered_cut_copper_stairs") {
            objWeatheredCutCopperStairs.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:web") {
            objWeb.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:weeping_vines") {
            objWeepingVines.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wet_sponge") {
            objWetSponge.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wheat") {
            objWheat.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wheat_seeds") {
            objWheatSeeds.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:white_bundle") {
            objWhiteBundle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:white_candle") {
            objWhiteCandle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:white_carpet") {
            objWhiteCarpet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:white_concrete") {
            objWhiteConcrete.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:white_concrete_powder") {
            objWhiteConcretePowder.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:white_dye") {
            objWhiteDye.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:white_glazed_terracotta") {
            objWhiteGlazedTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:white_harness") {
            objWhiteHarness.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:white_shulker_box") {
            objWhiteShulkerBox.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:white_stained_glass") {
            objWhiteStainedGlass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:white_stained_glass_pane") {
            objWhiteStainedGlassPane.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:white_terracotta") {
            objWhiteTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:white_tulip") {
            objWhiteTulip.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:white_wool") {
            objWhiteWool.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wild_armor_trim_smithing_template") {
            objWildArmorTrimSmithingTemplate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wildflowers") {
            objWildflowers.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wind_charge") {
            objWindCharge.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:witch_spawn_egg") {
            objWitchSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wither_rose") {
            objWitherRose.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wither_skeleton_skull") {
            objWitherSkeletonSkull.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wither_skeleton_spawn_egg") {
            objWitherSkeletonSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wither_spawn_egg") {
            objWitherSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wolf_armor") {
            objWolfArmor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wolf_spawn_egg") {
            objWolfSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wooden_axe") {
            objWoodenAxe.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wooden_button") {
            objWoodenButton.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wooden_door") {
            objWoodenDoor.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wooden_hoe") {
            objWoodenHoe.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wooden_pickaxe") {
            objWoodenPickaxe.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wooden_pressure_plate") {
            objWoodenPressurePlate.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wooden_shovel") {
            objWoodenShovel.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wooden_slab") {
            objWoodenSlab.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:wooden_sword") {
            objWoodenSword.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:writable_book") {
            objWritableBook.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:yellow_bundle") {
            objYellowBundle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:yellow_candle") {
            objYellowCandle.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:yellow_carpet") {
            objYellowCarpet.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:yellow_concrete") {
            objYellowConcrete.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:yellow_concrete_powder") {
            objYellowConcretePowder.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:yellow_dye") {
            objYellowDye.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:yellow_glazed_terracotta") {
            objYellowGlazedTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:yellow_harness") {
            objYellowHarness.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:yellow_shulker_box") {
            objYellowShulkerBox.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:yellow_stained_glass") {
            objYellowStainedGlass.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:yellow_stained_glass_pane") {
            objYellowStainedGlassPane.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:yellow_terracotta") {
            objYellowTerracotta.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:yellow_wool") {
            objYellowWool.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:zoglin_spawn_egg") {
            objZoglinSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:zombie_head") {
            objZombieHead.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:zombie_horse_spawn_egg") {
            objZombieHorseSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:zombie_pigman_spawn_egg") {
            objZombiePigmanSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:zombie_spawn_egg") {
            objZombieSpawnEgg.addScore(player, item.amount);
        }
        if (item && item.typeId === "minecraft:zombie_villager_spawn_egg") {
            objZombieVillagerSpawnEgg.addScore(player, item.amount);
        }

        // Set Scores for Items in slot.inventory and slot.hotbar
        for (let i = 0; i < inventory.size; i++) {
            const item = inventory.getItem(i);
            if (item && item.typeId === "minecraft:acacia_boat") {
                objAcaciaBoat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:acacia_button") {
                objAcaciaButton.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:acacia_chest_boat") {
                objAcaciaChestBoat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:acacia_door") {
                objAcaciaDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:acacia_fence") {
                objAcaciaFence.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:acacia_fence_gate") {
                objAcaciaFenceGate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:acacia_hanging_sign") {
                objAcaciaHangingSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:acacia_leaves") {
                objAcaciaLeaves.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:acacia_log") {
                objAcaciaLog.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:acacia_planks") {
                objAcaciaPlanks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:acacia_pressure_plate") {
                objAcaciaPressurePlate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:acacia_sapling") {
                objAcaciaSapling.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:acacia_sign") {
                objAcaciaSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:acacia_slab") {
                objAcaciaSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:acacia_stairs") {
                objAcaciaStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:acacia_trapdoor") {
                objAcaciaTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:acacia_wood") {
                objAcaciaWood.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:activator_rail") {
                objActivatorRail.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:allay_spawn_egg") {
                objAllaySpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:allium") {
                objAllium.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:allow") {
                objAllow.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:amethyst_block") {
                objAmethystBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:amethyst_cluster") {
                objAmethystCluster.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:amethyst_shard") {
                objAmethystShard.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:ancient_debris") {
                objAncientDebris.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:andesite") {
                objAndesite.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:andesite_slab") {
                objAndesiteSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:andesite_stairs") {
                objAndesiteStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:andesite_wall") {
                objAndesiteWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:angler_pottery_sherd") {
                objAnglerPotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:anvil") {
                objAnvil.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:apple") {
                objApple.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:archer_pottery_sherd") {
                objArcherPotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:armadillo_scute") {
                objArmadilloScute.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:armadillo_spawn_egg") {
                objArmadilloSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:armor_stand") {
                objArmorStand.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:arms_up_pottery_sherd") {
                objArmsUpPotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:arrow") {
                objArrow.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:axolotl_bucket") {
                objAxolotlBucket.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:axolotl_spawn_egg") {
                objAxolotlSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:azalea") {
                objAzalea.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:azalea_leaves") {
                objAzaleaLeaves.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:azalea_leaves_flowered") {
                objAzaleaLeavesFlowered.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:azure_bluet") {
                objAzureBluet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:baked_potato") {
                objBakedPotato.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bamboo") {
                objBamboo.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bamboo_block") {
                objBambooBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bamboo_button") {
                objBambooButton.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bamboo_chest_raft") {
                objBambooChestRaft.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bamboo_door") {
                objBambooDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bamboo_fence") {
                objBambooFence.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bamboo_fence_gate") {
                objBambooFenceGate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bamboo_hanging_sign") {
                objBambooHangingSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bamboo_mosaic") {
                objBambooMosaic.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bamboo_mosaic_slab") {
                objBambooMosaicSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bamboo_mosaic_stairs") {
                objBambooMosaicStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bamboo_planks") {
                objBambooPlanks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bamboo_pressure_plate") {
                objBambooPressurePlate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bamboo_raft") {
                objBambooRaft.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bamboo_sign") {
                objBambooSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bamboo_slab") {
                objBambooSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bamboo_stairs") {
                objBambooStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bamboo_trapdoor") {
                objBambooTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:banner") {
                objBanner.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:barrel") {
                objBarrel.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:barrier") {
                objBarrier.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:basalt") {
                objBasalt.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bat_spawn_egg") {
                objBatSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:beacon") {
                objBeacon.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bed") {
                objBed.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bedrock") {
                objBedrock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bee_nest") {
                objBeeNest.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bee_spawn_egg") {
                objBeeSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:beef") {
                objBeef.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:beehive") {
                objBeehive.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:beetroot") {
                objBeetroot.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:beetroot_seeds") {
                objBeetrootSeeds.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:beetroot_soup") {
                objBeetrootSoup.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bell") {
                objBell.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:big_dripleaf") {
                objBigDripleaf.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:birch_boat") {
                objBirchBoat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:birch_button") {
                objBirchButton.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:birch_chest_boat") {
                objBirchChestBoat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:birch_door") {
                objBirchDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:birch_fence") {
                objBirchFence.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:birch_fence_gate") {
                objBirchFenceGate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:birch_hanging_sign") {
                objBirchHangingSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:birch_leaves") {
                objBirchLeaves.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:birch_log") {
                objBirchLog.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:birch_planks") {
                objBirchPlanks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:birch_pressure_plate") {
                objBirchPressurePlate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:birch_sapling") {
                objBirchSapling.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:birch_sign") {
                objBirchSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:birch_slab") {
                objBirchSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:birch_stairs") {
                objBirchStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:birch_trapdoor") {
                objBirchTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:birch_wood") {
                objBirchWood.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:black_bundle") {
                objBlackBundle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:black_candle") {
                objBlackCandle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:black_carpet") {
                objBlackCarpet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:black_concrete") {
                objBlackConcrete.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:black_concrete_powder") {
                objBlackConcretePowder.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:black_dye") {
                objBlackDye.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:black_glazed_terracotta") {
                objBlackGlazedTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:black_harness") {
                objBlackHarness.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:black_shulker_box") {
                objBlackShulkerBox.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:black_stained_glass") {
                objBlackStainedGlass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:black_stained_glass_pane") {
                objBlackStainedGlassPane.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:black_terracotta") {
                objBlackTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:black_wool") {
                objBlackWool.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blackstone") {
                objBlackstone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blackstone_slab") {
                objBlackstoneSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blackstone_stairs") {
                objBlackstoneStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blackstone_wall") {
                objBlackstoneWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blade_pottery_sherd") {
                objBladePotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blast_furnace") {
                objBlastFurnace.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blaze_powder") {
                objBlazePowder.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blaze_rod") {
                objBlazeRod.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blaze_spawn_egg") {
                objBlazeSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blue_bundle") {
                objBlueBundle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blue_candle") {
                objBlueCandle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blue_carpet") {
                objBlueCarpet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blue_concrete") {
                objBlueConcrete.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blue_concrete_powder") {
                objBlueConcretePowder.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blue_dye") {
                objBlueDye.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blue_egg") {
                objBlueEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blue_glazed_terracotta") {
                objBlueGlazedTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blue_harness") {
                objBlueHarness.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blue_ice") {
                objBlueIce.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blue_orchid") {
                objBlueOrchid.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blue_shulker_box") {
                objBlueShulkerBox.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blue_stained_glass") {
                objBlueStainedGlass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blue_stained_glass_pane") {
                objBlueStainedGlassPane.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blue_terracotta") {
                objBlueTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:blue_wool") {
                objBlueWool.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bogged_spawn_egg") {
                objBoggedSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bolt_armor_trim_smithing_template") {
                objBoltArmorTrimSmithingTemplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bone") {
                objBone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bone_block") {
                objBoneBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bone_meal") {
                objBoneMeal.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:book") {
                objBook.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bookshelf") {
                objBookshelf.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:border_block") {
                objBorderBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bordure_indented_banner_pattern") {
                objBordureIndentedBannerPattern.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bow") {
                objBow.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bowl") {
                objBowl.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brain_coral") {
                objBrainCoral.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brain_coral_block") {
                objBrainCoralBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brain_coral_fan") {
                objBrainCoralFan.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bread") {
                objBread.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:breeze_rod") {
                objBreezeRod.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:breeze_spawn_egg") {
                objBreezeSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brewer_pottery_sherd") {
                objBrewerPotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brewing_stand") {
                objBrewingStand.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brick") {
                objBrick.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brick_block") {
                objBrickBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brick_slab") {
                objBrickSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brick_stairs") {
                objBrickStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brick_wall") {
                objBrickWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brown_bundle") {
                objBrownBundle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brown_candle") {
                objBrownCandle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brown_carpet") {
                objBrownCarpet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brown_concrete") {
                objBrownConcrete.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brown_concrete_powder") {
                objBrownConcretePowder.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brown_dye") {
                objBrownDye.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brown_egg") {
                objBrownEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brown_glazed_terracotta") {
                objBrownGlazedTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brown_harness") {
                objBrownHarness.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brown_mushroom") {
                objBrownMushroom.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brown_mushroom_block") {
                objBrownMushroomBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brown_shulker_box") {
                objBrownShulkerBox.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brown_stained_glass") {
                objBrownStainedGlass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brown_stained_glass_pane") {
                objBrownStainedGlassPane.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brown_terracotta") {
                objBrownTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brown_wool") {
                objBrownWool.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:brush") {
                objBrush.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bubble_coral") {
                objBubbleCoral.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bubble_coral_block") {
                objBubbleCoralBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bubble_coral_fan") {
                objBubbleCoralFan.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bucket") {
                objBucket.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:budding_amethyst") {
                objBuddingAmethyst.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bundle") {
                objBundle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:burn_pottery_sherd") {
                objBurnPotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:bush") {
                objBush.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cactus") {
                objCactus.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cactus_flower") {
                objCactusFlower.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cake") {
                objCake.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:calcite") {
                objCalcite.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:calibrated_sculk_sensor") {
                objCalibratedSculkSensor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:camel_spawn_egg") {
                objCamelSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:campfire") {
                objCampfire.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:candle") {
                objCandle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:carpet") {
                objCarpet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:carrot") {
                objCarrot.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:carrot_on_a_stick") {
                objCarrotOnAStick.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cartography_table") {
                objCartographyTable.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:carved_pumpkin") {
                objCarvedPumpkin.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cat_spawn_egg") {
                objCatSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cauldron") {
                objCauldron.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cave_spider_spawn_egg") {
                objCaveSpiderSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chain") {
                objChain.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chain_command_block") {
                objChainCommandBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chainmail_boots") {
                objChainmailBoots.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chainmail_chestplate") {
                objChainmailChestplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chainmail_helmet") {
                objChainmailHelmet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chainmail_leggings") {
                objChainmailLeggings.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:charcoal") {
                objCharcoal.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cherry_boat") {
                objCherryBoat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cherry_button") {
                objCherryButton.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cherry_chest_boat") {
                objCherryChestBoat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cherry_door") {
                objCherryDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cherry_fence") {
                objCherryFence.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cherry_fence_gate") {
                objCherryFenceGate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cherry_hanging_sign") {
                objCherryHangingSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cherry_leaves") {
                objCherryLeaves.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cherry_log") {
                objCherryLog.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cherry_planks") {
                objCherryPlanks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cherry_pressure_plate") {
                objCherryPressurePlate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cherry_sapling") {
                objCherrySapling.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cherry_sign") {
                objCherrySign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cherry_slab") {
                objCherrySlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cherry_stairs") {
                objCherryStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cherry_trapdoor") {
                objCherryTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cherry_wood") {
                objCherryWood.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chest") {
                objChest.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chest_boat") {
                objChestBoat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chest_minecart") {
                objChestMinecart.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chicken") {
                objChicken.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chicken_spawn_egg") {
                objChickenSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chipped_anvil") {
                objChippedAnvil.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chiseled_bookshelf") {
                objChiseledBookshelf.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chiseled_copper") {
                objChiseledCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chiseled_deepslate") {
                objChiseledDeepslate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chiseled_nether_bricks") {
                objChiseledNetherBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chiseled_polished_blackstone") {
                objChiseledPolishedBlackstone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chiseled_quartz_block") {
                objChiseledQuartzBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chiseled_red_sandstone") {
                objChiseledRedSandstone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chiseled_resin_bricks") {
                objChiseledResinBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chiseled_sandstone") {
                objChiseledSandstone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chiseled_stone_bricks") {
                objChiseledStoneBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chiseled_tuff") {
                objChiseledTuff.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chiseled_tuff_bricks") {
                objChiseledTuffBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chorus_flower") {
                objChorusFlower.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chorus_fruit") {
                objChorusFruit.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:chorus_plant") {
                objChorusPlant.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:clay") {
                objClay.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:clay_ball") {
                objClayBall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:clock") {
                objClock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:closed_eyeblossom") {
                objClosedEyeblossom.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:coal") {
                objCoal.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:coal_block") {
                objCoalBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:coal_ore") {
                objCoalOre.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:coarse_dirt") {
                objCoarseDirt.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:coast_armor_trim_smithing_template") {
                objCoastArmorTrimSmithingTemplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cobbled_deepslate") {
                objCobbledDeepslate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cobbled_deepslate_slab") {
                objCobbledDeepslateSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cobbled_deepslate_stairs") {
                objCobbledDeepslateStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cobbled_deepslate_wall") {
                objCobbledDeepslateWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cobblestone") {
                objCobblestone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cobblestone_slab") {
                objCobblestoneSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cobblestone_wall") {
                objCobblestoneWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cocoa_beans") {
                objCocoaBeans.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cod") {
                objCod.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cod_bucket") {
                objCodBucket.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cod_spawn_egg") {
                objCodSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:command_block") {
                objCommandBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:command_block_minecart") {
                objCommandBlockMinecart.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:comparator") {
                objComparator.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:compass") {
                objCompass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:composter") {
                objComposter.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:conduit") {
                objConduit.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cooked_beef") {
                objCookedBeef.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cooked_chicken") {
                objCookedChicken.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cooked_cod") {
                objCookedCod.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cooked_mutton") {
                objCookedMutton.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cooked_porkchop") {
                objCookedPorkchop.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cooked_rabbit") {
                objCookedRabbit.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cooked_salmon") {
                objCookedSalmon.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cookie") {
                objCookie.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:copper_block") {
                objCopperBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:copper_bulb") {
                objCopperBulb.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:copper_door") {
                objCopperDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:copper_grate") {
                objCopperGrate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:copper_ingot") {
                objCopperIngot.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:copper_ore") {
                objCopperOre.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:copper_trapdoor") {
                objCopperTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cornflower") {
                objCornflower.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cow_spawn_egg") {
                objCowSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cracked_deepslate_bricks") {
                objCrackedDeepslateBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cracked_deepslate_tiles") {
                objCrackedDeepslateTiles.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cracked_nether_bricks") {
                objCrackedNetherBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cracked_polished_blackstone_bricks") {
                objCrackedPolishedBlackstoneBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cracked_stone_bricks") {
                objCrackedStoneBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:crafter") {
                objCrafter.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:crafting_table") {
                objCraftingTable.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:creaking_heart") {
                objCreakingHeart.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:creaking_spawn_egg") {
                objCreakingSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:creeper_banner_pattern") {
                objCreeperBannerPattern.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:creeper_head") {
                objCreeperHead.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:creeper_spawn_egg") {
                objCreeperSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:crimson_button") {
                objCrimsonButton.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:crimson_door") {
                objCrimsonDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:crimson_fence") {
                objCrimsonFence.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:crimson_fence_gate") {
                objCrimsonFenceGate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:crimson_fungus") {
                objCrimsonFungus.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:crimson_hanging_sign") {
                objCrimsonHangingSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:crimson_hyphae") {
                objCrimsonHyphae.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:crimson_nylium") {
                objCrimsonNylium.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:crimson_planks") {
                objCrimsonPlanks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:crimson_pressure_plate") {
                objCrimsonPressurePlate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:crimson_roots") {
                objCrimsonRoots.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:crimson_sign") {
                objCrimsonSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:crimson_slab") {
                objCrimsonSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:crimson_stairs") {
                objCrimsonStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:crimson_stem") {
                objCrimsonStem.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:crimson_trapdoor") {
                objCrimsonTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:crossbow") {
                objCrossbow.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:crying_obsidian") {
                objCryingObsidian.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cut_copper") {
                objCutCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cut_copper_slab") {
                objCutCopperSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cut_copper_stairs") {
                objCutCopperStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cut_red_sandstone") {
                objCutRedSandstone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cut_red_sandstone_slab") {
                objCutRedSandstoneSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cut_sandstone") {
                objCutSandstone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cut_sandstone_slab") {
                objCutSandstoneSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cyan_bundle") {
                objCyanBundle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cyan_candle") {
                objCyanCandle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cyan_carpet") {
                objCyanCarpet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cyan_concrete") {
                objCyanConcrete.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cyan_concrete_powder") {
                objCyanConcretePowder.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cyan_dye") {
                objCyanDye.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cyan_glazed_terracotta") {
                objCyanGlazedTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cyan_harness") {
                objCyanHarness.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cyan_shulker_box") {
                objCyanShulkerBox.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cyan_stained_glass") {
                objCyanStainedGlass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cyan_stained_glass_pane") {
                objCyanStainedGlassPane.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cyan_terracotta") {
                objCyanTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:cyan_wool") {
                objCyanWool.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:damaged_anvil") {
                objDamagedAnvil.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dandelion") {
                objDandelion.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:danger_pottery_sherd") {
                objDangerPotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dark_oak_boat") {
                objDarkOakBoat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dark_oak_button") {
                objDarkOakButton.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dark_oak_chest_boat") {
                objDarkOakChestBoat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dark_oak_door") {
                objDarkOakDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dark_oak_fence") {
                objDarkOakFence.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dark_oak_fence_gate") {
                objDarkOakFenceGate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dark_oak_hanging_sign") {
                objDarkOakHangingSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dark_oak_leaves") {
                objDarkOakLeaves.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dark_oak_log") {
                objDarkOakLog.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dark_oak_planks") {
                objDarkOakPlanks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dark_oak_pressure_plate") {
                objDarkOakPressurePlate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dark_oak_sapling") {
                objDarkOakSapling.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dark_oak_sign") {
                objDarkOakSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dark_oak_slab") {
                objDarkOakSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dark_oak_stairs") {
                objDarkOakStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dark_oak_trapdoor") {
                objDarkOakTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dark_oak_wood") {
                objDarkOakWood.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dark_prismarine") {
                objDarkPrismarine.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dark_prismarine_slab") {
                objDarkPrismarineSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dark_prismarine_stairs") {
                objDarkPrismarineStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:daylight_detector") {
                objDaylightDetector.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dead_brain_coral") {
                objDeadBrainCoral.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dead_brain_coral_block") {
                objDeadBrainCoralBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dead_brain_coral_fan") {
                objDeadBrainCoralFan.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dead_bubble_coral") {
                objDeadBubbleCoral.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dead_bubble_coral_block") {
                objDeadBubbleCoralBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dead_bubble_coral_fan") {
                objDeadBubbleCoralFan.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dead_fire_coral") {
                objDeadFireCoral.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dead_fire_coral_block") {
                objDeadFireCoralBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dead_fire_coral_fan") {
                objDeadFireCoralFan.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dead_horn_coral") {
                objDeadHornCoral.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dead_horn_coral_block") {
                objDeadHornCoralBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dead_horn_coral_fan") {
                objDeadHornCoralFan.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dead_tube_coral") {
                objDeadTubeCoral.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dead_tube_coral_block") {
                objDeadTubeCoralBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:deadbush") {
                objDeadbush.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:decorated_pot") {
                objDecoratedPot.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:deepslate") {
                objDeepslate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:deepslate_brick_slab") {
                objDeepslateBrickSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:deepslate_brick_stairs") {
                objDeepslateBrickStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:deepslate_brick_wall") {
                objDeepslateBrickWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:deepslate_bricks") {
                objDeepslateBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:deepslate_coal_ore") {
                objDeepslateCoalOre.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:deepslate_copper_ore") {
                objDeepslateCopperOre.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:deepslate_diamond_ore") {
                objDeepslateDiamondOre.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:deepslate_emerald_ore") {
                objDeepslateEmeraldOre.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:deepslate_gold_ore") {
                objDeepslateGoldOre.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:deepslate_iron_ore") {
                objDeepslateIronOre.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:deepslate_lapis_ore") {
                objDeepslateLapisOre.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:deepslate_redstone_ore") {
                objDeepslateRedstoneOre.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:deepslate_tile_slab") {
                objDeepslateTileSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:deepslate_tile_stairs") {
                objDeepslateTileStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:deepslate_tile_wall") {
                objDeepslateTileWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:deepslate_tiles") {
                objDeepslateTiles.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:deny") {
                objDeny.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:detector_rail") {
                objDetectorRail.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:diamond") {
                objDiamond.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:diamond_axe") {
                objDiamondAxe.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:diamond_block") {
                objDiamondBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:diamond_boots") {
                objDiamondBoots.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:diamond_chestplate") {
                objDiamondChestplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:diamond_helmet") {
                objDiamondHelmet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:diamond_hoe") {
                objDiamondHoe.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:diamond_horse_armor") {
                objDiamondHorseArmor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:diamond_leggings") {
                objDiamondLeggings.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:diamond_ore") {
                objDiamondOre.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:diamond_pickaxe") {
                objDiamondPickaxe.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:diamond_shovel") {
                objDiamondShovel.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:diamond_sword") {
                objDiamondSword.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:diorite") {
                objDiorite.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:diorite_slab") {
                objDioriteSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:diorite_stairs") {
                objDioriteStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:diorite_wall") {
                objDioriteWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dirt") {
                objDirt.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dirt_with_roots") {
                objDirtWithRoots.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:disc_fragment_5") {
                objDiscFragment5.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dispenser") {
                objDispenser.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dolphin_spawn_egg") {
                objDolphinSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:donkey_spawn_egg") {
                objDonkeySpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dragon_breath") {
                objDragonBreath.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dragon_egg") {
                objDragonEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dragon_head") {
                objDragonHead.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dried_ghast") {
                objDriedGhast.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dried_kelp") {
                objDriedKelp.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dried_kelp_block") {
                objDriedKelpBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dripstone_block") {
                objDripstoneBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dropper") {
                objDropper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:drowned_spawn_egg") {
                objDrownedSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:dune_armor_trim_smithing_template") {
                objDuneArmorTrimSmithingTemplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:echo_shard") {
                objEchoShard.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:egg") {
                objEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:elder_guardian_spawn_egg") {
                objElderGuardianSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:elytra") {
                objElytra.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:emerald") {
                objEmerald.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:emerald_block") {
                objEmeraldBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:emerald_ore") {
                objEmeraldOre.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:empty_map") {
                objEmptyMap.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:enchanted_book") {
                objEnchantedBook.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:enchanted_golden_apple") {
                objEnchantedGoldenApple.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:enchanting_table") {
                objEnchantingTable.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:end_brick_stairs") {
                objEndBrickStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:end_bricks") {
                objEndBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:end_crystal") {
                objEndCrystal.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:end_portal_frame") {
                objEndPortalFrame.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:end_rod") {
                objEndRod.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:end_stone") {
                objEndStone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:end_stone_brick_slab") {
                objEndStoneBrickSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:end_stone_brick_wall") {
                objEndStoneBrickWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:ender_chest") {
                objEnderChest.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:ender_dragon_spawn_egg") {
                objEnderDragonSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:ender_eye") {
                objEnderEye.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:ender_pearl") {
                objEnderPearl.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:enderman_spawn_egg") {
                objEndermanSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:endermite_spawn_egg") {
                objEndermiteSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:evoker_spawn_egg") {
                objEvokerSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:experience_bottle") {
                objExperienceBottle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:explorer_pottery_sherd") {
                objExplorerPotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:exposed_chiseled_copper") {
                objExposedChiseledCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:exposed_copper") {
                objExposedCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:exposed_copper_bulb") {
                objExposedCopperBulb.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:exposed_copper_door") {
                objExposedCopperDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:exposed_copper_grate") {
                objExposedCopperGrate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:exposed_copper_trapdoor") {
                objExposedCopperTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:exposed_cut_copper") {
                objExposedCutCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:exposed_cut_copper_slab") {
                objExposedCutCopperSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:exposed_cut_copper_stairs") {
                objExposedCutCopperStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:eye_armor_trim_smithing_template") {
                objEyeArmorTrimSmithingTemplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:farmland") {
                objFarmland.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:feather") {
                objFeather.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:fence_gate") {
                objFenceGate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:fermented_spider_eye") {
                objFermentedSpiderEye.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:fern") {
                objFern.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:field_masoned_banner_pattern") {
                objFieldMasonedBannerPattern.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:filled_map") {
                objFilledMap.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:fire_charge") {
                objFireCharge.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:fire_coral") {
                objFireCoral.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:fire_coral_block") {
                objFireCoralBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:fire_coral_fan") {
                objFireCoralFan.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:firefly_bush") {
                objFireflyBush.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:firework_rocket") {
                objFireworkRocket.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:firework_star") {
                objFireworkStar.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:fishing_rod") {
                objFishingRod.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:fletching_table") {
                objFletchingTable.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:flint") {
                objFlint.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:flint_and_steel") {
                objFlintAndSteel.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:flow_armor_trim_smithing_template") {
                objFlowArmorTrimSmithingTemplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:flow_banner_pattern") {
                objFlowBannerPattern.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:flow_pottery_sherd") {
                objFlowPotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:flower_banner_pattern") {
                objFlowerBannerPattern.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:flower_pot") {
                objFlowerPot.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:flowering_azalea") {
                objFloweringAzalea.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:fox_spawn_egg") {
                objFoxSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:frame") {
                objFrame.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:friend_pottery_sherd") {
                objFriendPotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:frog_spawn") {
                objFrogSpawn.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:frog_spawn_egg") {
                objFrogSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:frosted_ice") {
                objFrostedIce.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:furnace") {
                objFurnace.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:ghast_spawn_egg") {
                objGhastSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:ghast_tear") {
                objGhastTear.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:gilded_blackstone") {
                objGildedBlackstone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:glass") {
                objGlass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:glass_bottle") {
                objGlassBottle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:glass_pane") {
                objGlassPane.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:glistering_melon_slice") {
                objGlisteringMelonSlice.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:globe_banner_pattern") {
                objGlobeBannerPattern.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:glow_berries") {
                objGlowBerries.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:glow_frame") {
                objGlowFrame.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:glow_ink_sac") {
                objGlowInkSac.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:glow_lichen") {
                objGlowLichen.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:glow_squid_spawn_egg") {
                objGlowSquidSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:glowstone") {
                objGlowstone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:glowstone_dust") {
                objGlowstoneDust.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:goat_horn") {
                objGoatHorn.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:goat_spawn_egg") {
                objGoatSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:gold_block") {
                objGoldBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:gold_ingot") {
                objGoldIngot.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:gold_nugget") {
                objGoldNugget.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:gold_ore") {
                objGoldOre.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:golden_apple") {
                objGoldenApple.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:golden_axe") {
                objGoldenAxe.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:golden_boots") {
                objGoldenBoots.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:golden_carrot") {
                objGoldenCarrot.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:golden_chestplate") {
                objGoldenChestplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:golden_helmet") {
                objGoldenHelmet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:golden_hoe") {
                objGoldenHoe.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:golden_horse_armor") {
                objGoldenHorseArmor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:golden_leggings") {
                objGoldenLeggings.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:golden_pickaxe") {
                objGoldenPickaxe.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:golden_rail") {
                objGoldenRail.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:golden_shovel") {
                objGoldenShovel.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:golden_sword") {
                objGoldenSword.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:granite") {
                objGranite.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:granite_slab") {
                objGraniteSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:granite_stairs") {
                objGraniteStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:granite_wall") {
                objGraniteWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:grass_block") {
                objGrassBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:grass_path") {
                objGrassPath.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:gravel") {
                objGravel.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:gray_bundle") {
                objGrayBundle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:gray_candle") {
                objGrayCandle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:gray_carpet") {
                objGrayCarpet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:gray_concrete") {
                objGrayConcrete.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:gray_concrete_powder") {
                objGrayConcretePowder.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:gray_dye") {
                objGrayDye.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:gray_glazed_terracotta") {
                objGrayGlazedTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:gray_harness") {
                objGrayHarness.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:gray_shulker_box") {
                objGrayShulkerBox.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:gray_stained_glass") {
                objGrayStainedGlass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:gray_stained_glass_pane") {
                objGrayStainedGlassPane.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:gray_terracotta") {
                objGrayTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:gray_wool") {
                objGrayWool.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:green_bundle") {
                objGreenBundle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:green_candle") {
                objGreenCandle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:green_carpet") {
                objGreenCarpet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:green_concrete") {
                objGreenConcrete.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:green_concrete_powder") {
                objGreenConcretePowder.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:green_dye") {
                objGreenDye.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:green_glazed_terracotta") {
                objGreenGlazedTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:green_harness") {
                objGreenHarness.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:green_shulker_box") {
                objGreenShulkerBox.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:green_stained_glass") {
                objGreenStainedGlass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:green_stained_glass_pane") {
                objGreenStainedGlassPane.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:green_terracotta") {
                objGreenTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:green_wool") {
                objGreenWool.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:grindstone") {
                objGrindstone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:guardian_spawn_egg") {
                objGuardianSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:gunpowder") {
                objGunpowder.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:guster_banner_pattern") {
                objGusterBannerPattern.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:guster_pottery_sherd") {
                objGusterPotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:hanging_roots") {
                objHangingRoots.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:happy_ghast_spawn_egg") {
                objHappyGhastSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:hardened_clay") {
                objHardenedClay.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:hay_block") {
                objHayBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:heart_of_the_sea") {
                objHeartOfTheSea.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:heart_pottery_sherd") {
                objHeartPotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:heartbreak_pottery_sherd") {
                objHeartbreakPotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:heavy_core") {
                objHeavyCore.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:heavy_weighted_pressure_plate") {
                objHeavyWeightedPressurePlate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:hoglin_spawn_egg") {
                objHoglinSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:honey_block") {
                objHoneyBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:honey_bottle") {
                objHoneyBottle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:honeycomb") {
                objHoneycomb.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:honeycomb_block") {
                objHoneycombBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:hopper") {
                objHopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:hopper_minecart") {
                objHopperMinecart.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:horn_coral") {
                objHornCoral.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:horn_coral_block") {
                objHornCoralBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:horn_coral_fan") {
                objHornCoralFan.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:horse_spawn_egg") {
                objHorseSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:host_armor_trim_smithing_template") {
                objHostArmorTrimSmithingTemplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:howl_pottery_sherd") {
                objHowlPotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:husk_spawn_egg") {
                objHuskSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:ice") {
                objIce.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:infested_chiseled_stone_bricks") {
                objInfestedChiseledStoneBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:infested_cobblestone") {
                objInfestedCobblestone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:infested_cracked_stone_bricks") {
                objInfestedCrackedStoneBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:infested_deepslate") {
                objInfestedDeepslate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:infested_mossy_stone_bricks") {
                objInfestedMossyStoneBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:infested_stone") {
                objInfestedStone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:infested_stone_bricks") {
                objInfestedStoneBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:ink_sac") {
                objInkSac.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:iron_axe") {
                objIronAxe.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:iron_bars") {
                objIronBars.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:iron_block") {
                objIronBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:iron_boots") {
                objIronBoots.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:iron_chestplate") {
                objIronChestplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:iron_door") {
                objIronDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:iron_golem_spawn_egg") {
                objIronGolemSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:iron_helmet") {
                objIronHelmet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:iron_hoe") {
                objIronHoe.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:iron_horse_armor") {
                objIronHorseArmor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:iron_ingot") {
                objIronIngot.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:iron_leggings") {
                objIronLeggings.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:iron_nugget") {
                objIronNugget.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:iron_ore") {
                objIronOre.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:iron_pickaxe") {
                objIronPickaxe.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:iron_shovel") {
                objIronShovel.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:iron_sword") {
                objIronSword.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:iron_trapdoor") {
                objIronTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:jigsaw") {
                objJigsaw.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:jukebox") {
                objJukebox.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:jungle_boat") {
                objJungleBoat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:jungle_button") {
                objJungleButton.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:jungle_chest_boat") {
                objJungleChestBoat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:jungle_door") {
                objJungleDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:jungle_fence") {
                objJungleFence.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:jungle_fence_gate") {
                objJungleFenceGate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:jungle_hanging_sign") {
                objJungleHangingSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:jungle_leaves") {
                objJungleLeaves.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:jungle_log") {
                objJungleLog.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:jungle_planks") {
                objJunglePlanks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:jungle_pressure_plate") {
                objJunglePressurePlate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:jungle_sapling") {
                objJungleSapling.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:jungle_sign") {
                objJungleSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:jungle_slab") {
                objJungleSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:jungle_stairs") {
                objJungleStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:jungle_trapdoor") {
                objJungleTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:jungle_wood") {
                objJungleWood.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:kelp") {
                objKelp.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:ladder") {
                objLadder.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lantern") {
                objLantern.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lapis_block") {
                objLapisBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lapis_lazuli") {
                objLapisLazuli.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lapis_ore") {
                objLapisOre.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:large_amethyst_bud") {
                objLargeAmethystBud.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:large_fern") {
                objLargeFern.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lava_bucket") {
                objLavaBucket.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lead") {
                objLead.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:leaf_litter") {
                objLeafLitter.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:leather") {
                objLeather.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:leather_boots") {
                objLeatherBoots.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:leather_chestplate") {
                objLeatherChestplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:leather_helmet") {
                objLeatherHelmet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:leather_horse_armor") {
                objLeatherHorseArmor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:leather_leggings") {
                objLeatherLeggings.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lectern") {
                objLectern.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lever") {
                objLever.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_block_0") {
                objLightBlock0.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_block_1") {
                objLightBlock1.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_block_10") {
                objLightBlock10.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_block_11") {
                objLightBlock11.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_block_12") {
                objLightBlock12.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_block_13") {
                objLightBlock13.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_block_14") {
                objLightBlock14.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_block_15") {
                objLightBlock15.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_block_2") {
                objLightBlock2.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_block_3") {
                objLightBlock3.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_block_4") {
                objLightBlock4.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_block_5") {
                objLightBlock5.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_block_6") {
                objLightBlock6.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_block_7") {
                objLightBlock7.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_block_8") {
                objLightBlock8.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_block_9") {
                objLightBlock9.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_blue_bundle") {
                objLightBlueBundle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_blue_candle") {
                objLightBlueCandle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_blue_carpet") {
                objLightBlueCarpet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_blue_concrete") {
                objLightBlueConcrete.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_blue_concrete_powder") {
                objLightBlueConcretePowder.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_blue_dye") {
                objLightBlueDye.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_blue_glazed_terracotta") {
                objLightBlueGlazedTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_blue_harness") {
                objLightBlueHarness.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_blue_shulker_box") {
                objLightBlueShulkerBox.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_blue_stained_glass") {
                objLightBlueStainedGlass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_blue_stained_glass_pane") {
                objLightBlueStainedGlassPane.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_blue_terracotta") {
                objLightBlueTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_blue_wool") {
                objLightBlueWool.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_gray_bundle") {
                objLightGrayBundle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_gray_candle") {
                objLightGrayCandle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_gray_carpet") {
                objLightGrayCarpet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_gray_concrete") {
                objLightGrayConcrete.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_gray_concrete_powder") {
                objLightGrayConcretePowder.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_gray_dye") {
                objLightGrayDye.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_gray_harness") {
                objLightGrayHarness.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_gray_shulker_box") {
                objLightGrayShulkerBox.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_gray_stained_glass") {
                objLightGrayStainedGlass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_gray_stained_glass_pane") {
                objLightGrayStainedGlassPane.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_gray_terracotta") {
                objLightGrayTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_gray_wool") {
                objLightGrayWool.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:light_weighted_pressure_plate") {
                objLightWeightedPressurePlate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lightning_rod") {
                objLightningRod.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lilac") {
                objLilac.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lily_of_the_valley") {
                objLilyOfTheValley.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lime_bundle") {
                objLimeBundle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lime_candle") {
                objLimeCandle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lime_carpet") {
                objLimeCarpet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lime_concrete") {
                objLimeConcrete.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lime_concrete_powder") {
                objLimeConcretePowder.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lime_dye") {
                objLimeDye.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lime_glazed_terracotta") {
                objLimeGlazedTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lime_harness") {
                objLimeHarness.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lime_shulker_box") {
                objLimeShulkerBox.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lime_stained_glass") {
                objLimeStainedGlass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lime_stained_glass_pane") {
                objLimeStainedGlassPane.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lime_terracotta") {
                objLimeTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lime_wool") {
                objLimeWool.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lingering_potion") {
                objLingeringPotion.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lit_pumpkin") {
                objLitPumpkin.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:llama_spawn_egg") {
                objLlamaSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lodestone") {
                objLodestone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:lodestone_compass") {
                objLodestoneCompass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:loom") {
                objLoom.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mace") {
                objMace.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:magenta_bundle") {
                objMagentaBundle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:magenta_candle") {
                objMagentaCandle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:magenta_carpet") {
                objMagentaCarpet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:magenta_concrete") {
                objMagentaConcrete.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:magenta_concrete_powder") {
                objMagentaConcretePowder.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:magenta_dye") {
                objMagentaDye.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:magenta_glazed_terracotta") {
                objMagentaGlazedTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:magenta_harness") {
                objMagentaHarness.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:magenta_shulker_box") {
                objMagentaShulkerBox.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:magenta_stained_glass") {
                objMagentaStainedGlass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:magenta_stained_glass_pane") {
                objMagentaStainedGlassPane.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:magenta_terracotta") {
                objMagentaTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:magenta_wool") {
                objMagentaWool.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:magma") {
                objMagma.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:magma_cream") {
                objMagmaCream.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:magma_cube_spawn_egg") {
                objMagmaCubeSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mangrove_boat") {
                objMangroveBoat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mangrove_button") {
                objMangroveButton.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mangrove_chest_boat") {
                objMangroveChestBoat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mangrove_door") {
                objMangroveDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mangrove_fence") {
                objMangroveFence.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mangrove_fence_gate") {
                objMangroveFenceGate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mangrove_hanging_sign") {
                objMangroveHangingSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mangrove_leaves") {
                objMangroveLeaves.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mangrove_log") {
                objMangroveLog.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mangrove_planks") {
                objMangrovePlanks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mangrove_pressure_plate") {
                objMangrovePressurePlate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mangrove_propagule") {
                objMangrovePropagule.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mangrove_roots") {
                objMangroveRoots.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mangrove_sign") {
                objMangroveSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mangrove_slab") {
                objMangroveSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mangrove_stairs") {
                objMangroveStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mangrove_trapdoor") {
                objMangroveTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mangrove_wood") {
                objMangroveWood.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:medium_amethyst_bud") {
                objMediumAmethystBud.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:melon_block") {
                objMelonBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:melon_seeds") {
                objMelonSeeds.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:melon_slice") {
                objMelonSlice.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:milk_bucket") {
                objMilkBucket.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:minecart") {
                objMinecart.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:miner_pottery_sherd") {
                objMinerPotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mob_spawner") {
                objMobSpawner.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mojang_banner_pattern") {
                objMojangBannerPattern.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mooshroom_spawn_egg") {
                objMooshroomSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:moss_block") {
                objMossBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:moss_carpet") {
                objMossCarpet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mossy_cobblestone") {
                objMossyCobblestone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mossy_cobblestone_slab") {
                objMossyCobblestoneSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mossy_cobblestone_stairs") {
                objMossyCobblestoneStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mossy_cobblestone_wall") {
                objMossyCobblestoneWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mossy_stone_brick_slab") {
                objMossyStoneBrickSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mossy_stone_brick_stairs") {
                objMossyStoneBrickStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mossy_stone_brick_wall") {
                objMossyStoneBrickWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mossy_stone_bricks") {
                objMossyStoneBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mourner_pottery_sherd") {
                objMournerPotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mud") {
                objMud.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mud_brick_slab") {
                objMudBrickSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mud_brick_stairs") {
                objMudBrickStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mud_brick_wall") {
                objMudBrickWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mud_bricks") {
                objMudBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:muddy_mangrove_roots") {
                objMuddyMangroveRoots.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mule_spawn_egg") {
                objMuleSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mushroom_stem") {
                objMushroomStem.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mushroom_stew") {
                objMushroomStew.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_11") {
                objMusicDisc11.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_13") {
                objMusicDisc13.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_5") {
                objMusicDisc5.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_blocks") {
                objMusicDiscBlocks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_cat") {
                objMusicDiscCat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_chirp") {
                objMusicDiscChirp.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_creator") {
                objMusicDiscCreator.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_creator_music_box") {
                objMusicDiscCreatorMusicBox.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_far") {
                objMusicDiscFar.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_lava_chicken") {
                objMusicDiscLavaChicken.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_mall") {
                objMusicDiscMall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_mellohi") {
                objMusicDiscMellohi.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_otherside") {
                objMusicDiscOtherside.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_pigstep") {
                objMusicDiscPigstep.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_precipice") {
                objMusicDiscPrecipice.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_relic") {
                objMusicDiscRelic.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_stal") {
                objMusicDiscStal.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_strad") {
                objMusicDiscStrad.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_tears") {
                objMusicDiscTears.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_wait") {
                objMusicDiscWait.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:music_disc_ward") {
                objMusicDiscWard.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mutton") {
                objMutton.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:mycelium") {
                objMycelium.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:name_tag") {
                objNameTag.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:nautilus_shell") {
                objNautilusShell.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:nether_brick") {
                objNetherBrick.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:nether_brick_fence") {
                objNetherBrickFence.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:nether_brick_slab") {
                objNetherBrickSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:nether_brick_stairs") {
                objNetherBrickStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:nether_brick_wall") {
                objNetherBrickWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:nether_gold_ore") {
                objNetherGoldOre.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:nether_sprouts") {
                objNetherSprouts.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:nether_star") {
                objNetherStar.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:nether_wart") {
                objNetherWart.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:nether_wart_block") {
                objNetherWartBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:netherbrick") {
                objNetherbrick.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:netherite_axe") {
                objNetheriteAxe.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:netherite_block") {
                objNetheriteBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:netherite_boots") {
                objNetheriteBoots.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:netherite_chestplate") {
                objNetheriteChestplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:netherite_helmet") {
                objNetheriteHelmet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:netherite_hoe") {
                objNetheriteHoe.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:netherite_ingot") {
                objNetheriteIngot.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:netherite_leggings") {
                objNetheriteLeggings.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:netherite_pickaxe") {
                objNetheritePickaxe.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:netherite_scrap") {
                objNetheriteScrap.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:netherite_shovel") {
                objNetheriteShovel.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:netherite_sword") {
                objNetheriteSword.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:netherite_upgrade_smithing_template") {
                objNetheriteUpgradeSmithingTemplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:netherrack") {
                objNetherrack.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:normal_stone_slab") {
                objNormalStoneSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:normal_stone_stairs") {
                objNormalStoneStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:noteblock") {
                objNoteblock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oak_boat") {
                objOakBoat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oak_chest_boat") {
                objOakChestBoat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oak_fence") {
                objOakFence.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oak_hanging_sign") {
                objOakHangingSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oak_leaves") {
                objOakLeaves.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oak_log") {
                objOakLog.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oak_planks") {
                objOakPlanks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oak_sapling") {
                objOakSapling.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oak_sign") {
                objOakSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oak_slab") {
                objOakSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oak_stairs") {
                objOakStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oak_wood") {
                objOakWood.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:observer") {
                objObserver.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:obsidian") {
                objObsidian.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:ocelot_spawn_egg") {
                objOcelotSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:ochre_froglight") {
                objOchreFroglight.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:ominous_bottle") {
                objOminousBottle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:ominous_trial_key") {
                objOminousTrialKey.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:open_eyeblossom") {
                objOpenEyeblossom.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:orange_bundle") {
                objOrangeBundle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:orange_candle") {
                objOrangeCandle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:orange_carpet") {
                objOrangeCarpet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:orange_concrete") {
                objOrangeConcrete.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:orange_concrete_powder") {
                objOrangeConcretePowder.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:orange_dye") {
                objOrangeDye.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:orange_glazed_terracotta") {
                objOrangeGlazedTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:orange_harness") {
                objOrangeHarness.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:orange_shulker_box") {
                objOrangeShulkerBox.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:orange_stained_glass") {
                objOrangeStainedGlass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:orange_stained_glass_pane") {
                objOrangeStainedGlassPane.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:orange_terracotta") {
                objOrangeTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:orange_tulip") {
                objOrangeTulip.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:orange_wool") {
                objOrangeWool.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oxeye_daisy") {
                objOxeyeDaisy.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oxidized_chiseled_copper") {
                objOxidizedChiseledCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oxidized_copper") {
                objOxidizedCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oxidized_copper_bulb") {
                objOxidizedCopperBulb.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oxidized_copper_door") {
                objOxidizedCopperDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oxidized_copper_grate") {
                objOxidizedCopperGrate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oxidized_copper_trapdoor") {
                objOxidizedCopperTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oxidized_cut_copper") {
                objOxidizedCutCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oxidized_cut_copper_slab") {
                objOxidizedCutCopperSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:oxidized_cut_copper_stairs") {
                objOxidizedCutCopperStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:packed_ice") {
                objPackedIce.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:packed_mud") {
                objPackedMud.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:painting") {
                objPainting.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pale_hanging_moss") {
                objPaleHangingMoss.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pale_moss_block") {
                objPaleMossBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pale_moss_carpet") {
                objPaleMossCarpet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pale_oak_boat") {
                objPaleOakBoat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pale_oak_button") {
                objPaleOakButton.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pale_oak_chest_boat") {
                objPaleOakChestBoat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pale_oak_door") {
                objPaleOakDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pale_oak_fence") {
                objPaleOakFence.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pale_oak_fence_gate") {
                objPaleOakFenceGate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pale_oak_hanging_sign") {
                objPaleOakHangingSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pale_oak_leaves") {
                objPaleOakLeaves.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pale_oak_log") {
                objPaleOakLog.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pale_oak_planks") {
                objPaleOakPlanks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pale_oak_pressure_plate") {
                objPaleOakPressurePlate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pale_oak_sapling") {
                objPaleOakSapling.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pale_oak_sign") {
                objPaleOakSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pale_oak_slab") {
                objPaleOakSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pale_oak_stairs") {
                objPaleOakStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pale_oak_trapdoor") {
                objPaleOakTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pale_oak_wood") {
                objPaleOakWood.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:panda_spawn_egg") {
                objPandaSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:paper") {
                objPaper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:parrot_spawn_egg") {
                objParrotSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pearlescent_froglight") {
                objPearlescentFroglight.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:peony") {
                objPeony.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:petrified_oak_slab") {
                objPetrifiedOakSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:phantom_membrane") {
                objPhantomMembrane.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:phantom_spawn_egg") {
                objPhantomSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pig_spawn_egg") {
                objPigSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:piglin_banner_pattern") {
                objPiglinBannerPattern.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:piglin_brute_spawn_egg") {
                objPiglinBruteSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:piglin_head") {
                objPiglinHead.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:piglin_spawn_egg") {
                objPiglinSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pillager_spawn_egg") {
                objPillagerSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pink_bundle") {
                objPinkBundle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pink_candle") {
                objPinkCandle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pink_carpet") {
                objPinkCarpet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pink_concrete") {
                objPinkConcrete.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pink_concrete_powder") {
                objPinkConcretePowder.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pink_dye") {
                objPinkDye.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pink_glazed_terracotta") {
                objPinkGlazedTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pink_harness") {
                objPinkHarness.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pink_petals") {
                objPinkPetals.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pink_shulker_box") {
                objPinkShulkerBox.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pink_stained_glass") {
                objPinkStainedGlass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pink_stained_glass_pane") {
                objPinkStainedGlassPane.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pink_terracotta") {
                objPinkTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pink_tulip") {
                objPinkTulip.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pink_wool") {
                objPinkWool.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:piston") {
                objPiston.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pitcher_plant") {
                objPitcherPlant.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pitcher_pod") {
                objPitcherPod.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:player_head") {
                objPlayerHead.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:plenty_pottery_sherd") {
                objPlentyPotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:podzol") {
                objPodzol.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pointed_dripstone") {
                objPointedDripstone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:poisonous_potato") {
                objPoisonousPotato.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polar_bear_spawn_egg") {
                objPolarBearSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_andesite") {
                objPolishedAndesite.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_andesite_slab") {
                objPolishedAndesiteSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_andesite_stairs") {
                objPolishedAndesiteStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_basalt") {
                objPolishedBasalt.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_blackstone") {
                objPolishedBlackstone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_blackstone_brick_slab") {
                objPolishedBlackstoneBrickSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_blackstone_brick_stairs") {
                objPolishedBlackstoneBrickStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_blackstone_brick_wall") {
                objPolishedBlackstoneBrickWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_blackstone_bricks") {
                objPolishedBlackstoneBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_blackstone_button") {
                objPolishedBlackstoneButton.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_blackstone_pressure_plate") {
                objPolishedBlackstonePressurePlate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_blackstone_slab") {
                objPolishedBlackstoneSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_blackstone_stairs") {
                objPolishedBlackstoneStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_blackstone_wall") {
                objPolishedBlackstoneWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_deepslate") {
                objPolishedDeepslate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_deepslate_slab") {
                objPolishedDeepslateSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_deepslate_stairs") {
                objPolishedDeepslateStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_deepslate_wall") {
                objPolishedDeepslateWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_diorite") {
                objPolishedDiorite.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_diorite_slab") {
                objPolishedDioriteSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_diorite_stairs") {
                objPolishedDioriteStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_granite") {
                objPolishedGranite.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_granite_slab") {
                objPolishedGraniteSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_granite_stairs") {
                objPolishedGraniteStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_tuff") {
                objPolishedTuff.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_tuff_slab") {
                objPolishedTuffSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_tuff_stairs") {
                objPolishedTuffStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:polished_tuff_wall") {
                objPolishedTuffWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:popped_chorus_fruit") {
                objPoppedChorusFruit.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:poppy") {
                objPoppy.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:porkchop") {
                objPorkchop.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:potato") {
                objPotato.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:potion") {
                objPotion.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:powder_snow_bucket") {
                objPowderSnowBucket.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:prismarine") {
                objPrismarine.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:prismarine_brick_slab") {
                objPrismarineBrickSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:prismarine_bricks") {
                objPrismarineBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:prismarine_bricks_stairs") {
                objPrismarineBricksStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:prismarine_crystals") {
                objPrismarineCrystals.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:prismarine_shard") {
                objPrismarineShard.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:prismarine_slab") {
                objPrismarineSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:prismarine_stairs") {
                objPrismarineStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:prismarine_wall") {
                objPrismarineWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:prize_pottery_sherd") {
                objPrizePotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pufferfish") {
                objPufferfish.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pufferfish_bucket") {
                objPufferfishBucket.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pufferfish_spawn_egg") {
                objPufferfishSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pumpkin") {
                objPumpkin.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pumpkin_pie") {
                objPumpkinPie.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:pumpkin_seeds") {
                objPumpkinSeeds.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:purple_bundle") {
                objPurpleBundle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:purple_candle") {
                objPurpleCandle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:purple_carpet") {
                objPurpleCarpet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:purple_concrete") {
                objPurpleConcrete.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:purple_concrete_powder") {
                objPurpleConcretePowder.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:purple_dye") {
                objPurpleDye.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:purple_glazed_terracotta") {
                objPurpleGlazedTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:purple_harness") {
                objPurpleHarness.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:purple_shulker_box") {
                objPurpleShulkerBox.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:purple_stained_glass") {
                objPurpleStainedGlass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:purple_stained_glass_pane") {
                objPurpleStainedGlassPane.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:purple_terracotta") {
                objPurpleTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:purple_wool") {
                objPurpleWool.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:purpur_block") {
                objPurpurBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:purpur_pillar") {
                objPurpurPillar.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:purpur_slab") {
                objPurpurSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:purpur_stairs") {
                objPurpurStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:quartz") {
                objQuartz.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:quartz_block") {
                objQuartzBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:quartz_bricks") {
                objQuartzBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:quartz_ore") {
                objQuartzOre.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:quartz_pillar") {
                objQuartzPillar.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:quartz_slab") {
                objQuartzSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:quartz_stairs") {
                objQuartzStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:rabbit") {
                objRabbit.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:rabbit_foot") {
                objRabbitFoot.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:rabbit_hide") {
                objRabbitHide.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:rabbit_spawn_egg") {
                objRabbitSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:rabbit_stew") {
                objRabbitStew.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:rail") {
                objRail.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:raiser_armor_trim_smithing_template") {
                objRaiserArmorTrimSmithingTemplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:ravager_spawn_egg") {
                objRavagerSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:raw_copper") {
                objRawCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:raw_copper_block") {
                objRawCopperBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:raw_gold") {
                objRawGold.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:raw_gold_block") {
                objRawGoldBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:raw_iron") {
                objRawIron.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:raw_iron_block") {
                objRawIronBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:recovery_compass") {
                objRecoveryCompass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_bundle") {
                objRedBundle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_candle") {
                objRedCandle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_carpet") {
                objRedCarpet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_concrete") {
                objRedConcrete.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_concrete_powder") {
                objRedConcretePowder.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_dye") {
                objRedDye.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_glazed_terracotta") {
                objRedGlazedTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_harness") {
                objRedHarness.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_mushroom") {
                objRedMushroom.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_mushroom_block") {
                objRedMushroomBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_nether_brick") {
                objRedNetherBrick.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_nether_brick_slab") {
                objRedNetherBrickSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_nether_brick_stairs") {
                objRedNetherBrickStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_nether_brick_wall") {
                objRedNetherBrickWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_sand") {
                objRedSand.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_sandstone") {
                objRedSandstone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_sandstone_slab") {
                objRedSandstoneSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_sandstone_stairs") {
                objRedSandstoneStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_sandstone_wall") {
                objRedSandstoneWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_shulker_box") {
                objRedShulkerBox.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_stained_glass") {
                objRedStainedGlass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_stained_glass_pane") {
                objRedStainedGlassPane.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_terracotta") {
                objRedTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_tulip") {
                objRedTulip.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:red_wool") {
                objRedWool.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:redstone") {
                objRedstone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:redstone_block") {
                objRedstoneBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:redstone_lamp") {
                objRedstoneLamp.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:redstone_ore") {
                objRedstoneOre.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:redstone_torch") {
                objRedstoneTorch.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:reinforced_deepslate") {
                objReinforcedDeepslate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:repeater") {
                objRepeater.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:repeating_command_block") {
                objRepeatingCommandBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:resin_block") {
                objResinBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:resin_brick") {
                objResinBrick.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:resin_brick_slab") {
                objResinBrickSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:resin_brick_stairs") {
                objResinBrickStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:resin_brick_wall") {
                objResinBrickWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:resin_bricks") {
                objResinBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:resin_clump") {
                objResinClump.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:respawn_anchor") {
                objRespawnAnchor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:rib_armor_trim_smithing_template") {
                objRibArmorTrimSmithingTemplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:rose_bush") {
                objRoseBush.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:rotten_flesh") {
                objRottenFlesh.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:saddle") {
                objSaddle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:salmon") {
                objSalmon.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:salmon_bucket") {
                objSalmonBucket.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:salmon_spawn_egg") {
                objSalmonSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sand") {
                objSand.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sandstone") {
                objSandstone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sandstone_slab") {
                objSandstoneSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sandstone_stairs") {
                objSandstoneStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sandstone_wall") {
                objSandstoneWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:scaffolding") {
                objScaffolding.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:scrape_pottery_sherd") {
                objScrapePotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sculk") {
                objSculk.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sculk_catalyst") {
                objSculkCatalyst.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sculk_sensor") {
                objSculkSensor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sculk_shrieker") {
                objSculkShrieker.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sculk_vein") {
                objSculkVein.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sea_lantern") {
                objSeaLantern.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sea_pickle") {
                objSeaPickle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:seagrass") {
                objSeagrass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sentry_armor_trim_smithing_template") {
                objSentryArmorTrimSmithingTemplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:shaper_armor_trim_smithing_template") {
                objShaperArmorTrimSmithingTemplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sheaf_pottery_sherd") {
                objSheafPotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:shears") {
                objShears.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sheep_spawn_egg") {
                objSheepSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:shelter_pottery_sherd") {
                objShelterPotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:shield") {
                objShield.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:short_dry_grass") {
                objShortDryGrass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:short_grass") {
                objShortGrass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:shroomlight") {
                objShroomlight.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:shulker_shell") {
                objShulkerShell.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:shulker_spawn_egg") {
                objShulkerSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:silence_armor_trim_smithing_template") {
                objSilenceArmorTrimSmithingTemplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:silver_glazed_terracotta") {
                objSilverGlazedTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:silverfish_spawn_egg") {
                objSilverfishSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:skeleton_horse_spawn_egg") {
                objSkeletonHorseSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:skeleton_skull") {
                objSkeletonSkull.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:skeleton_spawn_egg") {
                objSkeletonSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:skull_banner_pattern") {
                objSkullBannerPattern.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:skull_pottery_sherd") {
                objSkullPotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:slime") {
                objSlime.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:slime_ball") {
                objSlimeBall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:slime_spawn_egg") {
                objSlimeSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:small_amethyst_bud") {
                objSmallAmethystBud.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:small_dripleaf_block") {
                objSmallDripleafBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:smithing_table") {
                objSmithingTable.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:smoker") {
                objSmoker.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:smooth_basalt") {
                objSmoothBasalt.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:smooth_quartz") {
                objSmoothQuartz.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:smooth_quartz_slab") {
                objSmoothQuartzSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:smooth_quartz_stairs") {
                objSmoothQuartzStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:smooth_red_sandstone") {
                objSmoothRedSandstone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:smooth_red_sandstone_slab") {
                objSmoothRedSandstoneSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:smooth_red_sandstone_stairs") {
                objSmoothRedSandstoneStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:smooth_sandstone") {
                objSmoothSandstone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:smooth_sandstone_slab") {
                objSmoothSandstoneSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:smooth_sandstone_stairs") {
                objSmoothSandstoneStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:smooth_stone") {
                objSmoothStone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:smooth_stone_slab") {
                objSmoothStoneSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sniffer_egg") {
                objSnifferEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sniffer_spawn_egg") {
                objSnifferSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:snort_pottery_sherd") {
                objSnortPotterySherd.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:snout_armor_trim_smithing_template") {
                objSnoutArmorTrimSmithingTemplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:snow") {
                objSnow.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:snow_golem_spawn_egg") {
                objSnowGolemSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:snow_layer") {
                objSnowLayer.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:snowball") {
                objSnowball.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:soul_campfire") {
                objSoulCampfire.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:soul_lantern") {
                objSoulLantern.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:soul_sand") {
                objSoulSand.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:soul_soil") {
                objSoulSoil.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:soul_torch") {
                objSoulTorch.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spider_eye") {
                objSpiderEye.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spider_spawn_egg") {
                objSpiderSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spire_armor_trim_smithing_template") {
                objSpireArmorTrimSmithingTemplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:splash_potion") {
                objSplashPotion.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sponge") {
                objSponge.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spore_blossom") {
                objSporeBlossom.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spruce_boat") {
                objSpruceBoat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spruce_button") {
                objSpruceButton.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spruce_chest_boat") {
                objSpruceChestBoat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spruce_door") {
                objSpruceDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spruce_fence") {
                objSpruceFence.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spruce_fence_gate") {
                objSpruceFenceGate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spruce_hanging_sign") {
                objSpruceHangingSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spruce_leaves") {
                objSpruceLeaves.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spruce_log") {
                objSpruceLog.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spruce_planks") {
                objSprucePlanks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spruce_pressure_plate") {
                objSprucePressurePlate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spruce_sapling") {
                objSpruceSapling.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spruce_sign") {
                objSpruceSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spruce_slab") {
                objSpruceSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spruce_stairs") {
                objSpruceStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spruce_trapdoor") {
                objSpruceTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spruce_wood") {
                objSpruceWood.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:spyglass") {
                objSpyglass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:squid_spawn_egg") {
                objSquidSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stick") {
                objStick.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sticky_piston") {
                objStickyPiston.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stone") {
                objStone.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stone_axe") {
                objStoneAxe.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stone_brick_slab") {
                objStoneBrickSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stone_brick_stairs") {
                objStoneBrickStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stone_brick_wall") {
                objStoneBrickWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stone_bricks") {
                objStoneBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stone_button") {
                objStoneButton.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stone_hoe") {
                objStoneHoe.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stone_pickaxe") {
                objStonePickaxe.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stone_pressure_plate") {
                objStonePressurePlate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stone_shovel") {
                objStoneShovel.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stone_stairs") {
                objStoneStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stone_sword") {
                objStoneSword.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stonecutter_block") {
                objStonecutterBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stray_spawn_egg") {
                objStraySpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:strider_spawn_egg") {
                objStriderSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:string") {
                objString.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_acacia_log") {
                objStrippedAcaciaLog.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_acacia_wood") {
                objStrippedAcaciaWood.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_bamboo_block") {
                objStrippedBambooBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_birch_log") {
                objStrippedBirchLog.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_birch_wood") {
                objStrippedBirchWood.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_cherry_log") {
                objStrippedCherryLog.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_cherry_wood") {
                objStrippedCherryWood.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_crimson_hyphae") {
                objStrippedCrimsonHyphae.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_crimson_stem") {
                objStrippedCrimsonStem.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_dark_oak_log") {
                objStrippedDarkOakLog.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_dark_oak_wood") {
                objStrippedDarkOakWood.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_jungle_log") {
                objStrippedJungleLog.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_jungle_wood") {
                objStrippedJungleWood.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_mangrove_log") {
                objStrippedMangroveLog.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_mangrove_wood") {
                objStrippedMangroveWood.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_oak_log") {
                objStrippedOakLog.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_oak_wood") {
                objStrippedOakWood.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_pale_oak_log") {
                objStrippedPaleOakLog.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_pale_oak_wood") {
                objStrippedPaleOakWood.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_spruce_log") {
                objStrippedSpruceLog.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_spruce_wood") {
                objStrippedSpruceWood.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_warped_hyphae") {
                objStrippedWarpedHyphae.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:stripped_warped_stem") {
                objStrippedWarpedStem.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:structure_block") {
                objStructureBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:structure_void") {
                objStructureVoid.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sugar") {
                objSugar.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sugar_cane") {
                objSugarCane.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sunflower") {
                objSunflower.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:suspicious_gravel") {
                objSuspiciousGravel.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:suspicious_sand") {
                objSuspiciousSand.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:suspicious_stew") {
                objSuspiciousStew.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:sweet_berries") {
                objSweetBerries.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tadpole_bucket") {
                objTadpoleBucket.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tadpole_spawn_egg") {
                objTadpoleSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tall_dry_grass") {
                objTallDryGrass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tall_grass") {
                objTallGrass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:target") {
                objTarget.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tide_armor_trim_smithing_template") {
                objTideArmorTrimSmithingTemplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tinted_glass") {
                objTintedGlass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tnt") {
                objTnt.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tnt_minecart") {
                objTntMinecart.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:torch") {
                objTorch.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:torchflower") {
                objTorchflower.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:torchflower_seeds") {
                objTorchflowerSeeds.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:totem_of_undying") {
                objTotemOfUndying.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:trader_llama_spawn_egg") {
                objTraderLlamaSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:trapdoor") {
                objTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:trapped_chest") {
                objTrappedChest.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:trial_key") {
                objTrialKey.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:trial_spawner") {
                objTrialSpawner.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:trident") {
                objTrident.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tripwire_hook") {
                objTripwireHook.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tropical_fish") {
                objTropicalFish.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tropical_fish_bucket") {
                objTropicalFishBucket.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tropical_fish_spawn_egg") {
                objTropicalFishSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tube_coral") {
                objTubeCoral.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tube_coral_block") {
                objTubeCoralBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tube_coral_fan") {
                objTubeCoralFan.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tuff") {
                objTuff.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tuff_brick_slab") {
                objTuffBrickSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tuff_brick_stairs") {
                objTuffBrickStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tuff_brick_wall") {
                objTuffBrickWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tuff_bricks") {
                objTuffBricks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tuff_slab") {
                objTuffSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tuff_stairs") {
                objTuffStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:tuff_wall") {
                objTuffWall.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:turtle_egg") {
                objTurtleEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:turtle_helmet") {
                objTurtleHelmet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:turtle_scute") {
                objTurtleScute.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:turtle_spawn_egg") {
                objTurtleSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:twisting_vines") {
                objTwistingVines.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:undyed_shulker_box") {
                objUndyedShulkerBox.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:vault") {
                objVault.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:verdant_froglight") {
                objVerdantFroglight.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:vex_armor_trim_smithing_template") {
                objVexArmorTrimSmithingTemplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:vex_spawn_egg") {
                objVexSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:villager_spawn_egg") {
                objVillagerSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:vindicator_spawn_egg") {
                objVindicatorSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:vine") {
                objVine.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wandering_trader_spawn_egg") {
                objWanderingTraderSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:ward_armor_trim_smithing_template") {
                objWardArmorTrimSmithingTemplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:warden_spawn_egg") {
                objWardenSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:warped_button") {
                objWarpedButton.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:warped_door") {
                objWarpedDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:warped_fence") {
                objWarpedFence.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:warped_fence_gate") {
                objWarpedFenceGate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:warped_fungus") {
                objWarpedFungus.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:warped_fungus_on_a_stick") {
                objWarpedFungusOnAStick.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:warped_hanging_sign") {
                objWarpedHangingSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:warped_hyphae") {
                objWarpedHyphae.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:warped_nylium") {
                objWarpedNylium.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:warped_planks") {
                objWarpedPlanks.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:warped_pressure_plate") {
                objWarpedPressurePlate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:warped_roots") {
                objWarpedRoots.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:warped_sign") {
                objWarpedSign.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:warped_slab") {
                objWarpedSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:warped_stairs") {
                objWarpedStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:warped_stem") {
                objWarpedStem.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:warped_trapdoor") {
                objWarpedTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:warped_wart_block") {
                objWarpedWartBlock.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:water_bucket") {
                objWaterBucket.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waterlily") {
                objWaterlily.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_chiseled_copper") {
                objWaxedChiseledCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_copper") {
                objWaxedCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_copper_bulb") {
                objWaxedCopperBulb.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_copper_door") {
                objWaxedCopperDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_copper_grate") {
                objWaxedCopperGrate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_copper_trapdoor") {
                objWaxedCopperTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_cut_copper") {
                objWaxedCutCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_cut_copper_slab") {
                objWaxedCutCopperSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_cut_copper_stairs") {
                objWaxedCutCopperStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_exposed_chiseled_copper") {
                objWaxedExposedChiseledCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_exposed_copper") {
                objWaxedExposedCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_exposed_copper_bulb") {
                objWaxedExposedCopperBulb.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_exposed_copper_door") {
                objWaxedExposedCopperDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_exposed_copper_grate") {
                objWaxedExposedCopperGrate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_exposed_copper_trapdoor") {
                objWaxedExposedCopperTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_exposed_cut_copper") {
                objWaxedExposedCutCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_exposed_cut_copper_slab") {
                objWaxedExposedCutCopperSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_exposed_cut_copper_stairs") {
                objWaxedExposedCutCopperStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_oxidized_chiseled_copper") {
                objWaxedOxidizedChiseledCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_oxidized_copper") {
                objWaxedOxidizedCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_oxidized_copper_bulb") {
                objWaxedOxidizedCopperBulb.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_oxidized_copper_door") {
                objWaxedOxidizedCopperDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_oxidized_copper_grate") {
                objWaxedOxidizedCopperGrate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_oxidized_copper_trapdoor") {
                objWaxedOxidizedCopperTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_oxidized_cut_copper") {
                objWaxedOxidizedCutCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_oxidized_cut_copper_slab") {
                objWaxedOxidizedCutCopperSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_oxidized_cut_copper_stairs") {
                objWaxedOxidizedCutCopperStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_weathered_chiseled_copper") {
                objWaxedWeatheredChiseledCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_weathered_copper") {
                objWaxedWeatheredCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_weathered_copper_bulb") {
                objWaxedWeatheredCopperBulb.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_weathered_copper_door") {
                objWaxedWeatheredCopperDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_weathered_copper_grate") {
                objWaxedWeatheredCopperGrate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_weathered_copper_trapdoor") {
                objWaxedWeatheredCopperTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_weathered_cut_copper") {
                objWaxedWeatheredCutCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_weathered_cut_copper_slab") {
                objWaxedWeatheredCutCopperSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:waxed_weathered_cut_copper_stairs") {
                objWaxedWeatheredCutCopperStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wayfinder_armor_trim_smithing_template") {
                objWayfinderArmorTrimSmithingTemplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:weathered_chiseled_copper") {
                objWeatheredChiseledCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:weathered_copper") {
                objWeatheredCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:weathered_copper_bulb") {
                objWeatheredCopperBulb.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:weathered_copper_door") {
                objWeatheredCopperDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:weathered_copper_grate") {
                objWeatheredCopperGrate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:weathered_copper_trapdoor") {
                objWeatheredCopperTrapdoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:weathered_cut_copper") {
                objWeatheredCutCopper.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:weathered_cut_copper_slab") {
                objWeatheredCutCopperSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:weathered_cut_copper_stairs") {
                objWeatheredCutCopperStairs.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:web") {
                objWeb.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:weeping_vines") {
                objWeepingVines.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wet_sponge") {
                objWetSponge.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wheat") {
                objWheat.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wheat_seeds") {
                objWheatSeeds.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:white_bundle") {
                objWhiteBundle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:white_candle") {
                objWhiteCandle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:white_carpet") {
                objWhiteCarpet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:white_concrete") {
                objWhiteConcrete.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:white_concrete_powder") {
                objWhiteConcretePowder.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:white_dye") {
                objWhiteDye.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:white_glazed_terracotta") {
                objWhiteGlazedTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:white_harness") {
                objWhiteHarness.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:white_shulker_box") {
                objWhiteShulkerBox.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:white_stained_glass") {
                objWhiteStainedGlass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:white_stained_glass_pane") {
                objWhiteStainedGlassPane.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:white_terracotta") {
                objWhiteTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:white_tulip") {
                objWhiteTulip.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:white_wool") {
                objWhiteWool.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wild_armor_trim_smithing_template") {
                objWildArmorTrimSmithingTemplate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wildflowers") {
                objWildflowers.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wind_charge") {
                objWindCharge.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:witch_spawn_egg") {
                objWitchSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wither_rose") {
                objWitherRose.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wither_skeleton_skull") {
                objWitherSkeletonSkull.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wither_skeleton_spawn_egg") {
                objWitherSkeletonSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wither_spawn_egg") {
                objWitherSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wolf_armor") {
                objWolfArmor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wolf_spawn_egg") {
                objWolfSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wooden_axe") {
                objWoodenAxe.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wooden_button") {
                objWoodenButton.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wooden_door") {
                objWoodenDoor.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wooden_hoe") {
                objWoodenHoe.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wooden_pickaxe") {
                objWoodenPickaxe.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wooden_pressure_plate") {
                objWoodenPressurePlate.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wooden_shovel") {
                objWoodenShovel.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wooden_slab") {
                objWoodenSlab.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:wooden_sword") {
                objWoodenSword.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:writable_book") {
                objWritableBook.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:yellow_bundle") {
                objYellowBundle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:yellow_candle") {
                objYellowCandle.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:yellow_carpet") {
                objYellowCarpet.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:yellow_concrete") {
                objYellowConcrete.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:yellow_concrete_powder") {
                objYellowConcretePowder.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:yellow_dye") {
                objYellowDye.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:yellow_glazed_terracotta") {
                objYellowGlazedTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:yellow_harness") {
                objYellowHarness.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:yellow_shulker_box") {
                objYellowShulkerBox.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:yellow_stained_glass") {
                objYellowStainedGlass.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:yellow_stained_glass_pane") {
                objYellowStainedGlassPane.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:yellow_terracotta") {
                objYellowTerracotta.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:yellow_wool") {
                objYellowWool.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:zoglin_spawn_egg") {
                objZoglinSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:zombie_head") {
                objZombieHead.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:zombie_horse_spawn_egg") {
                objZombieHorseSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:zombie_pigman_spawn_egg") {
                objZombiePigmanSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:zombie_spawn_egg") {
                objZombieSpawnEgg.addScore(player, item.amount);
            }
            if (item && item.typeId === "minecraft:zombie_villager_spawn_egg") {
                objZombieVillagerSpawnEgg.addScore(player, item.amount);
            }
        }
    }
}, 1);
