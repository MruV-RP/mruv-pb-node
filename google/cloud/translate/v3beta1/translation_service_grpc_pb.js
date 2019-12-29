// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2019 Google LLC.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
'use strict';
var grpc = require('grpc');
var google_cloud_translate_v3beta1_translation_service_pb = require('../../../../google/cloud/translate/v3beta1/translation_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_cloud_translation_v3beta1_BatchTranslateTextRequest(arg) {
  if (!(arg instanceof google_cloud_translate_v3beta1_translation_service_pb.BatchTranslateTextRequest)) {
    throw new Error('Expected argument of type google.cloud.translation.v3beta1.BatchTranslateTextRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_translation_v3beta1_BatchTranslateTextRequest(buffer_arg) {
  return google_cloud_translate_v3beta1_translation_service_pb.BatchTranslateTextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_translation_v3beta1_CreateGlossaryRequest(arg) {
  if (!(arg instanceof google_cloud_translate_v3beta1_translation_service_pb.CreateGlossaryRequest)) {
    throw new Error('Expected argument of type google.cloud.translation.v3beta1.CreateGlossaryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_translation_v3beta1_CreateGlossaryRequest(buffer_arg) {
  return google_cloud_translate_v3beta1_translation_service_pb.CreateGlossaryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_translation_v3beta1_DeleteGlossaryRequest(arg) {
  if (!(arg instanceof google_cloud_translate_v3beta1_translation_service_pb.DeleteGlossaryRequest)) {
    throw new Error('Expected argument of type google.cloud.translation.v3beta1.DeleteGlossaryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_translation_v3beta1_DeleteGlossaryRequest(buffer_arg) {
  return google_cloud_translate_v3beta1_translation_service_pb.DeleteGlossaryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_translation_v3beta1_DetectLanguageRequest(arg) {
  if (!(arg instanceof google_cloud_translate_v3beta1_translation_service_pb.DetectLanguageRequest)) {
    throw new Error('Expected argument of type google.cloud.translation.v3beta1.DetectLanguageRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_translation_v3beta1_DetectLanguageRequest(buffer_arg) {
  return google_cloud_translate_v3beta1_translation_service_pb.DetectLanguageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_translation_v3beta1_DetectLanguageResponse(arg) {
  if (!(arg instanceof google_cloud_translate_v3beta1_translation_service_pb.DetectLanguageResponse)) {
    throw new Error('Expected argument of type google.cloud.translation.v3beta1.DetectLanguageResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_translation_v3beta1_DetectLanguageResponse(buffer_arg) {
  return google_cloud_translate_v3beta1_translation_service_pb.DetectLanguageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_translation_v3beta1_GetGlossaryRequest(arg) {
  if (!(arg instanceof google_cloud_translate_v3beta1_translation_service_pb.GetGlossaryRequest)) {
    throw new Error('Expected argument of type google.cloud.translation.v3beta1.GetGlossaryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_translation_v3beta1_GetGlossaryRequest(buffer_arg) {
  return google_cloud_translate_v3beta1_translation_service_pb.GetGlossaryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_translation_v3beta1_GetSupportedLanguagesRequest(arg) {
  if (!(arg instanceof google_cloud_translate_v3beta1_translation_service_pb.GetSupportedLanguagesRequest)) {
    throw new Error('Expected argument of type google.cloud.translation.v3beta1.GetSupportedLanguagesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_translation_v3beta1_GetSupportedLanguagesRequest(buffer_arg) {
  return google_cloud_translate_v3beta1_translation_service_pb.GetSupportedLanguagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_translation_v3beta1_Glossary(arg) {
  if (!(arg instanceof google_cloud_translate_v3beta1_translation_service_pb.Glossary)) {
    throw new Error('Expected argument of type google.cloud.translation.v3beta1.Glossary');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_translation_v3beta1_Glossary(buffer_arg) {
  return google_cloud_translate_v3beta1_translation_service_pb.Glossary.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_translation_v3beta1_ListGlossariesRequest(arg) {
  if (!(arg instanceof google_cloud_translate_v3beta1_translation_service_pb.ListGlossariesRequest)) {
    throw new Error('Expected argument of type google.cloud.translation.v3beta1.ListGlossariesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_translation_v3beta1_ListGlossariesRequest(buffer_arg) {
  return google_cloud_translate_v3beta1_translation_service_pb.ListGlossariesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_translation_v3beta1_ListGlossariesResponse(arg) {
  if (!(arg instanceof google_cloud_translate_v3beta1_translation_service_pb.ListGlossariesResponse)) {
    throw new Error('Expected argument of type google.cloud.translation.v3beta1.ListGlossariesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_translation_v3beta1_ListGlossariesResponse(buffer_arg) {
  return google_cloud_translate_v3beta1_translation_service_pb.ListGlossariesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_translation_v3beta1_SupportedLanguages(arg) {
  if (!(arg instanceof google_cloud_translate_v3beta1_translation_service_pb.SupportedLanguages)) {
    throw new Error('Expected argument of type google.cloud.translation.v3beta1.SupportedLanguages');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_translation_v3beta1_SupportedLanguages(buffer_arg) {
  return google_cloud_translate_v3beta1_translation_service_pb.SupportedLanguages.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_translation_v3beta1_TranslateTextRequest(arg) {
  if (!(arg instanceof google_cloud_translate_v3beta1_translation_service_pb.TranslateTextRequest)) {
    throw new Error('Expected argument of type google.cloud.translation.v3beta1.TranslateTextRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_translation_v3beta1_TranslateTextRequest(buffer_arg) {
  return google_cloud_translate_v3beta1_translation_service_pb.TranslateTextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_translation_v3beta1_TranslateTextResponse(arg) {
  if (!(arg instanceof google_cloud_translate_v3beta1_translation_service_pb.TranslateTextResponse)) {
    throw new Error('Expected argument of type google.cloud.translation.v3beta1.TranslateTextResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_translation_v3beta1_TranslateTextResponse(buffer_arg) {
  return google_cloud_translate_v3beta1_translation_service_pb.TranslateTextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_longrunning_Operation(arg) {
  if (!(arg instanceof google_longrunning_operations_pb.Operation)) {
    throw new Error('Expected argument of type google.longrunning.Operation');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_longrunning_Operation(buffer_arg) {
  return google_longrunning_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file for the Cloud Translation API (v3beta1).
//
// Provides natural language translation operations.
var TranslationServiceService = exports.TranslationServiceService = {
  // Translates input text and returns translated text.
  translateText: {
    path: '/google.cloud.translation.v3beta1.TranslationService/TranslateText',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_translate_v3beta1_translation_service_pb.TranslateTextRequest,
    responseType: google_cloud_translate_v3beta1_translation_service_pb.TranslateTextResponse,
    requestSerialize: serialize_google_cloud_translation_v3beta1_TranslateTextRequest,
    requestDeserialize: deserialize_google_cloud_translation_v3beta1_TranslateTextRequest,
    responseSerialize: serialize_google_cloud_translation_v3beta1_TranslateTextResponse,
    responseDeserialize: deserialize_google_cloud_translation_v3beta1_TranslateTextResponse,
  },
  // Detects the language of text within a request.
  detectLanguage: {
    path: '/google.cloud.translation.v3beta1.TranslationService/DetectLanguage',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_translate_v3beta1_translation_service_pb.DetectLanguageRequest,
    responseType: google_cloud_translate_v3beta1_translation_service_pb.DetectLanguageResponse,
    requestSerialize: serialize_google_cloud_translation_v3beta1_DetectLanguageRequest,
    requestDeserialize: deserialize_google_cloud_translation_v3beta1_DetectLanguageRequest,
    responseSerialize: serialize_google_cloud_translation_v3beta1_DetectLanguageResponse,
    responseDeserialize: deserialize_google_cloud_translation_v3beta1_DetectLanguageResponse,
  },
  // Returns a list of supported languages for translation.
  getSupportedLanguages: {
    path: '/google.cloud.translation.v3beta1.TranslationService/GetSupportedLanguages',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_translate_v3beta1_translation_service_pb.GetSupportedLanguagesRequest,
    responseType: google_cloud_translate_v3beta1_translation_service_pb.SupportedLanguages,
    requestSerialize: serialize_google_cloud_translation_v3beta1_GetSupportedLanguagesRequest,
    requestDeserialize: deserialize_google_cloud_translation_v3beta1_GetSupportedLanguagesRequest,
    responseSerialize: serialize_google_cloud_translation_v3beta1_SupportedLanguages,
    responseDeserialize: deserialize_google_cloud_translation_v3beta1_SupportedLanguages,
  },
  // Translates a large volume of text in asynchronous batch mode.
  // This function provides real-time output as the inputs are being processed.
  // If caller cancels a request, the partial results (for an input file, it's
  // all or nothing) may still be available on the specified output location.
  //
  // This call returns immediately and you can
  // use google.longrunning.Operation.name to poll the status of the call.
  batchTranslateText: {
    path: '/google.cloud.translation.v3beta1.TranslationService/BatchTranslateText',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_translate_v3beta1_translation_service_pb.BatchTranslateTextRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_translation_v3beta1_BatchTranslateTextRequest,
    requestDeserialize: deserialize_google_cloud_translation_v3beta1_BatchTranslateTextRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Creates a glossary and returns the long-running operation. Returns
  // NOT_FOUND, if the project doesn't exist.
  createGlossary: {
    path: '/google.cloud.translation.v3beta1.TranslationService/CreateGlossary',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_translate_v3beta1_translation_service_pb.CreateGlossaryRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_translation_v3beta1_CreateGlossaryRequest,
    requestDeserialize: deserialize_google_cloud_translation_v3beta1_CreateGlossaryRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't
  // exist.
  listGlossaries: {
    path: '/google.cloud.translation.v3beta1.TranslationService/ListGlossaries',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_translate_v3beta1_translation_service_pb.ListGlossariesRequest,
    responseType: google_cloud_translate_v3beta1_translation_service_pb.ListGlossariesResponse,
    requestSerialize: serialize_google_cloud_translation_v3beta1_ListGlossariesRequest,
    requestDeserialize: deserialize_google_cloud_translation_v3beta1_ListGlossariesRequest,
    responseSerialize: serialize_google_cloud_translation_v3beta1_ListGlossariesResponse,
    responseDeserialize: deserialize_google_cloud_translation_v3beta1_ListGlossariesResponse,
  },
  // Gets a glossary. Returns NOT_FOUND, if the glossary doesn't
  // exist.
  getGlossary: {
    path: '/google.cloud.translation.v3beta1.TranslationService/GetGlossary',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_translate_v3beta1_translation_service_pb.GetGlossaryRequest,
    responseType: google_cloud_translate_v3beta1_translation_service_pb.Glossary,
    requestSerialize: serialize_google_cloud_translation_v3beta1_GetGlossaryRequest,
    requestDeserialize: deserialize_google_cloud_translation_v3beta1_GetGlossaryRequest,
    responseSerialize: serialize_google_cloud_translation_v3beta1_Glossary,
    responseDeserialize: deserialize_google_cloud_translation_v3beta1_Glossary,
  },
  // Deletes a glossary, or cancels glossary construction
  // if the glossary isn't created yet.
  // Returns NOT_FOUND, if the glossary doesn't exist.
  deleteGlossary: {
    path: '/google.cloud.translation.v3beta1.TranslationService/DeleteGlossary',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_translate_v3beta1_translation_service_pb.DeleteGlossaryRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_translation_v3beta1_DeleteGlossaryRequest,
    requestDeserialize: deserialize_google_cloud_translation_v3beta1_DeleteGlossaryRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.TranslationServiceClient = grpc.makeGenericClientConstructor(TranslationServiceService);
