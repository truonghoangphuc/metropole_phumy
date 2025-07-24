import { cn } from "@/utilities/cn"
import { Loader2 } from "lucide-react"

export const Spinner = ({ className }: { className?: string }) => {


  return <Loader2 className={cn('absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 animate-spin stroke-inherit', className || '')}/>
}