import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody,
    CardTitle} from 'reactstrap';


export default function cards (props) {
      
    return (
      <div>
        
        <Link  to={`${props.to}`}>
        <Card className='flex items-end justify-center transition ease-in-out delay-50 duration-500 hover:-translate-y-1 hover:scale-105  md:w-72  md:h-100 rounded-2xl w-56 h-80 tracking-widest text-2xl md:hover:cursor cursor-pointer' style={{ backgroundSize: "100% 100%", backgroundImage: `URL(${props.imgsrc})` }}>
        
        <CardBody className='p-4 flex flex-col'>
          <CardTitle className='font-downlinkBold '> {props.title}</CardTitle>
          
        
        </CardBody>
      </Card>
      </Link>

      
     
    </div>
    )
}
