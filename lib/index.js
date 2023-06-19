"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatNumber = (num, fixed = 0, shorten = false) => {
    if (num === undefined || num === '') {
        return '0';
    }
    const parsedNum = typeof num === 'string' ? parseInt(num) : num;
    if (!shorten) {
        return parsedNum.toLocaleString(undefined, {
            minimumFractionDigits: fixed,
            maximumFractionDigits: fixed,
        });
    }
    else {
        const suffixes = ['', 'K', 'M', 'B', 'T'];
        let suffixIndex = 0;
        let formattedNum = parsedNum;
        while (formattedNum >= 1000 && suffixIndex < suffixes.length - 1) {
            formattedNum /= 1000;
            suffixIndex++;
        }
        return formattedNum.toFixed(fixed) + suffixes[suffixIndex];
    }
};
exports.default = formatNumber;
