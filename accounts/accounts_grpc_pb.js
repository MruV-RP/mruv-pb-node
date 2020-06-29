// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var accounts_accounts_pb = require('../accounts/accounts_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var characters_characters_pb = require('../characters/characters_pb.js');

function serialize_mruv_Account(arg) {
  if (!(arg instanceof accounts_accounts_pb.Account)) {
    throw new Error('Expected argument of type mruv.Account');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_Account(buffer_arg) {
  return accounts_accounts_pb.Account.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_AccountID(arg) {
  if (!(arg instanceof accounts_accounts_pb.AccountID)) {
    throw new Error('Expected argument of type mruv.AccountID');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_AccountID(buffer_arg) {
  return accounts_accounts_pb.AccountID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetAccountCharactersResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.GetAccountCharactersResponse)) {
    throw new Error('Expected argument of type mruv.GetAccountCharactersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetAccountCharactersResponse(buffer_arg) {
  return accounts_accounts_pb.GetAccountCharactersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_IsAccountExistsRequest(arg) {
  if (!(arg instanceof accounts_accounts_pb.IsAccountExistsRequest)) {
    throw new Error('Expected argument of type mruv.IsAccountExistsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_IsAccountExistsRequest(buffer_arg) {
  return accounts_accounts_pb.IsAccountExistsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_IsAccountExistsResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.IsAccountExistsResponse)) {
    throw new Error('Expected argument of type mruv.IsAccountExistsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_IsAccountExistsResponse(buffer_arg) {
  return accounts_accounts_pb.IsAccountExistsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_LogInRequest(arg) {
  if (!(arg instanceof accounts_accounts_pb.LogInRequest)) {
    throw new Error('Expected argument of type mruv.LogInRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_LogInRequest(buffer_arg) {
  return accounts_accounts_pb.LogInRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_LogInResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.LogInResponse)) {
    throw new Error('Expected argument of type mruv.LogInResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_LogInResponse(buffer_arg) {
  return accounts_accounts_pb.LogInResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_RegisterAccountRequest(arg) {
  if (!(arg instanceof accounts_accounts_pb.RegisterAccountRequest)) {
    throw new Error('Expected argument of type mruv.RegisterAccountRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_RegisterAccountRequest(buffer_arg) {
  return accounts_accounts_pb.RegisterAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_RegisterAccountResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.RegisterAccountResponse)) {
    throw new Error('Expected argument of type mruv.RegisterAccountResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_RegisterAccountResponse(buffer_arg) {
  return accounts_accounts_pb.RegisterAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV accounts service provides procedures for managing players accounts.
// This service is an additional/intermediary service between the ORY Kratos & ORY Hydra service.
var MruVAccountsServiceService = exports.MruVAccountsServiceService = {
  registerAccount: {
    path: '/mruv.MruVAccountsService/RegisterAccount',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.RegisterAccountRequest,
    responseType: accounts_accounts_pb.RegisterAccountResponse,
    requestSerialize: serialize_mruv_RegisterAccountRequest,
    requestDeserialize: deserialize_mruv_RegisterAccountRequest,
    responseSerialize: serialize_mruv_RegisterAccountResponse,
    responseDeserialize: deserialize_mruv_RegisterAccountResponse,
  },
  logIn: {
    path: '/mruv.MruVAccountsService/LogIn',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.LogInRequest,
    responseType: accounts_accounts_pb.LogInResponse,
    requestSerialize: serialize_mruv_LogInRequest,
    requestDeserialize: deserialize_mruv_LogInRequest,
    responseSerialize: serialize_mruv_LogInResponse,
    responseDeserialize: deserialize_mruv_LogInResponse,
  },
  // Check, is account with specified login exists. If yes, it returns account id.
  isAccountExists: {
    path: '/mruv.MruVAccountsService/IsAccountExists',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.IsAccountExistsRequest,
    responseType: accounts_accounts_pb.IsAccountExistsResponse,
    requestSerialize: serialize_mruv_IsAccountExistsRequest,
    requestDeserialize: deserialize_mruv_IsAccountExistsRequest,
    responseSerialize: serialize_mruv_IsAccountExistsResponse,
    responseDeserialize: deserialize_mruv_IsAccountExistsResponse,
  },
  getAccount: {
    path: '/mruv.MruVAccountsService/GetAccount',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.AccountID,
    responseType: accounts_accounts_pb.Account,
    requestSerialize: serialize_mruv_AccountID,
    requestDeserialize: deserialize_mruv_AccountID,
    responseSerialize: serialize_mruv_Account,
    responseDeserialize: deserialize_mruv_Account,
  },
  getAccountCharacters: {
    path: '/mruv.MruVAccountsService/GetAccountCharacters',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.AccountID,
    responseType: accounts_accounts_pb.GetAccountCharactersResponse,
    requestSerialize: serialize_mruv_AccountID,
    requestDeserialize: deserialize_mruv_AccountID,
    responseSerialize: serialize_mruv_GetAccountCharactersResponse,
    responseDeserialize: deserialize_mruv_GetAccountCharactersResponse,
  },
};

exports.MruVAccountsServiceClient = grpc.makeGenericClientConstructor(MruVAccountsServiceService);
