import { onlineSchools } from "./online-schools";
import { partnerTraining } from "./partner-training";
import { cbtCenter } from "./cbt-center";
import type { UseCaseData, OnlineSchoolsData } from "../types";

export const useCases: Record<string, UseCaseData | OnlineSchoolsData> = {
  "online-schools": onlineSchools,
  "partner-training": partnerTraining,
  "cbt-center": cbtCenter,
};

export const useCaseSlugs = Object.keys(useCases);

export { onlineSchools, partnerTraining, cbtCenter };
