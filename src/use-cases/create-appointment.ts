import { Appointment } from '../entities/appointment';
import { AppointmentsRepository } from '../repositories/appointments-repository';

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
  constructor(
    private appointmentsRepository: AppointmentsRepository
  ) {}

  async execute ({
    customer, 
    startsAt, 
    endsAt,
  }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    const overlappingAppointment = await this.appointmentsRepository.findOverlappingAppointment(
      startsAt,
      endsAt,
    );

    if (overlappingAppointment) {
      throw new Error('Another appointment overlaps this appointment dates');
    }
    
    const appointment = new Appointment({
      customer,
      startsAt,
      endsAt,
    });

    await this.appointmentsRepository.create(appointment);

    return appointment;
  }
}