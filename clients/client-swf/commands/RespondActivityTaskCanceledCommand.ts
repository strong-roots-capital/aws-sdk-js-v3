import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { RespondActivityTaskCanceledInput } from "../models/models_0";
import {
  deserializeAws_json1_0RespondActivityTaskCanceledCommand,
  serializeAws_json1_0RespondActivityTaskCanceledCommand,
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

export type RespondActivityTaskCanceledCommandInput = RespondActivityTaskCanceledInput;
export type RespondActivityTaskCanceledCommandOutput = __MetadataBearer;

export class RespondActivityTaskCanceledCommand extends $Command<
  RespondActivityTaskCanceledCommandInput,
  RespondActivityTaskCanceledCommandOutput,
  SWFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RespondActivityTaskCanceledCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SWFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RespondActivityTaskCanceledCommandInput, RespondActivityTaskCanceledCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SWFClient";
    const commandName = "RespondActivityTaskCanceledCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RespondActivityTaskCanceledInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
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

  private serialize(input: RespondActivityTaskCanceledCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0RespondActivityTaskCanceledCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RespondActivityTaskCanceledCommandOutput> {
    return deserializeAws_json1_0RespondActivityTaskCanceledCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
