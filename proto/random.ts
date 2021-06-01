import type * as grpc from '@grpc/grpc-js';
import type { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { RandomClient as _randomPackage_RandomClient, RandomDefinition as _randomPackage_RandomDefinition } from './randomPackage/Random';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  randomPackage: {
    ChatRequest: MessageTypeDefinition
    ChatResponse: MessageTypeDefinition
    NumberRequest: MessageTypeDefinition
    NumberResponse: MessageTypeDefinition
    PingRequest: MessageTypeDefinition
    PongResponse: MessageTypeDefinition
    Random: SubtypeConstructor<typeof grpc.Client, _randomPackage_RandomClient> & { service: _randomPackage_RandomDefinition }
    TodoRequest: MessageTypeDefinition
    TodoResponse: MessageTypeDefinition
  }
}

