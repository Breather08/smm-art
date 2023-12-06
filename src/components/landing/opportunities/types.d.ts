export type OpportunityKey =
  | "content_ideas"
  | "gen_text"
  | "gen_img"
  | "pm"
  | "share_result"
  | "custom_tasks";

export interface Opportunity {
  key: OpportunityKey;
  img: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
}
