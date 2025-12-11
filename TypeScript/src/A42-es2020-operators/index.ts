// Encadeamento opcional e Operador de coalescência nula (?) | (??)
export type Document = {
  title: string;
  text: string;
  data?: Date | number | string;
};

const document: Document = {
  title: 'O título',
  text: 'O text',
  data: new Date().toLocaleString('pt-BR'),
};

const document2: Document = {
  title: 'O título',
  text: 'O text',
};

console.log(document);
console.log(document2.data?.toLocaleString() ?? 'A data não existe');
