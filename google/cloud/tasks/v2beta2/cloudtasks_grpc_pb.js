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
var google_cloud_tasks_v2beta2_cloudtasks_pb = require('../../../../google/cloud/tasks/v2beta2/cloudtasks_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_cloud_tasks_v2beta2_queue_pb = require('../../../../google/cloud/tasks/v2beta2/queue_pb.js');
var google_cloud_tasks_v2beta2_task_pb = require('../../../../google/cloud/tasks/v2beta2/task_pb.js');
var google_iam_v1_iam_policy_pb = require('../../../../google/iam/v1/iam_policy_pb.js');
var google_iam_v1_policy_pb = require('../../../../google/iam/v1/policy_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_cloud_tasks_v2beta2_AcknowledgeTaskRequest(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_cloudtasks_pb.AcknowledgeTaskRequest)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.AcknowledgeTaskRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_AcknowledgeTaskRequest(buffer_arg) {
  return google_cloud_tasks_v2beta2_cloudtasks_pb.AcknowledgeTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_CancelLeaseRequest(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_cloudtasks_pb.CancelLeaseRequest)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.CancelLeaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_CancelLeaseRequest(buffer_arg) {
  return google_cloud_tasks_v2beta2_cloudtasks_pb.CancelLeaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_CreateQueueRequest(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_cloudtasks_pb.CreateQueueRequest)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.CreateQueueRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_CreateQueueRequest(buffer_arg) {
  return google_cloud_tasks_v2beta2_cloudtasks_pb.CreateQueueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_CreateTaskRequest(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_cloudtasks_pb.CreateTaskRequest)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.CreateTaskRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_CreateTaskRequest(buffer_arg) {
  return google_cloud_tasks_v2beta2_cloudtasks_pb.CreateTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_DeleteQueueRequest(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_cloudtasks_pb.DeleteQueueRequest)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.DeleteQueueRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_DeleteQueueRequest(buffer_arg) {
  return google_cloud_tasks_v2beta2_cloudtasks_pb.DeleteQueueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_DeleteTaskRequest(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_cloudtasks_pb.DeleteTaskRequest)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.DeleteTaskRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_DeleteTaskRequest(buffer_arg) {
  return google_cloud_tasks_v2beta2_cloudtasks_pb.DeleteTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_GetQueueRequest(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_cloudtasks_pb.GetQueueRequest)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.GetQueueRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_GetQueueRequest(buffer_arg) {
  return google_cloud_tasks_v2beta2_cloudtasks_pb.GetQueueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_GetTaskRequest(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_cloudtasks_pb.GetTaskRequest)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.GetTaskRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_GetTaskRequest(buffer_arg) {
  return google_cloud_tasks_v2beta2_cloudtasks_pb.GetTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_LeaseTasksRequest(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_cloudtasks_pb.LeaseTasksRequest)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.LeaseTasksRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_LeaseTasksRequest(buffer_arg) {
  return google_cloud_tasks_v2beta2_cloudtasks_pb.LeaseTasksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_LeaseTasksResponse(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_cloudtasks_pb.LeaseTasksResponse)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.LeaseTasksResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_LeaseTasksResponse(buffer_arg) {
  return google_cloud_tasks_v2beta2_cloudtasks_pb.LeaseTasksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_ListQueuesRequest(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_cloudtasks_pb.ListQueuesRequest)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.ListQueuesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_ListQueuesRequest(buffer_arg) {
  return google_cloud_tasks_v2beta2_cloudtasks_pb.ListQueuesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_ListQueuesResponse(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_cloudtasks_pb.ListQueuesResponse)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.ListQueuesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_ListQueuesResponse(buffer_arg) {
  return google_cloud_tasks_v2beta2_cloudtasks_pb.ListQueuesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_ListTasksRequest(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_cloudtasks_pb.ListTasksRequest)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.ListTasksRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_ListTasksRequest(buffer_arg) {
  return google_cloud_tasks_v2beta2_cloudtasks_pb.ListTasksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_ListTasksResponse(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_cloudtasks_pb.ListTasksResponse)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.ListTasksResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_ListTasksResponse(buffer_arg) {
  return google_cloud_tasks_v2beta2_cloudtasks_pb.ListTasksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_PauseQueueRequest(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_cloudtasks_pb.PauseQueueRequest)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.PauseQueueRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_PauseQueueRequest(buffer_arg) {
  return google_cloud_tasks_v2beta2_cloudtasks_pb.PauseQueueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_PurgeQueueRequest(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_cloudtasks_pb.PurgeQueueRequest)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.PurgeQueueRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_PurgeQueueRequest(buffer_arg) {
  return google_cloud_tasks_v2beta2_cloudtasks_pb.PurgeQueueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_Queue(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_queue_pb.Queue)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.Queue');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_Queue(buffer_arg) {
  return google_cloud_tasks_v2beta2_queue_pb.Queue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_RenewLeaseRequest(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_cloudtasks_pb.RenewLeaseRequest)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.RenewLeaseRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_RenewLeaseRequest(buffer_arg) {
  return google_cloud_tasks_v2beta2_cloudtasks_pb.RenewLeaseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_ResumeQueueRequest(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_cloudtasks_pb.ResumeQueueRequest)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.ResumeQueueRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_ResumeQueueRequest(buffer_arg) {
  return google_cloud_tasks_v2beta2_cloudtasks_pb.ResumeQueueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_RunTaskRequest(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_cloudtasks_pb.RunTaskRequest)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.RunTaskRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_RunTaskRequest(buffer_arg) {
  return google_cloud_tasks_v2beta2_cloudtasks_pb.RunTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_Task(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_task_pb.Task)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.Task');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_Task(buffer_arg) {
  return google_cloud_tasks_v2beta2_task_pb.Task.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_tasks_v2beta2_UpdateQueueRequest(arg) {
  if (!(arg instanceof google_cloud_tasks_v2beta2_cloudtasks_pb.UpdateQueueRequest)) {
    throw new Error('Expected argument of type google.cloud.tasks.v2beta2.UpdateQueueRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_tasks_v2beta2_UpdateQueueRequest(buffer_arg) {
  return google_cloud_tasks_v2beta2_cloudtasks_pb.UpdateQueueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_GetIamPolicyRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.GetIamPolicyRequest)) {
    throw new Error('Expected argument of type google.iam.v1.GetIamPolicyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_v1_GetIamPolicyRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.GetIamPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_Policy(arg) {
  if (!(arg instanceof google_iam_v1_policy_pb.Policy)) {
    throw new Error('Expected argument of type google.iam.v1.Policy');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_v1_Policy(buffer_arg) {
  return google_iam_v1_policy_pb.Policy.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_SetIamPolicyRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.SetIamPolicyRequest)) {
    throw new Error('Expected argument of type google.iam.v1.SetIamPolicyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_v1_SetIamPolicyRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.SetIamPolicyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_TestIamPermissionsRequest(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.TestIamPermissionsRequest)) {
    throw new Error('Expected argument of type google.iam.v1.TestIamPermissionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_v1_TestIamPermissionsRequest(buffer_arg) {
  return google_iam_v1_iam_policy_pb.TestIamPermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_v1_TestIamPermissionsResponse(arg) {
  if (!(arg instanceof google_iam_v1_iam_policy_pb.TestIamPermissionsResponse)) {
    throw new Error('Expected argument of type google.iam.v1.TestIamPermissionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_v1_TestIamPermissionsResponse(buffer_arg) {
  return google_iam_v1_iam_policy_pb.TestIamPermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// Cloud Tasks allows developers to manage the execution of background
// work in their applications.
var CloudTasksService = exports.CloudTasksService = {
  // Lists queues.
  //
  // Queues are returned in lexicographical order.
  listQueues: {
    path: '/google.cloud.tasks.v2beta2.CloudTasks/ListQueues',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_tasks_v2beta2_cloudtasks_pb.ListQueuesRequest,
    responseType: google_cloud_tasks_v2beta2_cloudtasks_pb.ListQueuesResponse,
    requestSerialize: serialize_google_cloud_tasks_v2beta2_ListQueuesRequest,
    requestDeserialize: deserialize_google_cloud_tasks_v2beta2_ListQueuesRequest,
    responseSerialize: serialize_google_cloud_tasks_v2beta2_ListQueuesResponse,
    responseDeserialize: deserialize_google_cloud_tasks_v2beta2_ListQueuesResponse,
  },
  // Gets a queue.
  getQueue: {
    path: '/google.cloud.tasks.v2beta2.CloudTasks/GetQueue',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_tasks_v2beta2_cloudtasks_pb.GetQueueRequest,
    responseType: google_cloud_tasks_v2beta2_queue_pb.Queue,
    requestSerialize: serialize_google_cloud_tasks_v2beta2_GetQueueRequest,
    requestDeserialize: deserialize_google_cloud_tasks_v2beta2_GetQueueRequest,
    responseSerialize: serialize_google_cloud_tasks_v2beta2_Queue,
    responseDeserialize: deserialize_google_cloud_tasks_v2beta2_Queue,
  },
  // Creates a queue.
  //
  // Queues created with this method allow tasks to live for a maximum of 31
  // days. After a task is 31 days old, the task will be deleted regardless of whether
  // it was dispatched or not.
  //
  // WARNING: Using this method may have unintended side effects if you are
  // using an App Engine `queue.yaml` or `queue.xml` file to manage your queues.
  // Read
  // [Overview of Queue Management and
  // queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using
  // this method.
  createQueue: {
    path: '/google.cloud.tasks.v2beta2.CloudTasks/CreateQueue',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_tasks_v2beta2_cloudtasks_pb.CreateQueueRequest,
    responseType: google_cloud_tasks_v2beta2_queue_pb.Queue,
    requestSerialize: serialize_google_cloud_tasks_v2beta2_CreateQueueRequest,
    requestDeserialize: deserialize_google_cloud_tasks_v2beta2_CreateQueueRequest,
    responseSerialize: serialize_google_cloud_tasks_v2beta2_Queue,
    responseDeserialize: deserialize_google_cloud_tasks_v2beta2_Queue,
  },
  // Updates a queue.
  //
  // This method creates the queue if it does not exist and updates
  // the queue if it does exist.
  //
  // Queues created with this method allow tasks to live for a maximum of 31
  // days. After a task is 31 days old, the task will be deleted regardless of whether
  // it was dispatched or not.
  //
  // WARNING: Using this method may have unintended side effects if you are
  // using an App Engine `queue.yaml` or `queue.xml` file to manage your queues.
  // Read
  // [Overview of Queue Management and
  // queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using
  // this method.
  updateQueue: {
    path: '/google.cloud.tasks.v2beta2.CloudTasks/UpdateQueue',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_tasks_v2beta2_cloudtasks_pb.UpdateQueueRequest,
    responseType: google_cloud_tasks_v2beta2_queue_pb.Queue,
    requestSerialize: serialize_google_cloud_tasks_v2beta2_UpdateQueueRequest,
    requestDeserialize: deserialize_google_cloud_tasks_v2beta2_UpdateQueueRequest,
    responseSerialize: serialize_google_cloud_tasks_v2beta2_Queue,
    responseDeserialize: deserialize_google_cloud_tasks_v2beta2_Queue,
  },
  // Deletes a queue.
  //
  // This command will delete the queue even if it has tasks in it.
  //
  // Note: If you delete a queue, a queue with the same name can't be created
  // for 7 days.
  //
  // WARNING: Using this method may have unintended side effects if you are
  // using an App Engine `queue.yaml` or `queue.xml` file to manage your queues.
  // Read
  // [Overview of Queue Management and
  // queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using
  // this method.
  deleteQueue: {
    path: '/google.cloud.tasks.v2beta2.CloudTasks/DeleteQueue',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_tasks_v2beta2_cloudtasks_pb.DeleteQueueRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_tasks_v2beta2_DeleteQueueRequest,
    requestDeserialize: deserialize_google_cloud_tasks_v2beta2_DeleteQueueRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Purges a queue by deleting all of its tasks.
  //
  // All tasks created before this method is called are permanently deleted.
  //
  // Purge operations can take up to one minute to take effect. Tasks
  // might be dispatched before the purge takes effect. A purge is irreversible.
  purgeQueue: {
    path: '/google.cloud.tasks.v2beta2.CloudTasks/PurgeQueue',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_tasks_v2beta2_cloudtasks_pb.PurgeQueueRequest,
    responseType: google_cloud_tasks_v2beta2_queue_pb.Queue,
    requestSerialize: serialize_google_cloud_tasks_v2beta2_PurgeQueueRequest,
    requestDeserialize: deserialize_google_cloud_tasks_v2beta2_PurgeQueueRequest,
    responseSerialize: serialize_google_cloud_tasks_v2beta2_Queue,
    responseDeserialize: deserialize_google_cloud_tasks_v2beta2_Queue,
  },
  // Pauses the queue.
  //
  // If a queue is paused then the system will stop dispatching tasks
  // until the queue is resumed via
  // [ResumeQueue][google.cloud.tasks.v2beta2.CloudTasks.ResumeQueue]. Tasks can still be added
  // when the queue is paused. A queue is paused if its
  // [state][google.cloud.tasks.v2beta2.Queue.state] is [PAUSED][google.cloud.tasks.v2beta2.Queue.State.PAUSED].
  pauseQueue: {
    path: '/google.cloud.tasks.v2beta2.CloudTasks/PauseQueue',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_tasks_v2beta2_cloudtasks_pb.PauseQueueRequest,
    responseType: google_cloud_tasks_v2beta2_queue_pb.Queue,
    requestSerialize: serialize_google_cloud_tasks_v2beta2_PauseQueueRequest,
    requestDeserialize: deserialize_google_cloud_tasks_v2beta2_PauseQueueRequest,
    responseSerialize: serialize_google_cloud_tasks_v2beta2_Queue,
    responseDeserialize: deserialize_google_cloud_tasks_v2beta2_Queue,
  },
  // Resume a queue.
  //
  // This method resumes a queue after it has been
  // [PAUSED][google.cloud.tasks.v2beta2.Queue.State.PAUSED] or
  // [DISABLED][google.cloud.tasks.v2beta2.Queue.State.DISABLED]. The state of a queue is stored
  // in the queue's [state][google.cloud.tasks.v2beta2.Queue.state]; after calling this method it
  // will be set to [RUNNING][google.cloud.tasks.v2beta2.Queue.State.RUNNING].
  //
  // WARNING: Resuming many high-QPS queues at the same time can
  // lead to target overloading. If you are resuming high-QPS
  // queues, follow the 500/50/5 pattern described in
  // [Managing Cloud Tasks Scaling
  // Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).
  resumeQueue: {
    path: '/google.cloud.tasks.v2beta2.CloudTasks/ResumeQueue',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_tasks_v2beta2_cloudtasks_pb.ResumeQueueRequest,
    responseType: google_cloud_tasks_v2beta2_queue_pb.Queue,
    requestSerialize: serialize_google_cloud_tasks_v2beta2_ResumeQueueRequest,
    requestDeserialize: deserialize_google_cloud_tasks_v2beta2_ResumeQueueRequest,
    responseSerialize: serialize_google_cloud_tasks_v2beta2_Queue,
    responseDeserialize: deserialize_google_cloud_tasks_v2beta2_Queue,
  },
  // Gets the access control policy for a [Queue][google.cloud.tasks.v2beta2.Queue].
  // Returns an empty policy if the resource exists and does not have a policy
  // set.
  //
  // Authorization requires the following
  // [Google IAM](https://cloud.google.com/iam) permission on the specified
  // resource parent:
  //
  // * `cloudtasks.queues.getIamPolicy`
  getIamPolicy: {
    path: '/google.cloud.tasks.v2beta2.CloudTasks/GetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.GetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_GetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_GetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Sets the access control policy for a [Queue][google.cloud.tasks.v2beta2.Queue]. Replaces any existing
  // policy.
  //
  // Note: The Cloud Console does not check queue-level IAM permissions yet.
  // Project-level permissions are required to use the Cloud Console.
  //
  // Authorization requires the following
  // [Google IAM](https://cloud.google.com/iam) permission on the specified
  // resource parent:
  //
  // * `cloudtasks.queues.setIamPolicy`
  setIamPolicy: {
    path: '/google.cloud.tasks.v2beta2.CloudTasks/SetIamPolicy',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.SetIamPolicyRequest,
    responseType: google_iam_v1_policy_pb.Policy,
    requestSerialize: serialize_google_iam_v1_SetIamPolicyRequest,
    requestDeserialize: deserialize_google_iam_v1_SetIamPolicyRequest,
    responseSerialize: serialize_google_iam_v1_Policy,
    responseDeserialize: deserialize_google_iam_v1_Policy,
  },
  // Returns permissions that a caller has on a [Queue][google.cloud.tasks.v2beta2.Queue].
  // If the resource does not exist, this will return an empty set of
  // permissions, not a [NOT_FOUND][google.rpc.Code.NOT_FOUND] error.
  //
  // Note: This operation is designed to be used for building permission-aware
  // UIs and command-line tools, not for authorization checking. This operation
  // may "fail open" without warning.
  testIamPermissions: {
    path: '/google.cloud.tasks.v2beta2.CloudTasks/TestIamPermissions',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest,
    responseType: google_iam_v1_iam_policy_pb.TestIamPermissionsResponse,
    requestSerialize: serialize_google_iam_v1_TestIamPermissionsRequest,
    requestDeserialize: deserialize_google_iam_v1_TestIamPermissionsRequest,
    responseSerialize: serialize_google_iam_v1_TestIamPermissionsResponse,
    responseDeserialize: deserialize_google_iam_v1_TestIamPermissionsResponse,
  },
  // Lists the tasks in a queue.
  //
  // By default, only the [BASIC][google.cloud.tasks.v2beta2.Task.View.BASIC] view is retrieved
  // due to performance considerations;
  // [response_view][google.cloud.tasks.v2beta2.ListTasksRequest.response_view] controls the
  // subset of information which is returned.
  //
  // The tasks may be returned in any order. The ordering may change at any
  // time.
  listTasks: {
    path: '/google.cloud.tasks.v2beta2.CloudTasks/ListTasks',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_tasks_v2beta2_cloudtasks_pb.ListTasksRequest,
    responseType: google_cloud_tasks_v2beta2_cloudtasks_pb.ListTasksResponse,
    requestSerialize: serialize_google_cloud_tasks_v2beta2_ListTasksRequest,
    requestDeserialize: deserialize_google_cloud_tasks_v2beta2_ListTasksRequest,
    responseSerialize: serialize_google_cloud_tasks_v2beta2_ListTasksResponse,
    responseDeserialize: deserialize_google_cloud_tasks_v2beta2_ListTasksResponse,
  },
  // Gets a task.
  getTask: {
    path: '/google.cloud.tasks.v2beta2.CloudTasks/GetTask',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_tasks_v2beta2_cloudtasks_pb.GetTaskRequest,
    responseType: google_cloud_tasks_v2beta2_task_pb.Task,
    requestSerialize: serialize_google_cloud_tasks_v2beta2_GetTaskRequest,
    requestDeserialize: deserialize_google_cloud_tasks_v2beta2_GetTaskRequest,
    responseSerialize: serialize_google_cloud_tasks_v2beta2_Task,
    responseDeserialize: deserialize_google_cloud_tasks_v2beta2_Task,
  },
  // Creates a task and adds it to a queue.
  //
  // Tasks cannot be updated after creation; there is no UpdateTask command.
  //
  // * For [App Engine queues][google.cloud.tasks.v2beta2.AppEngineHttpTarget], the maximum task size is
  //   100KB.
  // * For [pull queues][google.cloud.tasks.v2beta2.PullTarget], the maximum task size is 1MB.
  createTask: {
    path: '/google.cloud.tasks.v2beta2.CloudTasks/CreateTask',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_tasks_v2beta2_cloudtasks_pb.CreateTaskRequest,
    responseType: google_cloud_tasks_v2beta2_task_pb.Task,
    requestSerialize: serialize_google_cloud_tasks_v2beta2_CreateTaskRequest,
    requestDeserialize: deserialize_google_cloud_tasks_v2beta2_CreateTaskRequest,
    responseSerialize: serialize_google_cloud_tasks_v2beta2_Task,
    responseDeserialize: deserialize_google_cloud_tasks_v2beta2_Task,
  },
  // Deletes a task.
  //
  // A task can be deleted if it is scheduled or dispatched. A task
  // cannot be deleted if it has completed successfully or permanently
  // failed.
  deleteTask: {
    path: '/google.cloud.tasks.v2beta2.CloudTasks/DeleteTask',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_tasks_v2beta2_cloudtasks_pb.DeleteTaskRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_tasks_v2beta2_DeleteTaskRequest,
    requestDeserialize: deserialize_google_cloud_tasks_v2beta2_DeleteTaskRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Leases tasks from a pull queue for
  // [lease_duration][google.cloud.tasks.v2beta2.LeaseTasksRequest.lease_duration].
  //
  // This method is invoked by the worker to obtain a lease. The
  // worker must acknowledge the task via
  // [AcknowledgeTask][google.cloud.tasks.v2beta2.CloudTasks.AcknowledgeTask] after they have
  // performed the work associated with the task.
  //
  // The [payload][google.cloud.tasks.v2beta2.PullMessage.payload] is intended to store data that
  // the worker needs to perform the work associated with the task. To
  // return the payloads in the [response][google.cloud.tasks.v2beta2.LeaseTasksResponse], set
  // [response_view][google.cloud.tasks.v2beta2.LeaseTasksRequest.response_view] to
  // [FULL][google.cloud.tasks.v2beta2.Task.View.FULL].
  //
  // A maximum of 10 qps of [LeaseTasks][google.cloud.tasks.v2beta2.CloudTasks.LeaseTasks]
  // requests are allowed per
  // queue. [RESOURCE_EXHAUSTED][google.rpc.Code.RESOURCE_EXHAUSTED]
  // is returned when this limit is
  // exceeded. [RESOURCE_EXHAUSTED][google.rpc.Code.RESOURCE_EXHAUSTED]
  // is also returned when
  // [max_tasks_dispatched_per_second][google.cloud.tasks.v2beta2.RateLimits.max_tasks_dispatched_per_second]
  // is exceeded.
  leaseTasks: {
    path: '/google.cloud.tasks.v2beta2.CloudTasks/LeaseTasks',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_tasks_v2beta2_cloudtasks_pb.LeaseTasksRequest,
    responseType: google_cloud_tasks_v2beta2_cloudtasks_pb.LeaseTasksResponse,
    requestSerialize: serialize_google_cloud_tasks_v2beta2_LeaseTasksRequest,
    requestDeserialize: deserialize_google_cloud_tasks_v2beta2_LeaseTasksRequest,
    responseSerialize: serialize_google_cloud_tasks_v2beta2_LeaseTasksResponse,
    responseDeserialize: deserialize_google_cloud_tasks_v2beta2_LeaseTasksResponse,
  },
  // Acknowledges a pull task.
  //
  // The worker, that is, the entity that
  // [leased][google.cloud.tasks.v2beta2.CloudTasks.LeaseTasks] this task must call this method
  // to indicate that the work associated with the task has finished.
  //
  // The worker must acknowledge a task within the
  // [lease_duration][google.cloud.tasks.v2beta2.LeaseTasksRequest.lease_duration] or the lease
  // will expire and the task will become available to be leased
  // again. After the task is acknowledged, it will not be returned
  // by a later [LeaseTasks][google.cloud.tasks.v2beta2.CloudTasks.LeaseTasks],
  // [GetTask][google.cloud.tasks.v2beta2.CloudTasks.GetTask], or
  // [ListTasks][google.cloud.tasks.v2beta2.CloudTasks.ListTasks].
  acknowledgeTask: {
    path: '/google.cloud.tasks.v2beta2.CloudTasks/AcknowledgeTask',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_tasks_v2beta2_cloudtasks_pb.AcknowledgeTaskRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_tasks_v2beta2_AcknowledgeTaskRequest,
    requestDeserialize: deserialize_google_cloud_tasks_v2beta2_AcknowledgeTaskRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Renew the current lease of a pull task.
  //
  // The worker can use this method to extend the lease by a new
  // duration, starting from now. The new task lease will be
  // returned in the task's [schedule_time][google.cloud.tasks.v2beta2.Task.schedule_time].
  renewLease: {
    path: '/google.cloud.tasks.v2beta2.CloudTasks/RenewLease',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_tasks_v2beta2_cloudtasks_pb.RenewLeaseRequest,
    responseType: google_cloud_tasks_v2beta2_task_pb.Task,
    requestSerialize: serialize_google_cloud_tasks_v2beta2_RenewLeaseRequest,
    requestDeserialize: deserialize_google_cloud_tasks_v2beta2_RenewLeaseRequest,
    responseSerialize: serialize_google_cloud_tasks_v2beta2_Task,
    responseDeserialize: deserialize_google_cloud_tasks_v2beta2_Task,
  },
  // Cancel a pull task's lease.
  //
  // The worker can use this method to cancel a task's lease by
  // setting its [schedule_time][google.cloud.tasks.v2beta2.Task.schedule_time] to now. This will
  // make the task available to be leased to the next caller of
  // [LeaseTasks][google.cloud.tasks.v2beta2.CloudTasks.LeaseTasks].
  cancelLease: {
    path: '/google.cloud.tasks.v2beta2.CloudTasks/CancelLease',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_tasks_v2beta2_cloudtasks_pb.CancelLeaseRequest,
    responseType: google_cloud_tasks_v2beta2_task_pb.Task,
    requestSerialize: serialize_google_cloud_tasks_v2beta2_CancelLeaseRequest,
    requestDeserialize: deserialize_google_cloud_tasks_v2beta2_CancelLeaseRequest,
    responseSerialize: serialize_google_cloud_tasks_v2beta2_Task,
    responseDeserialize: deserialize_google_cloud_tasks_v2beta2_Task,
  },
  // Forces a task to run now.
  //
  // When this method is called, Cloud Tasks will dispatch the task, even if
  // the task is already running, the queue has reached its [RateLimits][google.cloud.tasks.v2beta2.RateLimits] or
  // is [PAUSED][google.cloud.tasks.v2beta2.Queue.State.PAUSED].
  //
  // This command is meant to be used for manual debugging. For
  // example, [RunTask][google.cloud.tasks.v2beta2.CloudTasks.RunTask] can be used to retry a failed
  // task after a fix has been made or to manually force a task to be
  // dispatched now.
  //
  // The dispatched task is returned. That is, the task that is returned
  // contains the [status][google.cloud.tasks.v2beta2.Task.status] after the task is dispatched but
  // before the task is received by its target.
  //
  // If Cloud Tasks receives a successful response from the task's
  // target, then the task will be deleted; otherwise the task's
  // [schedule_time][google.cloud.tasks.v2beta2.Task.schedule_time] will be reset to the time that
  // [RunTask][google.cloud.tasks.v2beta2.CloudTasks.RunTask] was called plus the retry delay specified
  // in the queue's [RetryConfig][google.cloud.tasks.v2beta2.RetryConfig].
  //
  // [RunTask][google.cloud.tasks.v2beta2.CloudTasks.RunTask] returns
  // [NOT_FOUND][google.rpc.Code.NOT_FOUND] when it is called on a
  // task that has already succeeded or permanently failed.
  //
  // [RunTask][google.cloud.tasks.v2beta2.CloudTasks.RunTask] cannot be called on a
  // [pull task][google.cloud.tasks.v2beta2.PullMessage].
  runTask: {
    path: '/google.cloud.tasks.v2beta2.CloudTasks/RunTask',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_tasks_v2beta2_cloudtasks_pb.RunTaskRequest,
    responseType: google_cloud_tasks_v2beta2_task_pb.Task,
    requestSerialize: serialize_google_cloud_tasks_v2beta2_RunTaskRequest,
    requestDeserialize: deserialize_google_cloud_tasks_v2beta2_RunTaskRequest,
    responseSerialize: serialize_google_cloud_tasks_v2beta2_Task,
    responseDeserialize: deserialize_google_cloud_tasks_v2beta2_Task,
  },
};

exports.CloudTasksClient = grpc.makeGenericClientConstructor(CloudTasksService);
