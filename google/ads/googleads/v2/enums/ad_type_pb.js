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
goog.exportSymbol('proto.google.ads.googleads.v2.enums.AdTypeEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v2.enums.AdTypeEnum.AdType', null, global);
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
proto.google.ads.googleads.v2.enums.AdTypeEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v2.enums.AdTypeEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.enums.AdTypeEnum.displayName = 'proto.google.ads.googleads.v2.enums.AdTypeEnum';
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
proto.google.ads.googleads.v2.enums.AdTypeEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.enums.AdTypeEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.enums.AdTypeEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.enums.AdTypeEnum.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v2.enums.AdTypeEnum}
 */
proto.google.ads.googleads.v2.enums.AdTypeEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.enums.AdTypeEnum;
  return proto.google.ads.googleads.v2.enums.AdTypeEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.enums.AdTypeEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.enums.AdTypeEnum}
 */
proto.google.ads.googleads.v2.enums.AdTypeEnum.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v2.enums.AdTypeEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.enums.AdTypeEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.enums.AdTypeEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.enums.AdTypeEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v2.enums.AdTypeEnum.AdType = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  TEXT_AD: 2,
  EXPANDED_TEXT_AD: 3,
  CALL_ONLY_AD: 6,
  EXPANDED_DYNAMIC_SEARCH_AD: 7,
  HOTEL_AD: 8,
  SHOPPING_SMART_AD: 9,
  SHOPPING_PRODUCT_AD: 10,
  VIDEO_AD: 12,
  GMAIL_AD: 13,
  IMAGE_AD: 14,
  RESPONSIVE_SEARCH_AD: 15,
  LEGACY_RESPONSIVE_DISPLAY_AD: 16,
  APP_AD: 17,
  LEGACY_APP_INSTALL_AD: 18,
  RESPONSIVE_DISPLAY_AD: 19,
  HTML5_UPLOAD_AD: 21,
  DYNAMIC_HTML5_AD: 22,
  APP_ENGAGEMENT_AD: 23,
  SHOPPING_COMPARISON_LISTING_AD: 24
};

goog.object.extend(exports, proto.google.ads.googleads.v2.enums);
