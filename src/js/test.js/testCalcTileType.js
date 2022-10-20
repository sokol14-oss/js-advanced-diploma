import { calcTileType } from "../utils";
test('Проверка поля top-left', () => {
    expect(calcTileType(0, 8)).toBe("top-left");
  });

  test('Проверка поля top-right', () => {
    expect(calcTileType(7, 8)).toBe("top-right");
  });

  test('Проверка поля top', () => {
    expect(calcTileType(2, 8)).toBe("top");
  });
  test('Проверка поля left', () => {
    expect(calcTileType(8, 8)).toBe("left");
  });
  test('Проверка поля right', () => {
    expect(calcTileType(15, 8)).toBe("right");
  });
  test('Проверка поля bottom-left', () => {
    expect(calcTileType(56, 8)).toBe("bottom-left");
  });
  test('Проверка поля bottom', () => {
    expect(calcTileType(60, 8)).toBe("bottom");
  });
  test('Проверка поля bottom-right', () => {
    expect(calcTileType(63, 8)).toBe("bottom-right");
  });
  

  
  
  
  