# 🌨️ react-snow-overlay

![](https://raw.githubusercontent.com/C-o-d-e-C-o-w-b-o-y/react-snow-overlay/refs/heads/main/react-snow-overlay.webp)

## DEMO: [LINK](https://c-o-d-e-c-o-w-b-o-y.github.io/react-snow-overlay/docs/playground)

## DOCS: [LINK](https://c-o-d-e-c-o-w-b-o-y.github.io/react-snow-overlay/docs/installation)

### Installation

```bash
npm install react-snow-overlay
```

### Usage

```jsx
import { SnowOverlay } from 'react-snow-overlay';

<SnowOverlay />;
```

### Props

| Name                         | Type                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `maxParticles`               | `number`                          | The maximum number of snow particles displayed on the screen at once. Default is `50`                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `color`                      | `string`                          | The color of the snow particles. Default is `rgba(255, 255, 255, 0.8)`                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `speed`                      | `"DEFAULT" \| "FAST" \| "FASTER"` | Speed at which snow particles fall down the screen                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `zIndex`                     | `number`                          | The `z-index` of the `canvas`. Default is `2147483647` (`2^31 - 1`, max signed 32-bit integer)                                                                                                                                                                                                                                                                                                                                                                                                         |
| `disabled`                   | `boolean`                         | Disables the snow effect                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `disabledOnSingleCpuDevices` | `boolean`                         | Disables the snow effect on devices with a single CPU core available to them. This prop exists because the premise of this library is to put the snow-painting logic onto a seperate thread other than the main one to keep the rest of your site running smoothly. However, some devices/browsers may only have one CPU core, making this impossible. This prop prevents snow being shown on such devices as it may cause performance issues. Default is `false` but I recommend you set it to `true` |
