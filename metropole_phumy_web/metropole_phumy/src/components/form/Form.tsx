'use client'

import { FormEvent, JSX } from "react";
import { FormType } from "./config";
import { checkValid, RenderFormInput, RenderFormSelect, RenderFormTextArea } from "./FormInput";

import '../../assets/styles/components/form.css';

export function FormClient(props: FormType) {

  const renderInput = (form: FormType) => {
    const output: JSX.Element[] = [];
    form.Inputs.map((el) => {
      switch (el.Type) {
        case "textarea":
          output.push(<RenderFormTextArea key={el.id} {...el}></RenderFormTextArea>)
          break
        case "select":
          output.push(<RenderFormSelect key={el.id} {...el}></RenderFormSelect>)
          break
        default:
          output.push(<RenderFormInput key={el.id} {...el}></RenderFormInput>)
          break
      }
    })
    return output;
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(e);
    const form = e.target as HTMLFormElement;
    e.preventDefault();
    console.log(form.elements);
    [...form.elements].forEach(element => {
      if (
        element instanceof HTMLInputElement ||
        element instanceof HTMLTextAreaElement
      ) {
        checkValid(element);
      }
    });
    return false;
  }
  
  return (
    <form className="form" name={props.Name} noValidate onSubmit={handleSubmit}>
      {
        renderInput(props)
      }
      <div className="command basis-full">
        <button className="btn btn-primary w-full uppercase font-bold" type="submit"><span>{props.Submit}</span></button>
      </div>
    </form>
  )
}