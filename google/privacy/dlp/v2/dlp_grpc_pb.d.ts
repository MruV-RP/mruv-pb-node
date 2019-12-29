// GENERATED CODE -- DO NOT EDIT!

// package: google.privacy.dlp.v2
// file: google/privacy/dlp/v2/dlp.proto

import * as google_privacy_dlp_v2_dlp_pb from "../../../../google/privacy/dlp/v2/dlp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IDlpServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  inspectContent: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.InspectContentRequest, google_privacy_dlp_v2_dlp_pb.InspectContentResponse>;
  redactImage: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.RedactImageRequest, google_privacy_dlp_v2_dlp_pb.RedactImageResponse>;
  deidentifyContent: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.DeidentifyContentRequest, google_privacy_dlp_v2_dlp_pb.DeidentifyContentResponse>;
  reidentifyContent: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.ReidentifyContentRequest, google_privacy_dlp_v2_dlp_pb.ReidentifyContentResponse>;
  listInfoTypes: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.ListInfoTypesRequest, google_privacy_dlp_v2_dlp_pb.ListInfoTypesResponse>;
  createInspectTemplate: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.CreateInspectTemplateRequest, google_privacy_dlp_v2_dlp_pb.InspectTemplate>;
  updateInspectTemplate: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.UpdateInspectTemplateRequest, google_privacy_dlp_v2_dlp_pb.InspectTemplate>;
  getInspectTemplate: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.GetInspectTemplateRequest, google_privacy_dlp_v2_dlp_pb.InspectTemplate>;
  listInspectTemplates: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.ListInspectTemplatesRequest, google_privacy_dlp_v2_dlp_pb.ListInspectTemplatesResponse>;
  deleteInspectTemplate: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.DeleteInspectTemplateRequest, google_protobuf_empty_pb.Empty>;
  createDeidentifyTemplate: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.CreateDeidentifyTemplateRequest, google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate>;
  updateDeidentifyTemplate: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.UpdateDeidentifyTemplateRequest, google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate>;
  getDeidentifyTemplate: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.GetDeidentifyTemplateRequest, google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate>;
  listDeidentifyTemplates: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.ListDeidentifyTemplatesRequest, google_privacy_dlp_v2_dlp_pb.ListDeidentifyTemplatesResponse>;
  deleteDeidentifyTemplate: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.DeleteDeidentifyTemplateRequest, google_protobuf_empty_pb.Empty>;
  createJobTrigger: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.CreateJobTriggerRequest, google_privacy_dlp_v2_dlp_pb.JobTrigger>;
  updateJobTrigger: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.UpdateJobTriggerRequest, google_privacy_dlp_v2_dlp_pb.JobTrigger>;
  getJobTrigger: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.GetJobTriggerRequest, google_privacy_dlp_v2_dlp_pb.JobTrigger>;
  listJobTriggers: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.ListJobTriggersRequest, google_privacy_dlp_v2_dlp_pb.ListJobTriggersResponse>;
  deleteJobTrigger: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.DeleteJobTriggerRequest, google_protobuf_empty_pb.Empty>;
  activateJobTrigger: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.ActivateJobTriggerRequest, google_privacy_dlp_v2_dlp_pb.DlpJob>;
  createDlpJob: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.CreateDlpJobRequest, google_privacy_dlp_v2_dlp_pb.DlpJob>;
  listDlpJobs: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.ListDlpJobsRequest, google_privacy_dlp_v2_dlp_pb.ListDlpJobsResponse>;
  getDlpJob: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.GetDlpJobRequest, google_privacy_dlp_v2_dlp_pb.DlpJob>;
  deleteDlpJob: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.DeleteDlpJobRequest, google_protobuf_empty_pb.Empty>;
  cancelDlpJob: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.CancelDlpJobRequest, google_protobuf_empty_pb.Empty>;
  createStoredInfoType: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.CreateStoredInfoTypeRequest, google_privacy_dlp_v2_dlp_pb.StoredInfoType>;
  updateStoredInfoType: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.UpdateStoredInfoTypeRequest, google_privacy_dlp_v2_dlp_pb.StoredInfoType>;
  getStoredInfoType: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.GetStoredInfoTypeRequest, google_privacy_dlp_v2_dlp_pb.StoredInfoType>;
  listStoredInfoTypes: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.ListStoredInfoTypesRequest, google_privacy_dlp_v2_dlp_pb.ListStoredInfoTypesResponse>;
  deleteStoredInfoType: grpc.MethodDefinition<google_privacy_dlp_v2_dlp_pb.DeleteStoredInfoTypeRequest, google_protobuf_empty_pb.Empty>;
}

