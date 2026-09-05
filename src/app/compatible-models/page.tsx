import Link from "next/link";
import { DISPLAY_COMBOS, BUSINESS } from "@/lib/constants";
export const metadata={title:"Compatible Models | Mamata Mobile"};

const MODELS = {
  "OnePlus": [
    {
      "name": "1+NORD2",
      "price": 624
    },
    {
      "name": "1+NORD CE2 TFT",
      "price": 624
    },
    {
      "name": "1+NORD TFT",
      "price": 719
    },
    {
      "name": "1+NORD 2 TFT",
      "price": 729
    },
    {
      "name": "1+9 PRO",
      "price": 7649
    },
    {
      "name": "1+10 PRO",
      "price": 8399
    },
    {
      "name": "1+NORD 2 TFT",
      "price": 579
    },
    {
      "name": "NORD3 NORD 4",
      "price": 2599
    },
    {
      "name": "1+5T",
      "price": 1649
    },
    {
      "name": "1+6T",
      "price": 1829
    },
    {
      "name": "1+NORD 2",
      "price": 2949
    },
    {
      "name": "1+3",
      "price": 1449
    },
    {
      "name": "1+13T OLED",
      "price": 3149
    },
    {
      "name": "1+9 RT",
      "price": 3349
    },
    {
      "name": "1+13 PRO",
      "price": 5299
    },
    {
      "name": "1+15 OLED",
      "price": 4399
    },
    {
      "name": "1+13 OLED",
      "price": 9049
    },
    {
      "name": "1+8 PRO OLED",
      "price": 7049
    },
    {
      "name": "1+8T WF",
      "price": 4199
    },
    {
      "name": "NORDCE3",
      "price": 2199
    },
    {
      "name": "1+13R WF",
      "price": 6499
    },
    {
      "name": "N81+ TP",
      "price": 630
    }
  ],
  "Realme": [
    {
      "name": "RM 12X 5G",
      "price": 609
    },
    {
      "name": "RM C 53",
      "price": 564
    },
    {
      "name": "RM 9PRO RM 8I A53/A54",
      "price": 609
    },
    {
      "name": "RM 6/RM 85G",
      "price": 589
    },
    {
      "name": "RM 12 + TFT",
      "price": 639
    },
    {
      "name": "RM P4X",
      "price": 834
    },
    {
      "name": "RM C3",
      "price": 529
    },
    {
      "name": "RM C55 RM C65 UNI",
      "price": 634
    },
    {
      "name": "RM C 53",
      "price": 574
    },
    {
      "name": "RM 8I/RM 9I/RM 9 PRO",
      "price": 609
    },
    {
      "name": "RM 9PRO RM 8I",
      "price": 589
    },
    {
      "name": "RM 6/RM 85G",
      "price": 589
    },
    {
      "name": "RM C3",
      "price": 514
    },
    {
      "name": "RM C 20",
      "price": 539
    },
    {
      "name": "RM 9 PRO 5G",
      "price": 504
    },
    {
      "name": "RM 6",
      "price": 524
    },
    {
      "name": "RM 12 + TFT",
      "price": 639
    },
    {
      "name": "RM 14 PRO",
      "price": 2399
    },
    {
      "name": "RM 12 +",
      "price": 1799
    },
    {
      "name": "RM 15/ P 4",
      "price": 2749
    },
    {
      "name": "RM 14 PRO +",
      "price": 2499
    },
    {
      "name": "RM 15T F31 PRO F 31",
      "price": 2699
    },
    {
      "name": "RM 13 PRO",
      "price": 2449
    },
    {
      "name": "RM 15T OG 100%",
      "price": 2949
    },
    {
      "name": "RM C 53",
      "price": 529
    },
    {
      "name": "RM10PRO+ WF",
      "price": 2949
    },
    {
      "name": "RM 12 PRO+ WF",
      "price": 2949
    },
    {
      "name": "RM 14 PRO WF",
      "price": 3549
    },
    {
      "name": "RM 14 PRO+ 5G WF",
      "price": 3699
    },
    {
      "name": "RM 15T WF",
      "price": 3249
    }
  ],
  "Infinix / Tecno": [
    {
      "name": "X6720/X6725 UNI",
      "price": 614
    },
    {
      "name": "X6840 / CITY",
      "price": 200
    },
    {
      "name": "X",
      "price": 6711
    },
    {
      "name": "X6850/X6851",
      "price": 889
    },
    {
      "name": "X",
      "price": 6525
    },
    {
      "name": "X",
      "price": 6812
    },
    {
      "name": "X",
      "price": 6820
    },
    {
      "name": "X6887",
      "price": 1359
    },
    {
      "name": "X6879 X6878 TFT",
      "price": 1159
    },
    {
      "name": "X",
      "price": 6882
    },
    {
      "name": "/ HOT 50",
      "price": 739
    },
    {
      "name": "X6840 / CITY",
      "price": 200
    },
    {
      "name": "X",
      "price": 6525
    },
    {
      "name": "X 90",
      "price": 2299
    },
    {
      "name": "X 70 PRO",
      "price": 2549
    },
    {
      "name": "X",
      "price": 200
    },
    {
      "name": "X 200FE OLED",
      "price": 3049
    },
    {
      "name": "X60 X70 OLED",
      "price": 2599
    },
    {
      "name": "X 6850/X6861",
      "price": 2249
    },
    {
      "name": "X 70 PRO WF",
      "price": 3899
    },
    {
      "name": "X",
      "price": 1730
    },
    {
      "name": "XR",
      "price": 840
    },
    {
      "name": "XS",
      "price": 1730
    },
    {
      "name": "X",
      "price": 830
    },
    {
      "name": "XR",
      "price": 830
    },
    {
      "name": "XS",
      "price": 830
    },
    {
      "name": "X",
      "price": 1730
    },
    {
      "name": "XS MAX",
      "price": 2500
    },
    {
      "name": "XS MAX",
      "price": 2300
    },
    {
      "name": "XS MAX",
      "price": 970
    },
    {
      "name": "XS",
      "price": 840
    },
    {
      "name": "X",
      "price": 1730
    },
    {
      "name": "XS",
      "price": 1730
    },
    {
      "name": "XR",
      "price": 1070
    },
    {
      "name": "XS",
      "price": 1070
    },
    {
      "name": "X",
      "price": 1070
    },
    {
      "name": "XS MAX",
      "price": 1170
    },
    {
      "name": "X10/X20",
      "price": 720
    }
  ],
  "Other Brands": [
    {
      "name": "LC7",
      "price": 584
    },
    {
      "name": "KE5",
      "price": 524
    },
    {
      "name": "CITY",
      "price": 100
    },
    {
      "name": "TFT",
      "price": 624
    },
    {
      "name": "BLAZE 2",
      "price": 614
    },
    {
      "name": "BLAZE X 5G",
      "price": 1059
    },
    {
      "name": "C 11/ A16 UNI",
      "price": 544
    },
    {
      "name": "C 11 A16 A57 C35 ALL",
      "price": 559
    },
    {
      "name": "KE 5 / X",
      "price": 657
    },
    {
      "name": "C 53",
      "price": 609
    },
    {
      "name": "OLED",
      "price": 8399
    },
    {
      "name": "C 11 A16 A57 C35 ALL UNI",
      "price": 504
    },
    {
      "name": "NOTHING CMF 1",
      "price": 1829
    },
    {
      "name": "NOTHING 2A",
      "price": 2999
    },
    {
      "name": "NOTHING 3A",
      "price": 3449
    },
    {
      "name": "PRO",
      "price": 2799
    },
    {
      "name": "17 PRO",
      "price": 6050
    },
    {
      "name": "17",
      "price": 4350
    },
    {
      "name": "17",
      "price": 6050
    },
    {
      "name": "17 PRO",
      "price": 2420
    },
    {
      "name": "17",
      "price": 2420
    },
    {
      "name": "17",
      "price": 2420
    },
    {
      "name": "17 PRO",
      "price": 2900
    },
    {
      "name": "G14/G54",
      "price": 590
    },
    {
      "name": "G34 UNI.",
      "price": 580
    },
    {
      "name": "E20",
      "price": 520
    },
    {
      "name": "E22",
      "price": 520
    },
    {
      "name": "E40/E30",
      "price": 600
    },
    {
      "name": "G04/G24",
      "price": 590
    },
    {
      "name": "G10/G30",
      "price": 570
    },
    {
      "name": "E7 PLUS",
      "price": 600
    },
    {
      "name": "17 AIR",
      "price": 12000
    },
    {
      "name": "E7 POWER",
      "price": 580
    },
    {
      "name": "G52",
      "price": 710
    },
    {
      "name": "E30 WF",
      "price": 780
    },
    {
      "name": "G31",
      "price": 640
    },
    {
      "name": "G7 POWER",
      "price": 580
    },
    {
      "name": "G52",
      "price": 2350
    },
    {
      "name": "G85/G96 5G",
      "price": 1930
    },
    {
      "name": "EDGE 70",
      "price": 3200
    },
    {
      "name": "EDGE 70 FUSION",
      "price": 3200
    },
    {
      "name": "EDGE 40",
      "price": 2300
    },
    {
      "name": "G84",
      "price": 2300
    },
    {
      "name": "G52",
      "price": 2250
    },
    {
      "name": "EDGE 30 FUSION",
      "price": 2350
    },
    {
      "name": "EDGE 60 PRO",
      "price": 2350
    },
    {
      "name": "EDGE 50 NEO",
      "price": 2950
    },
    {
      "name": "EDGE 50 ULTRA",
      "price": 2500
    },
    {
      "name": "G5 STYLUS 5G",
      "price": 2300
    },
    {
      "name": "G31",
      "price": 1950
    },
    {
      "name": "RAZR 50/60 UNI",
      "price": 8550
    },
    {
      "name": "EDGE 20",
      "price": 2550
    },
    {
      "name": "RAZR 40",
      "price": 8550
    },
    {
      "name": "EDGE 70 PRO",
      "price": 4650
    },
    {
      "name": "G85 UNI.",
      "price": 2050
    },
    {
      "name": "G86 POWER",
      "price": 2300
    },
    {
      "name": "EDGE 60 STYLUS",
      "price": 2350
    },
    {
      "name": "C21 PLUS",
      "price": 580
    },
    {
      "name": "G11 PLUS",
      "price": 650
    },
    {
      "name": "C3",
      "price": 640
    },
    {
      "name": "17",
      "price": 2420
    },
    {
      "name": "N7 PLUS",
      "price": 640
    },
    {
      "name": "N84/104",
      "price": 630
    },
    {
      "name": "C12",
      "price": 590
    },
    {
      "name": "C31",
      "price": 650
    },
    {
      "name": "N5",
      "price": 620
    },
    {
      "name": "7A WF",
      "price": 3900
    },
    {
      "name": "C30",
      "price": 710
    },
    {
      "name": "7 PRO WF",
      "price": 2500
    },
    {
      "name": "6 WF",
      "price": 2600
    },
    {
      "name": "PLUS",
      "price": 1380
    },
    {
      "name": "7 WF",
      "price": 2600
    },
    {
      "name": "N101",
      "price": 710
    },
    {
      "name": "6A WF",
      "price": 2600
    },
    {
      "name": "N133",
      "price": 1100
    },
    {
      "name": "8 PRO WF",
      "price": 2550
    },
    {
      "name": "8A",
      "price": 4350
    },
    {
      "name": "NG50",
      "price": 780
    },
    {
      "name": "8 WF",
      "price": 3150
    },
    {
      "name": "G42",
      "price": 630
    },
    {
      "name": "5 PRO",
      "price": 7550
    },
    {
      "name": "HMD PULSE",
      "price": 650
    },
    {
      "name": "HMD PULSE+",
      "price": 650
    },
    {
      "name": "8A",
      "price": 5100
    },
    {
      "name": "HMD FUSION",
      "price": 750
    },
    {
      "name": "6",
      "price": 1300
    },
    {
      "name": "7 PRO",
      "price": 1300
    },
    {
      "name": "8 PRO",
      "price": 1300
    },
    {
      "name": "6 PRO",
      "price": 1300
    },
    {
      "name": "8A",
      "price": 2250
    }
  ],
  "Xiaomi / Redmi": [
    {
      "name": "MI A1 NEW",
      "price": 534
    },
    {
      "name": "MI 10C MI 12C",
      "price": 579
    },
    {
      "name": "MI 13C",
      "price": 564
    },
    {
      "name": "MI NOTE 7",
      "price": 534
    },
    {
      "name": "MI 9A",
      "price": 534
    },
    {
      "name": "MI 12 5G / MI 13 5G",
      "price": 614
    },
    {
      "name": "MI 9 POWER",
      "price": 554
    },
    {
      "name": "MI 14C (UNI)",
      "price": 559
    },
    {
      "name": "MI 8A",
      "price": 514
    },
    {
      "name": "MI A3 NEW",
      "price": 559
    },
    {
      "name": "MI 10C MI 12C",
      "price": 554
    },
    {
      "name": "MI NOTE 8",
      "price": 539
    },
    {
      "name": "MI A7PRO MI 15A",
      "price": 639
    },
    {
      "name": "MI 9A",
      "price": 544
    },
    {
      "name": "MI A5 C 71",
      "price": 544
    },
    {
      "name": "MI 8A",
      "price": 544
    },
    {
      "name": "MI NOTE 7",
      "price": 529
    },
    {
      "name": "MI A3 NEW",
      "price": 584
    },
    {
      "name": "NOTE 15PRO+ 5G",
      "price": 1259
    },
    {
      "name": "MI 9 POWER",
      "price": 559
    },
    {
      "name": "MI NOTE 7",
      "price": 619
    },
    {
      "name": "MI NOTE 8 PRO",
      "price": 559
    },
    {
      "name": "MI NOTE 8 PRO",
      "price": 634
    },
    {
      "name": "MI 9A",
      "price": 524
    },
    {
      "name": "MI NOTE 9",
      "price": 624
    },
    {
      "name": "MI 14C (UNI)",
      "price": 544
    },
    {
      "name": "MI 13C",
      "price": 574
    },
    {
      "name": "MI NOTE 12 5G TFT",
      "price": 624
    },
    {
      "name": "MI 15A A7 PRO UNI",
      "price": 639
    },
    {
      "name": "MI NOTE 10 PRO",
      "price": 1749
    },
    {
      "name": "MI 8A",
      "price": 494
    },
    {
      "name": "MI 9A",
      "price": 514
    },
    {
      "name": "MI A5 C 71",
      "price": 559
    },
    {
      "name": "MI 13C",
      "price": 529
    },
    {
      "name": "MI 10C MI 12C",
      "price": 529
    },
    {
      "name": "MI NOTE 10S TFT",
      "price": 539
    },
    {
      "name": "NOTE 12 WF",
      "price": 2249
    },
    {
      "name": "MI NOTE 10S",
      "price": 2099
    },
    {
      "name": "NOTE 13 PRO 5G WF",
      "price": 2799
    },
    {
      "name": "MI NOTE 11",
      "price": 1949
    },
    {
      "name": "MI NOTE 10S WF",
      "price": 1899
    },
    {
      "name": "MI 13 PRO",
      "price": 3049
    },
    {
      "name": "NOTE 13 PRO+ 5G WF",
      "price": 3049
    },
    {
      "name": "MI 11 X / K 40",
      "price": 1749
    },
    {
      "name": "MI 15PRO",
      "price": 3900
    },
    {
      "name": "MI 14 CIVI",
      "price": 4899
    },
    {
      "name": "NOTE 10+ WF FULL",
      "price": 4350
    },
    {
      "name": "MI 14 OLED",
      "price": 3199
    },
    {
      "name": "NOTE 20 ULTRA WF",
      "price": 4700
    },
    {
      "name": "MI 15T OLED",
      "price": 3649
    },
    {
      "name": "MI NOTE 15",
      "price": 3099
    },
    {
      "name": "13 MINI",
      "price": 4300
    },
    {
      "name": "12 MINI",
      "price": 1200
    },
    {
      "name": "13 MINI",
      "price": 1200
    },
    {
      "name": "12 MINI",
      "price": 1820
    },
    {
      "name": "13 MINI",
      "price": 1820
    }
  ],
  "Vivo": [
    {
      "name": "AI PLUS NOVA 1 5G",
      "price": 629
    },
    {
      "name": "Y",
      "price": 200
    },
    {
      "name": "Y 93",
      "price": 514
    },
    {
      "name": "Y 83",
      "price": 529
    },
    {
      "name": "Y 35",
      "price": 479
    },
    {
      "name": "V 21 5G",
      "price": 639
    },
    {
      "name": "Y 36",
      "price": 569
    },
    {
      "name": "Y 02",
      "price": 544
    },
    {
      "name": "Y 33S 08",
      "price": 479
    },
    {
      "name": "Y 51 NEW",
      "price": 479
    },
    {
      "name": "YUVA 5G",
      "price": 629
    },
    {
      "name": "Y51PRO 5G",
      "price": 704
    },
    {
      "name": "V30/V40 TFT",
      "price": 889
    },
    {
      "name": "V 20 SE",
      "price": 564
    },
    {
      "name": "Y20Y21Y22Y33S",
      "price": 519
    },
    {
      "name": "Y20Y21Y22Y33SY52S ALL 72UNI",
      "price": 544
    },
    {
      "name": "Y20Y21Y22Y33SY51NEW UNI",
      "price": 529
    },
    {
      "name": "Y 93",
      "price": 529
    },
    {
      "name": "Y 83",
      "price": 544
    },
    {
      "name": "Y 03/Y 18",
      "price": 539
    },
    {
      "name": "V 21 TFT",
      "price": 719
    },
    {
      "name": "Y 03 / Y 18",
      "price": 559
    },
    {
      "name": "Y20 8 UNI",
      "price": 544
    },
    {
      "name": "Y 12",
      "price": 559
    },
    {
      "name": "Y 93",
      "price": 579
    },
    {
      "name": "Y",
      "price": 200
    },
    {
      "name": "Y 02",
      "price": 634
    },
    {
      "name": "Y20Y21Y22Y33S",
      "price": 539
    },
    {
      "name": "V 9",
      "price": 609
    },
    {
      "name": "Y 93",
      "price": 524
    },
    {
      "name": "Y 19",
      "price": 624
    },
    {
      "name": "Y 02",
      "price": 549
    },
    {
      "name": "Y 71 B",
      "price": 499
    },
    {
      "name": "Y 71 W",
      "price": 499
    },
    {
      "name": "V 40e",
      "price": 2349
    },
    {
      "name": "V30/V40",
      "price": 2199
    },
    {
      "name": "V 27 /V27 PRO FULL",
      "price": 2199
    },
    {
      "name": "V 15 PRO",
      "price": 2499
    },
    {
      "name": "V 60 /V 60E OLED",
      "price": 2399
    },
    {
      "name": "V 20 OLED KTX",
      "price": 1849
    },
    {
      "name": "V40E 100% CARE OG",
      "price": 2749
    },
    {
      "name": "V 50/V50E/T4 5G UNI",
      "price": 2379
    },
    {
      "name": "Y20Y21Y22Y33SY52S ALL 72UNI",
      "price": 519
    },
    {
      "name": "V 70FE 100%",
      "price": 10549
    },
    {
      "name": "V70/V70 LITE 100% OG",
      "price": 10549
    },
    {
      "name": "V 21",
      "price": 1949
    },
    {
      "name": "S10 WF SILVER",
      "price": 8050
    },
    {
      "name": "Y",
      "price": 300
    },
    {
      "name": "Y300 PRO WF",
      "price": 3149
    },
    {
      "name": "V 50 WF",
      "price": 3399
    },
    {
      "name": "V40 WF",
      "price": 3099
    }
  ],
  "Samsung": [
    {
      "name": "SPRKGO 3",
      "price": 639
    },
    {
      "name": "SPARK GO",
      "price": 2025
    },
    {
      "name": "A 5S",
      "price": 549
    },
    {
      "name": "F 19 TFT",
      "price": 584
    },
    {
      "name": "A100C",
      "price": 629
    },
    {
      "name": "S1 TFT HD+",
      "price": 624
    },
    {
      "name": "SHARK 5G",
      "price": 629
    },
    {
      "name": "AGNI 5G",
      "price": 1069
    },
    {
      "name": "A 5S",
      "price": 534
    },
    {
      "name": "S1 TFT",
      "price": 629
    },
    {
      "name": "A 5S",
      "price": 589
    },
    {
      "name": "A 3S",
      "price": 594
    },
    {
      "name": "F 19 ALL UNI",
      "price": 579
    },
    {
      "name": "A 54 UNI",
      "price": 619
    },
    {
      "name": "A 3S",
      "price": 529
    },
    {
      "name": "F 15 TFT",
      "price": 579
    },
    {
      "name": "A 54 / A53 UNI",
      "price": 554
    },
    {
      "name": "F 31PRO+ 5G UNI",
      "price": 1529
    },
    {
      "name": "F 11 PRO",
      "price": 770
    },
    {
      "name": "A1 NEW",
      "price": 514
    },
    {
      "name": "S1 100% CARE OG",
      "price": 2019
    },
    {
      "name": "F 19 TFT HD+",
      "price": 559
    },
    {
      "name": "A14/M14 5G",
      "price": 560
    },
    {
      "name": "A50 FULL RING",
      "price": 590
    },
    {
      "name": "A15 RING",
      "price": 610
    },
    {
      "name": "F 15",
      "price": 1829
    },
    {
      "name": "J6 RING",
      "price": 530
    },
    {
      "name": "J8 RING",
      "price": 520
    },
    {
      "name": "J7 Gold",
      "price": 480
    },
    {
      "name": "A22 5G",
      "price": 540
    },
    {
      "name": "A10",
      "price": 490
    },
    {
      "name": "J7 PRIME BLACK",
      "price": 480
    },
    {
      "name": "J4+/J6+",
      "price": 480
    },
    {
      "name": "J250 BLACK",
      "price": 480
    },
    {
      "name": "A31 RING",
      "price": 580
    },
    {
      "name": "A16/A17",
      "price": 640
    },
    {
      "name": "F31PRO WF",
      "price": 3149
    },
    {
      "name": "F25 PRO WF",
      "price": 3099
    },
    {
      "name": "F29 5G WF",
      "price": 3149
    },
    {
      "name": "S10 PLUS WF BLACK",
      "price": 9150
    },
    {
      "name": "S10 WF BLACK",
      "price": 8050
    },
    {
      "name": "S20 + WF FULL",
      "price": 4000
    },
    {
      "name": "S20 4G WF FULL",
      "price": 5100
    },
    {
      "name": "F 19 (54)",
      "price": 2799
    },
    {
      "name": "S20 5G WF FULL",
      "price": 5150
    },
    {
      "name": "S20 ULTRA WF",
      "price": 4700
    },
    {
      "name": "F 19 (55)",
      "price": 2799
    },
    {
      "name": "F19 WF",
      "price": 3399
    },
    {
      "name": "S21 ULTRA WF",
      "price": 5350
    },
    {
      "name": "S21 WF FULL",
      "price": 5450
    },
    {
      "name": "S22 WF FULL",
      "price": 9000
    },
    {
      "name": "S23 FE WF FULL",
      "price": 2700
    },
    {
      "name": "S24 FE WF FULL",
      "price": 2300
    },
    {
      "name": "F 15 WF",
      "price": 2249
    },
    {
      "name": "S24 ULTRA WF",
      "price": 6250
    },
    {
      "name": "S25 WF FULL",
      "price": 9750
    },
    {
      "name": "A50 RING",
      "price": 585
    },
    {
      "name": "M30",
      "price": 585
    },
    {
      "name": "A15",
      "price": 630
    },
    {
      "name": "A22 4G",
      "price": 600
    },
    {
      "name": "A13 5G",
      "price": 530
    },
    {
      "name": "J4+/J6+",
      "price": 510
    },
    {
      "name": "J8",
      "price": 540
    },
    {
      "name": "A16/A17",
      "price": 610
    },
    {
      "name": "J7 PRIME GOLD",
      "price": 510
    },
    {
      "name": "A32 4G",
      "price": 630
    },
    {
      "name": "A30S",
      "price": 550
    },
    {
      "name": "A03 CORE",
      "price": 530
    },
    {
      "name": "A14/M14 5G",
      "price": 550
    },
    {
      "name": "M336B",
      "price": 550
    },
    {
      "name": "A22 5G",
      "price": 560
    },
    {
      "name": "A20",
      "price": 540
    },
    {
      "name": "A10S",
      "price": 520
    },
    {
      "name": "A24/M34 RING",
      "price": 610
    },
    {
      "name": "M01",
      "price": 530
    },
    {
      "name": "A34",
      "price": 610
    },
    {
      "name": "J7 PRIME BLACK",
      "price": 510
    },
    {
      "name": "A53",
      "price": 620
    },
    {
      "name": "A70 RING",
      "price": 640
    },
    {
      "name": "A31",
      "price": 600
    },
    {
      "name": "M20",
      "price": 540
    },
    {
      "name": "J260",
      "price": 480
    },
    {
      "name": "A04",
      "price": 520
    },
    {
      "name": "M52",
      "price": 740
    },
    {
      "name": "A33",
      "price": 630
    },
    {
      "name": "A260",
      "price": 480
    },
    {
      "name": "A6+",
      "price": 600
    },
    {
      "name": "M40/A60",
      "price": 1000
    },
    {
      "name": "A50 FULL",
      "price": 650
    },
    {
      "name": "A16/A17",
      "price": 720
    },
    {
      "name": "A07 5G",
      "price": 600
    },
    {
      "name": "A50 FUL XF",
      "price": 630
    },
    {
      "name": "A15 FULL",
      "price": 2550
    },
    {
      "name": "A52 5G WF FULL",
      "price": 2450
    },
    {
      "name": "A15 WF FULL",
      "price": 2600
    },
    {
      "name": "A53 WF FULL",
      "price": 2500
    },
    {
      "name": "A16 WF FULL",
      "price": 2400
    },
    {
      "name": "A54 WF FULL",
      "price": 2450
    },
    {
      "name": "A20",
      "price": 1830
    },
    {
      "name": "A55 WF FULL",
      "price": 2200
    },
    {
      "name": "A22 4G WF",
      "price": 2050
    },
    {
      "name": "A56 WF FULL",
      "price": 2200
    },
    {
      "name": "A24 WF SMALL",
      "price": 1950
    },
    {
      "name": "A70 BIG",
      "price": 2400
    },
    {
      "name": "A25 WF FULL",
      "price": 2700
    },
    {
      "name": "A70 WF FULL",
      "price": 2400
    },
    {
      "name": "A26 5G",
      "price": 2300
    },
    {
      "name": "A71 WF SMALL",
      "price": 1650
    },
    {
      "name": "A30S",
      "price": 1830
    },
    {
      "name": "A73 WF FULL",
      "price": 2050
    },
    {
      "name": "A31 WF",
      "price": 1950
    },
    {
      "name": "A8+",
      "price": 2260
    },
    {
      "name": "A32 4G WF",
      "price": 2100
    },
    {
      "name": "F22 4G WF",
      "price": 2050
    },
    {
      "name": "A33 5G WF",
      "price": 2250
    },
    {
      "name": "F62 WF FULL",
      "price": 1850
    },
    {
      "name": "A34 5G WF FULL",
      "price": 2850
    },
    {
      "name": "J730 BLACK",
      "price": 1100
    },
    {
      "name": "A35 WF FULL",
      "price": 1950
    },
    {
      "name": "J730 GOLD",
      "price": 1100
    },
    {
      "name": "A36 FULL",
      "price": 1750
    },
    {
      "name": "M30",
      "price": 1830
    },
    {
      "name": "A37 FULL",
      "price": 1750
    },
    {
      "name": "M36 FULL",
      "price": 2400
    },
    {
      "name": "A42 WF FULL",
      "price": 2550
    },
    {
      "name": "M51 WF FULL",
      "price": 1850
    },
    {
      "name": "A50",
      "price": 1830
    },
    {
      "name": "M52 WF FULL",
      "price": 1850
    },
    {
      "name": "A51 FULL",
      "price": 2300
    },
    {
      "name": "M54 WF FULL",
      "price": 1850
    },
    {
      "name": "A51 WF FULL",
      "price": 2250
    },
    {
      "name": "M55 5G WF FULL",
      "price": 1850
    }
  ],
  "Oppo": [
    {
      "name": "RENO14PRO",
      "price": 1009
    },
    {
      "name": "RENO 5 PRO",
      "price": 3149
    },
    {
      "name": "RENO14PRO",
      "price": 3149
    },
    {
      "name": "RENO8T",
      "price": 2189
    },
    {
      "name": "RENO 8T UNI.",
      "price": 2199
    },
    {
      "name": "RENO11 WF",
      "price": 3149
    },
    {
      "name": "RENO 13 5G WF",
      "price": 3749
    },
    {
      "name": "RENO 12 PRO 5G WF",
      "price": 3549
    },
    {
      "name": "RENO 7 PRO",
      "price": 3099
    },
    {
      "name": "RENO15 PRO",
      "price": 4949
    },
    {
      "name": "FIND X8PRO",
      "price": 4949
    },
    {
      "name": "FIND X9",
      "price": 4949
    },
    {
      "name": "FIND X9PRO",
      "price": 4949
    },
    {
      "name": "FIND X8",
      "price": 3349
    }
  ],
  "Apple": [
    {
      "name": "11",
      "price": 830
    },
    {
      "name": "11 PRO",
      "price": 1880
    },
    {
      "name": "11 PRO",
      "price": 1000
    },
    {
      "name": "11 PRO",
      "price": 1930
    },
    {
      "name": "13",
      "price": 1070
    },
    {
      "name": "11",
      "price": 840
    },
    {
      "name": "16E",
      "price": 3400
    },
    {
      "name": "13 PRO",
      "price": 3600
    },
    {
      "name": "14 PLUS",
      "price": 3550
    },
    {
      "name": "14 PRO MAX",
      "price": 3600
    },
    {
      "name": "12 PRO",
      "price": 1000
    },
    {
      "name": "15 PRO MAX",
      "price": 3600
    },
    {
      "name": "14",
      "price": 1070
    },
    {
      "name": "16",
      "price": 3650
    },
    {
      "name": "13 PRO MAX",
      "price": 3550
    },
    {
      "name": "15 PRO MAX",
      "price": 1400
    },
    {
      "name": "13",
      "price": 3130
    },
    {
      "name": "15 PLUS",
      "price": 1300
    },
    {
      "name": "16 PRO MAXX",
      "price": 4650
    },
    {
      "name": "11 PRO MAX",
      "price": 2380
    },
    {
      "name": "13 PRO",
      "price": 1200
    },
    {
      "name": "15 PLUS",
      "price": 3650
    },
    {
      "name": "13 PRO MAX",
      "price": 1400
    },
    {
      "name": "14 PRO",
      "price": 3000
    },
    {
      "name": "12 PRO",
      "price": 2480
    },
    {
      "name": "14 PRO",
      "price": 1400
    },
    {
      "name": "15 PRO MAX",
      "price": 3000
    },
    {
      "name": "12 PRO MAX",
      "price": 3180
    },
    {
      "name": "14 PLUS",
      "price": 1250
    },
    {
      "name": "16 PLUS",
      "price": 3750
    },
    {
      "name": "16 PLUS",
      "price": 3800
    },
    {
      "name": "16 PRO",
      "price": 4650
    },
    {
      "name": "15 PLUS",
      "price": 3650
    },
    {
      "name": "11 PRO MAX",
      "price": 1050
    },
    {
      "name": "12 PRO MAX",
      "price": 2980
    },
    {
      "name": "16 PRO MAXX",
      "price": 3980
    },
    {
      "name": "15 PRO",
      "price": 1300
    },
    {
      "name": "17 PRO MAX",
      "price": 6050
    },
    {
      "name": "17 PRO MAX",
      "price": 4350
    },
    {
      "name": "14 PRO MAX",
      "price": 1400
    },
    {
      "name": "16E",
      "price": 3100
    },
    {
      "name": "16 PRO",
      "price": 2270
    },
    {
      "name": "16 PLUS",
      "price": 1450
    },
    {
      "name": "14 PRO MAX",
      "price": 3000
    },
    {
      "name": "14",
      "price": 1120
    },
    {
      "name": "17 PRO MAX",
      "price": 2420
    },
    {
      "name": "15 PRO MAXX",
      "price": 1420
    },
    {
      "name": "16 PRO MAXX",
      "price": 2500
    },
    {
      "name": "13",
      "price": 3150
    },
    {
      "name": "16 PRO",
      "price": 2300
    },
    {
      "name": "16 PRO MAXX",
      "price": 2270
    },
    {
      "name": "14 PRO MAX",
      "price": 3050
    },
    {
      "name": "14 PRO MAXX",
      "price": 1270
    },
    {
      "name": "15 PRO MAX",
      "price": 3050
    },
    {
      "name": "14 PLUS",
      "price": 1270
    },
    {
      "name": "15",
      "price": 1250
    },
    {
      "name": "11 PRO",
      "price": 1830
    },
    {
      "name": "14 PRO",
      "price": 1270
    },
    {
      "name": "12 PRO MAX",
      "price": 1100
    },
    {
      "name": "14 PRO",
      "price": 2800
    },
    {
      "name": "16 PLUS",
      "price": 1480
    },
    {
      "name": "16",
      "price": 1400
    },
    {
      "name": "13 PRO MAX",
      "price": 3150
    },
    {
      "name": "16E",
      "price": 1380
    },
    {
      "name": "14",
      "price": 3150
    },
    {
      "name": "12 PRO MAXX",
      "price": 1120
    },
    {
      "name": "12 PRO",
      "price": 3050
    },
    {
      "name": "13 PRO",
      "price": 3550
    },
    {
      "name": "17 PRO MAX",
      "price": 2980
    },
    {
      "name": "12 PRO MAX",
      "price": 3500
    },
    {
      "name": "11 PRO MAX",
      "price": 2800
    },
    {
      "name": "15 PLUS",
      "price": 5150
    },
    {
      "name": "15 PRO",
      "price": 2800
    },
    {
      "name": "16 PRO MAXX",
      "price": 8550
    },
    {
      "name": "16 PLUS",
      "price": 3650
    },
    {
      "name": "16 PLUS",
      "price": 5700
    },
    {
      "name": "14 PLUS",
      "price": 3350
    },
    {
      "name": "16 PRO",
      "price": 4850
    },
    {
      "name": "15 PLUS",
      "price": 3500
    },
    {
      "name": "16 PRO MAXX",
      "price": 4000
    },
    {
      "name": "17 PRO MAX",
      "price": 9400
    },
    {
      "name": "15",
      "price": 2800
    },
    {
      "name": "16",
      "price": 2800
    },
    {
      "name": "11",
      "price": 1070
    },
    {
      "name": "13",
      "price": 1370
    },
    {
      "name": "12 PRO",
      "price": 1170
    },
    {
      "name": "11 PRO",
      "price": 1120
    },
    {
      "name": "12 PRO MAX",
      "price": 1670
    },
    {
      "name": "14 PRO MAX",
      "price": 1920
    },
    {
      "name": "14 PRO",
      "price": 1670
    },
    {
      "name": "13 PRO MAX",
      "price": 1720
    },
    {
      "name": "13 PRO",
      "price": 1520
    },
    {
      "name": "11 PRO MAX",
      "price": 1270
    },
    {
      "name": "14",
      "price": 1420
    },
    {
      "name": "15 PLUS",
      "price": 1770
    },
    {
      "name": "15 PRO MAX",
      "price": 1920
    },
    {
      "name": "15 PRO",
      "price": 1670
    },
    {
      "name": "14 PLUS",
      "price": 1670
    },
    {
      "name": "15",
      "price": 1670
    },
    {
      "name": "16",
      "price": 1670
    },
    {
      "name": "16 PLUS",
      "price": 1670
    },
    {
      "name": "16E",
      "price": 1520
    },
    {
      "name": "16 PRO MAXX",
      "price": 2270
    },
    {
      "name": "16 PRO",
      "price": 2270
    }
  ]
};

