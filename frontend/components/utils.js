import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import * as yup from "yup"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const currentYear = new Date().getFullYear();

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



export const defaultValues = {
  standard: false,
      a:'',
      b:'',
      c:'',
      year:2023,
      make:'',
      model:'',
      doors:'2door',
      class:'mid',
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

export const yupSchema = yup
.object().shape({
  standard: yup.boolean(),
  a: yup.string()
  .when('standard', {
    is: false,
    then: yupSchema => yupSchema.required("Please enter a value"),
    otherwise: yupSchema => yupSchema.notRequired()
  }),  
  b: yup.string().when('standard', {
    is: false,
    then: yupSchema => yupSchema.required("Please enter a value"),
    otherwise: yupSchema => yupSchema.notRequired()
  }),  
  c: yup.string().when('standard', {
    is: false,
    then: yupSchema => yupSchema.required("Please enter a value"),
    otherwise: yupSchema => yupSchema.notRequired()
  }),  
  year: yup.number().when('standard', {
    is: false,
    then: yupSchema => yupSchema.required().min(1950, "Please choose a year after 1949").max(currentYear + 1, "Please choose a year before " + (currentYear + 2)),
    otherwise: yupSchema => yupSchema.notRequired()
  }),  
  make: yup.string().when('standard', {
    is: false,
    then: yupSchema => yupSchema.required(),
    otherwise: yupSchema => yupSchema.notRequired()
  }),  
  model: yup.string().when('standard', {
    is: false,
    then: yupSchema => yupSchema.required(),
    otherwise: yupSchema => yupSchema.notRequired()
  }),  
  doors: yup.string().when('standard', {
    is: false,
    then: yupSchema => yupSchema.required(),
    otherwise: yupSchema => yupSchema.notRequired()
  }),  
  class: yup.string().when('standard', {
    is: false,
    then: yupSchema => yupSchema.required(),
    otherwise: yupSchema => yupSchema.notRequired()
  }),  
  customText: yup.boolean(),
  customTextField: yup.string().when('customText', {
    is: true,
    then: yupSchema => yupSchema.required(),
    otherwise: yupSchema => yupSchema.notRequired()
  }),
  business: yup.boolean(),
  logo: yup.boolean(),
  businessName: yup.string().when('business', {
    is: true,
    then: yupSchema => yupSchema.required(),
    otherwise: yupSchema => yupSchema.notRequired()
  }),
  slogan: yup.string().notRequired(),
  city: yup.string().notRequired(),
  state: yup.string().notRequired(),
  phone: yup.string().notRequired(),
  website: yup.string().notRequired(),
})