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
var google_api_client_pb = require('../../../../google/api/client_pb.js');
goog.object.extend(proto, google_api_client_pb);
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
goog.object.extend(proto, google_api_resource_pb);
var google_cloud_dialogflow_v2_audio_config_pb = require('../../../../google/cloud/dialogflow/v2/audio_config_pb.js');
goog.object.extend(proto, google_cloud_dialogflow_v2_audio_config_pb);
var google_cloud_dialogflow_v2_context_pb = require('../../../../google/cloud/dialogflow/v2/context_pb.js');
goog.object.extend(proto, google_cloud_dialogflow_v2_context_pb);
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
goog.object.extend(proto, google_longrunning_operations_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.CreateIntentRequest', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.DeleteIntentRequest', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.GetIntentRequest', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.UrlTypeHint', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.ImageDisplayOptions', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.Card', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.HorizontalAlignment', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.Image', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaType', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.Platform', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.TableCard', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Message.Text', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.Parameter', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Type', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.Intent.WebhookState', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.IntentBatch', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.IntentView', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.ListIntentsRequest', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.ListIntentsResponse', null, global);
goog.exportSymbol('proto.google.cloud.dialogflow.v2.UpdateIntentRequest', null, global);
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
proto.google.cloud.dialogflow.v2.Intent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2.Intent.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.displayName = 'proto.google.cloud.dialogflow.v2.Intent';
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
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.displayName = 'proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase';
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
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.displayName = 'proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part';
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
proto.google.cloud.dialogflow.v2.Intent.Parameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2.Intent.Parameter.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Parameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Parameter.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Parameter';
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
proto.google.cloud.dialogflow.v2.Intent.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.cloud.dialogflow.v2.Intent.Message.oneofGroups_);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message';
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
proto.google.cloud.dialogflow.v2.Intent.Message.Text = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2.Intent.Message.Text.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.Text, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.Text.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.Text';
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
proto.google.cloud.dialogflow.v2.Intent.Message.Image = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.Image, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.Image.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.Image';
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
proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies';
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
proto.google.cloud.dialogflow.v2.Intent.Message.Card = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2.Intent.Message.Card.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.Card, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.Card.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.Card';
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
proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button';
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
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse';
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
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses';
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
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard';
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
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button';
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
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction';
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
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion';
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
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions';
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
proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion';
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
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect';
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
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item';
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
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect';
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
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item';
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
proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo';
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
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent';
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
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.oneofGroups_);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject';
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
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard';
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
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem';
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
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction';
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
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.TableCard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.TableCard';
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
proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties';
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
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow';
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
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell.displayName = 'proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell';
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
proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo.displayName = 'proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo';
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
proto.google.cloud.dialogflow.v2.ListIntentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.ListIntentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.ListIntentsRequest.displayName = 'proto.google.cloud.dialogflow.v2.ListIntentsRequest';
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
proto.google.cloud.dialogflow.v2.ListIntentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2.ListIntentsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.ListIntentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.ListIntentsResponse.displayName = 'proto.google.cloud.dialogflow.v2.ListIntentsResponse';
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
proto.google.cloud.dialogflow.v2.GetIntentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.GetIntentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.GetIntentRequest.displayName = 'proto.google.cloud.dialogflow.v2.GetIntentRequest';
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
proto.google.cloud.dialogflow.v2.CreateIntentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.CreateIntentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.CreateIntentRequest.displayName = 'proto.google.cloud.dialogflow.v2.CreateIntentRequest';
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
proto.google.cloud.dialogflow.v2.UpdateIntentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.UpdateIntentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.UpdateIntentRequest.displayName = 'proto.google.cloud.dialogflow.v2.UpdateIntentRequest';
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
proto.google.cloud.dialogflow.v2.DeleteIntentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.DeleteIntentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.DeleteIntentRequest.displayName = 'proto.google.cloud.dialogflow.v2.DeleteIntentRequest';
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
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.oneofGroups_);
};
goog.inherits(proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.displayName = 'proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest';
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
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse.displayName = 'proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse';
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
proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest.displayName = 'proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest';
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
proto.google.cloud.dialogflow.v2.IntentBatch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.cloud.dialogflow.v2.IntentBatch.repeatedFields_, null);
};
goog.inherits(proto.google.cloud.dialogflow.v2.IntentBatch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.cloud.dialogflow.v2.IntentBatch.displayName = 'proto.google.cloud.dialogflow.v2.IntentBatch';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2.Intent.repeatedFields_ = [7,8,9,11,13,14,15,18];



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
proto.google.cloud.dialogflow.v2.Intent.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    webhookState: jspb.Message.getFieldWithDefault(msg, 6, 0),
    priority: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isFallback: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    mlDisabled: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
    inputContextNamesList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    eventsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    trainingPhrasesList: jspb.Message.toObjectList(msg.getTrainingPhrasesList(),
    proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.toObject, includeInstance),
    action: jspb.Message.getFieldWithDefault(msg, 10, ""),
    outputContextsList: jspb.Message.toObjectList(msg.getOutputContextsList(),
    google_cloud_dialogflow_v2_context_pb.Context.toObject, includeInstance),
    resetContexts: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    parametersList: jspb.Message.toObjectList(msg.getParametersList(),
    proto.google.cloud.dialogflow.v2.Intent.Parameter.toObject, includeInstance),
    messagesList: jspb.Message.toObjectList(msg.getMessagesList(),
    proto.google.cloud.dialogflow.v2.Intent.Message.toObject, includeInstance),
    defaultResponsePlatformsList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    rootFollowupIntentName: jspb.Message.getFieldWithDefault(msg, 16, ""),
    parentFollowupIntentName: jspb.Message.getFieldWithDefault(msg, 17, ""),
    followupIntentInfoList: jspb.Message.toObjectList(msg.getFollowupIntentInfoList(),
    proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo.toObject, includeInstance)
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent}
 */
proto.google.cloud.dialogflow.v2.Intent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent;
  return proto.google.cloud.dialogflow.v2.Intent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent}
 */
