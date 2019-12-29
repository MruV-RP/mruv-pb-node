// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.websecurityscanner.v1beta
// file: google/cloud/websecurityscanner/v1beta/web_security_scanner.proto

import * as google_cloud_websecurityscanner_v1beta_web_security_scanner_pb from "../../../../google/cloud/websecurityscanner/v1beta/web_security_scanner_pb";
import * as google_cloud_websecurityscanner_v1beta_finding_pb from "../../../../google/cloud/websecurityscanner/v1beta/finding_pb";
import * as google_cloud_websecurityscanner_v1beta_scan_config_pb from "../../../../google/cloud/websecurityscanner/v1beta/scan_config_pb";
import * as google_cloud_websecurityscanner_v1beta_scan_run_pb from "../../../../google/cloud/websecurityscanner/v1beta/scan_run_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IWebSecurityScannerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createScanConfig: grpc.MethodDefinition<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.CreateScanConfigRequest, google_cloud_websecurityscanner_v1beta_scan_config_pb.ScanConfig>;
  deleteScanConfig: grpc.MethodDefinition<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.DeleteScanConfigRequest, google_protobuf_empty_pb.Empty>;
  getScanConfig: grpc.MethodDefinition<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetScanConfigRequest, google_cloud_websecurityscanner_v1beta_scan_config_pb.ScanConfig>;
  listScanConfigs: grpc.MethodDefinition<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanConfigsRequest, google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanConfigsResponse>;
  updateScanConfig: grpc.MethodDefinition<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.UpdateScanConfigRequest, google_cloud_websecurityscanner_v1beta_scan_config_pb.ScanConfig>;
  startScanRun: grpc.MethodDefinition<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.StartScanRunRequest, google_cloud_websecurityscanner_v1beta_scan_run_pb.ScanRun>;
  getScanRun: grpc.MethodDefinition<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetScanRunRequest, google_cloud_websecurityscanner_v1beta_scan_run_pb.ScanRun>;
  listScanRuns: grpc.MethodDefinition<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanRunsRequest, google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanRunsResponse>;
  stopScanRun: grpc.MethodDefinition<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.StopScanRunRequest, google_cloud_websecurityscanner_v1beta_scan_run_pb.ScanRun>;
  listCrawledUrls: grpc.MethodDefinition<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListCrawledUrlsRequest, google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListCrawledUrlsResponse>;
  getFinding: grpc.MethodDefinition<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetFindingRequest, google_cloud_websecurityscanner_v1beta_finding_pb.Finding>;
  listFindings: grpc.MethodDefinition<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingsRequest, google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingsResponse>;
  listFindingTypeStats: grpc.MethodDefinition<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingTypeStatsRequest, google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingTypeStatsResponse>;
}

export const WebSecurityScannerService: IWebSecurityScannerService;

export class WebSecurityScannerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createScanConfig(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.CreateScanConfigRequest, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_scan_config_pb.ScanConfig>): grpc.ClientUnaryCall;
  createScanConfig(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.CreateScanConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_scan_config_pb.ScanConfig>): grpc.ClientUnaryCall;
  createScanConfig(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.CreateScanConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_scan_config_pb.ScanConfig>): grpc.ClientUnaryCall;
  deleteScanConfig(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.DeleteScanConfigRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteScanConfig(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.DeleteScanConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteScanConfig(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.DeleteScanConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getScanConfig(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetScanConfigRequest, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_scan_config_pb.ScanConfig>): grpc.ClientUnaryCall;
  getScanConfig(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetScanConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_scan_config_pb.ScanConfig>): grpc.ClientUnaryCall;
  getScanConfig(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetScanConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_scan_config_pb.ScanConfig>): grpc.ClientUnaryCall;
  listScanConfigs(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanConfigsRequest, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanConfigsResponse>): grpc.ClientUnaryCall;
  listScanConfigs(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanConfigsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanConfigsResponse>): grpc.ClientUnaryCall;
  listScanConfigs(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanConfigsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanConfigsResponse>): grpc.ClientUnaryCall;
  updateScanConfig(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.UpdateScanConfigRequest, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_scan_config_pb.ScanConfig>): grpc.ClientUnaryCall;
  updateScanConfig(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.UpdateScanConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_scan_config_pb.ScanConfig>): grpc.ClientUnaryCall;
  updateScanConfig(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.UpdateScanConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_scan_config_pb.ScanConfig>): grpc.ClientUnaryCall;
  startScanRun(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.StartScanRunRequest, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_scan_run_pb.ScanRun>): grpc.ClientUnaryCall;
  startScanRun(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.StartScanRunRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_scan_run_pb.ScanRun>): grpc.ClientUnaryCall;
  startScanRun(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.StartScanRunRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_scan_run_pb.ScanRun>): grpc.ClientUnaryCall;
  getScanRun(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetScanRunRequest, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_scan_run_pb.ScanRun>): grpc.ClientUnaryCall;
  getScanRun(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetScanRunRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_scan_run_pb.ScanRun>): grpc.ClientUnaryCall;
  getScanRun(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetScanRunRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_scan_run_pb.ScanRun>): grpc.ClientUnaryCall;
  listScanRuns(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanRunsRequest, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanRunsResponse>): grpc.ClientUnaryCall;
  listScanRuns(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanRunsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanRunsResponse>): grpc.ClientUnaryCall;
  listScanRuns(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanRunsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListScanRunsResponse>): grpc.ClientUnaryCall;
  stopScanRun(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.StopScanRunRequest, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_scan_run_pb.ScanRun>): grpc.ClientUnaryCall;
  stopScanRun(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.StopScanRunRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_scan_run_pb.ScanRun>): grpc.ClientUnaryCall;
  stopScanRun(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.StopScanRunRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_scan_run_pb.ScanRun>): grpc.ClientUnaryCall;
  listCrawledUrls(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListCrawledUrlsRequest, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListCrawledUrlsResponse>): grpc.ClientUnaryCall;
  listCrawledUrls(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListCrawledUrlsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListCrawledUrlsResponse>): grpc.ClientUnaryCall;
  listCrawledUrls(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListCrawledUrlsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListCrawledUrlsResponse>): grpc.ClientUnaryCall;
  getFinding(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetFindingRequest, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_finding_pb.Finding>): grpc.ClientUnaryCall;
  getFinding(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetFindingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_finding_pb.Finding>): grpc.ClientUnaryCall;
  getFinding(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.GetFindingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_finding_pb.Finding>): grpc.ClientUnaryCall;
  listFindings(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingsRequest, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingsResponse>): grpc.ClientUnaryCall;
  listFindings(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingsResponse>): grpc.ClientUnaryCall;
  listFindings(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingsResponse>): grpc.ClientUnaryCall;
  listFindingTypeStats(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingTypeStatsRequest, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingTypeStatsResponse>): grpc.ClientUnaryCall;
  listFindingTypeStats(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingTypeStatsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingTypeStatsResponse>): grpc.ClientUnaryCall;
  listFindingTypeStats(argument: google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingTypeStatsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_websecurityscanner_v1beta_web_security_scanner_pb.ListFindingTypeStatsResponse>): grpc.ClientUnaryCall;
}