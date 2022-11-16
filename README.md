# Introductions #

This project is an simple mod to __[fygemu](https://github.com/hirakanaKF/fygemu)__.

Please clone this project with `git clone --recurse-submodules`.

Update submodule using `git submodule update --remote`. 

__[Live demo can be found here](https://hirakanakf.github.io/fygmod/)__; you may need to clear browser caches to see the latest commits.

# Explanation of Changes #

Changes of `config/emu.json.js`:
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
 * `EffectBase`: 0.0 -> 0.006931471805599453 ( ≈ log(2) / 100 )
   * Enables ratio transforms:
     * Healing, Leeching, Reflection: `x * 0.01` -> `1 - exp(-x * EffectBase)`
     * Others : `x * 0.01` -> `exp(x * EffectBase)`
   * For more details, please see `define/config.js`.
 * `DefendBase`: 0.0 -> 0.0001692253858788929 ( ≈ log(2) / 4096 )
   * Enables custom defense mechanism:
     * Defense damage multiplier is now `exp((attack base - defense base) * Rules::DefendBase + attack ratio - defense ratio / (1 + 2 * |attack ratio - defense ratio|) * log(2))`
   * Serveral effect of skill changes to fit the custom formula:
     * Auras:
      * CI: +15 defense ratio.
      * BI: +20 physical attack ratio.
      * MO: +20 magical attack ratio.
      * SHENG: Reduce result by 0.125 before taking `exp()`.
      * ZHI: Halves the result in the formula before taking `exp()`.
      * DIAN: +50 defense ratio.
      * HONG: Calculates damage using the higher multiplier.
      * JUE: 0.75x damage taken from physical / magical damage, 0.5x damage taken from absolute damage.
      * DUNH: Calculates the multiplier using `1 + tanh()` instead of `exp()`.
     * Personal skills:
      * WU: +20 defense ratio.
      * MING: -100 defense ratio.
   * For more details, please see `define/battle.js`.
 * `BaseStat` changes:
   * STR: +10 Physical Power, __+3__ Physical Attack, __+1 Skill Activation__, __+0.5 Skill Evade__ 
   * AGI: +3 Speed, __+2 Critical Attack__, +1 Critical Trigger, __+0.5 Critical Dodge__
   * INT: +12 Magical Power, __+3__ Magical Attack, __+1__ Skill Activation, __+0.5 Skill Evade__ 
   * VIT: __+64__ Base Health, __+3__ Physical Defense, __+0.5 Critical Dodge__
   * SPR: __+128__ Base Shield, __+2__ Physical Defense, __+2__ Magical Defense
   * MND: __+64__ Base Health, __+3__ Magical Defense, __+0.5 Skill Evade__
 * `Actors` changes:
   * Monster stats changes to fit the new formula.
 * `Equips` changes:
   * Attribute changes to fit the new formula and changes of `EquipStats`.
 * `EquipStats` changes:
   * Additional stats provided by equipments are now scales with charater's level.

Changes of `config/usr.json.js`:
 * `RawUnit`: 0 -> 1
   * Enables raw unit status importing / exporting for debug.
   * Hold ctrl to correct unit status automatically on import / export.
