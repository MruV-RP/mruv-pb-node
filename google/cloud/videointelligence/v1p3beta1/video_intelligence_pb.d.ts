// package: google.cloud.videointelligence.v1p3beta1
// file: google/cloud/videointelligence/v1p3beta1/video_intelligence.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../google/api/field_behavior_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";

export class AnnotateVideoRequest extends jspb.Message {
  getInputUri(): string;
  setInputUri(value: string): void;

  getInputContent(): Uint8Array | string;
  getInputContent_asU8(): Uint8Array;
  getInputContent_asB64(): string;
  setInputContent(value: Uint8Array | string): void;

  clearFeaturesList(): void;
  getFeaturesList(): Array<FeatureMap[keyof FeatureMap]>;
  setFeaturesList(value: Array<FeatureMap[keyof FeatureMap]>): void;
  addFeatures(value: FeatureMap[keyof FeatureMap], index?: number): FeatureMap[keyof FeatureMap];

  hasVideoContext(): boolean;
  clearVideoContext(): void;
  getVideoContext(): VideoContext | undefined;
  setVideoContext(value?: VideoContext): void;

  getOutputUri(): string;
  setOutputUri(value: string): void;

  getLocationId(): string;
  setLocationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateVideoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateVideoRequest): AnnotateVideoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnnotateVideoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateVideoRequest;
  static deserializeBinaryFromReader(message: AnnotateVideoRequest, reader: jspb.BinaryReader): AnnotateVideoRequest;
}

export namespace AnnotateVideoRequest {
  export type AsObject = {
    inputUri: string,
    inputContent: Uint8Array | string,
    featuresList: Array<FeatureMap[keyof FeatureMap]>,
    videoContext?: VideoContext.AsObject,
    outputUri: string,
    locationId: string,
  }
}

export class VideoContext extends jspb.Message {
  clearSegmentsList(): void;
  getSegmentsList(): Array<VideoSegment>;
  setSegmentsList(value: Array<VideoSegment>): void;
  addSegments(value?: VideoSegment, index?: number): VideoSegment;

  hasLabelDetectionConfig(): boolean;
  clearLabelDetectionConfig(): void;
  getLabelDetectionConfig(): LabelDetectionConfig | undefined;
  setLabelDetectionConfig(value?: LabelDetectionConfig): void;

  hasShotChangeDetectionConfig(): boolean;
  clearShotChangeDetectionConfig(): void;
  getShotChangeDetectionConfig(): ShotChangeDetectionConfig | undefined;
  setShotChangeDetectionConfig(value?: ShotChangeDetectionConfig): void;

  hasExplicitContentDetectionConfig(): boolean;
  clearExplicitContentDetectionConfig(): void;
  getExplicitContentDetectionConfig(): ExplicitContentDetectionConfig | undefined;
  setExplicitContentDetectionConfig(value?: ExplicitContentDetectionConfig): void;

  hasSpeechTranscriptionConfig(): boolean;
  clearSpeechTranscriptionConfig(): void;
  getSpeechTranscriptionConfig(): SpeechTranscriptionConfig | undefined;
  setSpeechTranscriptionConfig(value?: SpeechTranscriptionConfig): void;

  hasTextDetectionConfig(): boolean;
  clearTextDetectionConfig(): void;
  getTextDetectionConfig(): TextDetectionConfig | undefined;
  setTextDetectionConfig(value?: TextDetectionConfig): void;

  hasObjectTrackingConfig(): boolean;
  clearObjectTrackingConfig(): void;
  getObjectTrackingConfig(): ObjectTrackingConfig | undefined;
  setObjectTrackingConfig(value?: ObjectTrackingConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoContext.AsObject;
  static toObject(includeInstance: boolean, msg: VideoContext): VideoContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoContext;
  static deserializeBinaryFromReader(message: VideoContext, reader: jspb.BinaryReader): VideoContext;
}

export namespace VideoContext {
  export type AsObject = {
    segmentsList: Array<VideoSegment.AsObject>,
    labelDetectionConfig?: LabelDetectionConfig.AsObject,
    shotChangeDetectionConfig?: ShotChangeDetectionConfig.AsObject,
    explicitContentDetectionConfig?: ExplicitContentDetectionConfig.AsObject,
    speechTranscriptionConfig?: SpeechTranscriptionConfig.AsObject,
    textDetectionConfig?: TextDetectionConfig.AsObject,
    objectTrackingConfig?: ObjectTrackingConfig.AsObject,
  }
}

export class LabelDetectionConfig extends jspb.Message {
  getLabelDetectionMode(): LabelDetectionModeMap[keyof LabelDetectionModeMap];
  setLabelDetectionMode(value: LabelDetectionModeMap[keyof LabelDetectionModeMap]): void;

  getStationaryCamera(): boolean;
  setStationaryCamera(value: boolean): void;

  getModel(): string;
  setModel(value: string): void;

  getFrameConfidenceThreshold(): number;
  setFrameConfidenceThreshold(value: number): void;

  getVideoConfidenceThreshold(): number;
  setVideoConfidenceThreshold(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: LabelDetectionConfig): LabelDetectionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelDetectionConfig;
  static deserializeBinaryFromReader(message: LabelDetectionConfig, reader: jspb.BinaryReader): LabelDetectionConfig;
}

export namespace LabelDetectionConfig {
  export type AsObject = {
    labelDetectionMode: LabelDetectionModeMap[keyof LabelDetectionModeMap],
    stationaryCamera: boolean,
    model: string,
    frameConfidenceThreshold: number,
    videoConfidenceThreshold: number,
  }
}

export class ShotChangeDetectionConfig extends jspb.Message {
  getModel(): string;
  setModel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShotChangeDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ShotChangeDetectionConfig): ShotChangeDetectionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShotChangeDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShotChangeDetectionConfig;
  static deserializeBinaryFromReader(message: ShotChangeDetectionConfig, reader: jspb.BinaryReader): ShotChangeDetectionConfig;
}

export namespace ShotChangeDetectionConfig {
  export type AsObject = {
    model: string,
  }
}

export class ObjectTrackingConfig extends jspb.Message {
  getModel(): string;
  setModel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectTrackingConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectTrackingConfig): ObjectTrackingConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectTrackingConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectTrackingConfig;
  static deserializeBinaryFromReader(message: ObjectTrackingConfig, reader: jspb.BinaryReader): ObjectTrackingConfig;
}

export namespace ObjectTrackingConfig {
  export type AsObject = {
    model: string,
  }
}

