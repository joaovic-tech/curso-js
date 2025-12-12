/**
 * Singleton - GoF -> Criação de uma classe que tenha apenas uma única instância e
 * fornece um ponto de acesso global para ela
 *
 * Factory Method -> Método dentro da classe que cria um novo objeto da propria classe (linha 17-23)
 */

export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando a mesma database: Database já existente');
      return Database.database;
    }

    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', 'a09sd8a09sd8');
db1.connect();

console.log('_'.repeat(50));

const db2 = Database.getDatabase(
  'https:123.123.22:8080',
  'admin',
  'a09sd8a09sd8',
);
db1.connect();

console.log(db1 === db2);
