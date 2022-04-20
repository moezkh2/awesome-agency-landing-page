import React from 'react'
import { MainRapper, MainTitle, Innovate, Underline, MainImg, OurCliens, Decription, BtnGetStarted } from '../styles/Styles'
const Main = () => {
    return (
        <MainRapper>
            <MainTitle>Closen the technology of the future to help you &nbsp;
                <Innovate>
                    Innovate <Underline />
                </Innovate>
            </MainTitle>
            <MainImg />
            <div>
                <Decription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam arcu nunc, orci eu bibendum. Sed morbi pellentesque elit purus quam a sollicitudin convallis purus. Sed sed quam risus laoreet viverra id ut amet feugiat. Sed nec id id sed ut nulla aliquet neque. Sed est malesuada lobortis aliquam dolor eget donec </Decription>
                <BtnGetStarted>Get Started</BtnGetStarted>
            </div>

            <OurCliens />

        </MainRapper >
    )
}

export default Main