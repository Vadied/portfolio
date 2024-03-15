import it from "./it";
import en from "./en";
import { ITranslation } from "@/types";

const translations = { it: it, en: en };

export default translations as { [key: string]: ITranslation };
