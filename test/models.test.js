const model = require('../src/models/models');
var Projeto = model.Projeto;
var prj = new Projeto('1','Teste CI','Software','JavaScript','01/01/01','02/01/01');

test('Verifica o setter de uma propriedade', () => {
  expect(typeof prj.id).toBe("number");
  expect(prj.titulo && prj.description !== null).toBe(true);
  expect(prj.inicio < prj.fim).toBe(true);
});