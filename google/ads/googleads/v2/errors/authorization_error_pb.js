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
goog.exportSymbol('proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum.AuthorizationError', null, global);
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
proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum.displayName = 'proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum';
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
proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum}
 */
proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum;
  return proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum}
 */
proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v2.errors.AuthorizationErrorEnum.AuthorizationError = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  USER_PERMISSION_DENIED: 2,
  DEVELOPER_TOKEN_NOT_WHITELISTED: 3,
  DEVELOPER_TOKEN_PROHIBITED: 4,
  PROJECT_DISABLED: 5,
  AUTHORIZATION_ERROR: 6,
  ACTION_NOT_PERMITTED: 7,
  INCOMPLETE_SIGNUP: 8,
  CUSTOMER_NOT_ENABLED: 24,
  MISSING_TOS: 9,
  DEVELOPER_TOKEN_NOT_APPROVED: 10,
  INVALID_LOGIN_CUSTOMER_ID_SERVING_CUSTOMER_ID_COMBINATION: 11
};

goog.object.extend(exports, proto.google.ads.googleads.v2.errors);
