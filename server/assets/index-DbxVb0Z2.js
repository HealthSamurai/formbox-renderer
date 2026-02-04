import { jsx, jsxs } from "react/jsx-runtime";
import { c as cn } from "./utilities-C4Jv4YFd.js";
import { useRef, useState, useEffect, useCallback } from "react";
import { S as SiteHeader } from "./site-header-DD7aywWD.js";
import { Renderer, Triangle, Program, Color, Mesh } from "ogl";
import "classnames";
import "tailwind-merge";
import "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "../server.js";
import "react-dom/server";
function CodeBlock({ html, code, className }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "overflow-x-auto rounded-xl border border-border/60 bg-muted/60 p-4 text-xs text-foreground [&_pre]:m-0 [&_pre]:bg-transparent [&_pre]:p-0 [&_pre]:font-mono [&_code]:font-mono [&_code]:text-xs",
        className
      ),
      children: html ? /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: html } }) : /* @__PURE__ */ jsx("pre", { children: /* @__PURE__ */ jsx("code", { children: code }) })
    }
  );
}
const GlareHover = ({
  width = "500px",
  height = "500px",
  background = "#000",
  borderRadius = "10px",
  borderColor = "#333",
  children,
  glareColor = "#ffffff",
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = "",
  style = {}
}) => {
  const hex = glareColor.replace("#", "");
  let rgba = glareColor;
  if (/^[\dA-Fa-f]{6}$/.test(hex)) {
    const red = Number.parseInt(hex.slice(0, 2), 16);
    const green = Number.parseInt(hex.slice(2, 4), 16);
    const blue = Number.parseInt(hex.slice(4, 6), 16);
    rgba = `rgba(${red}, ${green}, ${blue}, ${glareOpacity})`;
  } else if (/^[\dA-Fa-f]{3}$/.test(hex)) {
    const red = Number.parseInt(hex[0] + hex[0], 16);
    const green = Number.parseInt(hex[1] + hex[1], 16);
    const blue = Number.parseInt(hex[2] + hex[2], 16);
    rgba = `rgba(${red}, ${green}, ${blue}, ${glareOpacity})`;
  }
  const overlayReference = useRef(
    void 0
  );
  const animateIn = () => {
    const element = overlayReference.current;
    if (!element) return;
    element.style.transition = "none";
    element.style.backgroundPosition = "-100% -100%, 0 0";
    element.style.transition = `${transitionDuration}ms ease`;
    element.style.backgroundPosition = "100% 100%, 0 0";
  };
  const animateOut = () => {
    const element = overlayReference.current;
    if (!element) return;
    if (playOnce) {
      element.style.transition = "none";
      element.style.backgroundPosition = "-100% -100%, 0 0";
    } else {
      element.style.transition = `${transitionDuration}ms ease`;
      element.style.backgroundPosition = "-100% -100%, 0 0";
    }
  };
  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(${glareAngle}deg,
        hsla(0,0%,0%,0) 60%,
        ${rgba} 70%,
        hsla(0,0%,0%,0) 100%)`,
    backgroundSize: `${glareSize}% ${glareSize}%, 100% 100%`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-100% -100%, 0 0",
    pointerEvents: "none"
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `relative grid place-items-center overflow-hidden border cursor-pointer ${className}`,
      style: {
        width,
        height,
        background,
        borderRadius,
        borderColor,
        ...style
      },
      onMouseEnter: animateIn,
      onMouseLeave: animateOut,
      children: [
        /* @__PURE__ */ jsx("div", { ref: overlayReference, style: overlayStyle }),
        children
      ]
    }
  );
};
const Magnet = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.5s ease-in-out",
  wrapperClassName = "",
  innerClassName = "",
  ...properties
}) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetReference = useRef(
    void 0
  );
  useEffect(() => {
    if (disabled) {
      return;
    }
    const handleMouseMove = (event) => {
      const element = magnetReference.current;
      if (!element) return;
      const { left, top, width, height } = element.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distanceX = Math.abs(centerX - event.clientX);
      const distanceY = Math.abs(centerY - event.clientY);
      if (distanceX < width / 2 + padding && distanceY < height / 2 + padding) {
        setIsActive(true);
        const offsetX = (event.clientX - centerX) / magnetStrength;
        const offsetY = (event.clientY - centerY) / magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };
    globalThis.addEventListener("mousemove", handleMouseMove);
    return () => {
      globalThis.removeEventListener("mousemove", handleMouseMove);
    };
  }, [padding, disabled, magnetStrength]);
  const resolvedPosition = disabled ? { x: 0, y: 0 } : position;
  const resolvedIsActive = disabled ? false : isActive;
  const transitionStyle = resolvedIsActive ? activeTransition : inactiveTransition;
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: magnetReference,
      className: wrapperClassName,
      style: { position: "relative", display: "inline-block" },
      ...properties,
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: innerClassName,
          style: {
            transform: `translate3d(${resolvedPosition.x}px, ${resolvedPosition.y}px, 0)`,
            transition: transitionStyle,
            willChange: "transform"
          },
          children
        }
      )
    }
  );
};
const DEFAULT_FROM = { opacity: 0, y: 40 };
const DEFAULT_TO = { opacity: 1, y: 0 };
let gsapRuntimePromise;
const loadGsapRuntime = () => {
  if (!gsapRuntimePromise) {
    gsapRuntimePromise = Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
      import("gsap/SplitText")
    ]).then(([gsapModule, scrollTriggerModule, splitTextModule]) => {
      const { gsap } = gsapModule;
      const { ScrollTrigger } = scrollTriggerModule;
      const { SplitText: SplitText2 } = splitTextModule;
      gsap.registerPlugin(ScrollTrigger, SplitText2);
      return { gsap, ScrollTrigger, SplitText: SplitText2 };
    });
  }
  return gsapRuntimePromise;
};
function SplitText({
  text,
  className = "",
  delay = 50,
  duration = 1.25,
  ease = "power3.out",
  splitType = "chars",
  from = DEFAULT_FROM,
  to = DEFAULT_TO,
  threshold = 0.1,
  rootMargin = "-100px",
  tag = "p",
  textAlign = "center",
  onLetterAnimationComplete
}) {
  const elementReference = useRef(
    void 0
  );
  const animationCompletedReference = useRef(false);
  const onCompleteReference = useRef(onLetterAnimationComplete);
  const [fontsLoaded, setFontsLoaded] = useState(() => {
    const fonts = globalThis.document?.fonts;
    return !fonts || fonts.status === "loaded";
  });
  const [runtime, setRuntime] = useState();
  useEffect(() => {
    onCompleteReference.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);
  useEffect(() => {
    let cancelled = false;
    void loadGsapRuntime().then((loadedRuntime) => {
      if (!cancelled) setRuntime(loadedRuntime);
    });
    return () => {
      cancelled = true;
    };
  }, []);
  useEffect(() => {
    const fonts = globalThis.document?.fonts;
    if (!fonts || fonts.status === "loaded") {
      return;
    }
    let cancelled = false;
    void fonts.ready.then(
      () => {
        if (!cancelled) setFontsLoaded(true);
      },
      () => {
        if (!cancelled) setFontsLoaded(true);
      }
    );
    return () => {
      cancelled = true;
    };
  }, []);
  useEffect(() => {
    if (!runtime || !fontsLoaded || !text) return;
    if (animationCompletedReference.current) return;
    const element = elementReference.current;
    if (!element) return;
    const elementWithInstance = element;
    if (elementWithInstance.splitInstance) {
      try {
        elementWithInstance.splitInstance.revert();
      } catch {
      }
      delete elementWithInstance.splitInstance;
    }
    const { gsap, ScrollTrigger, SplitText: SplitTextConstructor } = runtime;
    const startPercent = (1 - threshold) * 100;
    const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
    const marginValue = marginMatch ? Number.parseFloat(marginMatch[1]) : 0;
    const marginUnit = marginMatch?.[2] ?? "px";
    const sign = marginValue === 0 ? "" : marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`;
    const start = `top ${startPercent}%${sign}`;
    let targets = [];
    const assignTargets = (splitInstance2) => {
      if (splitType.includes("chars") && (splitInstance2.chars?.length ?? 0) > 0) {
        targets = splitInstance2.chars ?? [];
        return;
      }
      if (splitType.includes("words") && splitInstance2.words.length > 0) {
        targets = splitInstance2.words;
        return;
      }
      if (splitType.includes("lines") && splitInstance2.lines.length > 0) {
        targets = splitInstance2.lines;
        return;
      }
      targets = splitInstance2.chars ?? splitInstance2.words ?? splitInstance2.lines ?? [];
    };
    const splitInstance = new SplitTextConstructor(element, {
      type: splitType,
      smartWrap: true,
      autoSplit: splitType === "lines",
      linesClass: "split-line",
      wordsClass: "split-word",
      charsClass: "split-char",
      reduceWhiteSpace: false,
      onSplit: (instance) => {
        assignTargets(instance);
        return gsap.fromTo(
          targets,
          { ...from },
          {
            ...to,
            duration,
            ease,
            stagger: delay / 1e3,
            scrollTrigger: {
              trigger: element,
              start,
              once: true,
              fastScrollEnd: true,
              anticipatePin: 0.4
            },
            onComplete: () => {
              animationCompletedReference.current = true;
              onCompleteReference.current?.();
            },
            willChange: "transform, opacity",
            force3D: true
          }
        );
      }
    });
    elementWithInstance.splitInstance = splitInstance;
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
      try {
        splitInstance.revert();
      } catch {
      }
      delete elementWithInstance.splitInstance;
    };
  }, [
    runtime,
    fontsLoaded,
    text,
    delay,
    duration,
    ease,
    splitType,
    from,
    to,
    threshold,
    rootMargin
  ]);
  const classes = `split-parent overflow-hidden inline-block whitespace-normal ${className}`;
  const style = {
    textAlign,
    wordWrap: "break-word",
    willChange: "transform, opacity"
  };
  const Tag = tag;
  const setElementReference = useCallback((node) => {
    elementReference.current = node;
  }, []);
  return /* @__PURE__ */ jsx(Tag, { ref: setElementReference, style, className: classes, children: text });
}
const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;
const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uDistance;
uniform vec2 uMouse;

