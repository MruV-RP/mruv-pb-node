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
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_cloud_talent_v4beta1_common_pb = require('../../../../google/cloud/talent/v4beta1/common_pb.js');
goog.object.extend(proto, google_cloud_talent_v4beta1_common_pb);
goog.exportSymbol('proto.google.cloud.talent.v4beta1.Company', null, global);
goog.exportSymbol('proto.google.cloud.talent.v4beta1.Company.DerivedInfo', null, global);
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
proto.google.cloud.talent.v4beta1.Company = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.talent.v4beta1.Company.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.talent.v4beta1.Company, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.talent.v4beta1.Company.displayName = 'proto.google.cloud.talent.v4beta1.Company';
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
proto.google.cloud.talent.v4beta1.Company.DerivedInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.talent.v4beta1.Company.DerivedInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.talent.v4beta1.Company.DerivedInfo.displayName = 'proto.google.cloud.talent.v4beta1.Company.DerivedInfo';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.talent.v4beta1.Company.repeatedFields_ = [11];



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
proto.google.cloud.talent.v4beta1.Company.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.talent.v4beta1.Company.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.talent.v4beta1.Company} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.talent.v4beta1.Company.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    externalId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    size: jspb.Message.getFieldWithDefault(msg, 4, 0),
    headquartersAddress: jspb.Message.getFieldWithDefault(msg, 5, ""),
    hiringAgency: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    eeoText: jspb.Message.getFieldWithDefault(msg, 7, ""),
    websiteUri: jspb.Message.getFieldWithDefault(msg, 8, ""),
    careerSiteUri: jspb.Message.getFieldWithDefault(msg, 9, ""),
    imageUri: jspb.Message.getFieldWithDefault(msg, 10, ""),
    keywordSearchableJobCustomAttributesList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    derivedInfo: (f = msg.getDerivedInfo()) && proto.google.cloud.talent.v4beta1.Company.DerivedInfo.toObject(includeInstance, f),
    suspended: jspb.Message.getBooleanFieldWithDefault(msg, 13, false)
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
 * @return {!proto.google.cloud.talent.v4beta1.Company}
 */
proto.google.cloud.talent.v4beta1.Company.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.talent.v4beta1.Company;
  return proto.google.cloud.talent.v4beta1.Company.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.talent.v4beta1.Company} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.talent.v4beta1.Company}
 */
