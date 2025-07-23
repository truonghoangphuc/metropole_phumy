import { BaseDoc, BlockSettingData, ColorSetting, HeadingData } from "@/types/doc";
import { Media } from "@/types/media";

export interface Option {
  Title: string,
  Value: string
}

export interface InputType {
  id:string,
  Label: string,
  Name: string,
  Type: 'text' | 'textarea' | 'checkbox' | 'radio' | 'select' | 'email' | 'tel' | 'number',
  Value: string,
  Options?: Option[],
  Checked?: boolean,
  Selected?: boolean,
  Icon: Media,
  CSS: string,
  Require: boolean,
  RegExpValidation: string,
  RequireMessage: string,
  ErrorMessage: string,
}

export interface FormType {
  Inputs: InputType[],
  Submit: string,
  Name: string,
  Setting: ColorSetting,
  DocumentText: string,
  DocumentLogos: Media[]
}

export interface BlockForm extends BaseDoc {
  Heading: HeadingData,
  SubHeading: HeadingData,
  Setting: BlockSettingData,
  Form: FormType
}