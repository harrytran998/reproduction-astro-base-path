import {
  defineConfig, presetUno, transformerCompileClass, transformerDirectives,
  transformerVariantGroup
} from 'unocss';

export default defineConfig({
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerCompileClass()
  ],
  presets: [
    presetUno(),
  ]
});