export class ExplicitContentDetectionConfig extends jspb.Message {
  getModel(): string;
  setModel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExplicitContentDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ExplicitContentDetectionConfig): ExplicitContentDetectionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExplicitContentDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExplicitContentDetectionConfig;
  static deserializeBinaryFromReader(message: ExplicitContentDetectionConfig, reader: jspb.BinaryReader): ExplicitContentDetectionConfig;
}

export namespace ExplicitContentDetectionConfig {
  export type AsObject = {
    model: string,
  }
}

export class TextDetectionConfig extends jspb.Message {
  clearLanguageHintsList(): void;
  getLanguageHintsList(): Array<string>;
  setLanguageHintsList(value: Array<string>): void;
  addLanguageHints(value: string, index?: number): string;

  getModel(): string;
  setModel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TextDetectionConfig): TextDetectionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextDetectionConfig;
  static deserializeBinaryFromReader(message: TextDetectionConfig, reader: jspb.BinaryReader): TextDetectionConfig;
}

export namespace TextDetectionConfig {
  export type AsObject = {
    languageHintsList: Array<string>,
    model: string,
  }
}

export class VideoSegment extends jspb.Message {
  hasStartTimeOffset(): boolean;
  clearStartTimeOffset(): void;
  getStartTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setStartTimeOffset(value?: google_protobuf_duration_pb.Duration): void;

  hasEndTimeOffset(): boolean;
  clearEndTimeOffset(): void;
  getEndTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setEndTimeOffset(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoSegment.AsObject;
  static toObject(includeInstance: boolean, msg: VideoSegment): VideoSegment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoSegment;
  static deserializeBinaryFromReader(message: VideoSegment, reader: jspb.BinaryReader): VideoSegment;
}

export namespace VideoSegment {
  export type AsObject = {
    startTimeOffset?: google_protobuf_duration_pb.Duration.AsObject,
    endTimeOffset?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class LabelSegment extends jspb.Message {
  hasSegment(): boolean;
  clearSegment(): void;
  getSegment(): VideoSegment | undefined;
  setSegment(value?: VideoSegment): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelSegment.AsObject;
  static toObject(includeInstance: boolean, msg: LabelSegment): LabelSegment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelSegment;
  static deserializeBinaryFromReader(message: LabelSegment, reader: jspb.BinaryReader): LabelSegment;
}

export namespace LabelSegment {
  export type AsObject = {
    segment?: VideoSegment.AsObject,
    confidence: number,
  }
}

export class LabelFrame extends jspb.Message {
  hasTimeOffset(): boolean;
  clearTimeOffset(): void;
  getTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setTimeOffset(value?: google_protobuf_duration_pb.Duration): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelFrame.AsObject;
  static toObject(includeInstance: boolean, msg: LabelFrame): LabelFrame.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelFrame;
  static deserializeBinaryFromReader(message: LabelFrame, reader: jspb.BinaryReader): LabelFrame;
}

export namespace LabelFrame {
  export type AsObject = {
    timeOffset?: google_protobuf_duration_pb.Duration.AsObject,
    confidence: number,
  }
}

export class Entity extends jspb.Message {
  getEntityId(): string;
  setEntityId(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entity.AsObject;
  static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entity;
  static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
}

export namespace Entity {
  export type AsObject = {
    entityId: string,
    description: string,
    languageCode: string,
  }
}

export class LabelAnnotation extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): Entity | undefined;
  setEntity(value?: Entity): void;

  clearCategoryEntitiesList(): void;
  getCategoryEntitiesList(): Array<Entity>;
  setCategoryEntitiesList(value: Array<Entity>): void;
  addCategoryEntities(value?: Entity, index?: number): Entity;

  clearSegmentsList(): void;
  getSegmentsList(): Array<LabelSegment>;
  setSegmentsList(value: Array<LabelSegment>): void;
  addSegments(value?: LabelSegment, index?: number): LabelSegment;

  clearFramesList(): void;
  getFramesList(): Array<LabelFrame>;
  setFramesList(value: Array<LabelFrame>): void;
  addFrames(value?: LabelFrame, index?: number): LabelFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: LabelAnnotation): LabelAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelAnnotation;
  static deserializeBinaryFromReader(message: LabelAnnotation, reader: jspb.BinaryReader): LabelAnnotation;
}

export namespace LabelAnnotation {
  export type AsObject = {
    entity?: Entity.AsObject,
    categoryEntitiesList: Array<Entity.AsObject>,
    segmentsList: Array<LabelSegment.AsObject>,
    framesList: Array<LabelFrame.AsObject>,
  }
}

export class ExplicitContentFrame extends jspb.Message {
  hasTimeOffset(): boolean;
  clearTimeOffset(): void;
  getTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setTimeOffset(value?: google_protobuf_duration_pb.Duration): void;

  getPornographyLikelihood(): LikelihoodMap[keyof LikelihoodMap];
  setPornographyLikelihood(value: LikelihoodMap[keyof LikelihoodMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExplicitContentFrame.AsObject;
  static toObject(includeInstance: boolean, msg: ExplicitContentFrame): ExplicitContentFrame.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExplicitContentFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExplicitContentFrame;
  static deserializeBinaryFromReader(message: ExplicitContentFrame, reader: jspb.BinaryReader): ExplicitContentFrame;
}

export namespace ExplicitContentFrame {
  export type AsObject = {
    timeOffset?: google_protobuf_duration_pb.Duration.AsObject,
    pornographyLikelihood: LikelihoodMap[keyof LikelihoodMap],
  }
}

export class ExplicitContentAnnotation extends jspb.Message {
  clearFramesList(): void;
  getFramesList(): Array<ExplicitContentFrame>;
  setFramesList(value: Array<ExplicitContentFrame>): void;
  addFrames(value?: ExplicitContentFrame, index?: number): ExplicitContentFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExplicitContentAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: ExplicitContentAnnotation): ExplicitContentAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExplicitContentAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExplicitContentAnnotation;
  static deserializeBinaryFromReader(message: ExplicitContentAnnotation, reader: jspb.BinaryReader): ExplicitContentAnnotation;
}

export namespace ExplicitContentAnnotation {
  export type AsObject = {
    framesList: Array<ExplicitContentFrame.AsObject>,
  }
}

export class NormalizedBoundingBox extends jspb.Message {
  getLeft(): number;
  setLeft(value: number): void;

  getTop(): number;
  setTop(value: number): void;

  getRight(): number;
  setRight(value: number): void;