proto.google.cloud.dialogflow.v2.Intent.deserializeBinaryFromReader = function(msg, reader) {
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
    case 6:
      var value = /** @type {!proto.google.cloud.dialogflow.v2.Intent.WebhookState} */ (reader.readEnum());
      msg.setWebhookState(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFallback(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMlDisabled(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addInputContextNames(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addEvents(value);
      break;
    case 9:
      var value = new proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.deserializeBinaryFromReader);
      msg.addTrainingPhrases(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    case 11:
      var value = new google_cloud_dialogflow_v2_context_pb.Context;
      reader.readMessage(value,google_cloud_dialogflow_v2_context_pb.Context.deserializeBinaryFromReader);
      msg.addOutputContexts(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResetContexts(value);
      break;
    case 13:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Parameter;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Parameter.deserializeBinaryFromReader);
      msg.addParameters(value);
      break;
    case 14:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.deserializeBinaryFromReader);
      msg.addMessages(value);
      break;
    case 15:
      var value = /** @type {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.Platform>} */ (reader.readPackedEnum());
      msg.setDefaultResponsePlatformsList(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setRootFollowupIntentName(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentFollowupIntentName(value);
      break;
    case 18:
      var value = new proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo.deserializeBinaryFromReader);
      msg.addFollowupIntentInfo(value);
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
proto.google.cloud.dialogflow.v2.Intent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getWebhookState();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getIsFallback();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getMlDisabled();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getInputContextNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getTrainingPhrasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.serializeBinaryToWriter
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getOutputContextsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      google_cloud_dialogflow_v2_context_pb.Context.serializeBinaryToWriter
    );
  }
  f = message.getResetContexts();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Parameter.serializeBinaryToWriter
    );
  }
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.serializeBinaryToWriter
    );
  }
  f = message.getDefaultResponsePlatformsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      15,
      f
    );
  }
  f = message.getRootFollowupIntentName();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getParentFollowupIntentName();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getFollowupIntentInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.google.cloud.dialogflow.v2.Intent.WebhookState = {
  WEBHOOK_STATE_UNSPECIFIED: 0,
  WEBHOOK_STATE_ENABLED: 1,
  WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: 2
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.repeatedFields_ = [3];



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
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    partsList: jspb.Message.toObjectList(msg.getPartsList(),
    proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.toObject, includeInstance),
    timesAddedCount: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase}
 */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase;
  return proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase}
 */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = new proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.deserializeBinaryFromReader);
      msg.addParts(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimesAddedCount(value);
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
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPartsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.serializeBinaryToWriter
    );
  }
  f = message.getTimesAddedCount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Type = {
  TYPE_UNSPECIFIED: 0,
  EXAMPLE: 1,
  TEMPLATE: 2
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
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    entityType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    alias: jspb.Message.getFieldWithDefault(msg, 3, ""),
    userDefined: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part}
 */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part;
  return proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part}
 */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlias(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUserDefined(value);
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
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntityType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAlias();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUserDefined();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.prototype.setText = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string entity_type = 2;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.prototype.getEntityType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.prototype.setEntityType = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string alias = 3;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.prototype.getAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.prototype.setAlias = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool user_defined = 4;
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.prototype.getUserDefined = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part.prototype.setUserDefined = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Type type = 2;
 * @return {!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Type}
 */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.prototype.getType = function() {
  return /** @type {!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Type} value */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated Part parts = 3;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part>}
 */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.prototype.getPartsList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part, 3));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part>} value */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.prototype.setPartsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part}
 */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.prototype.addParts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.Part, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.prototype.clearPartsList = function() {
  this.setPartsList([]);
};


/**
 * optional int32 times_added_count = 4;
 * @return {number}
 */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.prototype.getTimesAddedCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase.prototype.setTimesAddedCount = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2.Intent.Parameter.repeatedFields_ = [7];



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
proto.google.cloud.dialogflow.v2.Intent.Parameter.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Parameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Parameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Parameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, ""),
    defaultValue: jspb.Message.getFieldWithDefault(msg, 4, ""),
    entityTypeDisplayName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    mandatory: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    promptsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    isList: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Parameter}
 */
proto.google.cloud.dialogflow.v2.Intent.Parameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Parameter;
  return proto.google.cloud.dialogflow.v2.Intent.Parameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Parameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Parameter}
 */
