import type { InjectionKey } from "vue";
import type { ProvidePayload } from "./types";

export const menuInjectionKey: InjectionKey<ProvidePayload> = Symbol("menu-injection-key");
