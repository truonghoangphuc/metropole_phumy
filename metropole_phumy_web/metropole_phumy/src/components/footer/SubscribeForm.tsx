'use client'
import { Button } from "../ui/button";



export function FormSubscribe (props: {text:string, button:string}) {

  const handleSubscribe = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }

  return (
    <form className="form-subscribe">
      <input placeholder={props.text} type="email"/>
      <Button size={"large"} className="btn bg-white uppercase" onClick={handleSubscribe}>{props.button}</Button>
    </form>
  )
}