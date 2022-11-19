// -------------------------------------------------------------------------------------------------------------------------------------------------------
// From here we show how to add / modify the BattleObject class.
// When assigning function to prototype of class, use function instead of arrow functions to get rid of promblems of "this" operator.
// See details here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
//
// Please feel free to change anything you want here.

// If gDefendBase is not zero or NaN, we use soft defend ratio formula.
// The new formula:
//    exp(log(2) * (log(attack + Rules::DefendBase) - log(defense + Rules::DefendBase) + (attack ratio) / (100 + 2 * |attack ratio|) - (defense ratio) / (100 + 2 * |defense ratio|))
// Note : We took Rules::EffectBase = log(2) / 256 and Rules::DefendBase = 65536.

{
    const gDefendBase = 65536;
    const BP = BattleObject.prototype, tanhp1 = (x) => 1 + Math.tanh(x);

    BP.setup = function (these, those) {
        const
            cflags = this.mFlags, pve = this.mIsPVE,
            An = these.length, En = those.length,
            A = new Array(An), E = new Array(En)
        ;

        this.A = A; this.E = E;
        this.mColRat = gRules.ScaleFactor * (An + 1) / (An + An || 1);

        // Effects by Self
        this.mAtkFixP = this.mAtkMulP + this.mAtkAddP;
        this.mAtkFixM = this.mAtkMulM + this.mAtkAddM;
        this.mAtkFixC = this.mAtkMulC + this.mAtkAddC;
        this.mDefFixP = this.mDefMulP + this.mDefAddP;
        this.mDefFixM = this.mDefMulM + this.mDefAddM;

        // XUE
        if (cflags.has(204)) { this.mHpHealRat += 10; this.mSdHealRat += 10; this.mLchRat += 10; }

        // CLOAK
        if (cflags.has(2304)) { this.mSdRat += 50; }

        // THORN
        if (cflags.has(2305)) { this.mRflRat += 30; }

        // CI (Changes: +10 defense ratio)
        if (cflags.has(303)) { this.mDefRatP += 10; this.mDefRatM += 10; this.mRflRat += 20; }

        // WU (Changes: +30 defense ratio)
        if (cflags.has(3000)) {
            this.mDefRatP += 30; this.mDefRatM += 30;
            this.mHpRat += 30; this.mSdRat += 30;
            this.mPowRatP += 30; this.mPowRatM += 30; this.mSpdRat += 30;
        }

        // MO
        if (cflags.has(3001)) {
            this.mSdFix += gNumberCast(this.mPowMulM * 1.8);
            this.mSdRat += 35;
        }

        // LIN
        if (cflags.has(3002)) { this.mHpRat += 30; }

        // AI
        if (cflags.has(3003)) { this.mLchRat += 15; }

        // MENG (TIARA)
        if (cflags.has(3004)) { this.mSdRat += cflags.has(2402) ? 45 : 30; }

        // WEI
        if (cflags.has(3005)) { this.mSklRat += 10; }

        // MING
        if (cflags.has(3007)) { this.mHpRat += 90; }

        // XI
        if (cflags.has(3009)) {
            this.mHpRat += 10;
            this.mHpFix += this.mGrowth;
        }
        
        // DUN
        if (cflags.has(203)) { this.mDmgPSdRat = 1.25; }

        // JUE
        if (cflags.has(405)) { this.mDmgPRat = 0.75; this.mDmgMRat = 0.75; this.mDmgARat = 0.5; }

        const cSkl = this.mSklMul + this.mSklAdd, cCrt = this.mCrtMul + this.mCrtAdd;

        // Effects by Allies
        for (const i in these) {
            const that = these[i], stat = {};

            A[i] = stat;
            stat.unit = that;
        }

        // Effect by Enemies
        let mhr = 0, msr = 0, mbp = 0, mbm = 0, mpp = 0, mpm = 0, mdp = 0, mdm = 0, msp = 0, 
            thr = 0, tsr = 0, tbp = 0, tbm = 0, tpp = 0, tpm = 0, tdp = 0, tdm = 0, tsp = 0;

        for (const i in those) {
            const that = those[i], tflags = that.mFlags, stat = {};
            let hr = 0, sr = 0, bp = 0, bm = 0, pp = 0, pm = 0, dp = 0, dm = 0, sp = 0, mSkl = cSkl, mCrt = cCrt;

            E[i] = stat;
            stat.unit = that;
            
            // Skill / Critical offset
            mSkl -= gNumberCast((mSkl + that.mEvaMul + that.mEvaAdd) * gRules.SklOffset),
            mCrt -= gNumberCast((mCrt + that.mDodMul + that.mDodAdd) * gRules.CrtOffset);
            mSkl = Math.max(mSkl || 0, 0);
            mCrt = Math.max(mCrt || 0, 0);
            stat.mSklRat = gNumberCast(100 * mSkl / (mSkl + gRules.SklAdd));
            stat.mCrtRat = gNumberCast(100 * mCrt / (mCrt + gRules.CrtAdd));
            
            // SHANG
            if (tflags.has(301)) { hr += 75; }

            // SHEN
            if (tflags.has(302)) { sr += 75; }

            // SHIELD
            if (tflags.has(2108)) { hr += 40; sr += 40; }

            // Level different based

            // TIAO
            if (cflags.has(104)) {
                let t = Math.max(that.mLevel - this.mLevel, 0);
                if (pve) { t = Math.min(t, 100)}

                const t1 = t * 2, t2 = t * 10;
                bp += t1; bm += t1; pp += t2; pm += t2; 
            }

            // YA
            if (cflags.has(105)) {
                let t = Math.max(this.mLevel - that.mLevel, 0);
                if (pve) { t = Math.min(t, 100)}
                t = t + t + t; 
                dp += t; dm += t; sp += t;
            }

            mhr = Math.max(mhr, hr); thr += hr;
            msr = Math.max(msr, sr); tsr += sr;
            mbp = Math.max(mbp, bp); tbp += bp;
            mbm = Math.max(mbm, bm); tbm += bm;
            mpp = Math.max(mpp, pp); tpp += pp;
            mpm = Math.max(mpm, pm); tpm += pm;
            mdp = Math.max(mdp, dp); tdp += dp;
            mdm = Math.max(mdm, dm); tdm += dm;
            msp = Math.max(msp, sp); tsp += sp;
        }
        
        // Effects by others
        this.mHpRecRat -= gNormMt(mhr, thr);
        this.mSdRecRat -= gNormMt(msr, tsr);
        this.mAtkFixP += gNormMt(mbp, tbp);
        this.mAtkFixM += gNormMt(mbm, tbm);
        this.mPowP += gNormMt(mpp, tpp);
        this.mPowM += gNormMt(mpm, tpm);
        this.mDefFixP += gNormMt(mdp, tdp);
        this.mDefFixM += gNormMt(mdm, tdm);
        this.mSpd += gNormMt(msp, tsp);

        // PowP + PowM
        this.mPowPM = this.mPowP + this.mPowM;

        // BI (Changes: +15 physical attack ratio)
        if (cflags.has(201)) { this.mAtkRatP += 15; }

        // MO (Changes: +15 magical attack ratio)
        if (cflags.has(202)) { this.mAtkRatM += 15; }

        // JU
        if (cflags.has(403)) {
            this.mSpd = gNumberCast(this.mSpd * 1.3);
        }
        
        // MING (Changes: -200 defense ratio)
        if (cflags.has(3007)) { this.mDefRatP -= 200; this.mDefRatM -= 200; }

        // DIAN (Changes: +100 defense ratio)
        if (cflags.has(306)) { this.mDefRatP += 100; this.mDefRatM += 100; }

        // Shield Effect Scaler
        this.mDefRatMulSd = 0.75;

        // DUNH (New effect : Calculate damage ratio with 1 + tanh(x) instead of exp(x).)
        //  As long as x is real:
        //   (1) 1.0 + tanh(x) in (0, 2).
        //   (2) 1.0 + tanh(x) <= e^(x).
        //
        this._DefendRatio = cflags.has(407) ? tanhp1 : Math.exp;

        // Setup all status, Health and Shield
        this.reset();
    };

    // Custom defend formula
    BP.defendImpl = function (that) {
        const cflags = this.mFlags, tflags = that.mFlags, tinfo = that.mInfo;

        // Defense ratio calculation
        let nAtkRatP = that.cAtkRatP.now(), nAtkFixP = that.cAtkFixP.now(),
            nAtkRatM = that.cAtkRatM.now(), nAtkFixM = that.cAtkFixM.now(),
            nDefRatP = this.cDefRatP.now(), nDefRatM = this.cDefRatM.now(),
            nDefFixP = this.cDefFixP.now(), nDefFixM = this.cDefFixM.now(),
            hpr, hmr, spr, smr
        ;

        // Critical
        if (tinfo.nIsCrt) {
            const mAtkRatC = that.cAtkRatC.now(), mAtkFixC = that.cAtkFixC.now();
            nAtkRatP += mAtkRatC; nAtkRatM += mAtkRatC;
            nAtkFixP += mAtkFixC; nAtkFixM += mAtkFixC;
        }

        // Attack / Defense
        hpr = ((((nAtkFixP > 0) ? Math.log(nAtkFixP + gDefendBase) : 0) - ((nDefFixP > 0) ? Math.log(nDefFixP + gDefendBase) : 0) || 0)
            + (((nAtkRatP) ? (nAtkRatP / (100 + Math.abs(nAtkRatP)) || ((nAtkRatP > 0) ? Infinity : -Infinity)) : 0)
            -  ((nDefRatP) ? (nDefRatP / (100 + Math.abs(nDefRatP)) || ((nDefRatP > 0) ? Infinity : -Infinity)) : 0) || 0)) * Math.LN2 || 0;
        hmr = ((((nAtkFixM > 0) ? Math.log(nAtkFixM + gDefendBase) : 0) - ((nDefFixM > 0) ? Math.log(nDefFixM + gDefendBase) : 0) || 0)
            + (((nAtkRatM) ? (nAtkRatM / (100 + Math.abs(nAtkRatM)) || ((nAtkRatM > 0) ? Infinity : -Infinity)) : 0)
            -  ((nDefRatM) ? (nDefRatM / (100 + Math.abs(nDefRatM)) || ((nDefRatM > 0) ? Infinity : -Infinity)) : 0) || 0)) * Math.LN2 || 0;

        // ZHI
        // Effect: Halves effect of both attack and defense.
        // Note: Roughly equals to square roots when using exp(x).
        //   - Reduce damage when the result is positive (attack > defense).
        //   - Increase damage when the result is negative (defense > attack).
        if (cflags.has(308)) { hpr *= 0.5; hmr *= 0.5; }

        // SHENG
        // Effect: substract 1/8 from the exponent of the formula.
        // Note: Which is roughly equals to a 0.8824x damage taken multiplier when using exp(x).
        if (cflags.has(206)) { hpr -= 0.125; hmr -= 0.125; }

        // HONG 
        // Effect: Calculates damage using the higher multiplier.
        if (tflags.has(404)) {
            if (hpr > hmr) { hmr = hpr; }
            hpr = hmr;
        }
        
        // Shield effect multiplier.
        // Note: Reduce effect of both attack and defense.
        spr = hpr * this.mDefRatMulSd;
        smr = hmr * this.mDefRatMulSd;

        // Damage formula.
        hpr = this._DefendRatio(hpr);
        hmr = this._DefendRatio(hmr);
        spr = this._DefendRatio(spr);
        smr = this._DefendRatio(smr);
        // console.log("Defense Ratio:", that.mActor, "->", this.mActor, hpr, hmr, spr, smr);

        // Set the result to battle info.
        tinfo.nDefHpP = hpr;
        tinfo.nDefHpM = hmr;
        tinfo.nDefSdP = spr * this.mDmgPSdRat;
        tinfo.nDefSdM = smr * this.mDmgMSdRat;
    };
}

