import {
    getShaderColorFromString,
    getShaderNoiseTexture,
    grainGradientFragmentShader,
    GrainGradientShapes,
    halftoneCmykFragmentShader,
    HalftoneCmykTypes,
    ShaderFitOptions,
    ShaderMount,
} from "@paper-design/shaders";
import botanicalImageUrl from "../assets/home-botanical.webp";

const artContainer = document.getElementById("home-halftone");
const grainContainer = document.getElementById("home-copy-grain");
const titleGrainContainer = document.getElementById("home-title-grain");
const shadersEnabled = !window.matchMedia("(max-width: 760px)").matches;

if (shadersEnabled && artContainer && grainContainer && titleGrainContainer) {
    const image = new Image();
    image.decoding = "async";
    image.src = botanicalImageUrl;

    const noiseTexture = getShaderNoiseTexture();
    const settings = {
        art: { size: 0.8, gridNoise: 0.46, scale: 0.96, offsetX: -0.02, offsetY: 0 },
        grain: { shape: GrainGradientShapes.ripple, softness: 0.88, intensity: 0.38, noise: 0.7, rotation: -4 },
    };

    const whenLoaded = (source) =>
        new Promise((resolve, reject) => {
            if (source.complete && source.naturalWidth > 0) {
                resolve(source);
                return;
            }

            source.addEventListener("load", () => resolve(source), { once: true });
            source.addEventListener("error", reject, { once: true });
        });

    const cssColor = (property, alpha) => {
        const parsed = getShaderColorFromString(
            getComputedStyle(document.documentElement)
                .getPropertyValue(property)
                .trim()
        );

        return alpha === undefined
            ? parsed
            : [parsed[0], parsed[1], parsed[2], alpha];
    };

    const artPalette = () => ({
        u_colorBack: cssColor("--paper"),
        u_colorC: cssColor("--ink-faint"),
        u_colorM: cssColor("--accent"),
        u_colorY: cssColor("--rule"),
        u_colorK: cssColor("--ink"),
    });

    const grainPalette = () => ({
        u_colorBack: cssColor("--paper", 0),
        u_colors: [
            cssColor("--paper", 0.98),
            cssColor("--paper-raised", 0.93),
            cssColor("--paper", 0.72),
        ],
        u_colorsCount: 3,
    });

    Promise.all([whenLoaded(image), whenLoaded(noiseTexture)])
        .then(() => {
            const artShader = new ShaderMount(
                artContainer,
                halftoneCmykFragmentShader,
                {
                    u_image: image,
                    u_noiseTexture: noiseTexture,
                    ...artPalette(),
                    u_type: HalftoneCmykTypes.ink,
                    u_size: settings.art.size,
                    u_contrast: 0.9,
                    u_softness: 0,
                    u_grainSize: 0.01,
                    u_grainMixer: 0.035,
                    u_grainOverlay: 0.08,
                    u_gridNoise: settings.art.gridNoise,
                    u_floodC: 0.12,
                    u_floodM: 0,
                    u_floodY: 0,
                    u_floodK: 0,
                    u_gainC: 0.62,
                    u_gainM: 0.56,
                    u_gainY: -0.7,
                    u_gainK: -0.08,
                    u_fit: ShaderFitOptions.cover,
                    u_scale: settings.art.scale,
                    u_rotation: 0,
                    u_offsetX: settings.art.offsetX,
                    u_offsetY: settings.art.offsetY,
                    u_originX: 0.5,
                    u_originY: 0.5,
                    u_worldWidth: 0,
                    u_worldHeight: 0,
                },
                undefined,
                0,
                0,
                1,
                1920 * 1080 * 2,
                ["u_image"]
            );

            const grainShader = new ShaderMount(
                grainContainer,
                grainGradientFragmentShader,
                {
                    u_noiseTexture: noiseTexture,
                    ...grainPalette(),
                    u_softness: settings.grain.softness,
                    u_intensity: settings.grain.intensity,
                    u_noise: settings.grain.noise,
                    u_shape: settings.grain.shape,
                    u_fit: ShaderFitOptions.cover,
                    u_scale: 1,
                    u_rotation: settings.grain.rotation,
                    u_offsetX: 0,
                    u_offsetY: 0,
                    u_originX: 0.5,
                    u_originY: 0.5,
                    u_worldWidth: 0,
                    u_worldHeight: 0,
                },
                undefined,
                0,
                0,
                1,
                1920 * 1080,
                []
            );

            const titleGrainShader = new ShaderMount(
                titleGrainContainer,
                grainGradientFragmentShader,
                {
                    u_noiseTexture: noiseTexture,
                    ...grainPalette(),
                    u_softness: settings.grain.softness,
                    u_intensity: Math.max(settings.grain.intensity - 0.04, 0),
                    u_noise: settings.grain.noise,
                    u_shape: settings.grain.shape,
                    u_fit: ShaderFitOptions.cover,
                    u_scale: 0.82,
                    u_rotation: settings.grain.rotation + 7,
                    u_offsetX: -0.04,
                    u_offsetY: 0.03,
                    u_originX: 0.5,
                    u_originY: 0.5,
                    u_worldWidth: 0,
                    u_worldHeight: 0,
                },
                undefined,
                0,
                0,
                1,
                1920 * 1080,
                []
            );

            artContainer.classList.add("is-rendered");

            const themeObserver = new MutationObserver(() => {
                artShader.setUniforms(artPalette());
                grainShader.setUniforms(grainPalette());
                titleGrainShader.setUniforms(grainPalette());
            });
            themeObserver.observe(document.documentElement, {
                attributeFilter: ["data-theme"],
            });

            window.addEventListener(
                "pagehide",
                () => {
                    themeObserver.disconnect();
                    artShader.dispose();
                    grainShader.dispose();
                    titleGrainShader.dispose();
                },
                { once: true }
            );
        })
        .catch((error) => {
            console.warn("The homepage shaders could not be rendered.", error);
        });
}
