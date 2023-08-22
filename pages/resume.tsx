import React, { FunctionComponent } from 'react'
import ExperienceSection from '@/components/ExperienceSection'
import EducationSection from '@/components/EducationSection'
import LanguagesToolsSection from '@/components/LanguagesToolsSection'
import {
    languages,
    devDeploymentTools,
    databases,
    frameworksAndLibraries,
    experiences,
    educations,
} from '@/data'

const Resume: FunctionComponent = () => {
    return (
        <div className="px-6 py-2">
            {/* Experience */}
            <h5 className="my-3 text-2xl font-bold">Experience</h5>
            <div className="grid gap-6 md:grid-cols-2">
                <ExperienceSection experiences={experiences} />
            </div>
            {/* Education */}
            <EducationSection educations={educations} />

            {/* Languages & Frameworks */}
            <div className="grid gap-4 md:grid-cols-2">
                <LanguagesToolsSection
                    items={languages}
                    title="Languages & Frameworks"
                />
                <LanguagesToolsSection
                    items={devDeploymentTools}
                    title="Deployment Tools"
                />
                <LanguagesToolsSection items={databases} title="Databases" />
                <LanguagesToolsSection
                    items={frameworksAndLibraries}
                    title="Frameworks And Libraries"
                />
            </div>
        </div>
    )
}

export default Resume
