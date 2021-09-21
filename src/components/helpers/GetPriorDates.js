import { GetCurrentDate } from "./GetCurrentDate";

export function GetPriorDates() {
  const priorDates = new Date(GetCurrentDate())
  priorDates.setDate(priorDates.getDate() - 3)
  let priorDD = priorDates.getDate();
  let priorMM = priorDates.getMonth() + 1
  let priorYYYY = priorDates.getFullYear()
  const start = String(priorYYYY) + '-' + String(priorMM) + '-' + String(priorDD)
  return start
}