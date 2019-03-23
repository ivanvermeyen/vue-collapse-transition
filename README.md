# Vue Collapse Transition

[![Vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![Version](https://img.shields.io/npm/v/@ivanv/vue-collapse-transition.svg)](https://npmjs.com/package/@ivanv/vue-collapse-transition)
[![Downloads](https://img.shields.io/npm/dt/@ivanv/vue-collapse-transition.svg)](https://npmjs.com/package/@ivanv/vue-collapse-transition)
[![License](https://img.shields.io/npm/l/@ivanv/vue-collapse-transition.svg)](https://choosealicense.com/licenses/mit/)

##### This custom [VueJS]([https://vuejs.org](https://vuejs.org/)) transition component wraps the built-in `transition`. It collapses elements horizontally or vertically. *Works with both fixed and 'auto' width or height!*

## 👁 Demo

You can find a quick demo to play with on [CodePen](https://codepen.io/ivanvermeyen/pen/LaXJKa).

## 📦 Install

Using NPM:

```bash
npm i @ivanv/vue-collapse-transition
```

Via CDN:

```html
<script src="https://unpkg.com/@ivanv/vue-collapse-transition"></script>
```

## 🛠 Usage

Wrap the container you wish to make collapsable with the `<collapse-transition>` tag.

When you toggle the `v-show` boolean value, the transition will automatically trigger.

```vue
<template>
  <div>
    <button @click="isOpen = !isOpen">
      Toggle
    </button>
    
    <collapse-transition>
      <div v-show="isOpen">
        This div will open and close smoothly!
      </div>
    </collapse-transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOpen = false, // closed by default
      }
    }
  }
</script>
```

It's up to you how you want to position the collapsable element with CSS.

## ⚙️ Options

#### ☑️ Collapse Vertically or Horizontally

Set the `dimension` attribute to `height` or `width`.

Default: `height`

```vue
<collapse-transition dimension="height">
  <!-- ... -->
</collapse-transition>
```

#### ☑️ Class Names

Vue will also set the usual [transition classes](<https://vuejs.org/v2/guide/transitions.html#Transition-Classes>). By default, the transition `name` is `collapse`, so the classes would be like `collapse-enter` and `collapse-leave-to`. You can choose another name if you wish.

```vue
<collapse-transition name="slide">
  <!-- ... -->
</collapse-transition>
```

#### ☑️ Transition Duration

How long should the transition take in milliseconds.

Default: `300`

```vue
<collapse-transition :duration="300">
  <!-- ... -->
</collapse-transition>
```

#### ☑️ Transition Easing

The CSS [transition-timing-function](<https://css-tricks.com/almanac/properties/t/transition-timing-function/>) (easing) to use.

Default: `ease-in-out`

```vue
<collapse-transition easing="ease-in-out">
  <!-- ... -->
</collapse-transition>
```

## ☕️ Credits

- [Ivan Vermeyen](https://byterider.io)
- [All contributors](../../contributors)

## 🔓 Security

If you discover any security related issues, please [e-mail me](mailto:ivan@codezero.be) instead of using the issue tracker.

## 📑 Changelog

See a list of important changes in the [changelog](CHANGELOG.md).

## 📜 License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
