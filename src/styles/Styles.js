import styled from 'styled-components'
import logo from './logo.svg'
import underlineImg from './underline.png'
import mainImg from './mainImg.png'
import ourClients from './ourClients.png'
import projectImg from './projectImg.png'


///////////////////////////navBar/////////////////////////

export const NavRapper = styled.div`
 display: flex;
 align-items: center;
justify-content: space-between;
padding:1.5rem;
@media screen and (max-width: 768px) {
justify-content: center;
}
border-bottom: 1px solid rgba(227, 255, 230, 0.3);
`

export const Logo = styled.img.attrs(props => ({
	src: logo,
	alt: 'logo'
}))`
@media screen and (max-width: 768px) {
	display: none;
}
`

export const MenuIcon = styled.div`
width:2rem;
`

///////////////////////////Main//////////////////////////

export const MainRapper = styled.div`
height:100vh;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 30% 45% 1fr;
justify-content: center;
align-items: center;
box-sizing: content-box;
border-bottom-width: 1px;
border-bottom-style: solid;
border-image: linear-gradient(90deg, #0000 0%, #E5E1D6 50%,#0000 70%);
border-image-slice: 1;
@media screen and (max-width: 768px) {
	grid-template-columns: 1fr ;
	grid-template-rows: 20% 60% 20%;
	border-image: none;
	border-bottom: 1px solid rgba(227, 255, 230, 0.3);
}
`

export const MainTitle = styled.div`
font-family: system-ui;
color :#ECF9E8;
font-size: 2.2rem;
margin: 1.75rem ;
@media screen and (max-width: 768px) {
	grid-row: 1;
	font-size: 2rem;
	line-height: 130%;
}
`

export const Innovate = styled.div`
display: inline-grid;
color:#C8F4A6;
`


export const Underline = styled.img.attrs(props => ({
	src: underlineImg,
	alt: 'underline'
}))`
`


export const MainImg = styled.img.attrs(props => ({
	src: mainImg,
	alt: 'main image'
}))`
height:100%;
grid-row: 1 / span 2;
grid-column : 2;
justify-self: center;
@media screen and (max-width: 768px) {
	grid-row: 2;
	grid-column : 1;
	
}
`
export const OurCliens = styled.img.attrs(props => ({
	src: ourClients,
	alt: 'Our cliens'
}))`
margin: 1.75rem;

@media screen and (max-width: 768px) {
	grid-row: 3;
	
}
`

export const Decription = styled.p`
font-family: system-ui;
color: #ECF9E8;
margin-left: 1.75rem;
line-height: 150%;
@media screen and (max-width: 768px) {
	display: none;	
}
`

export const BtnGetStarted = styled.button`
width: 9.375rem;
height: 3.125rem;
background-color: #E3FFE6;
border-radius: 5px;
color: #1E3F04;
margin-left: 1.75rem;

font-size: 1rem;
@media screen and (max-width: 768px) {
	display: none;	
}
`
///////////////////////////Projects//////////////////////////

export const ProjectsRapper = styled.div`
margin-top: 7%;
display: grid;
grid-template-columns: 33% 1fr 33%;
grid-template-rows: auto repeat(11, [col] 8vh) ;
align-items: center;
@media screen and (max-width: 768px) {
	grid-template-columns: 1fr;
}

`
export const ProjectsTitle = styled.div`
font-family: system-ui;
color: #ECF9E8;
font-size: 4.5vw;
grid-column: 1/4;
margin-left: 2%;
margin-bottom: 2%;
`

export const ProjectsHr = styled.hr`
height:0.1px;
width:90%;
border-width:0;
background-color:rgba(227, 255, 230, 0.3);
grid-column: 1/4;
@media screen and (max-width: 768px) {
	width:100%;	
}
`
export const ProjectNumb = styled.div`
font-family: system-ui;
font-size: 1.5rem;
color: #ECF9E8;
margin-left: 20%;
@media screen and (max-width: 768px) {
	margin-left: 2%;
}
`

export const ProjectDesc = styled.div`
font-size: 0.9rem;
font-family: system-ui;
grid-column: 2;
color: #ECF9E8;
margin: 2%;
@media screen and (max-width: 768px) {
	grid-column: 1;
	margin: 2%;
}
`

export const ProjectImg = styled.img.attrs(props => (
	{
		src: projectImg,
		alt: 'project image'
	}
))`
width: 85%;
grid-column: 3;
grid-row: 5 ;
z-index:1;
@media screen and (max-width: 768px) {
	display: none;
}
`