  getBottom(): number;
  setBottom(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NormalizedBoundingBox.AsObject;
  static toObject(includeInstance: boolean, msg: NormalizedBoundingBox): NormalizedBoundingBox.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NormalizedBoundingBox, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NormalizedBoundingBox;
  static deserializeBinaryFromReader(message: NormalizedBoundingBox, reader: jspb.BinaryReader): NormalizedBoundingBox;
}

export namespace NormalizedBoundingBox {
  export type AsObject = {
    left: number,
    top: number,
    right: number,
    bottom: number,
  }
}

export class TimestampedObject extends jspb.Message {
  hasNormalizedBoundingBox(): boolean;
  clearNormalizedBoundingBox(): void;
  getNormalizedBoundingBox(): NormalizedBoundingBox | undefined;
  setNormalizedBoundingBox(value?: NormalizedBoundingBox): void;

  hasTimeOffset(): boolean;
  clearTimeOffset(): void;
  getTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setTimeOffset(value?: google_protobuf_duration_pb.Duration): void;

  clearAttributesList(): void;
  getAttributesList(): Array<DetectedAttribute>;
  setAttributesList(value: Array<DetectedAttribute>): void;
  addAttributes(value?: DetectedAttribute, index?: number): DetectedAttribute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimestampedObject.AsObject;
  static toObject(includeInstance: boolean, msg: TimestampedObject): TimestampedObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimestampedObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimestampedObject;
  static deserializeBinaryFromReader(message: TimestampedObject, reader: jspb.BinaryReader): TimestampedObject;
}

export namespace TimestampedObject {
  export type AsObject = {
    normalizedBoundingBox?: NormalizedBoundingBox.AsObject,
    timeOffset?: google_protobuf_duration_pb.Duration.AsObject,
    attributesList: Array<DetectedAttribute.AsObject>,
  }
}

export class Track extends jspb.Message {
  hasSegment(): boolean;
  clearSegment(): void;
  getSegment(): VideoSegment | undefined;
  setSegment(value?: VideoSegment): void;

  clearTimestampedObjectsList(): void;
  getTimestampedObjectsList(): Array<TimestampedObject>;
  setTimestampedObjectsList(value: Array<TimestampedObject>): void;
  addTimestampedObjects(value?: TimestampedObject, index?: number): TimestampedObject;

  clearAttributesList(): void;
  getAttributesList(): Array<DetectedAttribute>;
  setAttributesList(value: Array<DetectedAttribute>): void;
  addAttributes(value?: DetectedAttribute, index?: number): DetectedAttribute;

  getConfidence(): number;
  setConfidence(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Track.AsObject;
  static toObject(includeInstance: boolean, msg: Track): Track.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Track, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Track;
  static deserializeBinaryFromReader(message: Track, reader: jspb.BinaryReader): Track;
}

export namespace Track {
  export type AsObject = {
    segment?: VideoSegment.AsObject,
    timestampedObjectsList: Array<TimestampedObject.AsObject>,
    attributesList: Array<DetectedAttribute.AsObject>,
    confidence: number,
  }
}

export class DetectedAttribute extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetectedAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: DetectedAttribute): DetectedAttribute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DetectedAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetectedAttribute;
  static deserializeBinaryFromReader(message: DetectedAttribute, reader: jspb.BinaryReader): DetectedAttribute;
}

export namespace DetectedAttribute {
  export type AsObject = {
    name: string,
    confidence: number,
    value: string,
  }
}

export class Celebrity extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Celebrity.AsObject;
  static toObject(includeInstance: boolean, msg: Celebrity): Celebrity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Celebrity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Celebrity;
  static deserializeBinaryFromReader(message: Celebrity, reader: jspb.BinaryReader): Celebrity;
}

export namespace Celebrity {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
  }
}

export class CelebrityTrack extends jspb.Message {
  clearCelebritiesList(): void;
  getCelebritiesList(): Array<CelebrityTrack.RecognizedCelebrity>;
  setCelebritiesList(value: Array<CelebrityTrack.RecognizedCelebrity>): void;
  addCelebrities(value?: CelebrityTrack.RecognizedCelebrity, index?: number): CelebrityTrack.RecognizedCelebrity;

  hasFaceTrack(): boolean;
  clearFaceTrack(): void;
  getFaceTrack(): Track | undefined;
  setFaceTrack(value?: Track): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CelebrityTrack.AsObject;
  static toObject(includeInstance: boolean, msg: CelebrityTrack): CelebrityTrack.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CelebrityTrack, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CelebrityTrack;
  static deserializeBinaryFromReader(message: CelebrityTrack, reader: jspb.BinaryReader): CelebrityTrack;
}

export namespace CelebrityTrack {
  export type AsObject = {
    celebritiesList: Array<CelebrityTrack.RecognizedCelebrity.AsObject>,
    faceTrack?: Track.AsObject,
  }

  export class RecognizedCelebrity extends jspb.Message {
    hasCelebrity(): boolean;
    clearCelebrity(): void;
    getCelebrity(): Celebrity | undefined;
    setCelebrity(value?: Celebrity): void;

    getConfidence(): number;
    setConfidence(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecognizedCelebrity.AsObject;
    static toObject(includeInstance: boolean, msg: RecognizedCelebrity): RecognizedCelebrity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecognizedCelebrity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecognizedCelebrity;
    static deserializeBinaryFromReader(message: RecognizedCelebrity, reader: jspb.BinaryReader): RecognizedCelebrity;
  }

  export namespace RecognizedCelebrity {
    export type AsObject = {
      celebrity?: Celebrity.AsObject,
      confidence: number,
    }
  }
}

export class CelebrityRecognitionAnnotation extends jspb.Message {
  clearCelebrityTracksList(): void;
  getCelebrityTracksList(): Array<CelebrityTrack>;
  setCelebrityTracksList(value: Array<CelebrityTrack>): void;
  addCelebrityTracks(value?: CelebrityTrack, index?: number): CelebrityTrack;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CelebrityRecognitionAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: CelebrityRecognitionAnnotation): CelebrityRecognitionAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CelebrityRecognitionAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CelebrityRecognitionAnnotation;
  static deserializeBinaryFromReader(message: CelebrityRecognitionAnnotation, reader: jspb.BinaryReader): CelebrityRecognitionAnnotation;
}

export namespace CelebrityRecognitionAnnotation {
  export type AsObject = {
    celebrityTracksList: Array<CelebrityTrack.AsObject>,
  }
}

export class VideoAnnotationResults extends jspb.Message {
  getInputUri(): string;
  setInputUri(value: string): void;

  hasSegment(): boolean;
  clearSegment(): void;
  getSegment(): VideoSegment | undefined;
  setSegment(value?: VideoSegment): void;

  clearSegmentLabelAnnotationsList(): void;
  getSegmentLabelAnnotationsList(): Array<LabelAnnotation>;
  setSegmentLabelAnnotationsList(value: Array<LabelAnnotation>): void;
  addSegmentLabelAnnotations(value?: LabelAnnotation, index?: number): LabelAnnotation;

