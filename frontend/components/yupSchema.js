import * as yup from "yup"
import { currentYear } from "./utils"

export const yupSchema = yup
.object().shape({
  standard: yup.boolean(),
  a: yup.string()
  .when('standard', {
    is: false,
    then: yupSchema => yupSchema.required(),
    otherwise: yupSchema => yupSchema.notRequired()
  }),  
  b: yup.string().when('standard', {
    is: false,
    then: yupSchema => yupSchema.required(),
    otherwise: yupSchema => yupSchema.notRequired()
  }),  
  c: yup.string().when('standard', {
    is: false,
    then: yupSchema => yupSchema.required(),
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
    then: yupSchema => yupSchema.required("Please enter your custom text"),
    otherwise: yupSchema => yupSchema.notRequired()
  }),
  business: yup.boolean(),
  logo: yup.boolean(),
  businessName: yup.string().when('business', {
    is: true,
    then: yupSchema => yupSchema.required("Please enter your business name"),
    otherwise: yupSchema => yupSchema.notRequired()
  }),
  slogan: yup.string().notRequired(),
  city: yup.string().notRequired(),
  state: yup.string().notRequired(),
  phone: yup.string().notRequired(),
  website: yup.string().notRequired(),
})