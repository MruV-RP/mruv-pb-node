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

var google_ads_googleads_v2_common_dates_pb = require('../../../../../google/ads/googleads/v2/common/dates_pb.js');
goog.object.extend(proto, google_ads_googleads_v2_common_dates_pb);
var google_ads_googleads_v2_enums_keyword_plan_forecast_interval_pb = require('../../../../../google/ads/googleads/v2/enums/keyword_plan_forecast_interval_pb.js');
goog.object.extend(proto, google_ads_googleads_v2_enums_keyword_plan_forecast_interval_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.ads.googleads.v2.resources.KeywordPlan', null, global);
goog.exportSymbol('proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod', null, global);
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
proto.google.ads.googleads.v2.resources.KeywordPlan = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v2.resources.KeywordPlan, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.resources.KeywordPlan.displayName = 'proto.google.ads.googleads.v2.resources.KeywordPlan';
}
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
proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.oneofGroups_);
};
goog.inherits(proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.displayName = 'proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod';
}



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
proto.google.ads.googleads.v2.resources.KeywordPlan.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.resources.KeywordPlan.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.resources.KeywordPlan} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.resources.KeywordPlan.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: (f = msg.getId()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    name: (f = msg.getName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    forecastPeriod: (f = msg.getForecastPeriod()) && proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v2.resources.KeywordPlan}
 */
proto.google.ads.googleads.v2.resources.KeywordPlan.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.resources.KeywordPlan;
  return proto.google.ads.googleads.v2.resources.KeywordPlan.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.resources.KeywordPlan} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.resources.KeywordPlan}
 */
proto.google.ads.googleads.v2.resources.KeywordPlan.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 4:
      var value = new proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod;
      reader.readMessage(value,proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.deserializeBinaryFromReader);
      msg.setForecastPeriod(value);
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
proto.google.ads.googleads.v2.resources.KeywordPlan.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.resources.KeywordPlan.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.resources.KeywordPlan} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.resources.KeywordPlan.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getForecastPeriod();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.serializeBinaryToWriter
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v2.resources.KeywordPlan.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v2.resources.KeywordPlan.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Int64Value id = 2;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v2.resources.KeywordPlan.prototype.getId = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 2));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v2.resources.KeywordPlan.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.KeywordPlan.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.KeywordPlan.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.StringValue name = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v2.resources.KeywordPlan.prototype.getName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v2.resources.KeywordPlan.prototype.setName = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.KeywordPlan.prototype.clearName = function() {
  this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.KeywordPlan.prototype.hasName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional KeywordPlanForecastPeriod forecast_period = 4;
 * @return {?proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod}
 */
proto.google.ads.googleads.v2.resources.KeywordPlan.prototype.getForecastPeriod = function() {
  return /** @type{?proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod} */ (
    jspb.Message.getWrapperField(this, proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod, 4));
};


/** @param {?proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod|undefined} value */
proto.google.ads.googleads.v2.resources.KeywordPlan.prototype.setForecastPeriod = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.KeywordPlan.prototype.clearForecastPeriod = function() {
  this.setForecastPeriod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.KeywordPlan.prototype.hasForecastPeriod = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.IntervalCase = {
  INTERVAL_NOT_SET: 0,
  DATE_INTERVAL: 1,
  DATE_RANGE: 2
};

/**
 * @return {proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.IntervalCase}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.prototype.getIntervalCase = function() {
  return /** @type {proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.IntervalCase} */(jspb.Message.computeOneofCase(this, proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.oneofGroups_[0]));
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
proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.toObject = function(includeInstance, msg) {
  var f, obj = {
    dateInterval: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dateRange: (f = msg.getDateRange()) && google_ads_googleads_v2_common_dates_pb.DateRange.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod;
  return proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.ads.googleads.v2.enums.KeywordPlanForecastIntervalEnum.KeywordPlanForecastInterval} */ (reader.readEnum());
      msg.setDateInterval(value);
      break;
    case 2:
      var value = new google_ads_googleads_v2_common_dates_pb.DateRange;
      reader.readMessage(value,google_ads_googleads_v2_common_dates_pb.DateRange.deserializeBinaryFromReader);
      msg.setDateRange(value);
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
proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.google.ads.googleads.v2.enums.KeywordPlanForecastIntervalEnum.KeywordPlanForecastInterval} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDateRange();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_ads_googleads_v2_common_dates_pb.DateRange.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.ads.googleads.v2.enums.KeywordPlanForecastIntervalEnum.KeywordPlanForecastInterval date_interval = 1;
 * @return {!proto.google.ads.googleads.v2.enums.KeywordPlanForecastIntervalEnum.KeywordPlanForecastInterval}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.prototype.getDateInterval = function() {
  return /** @type {!proto.google.ads.googleads.v2.enums.KeywordPlanForecastIntervalEnum.KeywordPlanForecastInterval} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.google.ads.googleads.v2.enums.KeywordPlanForecastIntervalEnum.KeywordPlanForecastInterval} value */
proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.prototype.setDateInterval = function(value) {
  jspb.Message.setOneofField(this, 1, proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.prototype.clearDateInterval = function() {
  jspb.Message.setOneofField(this, 1, proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.prototype.hasDateInterval = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.ads.googleads.v2.common.DateRange date_range = 2;
 * @return {?proto.google.ads.googleads.v2.common.DateRange}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.prototype.getDateRange = function() {
  return /** @type{?proto.google.ads.googleads.v2.common.DateRange} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v2_common_dates_pb.DateRange, 2));
};


/** @param {?proto.google.ads.googleads.v2.common.DateRange|undefined} value */
proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.prototype.setDateRange = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.prototype.clearDateRange = function() {
  this.setDateRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.KeywordPlanForecastPeriod.prototype.hasDateRange = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v2.resources);