  clearSegmentPresenceLabelAnnotationsList(): void;
  getSegmentPresenceLabelAnnotationsList(): Array<LabelAnnotation>;
  setSegmentPresenceLabelAnnotationsList(value: Array<LabelAnnotation>): void;
  addSegmentPresenceLabelAnnotations(value?: LabelAnnotation, index?: number): LabelAnnotation;

  clearShotLabelAnnotationsList(): void;
  getShotLabelAnnotationsList(): Array<LabelAnnotation>;
  setShotLabelAnnotationsList(value: Array<LabelAnnotation>): void;
  addShotLabelAnnotations(value?: LabelAnnotation, index?: number): LabelAnnotation;

  clearShotPresenceLabelAnnotationsList(): void;
  getShotPresenceLabelAnnotationsList(): Array<LabelAnnotation>;
  setShotPresenceLabelAnnotationsList(value: Array<LabelAnnotation>): void;
  addShotPresenceLabelAnnotations(value?: LabelAnnotation, index?: number): LabelAnnotation;

  clearFrameLabelAnnotationsList(): void;
  getFrameLabelAnnotationsList(): Array<LabelAnnotation>;
  setFrameLabelAnnotationsList(value: Array<LabelAnnotation>): void;
  addFrameLabelAnnotations(value?: LabelAnnotation, index?: number): LabelAnnotation;

  clearShotAnnotationsList(): void;
  getShotAnnotationsList(): Array<VideoSegment>;
  setShotAnnotationsList(value: Array<VideoSegment>): void;
  addShotAnnotations(value?: VideoSegment, index?: number): VideoSegment;

  hasExplicitAnnotation(): boolean;
  clearExplicitAnnotation(): void;
  getExplicitAnnotation(): ExplicitContentAnnotation | undefined;
  setExplicitAnnotation(value?: ExplicitContentAnnotation): void;

  clearSpeechTranscriptionsList(): void;
  getSpeechTranscriptionsList(): Array<SpeechTranscription>;
  setSpeechTranscriptionsList(value: Array<SpeechTranscription>): void;
  addSpeechTranscriptions(value?: SpeechTranscription, index?: number): SpeechTranscription;

  clearTextAnnotationsList(): void;
  getTextAnnotationsList(): Array<TextAnnotation>;
  setTextAnnotationsList(value: Array<TextAnnotation>): void;
  addTextAnnotations(value?: TextAnnotation, index?: number): TextAnnotation;

  clearObjectAnnotationsList(): void;
  getObjectAnnotationsList(): Array<ObjectTrackingAnnotation>;
  setObjectAnnotationsList(value: Array<ObjectTrackingAnnotation>): void;
  addObjectAnnotations(value?: ObjectTrackingAnnotation, index?: number): ObjectTrackingAnnotation;

  clearLogoRecognitionAnnotationsList(): void;
  getLogoRecognitionAnnotationsList(): Array<LogoRecognitionAnnotation>;
  setLogoRecognitionAnnotationsList(value: Array<LogoRecognitionAnnotation>): void;
  addLogoRecognitionAnnotations(value?: LogoRecognitionAnnotation, index?: number): LogoRecognitionAnnotation;

  hasCelebrityRecognitionAnnotations(): boolean;
  clearCelebrityRecognitionAnnotations(): void;
  getCelebrityRecognitionAnnotations(): CelebrityRecognitionAnnotation | undefined;
  setCelebrityRecognitionAnnotations(value?: CelebrityRecognitionAnnotation): void;

  hasError(): boolean;
  clearError(): void;
  getError(): google_rpc_status_pb.Status | undefined;
  setError(value?: google_rpc_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoAnnotationResults.AsObject;
  static toObject(includeInstance: boolean, msg: VideoAnnotationResults): VideoAnnotationResults.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoAnnotationResults, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoAnnotationResults;
  static deserializeBinaryFromReader(message: VideoAnnotationResults, reader: jspb.BinaryReader): VideoAnnotationResults;
}

export namespace VideoAnnotationResults {
  export type AsObject = {
    inputUri: string,
    segment?: VideoSegment.AsObject,
    segmentLabelAnnotationsList: Array<LabelAnnotation.AsObject>,
    segmentPresenceLabelAnnotationsList: Array<LabelAnnotation.AsObject>,
    shotLabelAnnotationsList: Array<LabelAnnotation.AsObject>,
    shotPresenceLabelAnnotationsList: Array<LabelAnnotation.AsObject>,
    frameLabelAnnotationsList: Array<LabelAnnotation.AsObject>,
    shotAnnotationsList: Array<VideoSegment.AsObject>,
    explicitAnnotation?: ExplicitContentAnnotation.AsObject,
    speechTranscriptionsList: Array<SpeechTranscription.AsObject>,
    textAnnotationsList: Array<TextAnnotation.AsObject>,
    objectAnnotationsList: Array<ObjectTrackingAnnotation.AsObject>,
    logoRecognitionAnnotationsList: Array<LogoRecognitionAnnotation.AsObject>,
    celebrityRecognitionAnnotations?: CelebrityRecognitionAnnotation.AsObject,
    error?: google_rpc_status_pb.Status.AsObject,
  }
}

export class AnnotateVideoResponse extends jspb.Message {
  clearAnnotationResultsList(): void;
  getAnnotationResultsList(): Array<VideoAnnotationResults>;
  setAnnotationResultsList(value: Array<VideoAnnotationResults>): void;
  addAnnotationResults(value?: VideoAnnotationResults, index?: number): VideoAnnotationResults;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateVideoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateVideoResponse): AnnotateVideoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnnotateVideoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateVideoResponse;
  static deserializeBinaryFromReader(message: AnnotateVideoResponse, reader: jspb.BinaryReader): AnnotateVideoResponse;
}

export namespace AnnotateVideoResponse {
  export type AsObject = {
    annotationResultsList: Array<VideoAnnotationResults.AsObject>,
  }
}

export class VideoAnnotationProgress extends jspb.Message {
  getInputUri(): string;
  setInputUri(value: string): void;

  getProgressPercent(): number;
  setProgressPercent(value: number): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getFeature(): FeatureMap[keyof FeatureMap];
  setFeature(value: FeatureMap[keyof FeatureMap]): void;