export default function ModelsPage(){
  return (
    <div className="overflow-x-hidden">
      <section className="bg-[#0B1220] text-white overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="text-xs font-black tracking-[0.2em] text-sky-400">COMPATIBLE MODELS</div>
          <h1 className="mt-3 text-[28px] min-[375px]:text-[34px] sm:text-[48px] font-black tracking-tight leading-none break-words">Model compatibility.<br/><span className="text-sky-400">Verified from posters.</span></h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">Based on real posters &amp; new premium display combos. Shown as compatibility information, not exhaustive inventory.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
          {Object.entries(MODELS).map(([brand, list])=>(
            <div key={brand} className="rounded-[20px] bg-white border border-slate-200 p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-slate-900 text-white grid place-items-center text-xs font-black">{brand[0]}</div>
                <div className="text-lg font-black text-slate-900">{brand}</div>
                <span className="ml-auto rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-xs font-bold text-sky-700">{list.length} models</span>
              </div>
              <div className="mt-4 grid gap-2">
                {list.map((m, idx)=>(
                  <div key={idx} className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                    <span className="text-sm font-semibold text-slate-800">{m.name}</span>
                    <span className="text-sm font-bold text-emerald-600">₹{m.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* NEW 8 DISPLAY COMBOS */}
        <div className="mt-8 sm:mt-10">
          <div className="text-xs font-black tracking-[0.2em] text-sky-600">NEW DISPLAY COMBOS</div>
          <h2 className="mt-2 text-[22px] sm:text-[28px] font-black tracking-tight text-[#0B1220]">Premium Display Combos — Model-wise</h2>
          <p className="mt-2 text-sm text-slate-600">Aapke diye 8 display images — har image ke niche uska product name aur details wahi rakha hai.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
            {DISPLAY_COMBOS.map((p)=>(
              <div key={p.slug} className="rounded-[20px] bg-white border border-slate-200 overflow-hidden hover:shadow-lg transition flex flex-col min-w-0">
                <div className="bg-white flex items-center justify-center overflow-hidden w-full min-h-[280px] sm:min-h-[360px] p-2 sm:p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.name} className="w-full h-auto max-h-[520px] object-contain block max-w-full" loading="lazy"/>
                </div>
                <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/50">
                  <div className="text-sm font-black text-[#0B1220] break-words">{p.name}</div>
                  <div className="mt-1 text-xs font-semibold text-sky-700 break-words">{p.title}</div>
                  <div className="mt-2 text-xs leading-relaxed text-slate-600 break-words">
                    <span className="font-bold text-slate-700">Models:</span> {p.models}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.features.map((f)=>(
                      <span key={f} className="rounded-full bg-white border border-slate-200 px-2.5 py-1 text-[10px] font-bold tracking-wide text-slate-600">{f}</span>
                    ))}
                  </div>
                  <div className="mt-2 text-[11px] font-bold text-slate-500">{p.brand} • Premium Quality Display</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/products/sancy-curve-oled.jpg" alt="Compatible models poster" className="w-full h-auto max-h-[300px] object-contain bg-white block max-w-full" loading="lazy"/>
          </div>
          <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col justify-center">
            <div className="text-sm font-black text-slate-900">Check your model?</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">Send your exact model number on WhatsApp — we’ll confirm availability instantly.</p>
            <Link href="/quote" className="mt-4 inline-flex rounded-full bg-[#0B1220] px-6 py-3 text-sm font-bold text-white w-fit">Ask on WhatsApp →</Link>
            <a href={`https://wa.me/${BUSINESS.phoneIntl}`} target="_blank" className="mt-3 inline-flex rounded-full border border-slate-200 px-6 py-2 text-xs font-bold">WhatsApp {BUSINESS.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
