# Introductions #

This project is an simple mod to __[fygemu](https://github.com/hirakanaKF/fygemu)__.

Please clone this project with `--recurse-submodules`.

__[Live demo is here](https://hirakanakf.github.io/fygmod/)__; you may need to clear browser caches to see the latest commits.

# Explanation of Changes #

Changes of `config/emu.json.js`:
 * `UseNumbers`: 0 -> 1
   * Enables calcuation without Math.floor.
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
 * `EffectBase`: 0.0 -> 0.006931471805599453 ( = log(2) / 100 )
   * Enables ratio transforms:
     * Healing, Leeching, Reflection: `x * 0.01` -> `1 - exp(-x * EffectBase)`
     * Others : `x * 0.01` -> `exp(x * EffectBase)`
   * For more details, please see `define/config.js`.
 * `DefendBase`: 0.0 -> 0.0001692253858788929 ( = log(2) / 4096 )
   * Enables custom defense mechanism:
     * Defense damage multiplier is now `exp((attack base - defense base) * Rules::DefendBase + tanh(attack ratio - defense ratio))`
   * Serveral effect of skill changes to fit the custom formula:
     * CI: +15 defense ratio.
     * BI: +20 physical attack ratio.
     * MO: +20 magical attack ratio.
     * SHENG: Reduce result by 0.125 before the `exp()`.
     * ZHI: Halves `tanh(attack ratio - defense ratio)`.
     * DIAN: +50 defense ratio.
     * HONG: Calculates damage using the higher multiplier.
     * DUNH: Calculates the multiplier using `tanh()` instead of `exp()`.
     * WU: +20 defense ratio.
     * MING: -100 defense ratio.
   * For more details, please see `define/battle.js`.
 * Monster changes to fit the new formula.
 * Equipment attribute changes.
   * Additional stats from equipments now scales with charater's level.

Changes of `config/usr.json.js`:
 * `RawUnit`: 0 -> 1
   * Enables raw unit status importing / exporting for debug.
   * Hold ctrl to correct unit status automatically on import / export.