proto.google.cloud.dialogflow.v2.Intent.Parameter.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultValue(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityTypeDisplayName(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMandatory(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addPrompts(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsList(value);
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
proto.google.cloud.dialogflow.v2.Intent.Parameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Parameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Parameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Parameter.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDefaultValue();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEntityTypeDisplayName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMandatory();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getPromptsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getIsList();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Parameter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Parameter.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Parameter.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Parameter.prototype.setDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Parameter.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Parameter.prototype.setValue = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string default_value = 4;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Parameter.prototype.getDefaultValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Parameter.prototype.setDefaultValue = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string entity_type_display_name = 5;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Parameter.prototype.getEntityTypeDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Parameter.prototype.setEntityTypeDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool mandatory = 6;
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Parameter.prototype.getMandatory = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.google.cloud.dialogflow.v2.Intent.Parameter.prototype.setMandatory = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * repeated string prompts = 7;
 * @return {!Array<string>}
 */
proto.google.cloud.dialogflow.v2.Intent.Parameter.prototype.getPromptsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/** @param {!Array<string>} value */
proto.google.cloud.dialogflow.v2.Intent.Parameter.prototype.setPromptsList = function(value) {
  jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.google.cloud.dialogflow.v2.Intent.Parameter.prototype.addPrompts = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.Parameter.prototype.clearPromptsList = function() {
  this.setPromptsList([]);
};


/**
 * optional bool is_list = 8;
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Parameter.prototype.getIsList = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.google.cloud.dialogflow.v2.Intent.Parameter.prototype.setIsList = function(value) {
  jspb.Message.setProto3BooleanField(this, 8, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.cloud.dialogflow.v2.Intent.Message.oneofGroups_ = [[1,2,3,4,5,7,8,9,10,11,12,22,23,24]];

/**
 * @enum {number}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MessageCase = {
  MESSAGE_NOT_SET: 0,
  TEXT: 1,
  IMAGE: 2,
  QUICK_REPLIES: 3,
  CARD: 4,
  PAYLOAD: 5,
  SIMPLE_RESPONSES: 7,
  BASIC_CARD: 8,
  SUGGESTIONS: 9,
  LINK_OUT_SUGGESTION: 10,
  LIST_SELECT: 11,
  CAROUSEL_SELECT: 12,
  BROWSE_CAROUSEL_CARD: 22,
  TABLE_CARD: 23,
  MEDIA_CONTENT: 24
};

/**
 * @return {proto.google.cloud.dialogflow.v2.Intent.Message.MessageCase}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.getMessageCase = function() {
  return /** @type {proto.google.cloud.dialogflow.v2.Intent.Message.MessageCase} */(jspb.Message.computeOneofCase(this, proto.google.cloud.dialogflow.v2.Intent.Message.oneofGroups_[0]));
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
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: (f = msg.getText()) && proto.google.cloud.dialogflow.v2.Intent.Message.Text.toObject(includeInstance, f),
    image: (f = msg.getImage()) && proto.google.cloud.dialogflow.v2.Intent.Message.Image.toObject(includeInstance, f),
    quickReplies: (f = msg.getQuickReplies()) && proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.toObject(includeInstance, f),
    card: (f = msg.getCard()) && proto.google.cloud.dialogflow.v2.Intent.Message.Card.toObject(includeInstance, f),
    payload: (f = msg.getPayload()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    simpleResponses: (f = msg.getSimpleResponses()) && proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses.toObject(includeInstance, f),
    basicCard: (f = msg.getBasicCard()) && proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.toObject(includeInstance, f),
    suggestions: (f = msg.getSuggestions()) && proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions.toObject(includeInstance, f),
    linkOutSuggestion: (f = msg.getLinkOutSuggestion()) && proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion.toObject(includeInstance, f),
    listSelect: (f = msg.getListSelect()) && proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.toObject(includeInstance, f),
    carouselSelect: (f = msg.getCarouselSelect()) && proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.toObject(includeInstance, f),
    browseCarouselCard: (f = msg.getBrowseCarouselCard()) && proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.toObject(includeInstance, f),
    tableCard: (f = msg.getTableCard()) && proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.toObject(includeInstance, f),
    mediaContent: (f = msg.getMediaContent()) && proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.toObject(includeInstance, f),
    platform: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message;
  return proto.google.cloud.dialogflow.v2.Intent.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.Text;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.Text.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 2:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.Image;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.Image.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    case 3:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.deserializeBinaryFromReader);
      msg.setQuickReplies(value);
      break;
    case 4:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.Card;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.Card.deserializeBinaryFromReader);
      msg.setCard(value);
      break;
    case 5:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 7:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses.deserializeBinaryFromReader);
      msg.setSimpleResponses(value);
      break;
    case 8:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.deserializeBinaryFromReader);
      msg.setBasicCard(value);
      break;
    case 9:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions.deserializeBinaryFromReader);
      msg.setSuggestions(value);
      break;
    case 10:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion.deserializeBinaryFromReader);
      msg.setLinkOutSuggestion(value);
      break;
    case 11:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.deserializeBinaryFromReader);
      msg.setListSelect(value);
      break;
    case 12:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.deserializeBinaryFromReader);
      msg.setCarouselSelect(value);
      break;
    case 22:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.deserializeBinaryFromReader);
      msg.setBrowseCarouselCard(value);
      break;
    case 23:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.TableCard;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.deserializeBinaryFromReader);
      msg.setTableCard(value);
      break;
    case 24:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.deserializeBinaryFromReader);
      msg.setMediaContent(value);
      break;
    case 6:
      var value = /** @type {!proto.google.cloud.dialogflow.v2.Intent.Message.Platform} */ (reader.readEnum());
      msg.setPlatform(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.Text.serializeBinaryToWriter
    );
  }
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.Image.serializeBinaryToWriter
    );
  }
  f = message.getQuickReplies();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.serializeBinaryToWriter
    );
  }
  f = message.getCard();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.Card.serializeBinaryToWriter
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getSimpleResponses();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses.serializeBinaryToWriter
    );
  }
  f = message.getBasicCard();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.serializeBinaryToWriter
    );
  }
  f = message.getSuggestions();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions.serializeBinaryToWriter
    );
  }
  f = message.getLinkOutSuggestion();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion.serializeBinaryToWriter
    );
  }
  f = message.getListSelect();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.serializeBinaryToWriter
    );
  }
  f = message.getCarouselSelect();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.serializeBinaryToWriter
    );
  }
  f = message.getBrowseCarouselCard();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.serializeBinaryToWriter
    );
  }
  f = message.getTableCard();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.serializeBinaryToWriter
    );
  }
  f = message.getMediaContent();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.serializeBinaryToWriter
    );
  }
  f = message.getPlatform();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Platform = {
  PLATFORM_UNSPECIFIED: 0,
  FACEBOOK: 1,
  SLACK: 2,
  TELEGRAM: 3,
  KIK: 4,
  SKYPE: 5,
  LINE: 6,
  VIBER: 7,
  ACTIONS_ON_GOOGLE: 8,
  GOOGLE_HANGOUTS: 11
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Text.repeatedFields_ = [1];



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
proto.google.cloud.dialogflow.v2.Intent.Message.Text.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.Text.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Text} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Text.toObject = function(includeInstance, msg) {
  var f, obj = {
    textList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.Text}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Text.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.Text;
  return proto.google.cloud.dialogflow.v2.Intent.Message.Text.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Text} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.Text}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Text.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addText(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.Text.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.Text.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Text} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Text.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTextList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string text = 1;
 * @return {!Array<string>}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Text.prototype.getTextList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.google.cloud.dialogflow.v2.Intent.Message.Text.prototype.setTextList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Text.prototype.addText = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Text.prototype.clearTextList = function() {
  this.setTextList([]);
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
proto.google.cloud.dialogflow.v2.Intent.Message.Image.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.Image.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Image} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Image.toObject = function(includeInstance, msg) {
  var f, obj = {
    imageUri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accessibilityText: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.Image}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Image.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.Image;
  return proto.google.cloud.dialogflow.v2.Intent.Message.Image.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Image} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.Image}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Image.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageUri(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessibilityText(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.Image.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.Image.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Image} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Image.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImageUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccessibilityText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string image_uri = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Image.prototype.getImageUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.Image.prototype.setImageUri = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string accessibility_text = 2;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Image.prototype.getAccessibilityText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.Image.prototype.setAccessibilityText = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.repeatedFields_ = [2];



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
proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    quickRepliesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies;
  return proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addQuickReplies(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuickRepliesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string quick_replies = 2;
 * @return {!Array<string>}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.prototype.getQuickRepliesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.prototype.setQuickRepliesList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.prototype.addQuickReplies = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies.prototype.clearQuickRepliesList = function() {
  this.setQuickRepliesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.repeatedFields_ = [4];



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
proto.google.cloud.dialogflow.v2.Intent.Message.Card.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.Card.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Card} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subtitle: jspb.Message.getFieldWithDefault(msg, 2, ""),
    imageUri: jspb.Message.getFieldWithDefault(msg, 3, ""),
    buttonsList: jspb.Message.toObjectList(msg.getButtonsList(),
    proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button.toObject, includeInstance)
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.Card}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.Card;
  return proto.google.cloud.dialogflow.v2.Intent.Message.Card.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Card} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.Card}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubtitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageUri(value);
      break;
    case 4:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button.deserializeBinaryFromReader);
      msg.addButtons(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.Card.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.Card.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Card} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubtitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getImageUri();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getButtonsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button.serializeBinaryToWriter
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
proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    postback: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button;
  return proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostback(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPostback();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button.prototype.setText = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string postback = 2;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button.prototype.getPostback = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button.prototype.setPostback = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subtitle = 2;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.prototype.getSubtitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.prototype.setSubtitle = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string image_uri = 3;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.prototype.getImageUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.prototype.setImageUri = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Button buttons = 4;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button>}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.prototype.getButtonsList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button, 4));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button>} value */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.prototype.setButtonsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.prototype.addButtons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.cloud.dialogflow.v2.Intent.Message.Card.Button, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Card.prototype.clearButtonsList = function() {
  this.setButtonsList([]);
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
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    textToSpeech: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ssml: jspb.Message.getFieldWithDefault(msg, 2, ""),
    displayText: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse;
  return proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextToSpeech(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSsml(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayText(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTextToSpeech();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSsml();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDisplayText();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string text_to_speech = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse.prototype.getTextToSpeech = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse.prototype.setTextToSpeech = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ssml = 2;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse.prototype.getSsml = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse.prototype.setSsml = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string display_text = 3;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse.prototype.getDisplayText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse.prototype.setDisplayText = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses.repeatedFields_ = [1];



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
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses.toObject = function(includeInstance, msg) {
  var f, obj = {
    simpleResponsesList: jspb.Message.toObjectList(msg.getSimpleResponsesList(),
    proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse.toObject, includeInstance)
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses;
  return proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse.deserializeBinaryFromReader);
      msg.addSimpleResponses(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSimpleResponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SimpleResponse simple_responses = 1;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse>}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses.prototype.getSimpleResponsesList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse, 1));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse>} value */
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses.prototype.setSimpleResponsesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses.prototype.addSimpleResponses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses.prototype.clearSimpleResponsesList = function() {
  this.setSimpleResponsesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.repeatedFields_ = [5];



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
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subtitle: jspb.Message.getFieldWithDefault(msg, 2, ""),
    formattedText: jspb.Message.getFieldWithDefault(msg, 3, ""),
    image: (f = msg.getImage()) && proto.google.cloud.dialogflow.v2.Intent.Message.Image.toObject(includeInstance, f),
    buttonsList: jspb.Message.toObjectList(msg.getButtonsList(),
    proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.toObject, includeInstance)
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard;
  return proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubtitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormattedText(value);
      break;
    case 4:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.Image;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.Image.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    case 5:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.deserializeBinaryFromReader);
      msg.addButtons(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubtitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFormattedText();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.Image.serializeBinaryToWriter
    );
  }
  f = message.getButtonsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.serializeBinaryToWriter
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
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    openUriAction: (f = msg.getOpenUriAction()) && proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button;
  return proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction.deserializeBinaryFromReader);
      msg.setOpenUriAction(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOpenUriAction();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction.serializeBinaryToWriter
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
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    uri: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction;
  return proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uri = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction.prototype.setUri = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OpenUriAction open_uri_action = 2;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.prototype.getOpenUriAction = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction, 2));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.OpenUriAction|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.prototype.setOpenUriAction = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.prototype.clearOpenUriAction = function() {
  this.setOpenUriAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.prototype.hasOpenUriAction = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subtitle = 2;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.prototype.getSubtitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.prototype.setSubtitle = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string formatted_text = 3;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.prototype.getFormattedText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.prototype.setFormattedText = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Image image = 4;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.Image}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.prototype.getImage = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.Image} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.Image, 4));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.Image|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.prototype.setImage = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.prototype.clearImage = function() {
  this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.prototype.hasImage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Button buttons = 5;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button>}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.prototype.getButtonsList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button, 5));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button>} value */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.prototype.setButtonsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.prototype.addButtons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.prototype.clearButtonsList = function() {
  this.setButtonsList([]);
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
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion;
  return proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions.repeatedFields_ = [1];



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
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions.toObject = function(includeInstance, msg) {
  var f, obj = {
    suggestionsList: jspb.Message.toObjectList(msg.getSuggestionsList(),
    proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion.toObject, includeInstance)
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions;
  return proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion.deserializeBinaryFromReader);
      msg.addSuggestions(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuggestionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Suggestion suggestions = 1;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion>}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions.prototype.getSuggestionsList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion, 1));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion>} value */
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions.prototype.setSuggestionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions.prototype.addSuggestions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.dialogflow.v2.Intent.Message.Suggestion, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions.prototype.clearSuggestionsList = function() {
  this.setSuggestionsList([]);
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
proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion.toObject = function(includeInstance, msg) {
  var f, obj = {
    destinationName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uri: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion;
  return proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDestinationName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string destination_name = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion.prototype.getDestinationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion.prototype.setDestinationName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string uri = 2;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion.prototype.setUri = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.repeatedFields_ = [2];



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
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.toObject, includeInstance),
    subtitle: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect;
  return proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubtitle(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.serializeBinaryToWriter
    );
  }
  f = message.getSubtitle();
  if (f.length > 0) {
    writer.writeString(
      3,
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
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    image: (f = msg.getImage()) && proto.google.cloud.dialogflow.v2.Intent.Message.Image.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item;
  return proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.Image;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.Image.deserializeBinaryFromReader);
      msg.setImage(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.Image.serializeBinaryToWriter
    );
  }
};


