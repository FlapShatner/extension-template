import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function getYears() {
    const currentYear = new Date().getFullYear();
    const years = [];

    for (let year = currentYear + 1; year >= 1950; year--) {
        years.push(year);
    }

    return years;
}
