import React from 'react'

import Title from './Title'
import SubHeading from './SubHeading'
import Section from './Section'

import { Document_t } from '../interfaces'

export default function Document(props: { state: Document_t }) {
    return (
        <div className="relative w-1/2 h-full bg-white flex flex-col justify-start items-left">
            <Title title={props.state.title} />
            {props.state.sections.map((section, index) => {
                return (
                    <Section
                        key={index}
                        latex={section.latex}
                        subheading={section.subheading}
                    />
                )
            })}
        </div>
    )
}
