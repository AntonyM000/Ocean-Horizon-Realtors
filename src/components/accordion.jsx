import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import faqs from '../Faqs.json'
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      {faqs.map((faq,index)=>(
        
        <Accordion key={index} open={open === index + 1} icon={<Icon id={index + 1} open={open} />}>
        <AccordionHeader className='pl-2' onClick={() => handleOpen(index + 1)}>{faq.question}</AccordionHeader>
        <AccordionBody >
          {faq.answer}
        </AccordionBody>
      </Accordion>
        
      ))}
      
    </>
  );
}