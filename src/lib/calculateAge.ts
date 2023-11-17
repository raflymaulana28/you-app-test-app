import moment from 'moment';

export default function calculateAge(birthDate: string) {
  const today = moment(); // Tanggal saat ini
  const birthMoment = moment(birthDate, 'YYYY-MM-DD'); // Tanggal lahir dalam format yang diinginkan

  const age = today.diff(birthMoment, 'years'); // Menghitung selisih dalam tahun

  return age;
}
