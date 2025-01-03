/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const messages = $root.messages = (() => {

    /**
     * Namespace messages.
     * @exports messages
     * @namespace
     */
    const messages = {};

    messages.ClientMessage = (function() {

        /**
         * Properties of a ClientMessage.
         * @memberof messages
         * @interface IClientMessage
         * @property {string|null} [request] ClientMessage request
         */

        /**
         * Constructs a new ClientMessage.
         * @memberof messages
         * @classdesc Represents a ClientMessage.
         * @implements IClientMessage
         * @constructor
         * @param {messages.IClientMessage=} [properties] Properties to set
         */
        function ClientMessage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientMessage request.
         * @member {string} request
         * @memberof messages.ClientMessage
         * @instance
         */
        ClientMessage.prototype.request = "";

        /**
         * Creates a new ClientMessage instance using the specified properties.
         * @function create
         * @memberof messages.ClientMessage
         * @static
         * @param {messages.IClientMessage=} [properties] Properties to set
         * @returns {messages.ClientMessage} ClientMessage instance
         */
        ClientMessage.create = function create(properties) {
            return new ClientMessage(properties);
        };

        /**
         * Encodes the specified ClientMessage message. Does not implicitly {@link messages.ClientMessage.verify|verify} messages.
         * @function encode
         * @memberof messages.ClientMessage
         * @static
         * @param {messages.IClientMessage} message ClientMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.request != null && Object.hasOwnProperty.call(message, "request"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.request);
            return writer;
        };

        /**
         * Encodes the specified ClientMessage message, length delimited. Does not implicitly {@link messages.ClientMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.ClientMessage
         * @static
         * @param {messages.IClientMessage} message ClientMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientMessage message from the specified reader or buffer.
         * @function decode
         * @memberof messages.ClientMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.ClientMessage} ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.ClientMessage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.request = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClientMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.ClientMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.ClientMessage} ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientMessage message.
         * @function verify
         * @memberof messages.ClientMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.request != null && message.hasOwnProperty("request"))
                if (!$util.isString(message.request))
                    return "request: string expected";
            return null;
        };

        /**
         * Creates a ClientMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.ClientMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.ClientMessage} ClientMessage
         */
        ClientMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.ClientMessage)
                return object;
            let message = new $root.messages.ClientMessage();
            if (object.request != null)
                message.request = String(object.request);
            return message;
        };

        /**
         * Creates a plain object from a ClientMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.ClientMessage
         * @static
         * @param {messages.ClientMessage} message ClientMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.request = "";
            if (message.request != null && message.hasOwnProperty("request"))
                object.request = message.request;
            return object;
        };

        /**
         * Converts this ClientMessage to JSON.
         * @function toJSON
         * @memberof messages.ClientMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClientMessage
         * @function getTypeUrl
         * @memberof messages.ClientMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClientMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/messages.ClientMessage";
        };

        return ClientMessage;
    })();

    messages.ClientResponse = (function() {

        /**
         * Properties of a ClientResponse.
         * @memberof messages
         * @interface IClientResponse
         * @property {string|null} [response] ClientResponse response
         */

        /**
         * Constructs a new ClientResponse.
         * @memberof messages
         * @classdesc Represents a ClientResponse.
         * @implements IClientResponse
         * @constructor
         * @param {messages.IClientResponse=} [properties] Properties to set
         */
        function ClientResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientResponse response.
         * @member {string} response
         * @memberof messages.ClientResponse
         * @instance
         */
        ClientResponse.prototype.response = "";

        /**
         * Creates a new ClientResponse instance using the specified properties.
         * @function create
         * @memberof messages.ClientResponse
         * @static
         * @param {messages.IClientResponse=} [properties] Properties to set
         * @returns {messages.ClientResponse} ClientResponse instance
         */
        ClientResponse.create = function create(properties) {
            return new ClientResponse(properties);
        };

        /**
         * Encodes the specified ClientResponse message. Does not implicitly {@link messages.ClientResponse.verify|verify} messages.
         * @function encode
         * @memberof messages.ClientResponse
         * @static
         * @param {messages.IClientResponse} message ClientResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.response != null && Object.hasOwnProperty.call(message, "response"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.response);
            return writer;
        };

        /**
         * Encodes the specified ClientResponse message, length delimited. Does not implicitly {@link messages.ClientResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.ClientResponse
         * @static
         * @param {messages.IClientResponse} message ClientResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientResponse message from the specified reader or buffer.
         * @function decode
         * @memberof messages.ClientResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.ClientResponse} ClientResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.ClientResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.response = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClientResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.ClientResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.ClientResponse} ClientResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientResponse message.
         * @function verify
         * @memberof messages.ClientResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.response != null && message.hasOwnProperty("response"))
                if (!$util.isString(message.response))
                    return "response: string expected";
            return null;
        };

        /**
         * Creates a ClientResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.ClientResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.ClientResponse} ClientResponse
         */
        ClientResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.ClientResponse)
                return object;
            let message = new $root.messages.ClientResponse();
            if (object.response != null)
                message.response = String(object.response);
            return message;
        };

        /**
         * Creates a plain object from a ClientResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.ClientResponse
         * @static
         * @param {messages.ClientResponse} message ClientResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.response = "";
            if (message.response != null && message.hasOwnProperty("response"))
                object.response = message.response;
            return object;
        };

        /**
         * Converts this ClientResponse to JSON.
         * @function toJSON
         * @memberof messages.ClientResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClientResponse
         * @function getTypeUrl
         * @memberof messages.ClientResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClientResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/messages.ClientResponse";
        };

        return ClientResponse;
    })();

    messages.DeviceMessage = (function() {

        /**
         * Properties of a DeviceMessage.
         * @memberof messages
         * @interface IDeviceMessage
         * @property {string|null} [deviceId] DeviceMessage deviceId
         * @property {string|null} [data] DeviceMessage data
         */

        /**
         * Constructs a new DeviceMessage.
         * @memberof messages
         * @classdesc Represents a DeviceMessage.
         * @implements IDeviceMessage
         * @constructor
         * @param {messages.IDeviceMessage=} [properties] Properties to set
         */
        function DeviceMessage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeviceMessage deviceId.
         * @member {string} deviceId
         * @memberof messages.DeviceMessage
         * @instance
         */
        DeviceMessage.prototype.deviceId = "";

        /**
         * DeviceMessage data.
         * @member {string} data
         * @memberof messages.DeviceMessage
         * @instance
         */
        DeviceMessage.prototype.data = "";

        /**
         * Creates a new DeviceMessage instance using the specified properties.
         * @function create
         * @memberof messages.DeviceMessage
         * @static
         * @param {messages.IDeviceMessage=} [properties] Properties to set
         * @returns {messages.DeviceMessage} DeviceMessage instance
         */
        DeviceMessage.create = function create(properties) {
            return new DeviceMessage(properties);
        };

        /**
         * Encodes the specified DeviceMessage message. Does not implicitly {@link messages.DeviceMessage.verify|verify} messages.
         * @function encode
         * @memberof messages.DeviceMessage
         * @static
         * @param {messages.IDeviceMessage} message DeviceMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
            return writer;
        };

        /**
         * Encodes the specified DeviceMessage message, length delimited. Does not implicitly {@link messages.DeviceMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.DeviceMessage
         * @static
         * @param {messages.IDeviceMessage} message DeviceMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeviceMessage message from the specified reader or buffer.
         * @function decode
         * @memberof messages.DeviceMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.DeviceMessage} DeviceMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.DeviceMessage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.deviceId = reader.string();
                        break;
                    }
                case 2: {
                        message.data = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeviceMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.DeviceMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.DeviceMessage} DeviceMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeviceMessage message.
         * @function verify
         * @memberof messages.DeviceMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isString(message.deviceId))
                    return "deviceId: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!$util.isString(message.data))
                    return "data: string expected";
            return null;
        };

        /**
         * Creates a DeviceMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.DeviceMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.DeviceMessage} DeviceMessage
         */
        DeviceMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.DeviceMessage)
                return object;
            let message = new $root.messages.DeviceMessage();
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.data != null)
                message.data = String(object.data);
            return message;
        };

        /**
         * Creates a plain object from a DeviceMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.DeviceMessage
         * @static
         * @param {messages.DeviceMessage} message DeviceMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.deviceId = "";
                object.data = "";
            }
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            return object;
        };

        /**
         * Converts this DeviceMessage to JSON.
         * @function toJSON
         * @memberof messages.DeviceMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeviceMessage
         * @function getTypeUrl
         * @memberof messages.DeviceMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeviceMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/messages.DeviceMessage";
        };

        return DeviceMessage;
    })();

    messages.DeviceResponse = (function() {

        /**
         * Properties of a DeviceResponse.
         * @memberof messages
         * @interface IDeviceResponse
         * @property {string|null} [deviceId] DeviceResponse deviceId
         * @property {string|null} [response] DeviceResponse response
         */

        /**
         * Constructs a new DeviceResponse.
         * @memberof messages
         * @classdesc Represents a DeviceResponse.
         * @implements IDeviceResponse
         * @constructor
         * @param {messages.IDeviceResponse=} [properties] Properties to set
         */
        function DeviceResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeviceResponse deviceId.
         * @member {string} deviceId
         * @memberof messages.DeviceResponse
         * @instance
         */
        DeviceResponse.prototype.deviceId = "";

        /**
         * DeviceResponse response.
         * @member {string} response
         * @memberof messages.DeviceResponse
         * @instance
         */
        DeviceResponse.prototype.response = "";

        /**
         * Creates a new DeviceResponse instance using the specified properties.
         * @function create
         * @memberof messages.DeviceResponse
         * @static
         * @param {messages.IDeviceResponse=} [properties] Properties to set
         * @returns {messages.DeviceResponse} DeviceResponse instance
         */
        DeviceResponse.create = function create(properties) {
            return new DeviceResponse(properties);
        };

        /**
         * Encodes the specified DeviceResponse message. Does not implicitly {@link messages.DeviceResponse.verify|verify} messages.
         * @function encode
         * @memberof messages.DeviceResponse
         * @static
         * @param {messages.IDeviceResponse} message DeviceResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
            if (message.response != null && Object.hasOwnProperty.call(message, "response"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.response);
            return writer;
        };

        /**
         * Encodes the specified DeviceResponse message, length delimited. Does not implicitly {@link messages.DeviceResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.DeviceResponse
         * @static
         * @param {messages.IDeviceResponse} message DeviceResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeviceResponse message from the specified reader or buffer.
         * @function decode
         * @memberof messages.DeviceResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.DeviceResponse} DeviceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.DeviceResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.deviceId = reader.string();
                        break;
                    }
                case 2: {
                        message.response = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeviceResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.DeviceResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.DeviceResponse} DeviceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeviceResponse message.
         * @function verify
         * @memberof messages.DeviceResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isString(message.deviceId))
                    return "deviceId: string expected";
            if (message.response != null && message.hasOwnProperty("response"))
                if (!$util.isString(message.response))
                    return "response: string expected";
            return null;
        };

        /**
         * Creates a DeviceResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.DeviceResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.DeviceResponse} DeviceResponse
         */
        DeviceResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.DeviceResponse)
                return object;
            let message = new $root.messages.DeviceResponse();
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.response != null)
                message.response = String(object.response);
            return message;
        };

        /**
         * Creates a plain object from a DeviceResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.DeviceResponse
         * @static
         * @param {messages.DeviceResponse} message DeviceResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.deviceId = "";
                object.response = "";
            }
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.response != null && message.hasOwnProperty("response"))
                object.response = message.response;
            return object;
        };

        /**
         * Converts this DeviceResponse to JSON.
         * @function toJSON
         * @memberof messages.DeviceResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeviceResponse
         * @function getTypeUrl
         * @memberof messages.DeviceResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeviceResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/messages.DeviceResponse";
        };

        return DeviceResponse;
    })();

    messages.DiscoverMessage = (function() {

        /**
         * Properties of a DiscoverMessage.
         * @memberof messages
         * @interface IDiscoverMessage
         * @property {string|null} [request] DiscoverMessage request
         * @property {string|null} [ip] DiscoverMessage ip
         * @property {number|null} [port] DiscoverMessage port
         */

        /**
         * Constructs a new DiscoverMessage.
         * @memberof messages
         * @classdesc Represents a DiscoverMessage.
         * @implements IDiscoverMessage
         * @constructor
         * @param {messages.IDiscoverMessage=} [properties] Properties to set
         */
        function DiscoverMessage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DiscoverMessage request.
         * @member {string} request
         * @memberof messages.DiscoverMessage
         * @instance
         */
        DiscoverMessage.prototype.request = "";

        /**
         * DiscoverMessage ip.
         * @member {string} ip
         * @memberof messages.DiscoverMessage
         * @instance
         */
        DiscoverMessage.prototype.ip = "";

        /**
         * DiscoverMessage port.
         * @member {number} port
         * @memberof messages.DiscoverMessage
         * @instance
         */
        DiscoverMessage.prototype.port = 0;

        /**
         * Creates a new DiscoverMessage instance using the specified properties.
         * @function create
         * @memberof messages.DiscoverMessage
         * @static
         * @param {messages.IDiscoverMessage=} [properties] Properties to set
         * @returns {messages.DiscoverMessage} DiscoverMessage instance
         */
        DiscoverMessage.create = function create(properties) {
            return new DiscoverMessage(properties);
        };

        /**
         * Encodes the specified DiscoverMessage message. Does not implicitly {@link messages.DiscoverMessage.verify|verify} messages.
         * @function encode
         * @memberof messages.DiscoverMessage
         * @static
         * @param {messages.IDiscoverMessage} message DiscoverMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiscoverMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.request != null && Object.hasOwnProperty.call(message, "request"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.request);
            if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ip);
            if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.port);
            return writer;
        };

        /**
         * Encodes the specified DiscoverMessage message, length delimited. Does not implicitly {@link messages.DiscoverMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.DiscoverMessage
         * @static
         * @param {messages.IDiscoverMessage} message DiscoverMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiscoverMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DiscoverMessage message from the specified reader or buffer.
         * @function decode
         * @memberof messages.DiscoverMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.DiscoverMessage} DiscoverMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiscoverMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.DiscoverMessage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.request = reader.string();
                        break;
                    }
                case 2: {
                        message.ip = reader.string();
                        break;
                    }
                case 3: {
                        message.port = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DiscoverMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.DiscoverMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.DiscoverMessage} DiscoverMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiscoverMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DiscoverMessage message.
         * @function verify
         * @memberof messages.DiscoverMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DiscoverMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.request != null && message.hasOwnProperty("request"))
                if (!$util.isString(message.request))
                    return "request: string expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
            return null;
        };

        /**
         * Creates a DiscoverMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.DiscoverMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.DiscoverMessage} DiscoverMessage
         */
        DiscoverMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.DiscoverMessage)
                return object;
            let message = new $root.messages.DiscoverMessage();
            if (object.request != null)
                message.request = String(object.request);
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.port != null)
                message.port = object.port | 0;
            return message;
        };

        /**
         * Creates a plain object from a DiscoverMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.DiscoverMessage
         * @static
         * @param {messages.DiscoverMessage} message DiscoverMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DiscoverMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.request = "";
                object.ip = "";
                object.port = 0;
            }
            if (message.request != null && message.hasOwnProperty("request"))
                object.request = message.request;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            return object;
        };

        /**
         * Converts this DiscoverMessage to JSON.
         * @function toJSON
         * @memberof messages.DiscoverMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DiscoverMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DiscoverMessage
         * @function getTypeUrl
         * @memberof messages.DiscoverMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DiscoverMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/messages.DiscoverMessage";
        };

        return DiscoverMessage;
    })();

    messages.DiscoverResponse = (function() {

        /**
         * Properties of a DiscoverResponse.
         * @memberof messages
         * @interface IDiscoverResponse
         * @property {string|null} [deviceId] DiscoverResponse deviceId
         * @property {string|null} [ip] DiscoverResponse ip
         * @property {number|null} [port] DiscoverResponse port
         * @property {number|null} [type] DiscoverResponse type
         */

        /**
         * Constructs a new DiscoverResponse.
         * @memberof messages
         * @classdesc Represents a DiscoverResponse.
         * @implements IDiscoverResponse
         * @constructor
         * @param {messages.IDiscoverResponse=} [properties] Properties to set
         */
        function DiscoverResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DiscoverResponse deviceId.
         * @member {string} deviceId
         * @memberof messages.DiscoverResponse
         * @instance
         */
        DiscoverResponse.prototype.deviceId = "";

        /**
         * DiscoverResponse ip.
         * @member {string} ip
         * @memberof messages.DiscoverResponse
         * @instance
         */
        DiscoverResponse.prototype.ip = "";

        /**
         * DiscoverResponse port.
         * @member {number} port
         * @memberof messages.DiscoverResponse
         * @instance
         */
        DiscoverResponse.prototype.port = 0;

        /**
         * DiscoverResponse type.
         * @member {number} type
         * @memberof messages.DiscoverResponse
         * @instance
         */
        DiscoverResponse.prototype.type = 0;

        /**
         * Creates a new DiscoverResponse instance using the specified properties.
         * @function create
         * @memberof messages.DiscoverResponse
         * @static
         * @param {messages.IDiscoverResponse=} [properties] Properties to set
         * @returns {messages.DiscoverResponse} DiscoverResponse instance
         */
        DiscoverResponse.create = function create(properties) {
            return new DiscoverResponse(properties);
        };

        /**
         * Encodes the specified DiscoverResponse message. Does not implicitly {@link messages.DiscoverResponse.verify|verify} messages.
         * @function encode
         * @memberof messages.DiscoverResponse
         * @static
         * @param {messages.IDiscoverResponse} message DiscoverResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiscoverResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceId);
            if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ip);
            if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.port);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified DiscoverResponse message, length delimited. Does not implicitly {@link messages.DiscoverResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.DiscoverResponse
         * @static
         * @param {messages.IDiscoverResponse} message DiscoverResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiscoverResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DiscoverResponse message from the specified reader or buffer.
         * @function decode
         * @memberof messages.DiscoverResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.DiscoverResponse} DiscoverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiscoverResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.DiscoverResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.deviceId = reader.string();
                        break;
                    }
                case 2: {
                        message.ip = reader.string();
                        break;
                    }
                case 3: {
                        message.port = reader.int32();
                        break;
                    }
                case 4: {
                        message.type = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DiscoverResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.DiscoverResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.DiscoverResponse} DiscoverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiscoverResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DiscoverResponse message.
         * @function verify
         * @memberof messages.DiscoverResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DiscoverResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isString(message.deviceId))
                    return "deviceId: string expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        /**
         * Creates a DiscoverResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.DiscoverResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.DiscoverResponse} DiscoverResponse
         */
        DiscoverResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.DiscoverResponse)
                return object;
            let message = new $root.messages.DiscoverResponse();
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.port != null)
                message.port = object.port | 0;
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from a DiscoverResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.DiscoverResponse
         * @static
         * @param {messages.DiscoverResponse} message DiscoverResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DiscoverResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.deviceId = "";
                object.ip = "";
                object.port = 0;
                object.type = 0;
            }
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this DiscoverResponse to JSON.
         * @function toJSON
         * @memberof messages.DiscoverResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DiscoverResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DiscoverResponse
         * @function getTypeUrl
         * @memberof messages.DiscoverResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DiscoverResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/messages.DiscoverResponse";
        };

        return DiscoverResponse;
    })();

    return messages;
})();

export { $root as default };
