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

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.ads.googleads.v1.errors.CampaignErrorEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v1.errors.CampaignErrorEnum.CampaignError', null, global);
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
proto.google.ads.googleads.v1.errors.CampaignErrorEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v1.errors.CampaignErrorEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v1.errors.CampaignErrorEnum.displayName = 'proto.google.ads.googleads.v1.errors.CampaignErrorEnum';
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
proto.google.ads.googleads.v1.errors.CampaignErrorEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.errors.CampaignErrorEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.errors.CampaignErrorEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.errors.CampaignErrorEnum.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.google.ads.googleads.v1.errors.CampaignErrorEnum}
 */
proto.google.ads.googleads.v1.errors.CampaignErrorEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.errors.CampaignErrorEnum;
  return proto.google.ads.googleads.v1.errors.CampaignErrorEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.errors.CampaignErrorEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.errors.CampaignErrorEnum}
 */
proto.google.ads.googleads.v1.errors.CampaignErrorEnum.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.google.ads.googleads.v1.errors.CampaignErrorEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.errors.CampaignErrorEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.errors.CampaignErrorEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.errors.CampaignErrorEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v1.errors.CampaignErrorEnum.CampaignError = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  CANNOT_TARGET_CONTENT_NETWORK: 3,
  CANNOT_TARGET_SEARCH_NETWORK: 4,
  CANNOT_TARGET_SEARCH_NETWORK_WITHOUT_GOOGLE_SEARCH: 5,
  CANNOT_TARGET_GOOGLE_SEARCH_FOR_CPM_CAMPAIGN: 6,
  CAMPAIGN_MUST_TARGET_AT_LEAST_ONE_NETWORK: 7,
  CANNOT_TARGET_PARTNER_SEARCH_NETWORK: 8,
  CANNOT_TARGET_CONTENT_NETWORK_ONLY_WITH_CRITERIA_LEVEL_BIDDING_STRATEGY: 9,
  CAMPAIGN_DURATION_MUST_CONTAIN_ALL_RUNNABLE_TRIALS: 10,
  CANNOT_MODIFY_FOR_TRIAL_CAMPAIGN: 11,
  DUPLICATE_CAMPAIGN_NAME: 12,
  INCOMPATIBLE_CAMPAIGN_FIELD: 13,
  INVALID_CAMPAIGN_NAME: 14,
  INVALID_AD_SERVING_OPTIMIZATION_STATUS: 15,
  INVALID_TRACKING_URL: 16,
  CANNOT_SET_BOTH_TRACKING_URL_TEMPLATE_AND_TRACKING_SETTING: 17,
  MAX_IMPRESSIONS_NOT_IN_RANGE: 18,
  TIME_UNIT_NOT_SUPPORTED: 19,
  INVALID_OPERATION_IF_SERVING_STATUS_HAS_ENDED: 20,
  BUDGET_CANNOT_BE_SHARED: 21,
  CAMPAIGN_CANNOT_USE_SHARED_BUDGET: 22,
  CANNOT_CHANGE_BUDGET_ON_CAMPAIGN_WITH_TRIALS: 23,
  CAMPAIGN_LABEL_DOES_NOT_EXIST: 24,
  CAMPAIGN_LABEL_ALREADY_EXISTS: 25,
  MISSING_SHOPPING_SETTING: 26,
  INVALID_SHOPPING_SALES_COUNTRY: 27,
  MISSING_UNIVERSAL_APP_CAMPAIGN_SETTING: 30,
  ADVERTISING_CHANNEL_TYPE_NOT_AVAILABLE_FOR_ACCOUNT_TYPE: 31,
  INVALID_ADVERTISING_CHANNEL_SUB_TYPE: 32,
  AT_LEAST_ONE_CONVERSION_MUST_BE_SELECTED: 33,
  CANNOT_SET_AD_ROTATION_MODE: 34,
  CANNOT_MODIFY_START_DATE_IF_ALREADY_STARTED: 35,
  CANNOT_SET_DATE_TO_PAST: 36,
  MISSING_HOTEL_CUSTOMER_LINK: 37,
  INVALID_HOTEL_CUSTOMER_LINK: 38,
  MISSING_HOTEL_SETTING: 39,
  CANNOT_USE_SHARED_CAMPAIGN_BUDGET_WHILE_PART_OF_CAMPAIGN_GROUP: 40,
  APP_NOT_FOUND: 41,
  SHOPPING_ENABLE_LOCAL_NOT_SUPPORTED_FOR_CAMPAIGN_TYPE: 42,
  MERCHANT_NOT_ALLOWED_FOR_COMPARISON_LISTING_ADS: 43
};

goog.object.extend(exports, proto.google.ads.googleads.v1.errors);
