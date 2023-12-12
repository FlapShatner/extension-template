import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const currentYear = new Date().getFullYear();

export function getYears() {    
    const years = [];

    for (let year = currentYear + 1; year >= 1950; year--) {
        years.push(year);
    }

    return years;
}

export function formatPhoneNumber(phoneNumber) {
    // Remove all non-numeric characters
    let digits = phoneNumber.replace(/\D/g, '');

    // Format the digits based on their length
    if (digits.length > 6) {
        digits = digits.substring(0, 10); // Ensure not more than 10 digits
        return `(${digits.substring(0, 3)}) ${digits.substring(3, 6)}-${digits.substring(6)}`;
    } else if (digits.length > 3) {
        return `(${digits.substring(0, 3)}) ${digits.substring(3)}`;
    } else if (digits.length > 0) {
        return `(${digits}`;
    } else {
        return '';
    }
}

export function checkABCErrors(errors) {
  if (errors.a || errors.b || errors.c) {
    return true;
  } else {
    return false;
  }
}



export const defaultValues = {
  standard: false,
      a:'',
      b:'',
      c:'',
      year:2023,
      make:'',
      model:'',
      doors:'2DOOR',
      class:'MIDSIZE',
      customText:false,
      customTextField:'',
      business:false,
      logo:false,
      businessName:'',
      slogan:'',
      city:'',
      state:'',
      phone: '',
      website:''
}

