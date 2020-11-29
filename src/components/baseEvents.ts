import { btnHover, btnLeave } from './baseStyles'

export const baseBtnEvents = {
  on: {
    mouseover() {
      btnHover(this);
    },
    mouseleave() {
      btnLeave(this);
    },
  },
};