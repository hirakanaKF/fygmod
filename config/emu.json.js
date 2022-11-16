const gEmuJson = 
{
    "Image": "data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjUuMSwgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy/YYfK9AAAACXBIWXMAAA9hAAAPYQGoP6dpAAAADUlEQVR4nGNgYGBgAAAABQABpfZFQAAAAABJRU5ErkJggg==",
    "Rule": {
        "UseNumbers": 1,
        "NoOverkill": 1,
        "BattleMode": 1,
        "VerboseAll": 1,
        "ScaleFactor": 0.25,
        "EffectBase": 6.931471805599453e-3,
        "DefendBase": 1.0576586617430806e-5,
        "DefMul1": 0.1,
        "DefMul2": 0.01,
        "SpdRatMin": -80,
        "SklAdd": 1024,
        "CrtAdd": 1024,
        "HpHeal": 0.25,
        "SdHeal": 0.25,
        "SklOffset": 0.5,
        "CrtOffset": 0.5,
        "RoundMax": 100
    },
    "BaseStat": {
        "Add": {
            "nStr": {"nPowMulP": 12, "nAtkMulP": 12, "nSklMul": 10, "nEvaMul": 5},
            "nAgi": {"nSpdMul": 6, "nAtkMulC": 8, "nCrtMul": 10, "nDodMul": 5},
            "nInt": {"nPowMulM": 12, "nAtkMulM": 8, "nSklMul": 10, "nEvaMul": 5},
            "nVit": {"nHpMaxMul": 128, "nDefMulP": 12, "nDodMul": 5, "nResMulP": 1},
            "nSpr": {"nSdMaxMul": 256, "nDefMulP": 8, "nDefMulM": 8, "nResMulP": 1, "nResMulM": 1},
            "nMnd": {"nHpMaxMul": 128, "nDefMulM": 12, "nEvaMul": 5, "nResMulM": 1}
        },
        "Mul": {
            "nStr": {},
            "nAgi": {},
            "nInt": {},
            "nVit": {},
            "nSpr": {},
            "nMnd": {}
        }
    },
    "Actors": {
        "0": {},
        "3000": {},
        "3001": {},
        "3002": {},
        "3003": {},
        "3004": {},
        "3005": {},
        "3006": {},
        "3007": {},
        "3008": {},
        "3009": {},
        "3901": {
            "nHpMaxAdd": [384, 384], "nSdMaxAdd": [384, 384],
            "nPowAddP": [8, 8], "nPowAddM": [8, 8],
            "nSpdAdd": [4, 4],
            "nAtkAddP": [8, 8], "nAtkAddM": [8, 8], "nAtkAddC": [4, 4],
            "nDefAddP": [10, 10], "nDefAddM": [10, 10],
            "nSklAdd": [6, 6], "nCrtAdd": [6, 6],
            "nEvaAdd": [3, 3], "nDodAdd": [3, 3],
            "nRflRat": [0, 0]
        },
        "3902": {
            "nHpMaxAdd": [8, 8], "nSdMaxAdd": [448, 448],
            "nPowAddP": [0, 0], "nPowAddM": [24, 24],
            "nSpdAdd": [8, 8],
            "nAtkAddP": [0, 0], "nAtkAddM": [8, 8], "nAtkAddC": [8, 8],
            "nDefAddP": [6, 6], "nDefAddM": [16, 16],
            "nSklAdd": [9, 9], "nCrtAdd": [6, 6],
            "nEvaAdd": [9, 9], "nDodAdd": [0, 0],
            "nRflRat": [0, 0]
        },
        "3903": {
            "nHpMaxAdd": [0, 1], "nSdMaxAdd": [640, 640],
            "nPowAddP": [0, 0], "nPowAddM": [0, 0],
            "nSpdAdd": [2, 2],
            "nAtkAddP": [0, 0], "nAtkAddM": [24, 24], "nAtkAddC": [0, 0],
            "nDefAddP": [2, 2], "nDefAddM": [24, 24],
            "nSklAdd": [16, 512], "nCrtAdd": [0, 0],
            "nEvaAdd": [16, 512], "nDodAdd": [0, 0],
            "nRflRat": [0, 0]
        },
        "3904": {
            "nHpMaxAdd": [448, 448], "nSdMaxAdd": [0, 0],
            "nPowAddP": [16, 16], "nPowAddM": [0, 0],
            "nSpdAdd": [0, 0],
            "nAtkAddP": [0, 0], "nAtkAddM": [0, 0], "nAtkAddC": [16, 16],
            "nDefAddP": [20, 20], "nDefAddM": [12, 12],
            "nSklAdd": [6, 6], "nCrtAdd": [16, 512],
            "nEvaAdd": [0, 0], "nDodAdd": [9, 9],
            "nRflRat": [0, 8]
        },
        "3905": {
            "nHpMaxAdd": [384, 384], "nSdMaxAdd": [0, 0],
            "nPowAddP": [24, 24], "nPowAddM": [0, 0],
            "nSpdAdd": [8, 8],
            "nAtkAddP": [24, 24], "nAtkAddM": [0, 0], "nAtkAddC": [0, 0],
            "nDefAddP": [0, 0], "nDefAddM": [0, 0],
            "nSklAdd": [10, 10], "nCrtAdd": [10, 10],
            "nEvaAdd": [0, 0], "nDodAdd": [0, 0],
            "nRflRat": [0, 0]
        },
        "3906": {
            "nHpMaxAdd": [512, 512], "nSdMaxAdd": [0, 0],
            "nPowAddP": [8, 8], "nPowAddM": [0, 0],
            "nSpdAdd": [2, 2],
            "nAtkAddP": [9, 9], "nAtkAddM": [2, 2], "nAtkAddC": [0, 0],
            "nDefAddP": [24, 24], "nDefAddM": [2, 2],
            "nSklAdd": [6, 6], "nCrtAdd": [0, 0],
            "nEvaAdd": [0, 0], "nDodAdd": [16, 512],
            "nRflRat": [0.125, 8]
        }
    },
    "Status": {
        "HpRecRat": {kind: "Number", show: "", debug: "mNow"},
        "SdRecRat": {kind: "Number", show: "", debug: "mNow"},
        "PowRatP": {kind: "Number", show: "", debug: "mNow"},
        "PowRatM": {kind: "Number", show: "", debug: "mNow"},
        "AtkRatP": {kind: "Number", show: "", debug: "mNow"},
        "AtkRatM": {kind: "Number", show: "", debug: "mNow"},
        "AtkRatC": {kind: "Number", show: "", debug: "mNow"},
        "AtkFixP": {kind: "Number", show: "", debug: "mNow"},
        "AtkFixM": {kind: "Number", show: "", debug: "mNow"},
        "AtkFixC": {kind: "Number", show: "", debug: "mNow"},
        "DefRatP": {kind: "Number", show: "", debug: "mNow"},
        "DefRatM": {kind: "Number", show: "", debug: "mNow"},
        "DefFixP": {kind: "Number", show: "", debug: "mNow"},
        "DefFixM": {kind: "Number", show: "", debug: "mNow"},
        "SpdRat": {kind: "Number", show: "", debug: "mNow"},
        "SklRat": {kind: "Number", show: "", debug: "mNow"},
        "CrtRat": {kind: "Number", show: "", debug: "mNow"},
        "EvaRat": {kind: "Number", show: "", debug: "mNow"},
        "DodRat": {kind: "Number", show: "", debug: "mNow"},
        "LchRat": {kind: "Number", show: "", debug: "mNow"},
        "RflRat": {kind: "Number", show: "", debug: "mNow"},
        "Undead": {kind: "Flag", show: "", debug: "mNow"},
        "Flare": {kind: "Number", show: "mMax", debug: "mNow"},
        "Light": {kind: "Number", show: "mNow", debug: "mNow"},
        "Dodge": {kind: "Number", show: "", debug: "mNow"},
        "Sight": {kind: "Number", show: "", debug: "mNow"},
        "Mirror": {kind: "Flag", show: "", debug: "mNow"}
    },
    "Equips": {
        "0": [
        ],
        "2101": [
            ["nPowAddP", 1600.00, 0.00, 0.01],
            ["nAtkAddP", 480.00, 40000.00, 0.01],
            ["nAtkRatP", 5.00, 500.00, 0.01],
            ["nSklAdd", 1200.00, 0.00, 0.01]
        ],
        "2102": [
            ["nPowAddP", 1200.00, 0.00, 0.01],
            ["nPowAddM", 1200.00, 0.00, 0.01],
            ["nSpdAdd", 240.00, 0.00, 0.01],
            ["nAtkAddC", 480.00, 40000.00, 0.01]
        ],
        "2103": [
            ["nPowAddM", 1600.00, 0.00, 0.01],
            ["nAtkAddM", 480.00, 40000.00, 0.01],
            ["nAtkRatM", 5.00, 500.00, 0.01],
            ["nSklAdd", 1200.00, 0.00, 0.01]
        ],
        "2104": [
            ["nPowMulP", 20.00, 2000.00, 0.01],
            ["nSpdMul", 20.00, 2000.00, 0.01],
            ["nAtkRatC", 5.00, 1000.00, 0.01],
            ["nAtkRatP", 5.00, 1000.00, 0.01]
        ],
        "2105": [
            ["nPowMulP", 20.00, 3000.00, 0.01],
            ["nAtkRatC", 5.00, 1000.00, 0.01],
            ["nAtkRatP", 5.00, 1000.00, 0.01],
            ["nAtkAddP", 200.00, 0.00, 0.01]
        ],
        "2106": [
            ["nPowMulP", 20.00, 0.00, 0.01],
            ["nPowMulM", 20.00, 0.00, 0.01],
            ["nSpdMul", 20.00, 2500.00, 0.01],
            ["nSpdAdd", 160.00, 0.00, 0.01]
        ],
        "2107": [
            ["nPowMulM", 20.00, 0.00, 0.01],
            ["nPowMulM", 20.00, 0.00, 0.01],
            ["nPowMulM", 20.00, 0.00, 0.01],
            ["nAtkRatM", 5.00, 0.00, 0.01]
        ],
        "2108": [
            ["nLchRat", 7.00, 1000.00, 0.01],
            ["nRflRat", 7.00, 0.00, 0.01],
            ["nDefAddP", 400.00, 0.00, 0.01],
            ["nDefAddM", 400.00, 0.00, 0.01]
        ],
        "2109": [
            ["nPowAddP", 1200.00, 0.00, 0.01],
            ["nPowAddP", 1200.00, 0.00, 0.01],
            ["nPowMulP", 20.00, 3000.00, 0.01],
            ["nAtkRatC", 5.00, 100.00, 0.01]
        ],
        "2110": [
            ["nCrtAdd", 1000.00, 0.00, 0.01],
            ["nAtkAddP", 400.00, 0.00, 0.01],
            ["nAtkAddM", 400.00, 0.00, 0.01],
            ["nAtkAddC", 400.00, 0.00, 0.01]
        ],
        "2201": [
            ["nPowAddP", 1200.00, 0.00, 0.01],
            ["nPowAddM", 1200.00, 0.00, 0.01],
            ["nSpdAdd", 240.00, 0.00, 0.01],
            ["nCrtAdd", 1200.00, 0.00, 0.01]
        ],
        "2202": [
            ["nPowMulM", 20.00, 100.00, 0.01],
            ["nAtkAddM", 480.00, 4000.00, 0.01],
            ["nSdMaxAdd", 3600.00, 0.00, 0.01],
            ["nDefAddM", 480.00, 4000.00, 0.01]
        ],
        "2203": [
            ["nLchRat", 7.00, 100.00, 0.01],
            ["nLchRat", 7.00, 100.00, 0.01],
            ["nLchRat", 7.00, 100.00, 0.01],
            ["nSpdAdd", 80.00, 0.00, 0.01]
        ],
        "2204": [
            ["nAtkAddP", 200.00, 0.00, 0.01],
            ["nAtkAddM", 200.00, 0.00, 0.01],
            ["nCrtAdd", 800.00, 0.00, 0.01],
            ["nSklAdd", 800.00, 0.00, 0.01]
        ],
        "2205": [
            ["nAtkAddM", 200.00, 0.00, 0.01],
            ["nSklAdd", 800.00, 0.00, 0.01],
            ["nHpMaxAddStr", 30.0, 0.00, 0.01],
            ["nHpMaxMul", 7.00, 0.00, 0.01]
        ],
        "2301": [
            ["nHpMaxAdd", 7200.00, 0.00, 0.01],
            ["nDefRatP", 5.00, 500.00, 0.01],
            ["nDefRatM", 5.00, 500.00, 0.01],
            ["nRflRat", 8.00, 0.00, 0.01]
        ],
        "2302": [
            ["nHpMaxAdd", 9600.00, 0.00, 0.01],
            ["nDefAddP", 480.00, 0.00, 0.01],
            ["nDefAddM", 480.00, 0.00, 0.01],
            ["nHpHealAdd", 2400.00, 0.00, 0.01]
        ],
        "2303": [
            ["nHpMaxAdd", 9600.00, 0.00, 0.01],
            ["nEvaAdd", 1200.00, 0.00, 0.01],
            ["nDodAdd", 1200.00, 0.00, 0.01],
            ["nHpHealAdd", 2400.00, 0.00, 0.01]
        ],
        "2304": [
            ["nHpMaxAdd", 2400.00, 0.00, 0.01],
            ["nSdHealAdd", 3200.00, 0.00, 0.01],
            ["nSdMaxMul", 20.00, 2500.00, 0.01],
            ["nSdMaxAdd", 9600.00, 0.00, 0.01]
        ],
        "2305": [
            ["nHpMaxMul", 20.00, 2000.00, 0.01],
            ["nDefAddP", 400.00, 0.00, 0.01],
            ["nDefAddM", 400.00, 0.00, 0.01],
            ["nRflRat", 7.00, 1000.00, 0.01]
        ],
        "2306": [
            ["nHpMaxMul", 20.00, 5000.00, 0.01],
            ["nHpMaxAdd", 7200.00, 0.00, 0.01],
            ["nDefAddP", 160.00, 0.00, 0.01],
            ["nHpHealAdd", 2400.00, 0.00, 0.01]
        ],
        "2307": [
            ["nSdMaxMul", 20.00, 5000.00, 0.01],
            ["nSdMaxAdd", 12000.00, 0.00, 0.01],
            ["nDefAddM", 480.00, 0.00, 0.01],
            ["nDefRatM", 5.00, 1000.00, 0.01]
        ],
        "2401": [
            ["nHpMaxAdd", 3600.00, 0.00, 0.01],
            ["nEvaAdd", 800.00, 0.00, 0.01],
            ["nDodAdd", 800.00, 0.00, 0.01],
            ["nHpHealRat", 0.00, 2000.00, 0.01]
        ],
        "2402": [
            ["nHpMaxAdd", 1200.00, 0.00, 0.01],
            ["nSdMaxMul", 20.00, 0.00, 0.01],
            ["nSdMaxAdd", 4800.00, 0.00, 0.01],
            ["nSdHealRat", 0.00, 2000.00, 0.01]
        ],
        "2403": [
            ["nHpMaxAdd", 2400.00, 0.00, 0.01],
            ["nSdMaxAdd", 4800.00, 0.00, 0.01],
            ["nHpHealRat", 0.00, 3000.00, 0.01],
            ["nSdHealRat", 0.00, 3000.00, 0.01]
        ]
    },
    "EquipRanks": {
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {}
    },
    "EquipStats": {
        "Add": {
            "nHpHealRat": {"nHpHealRat": 1.00},
            "nSdHealRat": {"nSdHealRat": 1.00},
            "nAtkRatP": {"nAtkRatP": 1.00},
            "nAtkAddP": {"nAtkAddP": 1.00},
            "nAtkRatM": {"nAtkRatM": 1.00},
            "nAtkAddM": {"nAtkAddM": 1.00},
            "nAtkRatC": {"nAtkRatC": 1.00},
            "nAtkAddC": {"nAtkAddC": 1.00},
            "nDefRatP": {"nDefRatP": 1.00},
            "nDefAddP": {"nDefAddP": 1.00},
            "nDefRatM": {"nDefRatM": 1.00},
            "nDefAddM": {"nDefAddM": 1.00},
            "nSklAdd": {"nSklAdd": 1.00},
            "nCrtAdd": {"nCrtAdd": 1.00},
            "nEvaAdd": {"nEvaAdd": 1.00},
            "nDodAdd": {"nDodAdd": 1.00},
            "nLchRat": {"nLchRat": 1.00},
            "nRflRat": {"nRflRat": 1.00}
        },
        "Mul": {
            "nHpMaxAdd": {
                "nHpMaxAdd": {"nLevel": 0.01}
            },
            "nHpMaxAddStr": {
                "nHpMaxAdd": {"nStr": 1.00}
            },
            "nHpHealAdd": {
                "nHpHealAdd": {"nLevel": 0.01}
            },
            "nSdMaxAdd": {
                "nSdMaxAdd": {"nLevel": 0.01}
            },
            "nSdHealAdd": {
                "nSdHealAdd": {"nLevel": 0.01}
            },
            "nPowAddP": {
                "nPowAddP": {"nLevel": 0.01}
            },
            "nPowAddM": {
                "nPowAddM": {"nLevel": 0.01}
            },
            "nPowAddA": {
                "nPowAddA": {"nLevel": 0.01}
            },
            "nSpdAdd": {
                "nSpdAdd": {"nLevel": 0.01}
            },
            "nResAddP": {
                "nResAddP": {"nLevel": 0.01}
            },
            "nResAddM": {
                "nResAddM": {"nLevel": 0.01}
            },
            "nHpMaxMul": {
                "nHpMaxMul": {"nHpMaxMul": 0.01}
            },
            "nHpHealMul": {
                "nHpHealMul": {"nHpHealMul": 0.01}
            },
            "nSdMaxMul": {
                "nSdMaxMul": {"nSdMaxMul": 0.01}
            },
            "nSdHealMul": {
                "nSdHealMul": {"nSdHealMul": 0.01}
            },
            "nPowMulP": {
                "nPowMulP": {"nPowMulP": 0.01}
            },
            "nPowMulM": {
                "nPowMulM": {"nPowMulM": 0.01}
            },
            "nPowMulA": {
                "nPowMulA": {"nPowMulA": 0.01}
            },
            "nSpdMul": {
                "nSpdMul": {"nSpdMul": 0.01}
            },
            "nAtkMulP": {
                "nAtkMulP": {"nAtkMulP": 0.01}
            },
            "nAtkMulM": {
                "nAtkMulM": {"nAtkMulM": 0.01}
            },
            "nAtkMulC": {
                "nAtkMulC": {"nAtkMulC": 0.01}
            },
            "nSklMul": {
                "nSklMul": {"nSklMul": 0.01}
            },
            "nCrtMul": {
                "nCrtMul": {"nCrtMul": 0.01}
            },
            "nDefMulP": {
                "nDefMulP": {"nDefMulP": 0.01}
            },
            "nDefMulM": {
                "nDefMulM": {"nDefMulM": 0.01}
            },
            "nDefMulP": {
                "nDefMulP": {"nDefMulP": 0.01}
            },
            "nDefMulM": {
                "nDefMulM": {"nDefMulM": 0.01}
            }
        }
    },
    "Auras": {
        "101":{"cost": 0},
        "102":{"cost": 0},
        "103":{"cost": 0},
        "104":{"cost": 0},
        "105":{"cost": 0},
        "201":{"cost": 20},
        "202":{"cost": 20},
        "203":{"cost": 20},
        "204":{"cost": 20},
        "205":{"cost": 20},
        "206":{"cost": 20},
        "207":{"cost": 20},
        "301":{"cost": 30},
        "302":{"cost": 30},
        "303":{"cost": 30},
        "304":{"cost": 30},
        "305":{"cost": 30},
        "306":{"cost": 30},
        "307":{"cost": 30},
        "308":{"cost": 30},
        "401":{"cost": 100},
        "402":{"cost": 100},
        "403":{"cost": 100},
        "404":{"cost": 100},
        "405":{"cost": 100},
        "406":{"cost": 100},
        "407":{"cost": 100},
        "408":{"cost": 100},
        "901":{"cost": 999}
    },
    "ActorKeys": {
        "": "0",
        "舞": "3000",
        "默": "3001",
        "琳": "3002",
        "艾": "3003",
        "梦": "3004",
        "薇": "3005",
        "伊": "3006",
        "冥": "3007",
        "命": "3008",
        "希": "3009",
        "铁皮木人": "3901",
        "迅捷魔蛛": "3902",
        "魔灯之灵": "3903",
        "食铁兽": "3904",
        "六眼飞鱼": "3905",
        "晶刺豪猪": "3906"
    }
}
