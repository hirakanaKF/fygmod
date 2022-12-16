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
    for (const a of A) { a.pBpDmgL[0x7FF300CEn] = a.pBpDmgR[0x7FF300CEn] = p; }
};

// SHANG: -75 Health Recover -> -256 Health Recover
ArenaEffect.Aura[301] = (_, A) => {
    const n = A.size, r0 = gNumberCast(n * 256 * _.mDpr), r1 = gNumberCast((n - 1) * 256 * _.mDpr);
    for (const b of _.AO) { b.mHpRecRat -= A.has(b) ? r1 : r0; }
};

// SHEN: -75 Shield Recover -> -256 Shield Recover
ArenaEffect.Aura[302] = (_, A) => {
    const n = A.size, r0 = gNumberCast(n * 256 * _.mDpr), r1 = gNumberCast((n - 1) * 256 * _.mDpr);
    for (const b of _.AO) { b.mSdRecRat -= A.has(b) ? r1 : r0; }
}

// RE: Increase 6 points of speed ratio instead of 9 after battling.
ArenaEffect.Aura[305] = (_, A) => {
    const p = (a) => { a.SpdRat.inc(6); };
    for (const a of A) { a.pCpSetL[0x030131n] = p; }
}

// ZHI : Halves effect of defense multiplier.
ArenaEffect.Aura[308] = (_, A) => {
    const p = (a, b) => {
        a.hpr = Math.sqrt(a.hpr); a.hmr = Math.sqrt(a.hmr);
        a.spr = Math.sqrt(a.spr); a.smr = Math.sqrt(a.smr);
    };
    for (const a of A) { a.pBpDmgL[0x7FF30134n] = a.pBpDmgR[0x7FF30134n] = p; }
};

// HONG : Calculates damage using the higher multiplier.
ArenaEffect.Aura[404] = (_, A) => {
    const p = (a, b) => {
        if (b.hpr > b.hmr) { b.hmr = b.hpr; }
        b.hpr = b.hmr;
        if (b.spr > b.smr) { b.smr = b.spr; }
        b.spr = b.smr;
    };
    for (const a of A) { a.pBpDmgL[0x7FF30194n] = a.pBpDmgR[0x7FF30194n] = p; }
};

// JUE: 0.75x damage taken from physical / magical damage, 0.5x damage taken from absolute damage.
ArenaEffect.Aura[405] = (_, A) => {
    const p = (a, b) => {
        b.pp = gNumberCast(b.pp * 0.75);
        b.pm = gNumberCast(b.pm * 0.75);
        b.pa = gNumberCast(b.pa * 0.5);
    };
    for (const a of A) { a.pBpDmgL[0x7FF30195n] = a.pBpDmgR[0x7FF30195n] = p; }
};

// DUNH: Calculates the multiplier using `1 + tanh()` instead of `exp()`.
//  Let y = e^x
//  Then 1 + tanh(x) = 1 + (e^x - e^-x) / (e^x + e^-x) = 2e^2x / (e^2x + 1) = y^2 / (0.5y^2 + 0.5)
ArenaEffect.Aura[407] = (_, A) => {
    const 
        f = (x) => (x = x * x) && x / (0.5 * x + 0.5),
        p = (a, b) => {
            a.hpr = f(a.hpr); a.hmr = f(a.hmr);
            a.spr = f(a.spr); a.smr = f(a.smr);
        }
    ;
    for (const a of A) { a.pBpDmgL[0x7FF30197n] = a.pBpDmgR[0x7FF30197n] = p; }
};

// SHIELD: -40 Recover -> -128 Recover
ArenaEffect.Myst[2108] = (_, A) => {
    const n = A.size, 
        r0 = gNumberCast(n * 128 * _.mDpr),
        r1 = gNumberCast((n - 1) * 128 * _.mDpr)
    ;
    for (const b of _.AO) {
        if (A.has(b)) { b.mHpRecRat -= r1; b.mSdRecRat -= r1; continue; }
        b.mHpRecRat -= r0; b.mSdRecRat -= r0;
    }
};

// Custom defend ratio formula
{
    const BP = BattleObject.prototype;

    // Custom defend formula
    BP.cpDmg = function (that) {
        let hpr, hmr;

        this.hpr = hpr = (that.afp + 65536 * gEffectAmul(-this.brp)) / (this.bfp + 65536 * gEffectAmul(-this.arp)) || 0;
        this.hmr = hmr = (that.afm + 65536 * gEffectAmul(-this.brm)) / (this.bfm + 65536 * gEffectAmul(-this.arm)) || 0;
        this.spr = Math.sqrt(hpr);
        this.smr = Math.sqrt(hmr);
    };
}

