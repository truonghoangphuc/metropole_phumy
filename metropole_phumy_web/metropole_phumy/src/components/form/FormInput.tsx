import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { InputType } from "./config";
import { Media } from "../media";
import { ChangeEvent, FocusEvent } from "react";

export const checkValid = (e:HTMLInputElement|HTMLTextAreaElement) => {
  e.checkValidity();
  if (e.validity.valid) {
    e.closest('.form-control')?.classList.remove('invalid');
  } else {
    e.closest('.form-control')?.classList.add('invalid');
  }
}

export function RenderFormInput(props: InputType) {
  const {Label, Require, RequireMessage, RegExpValidation, ErrorMessage, Type, CSS, Value, Icon, Checked, Selected, Name, id} = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      e.target.classList.add('has-value');
    } else {
      e.target.classList.remove('has-value');
    }
    checkValid(e.target)
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    checkValid(e.target)
  }

  return (
    <div className={`form-control ${CSS || ''}`}>
      {
        Icon && (
          <span className="ico">
            <Media resource={Icon}></Media>
          </span>
        )
      }
      <label htmlFor={id}>{Label}</label>
      <Input onBlur={handleBlur} onChange={handleChange} name={Name} id={id} type={Type} className={CSS} {...Type.toLowerCase() === 'radio' || Type.toLowerCase() === 'checkbox' ? {value:Value}:{defaultValue:Value}} required={Require || false} {...Checked ? {defaultChecked:Checked} : {}} {...Selected ? {defaultChecked:Selected} : {}} {...RegExpValidation ? {pattern:RegExpValidation}:{}} autoComplete="autocomplete"/>
      <div className="invalid-message">
        <p className="invalid-require">{RequireMessage}</p>
        <p className="invalid-error">{ErrorMessage}</p>
      </div>
    </div>
  )
}

export function RenderFormTextArea(props: InputType) {
  const {Label, Require, RequireMessage, RegExpValidation, ErrorMessage, CSS, Icon, id, Name} = props;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value) {
      e.target.classList.add('has-value');
    } else {
      e.target.classList.remove('has-value');
    }
    checkValid(e.target)
  }

  const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    checkValid(e.target)
  }

  return (
    <div className={`form-control ${CSS || ''}`}>
      {
        Icon && (
          <span className="ico">
            <Media resource={Icon}></Media>
          </span>
        )
      }
      <label htmlFor={id}>{Label}</label>
      <textarea onBlur={handleBlur} onChange={handleChange} name={Name} id={id} required={Require || false} {...RegExpValidation ? {pattern:RegExpValidation}:{}}></textarea>
      <div className="invalid-message">
        <p className="invalid-require">{RequireMessage}</p>
        <p className="invalid-error">{ErrorMessage}</p>
      </div>
    </div>
  )
}

export function RenderFormSelect(props: InputType) {
  const {Type, CSS, Value, Options, id, Icon, Name } = props;

  return (
    <div className={`form-control ${CSS || ''}`}>
      <Select value={Value} name={Name}>
        <SelectTrigger className={`form-${Type.toLowerCase()} ${CSS || ''}`}>
          {
            Icon && (
              <span className="ico">
                <Media resource={Icon}></Media>
              </span>
            )
          }
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          {
            Options && Options.map((option, index) => (
              <SelectItem value={option.Value} key={`${id}_${index}`}>{option.Title}</SelectItem>
            ))
          }
        </SelectContent>
      </Select>
    </div>
  )
}