/**
 * optional SelectItemInfo info = 1;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.prototype.getInfo = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo, 1));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.prototype.clearInfo = function() {
  this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Image image = 4;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.Image}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.prototype.getImage = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.Image} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.Image, 4));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.Image|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.prototype.setImage = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.prototype.clearImage = function() {
  this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item.prototype.hasImage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Item items = 2;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item>}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item, 2));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item>} value */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.prototype.clearItemsList = function() {
  this.setItemsList([]);
};


/**
 * optional string subtitle = 3;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.prototype.getSubtitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect.prototype.setSubtitle = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.repeatedFields_ = [1];



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
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.toObject, includeInstance)
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect;
  return proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.serializeBinaryToWriter
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
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    image: (f = msg.getImage()) && proto.google.cloud.dialogflow.v2.Intent.Message.Image.toObject(includeInstance, f)
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item;
  return proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.Image;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.Image.deserializeBinaryFromReader);
      msg.setImage(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.Image.serializeBinaryToWriter
    );
  }
};


/**
 * optional SelectItemInfo info = 1;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.prototype.getInfo = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo, 1));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.prototype.clearInfo = function() {
  this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Image image = 4;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.Image}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.prototype.getImage = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.Image} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.Image, 4));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.Image|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.prototype.setImage = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.prototype.clearImage = function() {
  this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item.prototype.hasImage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Item items = 1;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item>}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item, 1));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item>} value */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect.prototype.clearItemsList = function() {
  this.setItemsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.repeatedFields_ = [2];



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
proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    synonymsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo;
  return proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSynonyms(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSynonymsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string synonyms = 2;
 * @return {!Array<string>}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.prototype.getSynonymsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.prototype.setSynonymsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.prototype.addSynonyms = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.SelectItemInfo.prototype.clearSynonymsList = function() {
  this.setSynonymsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.repeatedFields_ = [2];



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
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.toObject = function(includeInstance, msg) {
  var f, obj = {
    mediaType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    mediaObjectsList: jspb.Message.toObjectList(msg.getMediaObjectsList(),
    proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.toObject, includeInstance)
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent;
  return proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaType} */ (reader.readEnum());
      msg.setMediaType(value);
      break;
    case 2:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.deserializeBinaryFromReader);
      msg.addMediaObjects(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMediaType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMediaObjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaType = {
  RESPONSE_MEDIA_TYPE_UNSPECIFIED: 0,
  AUDIO: 1
};


/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.ImageCase = {
  IMAGE_NOT_SET: 0,
  LARGE_IMAGE: 3,
  ICON: 4
};

/**
 * @return {proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.ImageCase}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.prototype.getImageCase = function() {
  return /** @type {proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.ImageCase} */(jspb.Message.computeOneofCase(this, proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.oneofGroups_[0]));
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
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    largeImage: (f = msg.getLargeImage()) && proto.google.cloud.dialogflow.v2.Intent.Message.Image.toObject(includeInstance, f),
    icon: (f = msg.getIcon()) && proto.google.cloud.dialogflow.v2.Intent.Message.Image.toObject(includeInstance, f),
    contentUrl: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject;
  return proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDescription(value);
      break;
    case 3:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.Image;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.Image.deserializeBinaryFromReader);
      msg.setLargeImage(value);
      break;
    case 4:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.Image;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.Image.deserializeBinaryFromReader);
      msg.setIcon(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentUrl(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLargeImage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.Image.serializeBinaryToWriter
    );
  }
  f = message.getIcon();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.Image.serializeBinaryToWriter
    );
  }
  f = message.getContentUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Image large_image = 3;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.Image}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.prototype.getLargeImage = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.Image} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.Image, 3));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.Image|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.prototype.setLargeImage = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.prototype.clearLargeImage = function() {
  this.setLargeImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.prototype.hasLargeImage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Image icon = 4;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.Image}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.prototype.getIcon = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.Image} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.Image, 4));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.Image|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.prototype.setIcon = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.prototype.clearIcon = function() {
  this.setIcon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.prototype.hasIcon = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string content_url = 5;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.prototype.getContentUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject.prototype.setContentUrl = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional ResponseMediaType media_type = 1;
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaType}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.prototype.getMediaType = function() {
  return /** @type {!proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaType} value */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.prototype.setMediaType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated ResponseMediaObject media_objects = 2;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject>}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.prototype.getMediaObjectsList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject, 2));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject>} value */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.prototype.setMediaObjectsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.prototype.addMediaObjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.ResponseMediaObject, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent.prototype.clearMediaObjectsList = function() {
  this.setMediaObjectsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.repeatedFields_ = [1];



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
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.toObject, includeInstance),
    imageDisplayOptions: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard;
  return proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 2:
      var value = /** @type {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.ImageDisplayOptions} */ (reader.readEnum());
      msg.setImageDisplayOptions(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.serializeBinaryToWriter
    );
  }
  f = message.getImageDisplayOptions();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.ImageDisplayOptions = {
  IMAGE_DISPLAY_OPTIONS_UNSPECIFIED: 0,
  GRAY: 1,
  WHITE: 2,
  CROPPED: 3,
  BLURRED_BACKGROUND: 4
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
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    openUriAction: (f = msg.getOpenUriAction()) && proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.toObject(includeInstance, f),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    image: (f = msg.getImage()) && proto.google.cloud.dialogflow.v2.Intent.Message.Image.toObject(includeInstance, f),
    footer: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem;
  return proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.deserializeBinaryFromReader);
      msg.setOpenUriAction(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.Image;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.Image.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFooter(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpenUriAction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.Image.serializeBinaryToWriter
    );
  }
  f = message.getFooter();
  if (f.length > 0) {
    writer.writeString(
      5,
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
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    urlTypeHint: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction;
  return proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.UrlTypeHint} */ (reader.readEnum());
      msg.setUrlTypeHint(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrlTypeHint();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.UrlTypeHint = {
  URL_TYPE_HINT_UNSPECIFIED: 0,
  AMP_ACTION: 1,
  AMP_CONTENT: 2
};

/**
 * optional string url = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.prototype.setUrl = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional UrlTypeHint url_type_hint = 3;
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.UrlTypeHint}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.prototype.getUrlTypeHint = function() {
  return /** @type {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.UrlTypeHint} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.UrlTypeHint} value */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction.prototype.setUrlTypeHint = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional OpenUrlAction open_uri_action = 1;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.prototype.getOpenUriAction = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction, 1));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.prototype.setOpenUriAction = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.prototype.clearOpenUriAction = function() {
  this.setOpenUriAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.prototype.hasOpenUriAction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Image image = 4;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.Image}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.prototype.getImage = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.Image} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.Image, 4));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.Image|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.prototype.setImage = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.prototype.clearImage = function() {
  this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.prototype.hasImage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string footer = 5;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.prototype.getFooter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.prototype.setFooter = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated BrowseCarouselCardItem items = 1;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem>}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem, 1));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem>} value */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.prototype.clearItemsList = function() {
  this.setItemsList([]);
};