export const DlpServiceService: IDlpServiceService;

export class DlpServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  inspectContent(argument: google_privacy_dlp_v2_dlp_pb.InspectContentRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.InspectContentResponse>): grpc.ClientUnaryCall;
  inspectContent(argument: google_privacy_dlp_v2_dlp_pb.InspectContentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.InspectContentResponse>): grpc.ClientUnaryCall;
  inspectContent(argument: google_privacy_dlp_v2_dlp_pb.InspectContentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.InspectContentResponse>): grpc.ClientUnaryCall;
  redactImage(argument: google_privacy_dlp_v2_dlp_pb.RedactImageRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.RedactImageResponse>): grpc.ClientUnaryCall;
  redactImage(argument: google_privacy_dlp_v2_dlp_pb.RedactImageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.RedactImageResponse>): grpc.ClientUnaryCall;
  redactImage(argument: google_privacy_dlp_v2_dlp_pb.RedactImageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.RedactImageResponse>): grpc.ClientUnaryCall;
  deidentifyContent(argument: google_privacy_dlp_v2_dlp_pb.DeidentifyContentRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DeidentifyContentResponse>): grpc.ClientUnaryCall;
  deidentifyContent(argument: google_privacy_dlp_v2_dlp_pb.DeidentifyContentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DeidentifyContentResponse>): grpc.ClientUnaryCall;
  deidentifyContent(argument: google_privacy_dlp_v2_dlp_pb.DeidentifyContentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DeidentifyContentResponse>): grpc.ClientUnaryCall;
  reidentifyContent(argument: google_privacy_dlp_v2_dlp_pb.ReidentifyContentRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ReidentifyContentResponse>): grpc.ClientUnaryCall;
  reidentifyContent(argument: google_privacy_dlp_v2_dlp_pb.ReidentifyContentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ReidentifyContentResponse>): grpc.ClientUnaryCall;
  reidentifyContent(argument: google_privacy_dlp_v2_dlp_pb.ReidentifyContentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ReidentifyContentResponse>): grpc.ClientUnaryCall;
  listInfoTypes(argument: google_privacy_dlp_v2_dlp_pb.ListInfoTypesRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ListInfoTypesResponse>): grpc.ClientUnaryCall;
  listInfoTypes(argument: google_privacy_dlp_v2_dlp_pb.ListInfoTypesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ListInfoTypesResponse>): grpc.ClientUnaryCall;
  listInfoTypes(argument: google_privacy_dlp_v2_dlp_pb.ListInfoTypesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ListInfoTypesResponse>): grpc.ClientUnaryCall;
  createInspectTemplate(argument: google_privacy_dlp_v2_dlp_pb.CreateInspectTemplateRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.InspectTemplate>): grpc.ClientUnaryCall;
  createInspectTemplate(argument: google_privacy_dlp_v2_dlp_pb.CreateInspectTemplateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.InspectTemplate>): grpc.ClientUnaryCall;
  createInspectTemplate(argument: google_privacy_dlp_v2_dlp_pb.CreateInspectTemplateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.InspectTemplate>): grpc.ClientUnaryCall;
  updateInspectTemplate(argument: google_privacy_dlp_v2_dlp_pb.UpdateInspectTemplateRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.InspectTemplate>): grpc.ClientUnaryCall;
  updateInspectTemplate(argument: google_privacy_dlp_v2_dlp_pb.UpdateInspectTemplateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.InspectTemplate>): grpc.ClientUnaryCall;
  updateInspectTemplate(argument: google_privacy_dlp_v2_dlp_pb.UpdateInspectTemplateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.InspectTemplate>): grpc.ClientUnaryCall;
  getInspectTemplate(argument: google_privacy_dlp_v2_dlp_pb.GetInspectTemplateRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.InspectTemplate>): grpc.ClientUnaryCall;
  getInspectTemplate(argument: google_privacy_dlp_v2_dlp_pb.GetInspectTemplateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.InspectTemplate>): grpc.ClientUnaryCall;
  getInspectTemplate(argument: google_privacy_dlp_v2_dlp_pb.GetInspectTemplateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.InspectTemplate>): grpc.ClientUnaryCall;
  listInspectTemplates(argument: google_privacy_dlp_v2_dlp_pb.ListInspectTemplatesRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ListInspectTemplatesResponse>): grpc.ClientUnaryCall;
  listInspectTemplates(argument: google_privacy_dlp_v2_dlp_pb.ListInspectTemplatesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ListInspectTemplatesResponse>): grpc.ClientUnaryCall;
  listInspectTemplates(argument: google_privacy_dlp_v2_dlp_pb.ListInspectTemplatesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ListInspectTemplatesResponse>): grpc.ClientUnaryCall;
  deleteInspectTemplate(argument: google_privacy_dlp_v2_dlp_pb.DeleteInspectTemplateRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteInspectTemplate(argument: google_privacy_dlp_v2_dlp_pb.DeleteInspectTemplateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteInspectTemplate(argument: google_privacy_dlp_v2_dlp_pb.DeleteInspectTemplateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createDeidentifyTemplate(argument: google_privacy_dlp_v2_dlp_pb.CreateDeidentifyTemplateRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate>): grpc.ClientUnaryCall;
  createDeidentifyTemplate(argument: google_privacy_dlp_v2_dlp_pb.CreateDeidentifyTemplateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate>): grpc.ClientUnaryCall;
  createDeidentifyTemplate(argument: google_privacy_dlp_v2_dlp_pb.CreateDeidentifyTemplateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate>): grpc.ClientUnaryCall;
  updateDeidentifyTemplate(argument: google_privacy_dlp_v2_dlp_pb.UpdateDeidentifyTemplateRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate>): grpc.ClientUnaryCall;
  updateDeidentifyTemplate(argument: google_privacy_dlp_v2_dlp_pb.UpdateDeidentifyTemplateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate>): grpc.ClientUnaryCall;
  updateDeidentifyTemplate(argument: google_privacy_dlp_v2_dlp_pb.UpdateDeidentifyTemplateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate>): grpc.ClientUnaryCall;
  getDeidentifyTemplate(argument: google_privacy_dlp_v2_dlp_pb.GetDeidentifyTemplateRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate>): grpc.ClientUnaryCall;
  getDeidentifyTemplate(argument: google_privacy_dlp_v2_dlp_pb.GetDeidentifyTemplateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate>): grpc.ClientUnaryCall;
  getDeidentifyTemplate(argument: google_privacy_dlp_v2_dlp_pb.GetDeidentifyTemplateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DeidentifyTemplate>): grpc.ClientUnaryCall;
  listDeidentifyTemplates(argument: google_privacy_dlp_v2_dlp_pb.ListDeidentifyTemplatesRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ListDeidentifyTemplatesResponse>): grpc.ClientUnaryCall;
  listDeidentifyTemplates(argument: google_privacy_dlp_v2_dlp_pb.ListDeidentifyTemplatesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ListDeidentifyTemplatesResponse>): grpc.ClientUnaryCall;
  listDeidentifyTemplates(argument: google_privacy_dlp_v2_dlp_pb.ListDeidentifyTemplatesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ListDeidentifyTemplatesResponse>): grpc.ClientUnaryCall;
  deleteDeidentifyTemplate(argument: google_privacy_dlp_v2_dlp_pb.DeleteDeidentifyTemplateRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteDeidentifyTemplate(argument: google_privacy_dlp_v2_dlp_pb.DeleteDeidentifyTemplateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteDeidentifyTemplate(argument: google_privacy_dlp_v2_dlp_pb.DeleteDeidentifyTemplateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createJobTrigger(argument: google_privacy_dlp_v2_dlp_pb.CreateJobTriggerRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.JobTrigger>): grpc.ClientUnaryCall;
  createJobTrigger(argument: google_privacy_dlp_v2_dlp_pb.CreateJobTriggerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.JobTrigger>): grpc.ClientUnaryCall;
  createJobTrigger(argument: google_privacy_dlp_v2_dlp_pb.CreateJobTriggerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.JobTrigger>): grpc.ClientUnaryCall;
  updateJobTrigger(argument: google_privacy_dlp_v2_dlp_pb.UpdateJobTriggerRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.JobTrigger>): grpc.ClientUnaryCall;
  updateJobTrigger(argument: google_privacy_dlp_v2_dlp_pb.UpdateJobTriggerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.JobTrigger>): grpc.ClientUnaryCall;
  updateJobTrigger(argument: google_privacy_dlp_v2_dlp_pb.UpdateJobTriggerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.JobTrigger>): grpc.ClientUnaryCall;
  getJobTrigger(argument: google_privacy_dlp_v2_dlp_pb.GetJobTriggerRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.JobTrigger>): grpc.ClientUnaryCall;
  getJobTrigger(argument: google_privacy_dlp_v2_dlp_pb.GetJobTriggerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.JobTrigger>): grpc.ClientUnaryCall;
  getJobTrigger(argument: google_privacy_dlp_v2_dlp_pb.GetJobTriggerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.JobTrigger>): grpc.ClientUnaryCall;
  listJobTriggers(argument: google_privacy_dlp_v2_dlp_pb.ListJobTriggersRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ListJobTriggersResponse>): grpc.ClientUnaryCall;
  listJobTriggers(argument: google_privacy_dlp_v2_dlp_pb.ListJobTriggersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ListJobTriggersResponse>): grpc.ClientUnaryCall;
  listJobTriggers(argument: google_privacy_dlp_v2_dlp_pb.ListJobTriggersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ListJobTriggersResponse>): grpc.ClientUnaryCall;
  deleteJobTrigger(argument: google_privacy_dlp_v2_dlp_pb.DeleteJobTriggerRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteJobTrigger(argument: google_privacy_dlp_v2_dlp_pb.DeleteJobTriggerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteJobTrigger(argument: google_privacy_dlp_v2_dlp_pb.DeleteJobTriggerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  activateJobTrigger(argument: google_privacy_dlp_v2_dlp_pb.ActivateJobTriggerRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DlpJob>): grpc.ClientUnaryCall;
  activateJobTrigger(argument: google_privacy_dlp_v2_dlp_pb.ActivateJobTriggerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DlpJob>): grpc.ClientUnaryCall;
  activateJobTrigger(argument: google_privacy_dlp_v2_dlp_pb.ActivateJobTriggerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DlpJob>): grpc.ClientUnaryCall;
  createDlpJob(argument: google_privacy_dlp_v2_dlp_pb.CreateDlpJobRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DlpJob>): grpc.ClientUnaryCall;
  createDlpJob(argument: google_privacy_dlp_v2_dlp_pb.CreateDlpJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DlpJob>): grpc.ClientUnaryCall;
  createDlpJob(argument: google_privacy_dlp_v2_dlp_pb.CreateDlpJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DlpJob>): grpc.ClientUnaryCall;
  listDlpJobs(argument: google_privacy_dlp_v2_dlp_pb.ListDlpJobsRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ListDlpJobsResponse>): grpc.ClientUnaryCall;
  listDlpJobs(argument: google_privacy_dlp_v2_dlp_pb.ListDlpJobsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ListDlpJobsResponse>): grpc.ClientUnaryCall;
  listDlpJobs(argument: google_privacy_dlp_v2_dlp_pb.ListDlpJobsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ListDlpJobsResponse>): grpc.ClientUnaryCall;
  getDlpJob(argument: google_privacy_dlp_v2_dlp_pb.GetDlpJobRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DlpJob>): grpc.ClientUnaryCall;
  getDlpJob(argument: google_privacy_dlp_v2_dlp_pb.GetDlpJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DlpJob>): grpc.ClientUnaryCall;
  getDlpJob(argument: google_privacy_dlp_v2_dlp_pb.GetDlpJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.DlpJob>): grpc.ClientUnaryCall;
  deleteDlpJob(argument: google_privacy_dlp_v2_dlp_pb.DeleteDlpJobRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteDlpJob(argument: google_privacy_dlp_v2_dlp_pb.DeleteDlpJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteDlpJob(argument: google_privacy_dlp_v2_dlp_pb.DeleteDlpJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  cancelDlpJob(argument: google_privacy_dlp_v2_dlp_pb.CancelDlpJobRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  cancelDlpJob(argument: google_privacy_dlp_v2_dlp_pb.CancelDlpJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  cancelDlpJob(argument: google_privacy_dlp_v2_dlp_pb.CancelDlpJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createStoredInfoType(argument: google_privacy_dlp_v2_dlp_pb.CreateStoredInfoTypeRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.StoredInfoType>): grpc.ClientUnaryCall;
  createStoredInfoType(argument: google_privacy_dlp_v2_dlp_pb.CreateStoredInfoTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.StoredInfoType>): grpc.ClientUnaryCall;
  createStoredInfoType(argument: google_privacy_dlp_v2_dlp_pb.CreateStoredInfoTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.StoredInfoType>): grpc.ClientUnaryCall;
  updateStoredInfoType(argument: google_privacy_dlp_v2_dlp_pb.UpdateStoredInfoTypeRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.StoredInfoType>): grpc.ClientUnaryCall;
  updateStoredInfoType(argument: google_privacy_dlp_v2_dlp_pb.UpdateStoredInfoTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.StoredInfoType>): grpc.ClientUnaryCall;
  updateStoredInfoType(argument: google_privacy_dlp_v2_dlp_pb.UpdateStoredInfoTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.StoredInfoType>): grpc.ClientUnaryCall;
  getStoredInfoType(argument: google_privacy_dlp_v2_dlp_pb.GetStoredInfoTypeRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.StoredInfoType>): grpc.ClientUnaryCall;
  getStoredInfoType(argument: google_privacy_dlp_v2_dlp_pb.GetStoredInfoTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.StoredInfoType>): grpc.ClientUnaryCall;
  getStoredInfoType(argument: google_privacy_dlp_v2_dlp_pb.GetStoredInfoTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.StoredInfoType>): grpc.ClientUnaryCall;
  listStoredInfoTypes(argument: google_privacy_dlp_v2_dlp_pb.ListStoredInfoTypesRequest, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ListStoredInfoTypesResponse>): grpc.ClientUnaryCall;
  listStoredInfoTypes(argument: google_privacy_dlp_v2_dlp_pb.ListStoredInfoTypesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ListStoredInfoTypesResponse>): grpc.ClientUnaryCall;
  listStoredInfoTypes(argument: google_privacy_dlp_v2_dlp_pb.ListStoredInfoTypesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_privacy_dlp_v2_dlp_pb.ListStoredInfoTypesResponse>): grpc.ClientUnaryCall;
  deleteStoredInfoType(argument: google_privacy_dlp_v2_dlp_pb.DeleteStoredInfoTypeRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteStoredInfoType(argument: google_privacy_dlp_v2_dlp_pb.DeleteStoredInfoTypeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteStoredInfoType(argument: google_privacy_dlp_v2_dlp_pb.DeleteStoredInfoTypeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}