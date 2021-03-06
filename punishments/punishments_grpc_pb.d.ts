// GENERATED CODE -- DO NOT EDIT!

// package: mruv.punishments
// file: punishments/punishments.proto

import * as punishments_punishments_pb from "../punishments/punishments_pb";
import * as grpc from "grpc";

interface IMruVPunishmentsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  ban: grpc.MethodDefinition<punishments_punishments_pb.BanRequest, punishments_punishments_pb.BanResponse>;
  block: grpc.MethodDefinition<punishments_punishments_pb.BlockRequest, punishments_punishments_pb.BlockResponse>;
  warn: grpc.MethodDefinition<punishments_punishments_pb.WarnRequest, punishments_punishments_pb.WarnResponse>;
  adminJail: grpc.MethodDefinition<punishments_punishments_pb.AdminJailRequest, punishments_punishments_pb.AdminJailResponse>;
  muteGlobalChats: grpc.MethodDefinition<punishments_punishments_pb.MuteGlobalChatsRequest, punishments_punishments_pb.MuteGlobalChatsResponse>;
  unBan: grpc.MethodDefinition<punishments_punishments_pb.UnBanRequest, punishments_punishments_pb.UnBanResponse>;
  unBlock: grpc.MethodDefinition<punishments_punishments_pb.UnBlockRequest, punishments_punishments_pb.UnBlockResponse>;
  unWarn: grpc.MethodDefinition<punishments_punishments_pb.UnWarnRequest, punishments_punishments_pb.UnWarnResponse>;
  unAdminJail: grpc.MethodDefinition<punishments_punishments_pb.UnAdminJailRequest, punishments_punishments_pb.UnAdminJailResponse>;
  unMuteGlobalChats: grpc.MethodDefinition<punishments_punishments_pb.UnMuteGlobalChatsRequest, punishments_punishments_pb.UnMuteGlobalChatsResponse>;
  getPlayerBans: grpc.MethodDefinition<punishments_punishments_pb.GetPlayerBansRequest, punishments_punishments_pb.GetPlayerBansResponse>;
  getPlayerWarns: grpc.MethodDefinition<punishments_punishments_pb.GetPlayerWarnsRequest, punishments_punishments_pb.GetPlayerWarnsResponse>;
  getPlayerAdminJail: grpc.MethodDefinition<punishments_punishments_pb.GetPlayerAdminJailRequest, punishments_punishments_pb.GetPlayerAdminJailResponse>;
  getBan: grpc.MethodDefinition<punishments_punishments_pb.GetBanRequest, punishments_punishments_pb.BanMessage>;
  getWarn: grpc.MethodDefinition<punishments_punishments_pb.GetWarnRequest, punishments_punishments_pb.WarnMessage>;
  getBlock: grpc.MethodDefinition<punishments_punishments_pb.GetBlockRequest, punishments_punishments_pb.BlockMessage>;
  isPlayerBanned: grpc.MethodDefinition<punishments_punishments_pb.IsPlayerBannedRequest, punishments_punishments_pb.IsPlayerBannedResponse>;
  isCharacterBlocked: grpc.MethodDefinition<punishments_punishments_pb.IsCharacterBlockedRequest, punishments_punishments_pb.IsCharacterBlockedResponse>;
  isCharacterJailed: grpc.MethodDefinition<punishments_punishments_pb.IsCharacterJailedRequest, punishments_punishments_pb.IsCharacterJailedResponse>;
  watchBans: grpc.MethodDefinition<punishments_punishments_pb.WatchBansRequest, punishments_punishments_pb.BanMessage>;
  watchBlocks: grpc.MethodDefinition<punishments_punishments_pb.WatchBlocksRequest, punishments_punishments_pb.BlockMessage>;
  watchWarns: grpc.MethodDefinition<punishments_punishments_pb.WatchWarnsRequest, punishments_punishments_pb.WarnMessage>;
  watchAdminJails: grpc.MethodDefinition<punishments_punishments_pb.WatchAdminJailsRequest, punishments_punishments_pb.AdminJailMessage>;
  watchUnBans: grpc.MethodDefinition<punishments_punishments_pb.WatchUnBansRequest, punishments_punishments_pb.UnBanMessage>;
  watchUnBlocks: grpc.MethodDefinition<punishments_punishments_pb.WatchUnBlocksRequest, punishments_punishments_pb.UnBlockMessage>;
  watchUnWarns: grpc.MethodDefinition<punishments_punishments_pb.WatchUnWarnsRequest, punishments_punishments_pb.UnWarnMessage>;
  watchUnAdminJails: grpc.MethodDefinition<punishments_punishments_pb.WatchUnAdminJailsRequest, punishments_punishments_pb.UnAdminJailMessage>;
  watchPlayerPunishments: grpc.MethodDefinition<punishments_punishments_pb.WatchPlayerPunishmentsRequest, punishments_punishments_pb.WatchPlayerPunishmentsResponse>;
  watchPlayerAcquittals: grpc.MethodDefinition<punishments_punishments_pb.WatchPlayerAcquittalsRequest, punishments_punishments_pb.WatchPlayerAcquittalsResponse>;
  watchPunishments: grpc.MethodDefinition<punishments_punishments_pb.WatchPunishmentsRequest, punishments_punishments_pb.WatchPunishmentsResponse>;
}

