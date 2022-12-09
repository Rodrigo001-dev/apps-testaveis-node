// essa interface vai anotar quais são as propriedades que cada agendamento vai ter
export interface AppointmentProps {
  customer: string;
  startsAt: Date;
  endsAt: Date
}

// appointment = agendamento
export class Appointment {
  private props: AppointmentProps;

  // os getters(get) e setters(set) são portas de entrada e saída para a nossa
  // entidade, eles conseguem proteger os nossos dados, é possível através dos
  // getters e setters estipular por exemplo quais são os atributos deesa classe
  // que queremos permitir acesso externo
  get customer () {
    return this.props.customer;
  }

  get startsAt () {
    return this.props.customer;
  }

  get endsAt () {
    return this.props.customer;
  }

  constructor(props: AppointmentProps) {
    const { startsAt, endsAt } = props;

    // se a data de inicio for menor ou igual que a data atual(agora)
    if (startsAt <= new Date()) {
      throw new Error('Invalid start date');
    }

    // se a data de término for menor ou igual a data de inicio
    if (endsAt <= startsAt) {
      throw new Error('Invalid end date');
    }
    
    this.props = props;
  }
}