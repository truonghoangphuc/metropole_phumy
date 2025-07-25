'use client'

import { FormEvent, JSX, useState } from "react";
import { XIcon } from "lucide-react";
import { FormType } from "./config";
import { checkValid, RenderFormInput, RenderFormSelect, RenderFormTextArea } from "./FormInput";

import '../../assets/styles/components/form.css';
import { Media } from "../media";
import { Spinner } from "../ui/spinner";
import { API_URL } from "@/utilities/constant";

const staticFields = ['Fullname', 'UserType', 'Phone', 'Email', 'Trading', 'Company', 'Position', 'Message'];

export function FormClient(props: FormType) {
  const [loading, setLoading] = useState(false);

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

  const submitForm = async (form: HTMLFormElement) => {

    try {
      const data: Record<string, string> = {};
      const fields: Record<string, string> = {};
      
      [...form.elements].map((element) => {
        const name = element.getAttribute('name');
        if (name !== null) {
          if (
            element instanceof HTMLInputElement ||
            element instanceof HTMLTextAreaElement ||
            element instanceof HTMLSelectElement
          ) {
            console.log(staticFields.indexOf(name));
            if (element.type === 'radio') {
              if (element instanceof HTMLInputElement && element.checked) {
                if (staticFields.indexOf(name) < 0) {
                  fields[name] = element.value;
                } else {
                  data[name] = element.value;
                }
              }
            } else {
              if (staticFields.indexOf(name) < 0) {
                fields[name] = element.value;
              } else {
                data[name] = element.value;
              }
            }
          }
        }
      });

      const requestBody = {
        Name: form.name,
        ...data,
        Fields: fields
      }
      
      const response = await fetch(`${API_URL}/api/form-submissions`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({data:requestBody})
      });
      const result = await response.json();

      console.log(result);
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }

  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.target as HTMLFormElement;
    e.preventDefault();

    [...form.elements].forEach(element => {
      if (
        element instanceof HTMLInputElement ||
        element instanceof HTMLTextAreaElement
      ) {
        checkValid(element);
      }
    });


    if (form.checkValidity()) {
      setLoading(true);

      submitForm(form);
    }

    return false;
  }

  const closePopup = () => {
    const overlay = document.querySelector('.popup-overlay');
    const form = document.querySelector('.form-overlay.in-popup');
    overlay?.setAttribute('data-state','closed');
    form?.classList.remove('in-popup');
    document.body.classList.remove('open-popup');
    overlay?.remove();
  }
  
  return (
    <>
      <button className="hidden form-close" onClick={closePopup}>
        <XIcon className="size-6" />
        <span className="sr-only">Close</span>
      </button>
      <form className="form" name={props.Name} noValidate onSubmit={handleSubmit}>
        {
          renderInput(props)
        }
        <div className="docs">
          {
            props.DocumentText && (
              <p className="title text-sm font-medium uppercase text-primary leading-normal mb-2">{props.DocumentText}</p>
            )          
          }
          {
            props.DocumentLogos && (
              props.DocumentLogos.map((logo) => <Media key={logo.id} resource={logo}/>)
            )
          }
        </div>
        <div className="command basis-full">
          <button className={`btn btn-primary w-full uppercase font-bold stroke-white ${loading ? 'loading relative pointer-events-none':''}`} type="submit">
            {
              loading ? <Spinner/> : ''
            }
            <span className={loading ? 'disabled':''}>{props.Submit}</span>
          </button>
        </div>
      </form>
    </>
  )
}