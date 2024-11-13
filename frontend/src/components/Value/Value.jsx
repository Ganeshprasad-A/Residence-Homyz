import React, { useState } from 'react'
import { Accordion,
AccordionItem,
AccordionItemButton,
AccordionItemPanel,
AccordionItemState,
AccordionItemHeading } from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md';
import './Value.css'; 
import item from '../../utils/accordion';
const Value = () => {
  return (
    <section className="v-wrapper">
       <div className="paddings innerWidth flexCenter v-container">
              {/* left-side */}
              <div className="v-left">
                     <div className="image-container">
                            <img src='./value.png' alt=''/>
                     </div>
              </div>

              {/* right-side */}
              <div className="flexColStart v-right">
                     <span className='orangeText'>Our value</span>
                     <span className='primaryText'>Value We Give to you</span>
                     <span className='secondaryText'>
                            We always ready to help by providing the best services for you.
                            <br/>
                            We believe a good place to live can make your life better
                     </span>
                     <Accordion
                            className='accordian'
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                     >
                            {
                                   item.map((data,i)=>{
                                          const [className,setClassName]=useState(null);
                                          return(
                                                 <AccordionItem key={i} uuid={i}
                                                 className={`accordionItem ${className}`}>
                                                        <AccordionItemHeading>
                                                               <AccordionItemButton className='flexCenter accordianButton'>
                                                                      <AccordionItemState>
                                                                             {({expanded})=>expanded ? setClassName("expanded"):setClassName("collapsed")}
                                                                      </AccordionItemState>
                                                                      <div className="flexCenter icon">{data.icon}</div>
                                                                      <span className="primaryText" style={{fontsize:"20px"}}>
                                                                             <h5>{data.heading}</h5>
                                                                      </span>
                                                                      <div className="flexcenter icon">
                                                                             <MdOutlineArrowDropDown size={20}></MdOutlineArrowDropDown>
                                                                      </div>
                                                               </AccordionItemButton>
                                                        </AccordionItemHeading>
                                                               <AccordionItemPanel>
                                                                      <p className="secondaryText accordianPanel">{data.detail}</p>
                                                               </AccordionItemPanel>
                                                        

                                                 </AccordionItem>
                                          
                                          )
                                   })
                            }

                     </Accordion>
              </div>
       </div>
    </section>
  )
}

export default Value;

