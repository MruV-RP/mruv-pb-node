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

goog.exportSymbol('proto.google.cloud.websecurityscanner.v1beta.CrawledUrl', null, global);
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
proto.google.cloud.websecurityscanner.v1beta.CrawledUrl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.websecurityscanner.v1beta.CrawledUrl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.websecurityscanner.v1beta.CrawledUrl.displayName = 'proto.google.cloud.websecurityscanner.v1beta.CrawledUrl';
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
proto.google.cloud.websecurityscanner.v1beta.CrawledUrl.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.websecurityscanner.v1beta.CrawledUrl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.websecurityscanner.v1beta.CrawledUrl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.websecurityscanner.v1beta.CrawledUrl.toObject = function(includeInstance, msg) {
  var f, obj = {
    httpMethod: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    body: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.cloud.websecurityscanner.v1beta.CrawledUrl}
 */
proto.google.cloud.websecurityscanner.v1beta.CrawledUrl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.websecurityscanner.v1beta.CrawledUrl;
  return proto.google.cloud.websecurityscanner.v1beta.CrawledUrl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.websecurityscanner.v1beta.CrawledUrl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.websecurityscanner.v1beta.CrawledUrl}
 */
proto.google.cloud.websecurityscanner.v1beta.CrawledUrl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHttpMethod(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
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
proto.google.cloud.websecurityscanner.v1beta.CrawledUrl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.websecurityscanner.v1beta.CrawledUrl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.websecurityscanner.v1beta.CrawledUrl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.websecurityscanner.v1beta.CrawledUrl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHttpMethod();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string http_method = 1;
 * @return {string}
 */
proto.google.cloud.websecurityscanner.v1beta.CrawledUrl.prototype.getHttpMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.websecurityscanner.v1beta.CrawledUrl.prototype.setHttpMethod = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.google.cloud.websecurityscanner.v1beta.CrawledUrl.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.websecurityscanner.v1beta.CrawledUrl.prototype.setUrl = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string body = 3;
 * @return {string}
 */
proto.google.cloud.websecurityscanner.v1beta.CrawledUrl.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.websecurityscanner.v1beta.CrawledUrl.prototype.setBody = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.google.cloud.websecurityscanner.v1beta);