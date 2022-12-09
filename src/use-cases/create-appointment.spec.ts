import { describe, expect, it } from 'vitest';

import { CreateAppointment } from './create-appointment';
import { Appointment } from '../entities/appointment';
import { getFutureDate } from '../tests/utils/get-future-date';
import { InMemoryAppointmentsRepository } from '../repositories/in-memory/in-memory-appointments-repository';

describe('Create Appointment', () => {
  it('should be able to create an appointment', () => {
    const appointmentsRepository = new InMemoryAppointmentsRepository();
    const createAppointment = new CreateAppointment(
      appointmentsRepository
    );

    const startsAt = getFutureDate('2022-08-10');
    const endsAt = getFutureDate('2022-08-11');

    // startsAt.setDate(startsAt.getDate() + 1);
    // // a data de término(endsAt) está sendo jogada dois(2) dias depois da data de 
    // // inicio(startsAt), ou seja, o agendamento começaria hoje e terminaria amanhã
    // endsAt.setDate(endsAt.getDate() + 2);

    expect(createAppointment.execute({
      customer: 'John Doe',
      startsAt,
      endsAt,
    })).resolves.toBeInstanceOf(Appointment);
  });

  it('should not be able to create an appointment with overlapping dates', async () => {
    const appointmentsRepository = new InMemoryAppointmentsRepository();
    const createAppointment = new CreateAppointment(
      appointmentsRepository
    );

    const startsAt = getFutureDate('2022-08-10');
    const endsAt = getFutureDate('2022-08-15');

    // startsAt.setDate(startsAt.getDate() + 1);
    // // a data de término(endsAt) está sendo jogada dois(2) dias depois da data de 
    // // inicio(startsAt), ou seja, o agendamento começaria hoje e terminaria amanhã
    // endsAt.setDate(endsAt.getDate() + 2);

    await createAppointment.execute({
      customer: 'John Doe',
      startsAt,
      endsAt,
    })

    expect(createAppointment.execute({
      customer: 'John Doe',
      startsAt: getFutureDate('2022-08-14'),
      endsAt: getFutureDate('2022-08-18'),
    })).rejects.toBeInstanceOf(Error);

    expect(createAppointment.execute({
      customer: 'John Doe',
      startsAt: getFutureDate('2022-08-08'),
      endsAt: getFutureDate('2022-08-12'),
    })).rejects.toBeInstanceOf(Error);

    expect(createAppointment.execute({
      customer: 'John Doe',
      startsAt: getFutureDate('2022-08-08'),
      endsAt: getFutureDate('2022-08-17'),
    })).rejects.toBeInstanceOf(Error);

    expect(createAppointment.execute({
      customer: 'John Doe',
      startsAt: getFutureDate('2022-08-11'),
      endsAt: getFutureDate('2022-08-12'),
    })).rejects.toBeInstanceOf(Error);
  });
});