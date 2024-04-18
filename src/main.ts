import { bootstrapCameraKit } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({ apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzEzNDUzMDQ3LCJzdWIiOiI4N2E3ZjZiYy0xZmViLTQzMWQtYTdkNi0yYmE5OTAwNjA5NjN-U1RBR0lOR35hODFkY2FkNi1jMzA3LTQ0YjgtOTgzNC1kNzAyNzNjM2EwNDkifQ.N4ryopRk0g1YkV2g2wsgvrjshqXpogMWcWXzlfOizKQ' });

  const liveRenderTarget = document.getElementById('canvas') as HTMLCanvasElement;
  const session = await cameraKit.createSession({ liveRenderTarget });

  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  await session.setSource(mediaStream);
  await session.play();

  const lens = await cameraKit.lensRepository.loadLens(
    '7b7815c3-1ec1-4dc1-906a-3bceb412ae25',
    'cd4e90de-7360-4dc8-8417-5eb2054c11af'
  );

  await session.applyLens(lens);

})();

