import type { Opportunity, OpportunityKey } from "./types";
import content_ideas from "@/assets/landing/img/content_ideas.png";
import gen_text from "@/assets/landing/img/gen_text.png";
import gen_img from "@/assets/landing/img/gen_img.png";
import share_result from "@/assets/landing/img/share_result.png";
import custom_tasks from "@/assets/landing/img/custom_tasks.png";
import project_management from "@/assets/landing/img/project_management.png";

export const opportunities: Opportunity[] = [
  {
    key: "content_ideas",
    img: content_ideas,
    title: "Идеи для контент-плана",
    shortDescription: "Создавайте идеи для будущих постов в соцсетях",
    fullDescription:
      "Уникальная матрица SMMart, анализируя актуальные тенденции и специфику твоей ниши, предлагает релевантные и интересные темы под разные типы контента. Забудь о творческом кризисе — ты получишь идеи на месяцы вперёд!",
  },
  {
    key: "gen_text",
    img: gen_text,
    title: "Генерация текста",
    shortDescription: "Профессиональный текст - залог Вашего успеха в соцсетях",
    fullDescription:
      "Благодаря глубокому обучению языковой модели на огромных массивах данных из соцсетей, SMMart пишет оптимизированные, живые и убедительные посты. При этом ты всегда можешь настроить стиль и тон сообщения, повышая его уникальность и соответствие голосу твоего бренду.",
  },
  {
    key: "gen_img",
    img: gen_img,
    title: "Генерация изображений",
    shortDescription: "Изображения, которые идеально будут подходить к Вашим постам",
    fullDescription:
      "Продвинутые алгоритмы SMMart обеспечивают создание детализированных, стильных, запоминающихся картинок и фотографий к постам. С улучшенными настройками формата и стиля изображений ты можешь придать своему контенту именно тот вид, который больше понравится твоей аудитории.",
  },
  {
    key: "pm",
    img: project_management,
    title: "Управление проектами",
    shortDescription: "Раздел, в котором удобно можете управлять своими проектами",
    fullDescription:
      "Вы получите удобную страницу с Вашими проектами. Оформляйте проекты, загружайте логотип компании, напишите название.",
  },
  {
    key: "share_result",
    img: share_result,
    title: "Делитесь результатом",
    shortDescription: "Делитесь результатом удобно, прямо с приложения",
    fullDescription:
      "Копируйте текст, делитесь картинками для постов для из приложения! Удобство работы между приложениями в SMM-art",
  },
  {
    key: "custom_tasks",
    img: custom_tasks,
    title: "Свои задания",
    shortDescription: "Удобный раздел для расширения возможностей приложения",
    fullDescription:
      "Удобный раздел для расширения возможностей приложения. Дайте свое задание, и наш бот выдаст Вам лучший результат!",
  },
];

export const leftSideKeys: OpportunityKey[] = ["gen_text", "pm", "custom_tasks"];
export const rightSideKeys: OpportunityKey[] = ["content_ideas", "gen_img", "share_result"];