/**
 * optional ImageDisplayOptions image_display_options = 2;
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.ImageDisplayOptions}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.prototype.getImageDisplayOptions = function() {
  return /** @type {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.ImageDisplayOptions} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.ImageDisplayOptions} value */
proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard.prototype.setImageDisplayOptions = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.repeatedFields_ = [4,5,6];



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
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.TableCard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subtitle: jspb.Message.getFieldWithDefault(msg, 2, ""),
    image: (f = msg.getImage()) && proto.google.cloud.dialogflow.v2.Intent.Message.Image.toObject(includeInstance, f),
    columnPropertiesList: jspb.Message.toObjectList(msg.getColumnPropertiesList(),
    proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.toObject, includeInstance),
    rowsList: jspb.Message.toObjectList(msg.getRowsList(),
    proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.toObject, includeInstance),
    buttonsList: jspb.Message.toObjectList(msg.getButtonsList(),
    proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.toObject, includeInstance)
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.TableCard}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.TableCard;
  return proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.TableCard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.TableCard}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubtitle(value);
      break;
    case 3:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.Image;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.Image.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    case 4:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.deserializeBinaryFromReader);
      msg.addColumnProperties(value);
      break;
    case 5:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.deserializeBinaryFromReader);
      msg.addRows(value);
      break;
    case 6:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.deserializeBinaryFromReader);
      msg.addButtons(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.TableCard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubtitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.Image.serializeBinaryToWriter
    );
  }
  f = message.getColumnPropertiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.serializeBinaryToWriter
    );
  }
  f = message.getRowsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.serializeBinaryToWriter
    );
  }
  f = message.getButtonsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button.serializeBinaryToWriter
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subtitle = 2;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.getSubtitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.setSubtitle = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Image image = 3;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.Image}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.getImage = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.Image} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.Image, 3));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.Image|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.setImage = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.clearImage = function() {
  this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.hasImage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated ColumnProperties column_properties = 4;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties>}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.getColumnPropertiesList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties, 4));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties>} value */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.setColumnPropertiesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.addColumnProperties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.clearColumnPropertiesList = function() {
  this.setColumnPropertiesList([]);
};


/**
 * repeated TableCardRow rows = 5;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow>}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.getRowsList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow, 5));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow>} value */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.setRowsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.addRows = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.clearRowsList = function() {
  this.setRowsList([]);
};


/**
 * repeated BasicCard.Button buttons = 6;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button>}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.getButtonsList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button, 6));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button>} value */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.setButtonsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.addButtons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard.Button, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCard.prototype.clearButtonsList = function() {
  this.setButtonsList([]);
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
proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: jspb.Message.getFieldWithDefault(msg, 1, ""),
    horizontalAlignment: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties;
  return proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {!proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.HorizontalAlignment} */ (reader.readEnum());
      msg.setHorizontalAlignment(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHorizontalAlignment();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.HorizontalAlignment = {
  HORIZONTAL_ALIGNMENT_UNSPECIFIED: 0,
  LEADING: 1,
  CENTER: 2,
  TRAILING: 3
};

/**
 * optional string header = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.prototype.getHeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.prototype.setHeader = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional HorizontalAlignment horizontal_alignment = 2;
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.HorizontalAlignment}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.prototype.getHorizontalAlignment = function() {
  return /** @type {!proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.HorizontalAlignment} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.HorizontalAlignment} value */
proto.google.cloud.dialogflow.v2.Intent.Message.ColumnProperties.prototype.setHorizontalAlignment = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.repeatedFields_ = [1];



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
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.toObject = function(includeInstance, msg) {
  var f, obj = {
    cellsList: jspb.Message.toObjectList(msg.getCellsList(),
    proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell.toObject, includeInstance),
    dividerAfter: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow;
  return proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell.deserializeBinaryFromReader);
      msg.addCells(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDividerAfter(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCellsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell.serializeBinaryToWriter
    );
  }
  f = message.getDividerAfter();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * repeated TableCardCell cells = 1;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell>}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.prototype.getCellsList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell, 1));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell>} value */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.prototype.setCellsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.prototype.addCells = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.prototype.clearCellsList = function() {
  this.setCellsList([]);
};


