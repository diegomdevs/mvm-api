import Client from 'src/entities/client.entity';

export default class Student extends Client {
  birthday: string;
  birthplace: string;
  municipality: string;
  state: string;
  liveWith: string;
}