  hasSegment(): boolean;
  clearSegment(): void;
  getSegment(): VideoSegment | undefined;
  setSegment(value?: VideoSegment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoAnnotationProgress.AsObject;
  static toObject(includeInstance: boolean, msg: VideoAnnotationProgress): VideoAnnotationProgress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoAnnotationProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoAnnotationProgress;
  static deserializeBinaryFromReader(message: VideoAnnotationProgress, reader: jspb.BinaryReader): VideoAnnotationProgress;
}

export namespace VideoAnnotationProgress {
  export type AsObject = {
    inputUri: string,
    progressPercent: number,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    feature: FeatureMap[keyof FeatureMap],
    segment?: VideoSegment.AsObject,
  }
}

export class AnnotateVideoProgress extends jspb.Message {
  clearAnnotationProgressList(): void;
  getAnnotationProgressList(): Array<VideoAnnotationProgress>;
  setAnnotationProgressList(value: Array<VideoAnnotationProgress>): void;
  addAnnotationProgress(value?: VideoAnnotationProgress, index?: number): VideoAnnotationProgress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotateVideoProgress.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotateVideoProgress): AnnotateVideoProgress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnnotateVideoProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotateVideoProgress;
  static deserializeBinaryFromReader(message: AnnotateVideoProgress, reader: jspb.BinaryReader): AnnotateVideoProgress;
}

export namespace AnnotateVideoProgress {
  export type AsObject = {
    annotationProgressList: Array<VideoAnnotationProgress.AsObject>,
  }
}

export class SpeechTranscriptionConfig extends jspb.Message {
  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  getMaxAlternatives(): number;
  setMaxAlternatives(value: number): void;

  getFilterProfanity(): boolean;
  setFilterProfanity(value: boolean): void;

  clearSpeechContextsList(): void;
  getSpeechContextsList(): Array<SpeechContext>;
  setSpeechContextsList(value: Array<SpeechContext>): void;
  addSpeechContexts(value?: SpeechContext, index?: number): SpeechContext;

  getEnableAutomaticPunctuation(): boolean;
  setEnableAutomaticPunctuation(value: boolean): void;

  clearAudioTracksList(): void;
  getAudioTracksList(): Array<number>;
  setAudioTracksList(value: Array<number>): void;
  addAudioTracks(value: number, index?: number): number;

  getEnableSpeakerDiarization(): boolean;
  setEnableSpeakerDiarization(value: boolean): void;

  getDiarizationSpeakerCount(): number;
  setDiarizationSpeakerCount(value: number): void;

  getEnableWordConfidence(): boolean;
  setEnableWordConfidence(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechTranscriptionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SpeechTranscriptionConfig): SpeechTranscriptionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpeechTranscriptionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeechTranscriptionConfig;
  static deserializeBinaryFromReader(message: SpeechTranscriptionConfig, reader: jspb.BinaryReader): SpeechTranscriptionConfig;
}

export namespace SpeechTranscriptionConfig {
  export type AsObject = {
    languageCode: string,
    maxAlternatives: number,
    filterProfanity: boolean,
    speechContextsList: Array<SpeechContext.AsObject>,
    enableAutomaticPunctuation: boolean,
    audioTracksList: Array<number>,
    enableSpeakerDiarization: boolean,
    diarizationSpeakerCount: number,
    enableWordConfidence: boolean,
  }
}

export class SpeechContext extends jspb.Message {
  clearPhrasesList(): void;
  getPhrasesList(): Array<string>;
  setPhrasesList(value: Array<string>): void;
  addPhrases(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechContext.AsObject;
  static toObject(includeInstance: boolean, msg: SpeechContext): SpeechContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpeechContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeechContext;
  static deserializeBinaryFromReader(message: SpeechContext, reader: jspb.BinaryReader): SpeechContext;
}

export namespace SpeechContext {
  export type AsObject = {
    phrasesList: Array<string>,
  }
}

export class SpeechTranscription extends jspb.Message {
  clearAlternativesList(): void;
  getAlternativesList(): Array<SpeechRecognitionAlternative>;
  setAlternativesList(value: Array<SpeechRecognitionAlternative>): void;
  addAlternatives(value?: SpeechRecognitionAlternative, index?: number): SpeechRecognitionAlternative;

  getLanguageCode(): string;
  setLanguageCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechTranscription.AsObject;
  static toObject(includeInstance: boolean, msg: SpeechTranscription): SpeechTranscription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpeechTranscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeechTranscription;
  static deserializeBinaryFromReader(message: SpeechTranscription, reader: jspb.BinaryReader): SpeechTranscription;
}

export namespace SpeechTranscription {
  export type AsObject = {
    alternativesList: Array<SpeechRecognitionAlternative.AsObject>,
    languageCode: string,
  }
}

export class SpeechRecognitionAlternative extends jspb.Message {
  getTranscript(): string;
  setTranscript(value: string): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  clearWordsList(): void;
  getWordsList(): Array<WordInfo>;
  setWordsList(value: Array<WordInfo>): void;
  addWords(value?: WordInfo, index?: number): WordInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechRecognitionAlternative.AsObject;
  static toObject(includeInstance: boolean, msg: SpeechRecognitionAlternative): SpeechRecognitionAlternative.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpeechRecognitionAlternative, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeechRecognitionAlternative;
  static deserializeBinaryFromReader(message: SpeechRecognitionAlternative, reader: jspb.BinaryReader): SpeechRecognitionAlternative;
}

export namespace SpeechRecognitionAlternative {
  export type AsObject = {
    transcript: string,
    confidence: number,
    wordsList: Array<WordInfo.AsObject>,
  }
}

export class WordInfo extends jspb.Message {
  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_duration_pb.Duration | undefined;
  setStartTime(value?: google_protobuf_duration_pb.Duration): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_duration_pb.Duration | undefined;
  setEndTime(value?: google_protobuf_duration_pb.Duration): void;

  getWord(): string;
  setWord(value: string): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  getSpeakerTag(): number;
  setSpeakerTag(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WordInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WordInfo): WordInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WordInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WordInfo;
  static deserializeBinaryFromReader(message: WordInfo, reader: jspb.BinaryReader): WordInfo;
}

export namespace WordInfo {
  export type AsObject = {
    startTime?: google_protobuf_duration_pb.Duration.AsObject,
    endTime?: google_protobuf_duration_pb.Duration.AsObject,
    word: string,
    confidence: number,
    speakerTag: number,
  }
}

export class NormalizedVertex extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NormalizedVertex.AsObject;
  static toObject(includeInstance: boolean, msg: NormalizedVertex): NormalizedVertex.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NormalizedVertex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NormalizedVertex;
  static deserializeBinaryFromReader(message: NormalizedVertex, reader: jspb.BinaryReader): NormalizedVertex;
}