export const MruVPunishmentsServiceService: IMruVPunishmentsServiceService;

export class MruVPunishmentsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  ban(argument: punishments_punishments_pb.BanRequest, callback: grpc.requestCallback<punishments_punishments_pb.BanResponse>): grpc.ClientUnaryCall;
  ban(argument: punishments_punishments_pb.BanRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.BanResponse>): grpc.ClientUnaryCall;
  ban(argument: punishments_punishments_pb.BanRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.BanResponse>): grpc.ClientUnaryCall;
  block(argument: punishments_punishments_pb.BlockRequest, callback: grpc.requestCallback<punishments_punishments_pb.BlockResponse>): grpc.ClientUnaryCall;
  block(argument: punishments_punishments_pb.BlockRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.BlockResponse>): grpc.ClientUnaryCall;
  block(argument: punishments_punishments_pb.BlockRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.BlockResponse>): grpc.ClientUnaryCall;
  warn(argument: punishments_punishments_pb.WarnRequest, callback: grpc.requestCallback<punishments_punishments_pb.WarnResponse>): grpc.ClientUnaryCall;
  warn(argument: punishments_punishments_pb.WarnRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.WarnResponse>): grpc.ClientUnaryCall;
  warn(argument: punishments_punishments_pb.WarnRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.WarnResponse>): grpc.ClientUnaryCall;
  adminJail(argument: punishments_punishments_pb.AdminJailRequest, callback: grpc.requestCallback<punishments_punishments_pb.AdminJailResponse>): grpc.ClientUnaryCall;
  adminJail(argument: punishments_punishments_pb.AdminJailRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.AdminJailResponse>): grpc.ClientUnaryCall;
  adminJail(argument: punishments_punishments_pb.AdminJailRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.AdminJailResponse>): grpc.ClientUnaryCall;
  muteGlobalChats(argument: punishments_punishments_pb.MuteGlobalChatsRequest, callback: grpc.requestCallback<punishments_punishments_pb.MuteGlobalChatsResponse>): grpc.ClientUnaryCall;
  muteGlobalChats(argument: punishments_punishments_pb.MuteGlobalChatsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.MuteGlobalChatsResponse>): grpc.ClientUnaryCall;
  muteGlobalChats(argument: punishments_punishments_pb.MuteGlobalChatsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.MuteGlobalChatsResponse>): grpc.ClientUnaryCall;
  unBan(argument: punishments_punishments_pb.UnBanRequest, callback: grpc.requestCallback<punishments_punishments_pb.UnBanResponse>): grpc.ClientUnaryCall;
  unBan(argument: punishments_punishments_pb.UnBanRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.UnBanResponse>): grpc.ClientUnaryCall;
  unBan(argument: punishments_punishments_pb.UnBanRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.UnBanResponse>): grpc.ClientUnaryCall;
  unBlock(argument: punishments_punishments_pb.UnBlockRequest, callback: grpc.requestCallback<punishments_punishments_pb.UnBlockResponse>): grpc.ClientUnaryCall;
  unBlock(argument: punishments_punishments_pb.UnBlockRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.UnBlockResponse>): grpc.ClientUnaryCall;
  unBlock(argument: punishments_punishments_pb.UnBlockRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.UnBlockResponse>): grpc.ClientUnaryCall;
  unWarn(argument: punishments_punishments_pb.UnWarnRequest, callback: grpc.requestCallback<punishments_punishments_pb.UnWarnResponse>): grpc.ClientUnaryCall;
  unWarn(argument: punishments_punishments_pb.UnWarnRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.UnWarnResponse>): grpc.ClientUnaryCall;
  unWarn(argument: punishments_punishments_pb.UnWarnRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.UnWarnResponse>): grpc.ClientUnaryCall;
  unAdminJail(argument: punishments_punishments_pb.UnAdminJailRequest, callback: grpc.requestCallback<punishments_punishments_pb.UnAdminJailResponse>): grpc.ClientUnaryCall;
  unAdminJail(argument: punishments_punishments_pb.UnAdminJailRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.UnAdminJailResponse>): grpc.ClientUnaryCall;
  unAdminJail(argument: punishments_punishments_pb.UnAdminJailRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.UnAdminJailResponse>): grpc.ClientUnaryCall;
  unMuteGlobalChats(argument: punishments_punishments_pb.UnMuteGlobalChatsRequest, callback: grpc.requestCallback<punishments_punishments_pb.UnMuteGlobalChatsResponse>): grpc.ClientUnaryCall;
  unMuteGlobalChats(argument: punishments_punishments_pb.UnMuteGlobalChatsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.UnMuteGlobalChatsResponse>): grpc.ClientUnaryCall;
  unMuteGlobalChats(argument: punishments_punishments_pb.UnMuteGlobalChatsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.UnMuteGlobalChatsResponse>): grpc.ClientUnaryCall;
  getPlayerBans(argument: punishments_punishments_pb.GetPlayerBansRequest, callback: grpc.requestCallback<punishments_punishments_pb.GetPlayerBansResponse>): grpc.ClientUnaryCall;
  getPlayerBans(argument: punishments_punishments_pb.GetPlayerBansRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.GetPlayerBansResponse>): grpc.ClientUnaryCall;
  getPlayerBans(argument: punishments_punishments_pb.GetPlayerBansRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.GetPlayerBansResponse>): grpc.ClientUnaryCall;
  getPlayerWarns(argument: punishments_punishments_pb.GetPlayerWarnsRequest, callback: grpc.requestCallback<punishments_punishments_pb.GetPlayerWarnsResponse>): grpc.ClientUnaryCall;
  getPlayerWarns(argument: punishments_punishments_pb.GetPlayerWarnsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.GetPlayerWarnsResponse>): grpc.ClientUnaryCall;
  getPlayerWarns(argument: punishments_punishments_pb.GetPlayerWarnsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.GetPlayerWarnsResponse>): grpc.ClientUnaryCall;
  getPlayerAdminJail(argument: punishments_punishments_pb.GetPlayerAdminJailRequest, callback: grpc.requestCallback<punishments_punishments_pb.GetPlayerAdminJailResponse>): grpc.ClientUnaryCall;
  getPlayerAdminJail(argument: punishments_punishments_pb.GetPlayerAdminJailRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.GetPlayerAdminJailResponse>): grpc.ClientUnaryCall;
  getPlayerAdminJail(argument: punishments_punishments_pb.GetPlayerAdminJailRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.GetPlayerAdminJailResponse>): grpc.ClientUnaryCall;
  getBan(argument: punishments_punishments_pb.GetBanRequest, callback: grpc.requestCallback<punishments_punishments_pb.BanMessage>): grpc.ClientUnaryCall;
  getBan(argument: punishments_punishments_pb.GetBanRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.BanMessage>): grpc.ClientUnaryCall;
  getBan(argument: punishments_punishments_pb.GetBanRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.BanMessage>): grpc.ClientUnaryCall;
  getWarn(argument: punishments_punishments_pb.GetWarnRequest, callback: grpc.requestCallback<punishments_punishments_pb.WarnMessage>): grpc.ClientUnaryCall;
  getWarn(argument: punishments_punishments_pb.GetWarnRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.WarnMessage>): grpc.ClientUnaryCall;
  getWarn(argument: punishments_punishments_pb.GetWarnRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.WarnMessage>): grpc.ClientUnaryCall;
  getBlock(argument: punishments_punishments_pb.GetBlockRequest, callback: grpc.requestCallback<punishments_punishments_pb.BlockMessage>): grpc.ClientUnaryCall;
  getBlock(argument: punishments_punishments_pb.GetBlockRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.BlockMessage>): grpc.ClientUnaryCall;
  getBlock(argument: punishments_punishments_pb.GetBlockRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.BlockMessage>): grpc.ClientUnaryCall;
  isPlayerBanned(argument: punishments_punishments_pb.IsPlayerBannedRequest, callback: grpc.requestCallback<punishments_punishments_pb.IsPlayerBannedResponse>): grpc.ClientUnaryCall;
  isPlayerBanned(argument: punishments_punishments_pb.IsPlayerBannedRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.IsPlayerBannedResponse>): grpc.ClientUnaryCall;
  isPlayerBanned(argument: punishments_punishments_pb.IsPlayerBannedRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.IsPlayerBannedResponse>): grpc.ClientUnaryCall;
  isCharacterBlocked(argument: punishments_punishments_pb.IsCharacterBlockedRequest, callback: grpc.requestCallback<punishments_punishments_pb.IsCharacterBlockedResponse>): grpc.ClientUnaryCall;
  isCharacterBlocked(argument: punishments_punishments_pb.IsCharacterBlockedRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.IsCharacterBlockedResponse>): grpc.ClientUnaryCall;
  isCharacterBlocked(argument: punishments_punishments_pb.IsCharacterBlockedRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.IsCharacterBlockedResponse>): grpc.ClientUnaryCall;
  isCharacterJailed(argument: punishments_punishments_pb.IsCharacterJailedRequest, callback: grpc.requestCallback<punishments_punishments_pb.IsCharacterJailedResponse>): grpc.ClientUnaryCall;
  isCharacterJailed(argument: punishments_punishments_pb.IsCharacterJailedRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.IsCharacterJailedResponse>): grpc.ClientUnaryCall;
  isCharacterJailed(argument: punishments_punishments_pb.IsCharacterJailedRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<punishments_punishments_pb.IsCharacterJailedResponse>): grpc.ClientUnaryCall;
  watchBans(argument: punishments_punishments_pb.WatchBansRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.BanMessage>;
  watchBans(argument: punishments_punishments_pb.WatchBansRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.BanMessage>;
  watchBlocks(argument: punishments_punishments_pb.WatchBlocksRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.BlockMessage>;
  watchBlocks(argument: punishments_punishments_pb.WatchBlocksRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.BlockMessage>;
  watchWarns(argument: punishments_punishments_pb.WatchWarnsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.WarnMessage>;
  watchWarns(argument: punishments_punishments_pb.WatchWarnsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.WarnMessage>;
  watchAdminJails(argument: punishments_punishments_pb.WatchAdminJailsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.AdminJailMessage>;
  watchAdminJails(argument: punishments_punishments_pb.WatchAdminJailsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.AdminJailMessage>;
  watchUnBans(argument: punishments_punishments_pb.WatchUnBansRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.UnBanMessage>;
  watchUnBans(argument: punishments_punishments_pb.WatchUnBansRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.UnBanMessage>;
  watchUnBlocks(argument: punishments_punishments_pb.WatchUnBlocksRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.UnBlockMessage>;
  watchUnBlocks(argument: punishments_punishments_pb.WatchUnBlocksRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.UnBlockMessage>;
  watchUnWarns(argument: punishments_punishments_pb.WatchUnWarnsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.UnWarnMessage>;
  watchUnWarns(argument: punishments_punishments_pb.WatchUnWarnsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.UnWarnMessage>;
  watchUnAdminJails(argument: punishments_punishments_pb.WatchUnAdminJailsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.UnAdminJailMessage>;
  watchUnAdminJails(argument: punishments_punishments_pb.WatchUnAdminJailsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.UnAdminJailMessage>;
  watchPlayerPunishments(argument: punishments_punishments_pb.WatchPlayerPunishmentsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.WatchPlayerPunishmentsResponse>;
  watchPlayerPunishments(argument: punishments_punishments_pb.WatchPlayerPunishmentsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.WatchPlayerPunishmentsResponse>;
  watchPlayerAcquittals(argument: punishments_punishments_pb.WatchPlayerAcquittalsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.WatchPlayerAcquittalsResponse>;
  watchPlayerAcquittals(argument: punishments_punishments_pb.WatchPlayerAcquittalsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.WatchPlayerAcquittalsResponse>;
  watchPunishments(argument: punishments_punishments_pb.WatchPunishmentsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.WatchPunishmentsResponse>;
  watchPunishments(argument: punishments_punishments_pb.WatchPunishmentsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<punishments_punishments_pb.WatchPunishmentsResponse>;
}
