import { SecurityHub } from "../SecurityHub";
import { SecurityHubClient } from "../SecurityHubClient";
import {
  DescribeProductsCommand,
  DescribeProductsCommandInput,
  DescribeProductsCommandOutput,
} from "../commands/DescribeProductsCommand";
import { SecurityHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: DescribeProductsCommandInput,
  ...args: any
): Promise<DescribeProductsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeProductsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SecurityHub,
  input: DescribeProductsCommandInput,
  ...args: any
): Promise<DescribeProductsCommandOutput> => {
  // @ts-ignore
  return await client.describeProducts(input, ...args);
};
export async function* describeProductsPaginate(
  config: SecurityHubPaginationConfiguration,
  input: DescribeProductsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeProductsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeProductsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecurityHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SecurityHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
