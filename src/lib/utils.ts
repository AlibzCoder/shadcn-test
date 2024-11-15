import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function fetchData(url : string) : Promise<object | Array<any> | any>{
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (res, rej)=>{
    try {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      res(json)
    } catch (error) {
      rej(error)
    }
  })
}