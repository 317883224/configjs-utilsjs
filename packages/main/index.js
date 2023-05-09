/*
 * @FileName: index.js
 * @Author: FYR
 * @Date: 2022-05-12 10:34:59
 * @LastEditors: FYR
 * @LastEditTime: 2023-04-21 15:38:42
 * @Description: 主要方法的入口
 */
'use strict';

import appendLink from './appendLink/index.js';
import appendScript from './appendScript/index.js';
import capitalize from './capitalize/index.js';
import compareVersion from './compareVersion/index.js';
import formatRound from './formatRound/index.js';
import formatThousands from './formatThousands/index.js';
import formatTimes from './formatTimes/index.js';
import generateDateShortcuts from './generateDateShortcuts/index.js';
import generateDateTimes from './generateDateTimes/index.js';
import generateRandomString from './generateRandomString/index.js';
import setUnicode from './setUnicode/index.js';
import getUnicode from './getUnicode/index.js';
import moneyUnitConversion from './moneyUnitConversion/index.js';

const formatMoney = formatThousands;

export {
    appendLink,
    appendScript,
    capitalize,
    compareVersion,
    formatRound,
    formatMoney,
    formatThousands,
    formatTimes,
    generateDateShortcuts,
    generateDateTimes,
    generateRandomString,
    setUnicode,
    getUnicode,
    moneyUnitConversion
};
