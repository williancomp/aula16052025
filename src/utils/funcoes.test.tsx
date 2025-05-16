import { multiplica } from "./funcoes";

describe("Módulo de Multiplicacao", () => {
  test("Multiplica 2 * 2 é igual a 4", () => {
    expect(multiplica(2, 2)).toBe(4);
  });
  test("Multiplica 2 * 3 é igual a 6", () => {
    expect(multiplica(2, 3)).toBe(6);
  });
  test("Multiplica 2 * 4 é igual a 8", () => {
    expect(multiplica(2, 4)).toBe(8);
  });
});
