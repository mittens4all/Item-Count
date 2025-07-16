# Item Count

This behavior pack detects item amounts in a player's inventory and assigns to a scoreboard objective. You can use the scores target selector argument in your own commands.

## Installing the pack:

You may dowload the latest release from the [Releases Page](https://github.com/mittens4all/Item-Count/releases)

Add the Item Count add-on to your behavior packs on your world. Behavior packs may disable achievements, but editing the world with an NBT editor can re-enable achievements when uploading your world to a realm.

Re-enable achievements on either pc or mobile with the free NBT editor [Dovetail](https://github.com/Offroaders123/Dovetail)

## How to Use

Scoreboard objectives follow the format of `namespace:identifier`.

You can target players using the scores selector argument in your commands:

```yaml
# Target players who have 64 enchanted golden apples
execute as @a[scores={inv:enchanted_golden_apple=64}] run <command>
```

**Known Limitations**

When a player places items from their inventory into the 2x2 crafting grid or the 3x3 crafting table grid, the script will no longer detect the items in the player inventory. It does, however, detect items in PC players' cursor.

## Authors

- [@mittens4all](https://www.github.com/mittens4all)
- [@jeanmajid](https://github.com/jeanmajid)
- [@thejonathanlongly](https://discord.gg/SYstTYx5G5) in Bedrock Commands Community Discord


```js
       _                              _     _       _ _  
      (_)  _     _                   | |   | |     | | | 
 ____  _ _| |_ _| |_ _____ ____   ___| |___| |_____| | | 
|    \| (_   _|_   _) ___ |  _ \ /___)_____  (____ | | | 
| | | | | | |_  | |_| ____| | | |___ |     | / ___ | | | 
|_|_|_|_|  \__)  \__)_____)_| |_(___/      |_\_____|\_)_)
                                                         
```