#define PI 3.1415926538

const int u_line_count = 40;
const float u_line_width = 7.0;
const float u_line_blur = 10.0;

float Perlin2D(vec2 P) {
    vec2 Pi = floor(P);
    vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
    vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
    Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
    Pt += vec2(26.0, 161.0).xyxy;
    Pt *= Pt;
    Pt = Pt.xzxz * Pt.yyww;
    vec4 hash_x = fract(Pt * (1.0 / 951.135664));
    vec4 hash_y = fract(Pt * (1.0 / 642.949883));
    vec4 grad_x = hash_x - 0.49999;
    vec4 grad_y = hash_y - 0.49999;
    vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)
        * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
    grad_results *= 1.4142135623730950;
    vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy
               * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
    vec4 blend2 = vec4(blend, vec2(1.0 - blend));
    return dot(grad_results, blend2.zxzx * blend2.wwyy);
}

float pixel(float count, vec2 resolution) {
    return (1.0 / max(resolution.x, resolution.y)) * count;
}

float lineFn(vec2 st, float width, float perc, float offset, vec2 mouse, float time, float amplitude, float distance) {
    float split_offset = (perc * 0.4);
    float split_point = 0.1 + split_offset;

    float amplitude_normal = smoothstep(split_point, 0.7, st.x);
    float amplitude_strength = 0.5;
    float finalAmplitude = amplitude_normal * amplitude_strength
                           * amplitude * (1.0 + (mouse.y - 0.5) * 0.2);

    float time_scaled = time / 10.0 + (mouse.x - 0.5) * 1.0;
    float blur = smoothstep(split_point, split_point + 0.05, st.x) * perc;

    float xnoise = mix(
        Perlin2D(vec2(time_scaled, st.x + perc) * 2.5),
        Perlin2D(vec2(time_scaled, st.x + time_scaled) * 3.5) / 1.5,
        st.x * 0.3
    );

    float y = 0.5 + (perc - 0.5) * distance + xnoise / 2.0 * finalAmplitude;

    float line_start = smoothstep(
        y + (width / 2.0) + (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        y,
        st.y
    );

    float line_end = smoothstep(
        y,
        y - (width / 2.0) - (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        st.y
    );

    return clamp(
        (line_start - line_end) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3))),
        0.0,
        1.0
    );
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;

    float line_strength = 1.0;
    for (int i = 0; i < u_line_count; i++) {
        float p = float(i) / float(u_line_count);
        line_strength *= (1.0 - lineFn(
            uv,
            u_line_width * pixel(1.0, iResolution.xy) * (1.0 - p),
            p,
            (PI * 1.0) * p,
            uMouse,
            iTime,
            uAmplitude,
            uDistance
        ));
    }

    float colorVal = 1.0 - line_strength;
    fragColor = vec4(uColor * colorVal, colorVal);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;
