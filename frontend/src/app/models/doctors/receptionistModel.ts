export class receptionistModel {
    id!: number;
    name!: string;
    email!: string;
    phone_number!: string;
    shift!: {
      id: number;
      name: string;
    };
  }