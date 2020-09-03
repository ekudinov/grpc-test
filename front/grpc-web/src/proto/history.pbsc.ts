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
import * as thisProto from './history.pb';
import { GRPC_HISTORY_CLIENT_SETTINGS } from './history.pbconf';
/**
 * Service client implementation for proto.History
 */
@Injectable({
  providedIn: 'root'
})
export class HistoryClient {
  private client: GrpcClient;

  constructor(
    @Optional()
    @Inject(GRPC_HISTORY_CLIENT_SETTINGS)
    settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('proto.History', settings);
  }

  /**
   * Unary RPC for /proto.History/GetAll
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetAllResponse>
   */
  getAll(
    requestData: thisProto.HistoryRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.GetAllResponse> {
    return this.getAll$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /proto.History/GetAll
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.GetAllResponse>>
   */
  getAll$eventStream(
    requestData: thisProto.HistoryRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.GetAllResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/proto.History/GetAll',
      requestData,
      requestMetadata,
      requestClass: thisProto.HistoryRequest,
      responseClass: thisProto.GetAllResponse
    });
  }

  /**
   * Unary RPC for /proto.History/Clear
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ClearResponse>
   */
  clear(
    requestData: thisProto.HistoryRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.ClearResponse> {
    return this.clear$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /proto.History/Clear
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.ClearResponse>>
   */
  clear$eventStream(
    requestData: thisProto.HistoryRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.ClearResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/proto.History/Clear',
      requestData,
      requestMetadata,
      requestClass: thisProto.HistoryRequest,
      responseClass: thisProto.ClearResponse
    });
  }

  /**
   * Unary RPC for /proto.History/AddEvent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.AddEventResponse>
   */
  addEvent(
    requestData: thisProto.AddEventRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.AddEventResponse> {
    return this.addEvent$eventStream(requestData, requestMetadata).pipe(
      throwStatusErrors(),
      takeMessages()
    );
  }

  /**
   * Unary RPC for /proto.History/AddEvent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<GrpcEvent<thisProto.AddEventResponse>>
   */
  addEvent$eventStream(
    requestData: thisProto.AddEventRequest,
    requestMetadata: Metadata = {}
  ): Observable<GrpcEvent<thisProto.AddEventResponse>> {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/proto.History/AddEvent',
      requestData,
      requestMetadata,
      requestClass: thisProto.AddEventRequest,
      responseClass: thisProto.AddEventResponse
    });
  }
}
