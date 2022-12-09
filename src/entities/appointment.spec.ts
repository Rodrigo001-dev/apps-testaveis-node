import { expect, test } from "vitest";

import { Appointment } from './appointment';

test('create an appointment', () => {
  const startsAt = new Date();
  const endsAt = new Date();

  // a data de término(endsAt) está sendo jogada um(1) dia depois da data de 
  // inicio(startsAt), ou seja, o agendamento começaria hoje e terminaria amanhã
  endsAt.setDate(endsAt.getDate() + 1);

  const appointment = new Appointment({
    customer: 'John Doe',
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual('John Doe');
});

test('cannot create an appointment with end date before start date', () => {
  const startsAt = new Date();
  const endsAt = new Date();

  // a data de término(endsAt) está sendo jogada um(1) dia atrás da data de 
  // inicio(startsAt), ou seja, o agendamento começaria hoje e terminaria ontem
  endsAt.setDate(endsAt.getDate() - 1);

  expect(() => {
    return new Appointment({
      customer: 'John Doe',
      startsAt,
      endsAt,
    });
  }).toThrow();
});