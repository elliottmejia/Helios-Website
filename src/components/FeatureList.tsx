interface Props{
    title: string;
    description: string;
    checklist: string[][];
    gradient?: string[] | undefined;
}

export default function FeatureList(props:Props) {
    const checklistLeft = props.checklist.slice(0, props.checklist.length / 2);
    const checklistRight = props.checklist.slice(props.checklist.length / 2);
    return (
      <section className="w-full pb-12 md:pb-16">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className={`flex w-fit flex-col rounded-lg mx-auto items-center justify-center space-y-4 text-center p-8 
            ${props.gradient != undefined && 'bg-gradient-to-br from-' + props.gradient[0] + ' to-' + props.gradient[1] }
          `}>
          
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{props.title}</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {props.description}
              </p>
            </div>
            <div className="flex gap-2 md:gap-16 w-full mx-auto justify-center ">
                <ul className="grid gap-2 py-4">
                    {checklistLeft.map((item, index) => { 
                        return (
                            <li key={index} className={`flex items-center gap-2 ${item[1]}`}>
                                <IconCheck className={ `mr-2 h-4 w-4`} />
                                {item[0]}
                            </li>
                        )
                    })}
                </ul>
                <ul className="grid gap-2 py-4">
                    {checklistRight.map((item:string[], index) => { 
                        return (
                            <li key={index} className={`flex items-center gap-2 ${item[1]}`}>
                                <IconCheck className={ `mr-2 h-4 w-4 `} />
                                {item[0]}
                            </li>
                        )
                    })}
                </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function IconCheck(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    )
  }