/**
 * optional bool divider_after = 2;
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.prototype.getDividerAfter = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardRow.prototype.setDividerAfter = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell;
  return proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
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
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.Message.TableCardCell.prototype.setText = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Text text = 1;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.Text}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.getText = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.Text} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.Text, 1));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.Text|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.setText = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.google.cloud.dialogflow.v2.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.clearText = function() {
  this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.hasText = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Image image = 2;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.Image}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.getImage = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.Image} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.Image, 2));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.Image|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.setImage = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.google.cloud.dialogflow.v2.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.clearImage = function() {
  this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.hasImage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional QuickReplies quick_replies = 3;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.getQuickReplies = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies, 3));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.QuickReplies|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.setQuickReplies = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.google.cloud.dialogflow.v2.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.clearQuickReplies = function() {
  this.setQuickReplies(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.hasQuickReplies = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Card card = 4;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.Card}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.getCard = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.Card} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.Card, 4));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.Card|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.setCard = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.google.cloud.dialogflow.v2.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.clearCard = function() {
  this.setCard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.hasCard = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Struct payload = 5;
 * @return {?proto.google.protobuf.Struct}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.getPayload = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 5));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.setPayload = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.google.cloud.dialogflow.v2.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.clearPayload = function() {
  this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SimpleResponses simple_responses = 7;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.getSimpleResponses = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses, 7));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.SimpleResponses|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.setSimpleResponses = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.google.cloud.dialogflow.v2.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.clearSimpleResponses = function() {
  this.setSimpleResponses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.hasSimpleResponses = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional BasicCard basic_card = 8;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.getBasicCard = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard, 8));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.BasicCard|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.setBasicCard = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.google.cloud.dialogflow.v2.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.clearBasicCard = function() {
  this.setBasicCard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.hasBasicCard = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Suggestions suggestions = 9;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.getSuggestions = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions, 9));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.Suggestions|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.setSuggestions = function(value) {
  jspb.Message.setOneofWrapperField(this, 9, proto.google.cloud.dialogflow.v2.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.clearSuggestions = function() {
  this.setSuggestions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.hasSuggestions = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional LinkOutSuggestion link_out_suggestion = 10;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.getLinkOutSuggestion = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion, 10));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.LinkOutSuggestion|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.setLinkOutSuggestion = function(value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.google.cloud.dialogflow.v2.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.clearLinkOutSuggestion = function() {
  this.setLinkOutSuggestion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.hasLinkOutSuggestion = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ListSelect list_select = 11;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.getListSelect = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect, 11));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.ListSelect|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.setListSelect = function(value) {
  jspb.Message.setOneofWrapperField(this, 11, proto.google.cloud.dialogflow.v2.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.clearListSelect = function() {
  this.setListSelect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.hasListSelect = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional CarouselSelect carousel_select = 12;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.getCarouselSelect = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect, 12));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.CarouselSelect|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.setCarouselSelect = function(value) {
  jspb.Message.setOneofWrapperField(this, 12, proto.google.cloud.dialogflow.v2.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.clearCarouselSelect = function() {
  this.setCarouselSelect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.hasCarouselSelect = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional BrowseCarouselCard browse_carousel_card = 22;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.getBrowseCarouselCard = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard, 22));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.BrowseCarouselCard|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.setBrowseCarouselCard = function(value) {
  jspb.Message.setOneofWrapperField(this, 22, proto.google.cloud.dialogflow.v2.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.clearBrowseCarouselCard = function() {
  this.setBrowseCarouselCard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.hasBrowseCarouselCard = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional TableCard table_card = 23;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.TableCard}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.getTableCard = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.TableCard} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.TableCard, 23));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.TableCard|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.setTableCard = function(value) {
  jspb.Message.setOneofWrapperField(this, 23, proto.google.cloud.dialogflow.v2.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.clearTableCard = function() {
  this.setTableCard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.hasTableCard = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional MediaContent media_content = 24;
 * @return {?proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.getMediaContent = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent, 24));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent.Message.MediaContent|undefined} value */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.setMediaContent = function(value) {
  jspb.Message.setOneofWrapperField(this, 24, proto.google.cloud.dialogflow.v2.Intent.Message.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.clearMediaContent = function() {
  this.setMediaContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.hasMediaContent = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional Platform platform = 6;
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message.Platform}
 */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.getPlatform = function() {
  return /** @type {!proto.google.cloud.dialogflow.v2.Intent.Message.Platform} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Platform} value */
proto.google.cloud.dialogflow.v2.Intent.Message.prototype.setPlatform = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
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
proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    followupIntentName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parentFollowupIntentName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo}
 */
proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo;
  return proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo}
 */
proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFollowupIntentName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentFollowupIntentName(value);
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
proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFollowupIntentName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParentFollowupIntentName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string followup_intent_name = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo.prototype.getFollowupIntentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo.prototype.setFollowupIntentName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent_followup_intent_name = 2;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo.prototype.getParentFollowupIntentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo.prototype.setParentFollowupIntentName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.prototype.setDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional WebhookState webhook_state = 6;
 * @return {!proto.google.cloud.dialogflow.v2.Intent.WebhookState}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.getWebhookState = function() {
  return /** @type {!proto.google.cloud.dialogflow.v2.Intent.WebhookState} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.google.cloud.dialogflow.v2.Intent.WebhookState} value */
proto.google.cloud.dialogflow.v2.Intent.prototype.setWebhookState = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional int32 priority = 3;
 * @return {number}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.google.cloud.dialogflow.v2.Intent.prototype.setPriority = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool is_fallback = 4;
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.getIsFallback = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.google.cloud.dialogflow.v2.Intent.prototype.setIsFallback = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool ml_disabled = 19;
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.getMlDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/** @param {boolean} value */
proto.google.cloud.dialogflow.v2.Intent.prototype.setMlDisabled = function(value) {
  jspb.Message.setProto3BooleanField(this, 19, value);
};


/**
 * repeated string input_context_names = 7;
 * @return {!Array<string>}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.getInputContextNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/** @param {!Array<string>} value */
proto.google.cloud.dialogflow.v2.Intent.prototype.setInputContextNamesList = function(value) {
  jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.addInputContextNames = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.clearInputContextNamesList = function() {
  this.setInputContextNamesList([]);
};


/**
 * repeated string events = 8;
 * @return {!Array<string>}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.getEventsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/** @param {!Array<string>} value */
proto.google.cloud.dialogflow.v2.Intent.prototype.setEventsList = function(value) {
  jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.addEvents = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.clearEventsList = function() {
  this.setEventsList([]);
};


/**
 * repeated TrainingPhrase training_phrases = 9;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase>}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.getTrainingPhrasesList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase, 9));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase>} value */
proto.google.cloud.dialogflow.v2.Intent.prototype.setTrainingPhrasesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.addTrainingPhrases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.google.cloud.dialogflow.v2.Intent.TrainingPhrase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.clearTrainingPhrasesList = function() {
  this.setTrainingPhrasesList([]);
};


/**
 * optional string action = 10;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.prototype.setAction = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated Context output_contexts = 11;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Context>}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.getOutputContextsList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Context>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_cloud_dialogflow_v2_context_pb.Context, 11));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Context>} value */
proto.google.cloud.dialogflow.v2.Intent.prototype.setOutputContextsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Context=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Context}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.addOutputContexts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.google.cloud.dialogflow.v2.Context, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.clearOutputContextsList = function() {
  this.setOutputContextsList([]);
};


/**
 * optional bool reset_contexts = 12;
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.getResetContexts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/** @param {boolean} value */
proto.google.cloud.dialogflow.v2.Intent.prototype.setResetContexts = function(value) {
  jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * repeated Parameter parameters = 13;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent.Parameter>}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.getParametersList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent.Parameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Parameter, 13));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent.Parameter>} value */
proto.google.cloud.dialogflow.v2.Intent.prototype.setParametersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Parameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Parameter}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.addParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.google.cloud.dialogflow.v2.Intent.Parameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.clearParametersList = function() {
  this.setParametersList([]);
};


/**
 * repeated Message messages = 14;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message>}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.getMessagesList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.Message, 14));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message>} value */
proto.google.cloud.dialogflow.v2.Intent.prototype.setMessagesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent.Message}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.google.cloud.dialogflow.v2.Intent.Message, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.clearMessagesList = function() {
  this.setMessagesList([]);
};


/**
 * repeated Message.Platform default_response_platforms = 15;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.Platform>}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.getDefaultResponsePlatformsList = function() {
  return /** @type {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.Platform>} */ (jspb.Message.getRepeatedField(this, 15));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent.Message.Platform>} value */
proto.google.cloud.dialogflow.v2.Intent.prototype.setDefaultResponsePlatformsList = function(value) {
  jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent.Message.Platform} value
 * @param {number=} opt_index
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.addDefaultResponsePlatforms = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.clearDefaultResponsePlatformsList = function() {
  this.setDefaultResponsePlatformsList([]);
};


/**
 * optional string root_followup_intent_name = 16;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.getRootFollowupIntentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.prototype.setRootFollowupIntentName = function(value) {
  jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string parent_followup_intent_name = 17;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.getParentFollowupIntentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.Intent.prototype.setParentFollowupIntentName = function(value) {
  jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * repeated FollowupIntentInfo followup_intent_info = 18;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo>}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.getFollowupIntentInfoList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo, 18));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo>} value */
proto.google.cloud.dialogflow.v2.Intent.prototype.setFollowupIntentInfoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 18, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo}
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.addFollowupIntentInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 18, opt_value, proto.google.cloud.dialogflow.v2.Intent.FollowupIntentInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.Intent.prototype.clearFollowupIntentInfoList = function() {
  this.setFollowupIntentInfoList([]);
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
proto.google.cloud.dialogflow.v2.ListIntentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.ListIntentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.ListIntentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.ListIntentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    intentView: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.google.cloud.dialogflow.v2.ListIntentsRequest}
 */
proto.google.cloud.dialogflow.v2.ListIntentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.ListIntentsRequest;
  return proto.google.cloud.dialogflow.v2.ListIntentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.ListIntentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.ListIntentsRequest}
 */
