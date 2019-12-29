// package: google.bigtable.admin.v2
// file: google/bigtable/admin/v2/table.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Table extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getClusterStatesMap(): jspb.Map<string, Table.ClusterState>;
  clearClusterStatesMap(): void;
  getColumnFamiliesMap(): jspb.Map<string, ColumnFamily>;
  clearColumnFamiliesMap(): void;
  getGranularity(): Table.TimestampGranularityMap[keyof Table.TimestampGranularityMap];
  setGranularity(value: Table.TimestampGranularityMap[keyof Table.TimestampGranularityMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Table.AsObject;
  static toObject(includeInstance: boolean, msg: Table): Table.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Table, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Table;
  static deserializeBinaryFromReader(message: Table, reader: jspb.BinaryReader): Table;
}

export namespace Table {
  export type AsObject = {
    name: string,
    clusterStatesMap: Array<[string, Table.ClusterState.AsObject]>,
    columnFamiliesMap: Array<[string, ColumnFamily.AsObject]>,
    granularity: Table.TimestampGranularityMap[keyof Table.TimestampGranularityMap],
  }

  export class ClusterState extends jspb.Message {
    getReplicationState(): Table.ClusterState.ReplicationStateMap[keyof Table.ClusterState.ReplicationStateMap];
    setReplicationState(value: Table.ClusterState.ReplicationStateMap[keyof Table.ClusterState.ReplicationStateMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClusterState.AsObject;
    static toObject(includeInstance: boolean, msg: ClusterState): ClusterState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClusterState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClusterState;
    static deserializeBinaryFromReader(message: ClusterState, reader: jspb.BinaryReader): ClusterState;
  }

  export namespace ClusterState {
    export type AsObject = {
      replicationState: Table.ClusterState.ReplicationStateMap[keyof Table.ClusterState.ReplicationStateMap],
    }

    export interface ReplicationStateMap {
      STATE_NOT_KNOWN: 0;
      INITIALIZING: 1;
      PLANNED_MAINTENANCE: 2;
      UNPLANNED_MAINTENANCE: 3;
      READY: 4;
    }

    export const ReplicationState: ReplicationStateMap;
  }

  export interface TimestampGranularityMap {
    TIMESTAMP_GRANULARITY_UNSPECIFIED: 0;
    MILLIS: 1;
  }

  export const TimestampGranularity: TimestampGranularityMap;

  export interface ViewMap {
    VIEW_UNSPECIFIED: 0;
    NAME_ONLY: 1;
    SCHEMA_VIEW: 2;
    REPLICATION_VIEW: 3;
    FULL: 4;
  }

  export const View: ViewMap;
}

export class ColumnFamily extends jspb.Message {
  hasGcRule(): boolean;
  clearGcRule(): void;
  getGcRule(): GcRule | undefined;
  setGcRule(value?: GcRule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColumnFamily.AsObject;
  static toObject(includeInstance: boolean, msg: ColumnFamily): ColumnFamily.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ColumnFamily, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColumnFamily;
  static deserializeBinaryFromReader(message: ColumnFamily, reader: jspb.BinaryReader): ColumnFamily;
}

export namespace ColumnFamily {
  export type AsObject = {
    gcRule?: GcRule.AsObject,
  }
}

export class GcRule extends jspb.Message {
  hasMaxNumVersions(): boolean;
  clearMaxNumVersions(): void;
  getMaxNumVersions(): number;
  setMaxNumVersions(value: number): void;

  hasMaxAge(): boolean;
  clearMaxAge(): void;
  getMaxAge(): google_protobuf_duration_pb.Duration | undefined;
  setMaxAge(value?: google_protobuf_duration_pb.Duration): void;

  hasIntersection(): boolean;
  clearIntersection(): void;
  getIntersection(): GcRule.Intersection | undefined;
  setIntersection(value?: GcRule.Intersection): void;

  hasUnion(): boolean;
  clearUnion(): void;
  getUnion(): GcRule.Union | undefined;
  setUnion(value?: GcRule.Union): void;

  getRuleCase(): GcRule.RuleCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GcRule.AsObject;
  static toObject(includeInstance: boolean, msg: GcRule): GcRule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GcRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GcRule;
  static deserializeBinaryFromReader(message: GcRule, reader: jspb.BinaryReader): GcRule;
}

export namespace GcRule {
  export type AsObject = {
    maxNumVersions: number,
    maxAge?: google_protobuf_duration_pb.Duration.AsObject,
    intersection?: GcRule.Intersection.AsObject,
    union?: GcRule.Union.AsObject,
  }

  export class Intersection extends jspb.Message {
    clearRulesList(): void;
    getRulesList(): Array<GcRule>;
    setRulesList(value: Array<GcRule>): void;
    addRules(value?: GcRule, index?: number): GcRule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Intersection.AsObject;
    static toObject(includeInstance: boolean, msg: Intersection): Intersection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Intersection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Intersection;
    static deserializeBinaryFromReader(message: Intersection, reader: jspb.BinaryReader): Intersection;
  }

  export namespace Intersection {
    export type AsObject = {
      rulesList: Array<GcRule.AsObject>,
    }
  }

  export class Union extends jspb.Message {
    clearRulesList(): void;
    getRulesList(): Array<GcRule>;
    setRulesList(value: Array<GcRule>): void;
    addRules(value?: GcRule, index?: number): GcRule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Union.AsObject;
    static toObject(includeInstance: boolean, msg: Union): Union.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Union, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Union;
    static deserializeBinaryFromReader(message: Union, reader: jspb.BinaryReader): Union;
  }

  export namespace Union {
    export type AsObject = {
      rulesList: Array<GcRule.AsObject>,
    }
  }

  export enum RuleCase {
    RULE_NOT_SET = 0,
    MAX_NUM_VERSIONS = 1,
    MAX_AGE = 2,
    INTERSECTION = 3,
    UNION = 4,
  }
}

export class Snapshot extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasSourceTable(): boolean;
  clearSourceTable(): void;
  getSourceTable(): Table | undefined;
  setSourceTable(value?: Table): void;

  getDataSizeBytes(): number;
  setDataSizeBytes(value: number): void;

  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeleteTime(): boolean;
  clearDeleteTime(): void;
  getDeleteTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeleteTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getState(): Snapshot.StateMap[keyof Snapshot.StateMap];
  setState(value: Snapshot.StateMap[keyof Snapshot.StateMap]): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Snapshot.AsObject;
  static toObject(includeInstance: boolean, msg: Snapshot): Snapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Snapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Snapshot;
  static deserializeBinaryFromReader(message: Snapshot, reader: jspb.BinaryReader): Snapshot;
}

export namespace Snapshot {
  export type AsObject = {
    name: string,
    sourceTable?: Table.AsObject,
    dataSizeBytes: number,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: Snapshot.StateMap[keyof Snapshot.StateMap],
    description: string,
  }

  export interface StateMap {
    STATE_NOT_KNOWN: 0;
    READY: 1;
    CREATING: 2;
  }

  export const State: StateMap;
}

