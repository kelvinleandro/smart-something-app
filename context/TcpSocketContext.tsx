import React, { createContext, useContext, useEffect, useState } from 'react';
import TcpSocket from 'react-native-tcp-socket';
import {messages} from '@/types/proto';

interface TcpSocketContextType {
  sendToServer: (message: string) => void;
  response: messages.ClientResponse | null;
}

const TcpSocketContext = createContext<TcpSocketContextType>({
  sendToServer: (message: string) => {},
  response: null,
});

export const TcpSocketProvider = ({ children } : { children: React.ReactNode }) => {
  const [client, setClient] = useState<TcpSocket.Socket | null>(null);
  const [response, setResponse] = useState<messages.ClientResponse | null>(null);

  useEffect(() => {
    const newClient = TcpSocket.createConnection(
      {
        host: '192.168.1.64',
        port: 9991,
      },
      () => {
        console.log('Connected to server');
      }
    );
    
    newClient.on('data', (data: any) => {
      try {
        const decoded = messages.ClientResponse.decode(new Uint8Array(data));
        console.log('Decoded Message:', decoded);
        setResponse(decoded);
      } catch (err) {
        console.error('Failed to decode message:', err);
      }
    });

    newClient.on('error', (error) => {
      console.error('Connection error:', error);
    });

    newClient.on('close', () => {
      console.log('Connection closed');
    });

    setClient(newClient);

    return () => {
      if (newClient) newClient.destroy();
    };
  }, []);

  const sendToServer = (message: string) => {
    if (!client) {
      console.error('Client not connected');
      return;
    } else {
      console.log('Client connected:', client);
    }

    try {
      const request = messages.ClientMessage.create({ request: message });
      const encodedMessage = messages.ClientMessage.encode(request).finish();
      console.log('Encoded Message:', encodedMessage);
      client.write(encodedMessage);
      console.log('Sent Protobuf Message:', message);
    } catch (err) {
      console.error('Failed to encode message:', err);
    }
  };

  return (
    <TcpSocketContext.Provider value={{ sendToServer, response }}>
      {children}
    </TcpSocketContext.Provider>
  );
};

export const useTcpSocket = () => useContext(TcpSocketContext);