proto.google.cloud.dialogflow.v2.ListIntentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 3:
      var value = /** @type {!proto.google.cloud.dialogflow.v2.IntentView} */ (reader.readEnum());
      msg.setIntentView(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.google.cloud.dialogflow.v2.ListIntentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.ListIntentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.ListIntentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.ListIntentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIntentView();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.ListIntentsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.ListIntentsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.ListIntentsRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.ListIntentsRequest.prototype.setLanguageCode = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional IntentView intent_view = 3;
 * @return {!proto.google.cloud.dialogflow.v2.IntentView}
 */
proto.google.cloud.dialogflow.v2.ListIntentsRequest.prototype.getIntentView = function() {
  return /** @type {!proto.google.cloud.dialogflow.v2.IntentView} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.google.cloud.dialogflow.v2.IntentView} value */
proto.google.cloud.dialogflow.v2.ListIntentsRequest.prototype.setIntentView = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.google.cloud.dialogflow.v2.ListIntentsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.google.cloud.dialogflow.v2.ListIntentsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.ListIntentsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.ListIntentsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2.ListIntentsResponse.repeatedFields_ = [1];



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
proto.google.cloud.dialogflow.v2.ListIntentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.ListIntentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.ListIntentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.ListIntentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    intentsList: jspb.Message.toObjectList(msg.getIntentsList(),
    proto.google.cloud.dialogflow.v2.Intent.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.google.cloud.dialogflow.v2.ListIntentsResponse}
 */
proto.google.cloud.dialogflow.v2.ListIntentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.ListIntentsResponse;
  return proto.google.cloud.dialogflow.v2.ListIntentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.ListIntentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.ListIntentsResponse}
 */
proto.google.cloud.dialogflow.v2.ListIntentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.dialogflow.v2.Intent;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.deserializeBinaryFromReader);
      msg.addIntents(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.google.cloud.dialogflow.v2.ListIntentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.ListIntentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.ListIntentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.ListIntentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.dialogflow.v2.Intent.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Intent intents = 1;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent>}
 */
proto.google.cloud.dialogflow.v2.ListIntentsResponse.prototype.getIntentsList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent, 1));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent>} value */
proto.google.cloud.dialogflow.v2.ListIntentsResponse.prototype.setIntentsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent}
 */
proto.google.cloud.dialogflow.v2.ListIntentsResponse.prototype.addIntents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.dialogflow.v2.Intent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.ListIntentsResponse.prototype.clearIntentsList = function() {
  this.setIntentsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.ListIntentsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.ListIntentsResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
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
proto.google.cloud.dialogflow.v2.GetIntentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.GetIntentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.GetIntentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.GetIntentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    intentView: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.google.cloud.dialogflow.v2.GetIntentRequest}
 */
proto.google.cloud.dialogflow.v2.GetIntentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.GetIntentRequest;
  return proto.google.cloud.dialogflow.v2.GetIntentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.GetIntentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.GetIntentRequest}
 */
proto.google.cloud.dialogflow.v2.GetIntentRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setLanguageCode(value);
      break;
    case 3:
      var value = /** @type {!proto.google.cloud.dialogflow.v2.IntentView} */ (reader.readEnum());
      msg.setIntentView(value);
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
proto.google.cloud.dialogflow.v2.GetIntentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.GetIntentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.GetIntentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.GetIntentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIntentView();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.GetIntentRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.GetIntentRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.GetIntentRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.GetIntentRequest.prototype.setLanguageCode = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional IntentView intent_view = 3;
 * @return {!proto.google.cloud.dialogflow.v2.IntentView}
 */
proto.google.cloud.dialogflow.v2.GetIntentRequest.prototype.getIntentView = function() {
  return /** @type {!proto.google.cloud.dialogflow.v2.IntentView} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.google.cloud.dialogflow.v2.IntentView} value */
proto.google.cloud.dialogflow.v2.GetIntentRequest.prototype.setIntentView = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
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
proto.google.cloud.dialogflow.v2.CreateIntentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.CreateIntentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.CreateIntentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.CreateIntentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    intent: (f = msg.getIntent()) && proto.google.cloud.dialogflow.v2.Intent.toObject(includeInstance, f),
    languageCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    intentView: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.google.cloud.dialogflow.v2.CreateIntentRequest}
 */
proto.google.cloud.dialogflow.v2.CreateIntentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.CreateIntentRequest;
  return proto.google.cloud.dialogflow.v2.CreateIntentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.CreateIntentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.CreateIntentRequest}
 */
proto.google.cloud.dialogflow.v2.CreateIntentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = new proto.google.cloud.dialogflow.v2.Intent;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.deserializeBinaryFromReader);
      msg.setIntent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 4:
      var value = /** @type {!proto.google.cloud.dialogflow.v2.IntentView} */ (reader.readEnum());
      msg.setIntentView(value);
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
proto.google.cloud.dialogflow.v2.CreateIntentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.CreateIntentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.CreateIntentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.CreateIntentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIntent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.cloud.dialogflow.v2.Intent.serializeBinaryToWriter
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIntentView();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.CreateIntentRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.CreateIntentRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Intent intent = 2;
 * @return {?proto.google.cloud.dialogflow.v2.Intent}
 */
proto.google.cloud.dialogflow.v2.CreateIntentRequest.prototype.getIntent = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent, 2));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent|undefined} value */
proto.google.cloud.dialogflow.v2.CreateIntentRequest.prototype.setIntent = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.CreateIntentRequest.prototype.clearIntent = function() {
  this.setIntent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.CreateIntentRequest.prototype.hasIntent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string language_code = 3;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.CreateIntentRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.CreateIntentRequest.prototype.setLanguageCode = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional IntentView intent_view = 4;
 * @return {!proto.google.cloud.dialogflow.v2.IntentView}
 */
proto.google.cloud.dialogflow.v2.CreateIntentRequest.prototype.getIntentView = function() {
  return /** @type {!proto.google.cloud.dialogflow.v2.IntentView} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.google.cloud.dialogflow.v2.IntentView} value */
proto.google.cloud.dialogflow.v2.CreateIntentRequest.prototype.setIntentView = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
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
proto.google.cloud.dialogflow.v2.UpdateIntentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.UpdateIntentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.UpdateIntentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.UpdateIntentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    intent: (f = msg.getIntent()) && proto.google.cloud.dialogflow.v2.Intent.toObject(includeInstance, f),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    intentView: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.google.cloud.dialogflow.v2.UpdateIntentRequest}
 */
proto.google.cloud.dialogflow.v2.UpdateIntentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.UpdateIntentRequest;
  return proto.google.cloud.dialogflow.v2.UpdateIntentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.UpdateIntentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.UpdateIntentRequest}
 */
proto.google.cloud.dialogflow.v2.UpdateIntentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.dialogflow.v2.Intent;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.deserializeBinaryFromReader);
      msg.setIntent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 4:
      var value = /** @type {!proto.google.cloud.dialogflow.v2.IntentView} */ (reader.readEnum());
      msg.setIntentView(value);
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
proto.google.cloud.dialogflow.v2.UpdateIntentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.UpdateIntentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.UpdateIntentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.UpdateIntentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.cloud.dialogflow.v2.Intent.serializeBinaryToWriter
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getIntentView();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional Intent intent = 1;
 * @return {?proto.google.cloud.dialogflow.v2.Intent}
 */
proto.google.cloud.dialogflow.v2.UpdateIntentRequest.prototype.getIntent = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.Intent} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.Intent, 1));
};


