import Config from "./types";

const defaultConfig: Config = {
  fixed: 0,
  decimalSeparator: ',',
  shorten: false,
};

const formatNumber = (
  num: number | string | undefined,
  config = defaultConfig
) => {
  if (num === undefined || num === '') {
    return '0';
  }

  const {fixed, shorten, decimalSeparator} = config;

  const parsedNum = typeof num === 'string' ? parseInt(num) : num;

  if (!shorten) {
    return parsedNum.toFixed(fixed).replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${decimalSeparator}`);
  } else {
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

export default formatNumber;
