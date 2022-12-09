import { expect, test } from "vitest";

import { Appointment } from './appointment';
import { getFutureDate } from '../tests/utils/get-future-date';

test('create an appointment', () => {
  const startsAt = getFutureDate('2022-08-10');
  const endsAt = getFutureDate('2022-08-11');

  // startsAt.setDate(startsAt.getDate() + 1);
  // // a data de término(endsAt) está sendo jogada dois(2) dias depois da data de 
  // // inicio(startsAt), ou seja, o agendamento começaria hoje e terminaria amanhã
  // endsAt.setDate(endsAt.getDate() + 2);

  const appointment = new Appointment({
    customer: 'John Doe',
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual('John Doe');
});

test('cannot create an appointment with end date before start date', () => {
  const startsAt = getFutureDate('2022-08-10');
  const endsAt = getFutureDate('2022-08-09');

  // startsAt.setDate(startsAt.getDate() + 2);
  // // a data de término(endsAt) está sendo jogada um(1) dia atrás da data de 
  // // inicio(startsAt), ou seja, o agendamento começaria hoje e terminaria ontem
  // endsAt.setDate(endsAt.getDate() + 1);

  expect(() => {
    return new Appointment({
      customer: 'John Doe',
      startsAt,
      endsAt,
    });
  }).toThrow();
});

test('cannot create an appointment with start date before now', () => {
  const startsAt = new Date();
  const endsAt = new Date();

  // a data de inicio(startsAt) está sendo jogada um(1) dia atrás da data atual
  // , ou seja, o agendamento começaria ontem
  startsAt.setDate(startsAt.getDate() - 1)
  endsAt.setDate(endsAt.getDate() + 3);

  expect(() => {
    return new Appointment({
      customer: 'John Doe',
      startsAt,
      endsAt,
    });
  }).toThrow();
});