import Person from 'src/entities/person.entity';

export default class User extends Person {
  email: string;
  password: string;
}
