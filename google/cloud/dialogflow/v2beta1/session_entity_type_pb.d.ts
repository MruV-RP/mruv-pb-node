// package: google.cloud.dialogflow.v2beta1
// file: google/cloud/dialogflow/v2beta1/session_entity_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_cloud_dialogflow_v2beta1_entity_type_pb from "../../../../google/cloud/dialogflow/v2beta1/entity_type_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";

export class SessionEntityType extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEntityOverrideMode(): SessionEntityType.EntityOverrideModeMap[keyof SessionEntityType.EntityOverrideModeMap];
  setEntityOverrideMode(value: SessionEntityType.EntityOverrideModeMap[keyof SessionEntityType.EntityOverrideModeMap]): void;

  clearEntitiesList(): void;
  getEntitiesList(): Array<google_cloud_dialogflow_v2beta1_entity_type_pb.EntityType.Entity>;
  setEntitiesList(value: Array<google_cloud_dialogflow_v2beta1_entity_type_pb.EntityType.Entity>): void;
  addEntities(value?: google_cloud_dialogflow_v2beta1_entity_type_pb.EntityType.Entity, index?: number): google_cloud_dialogflow_v2beta1_entity_type_pb.EntityType.Entity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionEntityType.AsObject;
  static toObject(includeInstance: boolean, msg: SessionEntityType): SessionEntityType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SessionEntityType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionEntityType;
  static deserializeBinaryFromReader(message: SessionEntityType, reader: jspb.BinaryReader): SessionEntityType;
}

export namespace SessionEntityType {
  export type AsObject = {
    name: string,
    entityOverrideMode: SessionEntityType.EntityOverrideModeMap[keyof SessionEntityType.EntityOverrideModeMap],
    entitiesList: Array<google_cloud_dialogflow_v2beta1_entity_type_pb.EntityType.Entity.AsObject>,
  }

  export interface EntityOverrideModeMap {
    ENTITY_OVERRIDE_MODE_UNSPECIFIED: 0;
    ENTITY_OVERRIDE_MODE_OVERRIDE: 1;
    ENTITY_OVERRIDE_MODE_SUPPLEMENT: 2;
  }

  export const EntityOverrideMode: EntityOverrideModeMap;
}

export class ListSessionEntityTypesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSessionEntityTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSessionEntityTypesRequest): ListSessionEntityTypesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSessionEntityTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSessionEntityTypesRequest;
  static deserializeBinaryFromReader(message: ListSessionEntityTypesRequest, reader: jspb.BinaryReader): ListSessionEntityTypesRequest;
}

export namespace ListSessionEntityTypesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListSessionEntityTypesResponse extends jspb.Message {
  clearSessionEntityTypesList(): void;
  getSessionEntityTypesList(): Array<SessionEntityType>;
  setSessionEntityTypesList(value: Array<SessionEntityType>): void;
  addSessionEntityTypes(value?: SessionEntityType, index?: number): SessionEntityType;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSessionEntityTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSessionEntityTypesResponse): ListSessionEntityTypesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSessionEntityTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSessionEntityTypesResponse;
  static deserializeBinaryFromReader(message: ListSessionEntityTypesResponse, reader: jspb.BinaryReader): ListSessionEntityTypesResponse;
}

export namespace ListSessionEntityTypesResponse {
  export type AsObject = {
    sessionEntityTypesList: Array<SessionEntityType.AsObject>,
    nextPageToken: string,
  }
}

export class GetSessionEntityTypeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSessionEntityTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSessionEntityTypeRequest): GetSessionEntityTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSessionEntityTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSessionEntityTypeRequest;
  static deserializeBinaryFromReader(message: GetSessionEntityTypeRequest, reader: jspb.BinaryReader): GetSessionEntityTypeRequest;
}

export namespace GetSessionEntityTypeRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateSessionEntityTypeRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasSessionEntityType(): boolean;
  clearSessionEntityType(): void;
  getSessionEntityType(): SessionEntityType | undefined;
  setSessionEntityType(value?: SessionEntityType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSessionEntityTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSessionEntityTypeRequest): CreateSessionEntityTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSessionEntityTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSessionEntityTypeRequest;
  static deserializeBinaryFromReader(message: CreateSessionEntityTypeRequest, reader: jspb.BinaryReader): CreateSessionEntityTypeRequest;
}

export namespace CreateSessionEntityTypeRequest {
  export type AsObject = {
    parent: string,
    sessionEntityType?: SessionEntityType.AsObject,
  }
}

export class UpdateSessionEntityTypeRequest extends jspb.Message {
  hasSessionEntityType(): boolean;
  clearSessionEntityType(): void;
  getSessionEntityType(): SessionEntityType | undefined;
  setSessionEntityType(value?: SessionEntityType): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSessionEntityTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSessionEntityTypeRequest): UpdateSessionEntityTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateSessionEntityTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSessionEntityTypeRequest;
  static deserializeBinaryFromReader(message: UpdateSessionEntityTypeRequest, reader: jspb.BinaryReader): UpdateSessionEntityTypeRequest;
}

export namespace UpdateSessionEntityTypeRequest {
  export type AsObject = {
    sessionEntityType?: SessionEntityType.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteSessionEntityTypeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSessionEntityTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSessionEntityTypeRequest): DeleteSessionEntityTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSessionEntityTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSessionEntityTypeRequest;
  static deserializeBinaryFromReader(message: DeleteSessionEntityTypeRequest, reader: jspb.BinaryReader): DeleteSessionEntityTypeRequest;
}

export namespace DeleteSessionEntityTypeRequest {
  export type AsObject = {
    name: string,
  }
}
