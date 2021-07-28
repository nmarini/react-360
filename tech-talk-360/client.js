// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface, Location } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const SIZE = 300;

  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Backyard View
  const sphereSurface = new Surface(SIZE, SIZE, Surface.SurfaceShape.Flat);
  sphereSurface.setAngle(0, 0);
  r360.renderToSurface(
    r360.createRoot('Info', { name: 'Backyard view' }),
    sphereSurface
  );

  // Wine Glasses
  const capsuleSurface = new Surface(SIZE, SIZE, Surface.SurfaceShape.Flat);
  capsuleSurface.setAngle(Math.PI / 2, 0);
  r360.renderToSurface(
    r360.createRoot('Info', { name: 'Wine Glasses' }),
    capsuleSurface
  );

  // Fridge
  const cylinderSurface = new Surface(SIZE, SIZE, Surface.SurfaceShape.Flat);
  cylinderSurface.setAngle(3.5, 0);
  r360.renderToSurface(
    r360.createRoot('Info', { name: 'Fridge' }),
    cylinderSurface
  );

  // Wet Bar
  const cubeSurface = new Surface(SIZE, SIZE, Surface.SurfaceShape.Flat);
  cubeSurface.setAngle((-1 * Math.PI) / 1.9, 0);
  r360.renderToSurface(
    r360.createRoot('Info', { name: 'Wet bar' }),
    cubeSurface
  );

  // 3D Plane
  const location = new Location([-80, 0, -10]);
  r360.renderToLocation(r360.createRoot('Figure'), location);

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('tech_talk_360', {
      /* initial props */
    }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('kitchen.jpg'));
  // r360.compositor.setBackground(r360.getAssetURL('venice-360.jpeg'));
}

window.React360 = { init };
