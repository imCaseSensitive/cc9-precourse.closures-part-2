describe("gameGenerator", () => {
  it("should be there", () => {
    expect(gameGenerator).toBeDefined();
    expect(typeof gameGenerator).toBe("function");
  });

  it("should generate some games!", () => {
    const game = gameGenerator(4);
    expect(typeof game).toBe("object");
  });

  it("should have just one winning number", () => {
    const bound = 4;
    const game = gameGenerator(bound);
    const number = [];
    for (let i = 0; i <= bound; i++) {
      if (game.guess(i)) {
        number.push(i);
      }
    }
    expect(number.length).toBe(1);
    expect(number[0]).toBe(game.giveUp());
  });

  it("should have a reset method", () => {
    expect(gameGenerator().reset).toBeDefined();
    expect(typeof(gameGenerator().reset)).toBe("function");
  });

  it("giveUp method should reset the value for answer", () => {
    const game = gameGenerator(4);
    const previousAnswer = game.answer;
    expect(game.giveUp()).not.toBe(game.giveUp());
  });
});

describe("accountGenerator", () => {
  it("should be there", () => {
    expect(accountGenerator).toBeDefined();
    expect(typeof accountGenerator).toBe("function");
  });

  it("should a have a getBalance function", () => {
    expect(typeof (accountGenerator().getBalance)).toBe("function");
  });

  it("getBalance should return the initial balance", () => {
    const account = accountGenerator(100);
    expect(account.getBalance()).toBe(100);
  });

  it("the withdraw function should return an object", () => {
    const account = accountGenerator(100);
    expect(typeof (account.withdraw())).toBe("object");
  });
});
