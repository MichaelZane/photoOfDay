
export function GetCurrentDate() {
  const currentDate = new Date()
  let dd = currentDate.getDate()
  let mm = currentDate.getMonth() + 1
  let yyyy = currentDate.getFullYear();
  const end = String(yyyy) + '-' + String(mm) + '-' + String(dd)
  return end
  
}