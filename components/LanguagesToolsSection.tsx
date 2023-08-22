import React, { FunctionComponent } from 'react'
import Bar from '@/components/Bar'
import { LanguagesToolsSectionProps } from '@/type'

const LanguagesToolsSection: FunctionComponent<LanguagesToolsSectionProps> = ({
    items,
    title,
}) => {
    return (
        <div>
            <h5 className="my-3 text-2xl font-bold">{title}</h5>
            <div className="my-2">
                {items.map((item, index) => (
                    <Bar data={item} key={index} />
                ))}
            </div>
        </div>
    )
}

export default LanguagesToolsSection
