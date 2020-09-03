/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcClientSettings,
  GrpcEvent
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './calculator.pb';
import { GRPC_CALCULATOR_CLIENT_SETTINGS } from './calculator.pbconf';
/**
 * Service client implementation for proto.Calculator
 */
@Injectable({
  providedIn: 'root'
})
export class CalculatorClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_CALCULATOR_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('proto.Calculator', settings);
  }

  /**
   * Unary RPC for /proto.Calculator/Add
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  add(
    requestData: thisProto.Request,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.Response> {
    return this.add$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /proto.Calculator/Add
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.Response>>
   */
  add$eventStream(
    requestData: thisProto.Request,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.Response>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/proto.Calculator/Add',
      requestData,
      requestMetadata,
      requestClass: thisProto.Request,
      responseClass: thisProto.Response
    });
  }

  /**
   * Unary RPC for /proto.Calculator/Sub
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Response>
   */
  sub(
    requestData: thisProto.Request,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.Response> {
    return this.sub$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /proto.Calculator/Sub
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.Response>>
   */
  sub$eventStream(
    requestData: thisProto.Request,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.Response>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/proto.Calculator/Sub',
      requestData,
      requestMetadata,
      requestClass: thisProto.Request,
      responseClass: thisProto.Response
    });
  }
}
