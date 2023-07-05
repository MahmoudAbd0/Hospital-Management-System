export class doctorModel {
    id!: number;
    name!: string;
    email!: string;
    phone_number!: string;
    department!: {
      id: number;
      name: string;
    };
    shift!: {
      id: number;
      name: string;
    };
  }