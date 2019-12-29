// GENERATED CODE -- DO NOT EDIT!

// package: grafeas.v1beta1
// file: google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto

import * as google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb from "../../../../../google/devtools/containeranalysis/v1beta1/grafeas/grafeas_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IGrafeasV1Beta1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getOccurrence: grpc.MethodDefinition<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetOccurrenceRequest, google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence>;
  listOccurrences: grpc.MethodDefinition<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListOccurrencesRequest, google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListOccurrencesResponse>;
  deleteOccurrence: grpc.MethodDefinition<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.DeleteOccurrenceRequest, google_protobuf_empty_pb.Empty>;
  createOccurrence: grpc.MethodDefinition<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.CreateOccurrenceRequest, google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence>;
  batchCreateOccurrences: grpc.MethodDefinition<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateOccurrencesRequest, google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateOccurrencesResponse>;
  updateOccurrence: grpc.MethodDefinition<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.UpdateOccurrenceRequest, google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence>;
  getOccurrenceNote: grpc.MethodDefinition<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetOccurrenceNoteRequest, google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>;
  getNote: grpc.MethodDefinition<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetNoteRequest, google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>;
  listNotes: grpc.MethodDefinition<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNotesRequest, google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNotesResponse>;
  deleteNote: grpc.MethodDefinition<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.DeleteNoteRequest, google_protobuf_empty_pb.Empty>;
  createNote: grpc.MethodDefinition<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.CreateNoteRequest, google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>;
  batchCreateNotes: grpc.MethodDefinition<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateNotesRequest, google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateNotesResponse>;
  updateNote: grpc.MethodDefinition<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.UpdateNoteRequest, google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>;
  listNoteOccurrences: grpc.MethodDefinition<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNoteOccurrencesRequest, google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNoteOccurrencesResponse>;
  getVulnerabilityOccurrencesSummary: grpc.MethodDefinition<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetVulnerabilityOccurrencesSummaryRequest, google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.VulnerabilityOccurrencesSummary>;
}

export const GrafeasV1Beta1Service: IGrafeasV1Beta1Service;

export class GrafeasV1Beta1Client extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getOccurrence(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetOccurrenceRequest, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence>): grpc.ClientUnaryCall;
  getOccurrence(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetOccurrenceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence>): grpc.ClientUnaryCall;
  getOccurrence(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetOccurrenceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence>): grpc.ClientUnaryCall;
  listOccurrences(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListOccurrencesRequest, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListOccurrencesResponse>): grpc.ClientUnaryCall;
  listOccurrences(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListOccurrencesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListOccurrencesResponse>): grpc.ClientUnaryCall;
  listOccurrences(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListOccurrencesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListOccurrencesResponse>): grpc.ClientUnaryCall;
  deleteOccurrence(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.DeleteOccurrenceRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteOccurrence(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.DeleteOccurrenceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteOccurrence(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.DeleteOccurrenceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createOccurrence(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.CreateOccurrenceRequest, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence>): grpc.ClientUnaryCall;
  createOccurrence(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.CreateOccurrenceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence>): grpc.ClientUnaryCall;
  createOccurrence(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.CreateOccurrenceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence>): grpc.ClientUnaryCall;
  batchCreateOccurrences(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateOccurrencesRequest, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateOccurrencesResponse>): grpc.ClientUnaryCall;
  batchCreateOccurrences(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateOccurrencesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateOccurrencesResponse>): grpc.ClientUnaryCall;
  batchCreateOccurrences(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateOccurrencesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateOccurrencesResponse>): grpc.ClientUnaryCall;
  updateOccurrence(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.UpdateOccurrenceRequest, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence>): grpc.ClientUnaryCall;
  updateOccurrence(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.UpdateOccurrenceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence>): grpc.ClientUnaryCall;
  updateOccurrence(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.UpdateOccurrenceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Occurrence>): grpc.ClientUnaryCall;
  getOccurrenceNote(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetOccurrenceNoteRequest, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>): grpc.ClientUnaryCall;
  getOccurrenceNote(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetOccurrenceNoteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>): grpc.ClientUnaryCall;
  getOccurrenceNote(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetOccurrenceNoteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>): grpc.ClientUnaryCall;
  getNote(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetNoteRequest, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>): grpc.ClientUnaryCall;
  getNote(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetNoteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>): grpc.ClientUnaryCall;
  getNote(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetNoteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>): grpc.ClientUnaryCall;
  listNotes(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNotesRequest, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNotesResponse>): grpc.ClientUnaryCall;
  listNotes(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNotesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNotesResponse>): grpc.ClientUnaryCall;
  listNotes(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNotesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNotesResponse>): grpc.ClientUnaryCall;
  deleteNote(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.DeleteNoteRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteNote(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.DeleteNoteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteNote(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.DeleteNoteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createNote(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.CreateNoteRequest, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>): grpc.ClientUnaryCall;
  createNote(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.CreateNoteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>): grpc.ClientUnaryCall;
  createNote(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.CreateNoteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>): grpc.ClientUnaryCall;
  batchCreateNotes(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateNotesRequest, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateNotesResponse>): grpc.ClientUnaryCall;
  batchCreateNotes(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateNotesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateNotesResponse>): grpc.ClientUnaryCall;
  batchCreateNotes(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateNotesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.BatchCreateNotesResponse>): grpc.ClientUnaryCall;
  updateNote(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.UpdateNoteRequest, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>): grpc.ClientUnaryCall;
  updateNote(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.UpdateNoteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>): grpc.ClientUnaryCall;
  updateNote(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.UpdateNoteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.Note>): grpc.ClientUnaryCall;
  listNoteOccurrences(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNoteOccurrencesRequest, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNoteOccurrencesResponse>): grpc.ClientUnaryCall;
  listNoteOccurrences(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNoteOccurrencesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNoteOccurrencesResponse>): grpc.ClientUnaryCall;
  listNoteOccurrences(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNoteOccurrencesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.ListNoteOccurrencesResponse>): grpc.ClientUnaryCall;
  getVulnerabilityOccurrencesSummary(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetVulnerabilityOccurrencesSummaryRequest, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.VulnerabilityOccurrencesSummary>): grpc.ClientUnaryCall;
  getVulnerabilityOccurrencesSummary(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetVulnerabilityOccurrencesSummaryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.VulnerabilityOccurrencesSummary>): grpc.ClientUnaryCall;
  getVulnerabilityOccurrencesSummary(argument: google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.GetVulnerabilityOccurrencesSummaryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_containeranalysis_v1beta1_grafeas_grafeas_pb.VulnerabilityOccurrencesSummary>): grpc.ClientUnaryCall;
}