export namespace NormalizedVertex {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export class NormalizedBoundingPoly extends jspb.Message {
  clearVerticesList(): void;
  getVerticesList(): Array<NormalizedVertex>;
  setVerticesList(value: Array<NormalizedVertex>): void;
  addVertices(value?: NormalizedVertex, index?: number): NormalizedVertex;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NormalizedBoundingPoly.AsObject;
  static toObject(includeInstance: boolean, msg: NormalizedBoundingPoly): NormalizedBoundingPoly.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NormalizedBoundingPoly, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NormalizedBoundingPoly;
  static deserializeBinaryFromReader(message: NormalizedBoundingPoly, reader: jspb.BinaryReader): NormalizedBoundingPoly;
}

export namespace NormalizedBoundingPoly {
  export type AsObject = {
    verticesList: Array<NormalizedVertex.AsObject>,
  }
}

export class TextSegment extends jspb.Message {
  hasSegment(): boolean;
  clearSegment(): void;
  getSegment(): VideoSegment | undefined;
  setSegment(value?: VideoSegment): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  clearFramesList(): void;
  getFramesList(): Array<TextFrame>;
  setFramesList(value: Array<TextFrame>): void;
  addFrames(value?: TextFrame, index?: number): TextFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextSegment.AsObject;
  static toObject(includeInstance: boolean, msg: TextSegment): TextSegment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextSegment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextSegment;
  static deserializeBinaryFromReader(message: TextSegment, reader: jspb.BinaryReader): TextSegment;
}

export namespace TextSegment {
  export type AsObject = {
    segment?: VideoSegment.AsObject,
    confidence: number,
    framesList: Array<TextFrame.AsObject>,
  }
}

export class TextFrame extends jspb.Message {
  hasRotatedBoundingBox(): boolean;
  clearRotatedBoundingBox(): void;
  getRotatedBoundingBox(): NormalizedBoundingPoly | undefined;
  setRotatedBoundingBox(value?: NormalizedBoundingPoly): void;

  hasTimeOffset(): boolean;
  clearTimeOffset(): void;
  getTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setTimeOffset(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextFrame.AsObject;
  static toObject(includeInstance: boolean, msg: TextFrame): TextFrame.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextFrame;
  static deserializeBinaryFromReader(message: TextFrame, reader: jspb.BinaryReader): TextFrame;
}

export namespace TextFrame {
  export type AsObject = {
    rotatedBoundingBox?: NormalizedBoundingPoly.AsObject,
    timeOffset?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class TextAnnotation extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  clearSegmentsList(): void;
  getSegmentsList(): Array<TextSegment>;
  setSegmentsList(value: Array<TextSegment>): void;
  addSegments(value?: TextSegment, index?: number): TextSegment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: TextAnnotation): TextAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextAnnotation;
  static deserializeBinaryFromReader(message: TextAnnotation, reader: jspb.BinaryReader): TextAnnotation;
}

export namespace TextAnnotation {
  export type AsObject = {
    text: string,
    segmentsList: Array<TextSegment.AsObject>,
  }
}

export class ObjectTrackingFrame extends jspb.Message {
  hasNormalizedBoundingBox(): boolean;
  clearNormalizedBoundingBox(): void;
  getNormalizedBoundingBox(): NormalizedBoundingBox | undefined;
  setNormalizedBoundingBox(value?: NormalizedBoundingBox): void;

  hasTimeOffset(): boolean;
  clearTimeOffset(): void;
  getTimeOffset(): google_protobuf_duration_pb.Duration | undefined;
  setTimeOffset(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectTrackingFrame.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectTrackingFrame): ObjectTrackingFrame.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectTrackingFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectTrackingFrame;
  static deserializeBinaryFromReader(message: ObjectTrackingFrame, reader: jspb.BinaryReader): ObjectTrackingFrame;
}

export namespace ObjectTrackingFrame {
  export type AsObject = {
    normalizedBoundingBox?: NormalizedBoundingBox.AsObject,
    timeOffset?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class ObjectTrackingAnnotation extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): Entity | undefined;
  setEntity(value?: Entity): void;

  getConfidence(): number;
  setConfidence(value: number): void;

  clearFramesList(): void;
  getFramesList(): Array<ObjectTrackingFrame>;
  setFramesList(value: Array<ObjectTrackingFrame>): void;
  addFrames(value?: ObjectTrackingFrame, index?: number): ObjectTrackingFrame;

  hasSegment(): boolean;
  clearSegment(): void;
  getSegment(): VideoSegment | undefined;
  setSegment(value?: VideoSegment): void;

  hasTrackId(): boolean;
  clearTrackId(): void;
  getTrackId(): number;
  setTrackId(value: number): void;

  getTrackInfoCase(): ObjectTrackingAnnotation.TrackInfoCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectTrackingAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectTrackingAnnotation): ObjectTrackingAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectTrackingAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectTrackingAnnotation;
  static deserializeBinaryFromReader(message: ObjectTrackingAnnotation, reader: jspb.BinaryReader): ObjectTrackingAnnotation;
}

export namespace ObjectTrackingAnnotation {
  export type AsObject = {
    entity?: Entity.AsObject,
    confidence: number,
    framesList: Array<ObjectTrackingFrame.AsObject>,
    segment?: VideoSegment.AsObject,
    trackId: number,
  }

  export enum TrackInfoCase {
    TRACK_INFO_NOT_SET = 0,
    SEGMENT = 3,
    TRACK_ID = 5,
  }
}

export class LogoRecognitionAnnotation extends jspb.Message {
  hasEntity(): boolean;
  clearEntity(): void;
  getEntity(): Entity | undefined;
  setEntity(value?: Entity): void;

  clearTracksList(): void;
  getTracksList(): Array<Track>;
  setTracksList(value: Array<Track>): void;
  addTracks(value?: Track, index?: number): Track;

  clearSegmentsList(): void;
  getSegmentsList(): Array<VideoSegment>;
  setSegmentsList(value: Array<VideoSegment>): void;
  addSegments(value?: VideoSegment, index?: number): VideoSegment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoRecognitionAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: LogoRecognitionAnnotation): LogoRecognitionAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogoRecognitionAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoRecognitionAnnotation;
  static deserializeBinaryFromReader(message: LogoRecognitionAnnotation, reader: jspb.BinaryReader): LogoRecognitionAnnotation;
}

export namespace LogoRecognitionAnnotation {
  export type AsObject = {
    entity?: Entity.AsObject,
    tracksList: Array<Track.AsObject>,
    segmentsList: Array<VideoSegment.AsObject>,
  }
}

export class StreamingAnnotateVideoRequest extends jspb.Message {
  hasVideoConfig(): boolean;
  clearVideoConfig(): void;
  getVideoConfig(): StreamingVideoConfig | undefined;
  setVideoConfig(value?: StreamingVideoConfig): void;

