import { IUser } from '../interfaces/IUser';

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  public users: IUser[] = [];

  private constructor() {}

  public static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }
    return MyDatabaseClassic._instance;
  }

  public add(user: IUser): void {
    this.users.push(user);
  }

  public remove(index: number): void {
    this.users.splice(index, 1);
  }

  public show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
