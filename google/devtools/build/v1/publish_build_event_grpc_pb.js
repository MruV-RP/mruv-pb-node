// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Google LLC.
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
var google_devtools_build_v1_publish_build_event_pb = require('../../../../google/devtools/build/v1/publish_build_event_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_devtools_build_v1_build_events_pb = require('../../../../google/devtools/build/v1/build_events_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_devtools_build_v1_PublishBuildToolEventStreamRequest(arg) {
  if (!(arg instanceof google_devtools_build_v1_publish_build_event_pb.PublishBuildToolEventStreamRequest)) {
    throw new Error('Expected argument of type google.devtools.build.v1.PublishBuildToolEventStreamRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_build_v1_PublishBuildToolEventStreamRequest(buffer_arg) {
  return google_devtools_build_v1_publish_build_event_pb.PublishBuildToolEventStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_build_v1_PublishBuildToolEventStreamResponse(arg) {
  if (!(arg instanceof google_devtools_build_v1_publish_build_event_pb.PublishBuildToolEventStreamResponse)) {
    throw new Error('Expected argument of type google.devtools.build.v1.PublishBuildToolEventStreamResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_build_v1_PublishBuildToolEventStreamResponse(buffer_arg) {
  return google_devtools_build_v1_publish_build_event_pb.PublishBuildToolEventStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_devtools_build_v1_PublishLifecycleEventRequest(arg) {
  if (!(arg instanceof google_devtools_build_v1_publish_build_event_pb.PublishLifecycleEventRequest)) {
    throw new Error('Expected argument of type google.devtools.build.v1.PublishLifecycleEventRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_devtools_build_v1_PublishLifecycleEventRequest(buffer_arg) {
  return google_devtools_build_v1_publish_build_event_pb.PublishLifecycleEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// A service for publishing BuildEvents. BuildEvents are generated by Build
// Systems to record actions taken during a Build. Events occur in streams,
// are identified by a StreamId, and ordered by sequence number in a stream.
//
// A Build may contain several streams of BuildEvents, depending on the systems
// that are involved in the Build. Some BuildEvents are used to declare the
// beginning and end of major portions of a Build; these are called
// LifecycleEvents, and are used (for example) to indicate the beginning or end
// of a Build, and the beginning or end of an Invocation attempt (there can be
// more than 1 Invocation in a Build if, for example, a failure occurs somewhere
// and it needs to be retried).
//
// Other, build-tool events represent actions taken by the Build tool, such as
// target objects produced via compilation, tests run, et cetera. There could be
// more than one build tool stream for an invocation attempt of a build.
var PublishBuildEventService = exports.PublishBuildEventService = {
  // Publish a build event stating the new state of a build (typically from the
  // build queue). The BuildEnqueued event must be publishd before all other
  // events for the same build ID.
  //
  // The backend will persist the event and deliver it to registered frontend
  // jobs immediately without batching.
  //
  // The commit status of the request is reported by the RPC's util_status()
  // function. The error code is the canoncial error code defined in
  // //util/task/codes.proto.
  publishLifecycleEvent: {
    path: '/google.devtools.build.v1.PublishBuildEvent/PublishLifecycleEvent',
    requestStream: false,
    responseStream: false,
    requestType: google_devtools_build_v1_publish_build_event_pb.PublishLifecycleEventRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_devtools_build_v1_PublishLifecycleEventRequest,
    requestDeserialize: deserialize_google_devtools_build_v1_PublishLifecycleEventRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Publish build tool events belonging to the same stream to a backend job
  // using bidirectional streaming.
  publishBuildToolEventStream: {
    path: '/google.devtools.build.v1.PublishBuildEvent/PublishBuildToolEventStream',
    requestStream: true,
    responseStream: true,
    requestType: google_devtools_build_v1_publish_build_event_pb.PublishBuildToolEventStreamRequest,
    responseType: google_devtools_build_v1_publish_build_event_pb.PublishBuildToolEventStreamResponse,
    requestSerialize: serialize_google_devtools_build_v1_PublishBuildToolEventStreamRequest,
    requestDeserialize: deserialize_google_devtools_build_v1_PublishBuildToolEventStreamRequest,
    responseSerialize: serialize_google_devtools_build_v1_PublishBuildToolEventStreamResponse,
    responseDeserialize: deserialize_google_devtools_build_v1_PublishBuildToolEventStreamResponse,
  },
};

exports.PublishBuildEventClient = grpc.makeGenericClientConstructor(PublishBuildEventService);
