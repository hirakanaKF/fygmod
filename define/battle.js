// -------------------------------------------------------------------------------------------------------------------------------------------------------
// From here we show how to customize the BattleObject class.
// When assigning function to prototype of class, use function instead of arrow functions to get rid of promblems of "this" operator.
// See details here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
//
// Please feel free to change anything you want here.
//

// Custom effects

// SHENG: Dobules effect of defense multiplier for shield.
ArenaEffect.Aura[206] = (_, A) => {
    const p = (a, b) => {
        a.spr = a.spr * a.spr; a.smr = a.smr * a.smr;
    };
    for (const a of A) { a.pBpPowL[0x10000] = a.pBpPowR[0x10000] = p; }
};

// ZHI : Halves effect of defense multiplier.
ArenaEffect.Aura[308] = (_, A) => {
    const p = (a, b) => {
        a.hpr = Math.sqrt(a.hpr); a.hmr = Math.sqrt(a.hmr);
        a.spr = Math.sqrt(a.spr); a.smr = Math.sqrt(a.smr);
    };
    for (const a of A) { a.pBpPowL[0x10001] = a.pBpPowR[0x10001] = p; }
};

// HONG : Calculates damage using the higher multiplier.
ArenaEffect.Aura[404] = (_, A) => {
    const p = (a, b) => {
        if (b.hpr > b.hmr) { b.hmr = b.hpr; }
        b.hpr = b.hmr;
        if (b.spr > b.smr) { b.smr = b.spr; }
        b.spr = b.smr;
    };
    for (const a of A) { a.pBpDmgL[0x10002] = a.pBpDmgR[0x10002] = p; }
};

// DUNH: Calculates the multiplier using `1 + tanh()` instead of `exp()`.
ArenaEffect.Aura[407] = (_, A) => {
    const p = (a, b) => {
        a.hpr = 1 + Math.tanh(Math.log(a.hpr)) || 0;
        a.hmr = 1 + Math.tanh(Math.log(a.hmr)) || 0;
        a.spr = 1 + Math.tanh(Math.log(a.spr)) || 0;
        a.smr = 1 + Math.tanh(Math.log(a.smr)) || 0;
    };
    for (const a of A) { a.pBpDmgL[0x10003] = a.pBpDmgR[0x10003] = p; }
};


// Custom defend ratio formula
{
    const BP = BattleObject.prototype;

    // Custom defend formula
    BP.defendImpl = function (that) {
        let hpr, hmr;

        this.hpr = hpr = (that.afp + 65536 * gEffectAmul(-this.brp)) / (this.bfp + 65536 * gEffectAmul(-this.arp));
        this.hmr = hmr = (that.afm + 65536 * gEffectAmul(-this.brm)) / (this.bfm + 65536 * gEffectAmul(-this.arm));
        this.spr = Math.sqrt(hpr);
        this.smr = Math.sqrt(hmr);
    };
}