const Threads = ({
  color = [1, 1, 1],
  amplitude = 1,
  distance = 0,
  enableMouseInteraction = false,
  ...rest
}) => {
  const containerReference = useRef(
    void 0
  );
  const animationFrameId = useRef(0);
  useEffect(() => {
    if (!containerReference.current) return;
    const container = containerReference.current;
    const renderer = new Renderer({ alpha: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    container.append(gl.canvas);
    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height
          )
        },
        uColor: { value: new Color(...color) },
        uAmplitude: { value: amplitude },
        uDistance: { value: distance },
        uMouse: { value: new Float32Array([0.5, 0.5]) }
      }
    });
    const mesh = new Mesh(gl, { geometry, program });
    function resize() {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      program.uniforms["iResolution"].value.r = clientWidth;
      program.uniforms["iResolution"].value.g = clientHeight;
      program.uniforms["iResolution"].value.b = clientWidth / clientHeight;
    }
    window.addEventListener("resize", resize);
    resize();
    const currentMouse = [0.5, 0.5];
    let targetMouse = [0.5, 0.5];
    function handleMouseMove(event) {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1 - (event.clientY - rect.top) / rect.height;
      targetMouse = [x, y];
    }
    function handleMouseLeave() {
      targetMouse = [0.5, 0.5];
    }
    if (enableMouseInteraction) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    function update(t) {
      if (enableMouseInteraction) {
        const smoothing = 0.05;
        currentMouse[0] += smoothing * (targetMouse[0] - currentMouse[0]);
        currentMouse[1] += smoothing * (targetMouse[1] - currentMouse[1]);
        program.uniforms["uMouse"].value[0] = currentMouse[0];
        program.uniforms["uMouse"].value[1] = currentMouse[1];
      } else {
        program.uniforms["uMouse"].value[0] = 0.5;
        program.uniforms["uMouse"].value[1] = 0.5;
      }
      program.uniforms["iTime"].value = t * 1e-3;
      renderer.render({ scene: mesh });
      animationFrameId.current = requestAnimationFrame(update);
    }
    animationFrameId.current = requestAnimationFrame(update);
    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener("resize", resize);
      if (enableMouseInteraction) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (container.contains(gl.canvas)) gl.canvas.remove();
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [color, amplitude, distance, enableMouseInteraction]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerReference,
      className: "relative h-full w-full",
      ...rest
    }
  );
};
function Landing() {
  const heroHeadline = "Render HL7® FHIR® Questionnaires across any UI system";
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground font-body", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground",
        href: "#content",
        children: "Skip to content"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "border-b border-border/60 bg-muted/50", children: /* @__PURE__ */ jsxs("div", { className: "container flex items-center justify-between gap-3 px-4 py-2 text-xs text-muted-foreground sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("span", { className: "rounded-full border border-border/60 bg-background/70 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground/80", children: "Alpha" }),
      /* @__PURE__ */ jsx("span", { className: "flex-1", children: "Expect breaking changes while the API stabilizes." }),
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "text-foreground/80 underline-offset-4 transition hover:text-foreground hover:underline",
          href: "https://github.com/HealthSamurai/formbox-renderer/releases",
          target: "_blank",
          rel: "noreferrer",
          children: "Release notes"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(
      SiteHeader,
      {
        links: [
          { href: "#features", label: "Features" },
          { href: "#themes", label: "Themes" },
          { href: "#customize", label: "Customize" },
          { href: "storybook/", label: "Storybook" },
          { href: "docs/", label: "Docs" },
          { href: "#quickstart", label: "Quickstart" }
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background via-background to-muted/40" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.12),transparent_70%)] blur-3xl opacity-70" }),
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_30%_30%,hsl(var(--ring)/0.18),transparent_70%)] blur-3xl opacity-60" })
      ] }),
      /* @__PURE__ */ jsxs("main", { id: "content", children: [
        /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden pb-24 pt-32", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "pointer-events-none absolute inset-0",
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-35 mix-blend-screen", children: /* @__PURE__ */ jsx(
                Threads,
                {
                  color: [0.9, 0.94, 1],
                  amplitude: 2,
                  distance: 0.4,
                  enableMouseInteraction: true
                }
              ) })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "container grid gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/60 px-4 py-1 text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground animate-fade-up motion-reduce:animate-none [animation-delay:0ms]", children: "Open-source · FHIR R5 · React" }),
              /* @__PURE__ */ jsx(
                SplitText,
                {
                  text: heroHeadline,
                  tag: "h1",
                  textAlign: "left",
                  splitType: "words",
                  delay: 40,
                  duration: 1.1,
                  from: { opacity: 0, y: 32 },
                  to: { opacity: 1, y: 0 },
                  className: "block font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl"
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground animate-fade-up motion-reduce:animate-none [animation-delay:240ms]", children: "Formbox Renderer is a typed React renderer for FHIR R5 Questionnaires. Build clinical forms once, then ship them with pluggable themes, predictable state, and Storybook-ready previews." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 animate-fade-up motion-reduce:animate-none [animation-delay:360ms]", children: [
                /* @__PURE__ */ jsx(
                  Magnet,
                  {
                    padding: 100,
                    magnetStrength: 2,
                    wrapperClassName: "inline-flex",
                    innerClassName: "inline-flex",
                    children: /* @__PURE__ */ jsx(
                      "a",
                      {
                        className: "inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-black/25 transition hover:bg-primary/90",
                        href: "storybook/",
                        children: "Explore Storybook"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    className: "inline-flex items-center rounded-full border border-border/70 bg-muted/60 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-foreground/40",
                    href: "https://github.com/HealthSamurai/formbox-renderer",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "View on GitHub"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    className: "inline-flex items-center rounded-full border border-border/70 bg-background/60 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-foreground/40",
                    href: "docs/",
                    children: "Read docs"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    className: "inline-flex items-center rounded-full border border-border/70 bg-background/60 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-foreground/40",
                    href: "#quickstart",
                    children: "Get started"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 text-sm animate-fade-up motion-reduce:animate-none [animation-delay:480ms]", children: [
                /* @__PURE__ */ jsx("span", { className: "rounded-full border border-border/60 bg-muted/60 px-3 py-1 text-muted-foreground", children: "4 official themes" }),
                /* @__PURE__ */ jsx("span", { className: "rounded-full border border-border/60 bg-muted/60 px-3 py-1 text-muted-foreground", children: "FHIR R5 ready" }),
                /* @__PURE__ */ jsx("span", { className: "rounded-full border border-border/60 bg-muted/60 px-3 py-1 text-muted-foreground", children: "MIT license" }),
                /* @__PURE__ */ jsx("span", { className: "rounded-full border border-border/60 bg-muted/60 px-3 py-1 text-muted-foreground", children: "Headless core" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border/70 bg-card/80 p-7 shadow-xl shadow-black/40 backdrop-blur animate-fade-up motion-reduce:animate-none [animation-delay:200ms]", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Quick install" }),
                /* @__PURE__ */ jsx("span", { className: "rounded-full border border-border/60 bg-muted/60 px-2 py-1 text-[0.65rem] font-semibold text-foreground", children: "FHIR R5" })
              ] }),
              /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-lg text-foreground", children: "Render your first Questionnaire" }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Theme prop is required. Start with Health Samurai or bring your own." }),
              /* @__PURE__ */ jsx(
                CodeBlock,
                {
                  className: "mt-4",
                  html: '<pre class="shiki github-dark" tabindex="0"><code><span class="line"><span style="color:#B392F0">pnpm</span><span style="color:#9ECBFF"> add</span><span style="color:#9ECBFF"> @formbox/renderer</span><span style="color:#9ECBFF"> @formbox/hs-theme</span></span></code></pre>'
                }
              ),
              /* @__PURE__ */ jsx(
                CodeBlock,
                {
                  className: "mt-4",
                  html: '<pre class="shiki github-dark" tabindex="0"><code><span class="line"><span style="color:#F97583">import</span><span style="color:#9ECBFF"> "@formbox/hs-theme/style.css"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> { Renderer } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "@formbox/renderer"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> { theme } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "@formbox/hs-theme"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#E1E4E8">&#x3C;</span><span style="color:#79B8FF">Renderer</span><span style="color:#B392F0"> questionnaire</span><span style="color:#F97583">=</span><span style="color:#E1E4E8">{questionnaire} </span><span style="color:#B392F0">theme</span><span style="color:#F97583">=</span><span style="color:#E1E4E8">{theme} /></span></span></code></pre>'
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "mt-5 space-y-3 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "mt-1 h-2 w-2 rounded-full bg-primary" }),
                  /* @__PURE__ */ jsx("span", { children: "Swap themes without rewriting questionnaires." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "mt-1 h-2 w-2 rounded-full bg-primary" }),
                  /* @__PURE__ */ jsx("span", { children: "Wire data pipelines with controlled value props." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "mt-1 h-2 w-2 rounded-full bg-primary" }),
                  /* @__PURE__ */ jsx("span", { children: "Validate clinical UX with Storybook previews." })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "section",
          {
            id: "features",
            className: "scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8",
            children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
              /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
                /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground", children: "Everything you need to render at scale" }),
                /* @__PURE__ */ jsx("p", { className: "mt-3 text-base text-muted-foreground", children: "Purpose-built for FHIR R5 Questionnaires with a fully typed renderer, tested helpers, and predictable state management." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-10 grid grid-cols-1 gap-5 md:grid-cols-6 lg:grid-cols-12", children: [
                /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-border/60 bg-card/70 p-6 shadow-lg shadow-black/30 transition hover:border-ring/60 md:col-span-6 lg:col-span-7", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxs(
                      "svg",
                      {
                        className: "h-7 w-7 text-foreground/70",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                          /* @__PURE__ */ jsx("path", { d: "M12 3l9 5-9 5-9-5 9-5z" }),
                          /* @__PURE__ */ jsx("path", { d: "M3 12l9 5 9-5" }),
                          /* @__PURE__ */ jsx("path", { d: "M3 17l9 5 9-5" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground", children: "Typed renderer core" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Strict Questionnaire typing, composable renderers, and validation utilities that scale from single forms to full workflows." }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
                      /* @__PURE__ */ jsx("span", { children: "FHIR R5 Questionnaire ready" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
                      /* @__PURE__ */ jsx("span", { children: "Predictable stores and helpers" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
                      /* @__PURE__ */ jsx("span", { children: "Built for clinical UX teams" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-border/60 bg-card/70 p-6 shadow-lg shadow-black/30 transition hover:border-ring/60 md:col-span-6 lg:col-span-5", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxs(
                      "svg",
                      {
                        className: "h-7 w-7 text-foreground/70",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                          /* @__PURE__ */ jsx("path", { d: "M8 5L4 12l4 7" }),
                          /* @__PURE__ */ jsx("path", { d: "M16 5l4 7-4 7" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground", children: "Customize themes" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "The renderer never touches DOM APIs directly. Your theme defines markup, layout, and styling while data flows through strict props." })
                ] }),
                /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-border/60 bg-card/70 p-6 shadow-lg shadow-black/30 transition hover:border-ring/60 md:col-span-3 lg:col-span-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxs(
                      "svg",
                      {
                        className: "h-7 w-7 text-foreground/70",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                          /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1.5" }),
                          /* @__PURE__ */ jsx("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1.5" }),
                          /* @__PURE__ */ jsx("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1.5" }),
                          /* @__PURE__ */ jsx("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1.5" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground", children: "Pre-built themes" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Start with NHS Design, Health Samurai, Ant Design, or Mantine and keep your clinical workflows on-brand." })
                ] }),
                /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-border/60 bg-card/70 p-6 shadow-lg shadow-black/30 transition hover:border-ring/60 md:col-span-3 lg:col-span-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxs(
                      "svg",
                      {
                        className: "h-7 w-7 text-foreground/70",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                          /* @__PURE__ */ jsx("path", { d: "M12 3l7 3v6c0 5-3 7-7 9-4-2-7-4-7-9V6l7-3z" }),
                          /* @__PURE__ */ jsx("path", { d: "M9 12l2 2 4-4" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground", children: "SDC spec coverage" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Structured Data Capture behavior is covered and actively expanding toward full parity." })
                ] }),
                /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-border/60 bg-card/70 p-6 shadow-lg shadow-black/30 transition hover:border-ring/60 md:col-span-3 lg:col-span-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxs(
                      "svg",
                      {
                        className: "h-7 w-7 text-foreground/70",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                          /* @__PURE__ */ jsx("rect", { x: "7", y: "7", width: "10", height: "10", rx: "2" }),
                          /* @__PURE__ */ jsx("path", { d: "M4 9h3M4 15h3M17 9h3M17 15h3" }),
                          /* @__PURE__ */ jsx("path", { d: "M9 4v3M15 4v3M9 17v3M15 17v3" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground", children: "Headless engine" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Core rendering logic works in React Native, CLI tooling, or server-side environments." })
                ] }),
                /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-border/60 bg-card/70 p-6 shadow-lg shadow-black/30 transition hover:border-ring/60 md:col-span-6 lg:col-span-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxs(
                      "svg",
                      {
                        className: "h-7 w-7 text-foreground/70",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                          /* @__PURE__ */ jsx("path", { d: "M10 13a5 5 0 0 1 0-7l1.5-1.5a5 5 0 0 1 7 7L17 13" }),
                          /* @__PURE__ */ jsx("path", { d: "M14 11a5 5 0 0 1 0 7L12.5 19.5a5 5 0 0 1-7-7L7 11" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground", children: "Formbox Builder ready" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Integrated with Formbox Builder for end-to-end questionnaire authoring and renderer delivery." })
                ] }),
                /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-border/60 bg-card/70 p-6 shadow-lg shadow-black/30 transition hover:border-ring/60 md:col-span-6 lg:col-span-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxs(
                      "svg",
                      {
                        className: "h-7 w-7 text-foreground/70",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                          /* @__PURE__ */ jsx("circle", { cx: "12", cy: "5", r: "2.5" }),
                          /* @__PURE__ */ jsx("path", { d: "M4 9h16" }),
                          /* @__PURE__ */ jsx("path", { d: "M10 13l-2 8" }),
                          /* @__PURE__ */ jsx("path", { d: "M14 13l2 8" }),
                          /* @__PURE__ */ jsx("path", { d: "M12 9v11" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground", children: "Accessibility-first rendering" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "ARIA ids, helper text, and error messaging flow through the theme contract to support WCAG-ready experiences." })
                ] })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          "section",
          {
            id: "customize",
            className: "scroll-mt-28 border-y border-border/60 bg-muted/30 px-4 py-20 sm:px-6 lg:px-8",
            children: /* @__PURE__ */ jsxs("div", { className: "container grid gap-10 lg:grid-cols-2", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Customize" }),
                /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-3xl text-foreground", children: "Own the markup, keep the data flow clean" }),
                /* @__PURE__ */ jsx("p", { className: "mt-4 text-base text-muted-foreground", children: "A Theme is a full object with React components for every slot. The renderer never touches DOM APIs directly, so your theme controls layout and styling while data stays purely in props." }),
                /* @__PURE__ */ jsxs("ul", { className: "mt-6 space-y-3 text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "mt-1 h-4 w-4 shrink-0 rounded border border-border/60 bg-muted/60" }),
                    /* @__PURE__ */ jsx("span", { children: "Extend a base theme with object spread or build from scratch." })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "mt-1 h-4 w-4 shrink-0 rounded border border-border/60 bg-muted/60" }),
                    /* @__PURE__ */ jsx("span", { children: "Controlled-value props keep inputs predictable." })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "mt-1 h-4 w-4 shrink-0 rounded border border-border/60 bg-muted/60" }),
                    /* @__PURE__ */ jsx("span", { children: "Accessibility contract passes aria ids to your components." })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border/60 bg-card/70 p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-display text-base text-foreground", children: "Extend a base theme" }),
                  /* @__PURE__ */ jsx(
                    CodeBlock,
                    {
                      className: "mt-4",
                      html: '<pre class="shiki github-dark" tabindex="0"><code><span class="line"><span style="color:#F97583">import</span><span style="color:#F97583"> type</span><span style="color:#E1E4E8"> { Theme } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "@formbox/theme"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> { theme </span><span style="color:#F97583">as</span><span style="color:#E1E4E8"> baseTheme } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "@formbox/hs-theme"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> theme</span><span style="color:#F97583">:</span><span style="color:#B392F0"> Theme</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#F97583">  ...</span><span style="color:#E1E4E8">baseTheme,</span></span>\n<span class="line"><span style="color:#E1E4E8">  Label: MyLabel,</span></span>\n<span class="line"><span style="color:#E1E4E8">};</span></span></code></pre>'
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border/60 bg-card/70 p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-display text-base text-foreground", children: "Optional theme types" }),
                  /* @__PURE__ */ jsx(
                    CodeBlock,
                    {
                      className: "mt-4",
                      html: '<pre class="shiki github-dark" tabindex="0"><code><span class="line"><span style="color:#B392F0">pnpm</span><span style="color:#9ECBFF"> add</span><span style="color:#79B8FF"> -D</span><span style="color:#9ECBFF"> @formbox/theme</span></span></code></pre>'
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Install the Theme contract only when you author a custom theme." })
                ] })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          "section",
          {
            id: "themes",
            className: "scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8",
            children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
              /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
                /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground", children: "Theme kits ready to ship" }),
                /* @__PURE__ */ jsx("p", { className: "mt-3 text-base text-muted-foreground", children: "Start with the official themes or bring your own design system to stay on-brand." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: [
                /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-border/60 bg-card/70 p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground", children: "Health Samurai" }),
                  /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
                    "Clinical-ready layout density, contrast, and spacing tuned for Formbox workflows, built on",
                    " ",
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        className: "text-foreground/80 transition hover:text-foreground",
                        href: "https://www.health-samurai.io/",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Health Samurai Design System"
                      }
                    ),
                    "."
                  ] }),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      className: "mt-4 inline-flex items-center text-sm font-semibold text-foreground/80 transition hover:text-foreground",
                      href: "docs/hs-theme/",
                      children: "Docs"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-border/60 bg-card/70 p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground", children: "NHS Design" }),
                  /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
                    "NHS.UK-aligned typography, spacing, and component behavior for public health services, built on",
                    " ",
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        className: "text-foreground/80 transition hover:text-foreground",
                        href: "https://service-manual.nhs.uk/design-system",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "NHS.UK Design System"
                      }
                    ),
                    "."
                  ] }),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      className: "mt-4 inline-flex items-center text-sm font-semibold text-foreground/80 transition hover:text-foreground",
                      href: "docs/nshuk-theme/",
                      children: "Docs"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-border/60 bg-card/70 p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground", children: "Ant Design" }),
                  /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
                    "Enterprise-grade components and layout patterns for complex clinical apps, powered by",
                    " ",
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        className: "text-foreground/80 transition hover:text-foreground",
                        href: "https://ant.design/",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Ant Design"
                      }
                    ),
                    "."
                  ] }),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      className: "mt-4 inline-flex items-center text-sm font-semibold text-foreground/80 transition hover:text-foreground",
                      href: "docs/antd-theme/",
                      children: "Docs"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-border/60 bg-card/70 p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground", children: "Mantine" }),
                  /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
                    "Mantine components with first-class Provider setup and theme tokens, built on",
                    " ",
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        className: "text-foreground/80 transition hover:text-foreground",
                        href: "https://mantine.dev/",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Mantine"
                      }
                    ),
                    "."
                  ] }),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      className: "mt-4 inline-flex items-center text-sm font-semibold text-foreground/80 transition hover:text-foreground",
                      href: "docs/mantine-theme/",
                      children: "Docs"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-dashed border-border/60 bg-card/40 p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground", children: "React Native" }),
                    /* @__PURE__ */ jsx("span", { className: "rounded-full border border-border/60 bg-muted/60 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground", children: "Coming soon" })
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
                    "Gluestack-powered native layouts with accessible, touch-friendly components, built on",
                    " ",
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        className: "text-foreground/80 transition hover:text-foreground",
                        href: "https://gluestack.io/",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Gluestack UI"
                      }
                    ),
                    "."
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-border/60 bg-card/70 p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground", children: "Build Your Own" }),
                  /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
                    "Map renderer slots to your design system while keeping data flow predictable with the",
                    " ",
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        className: "text-foreground/80 transition hover:text-foreground",
                        href: "docs/theme/",
                        children: "Theme guide"
                      }
                    ),
                    "."
                  ] }),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      className: "mt-4 inline-flex items-center text-sm font-semibold text-foreground/80 transition hover:text-foreground",
                      href: "docs/theme/",
                      children: "Docs"
                    }
                  )
                ] })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          "section",
          {
            id: "storybook",
            className: "scroll-mt-28 px-4 pb-20 pt-6 sm:px-6 lg:px-8",
            children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx(
              GlareHover,
              {
                width: "100%",
                height: "auto",
                background: "transparent",
                borderRadius: "24px",
                borderColor: "transparent",
                glareColor: "#ffffff",
                glareOpacity: 0.18,
                glareAngle: -20,
                glareSize: 300,
                transitionDuration: 1e3,
                className: "rounded-3xl",
                children: /* @__PURE__ */ jsxs("div", { className: "w-full rounded-3xl border border-border/60 bg-gradient-to-br from-background/80 via-muted/60 to-background/80 p-8 shadow-xl shadow-black/40", children: [
                  /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-foreground", children: "Storybook as a living demo" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-3 text-base text-muted-foreground", children: "Browse every renderer, theme, and sample questionnaire. Use the Storybook page as a living design system and QA checklist." }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap gap-4", children: [
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        className: "inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90",
                        href: "storybook/",
                        children: "Open Storybook"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        className: "inline-flex items-center rounded-full border border-border/70 bg-background/40 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-foreground/40",
                        href: "#themes",
                        children: "Browse themes"
                      }
                    )
                  ] })
                ] })
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsxs(
          "section",
          {
            id: "quickstart",
            className: "relative scroll-mt-28 border-y border-border/60 bg-muted/30 px-4 py-20 sm:px-6 lg:px-8",
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_55%)]",
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:140px_140px]",
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "container relative", children: [
                /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.4em] text-muted-foreground", children: "Quickstart" }),
                  /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl text-foreground", children: "From install to first render in four moves" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-3 text-base text-muted-foreground", children: "Install the renderer, choose a theme, and wire it to your Questionnaire data in minutes. A Theme object is required at render time." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]", children: [
                  /* @__PURE__ */ jsxs("div", { className: "relative space-y-6", children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "absolute left-4 top-5 hidden h-[calc(100%-2.5rem)] w-px bg-border/60 sm:block",
                        "aria-hidden": "true"
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-background/70 text-[0.65rem] font-semibold text-foreground", children: "01" }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1 rounded-2xl border border-border/60 bg-card/70 p-5 shadow-lg shadow-black/20", children: [
                        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Install" }),
                        /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-base text-foreground", children: "Install renderer + theme kit" }),
                        /* @__PURE__ */ jsx(
                          CodeBlock,
                          {
                            className: "mt-3",
                            html: '<pre class="shiki github-dark" tabindex="0"><code><span class="line"><span style="color:#B392F0">pnpm</span><span style="color:#9ECBFF"> add</span><span style="color:#9ECBFF"> @formbox/renderer</span><span style="color:#9ECBFF"> @formbox/hs-theme</span></span></code></pre>'
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-background/70 text-[0.65rem] font-semibold text-foreground", children: "02" }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1 rounded-2xl border border-border/60 bg-card/70 p-5 shadow-lg shadow-black/20", children: [
                        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Style" }),
                        /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-base text-foreground", children: "Include the theme CSS" }),
                        /* @__PURE__ */ jsx(
                          CodeBlock,
                          {
                            className: "mt-3",
                            html: '<pre class="shiki github-dark" tabindex="0"><code><span class="line"><span style="color:#F97583">import</span><span style="color:#9ECBFF"> "@formbox/hs-theme/style.css"</span><span style="color:#E1E4E8">;</span></span></code></pre>'
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-background/70 text-[0.65rem] font-semibold text-foreground", children: "03" }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1 rounded-2xl border border-border/60 bg-card/70 p-5 shadow-lg shadow-black/20", children: [
                        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Import" }),
                        /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-base text-foreground", children: "Import theme" }),
                        /* @__PURE__ */ jsx(
                          CodeBlock,
                          {
                            className: "mt-3",
                            html: '<pre class="shiki github-dark" tabindex="0"><code><span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> { theme } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "@formbox/hs-theme"</span><span style="color:#E1E4E8">;</span></span></code></pre>'
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-background/70 text-[0.65rem] font-semibold text-foreground", children: "04" }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1 rounded-2xl border border-border/60 bg-card/70 p-5 shadow-lg shadow-black/20", children: [
                        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Render" }),
                        /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-base text-foreground", children: "Render Questionnaire" }),
                        /* @__PURE__ */ jsx(
                          CodeBlock,
                          {
                            className: "mt-3",
                            html: '<pre class="shiki github-dark" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">&#x3C;</span><span style="color:#79B8FF">Renderer</span><span style="color:#B392F0"> questionnaire</span><span style="color:#F97583">=</span><span style="color:#E1E4E8">{questionnaire} </span><span style="color:#B392F0">theme</span><span style="color:#F97583">=</span><span style="color:#E1E4E8">{theme} /></span></span></code></pre>'
                          }
                        )
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border/60 bg-card/70 p-6 shadow-xl shadow-black/30", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Full sample" }),
                      /* @__PURE__ */ jsx("span", { className: "rounded-full border border-border/60 bg-muted/60 px-2 py-1 text-[0.65rem] font-semibold text-muted-foreground", children: "~5 min" })
                    ] }),
                    /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-lg text-foreground", children: "Ready-to-run snippet" }),
                    /* @__PURE__ */ jsx(
                      CodeBlock,
                      {
                        className: "mt-4",
                        html: '<pre class="shiki github-dark" tabindex="0"><code><span class="line"><span style="color:#F97583">import</span><span style="color:#9ECBFF"> "@formbox/hs-theme/style.css"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> { Renderer } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "@formbox/renderer"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> { theme } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "@formbox/hs-theme"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#E1E4E8">&#x3C;</span><span style="color:#79B8FF">Renderer</span><span style="color:#B392F0"> questionnaire</span><span style="color:#F97583">=</span><span style="color:#E1E4E8">{questionnaire} </span><span style="color:#B392F0">theme</span><span style="color:#F97583">=</span><span style="color:#E1E4E8">{theme} /></span></span></code></pre>'
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-3 sm:grid-cols-2", children: [
                      /* @__PURE__ */ jsx(
                        "a",
                        {
                          className: "inline-flex items-center justify-center rounded-full border border-border/70 bg-background/50 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-foreground/40",
                          href: "docs/",
                          children: "Read docs"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "a",
                        {
                          className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90",
                          href: "storybook/",
                          children: "Open Storybook"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mt-5 rounded-xl border border-border/60 bg-muted/50 p-4 text-xs text-muted-foreground", children: "Pair Storybook with your questionnaires to audit UI, accessibility, and validation rules before shipping." })
                  ] })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "section",
          {
            id: "community",
            className: "scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8",
            children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
              /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
                /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-foreground", children: "Open-source ready" }),
                /* @__PURE__ */ jsx("p", { className: "mt-3 text-base text-muted-foreground", children: "Built by the Formbox team and open to the community. File issues, propose improvements, or ship a new theme." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-10 grid gap-5 md:grid-cols-3", children: [
                /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-border/60 bg-card/70 p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxs(
                      "svg",
                      {
                        className: "h-7 w-7 text-foreground/70",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                          /* @__PURE__ */ jsx("circle", { cx: "6", cy: "6", r: "2" }),
                          /* @__PURE__ */ jsx("circle", { cx: "6", cy: "18", r: "2" }),
                          /* @__PURE__ */ jsx("circle", { cx: "18", cy: "18", r: "2" }),
                          /* @__PURE__ */ jsx("path", { d: "M6 8v6a4 4 0 0 0 4 4h6" }),
                          /* @__PURE__ */ jsx("path", { d: "M18 16v-2a4 4 0 0 0-4-4h-4" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground", children: "Contribute" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Review the codebase, open pull requests, and help shape the roadmap." })
                ] }),
                /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-border/60 bg-card/70 p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxs(
                      "svg",
                      {
                        className: "h-7 w-7 text-foreground/70",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                          /* @__PURE__ */ jsx("path", { d: "M9 7v4M15 7v4" }),
                          /* @__PURE__ */ jsx("path", { d: "M7 11h10v3a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-3z" }),
                          /* @__PURE__ */ jsx("path", { d: "M12 18v3" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground", children: "Integrate" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Embed the renderer in patient portals, provider dashboards, or EHR extensions." })
                ] }),
                /* @__PURE__ */ jsxs("article", { className: "rounded-2xl border border-border/60 bg-card/70 p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: "h-7 w-7 text-foreground/70",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: /* @__PURE__ */ jsx("path", { d: "M8 4h4a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v4h-2a2 2 0 0 0-2 2v2h-4a2 2 0 0 1-2-2v-2H6a2 2 0 0 1-2-2v-4h2a2 2 0 0 0 2-2V6a2 2 0 0 1 2-2z" })
                      }
                    ),
                    /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-foreground", children: "Extend" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Build custom themes or renderer overrides for unique clinical workflows." })
                ] })
              ] })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("footer", { className: "border-t border-border/70 px-4 py-12 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container text-sm text-muted-foreground", children: /* @__PURE__ */ jsxs("p", { children: [
        "Formbox Renderer is an MIT-licensed project by Health Samurai. View the source on",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "text-foreground transition hover:text-primary",
            href: "https://github.com/HealthSamurai/formbox-renderer",
            children: "GitHub"
          }
        ),
        " ",
        "or explore the",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "text-foreground transition hover:text-primary",
            href: "storybook/",
            children: "Storybook demo"
          }
        ),
        "."
      ] }) }) })
    ] })
  ] });
}
export {
  Landing as default
};
