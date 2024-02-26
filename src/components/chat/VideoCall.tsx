// VideoCallComponent.jsx
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import SimplePeer, { Instance } from "simple-peer";

const VideoCallComponent = () => {
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [peer, setPeer] = useState<Instance | null>(null);
  const socket = io("http://localhost:3001");

  useEffect(() => {
    const setupMediaDevices = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setLocalStream(stream);
    };
    setupMediaDevices();

    socket.on("offer", async (offer) => {
      const peer = new SimplePeer({
        initiator: false,
        trickle: false,
        //@ts-expect-error
        stream: localStream,
      });
      peer.on("signal", (answer) => {
        socket.emit("answer", answer);
      });
      peer.signal(offer);
      peer.on("stream", (stream) => {
        setRemoteStream(stream);
      });
      setPeer(peer);
    });

    socket.on("answer", (answer) => {
      if (peer) peer.signal(answer);
    });

    socket.on("iceCandidate", (iceCandidate) => {
      //@ts-expect-error
      if (peer) peer.addIceCandidate(iceCandidate);
    });

    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => {
          track.stop();
        });
      }
      if (peer) {
        peer.destroy();
      }
      socket.disconnect();
    };
  }, [localStream, peer, socket]);

  return (
    <div>
      <video
        ref={(ref) => ref && (ref.srcObject = localStream)}
        autoPlay
        muted
      />
      <video ref={(ref) => ref && (ref.srcObject = remoteStream)} autoPlay />
    </div>
  );
};

export default VideoCallComponent;
