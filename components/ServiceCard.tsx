import { FunctionComponent } from 'react'
import { IService } from '@/type'

const ServiceCard: FunctionComponent<{ service: IService }> = ({
    service: { Icon, description, title },
}) => {
    const createMarkup = () => ({
        __html: description,
    })

    return (
        <div className="flex items-center p-2 space-x-4">
            <Icon className="w-12 h-12 text-blue" />
            <div>
                <h4 className="font-bold">{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
    )
}

export default ServiceCard
