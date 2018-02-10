# @wearegenki/animate

[![Greenkeeper badge](https://badges.greenkeeper.io/WeAreGenki/animate.svg)](https://greenkeeper.io/)

Lightweight library for complex web animations.

## Overview

This is a wrapper for the excellent [Animate Plus](https://github.com/bendc/AnimatePlus) but transplied to more compatible code (no async/await etc.).

## Usage

### Install

```shell
yarn add @wearegenki/animate
# OR
npm install @wearegenki/animate
```

### Import and use

```javascript
import animate from '@wearegenki/animate';

animate({
  elements: 'div',
  duration: 2000,
  delay: index => index * 100,
  transform: ['scale(0)', 'scale(1)']
})
.then(options => animate({
  ...options,
  transform: ['translate(0%)', 'translate(500%)']
}));
```

See the [Animate Plus documentation](https://github.com/bendc/AnimatePlus) for API usage information.

## Licence

`@wearegenki/animate` is an Apache-2.0 licensed open source project. See [LICENCE](https://github.com/WeAreGenki/animate/blob/master/LICENCE).

-----

© 2018 [We Are Genki](https://wearegenki.com)
