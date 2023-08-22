import React, { FunctionComponent } from 'react'
import { EducationSectionProps } from '@/type'

const EducationSection: FunctionComponent<EducationSectionProps> = ({
    educations,
}) => {
    return (
        <div className="grid md:grid-cols-1">
            <div>
                <h5 className="my-3 text-2xl font-bold">Education</h5>
                {educations.map((education, index) => (
                    <div key={index}>
                        <h5 className="my-2 text-xl font-bold">
                            {education.degree}
                            {education.date}
                        </h5>
                        <p className="font-semibold">{education.institution}</p>
                        <p className="my-3"></p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EducationSection
