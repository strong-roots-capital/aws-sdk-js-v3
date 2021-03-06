import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { BatchCheckLayerAvailabilityRequest, BatchCheckLayerAvailabilityResponse } from "../models/models_0";
import {
  deserializeAws_json1_1BatchCheckLayerAvailabilityCommand,
  serializeAws_json1_1BatchCheckLayerAvailabilityCommand,
} from "../protocols/Aws_json1_1";
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

export type BatchCheckLayerAvailabilityCommandInput = BatchCheckLayerAvailabilityRequest;
export type BatchCheckLayerAvailabilityCommandOutput = BatchCheckLayerAvailabilityResponse & __MetadataBearer;

export class BatchCheckLayerAvailabilityCommand extends $Command<
  BatchCheckLayerAvailabilityCommandInput,
  BatchCheckLayerAvailabilityCommandOutput,
  ECRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchCheckLayerAvailabilityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchCheckLayerAvailabilityCommandInput, BatchCheckLayerAvailabilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "BatchCheckLayerAvailabilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchCheckLayerAvailabilityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchCheckLayerAvailabilityResponse.filterSensitiveLog,
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

  private serialize(input: BatchCheckLayerAvailabilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchCheckLayerAvailabilityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchCheckLayerAvailabilityCommandOutput> {
    return deserializeAws_json1_1BatchCheckLayerAvailabilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
