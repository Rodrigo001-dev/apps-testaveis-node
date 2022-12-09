import { Appointment } from '../entities/appointment';

// todo caso de uso tem uma entrada(Request)
interface CreateAppointmentRequest {
  // para criar um nodo agendamento(appointment) eu predico dos dados:
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

// e uma saída(Response)
// no final, quando eu terminar de criar um agendamento(appointment) eu vou
// devolver um Appointment
type CreateAppointmentResponse = Appointment;

export class CreateAppointment {
  async execute ({
    customer, 
    startsAt, 
    endsAt,
  }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    const appointment = new Appointment({
      customer,
      startsAt,
      endsAt,
    });

    return appointment;
  }
}