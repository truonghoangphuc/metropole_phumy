'use client'
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { API_URL } from "@/utilities/constant";
import { Spinner } from "@/components/ui/spinner";

export function FormSubscribe (props: {text:string, button:string}) {

  const [loading, setLoading] = useState(false);
  
  const submitForm = async (form: HTMLFormElement) => {

    try {
      const data: Record<string, string> = {};
      
      [...form.elements].map((element) => {
        const name = element.getAttribute('name');
        if (name !== null) {
          if (
            element instanceof HTMLInputElement
          ) {
            data[name] = element.value;
          }
        }
      });

      const requestBody = {
        ...data,
        Active: true,
        SubscriberToken: `${new Date()}`
      }
      
      const response = await fetch(`${API_URL}/api/subscribers`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({data:requestBody})
      });
      const result = await response.json();

      if (result.data) {
        form.reset();
      }
      
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }

  }

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    const form = e.target as HTMLFormElement;
    e.preventDefault();

    if (form.checkValidity()) {
      setLoading(true);

      submitForm(form);
    }

    return false;
  }

  return (
    <form className="form-subscribe" name="Subscriber" onSubmit={handleSubscribe}>
      <input placeholder={props.text} type="email" name="Email" required={true}/>
      <Button type="submit" size={"large"} className={`btn bg-white w-full uppercase stroke-white ${loading ? 'loading relative pointer-events-none':''}`}>{
          loading ? <Spinner/> : ''
        }
        <span className={loading ? 'disabled':''}>{props.button}</span></Button>
    </form>
  )
}