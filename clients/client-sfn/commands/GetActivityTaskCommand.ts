import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { GetActivityTaskInput, GetActivityTaskOutput } from "../models/models_0";
import {
  deserializeAws_json1_0GetActivityTaskCommand,
  serializeAws_json1_0GetActivityTaskCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetActivityTaskCommandInput = GetActivityTaskInput;
export type GetActivityTaskCommandOutput = GetActivityTaskOutput & __MetadataBearer;

export class GetActivityTaskCommand extends $Command<
  GetActivityTaskCommandInput,
  GetActivityTaskCommandOutput,
  SFNClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetActivityTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetActivityTaskCommandInput, GetActivityTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "GetActivityTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetActivityTaskInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetActivityTaskOutput.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetActivityTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetActivityTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetActivityTaskCommandOutput> {
    return deserializeAws_json1_0GetActivityTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
