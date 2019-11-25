import { _OperationList } from "./_OperationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    operations: {
      shape: _OperationList
    }
  }
};