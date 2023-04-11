import { Transform } from "stream";

import { rotEncode, rotDecode } from "./rot.js";

class EncryptTransform extends Transform {
  constructor(shift, action) {
    super();
    this.shift = shift;
    this.action = action;
  }

  _transform(chunk, _enc, done) {
    let rot = "";

    switch (this.action) {
      case "encode":
        rot = rotEncode(chunk.toString("utf8"), this.shift);
        break;
      case "decode":
        rot = rotDecode(chunk.toString("utf8"), this.shift);
        break;
      default:
        process.stderr.write("✘ Erorr" + ' "Action not found :("\n');
        process.exit(1);
    }

    this.push(rot);
    done();
  }
}

export default EncryptTransform;