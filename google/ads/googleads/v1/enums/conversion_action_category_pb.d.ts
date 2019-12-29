// package: google.ads.googleads.v1.enums
// file: google/ads/googleads/v1/enums/conversion_action_category.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ConversionActionCategoryEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionActionCategoryEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionActionCategoryEnum): ConversionActionCategoryEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversionActionCategoryEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionActionCategoryEnum;
  static deserializeBinaryFromReader(message: ConversionActionCategoryEnum, reader: jspb.BinaryReader): ConversionActionCategoryEnum;
}

export namespace ConversionActionCategoryEnum {
  export type AsObject = {
  }

  export interface ConversionActionCategoryMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    DEFAULT: 2;
    PAGE_VIEW: 3;
    PURCHASE: 4;
    SIGNUP: 5;
    LEAD: 6;
    DOWNLOAD: 7;
  }

  export const ConversionActionCategory: ConversionActionCategoryMap;
}

