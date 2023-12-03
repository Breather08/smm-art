import { Ref, VNode } from "vue";

export interface ProvidePayload {
  count: Ref<number>;
  setActive: (i: number, slot: VNode) => void;
  incrementCount: () => void;
}
