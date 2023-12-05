import type { ProvidePayload } from "./types";
import type { InjectionKey } from "vue";

export const carouselInjectionKey: InjectionKey<ProvidePayload> = Symbol("carousel-injection-key");
