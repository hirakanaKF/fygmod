# Introductions #

This project is an simple mod to __[fygemu](https://github.com/hirakanaKF/fygemu)__.

Please clone this project with `git clone --recurse-submodules`.

Update submodule using `git submodule update --remote`. 

__[Live demo can be found here](https://hirakanakf.github.io/fygmod/)__; you may need to clear browser caches to see the latest commits.

# Explanation of Changes #

Changes of `config/emu.json.js`:
* `Rule` changes:
  * `UseNumbers`: 0 -> 1
    * Disables integer cast simulation globally.
  * `NoOverkill`: 0 -> 1
    * Disables leeching from corpses, mainly for the rumble mode.
    * This also prevents leech under the health / shield lock.
  * `BattleMode`: 0 -> 1
    * Default game mode to the rumble mode.
    * You can still run 1 vs 1 mode by holding the ctrl key.
  * `VerboseAll`: 0 -> 1
    * Shows status of each fighter every turns.
  * `ScaleFactor`: 1.0 -> 0.25
    * This is the global damage, healing, resistant scale factor.
  * `EffectBase`: 0.0 -> 2.7076061740622863e-3 ( ≈ log(2) / 256 )
    * Enables ratio transforms:
      * Healing, Leeching, Reflection: `x * 0.01` -> `1 - exp(-x * EffectBase)`
      * Others : `x * 0.01` -> `exp(x * EffectBase)`
    * For more details, please see `define/config.js`.
  * `DefendBase`: 0.0 -> 65536.0
    * Enables custom defense mechanism:
      * Defense damage multiplier is now `exp(log(2) * (log(attack base + Rules::DefendBase) - log(defense base + Rules::DefendBase)) + (attack ratio) / (100 + 2 * |attack ratio|) - (defense ratio) / (100 + 2 * |defense ratio|)))`
    * Serveral effect of skill changes to fit the custom formula:
      * Auras:
        * CI: +10 defense ratio.
        * BI: +15 physical attack ratio.
        * MO: +15 magical attack ratio.
        * SHENG: Reduce result by 0.125 before taking `exp()`.
        * ZHI: Halves the result in the formula before taking `exp()`.
        * DIAN: +100 defense ratio.
        * HONG: Calculates damage using the higher multiplier.
        * JUE: 0.75x damage taken from physical / magical damage, 0.5x damage taken from absolute damage.
        * DUNH: Calculates the multiplier using `1 + tanh()` instead of `exp()`.
      * Personal skills:
        * WU: +30 defense ratio.
        * MING: -200 defense ratio.
    * For more details, please see `define/battle.js`.
  * `SklAdd` : 99 -> 1024
  * `CrtAdd` : 99 -> 1024
  * `SklOffset` : 0.3 -> 0.5
  * `CrtOffset` : 0.3 -> 0.5
 * `BaseStat` changes:
   * STR: __+12__ Physical Power, __+12__ Physical Attack, __+3 Skill Trigger__, __+3 Critical Hit__ 
   * AGI: __+6__ Speed, __+6 Critical Attack__, __+12__ Critical Hit, __+3 Critical Dodge__
   * INT: +12 Magical Power, __+12__ Magical Attack, __+12__ Skill Trigger, __+3 Skill Evade__ 
   * VIT: __+128__ Base Health, __+12__ Physical Defense, __+1 Physical Resistance__,  __+12 Critical Dodge__
   * SPR: __+160__ Base Shield, __+6__ Physical Defense, __+6__ Magical Defense, __+1 Physical Resistance__, __+1 Magical Resistance__
   * MND: __+128__ Base Health, __+12__ Magical Defense, __+1 Magical Resistance__, __+12 Skill Evade__
 * `Actors` changes:
   * Monster stats changes to fit the new formula.
 * `Equips` changes:
   * Attribute changes to fit the new formula and changes of `EquipStats`.
 * `EquipStats` changes:
   * Additional stats provided by equipments are now scales with charater's level.

Changes of `config/usr.json.js`:
 * `ActorMap` / `EquipMap`:
   * In this demo, we show you how to customize asset path.
   * This demo use custom assets, which were processed from __[game-icons.net](https://game-icons.net/)__.
     * Please refers to `demo/game-icons/license.txt` for their license and further information.
     * Many thanks to all artists who published their creations on __game-icons.net__.
 * `RawUnit`: 0 -> 1
   * Enables raw unit status import / export for debugging.
   * Hold ctrl to correct unit status automatically on import / export.

