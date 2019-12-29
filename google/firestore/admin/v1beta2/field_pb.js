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

var google_firestore_admin_v1beta2_index_pb = require('../../../../google/firestore/admin/v1beta2/index_pb.js');
goog.object.extend(proto, google_firestore_admin_v1beta2_index_pb);
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.firestore.admin.v1beta2.Field', null, global);
goog.exportSymbol('proto.google.firestore.admin.v1beta2.Field.IndexConfig', null, global);
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
proto.google.firestore.admin.v1beta2.Field = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.firestore.admin.v1beta2.Field, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.firestore.admin.v1beta2.Field.displayName = 'proto.google.firestore.admin.v1beta2.Field';
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
proto.google.firestore.admin.v1beta2.Field.IndexConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.firestore.admin.v1beta2.Field.IndexConfig.repeatedFields_, null);
};
goog.inherits(proto.google.firestore.admin.v1beta2.Field.IndexConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.firestore.admin.v1beta2.Field.IndexConfig.displayName = 'proto.google.firestore.admin.v1beta2.Field.IndexConfig';
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
proto.google.firestore.admin.v1beta2.Field.prototype.toObject = function(opt_includeInstance) {
  return proto.google.firestore.admin.v1beta2.Field.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.firestore.admin.v1beta2.Field} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.firestore.admin.v1beta2.Field.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    indexConfig: (f = msg.getIndexConfig()) && proto.google.firestore.admin.v1beta2.Field.IndexConfig.toObject(includeInstance, f)
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
 * @return {!proto.google.firestore.admin.v1beta2.Field}
 */
proto.google.firestore.admin.v1beta2.Field.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.firestore.admin.v1beta2.Field;
  return proto.google.firestore.admin.v1beta2.Field.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.firestore.admin.v1beta2.Field} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.firestore.admin.v1beta2.Field}
 */
proto.google.firestore.admin.v1beta2.Field.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.google.firestore.admin.v1beta2.Field.IndexConfig;
      reader.readMessage(value,proto.google.firestore.admin.v1beta2.Field.IndexConfig.deserializeBinaryFromReader);
      msg.setIndexConfig(value);
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
proto.google.firestore.admin.v1beta2.Field.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.firestore.admin.v1beta2.Field.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.firestore.admin.v1beta2.Field} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.firestore.admin.v1beta2.Field.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIndexConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.firestore.admin.v1beta2.Field.IndexConfig.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.firestore.admin.v1beta2.Field.IndexConfig.repeatedFields_ = [1];



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
proto.google.firestore.admin.v1beta2.Field.IndexConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.firestore.admin.v1beta2.Field.IndexConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.firestore.admin.v1beta2.Field.IndexConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.firestore.admin.v1beta2.Field.IndexConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    indexesList: jspb.Message.toObjectList(msg.getIndexesList(),
    google_firestore_admin_v1beta2_index_pb.Index.toObject, includeInstance),
    usesAncestorConfig: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    ancestorField: jspb.Message.getFieldWithDefault(msg, 3, ""),
    reverting: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.google.firestore.admin.v1beta2.Field.IndexConfig}
 */
proto.google.firestore.admin.v1beta2.Field.IndexConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.firestore.admin.v1beta2.Field.IndexConfig;
  return proto.google.firestore.admin.v1beta2.Field.IndexConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.firestore.admin.v1beta2.Field.IndexConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.firestore.admin.v1beta2.Field.IndexConfig}
 */
proto.google.firestore.admin.v1beta2.Field.IndexConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_firestore_admin_v1beta2_index_pb.Index;
      reader.readMessage(value,google_firestore_admin_v1beta2_index_pb.Index.deserializeBinaryFromReader);
      msg.addIndexes(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUsesAncestorConfig(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAncestorField(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReverting(value);
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
proto.google.firestore.admin.v1beta2.Field.IndexConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.firestore.admin.v1beta2.Field.IndexConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.firestore.admin.v1beta2.Field.IndexConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.firestore.admin.v1beta2.Field.IndexConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndexesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_firestore_admin_v1beta2_index_pb.Index.serializeBinaryToWriter
    );
  }
  f = message.getUsesAncestorConfig();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getAncestorField();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReverting();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * repeated Index indexes = 1;
 * @return {!Array<!proto.google.firestore.admin.v1beta2.Index>}
 */
proto.google.firestore.admin.v1beta2.Field.IndexConfig.prototype.getIndexesList = function() {
  return /** @type{!Array<!proto.google.firestore.admin.v1beta2.Index>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_firestore_admin_v1beta2_index_pb.Index, 1));
};


/** @param {!Array<!proto.google.firestore.admin.v1beta2.Index>} value */
proto.google.firestore.admin.v1beta2.Field.IndexConfig.prototype.setIndexesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.firestore.admin.v1beta2.Index=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.firestore.admin.v1beta2.Index}
 */
proto.google.firestore.admin.v1beta2.Field.IndexConfig.prototype.addIndexes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.firestore.admin.v1beta2.Index, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.firestore.admin.v1beta2.Field.IndexConfig.prototype.clearIndexesList = function() {
  this.setIndexesList([]);
};


/**
 * optional bool uses_ancestor_config = 2;
 * @return {boolean}
 */
proto.google.firestore.admin.v1beta2.Field.IndexConfig.prototype.getUsesAncestorConfig = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.google.firestore.admin.v1beta2.Field.IndexConfig.prototype.setUsesAncestorConfig = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string ancestor_field = 3;
 * @return {string}
 */
proto.google.firestore.admin.v1beta2.Field.IndexConfig.prototype.getAncestorField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.firestore.admin.v1beta2.Field.IndexConfig.prototype.setAncestorField = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool reverting = 4;
 * @return {boolean}
 */
proto.google.firestore.admin.v1beta2.Field.IndexConfig.prototype.getReverting = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.google.firestore.admin.v1beta2.Field.IndexConfig.prototype.setReverting = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.firestore.admin.v1beta2.Field.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.firestore.admin.v1beta2.Field.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional IndexConfig index_config = 2;
 * @return {?proto.google.firestore.admin.v1beta2.Field.IndexConfig}
 */
proto.google.firestore.admin.v1beta2.Field.prototype.getIndexConfig = function() {
  return /** @type{?proto.google.firestore.admin.v1beta2.Field.IndexConfig} */ (
    jspb.Message.getWrapperField(this, proto.google.firestore.admin.v1beta2.Field.IndexConfig, 2));
};


/** @param {?proto.google.firestore.admin.v1beta2.Field.IndexConfig|undefined} value */
proto.google.firestore.admin.v1beta2.Field.prototype.setIndexConfig = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.firestore.admin.v1beta2.Field.prototype.clearIndexConfig = function() {
  this.setIndexConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.firestore.admin.v1beta2.Field.prototype.hasIndexConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.google.firestore.admin.v1beta2);
