import type { NavigationGuardWithThis } from "vue-router";
export const testGuard: NavigationGuardWithThis<
  undefined
> = async () => {
  return true;
};
