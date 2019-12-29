/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
goog.object.extend(proto, google_api_resource_pb);
var google_cloud_automl_v1_image_pb = require('../../../../google/cloud/automl/v1/image_pb.js');
goog.object.extend(proto, google_cloud_automl_v1_image_pb);
var google_cloud_automl_v1_text_pb = require('../../../../google/cloud/automl/v1/text_pb.js');
goog.object.extend(proto, google_cloud_automl_v1_text_pb);
var google_cloud_automl_v1_translation_pb = require('../../../../google/cloud/automl/v1/translation_pb.js');
goog.object.extend(proto, google_cloud_automl_v1_translation_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.cloud.automl.v1.Model', null, global);
goog.exportSymbol('proto.google.cloud.automl.v1.Model.DeploymentState', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.cloud.automl.v1.Model = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.cloud.automl.v1.Model.oneofGroups_);
};
goog.inherits(proto.google.cloud.automl.v1.Model, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.automl.v1.Model.displayName = 'proto.google.cloud.automl.v1.Model';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.cloud.automl.v1.Model.oneofGroups_ = [[15,13,14,20,19,22]];

/**
 * @enum {number}
 */
proto.google.cloud.automl.v1.Model.ModelMetadataCase = {
  MODEL_METADATA_NOT_SET: 0,
  TRANSLATION_MODEL_METADATA: 15,
  IMAGE_CLASSIFICATION_MODEL_METADATA: 13,
  TEXT_CLASSIFICATION_MODEL_METADATA: 14,
  IMAGE_OBJECT_DETECTION_MODEL_METADATA: 20,
  TEXT_EXTRACTION_MODEL_METADATA: 19,
  TEXT_SENTIMENT_MODEL_METADATA: 22
};

/**
 * @return {proto.google.cloud.automl.v1.Model.ModelMetadataCase}
 */
proto.google.cloud.automl.v1.Model.prototype.getModelMetadataCase = function() {
  return /** @type {proto.google.cloud.automl.v1.Model.ModelMetadataCase} */(jspb.Message.computeOneofCase(this, proto.google.cloud.automl.v1.Model.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.cloud.automl.v1.Model.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.automl.v1.Model.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.automl.v1.Model} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1.Model.toObject = function(includeInstance, msg) {
  var f, obj = {
    translationModelMetadata: (f = msg.getTranslationModelMetadata()) && google_cloud_automl_v1_translation_pb.TranslationModelMetadata.toObject(includeInstance, f),
    imageClassificationModelMetadata: (f = msg.getImageClassificationModelMetadata()) && google_cloud_automl_v1_image_pb.ImageClassificationModelMetadata.toObject(includeInstance, f),
    textClassificationModelMetadata: (f = msg.getTextClassificationModelMetadata()) && google_cloud_automl_v1_text_pb.TextClassificationModelMetadata.toObject(includeInstance, f),
    imageObjectDetectionModelMetadata: (f = msg.getImageObjectDetectionModelMetadata()) && google_cloud_automl_v1_image_pb.ImageObjectDetectionModelMetadata.toObject(includeInstance, f),
    textExtractionModelMetadata: (f = msg.getTextExtractionModelMetadata()) && google_cloud_automl_v1_text_pb.TextExtractionModelMetadata.toObject(includeInstance, f),
    textSentimentModelMetadata: (f = msg.getTextSentimentModelMetadata()) && google_cloud_automl_v1_text_pb.TextSentimentModelMetadata.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    datasetId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    deploymentState: jspb.Message.getFieldWithDefault(msg, 8, 0),
    etag: jspb.Message.getFieldWithDefault(msg, 10, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.cloud.automl.v1.Model}
 */
proto.google.cloud.automl.v1.Model.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.automl.v1.Model;
  return proto.google.cloud.automl.v1.Model.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.automl.v1.Model} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.automl.v1.Model}
 */
proto.google.cloud.automl.v1.Model.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 15:
      var value = new google_cloud_automl_v1_translation_pb.TranslationModelMetadata;
      reader.readMessage(value,google_cloud_automl_v1_translation_pb.TranslationModelMetadata.deserializeBinaryFromReader);
      msg.setTranslationModelMetadata(value);
      break;
    case 13:
      var value = new google_cloud_automl_v1_image_pb.ImageClassificationModelMetadata;
      reader.readMessage(value,google_cloud_automl_v1_image_pb.ImageClassificationModelMetadata.deserializeBinaryFromReader);
      msg.setImageClassificationModelMetadata(value);
      break;
    case 14:
      var value = new google_cloud_automl_v1_text_pb.TextClassificationModelMetadata;
      reader.readMessage(value,google_cloud_automl_v1_text_pb.TextClassificationModelMetadata.deserializeBinaryFromReader);
      msg.setTextClassificationModelMetadata(value);
      break;
    case 20:
      var value = new google_cloud_automl_v1_image_pb.ImageObjectDetectionModelMetadata;
      reader.readMessage(value,google_cloud_automl_v1_image_pb.ImageObjectDetectionModelMetadata.deserializeBinaryFromReader);
      msg.setImageObjectDetectionModelMetadata(value);
      break;
    case 19:
      var value = new google_cloud_automl_v1_text_pb.TextExtractionModelMetadata;
      reader.readMessage(value,google_cloud_automl_v1_text_pb.TextExtractionModelMetadata.deserializeBinaryFromReader);
      msg.setTextExtractionModelMetadata(value);
      break;
    case 22:
      var value = new google_cloud_automl_v1_text_pb.TextSentimentModelMetadata;
      reader.readMessage(value,google_cloud_automl_v1_text_pb.TextSentimentModelMetadata.deserializeBinaryFromReader);
      msg.setTextSentimentModelMetadata(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetId(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
      break;
    case 8:
      var value = /** @type {!proto.google.cloud.automl.v1.Model.DeploymentState} */ (reader.readEnum());
      msg.setDeploymentState(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setEtag(value);
      break;
    case 34:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.cloud.automl.v1.Model.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.automl.v1.Model.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.automl.v1.Model} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.automl.v1.Model.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranslationModelMetadata();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_cloud_automl_v1_translation_pb.TranslationModelMetadata.serializeBinaryToWriter
    );
  }
  f = message.getImageClassificationModelMetadata();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_cloud_automl_v1_image_pb.ImageClassificationModelMetadata.serializeBinaryToWriter
    );
  }
  f = message.getTextClassificationModelMetadata();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_cloud_automl_v1_text_pb.TextClassificationModelMetadata.serializeBinaryToWriter
    );
  }
  f = message.getImageObjectDetectionModelMetadata();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      google_cloud_automl_v1_image_pb.ImageObjectDetectionModelMetadata.serializeBinaryToWriter
    );
  }
  f = message.getTextExtractionModelMetadata();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      google_cloud_automl_v1_text_pb.TextExtractionModelMetadata.serializeBinaryToWriter
    );
  }
  f = message.getTextSentimentModelMetadata();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      google_cloud_automl_v1_text_pb.TextSentimentModelMetadata.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDatasetId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDeploymentState();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getEtag();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(34, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * @enum {number}
 */
proto.google.cloud.automl.v1.Model.DeploymentState = {
  DEPLOYMENT_STATE_UNSPECIFIED: 0,
  DEPLOYED: 1,
  UNDEPLOYED: 2
};

/**
 * optional TranslationModelMetadata translation_model_metadata = 15;
 * @return {?proto.google.cloud.automl.v1.TranslationModelMetadata}
 */
proto.google.cloud.automl.v1.Model.prototype.getTranslationModelMetadata = function() {
  return /** @type{?proto.google.cloud.automl.v1.TranslationModelMetadata} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1_translation_pb.TranslationModelMetadata, 15));
};


/** @param {?proto.google.cloud.automl.v1.TranslationModelMetadata|undefined} value */
proto.google.cloud.automl.v1.Model.prototype.setTranslationModelMetadata = function(value) {
  jspb.Message.setOneofWrapperField(this, 15, proto.google.cloud.automl.v1.Model.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1.Model.prototype.clearTranslationModelMetadata = function() {
  this.setTranslationModelMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1.Model.prototype.hasTranslationModelMetadata = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ImageClassificationModelMetadata image_classification_model_metadata = 13;
 * @return {?proto.google.cloud.automl.v1.ImageClassificationModelMetadata}
 */
proto.google.cloud.automl.v1.Model.prototype.getImageClassificationModelMetadata = function() {
  return /** @type{?proto.google.cloud.automl.v1.ImageClassificationModelMetadata} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1_image_pb.ImageClassificationModelMetadata, 13));
};


/** @param {?proto.google.cloud.automl.v1.ImageClassificationModelMetadata|undefined} value */
proto.google.cloud.automl.v1.Model.prototype.setImageClassificationModelMetadata = function(value) {
  jspb.Message.setOneofWrapperField(this, 13, proto.google.cloud.automl.v1.Model.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1.Model.prototype.clearImageClassificationModelMetadata = function() {
  this.setImageClassificationModelMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1.Model.prototype.hasImageClassificationModelMetadata = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional TextClassificationModelMetadata text_classification_model_metadata = 14;
 * @return {?proto.google.cloud.automl.v1.TextClassificationModelMetadata}
 */
proto.google.cloud.automl.v1.Model.prototype.getTextClassificationModelMetadata = function() {
  return /** @type{?proto.google.cloud.automl.v1.TextClassificationModelMetadata} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1_text_pb.TextClassificationModelMetadata, 14));
};


/** @param {?proto.google.cloud.automl.v1.TextClassificationModelMetadata|undefined} value */
proto.google.cloud.automl.v1.Model.prototype.setTextClassificationModelMetadata = function(value) {
  jspb.Message.setOneofWrapperField(this, 14, proto.google.cloud.automl.v1.Model.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1.Model.prototype.clearTextClassificationModelMetadata = function() {
  this.setTextClassificationModelMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1.Model.prototype.hasTextClassificationModelMetadata = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ImageObjectDetectionModelMetadata image_object_detection_model_metadata = 20;
 * @return {?proto.google.cloud.automl.v1.ImageObjectDetectionModelMetadata}
 */
proto.google.cloud.automl.v1.Model.prototype.getImageObjectDetectionModelMetadata = function() {
  return /** @type{?proto.google.cloud.automl.v1.ImageObjectDetectionModelMetadata} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1_image_pb.ImageObjectDetectionModelMetadata, 20));
};


/** @param {?proto.google.cloud.automl.v1.ImageObjectDetectionModelMetadata|undefined} value */
proto.google.cloud.automl.v1.Model.prototype.setImageObjectDetectionModelMetadata = function(value) {
  jspb.Message.setOneofWrapperField(this, 20, proto.google.cloud.automl.v1.Model.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1.Model.prototype.clearImageObjectDetectionModelMetadata = function() {
  this.setImageObjectDetectionModelMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1.Model.prototype.hasImageObjectDetectionModelMetadata = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional TextExtractionModelMetadata text_extraction_model_metadata = 19;
 * @return {?proto.google.cloud.automl.v1.TextExtractionModelMetadata}
 */
proto.google.cloud.automl.v1.Model.prototype.getTextExtractionModelMetadata = function() {
  return /** @type{?proto.google.cloud.automl.v1.TextExtractionModelMetadata} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1_text_pb.TextExtractionModelMetadata, 19));
};


/** @param {?proto.google.cloud.automl.v1.TextExtractionModelMetadata|undefined} value */
proto.google.cloud.automl.v1.Model.prototype.setTextExtractionModelMetadata = function(value) {
  jspb.Message.setOneofWrapperField(this, 19, proto.google.cloud.automl.v1.Model.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1.Model.prototype.clearTextExtractionModelMetadata = function() {
  this.setTextExtractionModelMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1.Model.prototype.hasTextExtractionModelMetadata = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional TextSentimentModelMetadata text_sentiment_model_metadata = 22;
 * @return {?proto.google.cloud.automl.v1.TextSentimentModelMetadata}
 */
proto.google.cloud.automl.v1.Model.prototype.getTextSentimentModelMetadata = function() {
  return /** @type{?proto.google.cloud.automl.v1.TextSentimentModelMetadata} */ (
    jspb.Message.getWrapperField(this, google_cloud_automl_v1_text_pb.TextSentimentModelMetadata, 22));
};


/** @param {?proto.google.cloud.automl.v1.TextSentimentModelMetadata|undefined} value */
proto.google.cloud.automl.v1.Model.prototype.setTextSentimentModelMetadata = function(value) {
  jspb.Message.setOneofWrapperField(this, 22, proto.google.cloud.automl.v1.Model.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1.Model.prototype.clearTextSentimentModelMetadata = function() {
  this.setTextSentimentModelMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1.Model.prototype.hasTextSentimentModelMetadata = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.automl.v1.Model.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1.Model.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.google.cloud.automl.v1.Model.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1.Model.prototype.setDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dataset_id = 3;
 * @return {string}
 */
proto.google.cloud.automl.v1.Model.prototype.getDatasetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1.Model.prototype.setDatasetId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.automl.v1.Model.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.cloud.automl.v1.Model.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1.Model.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1.Model.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.cloud.automl.v1.Model.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.cloud.automl.v1.Model.prototype.setUpdateTime = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.automl.v1.Model.prototype.clearUpdateTime = function() {
  this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.automl.v1.Model.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional DeploymentState deployment_state = 8;
 * @return {!proto.google.cloud.automl.v1.Model.DeploymentState}
 */
proto.google.cloud.automl.v1.Model.prototype.getDeploymentState = function() {
  return /** @type {!proto.google.cloud.automl.v1.Model.DeploymentState} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {!proto.google.cloud.automl.v1.Model.DeploymentState} value */
proto.google.cloud.automl.v1.Model.prototype.setDeploymentState = function(value) {
  jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional string etag = 10;
 * @return {string}
 */
proto.google.cloud.automl.v1.Model.prototype.getEtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.google.cloud.automl.v1.Model.prototype.setEtag = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * map<string, string> labels = 34;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.cloud.automl.v1.Model.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 34, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.google.cloud.automl.v1.Model.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
};


goog.object.extend(exports, proto.google.cloud.automl.v1);
