import { Appointment } from '../entities/appointment';

// utilizando o princípio de SOLID chamado inversão de dependência 
export interface AppointmentsRepository {
  create(appointment: Appointment): Promise<void>;
  // esse método vai receber uma data de inicio e uma data de terminio e vai
  // devolder um Appointment caso ele tenha encontrado um agendamento(appointment)
  // que conflite com a data que eu estou passando como parâmetro se não ele vai
  // retornar nulo
  findOverlappingAppointment(startAt: Date, endsAt: Date): Promise<Appointment | null>;
}