  hasInputContent(): boolean;
  clearInputContent(): void;
  getInputContent(): Uint8Array | string;
  getInputContent_asU8(): Uint8Array;
  getInputContent_asB64(): string;
  setInputContent(value: Uint8Array | string): void;

  getStreamingRequestCase(): StreamingAnnotateVideoRequest.StreamingRequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingAnnotateVideoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingAnnotateVideoRequest): StreamingAnnotateVideoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamingAnnotateVideoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingAnnotateVideoRequest;
  static deserializeBinaryFromReader(message: StreamingAnnotateVideoRequest, reader: jspb.BinaryReader): StreamingAnnotateVideoRequest;
}

export namespace StreamingAnnotateVideoRequest {
  export type AsObject = {
    videoConfig?: StreamingVideoConfig.AsObject,
    inputContent: Uint8Array | string,
  }

  export enum StreamingRequestCase {
    STREAMING_REQUEST_NOT_SET = 0,
    VIDEO_CONFIG = 1,
    INPUT_CONTENT = 2,
  }
}

export class StreamingAnnotateVideoResponse extends jspb.Message {
  hasError(): boolean;
  clearError(): void;
  getError(): google_rpc_status_pb.Status | undefined;
  setError(value?: google_rpc_status_pb.Status): void;

  hasAnnotationResults(): boolean;
  clearAnnotationResults(): void;
  getAnnotationResults(): StreamingVideoAnnotationResults | undefined;
  setAnnotationResults(value?: StreamingVideoAnnotationResults): void;

  getAnnotationResultsUri(): string;
  setAnnotationResultsUri(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingAnnotateVideoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingAnnotateVideoResponse): StreamingAnnotateVideoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamingAnnotateVideoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingAnnotateVideoResponse;
  static deserializeBinaryFromReader(message: StreamingAnnotateVideoResponse, reader: jspb.BinaryReader): StreamingAnnotateVideoResponse;
}

export namespace StreamingAnnotateVideoResponse {
  export type AsObject = {
    error?: google_rpc_status_pb.Status.AsObject,
    annotationResults?: StreamingVideoAnnotationResults.AsObject,
    annotationResultsUri: string,
  }
}

export class StreamingAutomlClassificationConfig extends jspb.Message {
  getModelName(): string;
  setModelName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingAutomlClassificationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingAutomlClassificationConfig): StreamingAutomlClassificationConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamingAutomlClassificationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingAutomlClassificationConfig;
  static deserializeBinaryFromReader(message: StreamingAutomlClassificationConfig, reader: jspb.BinaryReader): StreamingAutomlClassificationConfig;
}

export namespace StreamingAutomlClassificationConfig {
  export type AsObject = {
    modelName: string,
  }
}

export class StreamingAutomlObjectTrackingConfig extends jspb.Message {
  getModelName(): string;
  setModelName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingAutomlObjectTrackingConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingAutomlObjectTrackingConfig): StreamingAutomlObjectTrackingConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamingAutomlObjectTrackingConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingAutomlObjectTrackingConfig;
  static deserializeBinaryFromReader(message: StreamingAutomlObjectTrackingConfig, reader: jspb.BinaryReader): StreamingAutomlObjectTrackingConfig;
}

export namespace StreamingAutomlObjectTrackingConfig {
  export type AsObject = {
    modelName: string,
  }
}

export class StreamingExplicitContentDetectionConfig extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingExplicitContentDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingExplicitContentDetectionConfig): StreamingExplicitContentDetectionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamingExplicitContentDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingExplicitContentDetectionConfig;
  static deserializeBinaryFromReader(message: StreamingExplicitContentDetectionConfig, reader: jspb.BinaryReader): StreamingExplicitContentDetectionConfig;
}

export namespace StreamingExplicitContentDetectionConfig {
  export type AsObject = {
  }
}

export class StreamingLabelDetectionConfig extends jspb.Message {
  getStationaryCamera(): boolean;
  setStationaryCamera(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingLabelDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingLabelDetectionConfig): StreamingLabelDetectionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamingLabelDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingLabelDetectionConfig;
  static deserializeBinaryFromReader(message: StreamingLabelDetectionConfig, reader: jspb.BinaryReader): StreamingLabelDetectionConfig;
}

export namespace StreamingLabelDetectionConfig {
  export type AsObject = {
    stationaryCamera: boolean,
  }
}

export class StreamingObjectTrackingConfig extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingObjectTrackingConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingObjectTrackingConfig): StreamingObjectTrackingConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamingObjectTrackingConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingObjectTrackingConfig;
  static deserializeBinaryFromReader(message: StreamingObjectTrackingConfig, reader: jspb.BinaryReader): StreamingObjectTrackingConfig;
}

export namespace StreamingObjectTrackingConfig {
  export type AsObject = {
  }
}

export class StreamingShotChangeDetectionConfig extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingShotChangeDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingShotChangeDetectionConfig): StreamingShotChangeDetectionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamingShotChangeDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingShotChangeDetectionConfig;
  static deserializeBinaryFromReader(message: StreamingShotChangeDetectionConfig, reader: jspb.BinaryReader): StreamingShotChangeDetectionConfig;
}

export namespace StreamingShotChangeDetectionConfig {
  export type AsObject = {
  }
}

export class StreamingStorageConfig extends jspb.Message {
  getEnableStorageAnnotationResult(): boolean;
  setEnableStorageAnnotationResult(value: boolean): void;

  getAnnotationResultStorageDirectory(): string;
  setAnnotationResultStorageDirectory(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingStorageConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingStorageConfig): StreamingStorageConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamingStorageConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingStorageConfig;
  static deserializeBinaryFromReader(message: StreamingStorageConfig, reader: jspb.BinaryReader): StreamingStorageConfig;
}

export namespace StreamingStorageConfig {
  export type AsObject = {
    enableStorageAnnotationResult: boolean,
    annotationResultStorageDirectory: string,
  }
}

export class StreamingVideoAnnotationResults extends jspb.Message {
  clearShotAnnotationsList(): void;
  getShotAnnotationsList(): Array<VideoSegment>;
  setShotAnnotationsList(value: Array<VideoSegment>): void;
  addShotAnnotations(value?: VideoSegment, index?: number): VideoSegment;

  clearLabelAnnotationsList(): void;
  getLabelAnnotationsList(): Array<LabelAnnotation>;
  setLabelAnnotationsList(value: Array<LabelAnnotation>): void;
  addLabelAnnotations(value?: LabelAnnotation, index?: number): LabelAnnotation;

