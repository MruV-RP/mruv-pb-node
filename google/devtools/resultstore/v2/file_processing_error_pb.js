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

goog.exportSymbol('proto.google.devtools.resultstore.v2.FileProcessingError', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.FileProcessingErrorType', null, global);
goog.exportSymbol('proto.google.devtools.resultstore.v2.FileProcessingErrors', null, global);
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
proto.google.devtools.resultstore.v2.FileProcessingErrors = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.devtools.resultstore.v2.FileProcessingErrors.repeatedFields_, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.FileProcessingErrors, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.FileProcessingErrors.displayName = 'proto.google.devtools.resultstore.v2.FileProcessingErrors';
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
proto.google.devtools.resultstore.v2.FileProcessingError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.devtools.resultstore.v2.FileProcessingError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.devtools.resultstore.v2.FileProcessingError.displayName = 'proto.google.devtools.resultstore.v2.FileProcessingError';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.devtools.resultstore.v2.FileProcessingErrors.repeatedFields_ = [3];



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
proto.google.devtools.resultstore.v2.FileProcessingErrors.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.FileProcessingErrors.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.FileProcessingErrors} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.FileProcessingErrors.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileUid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fileProcessingErrorsList: jspb.Message.toObjectList(msg.getFileProcessingErrorsList(),
    proto.google.devtools.resultstore.v2.FileProcessingError.toObject, includeInstance)
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
 * @return {!proto.google.devtools.resultstore.v2.FileProcessingErrors}
 */
proto.google.devtools.resultstore.v2.FileProcessingErrors.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.FileProcessingErrors;
  return proto.google.devtools.resultstore.v2.FileProcessingErrors.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.FileProcessingErrors} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.FileProcessingErrors}
 */
proto.google.devtools.resultstore.v2.FileProcessingErrors.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileUid(value);
      break;
    case 3:
      var value = new proto.google.devtools.resultstore.v2.FileProcessingError;
      reader.readMessage(value,proto.google.devtools.resultstore.v2.FileProcessingError.deserializeBinaryFromReader);
      msg.addFileProcessingErrors(value);
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
proto.google.devtools.resultstore.v2.FileProcessingErrors.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.FileProcessingErrors.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.FileProcessingErrors} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.FileProcessingErrors.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileUid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFileProcessingErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.devtools.resultstore.v2.FileProcessingError.serializeBinaryToWriter
    );
  }
};


/**
 * optional string file_uid = 1;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.FileProcessingErrors.prototype.getFileUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.FileProcessingErrors.prototype.setFileUid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated FileProcessingError file_processing_errors = 3;
 * @return {!Array<!proto.google.devtools.resultstore.v2.FileProcessingError>}
 */
proto.google.devtools.resultstore.v2.FileProcessingErrors.prototype.getFileProcessingErrorsList = function() {
  return /** @type{!Array<!proto.google.devtools.resultstore.v2.FileProcessingError>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.devtools.resultstore.v2.FileProcessingError, 3));
};


/** @param {!Array<!proto.google.devtools.resultstore.v2.FileProcessingError>} value */
proto.google.devtools.resultstore.v2.FileProcessingErrors.prototype.setFileProcessingErrorsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.devtools.resultstore.v2.FileProcessingError=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.devtools.resultstore.v2.FileProcessingError}
 */
proto.google.devtools.resultstore.v2.FileProcessingErrors.prototype.addFileProcessingErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.devtools.resultstore.v2.FileProcessingError, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.devtools.resultstore.v2.FileProcessingErrors.prototype.clearFileProcessingErrorsList = function() {
  this.setFileProcessingErrorsList([]);
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
proto.google.devtools.resultstore.v2.FileProcessingError.prototype.toObject = function(opt_includeInstance) {
  return proto.google.devtools.resultstore.v2.FileProcessingError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.devtools.resultstore.v2.FileProcessingError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.FileProcessingError.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.devtools.resultstore.v2.FileProcessingError}
 */
proto.google.devtools.resultstore.v2.FileProcessingError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.devtools.resultstore.v2.FileProcessingError;
  return proto.google.devtools.resultstore.v2.FileProcessingError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.devtools.resultstore.v2.FileProcessingError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.devtools.resultstore.v2.FileProcessingError}
 */
proto.google.devtools.resultstore.v2.FileProcessingError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.devtools.resultstore.v2.FileProcessingErrorType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.google.devtools.resultstore.v2.FileProcessingError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.devtools.resultstore.v2.FileProcessingError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.devtools.resultstore.v2.FileProcessingError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.devtools.resultstore.v2.FileProcessingError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional FileProcessingErrorType type = 1;
 * @return {!proto.google.devtools.resultstore.v2.FileProcessingErrorType}
 */
proto.google.devtools.resultstore.v2.FileProcessingError.prototype.getType = function() {
  return /** @type {!proto.google.devtools.resultstore.v2.FileProcessingErrorType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.google.devtools.resultstore.v2.FileProcessingErrorType} value */
proto.google.devtools.resultstore.v2.FileProcessingError.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.google.devtools.resultstore.v2.FileProcessingError.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.devtools.resultstore.v2.FileProcessingError.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.google.devtools.resultstore.v2.FileProcessingErrorType = {
  FILE_PROCESSING_ERROR_TYPE_UNSPECIFIED: 0,
  GENERIC_READ_ERROR: 1,
  GENERIC_PARSE_ERROR: 2,
  FILE_TOO_LARGE: 3,
  OUTPUT_TOO_LARGE: 4,
  ACCESS_DENIED: 5,
  DEADLINE_EXCEEDED: 6,
  NOT_FOUND: 7,
  FILE_EMPTY: 8
};

goog.object.extend(exports, proto.google.devtools.resultstore.v2);
