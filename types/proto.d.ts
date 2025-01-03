import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace messages. */
export namespace messages {

    /** Properties of a ClientMessage. */
    interface IClientMessage {

        /** ClientMessage request */
        request?: (string|null);
    }

    /** Represents a ClientMessage. */
    class ClientMessage implements IClientMessage {

        /**
         * Constructs a new ClientMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IClientMessage);

        /** ClientMessage request. */
        public request: string;

        /**
         * Creates a new ClientMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientMessage instance
         */
        public static create(properties?: messages.IClientMessage): messages.ClientMessage;

        /**
         * Encodes the specified ClientMessage message. Does not implicitly {@link messages.ClientMessage.verify|verify} messages.
         * @param message ClientMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IClientMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientMessage message, length delimited. Does not implicitly {@link messages.ClientMessage.verify|verify} messages.
         * @param message ClientMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IClientMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.ClientMessage;

        /**
         * Decodes a ClientMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.ClientMessage;

        /**
         * Verifies a ClientMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientMessage
         */
        public static fromObject(object: { [k: string]: any }): messages.ClientMessage;

        /**
         * Creates a plain object from a ClientMessage message. Also converts values to other types if specified.
         * @param message ClientMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.ClientMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientResponse. */
    interface IClientResponse {

        /** ClientResponse response */
        response?: (string|null);
    }

    /** Represents a ClientResponse. */
    class ClientResponse implements IClientResponse {

        /**
         * Constructs a new ClientResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IClientResponse);

        /** ClientResponse response. */
        public response: string;

        /**
         * Creates a new ClientResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientResponse instance
         */
        public static create(properties?: messages.IClientResponse): messages.ClientResponse;

        /**
         * Encodes the specified ClientResponse message. Does not implicitly {@link messages.ClientResponse.verify|verify} messages.
         * @param message ClientResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IClientResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientResponse message, length delimited. Does not implicitly {@link messages.ClientResponse.verify|verify} messages.
         * @param message ClientResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IClientResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.ClientResponse;

        /**
         * Decodes a ClientResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.ClientResponse;

        /**
         * Verifies a ClientResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientResponse
         */
        public static fromObject(object: { [k: string]: any }): messages.ClientResponse;

        /**
         * Creates a plain object from a ClientResponse message. Also converts values to other types if specified.
         * @param message ClientResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.ClientResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeviceMessage. */
    interface IDeviceMessage {

        /** DeviceMessage deviceId */
        deviceId?: (string|null);

        /** DeviceMessage data */
        data?: (string|null);
    }

    /** Represents a DeviceMessage. */
    class DeviceMessage implements IDeviceMessage {

        /**
         * Constructs a new DeviceMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IDeviceMessage);

        /** DeviceMessage deviceId. */
        public deviceId: string;

        /** DeviceMessage data. */
        public data: string;

        /**
         * Creates a new DeviceMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceMessage instance
         */
        public static create(properties?: messages.IDeviceMessage): messages.DeviceMessage;

        /**
         * Encodes the specified DeviceMessage message. Does not implicitly {@link messages.DeviceMessage.verify|verify} messages.
         * @param message DeviceMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IDeviceMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceMessage message, length delimited. Does not implicitly {@link messages.DeviceMessage.verify|verify} messages.
         * @param message DeviceMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IDeviceMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.DeviceMessage;

        /**
         * Decodes a DeviceMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.DeviceMessage;

        /**
         * Verifies a DeviceMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceMessage
         */
        public static fromObject(object: { [k: string]: any }): messages.DeviceMessage;

        /**
         * Creates a plain object from a DeviceMessage message. Also converts values to other types if specified.
         * @param message DeviceMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.DeviceMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeviceMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeviceResponse. */
    interface IDeviceResponse {

        /** DeviceResponse deviceId */
        deviceId?: (string|null);

        /** DeviceResponse response */
        response?: (string|null);
    }

    /** Represents a DeviceResponse. */
    class DeviceResponse implements IDeviceResponse {

        /**
         * Constructs a new DeviceResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IDeviceResponse);

        /** DeviceResponse deviceId. */
        public deviceId: string;

        /** DeviceResponse response. */
        public response: string;

