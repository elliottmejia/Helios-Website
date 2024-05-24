import { atom } from "nanostores";

export const $activeAboutItem = atom(0);

function setActiveAboutItem(val) {
  $activeAboutItem.set(val);
}