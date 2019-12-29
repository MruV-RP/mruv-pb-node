// package: google.devtools.resultstore.v2
// file: google/devtools/resultstore/v2/coverage_summary.proto

import * as jspb from "google-protobuf";
import * as google_devtools_resultstore_v2_common_pb from "../../../../google/devtools/resultstore/v2/common_pb";

export class LineCoverageSummary extends jspb.Message {
  getInstrumentedLineCount(): number;
  setInstrumentedLineCount(value: number): void;

  getExecutedLineCount(): number;
  setExecutedLineCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LineCoverageSummary.AsObject;
  static toObject(includeInstance: boolean, msg: LineCoverageSummary): LineCoverageSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LineCoverageSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LineCoverageSummary;
  static deserializeBinaryFromReader(message: LineCoverageSummary, reader: jspb.BinaryReader): LineCoverageSummary;
}

export namespace LineCoverageSummary {
  export type AsObject = {
    instrumentedLineCount: number,
    executedLineCount: number,
  }
}

export class BranchCoverageSummary extends jspb.Message {
  getTotalBranchCount(): number;
  setTotalBranchCount(value: number): void;

  getExecutedBranchCount(): number;
  setExecutedBranchCount(value: number): void;

  getTakenBranchCount(): number;
  setTakenBranchCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BranchCoverageSummary.AsObject;
  static toObject(includeInstance: boolean, msg: BranchCoverageSummary): BranchCoverageSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BranchCoverageSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BranchCoverageSummary;
  static deserializeBinaryFromReader(message: BranchCoverageSummary, reader: jspb.BinaryReader): BranchCoverageSummary;
}

export namespace BranchCoverageSummary {
  export type AsObject = {
    totalBranchCount: number,
    executedBranchCount: number,
    takenBranchCount: number,
  }
}

export class LanguageCoverageSummary extends jspb.Message {
  getLanguage(): google_devtools_resultstore_v2_common_pb.LanguageMap[keyof google_devtools_resultstore_v2_common_pb.LanguageMap];
  setLanguage(value: google_devtools_resultstore_v2_common_pb.LanguageMap[keyof google_devtools_resultstore_v2_common_pb.LanguageMap]): void;

  hasLineSummary(): boolean;
  clearLineSummary(): void;
  getLineSummary(): LineCoverageSummary | undefined;
  setLineSummary(value?: LineCoverageSummary): void;

  hasBranchSummary(): boolean;
  clearBranchSummary(): void;
  getBranchSummary(): BranchCoverageSummary | undefined;
  setBranchSummary(value?: BranchCoverageSummary): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LanguageCoverageSummary.AsObject;
  static toObject(includeInstance: boolean, msg: LanguageCoverageSummary): LanguageCoverageSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LanguageCoverageSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LanguageCoverageSummary;
  static deserializeBinaryFromReader(message: LanguageCoverageSummary, reader: jspb.BinaryReader): LanguageCoverageSummary;
}

export namespace LanguageCoverageSummary {
  export type AsObject = {
    language: google_devtools_resultstore_v2_common_pb.LanguageMap[keyof google_devtools_resultstore_v2_common_pb.LanguageMap],
    lineSummary?: LineCoverageSummary.AsObject,
    branchSummary?: BranchCoverageSummary.AsObject,
  }
}

