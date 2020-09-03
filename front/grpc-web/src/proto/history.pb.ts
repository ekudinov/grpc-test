/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { GrpcMessage, RecursivePartial } from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for proto.HistoryRequest
 */
export class HistoryRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new HistoryRequest();
    HistoryRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: HistoryRequest) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: HistoryRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    HistoryRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: HistoryRequest,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of HistoryRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<HistoryRequest>) {
    _value = _value || {};
    HistoryRequest.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    HistoryRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): HistoryRequest.AsObject {
    return {};
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module HistoryRequest {
  /**
   * Standard JavaScript object representation for HistoryRequest
   */
  export interface AsObject {}
}

/**
 * Message implementation for proto.AddEventRequest
 */
export class AddEventRequest implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddEventRequest();
    AddEventRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddEventRequest) {
    _instance.event = _instance.event || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddEventRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.event = new Event();
          _reader.readMessage(
            _instance.event,
            Event.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    AddEventRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddEventRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.event) {
      _writer.writeMessage(
        1,
        _instance.event as any,
        Event.serializeBinaryToWriter
      );
    }
  }

  private _event?: Event;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddEventRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddEventRequest>) {
    _value = _value || {};
    this.event = _value.event ? new Event(_value.event) : undefined;
    AddEventRequest.refineValues(this);
  }
  get event(): Event | undefined {
    return this._event;
  }
  set event(value: Event | undefined) {
    this._event = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddEventRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddEventRequest.AsObject {
    return {
      event: this.event ? this.event.toObject() : undefined
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module AddEventRequest {
  /**
   * Standard JavaScript object representation for AddEventRequest
   */
  export interface AsObject {
    event?: Event.AsObject;
  }
}

/**
 * Message implementation for proto.AddEventResponse
 */
export class AddEventResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddEventResponse();
    AddEventResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddEventResponse) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddEventResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    AddEventResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddEventResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddEventResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddEventResponse>) {
    _value = _value || {};
    this.id = _value.id;
    AddEventResponse.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddEventResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddEventResponse.AsObject {
    return {
      id: this.id
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module AddEventResponse {
  /**
   * Standard JavaScript object representation for AddEventResponse
   */
  export interface AsObject {
    id?: string;
  }
}

/**
 * Message implementation for proto.Event
 */
export class Event implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Event();
    Event.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Event) {
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.a = _instance.a || 0;
    _instance.b = _instance.b || 0;
    _instance.result = _instance.result || 0;
    _instance.time = _instance.time || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Event, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.a = _reader.readInt32();
          break;
        case 4:
          _instance.b = _reader.readInt32();
          break;
        case 5:
          _instance.result = _reader.readInt32();
          break;
        case 6:
          _instance.time = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Event.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Event, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.a) {
      _writer.writeInt32(3, _instance.a);
    }
    if (_instance.b) {
      _writer.writeInt32(4, _instance.b);
    }
    if (_instance.result) {
      _writer.writeInt32(5, _instance.result);
    }
    if (_instance.time) {
      _writer.writeString(6, _instance.time);
    }
  }

  private _id?: string;
  private _name?: string;
  private _a?: number;
  private _b?: number;
  private _result?: number;
  private _time?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Event to deeply clone from
   */
  constructor(_value?: RecursivePartial<Event>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.a = _value.a;
    this.b = _value.b;
    this.result = _value.result;
    this.time = _value.time;
    Event.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get a(): number | undefined {
    return this._a;
  }
  set a(value: number | undefined) {
    this._a = value;
  }
  get b(): number | undefined {
    return this._b;
  }
  set b(value: number | undefined) {
    this._b = value;
  }
  get result(): number | undefined {
    return this._result;
  }
  set result(value: number | undefined) {
    this._result = value;
  }
  get time(): string | undefined {
    return this._time;
  }
  set time(value: string | undefined) {
    this._time = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Event.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Event.AsObject {
    return {
      id: this.id,
      name: this.name,
      a: this.a,
      b: this.b,
      result: this.result,
      time: this.time
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module Event {
  /**
   * Standard JavaScript object representation for Event
   */
  export interface AsObject {
    id?: string;
    name?: string;
    a?: number;
    b?: number;
    result?: number;
    time?: string;
  }
}

/**
 * Message implementation for proto.GetAllResponse
 */
export class GetAllResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetAllResponse();
    GetAllResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetAllResponse) {
    _instance.events = _instance.events || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetAllResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Event();
          _reader.readMessage(
            messageInitializer1,
            Event.deserializeBinaryFromReader
          );
          (_instance.events = _instance.events || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    GetAllResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetAllResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.events && _instance.events.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.events as any,
        Event.serializeBinaryToWriter
      );
    }
  }

  private _events?: Event[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetAllResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetAllResponse>) {
    _value = _value || {};
    this.events = (_value.events || []).map(m => new Event(m));
    GetAllResponse.refineValues(this);
  }
  get events(): Event[] | undefined {
    return this._events;
  }
  set events(value: Event[] | undefined) {
    this._events = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetAllResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetAllResponse.AsObject {
    return {
      events: (this.events || []).map(m => m.toObject())
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module GetAllResponse {
  /**
   * Standard JavaScript object representation for GetAllResponse
   */
  export interface AsObject {
    events?: Event.AsObject[];
  }
}

/**
 * Message implementation for proto.ClearResponse
 */
export class ClearResponse implements GrpcMessage {
  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ClearResponse();
    ClearResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ClearResponse) {
    _instance.count = _instance.count || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ClearResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.count = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ClearResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ClearResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.count) {
      _writer.writeInt32(1, _instance.count);
    }
  }

  private _count?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ClearResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ClearResponse>) {
    _value = _value || {};
    this.count = _value.count;
    ClearResponse.refineValues(this);
  }
  get count(): number | undefined {
    return this._count;
  }
  set count(value: number | undefined) {
    this._count = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ClearResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ClearResponse.AsObject {
    return {
      count: this.count
    };
  }

  /**
   * JSON serializer
   * Only intended to be used by `JSON.stringify` function. If you want to cast message to standard JavaScript object, use `toObject()` instead
   */
  toJSON() {
    return this.toObject();
  }
}
export module ClearResponse {
  /**
   * Standard JavaScript object representation for ClearResponse
   */
  export interface AsObject {
    count?: number;
  }
}
