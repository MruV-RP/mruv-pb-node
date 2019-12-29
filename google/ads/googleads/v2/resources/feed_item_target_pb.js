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

var google_ads_googleads_v2_common_criteria_pb = require('../../../../../google/ads/googleads/v2/common/criteria_pb.js');
goog.object.extend(proto, google_ads_googleads_v2_common_criteria_pb);
var google_ads_googleads_v2_enums_feed_item_target_device_pb = require('../../../../../google/ads/googleads/v2/enums/feed_item_target_device_pb.js');
goog.object.extend(proto, google_ads_googleads_v2_enums_feed_item_target_device_pb);
var google_ads_googleads_v2_enums_feed_item_target_type_pb = require('../../../../../google/ads/googleads/v2/enums/feed_item_target_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v2_enums_feed_item_target_type_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.ads.googleads.v2.resources.FeedItemTarget', null, global);
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
proto.google.ads.googleads.v2.resources.FeedItemTarget = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.ads.googleads.v2.resources.FeedItemTarget.oneofGroups_);
};
goog.inherits(proto.google.ads.googleads.v2.resources.FeedItemTarget, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.resources.FeedItemTarget.displayName = 'proto.google.ads.googleads.v2.resources.FeedItemTarget';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.oneofGroups_ = [[4,5,7,8,9,10]];

/**
 * @enum {number}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.TargetCase = {
  TARGET_NOT_SET: 0,
  CAMPAIGN: 4,
  AD_GROUP: 5,
  KEYWORD: 7,
  GEO_TARGET_CONSTANT: 8,
  DEVICE: 9,
  AD_SCHEDULE: 10
};

/**
 * @return {proto.google.ads.googleads.v2.resources.FeedItemTarget.TargetCase}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.getTargetCase = function() {
  return /** @type {proto.google.ads.googleads.v2.resources.FeedItemTarget.TargetCase} */(jspb.Message.computeOneofCase(this, proto.google.ads.googleads.v2.resources.FeedItemTarget.oneofGroups_[0]));
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
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.resources.FeedItemTarget.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.resources.FeedItemTarget} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    feedItem: (f = msg.getFeedItem()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    feedItemTargetType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    feedItemTargetId: (f = msg.getFeedItemTargetId()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    campaign: (f = msg.getCampaign()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    adGroup: (f = msg.getAdGroup()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    keyword: (f = msg.getKeyword()) && google_ads_googleads_v2_common_criteria_pb.KeywordInfo.toObject(includeInstance, f),
    geoTargetConstant: (f = msg.getGeoTargetConstant()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    device: jspb.Message.getFieldWithDefault(msg, 9, 0),
    adSchedule: (f = msg.getAdSchedule()) && google_ads_googleads_v2_common_criteria_pb.AdScheduleInfo.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v2.resources.FeedItemTarget}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.resources.FeedItemTarget;
  return proto.google.ads.googleads.v2.resources.FeedItemTarget.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.resources.FeedItemTarget} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.resources.FeedItemTarget}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setFeedItem(value);
      break;
    case 3:
      var value = /** @type {!proto.google.ads.googleads.v2.enums.FeedItemTargetTypeEnum.FeedItemTargetType} */ (reader.readEnum());
      msg.setFeedItemTargetType(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setFeedItemTargetId(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCampaign(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setAdGroup(value);
      break;
    case 7:
      var value = new google_ads_googleads_v2_common_criteria_pb.KeywordInfo;
      reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.KeywordInfo.deserializeBinaryFromReader);
      msg.setKeyword(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setGeoTargetConstant(value);
      break;
    case 9:
      var value = /** @type {!proto.google.ads.googleads.v2.enums.FeedItemTargetDeviceEnum.FeedItemTargetDevice} */ (reader.readEnum());
      msg.setDevice(value);
      break;
    case 10:
      var value = new google_ads_googleads_v2_common_criteria_pb.AdScheduleInfo;
      reader.readMessage(value,google_ads_googleads_v2_common_criteria_pb.AdScheduleInfo.deserializeBinaryFromReader);
      msg.setAdSchedule(value);
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
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.resources.FeedItemTarget.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.resources.FeedItemTarget} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFeedItem();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getFeedItemTargetType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getFeedItemTargetId();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getCampaign();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getAdGroup();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getKeyword();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_ads_googleads_v2_common_criteria_pb.KeywordInfo.serializeBinaryToWriter
    );
  }
  f = message.getGeoTargetConstant();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.google.ads.googleads.v2.enums.FeedItemTargetDeviceEnum.FeedItemTargetDevice} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getAdSchedule();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_ads_googleads_v2_common_criteria_pb.AdScheduleInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.StringValue feed_item = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.getFeedItem = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.setFeedItem = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.clearFeedItem = function() {
  this.setFeedItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.hasFeedItem = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.ads.googleads.v2.enums.FeedItemTargetTypeEnum.FeedItemTargetType feed_item_target_type = 3;
 * @return {!proto.google.ads.googleads.v2.enums.FeedItemTargetTypeEnum.FeedItemTargetType}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.getFeedItemTargetType = function() {
  return /** @type {!proto.google.ads.googleads.v2.enums.FeedItemTargetTypeEnum.FeedItemTargetType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.google.ads.googleads.v2.enums.FeedItemTargetTypeEnum.FeedItemTargetType} value */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.setFeedItemTargetType = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.Int64Value feed_item_target_id = 6;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.getFeedItemTargetId = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 6));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.setFeedItemTargetId = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.clearFeedItemTargetId = function() {
  this.setFeedItemTargetId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.hasFeedItemTargetId = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.StringValue campaign = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.getCampaign = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.setCampaign = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.google.ads.googleads.v2.resources.FeedItemTarget.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.clearCampaign = function() {
  this.setCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.hasCampaign = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.StringValue ad_group = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.getAdGroup = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.setAdGroup = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.google.ads.googleads.v2.resources.FeedItemTarget.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.clearAdGroup = function() {
  this.setAdGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.hasAdGroup = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.ads.googleads.v2.common.KeywordInfo keyword = 7;
 * @return {?proto.google.ads.googleads.v2.common.KeywordInfo}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.getKeyword = function() {
  return /** @type{?proto.google.ads.googleads.v2.common.KeywordInfo} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v2_common_criteria_pb.KeywordInfo, 7));
};


/** @param {?proto.google.ads.googleads.v2.common.KeywordInfo|undefined} value */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.setKeyword = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.google.ads.googleads.v2.resources.FeedItemTarget.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.clearKeyword = function() {
  this.setKeyword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.hasKeyword = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.StringValue geo_target_constant = 8;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.getGeoTargetConstant = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 8));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.setGeoTargetConstant = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.google.ads.googleads.v2.resources.FeedItemTarget.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.clearGeoTargetConstant = function() {
  this.setGeoTargetConstant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.hasGeoTargetConstant = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.ads.googleads.v2.enums.FeedItemTargetDeviceEnum.FeedItemTargetDevice device = 9;
 * @return {!proto.google.ads.googleads.v2.enums.FeedItemTargetDeviceEnum.FeedItemTargetDevice}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.getDevice = function() {
  return /** @type {!proto.google.ads.googleads.v2.enums.FeedItemTargetDeviceEnum.FeedItemTargetDevice} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {!proto.google.ads.googleads.v2.enums.FeedItemTargetDeviceEnum.FeedItemTargetDevice} value */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.setDevice = function(value) {
  jspb.Message.setOneofField(this, 9, proto.google.ads.googleads.v2.resources.FeedItemTarget.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.clearDevice = function() {
  jspb.Message.setOneofField(this, 9, proto.google.ads.googleads.v2.resources.FeedItemTarget.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.hasDevice = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.ads.googleads.v2.common.AdScheduleInfo ad_schedule = 10;
 * @return {?proto.google.ads.googleads.v2.common.AdScheduleInfo}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.getAdSchedule = function() {
  return /** @type{?proto.google.ads.googleads.v2.common.AdScheduleInfo} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v2_common_criteria_pb.AdScheduleInfo, 10));
};


/** @param {?proto.google.ads.googleads.v2.common.AdScheduleInfo|undefined} value */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.setAdSchedule = function(value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.google.ads.googleads.v2.resources.FeedItemTarget.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.clearAdSchedule = function() {
  this.setAdSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v2.resources.FeedItemTarget.prototype.hasAdSchedule = function() {
  return jspb.Message.getField(this, 10) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v2.resources);
