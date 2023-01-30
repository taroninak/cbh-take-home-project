const { deterministicPartitionKey, DEFAULT_PARTITION_KEY } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe(DEFAULT_PARTITION_KEY);
  });

  it("Returns event partitionKey if provided", () => {
    const event = { partitionKey: "key" };
    const result = deterministicPartitionKey(event);
    expect(result).toBe( "key");
  });

  it("Returns SHA3-512 hash of JSON stringified event if partitionKey not provided", () => {
    const event = { some: "data" };
    const result = deterministicPartitionKey(event);
    expect(result.length).toBe(  128);
  });

  it("Returns JSON stringified candidate if candidate is not a string", () => {
    const event = { partitionKey: 123 };
    const result = deterministicPartitionKey(event);
    expect(result).toBe( "123");
  });

  it("Returns SHA3-512 hash of candidate if it's length is greater than MAX_PARTITION_KEY_LENGTH", () => {
    const candidate = "a".repeat(300);
    const result = deterministicPartitionKey({ partitionKey: candidate });
    expect(result.length).toBe(  128);
  });
});