        /**
         * Creates a new DeviceResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceResponse instance
         */
        public static create(properties?: messages.IDeviceResponse): messages.DeviceResponse;

        /**
         * Encodes the specified DeviceResponse message. Does not implicitly {@link messages.DeviceResponse.verify|verify} messages.
         * @param message DeviceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IDeviceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceResponse message, length delimited. Does not implicitly {@link messages.DeviceResponse.verify|verify} messages.
         * @param message DeviceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IDeviceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.DeviceResponse;

        /**
         * Decodes a DeviceResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.DeviceResponse;

        /**
         * Verifies a DeviceResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceResponse
         */
        public static fromObject(object: { [k: string]: any }): messages.DeviceResponse;

        /**
         * Creates a plain object from a DeviceResponse message. Also converts values to other types if specified.
         * @param message DeviceResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.DeviceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeviceResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DiscoverMessage. */
    interface IDiscoverMessage {

        /** DiscoverMessage request */
        request?: (string|null);

        /** DiscoverMessage ip */
        ip?: (string|null);

        /** DiscoverMessage port */
        port?: (number|null);
    }

    /** Represents a DiscoverMessage. */
    class DiscoverMessage implements IDiscoverMessage {

        /**
         * Constructs a new DiscoverMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IDiscoverMessage);

        /** DiscoverMessage request. */
        public request: string;

        /** DiscoverMessage ip. */
        public ip: string;

        /** DiscoverMessage port. */
        public port: number;

        /**
         * Creates a new DiscoverMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiscoverMessage instance
         */
        public static create(properties?: messages.IDiscoverMessage): messages.DiscoverMessage;

        /**
         * Encodes the specified DiscoverMessage message. Does not implicitly {@link messages.DiscoverMessage.verify|verify} messages.
         * @param message DiscoverMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IDiscoverMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DiscoverMessage message, length delimited. Does not implicitly {@link messages.DiscoverMessage.verify|verify} messages.
         * @param message DiscoverMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IDiscoverMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiscoverMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiscoverMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.DiscoverMessage;

        /**
         * Decodes a DiscoverMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DiscoverMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.DiscoverMessage;

        /**
         * Verifies a DiscoverMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DiscoverMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DiscoverMessage
         */
        public static fromObject(object: { [k: string]: any }): messages.DiscoverMessage;

        /**
         * Creates a plain object from a DiscoverMessage message. Also converts values to other types if specified.
         * @param message DiscoverMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.DiscoverMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DiscoverMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DiscoverMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DiscoverResponse. */
    interface IDiscoverResponse {

        /** DiscoverResponse deviceId */
        deviceId?: (string|null);

        /** DiscoverResponse ip */
        ip?: (string|null);

        /** DiscoverResponse port */
        port?: (number|null);

        /** DiscoverResponse type */
        type?: (number|null);
    }

    /** Represents a DiscoverResponse. */
    class DiscoverResponse implements IDiscoverResponse {

        /**
         * Constructs a new DiscoverResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IDiscoverResponse);

        /** DiscoverResponse deviceId. */
        public deviceId: string;

        /** DiscoverResponse ip. */
        public ip: string;

        /** DiscoverResponse port. */
        public port: number;

        /** DiscoverResponse type. */
        public type: number;

        /**
         * Creates a new DiscoverResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiscoverResponse instance
         */
        public static create(properties?: messages.IDiscoverResponse): messages.DiscoverResponse;

        /**
         * Encodes the specified DiscoverResponse message. Does not implicitly {@link messages.DiscoverResponse.verify|verify} messages.
         * @param message DiscoverResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IDiscoverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DiscoverResponse message, length delimited. Does not implicitly {@link messages.DiscoverResponse.verify|verify} messages.
         * @param message DiscoverResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IDiscoverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiscoverResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiscoverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.DiscoverResponse;

        /**
         * Decodes a DiscoverResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DiscoverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.DiscoverResponse;

        /**
         * Verifies a DiscoverResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DiscoverResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DiscoverResponse
         */
        public static fromObject(object: { [k: string]: any }): messages.DiscoverResponse;

        /**
         * Creates a plain object from a DiscoverResponse message. Also converts values to other types if specified.
         * @param message DiscoverResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.DiscoverResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DiscoverResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DiscoverResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
