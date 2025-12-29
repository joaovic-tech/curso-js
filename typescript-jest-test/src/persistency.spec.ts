describe('Testando alguma coisa usando (IT)', () => {
  it('should return one', () => {
    const number = 1;
    expect(number).toBe(1);
  });
});

describe('Testando alguma coisa usando (TEST)', () => {
  test('should return João', () => {
    const name = 'João';
    expect(name).toBe('João');
  });
});
