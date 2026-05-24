'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import { cn } from '@/lib/utils';

type ShaderRefs = {
  scene: THREE.Scene | null;
  camera: THREE.OrthographicCamera | null;
  renderer: THREE.WebGLRenderer | null;
  mesh: THREE.Mesh<THREE.BufferGeometry, THREE.RawShaderMaterial> | null;
  uniforms: {
    resolution: { value: [number, number] };
    time: { value: number };
    xScale: { value: number };
    yScale: { value: number };
    distortion: { value: number };
  } | null;
  animationId: number | null;
};

type WebGLShaderProps = {
  className?: string;
};

export function WebGLShader({ className }: WebGLShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(true);
  const sceneRef = useRef<ShaderRefs>({
    scene: null,
    camera: null,
    renderer: null,
    mesh: null,
    uniforms: null,
    animationId: null,
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const { current: refs } = sceneRef;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        float d = length(p) * distortion;

        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);

        gl_FragColor = vec4(r, g, b, 1.0);
      }
    `;

    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms) return;

      const rect = canvas.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));

      refs.renderer.setSize(width, height, false);
      refs.uniforms.resolution.value = [width, height];
    };

    const initScene = () => {
      const context =
        canvas.getContext('webgl2', { antialias: true }) ??
        canvas.getContext('webgl', { antialias: true }) ??
        (canvas.getContext('experimental-webgl', { antialias: true }) as
          | WebGLRenderingContext
          | null);

      if (!context) {
        setIsWebGLAvailable(false);
        return false;
      }

      refs.scene = new THREE.Scene();
      refs.renderer = new THREE.WebGLRenderer({
        canvas,
        context,
        powerPreference: 'high-performance',
      });
      refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      refs.renderer.setClearColor(new THREE.Color(0x000000));

      refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      refs.uniforms = {
        resolution: { value: [1, 1] },
        time: { value: 0.0 },
        xScale: { value: 1.0 },
        yScale: { value: 0.5 },
        distortion: { value: 0.05 },
      };

      const position = [
        -1.0, -1.0, 0.0,
        1.0, -1.0, 0.0,
        -1.0, 1.0, 0.0,
        1.0, -1.0, 0.0,
        -1.0, 1.0, 0.0,
        1.0, 1.0, 0.0,
      ];

      const positions = new THREE.BufferAttribute(new Float32Array(position), 3);
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', positions);

      const material = new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: refs.uniforms,
        side: THREE.DoubleSide,
      });

      refs.mesh = new THREE.Mesh(geometry, material);
      refs.scene.add(refs.mesh);

      handleResize();

      return true;
    };

    const renderFrame = () => {
      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera);
      }
    };

    const animate = () => {
      if (refs.uniforms) refs.uniforms.time.value += 0.01;
      renderFrame();
      refs.animationId = requestAnimationFrame(animate);
    };

    let resizeObserver: ResizeObserver | null = null;

    try {
      if (!initScene()) return;
      renderFrame();

      if (!prefersReducedMotion) {
        animate();
      }

      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(canvas);
    } catch {
      setIsWebGLAvailable(false);
      return;
    }

    return () => {
      if (refs.animationId) cancelAnimationFrame(refs.animationId);
      resizeObserver?.disconnect();

      if (refs.mesh) {
        refs.scene?.remove(refs.mesh);
        refs.mesh.geometry.dispose();
        refs.mesh.material.dispose();
      }

      refs.renderer?.dispose();
    };
  }, []);

  if (!isWebGLAvailable) {
    return (
      <div
        className={cn(
          'absolute inset-0 bg-[radial-gradient(circle_at_12%_42%,rgba(255,255,255,0.28),transparent_24%),radial-gradient(circle_at_72%_58%,rgba(255,25,4,0.2),transparent_32%),linear-gradient(115deg,transparent_10%,rgba(255,255,255,0.18)_42%,rgba(255,25,4,0.14)_58%,transparent_82%)]',
          className,
        )}
        aria-hidden="true"
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 block h-full w-full', className)}
      aria-hidden="true"
    />
  );
}
