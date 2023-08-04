import { ISkill } from "@/type"
import { FunctionComponent } from "react"

const Bar:FunctionComponent<{ data: ISkill }> = ({ data: { Icon, level, name }}) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full">
        <div 
            className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-blue-300 to-blue-600"
            style={{ width: level}}
        >
        <Icon className="mr-3" />
        {name}
        </div>
    </div>
  )
}

export default Bar