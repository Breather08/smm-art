import type { InputTypeHTMLAttribute } from "vue";

export interface InputData {
  model: string;
  label: string;
  required?: boolean;
  type?: InputTypeHTMLAttribute;
}
