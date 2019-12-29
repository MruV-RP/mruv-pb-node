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

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_api_servicecontrol_v1_log_entry_pb = require('../../../../google/api/servicecontrol/v1/log_entry_pb.js');
goog.object.extend(proto, google_api_servicecontrol_v1_log_entry_pb);
var google_api_servicecontrol_v1_metric_value_pb = require('../../../../google/api/servicecontrol/v1/metric_value_pb.js');
goog.object.extend(proto, google_api_servicecontrol_v1_metric_value_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.google.api.servicecontrol.v1.Operation', null, global);
goog.exportSymbol('proto.google.api.servicecontrol.v1.Operation.Importance', null, global);
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
proto.google.api.servicecontrol.v1.Operation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.servicecontrol.v1.Operation.repeatedFields_, null);
};
goog.inherits(proto.google.api.servicecontrol.v1.Operation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.servicecontrol.v1.Operation.displayName = 'proto.google.api.servicecontrol.v1.Operation';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.servicecontrol.v1.Operation.repeatedFields_ = [7,8];



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
proto.google.api.servicecontrol.v1.Operation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.servicecontrol.v1.Operation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.servicecontrol.v1.Operation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.servicecontrol.v1.Operation.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    operationName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    consumerId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    metricValueSetsList: jspb.Message.toObjectList(msg.getMetricValueSetsList(),
    google_api_servicecontrol_v1_metric_value_pb.MetricValueSet.toObject, includeInstance),
    logEntriesList: jspb.Message.toObjectList(msg.getLogEntriesList(),
    google_api_servicecontrol_v1_log_entry_pb.LogEntry.toObject, includeInstance),
    importance: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.google.api.servicecontrol.v1.Operation}
 */
proto.google.api.servicecontrol.v1.Operation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.servicecontrol.v1.Operation;
  return proto.google.api.servicecontrol.v1.Operation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.servicecontrol.v1.Operation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.servicecontrol.v1.Operation}
 */
proto.google.api.servicecontrol.v1.Operation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperationName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setConsumerId(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 6:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 7:
      var value = new google_api_servicecontrol_v1_metric_value_pb.MetricValueSet;
      reader.readMessage(value,google_api_servicecontrol_v1_metric_value_pb.MetricValueSet.deserializeBinaryFromReader);
      msg.addMetricValueSets(value);
      break;
    case 8:
      var value = new google_api_servicecontrol_v1_log_entry_pb.LogEntry;
      reader.readMessage(value,google_api_servicecontrol_v1_log_entry_pb.LogEntry.deserializeBinaryFromReader);
      msg.addLogEntries(value);
      break;
    case 11:
      var value = /** @type {!proto.google.api.servicecontrol.v1.Operation.Importance} */ (reader.readEnum());
      msg.setImportance(value);
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
proto.google.api.servicecontrol.v1.Operation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.servicecontrol.v1.Operation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.servicecontrol.v1.Operation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.servicecontrol.v1.Operation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOperationName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getConsumerId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getMetricValueSetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      google_api_servicecontrol_v1_metric_value_pb.MetricValueSet.serializeBinaryToWriter
    );
  }
  f = message.getLogEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      google_api_servicecontrol_v1_log_entry_pb.LogEntry.serializeBinaryToWriter
    );
  }
  f = message.getImportance();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.api.servicecontrol.v1.Operation.Importance = {
  LOW: 0,
  HIGH: 1
};

/**
 * optional string operation_id = 1;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.Operation.prototype.getOperationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.api.servicecontrol.v1.Operation.prototype.setOperationId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string operation_name = 2;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.Operation.prototype.getOperationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.api.servicecontrol.v1.Operation.prototype.setOperationName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string consumer_id = 3;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.Operation.prototype.getConsumerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.api.servicecontrol.v1.Operation.prototype.setConsumerId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.api.servicecontrol.v1.Operation.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.api.servicecontrol.v1.Operation.prototype.setStartTime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.api.servicecontrol.v1.Operation.prototype.clearStartTime = function() {
  this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.api.servicecontrol.v1.Operation.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.api.servicecontrol.v1.Operation.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.google.api.servicecontrol.v1.Operation.prototype.setEndTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.api.servicecontrol.v1.Operation.prototype.clearEndTime = function() {
  this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.api.servicecontrol.v1.Operation.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * map<string, string> labels = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.api.servicecontrol.v1.Operation.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.google.api.servicecontrol.v1.Operation.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
};


/**
 * repeated MetricValueSet metric_value_sets = 7;
 * @return {!Array<!proto.google.api.servicecontrol.v1.MetricValueSet>}
 */
proto.google.api.servicecontrol.v1.Operation.prototype.getMetricValueSetsList = function() {
  return /** @type{!Array<!proto.google.api.servicecontrol.v1.MetricValueSet>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_api_servicecontrol_v1_metric_value_pb.MetricValueSet, 7));
};


/** @param {!Array<!proto.google.api.servicecontrol.v1.MetricValueSet>} value */
proto.google.api.servicecontrol.v1.Operation.prototype.setMetricValueSetsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.google.api.servicecontrol.v1.MetricValueSet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.servicecontrol.v1.MetricValueSet}
 */
proto.google.api.servicecontrol.v1.Operation.prototype.addMetricValueSets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.google.api.servicecontrol.v1.MetricValueSet, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.api.servicecontrol.v1.Operation.prototype.clearMetricValueSetsList = function() {
  this.setMetricValueSetsList([]);
};


/**
 * repeated LogEntry log_entries = 8;
 * @return {!Array<!proto.google.api.servicecontrol.v1.LogEntry>}
 */
proto.google.api.servicecontrol.v1.Operation.prototype.getLogEntriesList = function() {
  return /** @type{!Array<!proto.google.api.servicecontrol.v1.LogEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_api_servicecontrol_v1_log_entry_pb.LogEntry, 8));
};


/** @param {!Array<!proto.google.api.servicecontrol.v1.LogEntry>} value */
proto.google.api.servicecontrol.v1.Operation.prototype.setLogEntriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.google.api.servicecontrol.v1.LogEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.servicecontrol.v1.LogEntry}
 */
proto.google.api.servicecontrol.v1.Operation.prototype.addLogEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.google.api.servicecontrol.v1.LogEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.api.servicecontrol.v1.Operation.prototype.clearLogEntriesList = function() {
  this.setLogEntriesList([]);
};


/**
 * optional Importance importance = 11;
 * @return {!proto.google.api.servicecontrol.v1.Operation.Importance}
 */
proto.google.api.servicecontrol.v1.Operation.prototype.getImportance = function() {
  return /** @type {!proto.google.api.servicecontrol.v1.Operation.Importance} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {!proto.google.api.servicecontrol.v1.Operation.Importance} value */
proto.google.api.servicecontrol.v1.Operation.prototype.setImportance = function(value) {
  jspb.Message.setProto3EnumField(this, 11, value);
};


goog.object.extend(exports, proto.google.api.servicecontrol.v1);
