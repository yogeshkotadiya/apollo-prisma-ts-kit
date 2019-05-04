import { IContext } from "../../types";

const Query = {
  hello(_: any, args: any, ctx: IContext, info: any): string {
    return `Hello, ${args.input}`;
  },
};

export default Query;
