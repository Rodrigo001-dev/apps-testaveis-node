import { areIntervalsOverlapping, parseISO } from 'date-fns';

import { Appointment } from "../../entities/appointment";
import { AppointmentsRepository } from "../appointments-repository";

export class InMemoryAppointmentRepository implements AppointmentsRepository {
  public items: Appointment[] = [];
  
  async create(appointment: Appointment): Promise<void> {
    this.items.push(appointment);
  }

  async findOverlappingAppointment(startsAt: Date, endsAt: Date): Promise<Appointment | null> {
    const overlappingAppointment = this.items.find(appointment => {
      // a função areIntervalsOverlapping vai retornar true caso os intervalos
      // que eu passar para ela conflitem ou false caso não conflitem
      return areIntervalsOverlapping(
        { start: startsAt, end: endsAt },
        { start: parseISO(appointment.startsAt), end: parseISO(appointment.endsAt) },
        { inclusive: true }
      )
    });

    if (!overlappingAppointment) {
      return null;
    }

    return overlappingAppointment;
  }
}