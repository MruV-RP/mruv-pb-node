// GENERATED CODE -- DO NOT EDIT!

// package: google.firestore.admin.v1beta2
// file: google/firestore/admin/v1beta2/firestore_admin.proto

import * as google_firestore_admin_v1beta2_firestore_admin_pb from "../../../../google/firestore/admin/v1beta2/firestore_admin_pb";
import * as google_firestore_admin_v1beta2_field_pb from "../../../../google/firestore/admin/v1beta2/field_pb";
import * as google_firestore_admin_v1beta2_index_pb from "../../../../google/firestore/admin/v1beta2/index_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IFirestoreAdminService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createIndex: grpc.MethodDefinition<google_firestore_admin_v1beta2_firestore_admin_pb.CreateIndexRequest, google_longrunning_operations_pb.Operation>;
  listIndexes: grpc.MethodDefinition<google_firestore_admin_v1beta2_firestore_admin_pb.ListIndexesRequest, google_firestore_admin_v1beta2_firestore_admin_pb.ListIndexesResponse>;
  getIndex: grpc.MethodDefinition<google_firestore_admin_v1beta2_firestore_admin_pb.GetIndexRequest, google_firestore_admin_v1beta2_index_pb.Index>;
  deleteIndex: grpc.MethodDefinition<google_firestore_admin_v1beta2_firestore_admin_pb.DeleteIndexRequest, google_protobuf_empty_pb.Empty>;
  getField: grpc.MethodDefinition<google_firestore_admin_v1beta2_firestore_admin_pb.GetFieldRequest, google_firestore_admin_v1beta2_field_pb.Field>;
  updateField: grpc.MethodDefinition<google_firestore_admin_v1beta2_firestore_admin_pb.UpdateFieldRequest, google_longrunning_operations_pb.Operation>;
  listFields: grpc.MethodDefinition<google_firestore_admin_v1beta2_firestore_admin_pb.ListFieldsRequest, google_firestore_admin_v1beta2_firestore_admin_pb.ListFieldsResponse>;
  exportDocuments: grpc.MethodDefinition<google_firestore_admin_v1beta2_firestore_admin_pb.ExportDocumentsRequest, google_longrunning_operations_pb.Operation>;
  importDocuments: grpc.MethodDefinition<google_firestore_admin_v1beta2_firestore_admin_pb.ImportDocumentsRequest, google_longrunning_operations_pb.Operation>;
}

export const FirestoreAdminService: IFirestoreAdminService;

export class FirestoreAdminClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createIndex(argument: google_firestore_admin_v1beta2_firestore_admin_pb.CreateIndexRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createIndex(argument: google_firestore_admin_v1beta2_firestore_admin_pb.CreateIndexRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createIndex(argument: google_firestore_admin_v1beta2_firestore_admin_pb.CreateIndexRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  listIndexes(argument: google_firestore_admin_v1beta2_firestore_admin_pb.ListIndexesRequest, callback: grpc.requestCallback<google_firestore_admin_v1beta2_firestore_admin_pb.ListIndexesResponse>): grpc.ClientUnaryCall;
  listIndexes(argument: google_firestore_admin_v1beta2_firestore_admin_pb.ListIndexesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_firestore_admin_v1beta2_firestore_admin_pb.ListIndexesResponse>): grpc.ClientUnaryCall;
  listIndexes(argument: google_firestore_admin_v1beta2_firestore_admin_pb.ListIndexesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_firestore_admin_v1beta2_firestore_admin_pb.ListIndexesResponse>): grpc.ClientUnaryCall;
  getIndex(argument: google_firestore_admin_v1beta2_firestore_admin_pb.GetIndexRequest, callback: grpc.requestCallback<google_firestore_admin_v1beta2_index_pb.Index>): grpc.ClientUnaryCall;
  getIndex(argument: google_firestore_admin_v1beta2_firestore_admin_pb.GetIndexRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_firestore_admin_v1beta2_index_pb.Index>): grpc.ClientUnaryCall;
  getIndex(argument: google_firestore_admin_v1beta2_firestore_admin_pb.GetIndexRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_firestore_admin_v1beta2_index_pb.Index>): grpc.ClientUnaryCall;
  deleteIndex(argument: google_firestore_admin_v1beta2_firestore_admin_pb.DeleteIndexRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteIndex(argument: google_firestore_admin_v1beta2_firestore_admin_pb.DeleteIndexRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteIndex(argument: google_firestore_admin_v1beta2_firestore_admin_pb.DeleteIndexRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getField(argument: google_firestore_admin_v1beta2_firestore_admin_pb.GetFieldRequest, callback: grpc.requestCallback<google_firestore_admin_v1beta2_field_pb.Field>): grpc.ClientUnaryCall;
  getField(argument: google_firestore_admin_v1beta2_firestore_admin_pb.GetFieldRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_firestore_admin_v1beta2_field_pb.Field>): grpc.ClientUnaryCall;
  getField(argument: google_firestore_admin_v1beta2_firestore_admin_pb.GetFieldRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_firestore_admin_v1beta2_field_pb.Field>): grpc.ClientUnaryCall;
  updateField(argument: google_firestore_admin_v1beta2_firestore_admin_pb.UpdateFieldRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateField(argument: google_firestore_admin_v1beta2_firestore_admin_pb.UpdateFieldRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateField(argument: google_firestore_admin_v1beta2_firestore_admin_pb.UpdateFieldRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  listFields(argument: google_firestore_admin_v1beta2_firestore_admin_pb.ListFieldsRequest, callback: grpc.requestCallback<google_firestore_admin_v1beta2_firestore_admin_pb.ListFieldsResponse>): grpc.ClientUnaryCall;
  listFields(argument: google_firestore_admin_v1beta2_firestore_admin_pb.ListFieldsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_firestore_admin_v1beta2_firestore_admin_pb.ListFieldsResponse>): grpc.ClientUnaryCall;
  listFields(argument: google_firestore_admin_v1beta2_firestore_admin_pb.ListFieldsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_firestore_admin_v1beta2_firestore_admin_pb.ListFieldsResponse>): grpc.ClientUnaryCall;
  exportDocuments(argument: google_firestore_admin_v1beta2_firestore_admin_pb.ExportDocumentsRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportDocuments(argument: google_firestore_admin_v1beta2_firestore_admin_pb.ExportDocumentsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportDocuments(argument: google_firestore_admin_v1beta2_firestore_admin_pb.ExportDocumentsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importDocuments(argument: google_firestore_admin_v1beta2_firestore_admin_pb.ImportDocumentsRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importDocuments(argument: google_firestore_admin_v1beta2_firestore_admin_pb.ImportDocumentsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importDocuments(argument: google_firestore_admin_v1beta2_firestore_admin_pb.ImportDocumentsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
}
