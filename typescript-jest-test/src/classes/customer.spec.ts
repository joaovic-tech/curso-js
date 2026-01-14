import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('João', 'Alves', '111.111.111-11');
    expect(sut).toHaveProperty('firstName', 'João');
    expect(sut).toHaveProperty('lastName', 'Alves');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('João', 'Alves', '111.111.111-11');
    expect(sut.getName()).toBe('João Alves');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('joaovic-tech', '12.345.678/0001-90');
    expect(sut).toHaveProperty('name', 'joaovic-tech');
    expect(sut).toHaveProperty('cnpj', '12.345.678/0001-90');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('joaovic-tech', '12.345.678/0001-90');
    expect(sut.getName()).toBe('joaovic-tech');
    expect(sut.getIDN()).toBe('12.345.678/0001-90');
  });
});
