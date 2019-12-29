// package: google.devtools.resultstore.v2
// file: google/devtools/resultstore/v2/resultstore_file_download.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";

export class GetFileRequest extends jspb.Message {
  getUri(): string;
  setUri(value: string): void;

  getReadOffset(): number;
  setReadOffset(value: number): void;

  getReadLimit(): number;
  setReadLimit(value: number): void;

  getArchiveEntry(): string;
  setArchiveEntry(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileRequest): GetFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileRequest;
  static deserializeBinaryFromReader(message: GetFileRequest, reader: jspb.BinaryReader): GetFileRequest;
}

export namespace GetFileRequest {
  export type AsObject = {
    uri: string,
    readOffset: number,
    readLimit: number,
    archiveEntry: string,
  }
}

export class GetFileResponse extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileResponse): GetFileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileResponse;
  static deserializeBinaryFromReader(message: GetFileResponse, reader: jspb.BinaryReader): GetFileResponse;
}

export namespace GetFileResponse {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

export class GetFileTailRequest extends jspb.Message {
  getUri(): string;
  setUri(value: string): void;

  getReadOffset(): number;
  setReadOffset(value: number): void;

  getReadLimit(): number;
  setReadLimit(value: number): void;

  getArchiveEntry(): string;
  setArchiveEntry(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileTailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileTailRequest): GetFileTailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileTailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileTailRequest;
  static deserializeBinaryFromReader(message: GetFileTailRequest, reader: jspb.BinaryReader): GetFileTailRequest;
}

export namespace GetFileTailRequest {
  export type AsObject = {
    uri: string,
    readOffset: number,
    readLimit: number,
    archiveEntry: string,
  }
}

export class GetFileTailResponse extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileTailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileTailResponse): GetFileTailResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileTailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileTailResponse;
  static deserializeBinaryFromReader(message: GetFileTailResponse, reader: jspb.BinaryReader): GetFileTailResponse;
}

export namespace GetFileTailResponse {
  export type AsObject = {
    data: Uint8Array | string,
  }
}