proto.google.cloud.talent.v4beta1.Company.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExternalId(value);
      break;
    case 4:
      var value = /** @type {!proto.google.cloud.talent.v4beta1.CompanySize} */ (reader.readEnum());
      msg.setSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeadquartersAddress(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHiringAgency(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setEeoText(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebsiteUri(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCareerSiteUri(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageUri(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addKeywordSearchableJobCustomAttributes(value);
      break;
    case 12:
      var value = new proto.google.cloud.talent.v4beta1.Company.DerivedInfo;
      reader.readMessage(value,proto.google.cloud.talent.v4beta1.Company.DerivedInfo.deserializeBinaryFromReader);
      msg.setDerivedInfo(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuspended(value);
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
proto.google.cloud.talent.v4beta1.Company.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.talent.v4beta1.Company.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.talent.v4beta1.Company} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.talent.v4beta1.Company.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExternalId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSize();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getHeadquartersAddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getHiringAgency();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getEeoText();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getWebsiteUri();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCareerSiteUri();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getImageUri();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getKeywordSearchableJobCustomAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getDerivedInfo();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.google.cloud.talent.v4beta1.Company.DerivedInfo.serializeBinaryToWriter
    );
  }
  f = message.getSuspended();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
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
proto.google.cloud.talent.v4beta1.Company.DerivedInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.talent.v4beta1.Company.DerivedInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.talent.v4beta1.Company.DerivedInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.talent.v4beta1.Company.DerivedInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    headquartersLocation: (f = msg.getHeadquartersLocation()) && google_cloud_talent_v4beta1_common_pb.Location.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.talent.v4beta1.Company.DerivedInfo}
 */
proto.google.cloud.talent.v4beta1.Company.DerivedInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.talent.v4beta1.Company.DerivedInfo;
  return proto.google.cloud.talent.v4beta1.Company.DerivedInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.talent.v4beta1.Company.DerivedInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.talent.v4beta1.Company.DerivedInfo}
 */
proto.google.cloud.talent.v4beta1.Company.DerivedInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_cloud_talent_v4beta1_common_pb.Location;
      reader.readMessage(value,google_cloud_talent_v4beta1_common_pb.Location.deserializeBinaryFromReader);
      msg.setHeadquartersLocation(value);
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
proto.google.cloud.talent.v4beta1.Company.DerivedInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.talent.v4beta1.Company.DerivedInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.talent.v4beta1.Company.DerivedInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.talent.v4beta1.Company.DerivedInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeadquartersLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_cloud_talent_v4beta1_common_pb.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location headquarters_location = 1;
 * @return {?proto.google.cloud.talent.v4beta1.Location}
 */
proto.google.cloud.talent.v4beta1.Company.DerivedInfo.prototype.getHeadquartersLocation = function() {
  return /** @type{?proto.google.cloud.talent.v4beta1.Location} */ (
    jspb.Message.getWrapperField(this, google_cloud_talent_v4beta1_common_pb.Location, 1));
};


/** @param {?proto.google.cloud.talent.v4beta1.Location|undefined} value */
proto.google.cloud.talent.v4beta1.Company.DerivedInfo.prototype.setHeadquartersLocation = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.talent.v4beta1.Company.DerivedInfo.prototype.clearHeadquartersLocation = function() {
  this.setHeadquartersLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.talent.v4beta1.Company.DerivedInfo.prototype.hasHeadquartersLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.talent.v4beta1.Company.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.talent.v4beta1.Company.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.google.cloud.talent.v4beta1.Company.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.talent.v4beta1.Company.prototype.setDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string external_id = 3;
 * @return {string}
 */
proto.google.cloud.talent.v4beta1.Company.prototype.getExternalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.talent.v4beta1.Company.prototype.setExternalId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional CompanySize size = 4;
 * @return {!proto.google.cloud.talent.v4beta1.CompanySize}
 */
proto.google.cloud.talent.v4beta1.Company.prototype.getSize = function() {
  return /** @type {!proto.google.cloud.talent.v4beta1.CompanySize} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.google.cloud.talent.v4beta1.CompanySize} value */
proto.google.cloud.talent.v4beta1.Company.prototype.setSize = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string headquarters_address = 5;
 * @return {string}
 */
proto.google.cloud.talent.v4beta1.Company.prototype.getHeadquartersAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.cloud.talent.v4beta1.Company.prototype.setHeadquartersAddress = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool hiring_agency = 6;
 * @return {boolean}
 */
proto.google.cloud.talent.v4beta1.Company.prototype.getHiringAgency = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.google.cloud.talent.v4beta1.Company.prototype.setHiringAgency = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string eeo_text = 7;
 * @return {string}
 */
proto.google.cloud.talent.v4beta1.Company.prototype.getEeoText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.google.cloud.talent.v4beta1.Company.prototype.setEeoText = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string website_uri = 8;
 * @return {string}
 */
proto.google.cloud.talent.v4beta1.Company.prototype.getWebsiteUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.google.cloud.talent.v4beta1.Company.prototype.setWebsiteUri = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string career_site_uri = 9;
 * @return {string}
 */
proto.google.cloud.talent.v4beta1.Company.prototype.getCareerSiteUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.google.cloud.talent.v4beta1.Company.prototype.setCareerSiteUri = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string image_uri = 10;
 * @return {string}
 */
proto.google.cloud.talent.v4beta1.Company.prototype.getImageUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.google.cloud.talent.v4beta1.Company.prototype.setImageUri = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated string keyword_searchable_job_custom_attributes = 11;
 * @return {!Array<string>}
 */
proto.google.cloud.talent.v4beta1.Company.prototype.getKeywordSearchableJobCustomAttributesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/** @param {!Array<string>} value */
proto.google.cloud.talent.v4beta1.Company.prototype.setKeywordSearchableJobCustomAttributesList = function(value) {
  jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.google.cloud.talent.v4beta1.Company.prototype.addKeywordSearchableJobCustomAttributes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.talent.v4beta1.Company.prototype.clearKeywordSearchableJobCustomAttributesList = function() {
  this.setKeywordSearchableJobCustomAttributesList([]);
};


/**
 * optional DerivedInfo derived_info = 12;
 * @return {?proto.google.cloud.talent.v4beta1.Company.DerivedInfo}
 */
proto.google.cloud.talent.v4beta1.Company.prototype.getDerivedInfo = function() {
  return /** @type{?proto.google.cloud.talent.v4beta1.Company.DerivedInfo} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.talent.v4beta1.Company.DerivedInfo, 12));
};


/** @param {?proto.google.cloud.talent.v4beta1.Company.DerivedInfo|undefined} value */
proto.google.cloud.talent.v4beta1.Company.prototype.setDerivedInfo = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.talent.v4beta1.Company.prototype.clearDerivedInfo = function() {
  this.setDerivedInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.talent.v4beta1.Company.prototype.hasDerivedInfo = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool suspended = 13;
 * @return {boolean}
 */
proto.google.cloud.talent.v4beta1.Company.prototype.getSuspended = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/** @param {boolean} value */
proto.google.cloud.talent.v4beta1.Company.prototype.setSuspended = function(value) {
  jspb.Message.setProto3BooleanField(this, 13, value);
};


goog.object.extend(exports, proto.google.cloud.talent.v4beta1);
