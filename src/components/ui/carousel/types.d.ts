import { Ref } from "vue";

export interface ProvidePayload {
  width: Ref<number>;
  incrementCount: () => void;
}
