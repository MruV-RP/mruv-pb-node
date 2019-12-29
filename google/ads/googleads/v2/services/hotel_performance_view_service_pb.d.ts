// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/hotel_performance_view_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_hotel_performance_view_pb from "../../../../../google/ads/googleads/v2/resources/hotel_performance_view_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetHotelPerformanceViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHotelPerformanceViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHotelPerformanceViewRequest): GetHotelPerformanceViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHotelPerformanceViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHotelPerformanceViewRequest;
  static deserializeBinaryFromReader(message: GetHotelPerformanceViewRequest, reader: jspb.BinaryReader): GetHotelPerformanceViewRequest;
}

export namespace GetHotelPerformanceViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

