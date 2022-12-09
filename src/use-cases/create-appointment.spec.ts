import { describe, expect, it } from 'vitest';

import { CreateAppointment } from './create-appointment';
import { Appointment } from '../entities/appointment';

describe('Create Appointment', () => {
  it('should be able to create an appointment', () => {
    const createAppointment = new CreateAppointment();

    const startsAt = new Date();
    const endsAt = new Date();

    // a data de término(endsAt) está sendo jogada um(1) dia depois da data de 
    // inicio(startsAt), ou seja, o agendamento começaria hoje e terminaria amanhã
    endsAt.setDate(endsAt.getDate() + 1);

    expect(createAppointment.execute({
      customer: 'John Doe',
      startsAt,
      endsAt,
    })).resolves.toBeInstanceOf(Appointment);
  });
});