/** @param {?proto.google.cloud.dialogflow.v2.Intent|undefined} value */
proto.google.cloud.dialogflow.v2.UpdateIntentRequest.prototype.setIntent = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.UpdateIntentRequest.prototype.clearIntent = function() {
  this.setIntent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.UpdateIntentRequest.prototype.hasIntent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.UpdateIntentRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.UpdateIntentRequest.prototype.setLanguageCode = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.FieldMask update_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.dialogflow.v2.UpdateIntentRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.dialogflow.v2.UpdateIntentRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.UpdateIntentRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.UpdateIntentRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional IntentView intent_view = 4;
 * @return {!proto.google.cloud.dialogflow.v2.IntentView}
 */
proto.google.cloud.dialogflow.v2.UpdateIntentRequest.prototype.getIntentView = function() {
  return /** @type {!proto.google.cloud.dialogflow.v2.IntentView} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.google.cloud.dialogflow.v2.IntentView} value */
proto.google.cloud.dialogflow.v2.UpdateIntentRequest.prototype.setIntentView = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
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
proto.google.cloud.dialogflow.v2.DeleteIntentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.DeleteIntentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.DeleteIntentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.DeleteIntentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.cloud.dialogflow.v2.DeleteIntentRequest}
 */
proto.google.cloud.dialogflow.v2.DeleteIntentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.DeleteIntentRequest;
  return proto.google.cloud.dialogflow.v2.DeleteIntentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.DeleteIntentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.DeleteIntentRequest}
 */
proto.google.cloud.dialogflow.v2.DeleteIntentRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.cloud.dialogflow.v2.DeleteIntentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.DeleteIntentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.DeleteIntentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.DeleteIntentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.DeleteIntentRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.DeleteIntentRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.IntentBatchCase = {
  INTENT_BATCH_NOT_SET: 0,
  INTENT_BATCH_URI: 2,
  INTENT_BATCH_INLINE: 3
};

/**
 * @return {proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.IntentBatchCase}
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.getIntentBatchCase = function() {
  return /** @type {proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.IntentBatchCase} */(jspb.Message.computeOneofCase(this, proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.oneofGroups_[0]));
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
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    intentBatchUri: jspb.Message.getFieldWithDefault(msg, 2, ""),
    intentBatchInline: (f = msg.getIntentBatchInline()) && proto.google.cloud.dialogflow.v2.IntentBatch.toObject(includeInstance, f),
    languageCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    intentView: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest}
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest;
  return proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest}
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntentBatchUri(value);
      break;
    case 3:
      var value = new proto.google.cloud.dialogflow.v2.IntentBatch;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.IntentBatch.deserializeBinaryFromReader);
      msg.setIntentBatchInline(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 5:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 6:
      var value = /** @type {!proto.google.cloud.dialogflow.v2.IntentView} */ (reader.readEnum());
      msg.setIntentView(value);
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
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIntentBatchInline();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.cloud.dialogflow.v2.IntentBatch.serializeBinaryToWriter
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getIntentView();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string intent_batch_uri = 2;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.getIntentBatchUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.setIntentBatchUri = function(value) {
  jspb.Message.setOneofField(this, 2, proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.clearIntentBatchUri = function() {
  jspb.Message.setOneofField(this, 2, proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.hasIntentBatchUri = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional IntentBatch intent_batch_inline = 3;
 * @return {?proto.google.cloud.dialogflow.v2.IntentBatch}
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.getIntentBatchInline = function() {
  return /** @type{?proto.google.cloud.dialogflow.v2.IntentBatch} */ (
    jspb.Message.getWrapperField(this, proto.google.cloud.dialogflow.v2.IntentBatch, 3));
};


/** @param {?proto.google.cloud.dialogflow.v2.IntentBatch|undefined} value */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.setIntentBatchInline = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.clearIntentBatchInline = function() {
  this.setIntentBatchInline(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.hasIntentBatchInline = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string language_code = 4;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.setLanguageCode = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.FieldMask update_mask = 5;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 5));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional IntentView intent_view = 6;
 * @return {!proto.google.cloud.dialogflow.v2.IntentView}
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.getIntentView = function() {
  return /** @type {!proto.google.cloud.dialogflow.v2.IntentView} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.google.cloud.dialogflow.v2.IntentView} value */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsRequest.prototype.setIntentView = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse.repeatedFields_ = [1];



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
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    intentsList: jspb.Message.toObjectList(msg.getIntentsList(),
    proto.google.cloud.dialogflow.v2.Intent.toObject, includeInstance)
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
 * @return {!proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse}
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse;
  return proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse}
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.dialogflow.v2.Intent;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.deserializeBinaryFromReader);
      msg.addIntents(value);
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
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.dialogflow.v2.Intent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Intent intents = 1;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent>}
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse.prototype.getIntentsList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent, 1));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent>} value */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse.prototype.setIntentsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent}
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse.prototype.addIntents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.dialogflow.v2.Intent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.BatchUpdateIntentsResponse.prototype.clearIntentsList = function() {
  this.setIntentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest.repeatedFields_ = [2];



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
proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    intentsList: jspb.Message.toObjectList(msg.getIntentsList(),
    proto.google.cloud.dialogflow.v2.Intent.toObject, includeInstance)
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
 * @return {!proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest}
 */
proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest;
  return proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest}
 */
proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = new proto.google.cloud.dialogflow.v2.Intent;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.deserializeBinaryFromReader);
      msg.addIntents(value);
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
proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.cloud.dialogflow.v2.Intent.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Intent intents = 2;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent>}
 */
proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest.prototype.getIntentsList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent, 2));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent>} value */
proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest.prototype.setIntentsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent}
 */
proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest.prototype.addIntents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.cloud.dialogflow.v2.Intent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.BatchDeleteIntentsRequest.prototype.clearIntentsList = function() {
  this.setIntentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.cloud.dialogflow.v2.IntentBatch.repeatedFields_ = [1];



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
proto.google.cloud.dialogflow.v2.IntentBatch.prototype.toObject = function(opt_includeInstance) {
  return proto.google.cloud.dialogflow.v2.IntentBatch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.cloud.dialogflow.v2.IntentBatch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.IntentBatch.toObject = function(includeInstance, msg) {
  var f, obj = {
    intentsList: jspb.Message.toObjectList(msg.getIntentsList(),
    proto.google.cloud.dialogflow.v2.Intent.toObject, includeInstance)
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
 * @return {!proto.google.cloud.dialogflow.v2.IntentBatch}
 */
proto.google.cloud.dialogflow.v2.IntentBatch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.cloud.dialogflow.v2.IntentBatch;
  return proto.google.cloud.dialogflow.v2.IntentBatch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.cloud.dialogflow.v2.IntentBatch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.cloud.dialogflow.v2.IntentBatch}
 */
proto.google.cloud.dialogflow.v2.IntentBatch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.cloud.dialogflow.v2.Intent;
      reader.readMessage(value,proto.google.cloud.dialogflow.v2.Intent.deserializeBinaryFromReader);
      msg.addIntents(value);
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
proto.google.cloud.dialogflow.v2.IntentBatch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.cloud.dialogflow.v2.IntentBatch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.cloud.dialogflow.v2.IntentBatch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.cloud.dialogflow.v2.IntentBatch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.cloud.dialogflow.v2.Intent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Intent intents = 1;
 * @return {!Array<!proto.google.cloud.dialogflow.v2.Intent>}
 */
proto.google.cloud.dialogflow.v2.IntentBatch.prototype.getIntentsList = function() {
  return /** @type{!Array<!proto.google.cloud.dialogflow.v2.Intent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.cloud.dialogflow.v2.Intent, 1));
};


/** @param {!Array<!proto.google.cloud.dialogflow.v2.Intent>} value */
proto.google.cloud.dialogflow.v2.IntentBatch.prototype.setIntentsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.cloud.dialogflow.v2.Intent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.cloud.dialogflow.v2.Intent}
 */
proto.google.cloud.dialogflow.v2.IntentBatch.prototype.addIntents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.cloud.dialogflow.v2.Intent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.google.cloud.dialogflow.v2.IntentBatch.prototype.clearIntentsList = function() {
  this.setIntentsList([]);
};


/**
 * @enum {number}
 */
proto.google.cloud.dialogflow.v2.IntentView = {
  INTENT_VIEW_UNSPECIFIED: 0,
  INTENT_VIEW_FULL: 1
};

goog.object.extend(exports, proto.google.cloud.dialogflow.v2);
