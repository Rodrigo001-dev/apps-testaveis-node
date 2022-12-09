import { Appointment } from '../entities/appointment';

// utilizando o princípio de SOLID chamado inversão de dependência 
export interface AppointmentsRepository {
  create(appointment: Appointment): Promise<void>;
  save(appointment: Appointment): Promise<void>;
}