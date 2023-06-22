"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultConfig = {
    fixed: 0,
    decimalSeparator: ',',
    shorten: false,
};
const formatNumber = (num, config = defaultConfig) => {
    if (!num || num.toString().trim() === '') {
        return '0';
    }
    const { fixed, shorten, decimalSeparator = ',' } = config;
    const parsedNum = typeof num === 'string' ? Number(num) : num;
    if (!shorten) {
        const formattedNum = parsedNum.toLocaleString('en-US', {
            minimumFractionDigits: fixed,
            maximumFractionDigits: fixed,
            useGrouping: true,
        });
        const path = formattedNum.split('.');
        const separator = decimalSeparator === ',' ? '.' : ',';
        const intPath = path[0].split(',').join(decimalSeparator);
        const doublePath = path[1] || '';
        if (doublePath) {
            return intPath + separator + doublePath;
        }
        return intPath;
    }
    else {
        const suffixes = ['', 'K', 'M', 'B', 'T'];
        let suffixIndex = 0;
        let formattedNum = parsedNum;
        while (formattedNum >= 1000 && suffixIndex < suffixes.length - 1) {
            formattedNum /= 1000;
            suffixIndex++;
        }
        return (formattedNum.toFixed(fixed).replace('.', decimalSeparator) +
            suffixes[suffixIndex]);
    }
};
exports.default = formatNumber;
