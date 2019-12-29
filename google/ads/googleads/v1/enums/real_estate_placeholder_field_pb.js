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
goog.exportSymbol('proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum.RealEstatePlaceholderField', null, global);
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
proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum.displayName = 'proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum';
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
proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum}
 */
proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum;
  return proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum}
 */
proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v1.enums.RealEstatePlaceholderFieldEnum.RealEstatePlaceholderField = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  LISTING_ID: 2,
  LISTING_NAME: 3,
  CITY_NAME: 4,
  DESCRIPTION: 5,
  ADDRESS: 6,
  PRICE: 7,
  FORMATTED_PRICE: 8,
  IMAGE_URL: 9,
  PROPERTY_TYPE: 10,
  LISTING_TYPE: 11,
  CONTEXTUAL_KEYWORDS: 12,
  FINAL_URLS: 13,
  FINAL_MOBILE_URLS: 14,
  TRACKING_URL: 15,
  ANDROID_APP_LINK: 16,
  SIMILAR_LISTING_IDS: 17,
  IOS_APP_LINK: 18,
  IOS_APP_STORE_ID: 19
};

goog.object.extend(exports, proto.google.ads.googleads.v1.enums);