  hasExplicitAnnotation(): boolean;
  clearExplicitAnnotation(): void;
  getExplicitAnnotation(): ExplicitContentAnnotation | undefined;
  setExplicitAnnotation(value?: ExplicitContentAnnotation): void;

  clearObjectAnnotationsList(): void;
  getObjectAnnotationsList(): Array<ObjectTrackingAnnotation>;
  setObjectAnnotationsList(value: Array<ObjectTrackingAnnotation>): void;
  addObjectAnnotations(value?: ObjectTrackingAnnotation, index?: number): ObjectTrackingAnnotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingVideoAnnotationResults.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingVideoAnnotationResults): StreamingVideoAnnotationResults.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamingVideoAnnotationResults, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingVideoAnnotationResults;
  static deserializeBinaryFromReader(message: StreamingVideoAnnotationResults, reader: jspb.BinaryReader): StreamingVideoAnnotationResults;
}

export namespace StreamingVideoAnnotationResults {
  export type AsObject = {
    shotAnnotationsList: Array<VideoSegment.AsObject>,
    labelAnnotationsList: Array<LabelAnnotation.AsObject>,
    explicitAnnotation?: ExplicitContentAnnotation.AsObject,
    objectAnnotationsList: Array<ObjectTrackingAnnotation.AsObject>,
  }
}

export class StreamingVideoConfig extends jspb.Message {
  getFeature(): StreamingFeatureMap[keyof StreamingFeatureMap];
  setFeature(value: StreamingFeatureMap[keyof StreamingFeatureMap]): void;

  hasShotChangeDetectionConfig(): boolean;
  clearShotChangeDetectionConfig(): void;
  getShotChangeDetectionConfig(): StreamingShotChangeDetectionConfig | undefined;
  setShotChangeDetectionConfig(value?: StreamingShotChangeDetectionConfig): void;

  hasLabelDetectionConfig(): boolean;
  clearLabelDetectionConfig(): void;
  getLabelDetectionConfig(): StreamingLabelDetectionConfig | undefined;
  setLabelDetectionConfig(value?: StreamingLabelDetectionConfig): void;

  hasExplicitContentDetectionConfig(): boolean;
  clearExplicitContentDetectionConfig(): void;
  getExplicitContentDetectionConfig(): StreamingExplicitContentDetectionConfig | undefined;
  setExplicitContentDetectionConfig(value?: StreamingExplicitContentDetectionConfig): void;

  hasObjectTrackingConfig(): boolean;
  clearObjectTrackingConfig(): void;
  getObjectTrackingConfig(): StreamingObjectTrackingConfig | undefined;
  setObjectTrackingConfig(value?: StreamingObjectTrackingConfig): void;

  hasAutomlClassificationConfig(): boolean;
  clearAutomlClassificationConfig(): void;
  getAutomlClassificationConfig(): StreamingAutomlClassificationConfig | undefined;
  setAutomlClassificationConfig(value?: StreamingAutomlClassificationConfig): void;

  hasAutomlObjectTrackingConfig(): boolean;
  clearAutomlObjectTrackingConfig(): void;
  getAutomlObjectTrackingConfig(): StreamingAutomlObjectTrackingConfig | undefined;
  setAutomlObjectTrackingConfig(value?: StreamingAutomlObjectTrackingConfig): void;

  hasStorageConfig(): boolean;
  clearStorageConfig(): void;
  getStorageConfig(): StreamingStorageConfig | undefined;
  setStorageConfig(value?: StreamingStorageConfig): void;

  getStreamingConfigCase(): StreamingVideoConfig.StreamingConfigCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingVideoConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingVideoConfig): StreamingVideoConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamingVideoConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingVideoConfig;
  static deserializeBinaryFromReader(message: StreamingVideoConfig, reader: jspb.BinaryReader): StreamingVideoConfig;
}

export namespace StreamingVideoConfig {
  export type AsObject = {
    feature: StreamingFeatureMap[keyof StreamingFeatureMap],
    shotChangeDetectionConfig?: StreamingShotChangeDetectionConfig.AsObject,
    labelDetectionConfig?: StreamingLabelDetectionConfig.AsObject,
    explicitContentDetectionConfig?: StreamingExplicitContentDetectionConfig.AsObject,
    objectTrackingConfig?: StreamingObjectTrackingConfig.AsObject,
    automlClassificationConfig?: StreamingAutomlClassificationConfig.AsObject,
    automlObjectTrackingConfig?: StreamingAutomlObjectTrackingConfig.AsObject,
    storageConfig?: StreamingStorageConfig.AsObject,
  }

  export enum StreamingConfigCase {
    STREAMING_CONFIG_NOT_SET = 0,
    SHOT_CHANGE_DETECTION_CONFIG = 2,
    LABEL_DETECTION_CONFIG = 3,
    EXPLICIT_CONTENT_DETECTION_CONFIG = 4,
    OBJECT_TRACKING_CONFIG = 5,
    AUTOML_CLASSIFICATION_CONFIG = 21,
    AUTOML_OBJECT_TRACKING_CONFIG = 22,
  }
}

export interface FeatureMap {
  FEATURE_UNSPECIFIED: 0;
  LABEL_DETECTION: 1;
  SHOT_CHANGE_DETECTION: 2;
  EXPLICIT_CONTENT_DETECTION: 3;
  SPEECH_TRANSCRIPTION: 6;
  TEXT_DETECTION: 7;
  OBJECT_TRACKING: 9;
  LOGO_RECOGNITION: 12;
  CELEBRITY_RECOGNITION: 13;
}

export const Feature: FeatureMap;

export interface LabelDetectionModeMap {
  LABEL_DETECTION_MODE_UNSPECIFIED: 0;
  SHOT_MODE: 1;
  FRAME_MODE: 2;
  SHOT_AND_FRAME_MODE: 3;
}

export const LabelDetectionMode: LabelDetectionModeMap;

export interface LikelihoodMap {
  LIKELIHOOD_UNSPECIFIED: 0;
  VERY_UNLIKELY: 1;
  UNLIKELY: 2;
  POSSIBLE: 3;
  LIKELY: 4;
  VERY_LIKELY: 5;
}

export const Likelihood: LikelihoodMap;

export interface StreamingFeatureMap {
  STREAMING_FEATURE_UNSPECIFIED: 0;
  STREAMING_LABEL_DETECTION: 1;
  STREAMING_SHOT_CHANGE_DETECTION: 2;
  STREAMING_EXPLICIT_CONTENT_DETECTION: 3;
  STREAMING_OBJECT_TRACKING: 4;
  STREAMING_AUTOML_CLASSIFICATION: 21;
  STREAMING_AUTOML_OBJECT_TRACKING: 22;
}

export const StreamingFeature: StreamingFeatureMap;

