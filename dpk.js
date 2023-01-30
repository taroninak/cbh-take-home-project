const crypto = require("crypto");

const DEFAULT_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const DEFAULT_EVENT = {
  partitionKey: DEFAULT_PARTITION_KEY
};

/* Refactored One */
exports.deterministicPartitionKey = (event =  DEFAULT_EVENT) => {
  let candidate = event.partitionKey;

  if (!candidate) {
    const data = JSON.stringify(event);
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

 if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
   return crypto.createHash("sha3-512").update(candidate).digest("hex")
 }

 return candidate;
};

exports.DEFAULT_PARTITION_KEY = DEFAULT_PARTITION_KEY;


/* Original one
exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};

 */
