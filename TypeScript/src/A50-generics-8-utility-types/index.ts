// Record -> Utilitário para criar tipos de objetos com chaves e valores específicos
// Aqui definimos que a chave será string e o valor das chaves pode ser string ou number
const obj1: Record<string, string | number> = {
  'user-name': 'João',
  'user-last-name': 'Alves',
  'user-age': 21,
};

console.log(obj1);

// tipo com todos valores os valores opcional
type PersonProtocol = {
  username?: string;
  lastName?: string;
  age?: number;
};

// Required -> Serve para definir que os valores de um objeto será todos obrigatórios
type PersonRequired = Required<PersonProtocol>;

// Partial -> Ao contrário de Required o utilitário Partial defino todos os valore opcionais
type PersonPartial = Partial<PersonRequired>;

// Readonly -> Defini que os valores de um objeto nunca mudarão
type PersonReadonly = Readonly<PersonRequired>;
const objReadonly: PersonReadonly = {
  username: 'Maria',
  lastName: 'Santos',
  age: 21,
};
console.log(objReadonly);

// objReadonly.username = 'Mudei'; // Error: Cannot assign to 'username' because it is a read-only property.

// Pick -> Extrai chaves de um outro objeto que podemos usar como referencia
type PersonPick = Pick<PersonRequired, 'username' | 'lastName'>;

const obj2: PersonPick = {
  username: 'Luiz',
  lastName: 'Miranda',
  // age: 30, // Error: Object literal may only specify known properties, and 'age' does not exist in type 'PersonPick'.
};
console.log(obj2);

//=========================================  Extract e Exclude  ===========================================================
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

// Pega os tipos do ABC que está sendo repetidos no CDE nesse caso somente o C, sendo assim fica dessa forma:
type TipoExclude = Exclude<ABC, CDE>; // type TipoExclude = "A" | "B"

// Nesse caso ele pega os tipos que estão sendo repetidos
type TipoExtract = Extract<ABC, CDE>; // type TipoExtract = "C"

//======================================= Utilizando PICK e EXCLUDE  ======================================================

type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: '109827309qw8d09as8d0',
  name: 'Jones dev',
  age: 21,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { id: _id, ...accountData };
}

const accountAPi = mapAccount(accountMongo);
console.log(accountAPi);
