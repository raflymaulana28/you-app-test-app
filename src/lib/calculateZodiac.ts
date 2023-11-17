import moment from 'moment';

interface ZodiacData {
  [key: string]: {
    symbol: string;
    dateMin: string;
    dateMax: string;
  };
}

const zodiacData: ZodiacData = {
  aries: {
    symbol: '♈',
    dateMin: '2000-03-21',
    dateMax: '2000-04-20',
  },
  taurus: {
    symbol: '♉',
    dateMin: '2000-04-21',
    dateMax: '2000-05-21',
  },
  gemini: {
    symbol: '♊',
    dateMin: '2000-05-22',
    dateMax: '2000-06-21',
  },
  cancer: {
    symbol: '♋',
    dateMin: '2000-06-22',
    dateMax: '2000-07-22',
  },
  leo: {
    symbol: '♌',
    dateMin: '2000-07-23',
    dateMax: '2000-08-22',
  },
  virgo: {
    symbol: '♍',
    dateMin: '2000-08-23',
    dateMax: '2000-09-23',
  },
  libra: {
    symbol: '♎',
    dateMin: '2000-09-24',
    dateMax: '2000-10-23',
  },
  scorpio: {
    symbol: '♏',
    dateMin: '2000-10-24',
    dateMax: '2000-11-22',
  },
  sagittarius: {
    symbol: '♐',
    dateMin: '2000-11-23',
    dateMax: '2000-12-21',
  },
  capricorn: {
    symbol: '♑',
    dateMin: '2000-12-22',
    dateMax: '2000-01-20',
  },
  aquarius: {
    symbol: '♒',
    dateMin: '2000-01-21',
    dateMax: '2000-02-19',
  },
  pisces: {
    symbol: '♓',
    dateMin: '2000-02-20',
    dateMax: '2000-03-20',
  },
};
const calculateChineseZodiac = (birthYear: number) => {
  const shioList = [
    'Tikus',
    'Kerbau',
    'Harimau',
    'Kelinci',
    'Naga',
    'Ular',
    'Kuda',
    'Kambing',
    'Monyet',
    'Ayam',
    'Anjing',
    'Babi',
  ];

  const baseYear = 1900; // Tahun pertama dalam siklus shio
  const cycleLength = 12; // Panjang siklus shio

  const shioIndex = (birthYear - baseYear) % cycleLength;
  return shioList[shioIndex];
};
const calculateZodiac = (date: string, isChineseZodiac?: boolean) => {
  if (isChineseZodiac) {
    return calculateChineseZodiac(Number(moment(date).format('YYYY')));
  }
  const currentYear = moment().year();
  const formattedDate = moment(date).year(currentYear);
  for (const zodiac in zodiacData) {
    const { dateMin, dateMax } = zodiacData[zodiac];
    const minDate = moment(new Date(dateMin)).year(currentYear);
    const maxDate = moment(new Date(dateMax)).year(currentYear);

    if (formattedDate.isBetween(minDate, maxDate, null, '[]')) {
      return zodiac;
    }
  }
  return 'Unknown Zodiac';
};

export default calculateZodiac;
