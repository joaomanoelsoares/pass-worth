const passGenCore = require('.');

test('deve gerar senhas com 20 caracteres', () => {
  const password = passGenCore.generatePassword();
  expect(password.length).toBe(20);
});

test('deve conter números', () => {
    const password = passGenCore.generatePassword();
    expect(/[0-9]/g.test(password)).toBe(true);
    });

    test('não deve conter caracteres ambíguos', () => {
        const password = passGenCore.generatePassword();
        expect(/[ilLI|`oO0]/g.test(password)).toBe(false);
        });

        test('não deve conter espaços em branco', () => {
            const password = passGenCore.generatePassword();
            expect(/\s/g.test(password)).toBe(false);
            });

       