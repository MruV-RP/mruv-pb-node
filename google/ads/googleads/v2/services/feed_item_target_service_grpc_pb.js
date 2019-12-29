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
var google_ads_googleads_v2_services_feed_item_target_service_pb = require('../../../../../google/ads/googleads/v2/services/feed_item_target_service_pb.js');
var google_ads_googleads_v2_resources_feed_item_target_pb = require('../../../../../google/ads/googleads/v2/resources/feed_item_target_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_FeedItemTarget(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.FeedItemTarget');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_FeedItemTarget(buffer_arg) {
  return google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetFeedItemTargetRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_feed_item_target_service_pb.GetFeedItemTargetRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetFeedItemTargetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetFeedItemTargetRequest(buffer_arg) {
  return google_ads_googleads_v2_services_feed_item_target_service_pb.GetFeedItemTargetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateFeedItemTargetsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_feed_item_target_service_pb.MutateFeedItemTargetsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateFeedItemTargetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateFeedItemTargetsRequest(buffer_arg) {
  return google_ads_googleads_v2_services_feed_item_target_service_pb.MutateFeedItemTargetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateFeedItemTargetsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_feed_item_target_service_pb.MutateFeedItemTargetsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateFeedItemTargetsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateFeedItemTargetsResponse(buffer_arg) {
  return google_ads_googleads_v2_services_feed_item_target_service_pb.MutateFeedItemTargetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the FeedItemTarget service.
//
// Service to manage feed item targets.
var FeedItemTargetServiceService = exports.FeedItemTargetServiceService = {
  // Returns the requested feed item targets in full detail.
  getFeedItemTarget: {
    path: '/google.ads.googleads.v2.services.FeedItemTargetService/GetFeedItemTarget',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_feed_item_target_service_pb.GetFeedItemTargetRequest,
    responseType: google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetFeedItemTargetRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetFeedItemTargetRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_FeedItemTarget,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_FeedItemTarget,
  },
  // Creates or removes feed item targets. Operation statuses are returned.
  mutateFeedItemTargets: {
    path: '/google.ads.googleads.v2.services.FeedItemTargetService/MutateFeedItemTargets',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_feed_item_target_service_pb.MutateFeedItemTargetsRequest,
    responseType: google_ads_googleads_v2_services_feed_item_target_service_pb.MutateFeedItemTargetsResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_MutateFeedItemTargetsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_MutateFeedItemTargetsRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_MutateFeedItemTargetsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_MutateFeedItemTargetsResponse,
  },
};

exports.FeedItemTargetServiceClient = grpc.makeGenericClientConstructor(FeedItemTargetServiceService);