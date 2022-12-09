import { setYear, parseISO } from 'date-fns';

/*
  * Recives "2022-08-10" and retuns "2023-08-10"
*/ 
export function getFutureDate(date: string): Date {
  // o parseISO converte um date de string para um objeto date
  // o pegando o ano atual(Date().getFullYear()) e acrescentando 1 
  return setYear(parseISO(date), new Date().getFullYear() + 1);
}