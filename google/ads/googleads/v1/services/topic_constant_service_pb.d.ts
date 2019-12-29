// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/topic_constant_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_topic_constant_pb from "../../../../../google/ads/googleads/v1/resources/topic_constant_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class GetTopicConstantRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTopicConstantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTopicConstantRequest): GetTopicConstantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTopicConstantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTopicConstantRequest;
  static deserializeBinaryFromReader(message: GetTopicConstantRequest, reader: jspb.BinaryReader): GetTopicConstantRequest;
}

export namespace GetTopicConstantRequest {
  export type AsObject = {
    resourceName: string,
  }
}

