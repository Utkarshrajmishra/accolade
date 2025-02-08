import { cn } from "@/lib/util"

type Props={
    className?:string,
    children:React.ReactNode
}

const Wrapper=({children,className}:Props)=>{
        return(
            <div className={cn("size-full mx-auto max-w-6xl px-4 md:px-16 ", className)}>
                {children}
            </div>
        )
}
export default Wrapper