import { Card } from 'react-bootstrap';

import JakeImage from '../images/jake.webp';
import EvanImage from '../images/evan.webp';
import AlifImage from '../images/alif.webp';


// This info will eventually come from a database
const sampleMembers = [
  {
    id: 0,
    name: "Jake D'Esposito",
    socials: [
        { Website: "https://www.desposito.me" },
        { LinkedIn: "https://www.linkedin.com/in/jakedesposito/" }, 
    ],
    majors: ["Computer Science BS"],
    year: "Freshman",
    role: "Developer",
    picture: JakeImage
  },
  {
    id: 1,
    name: "Alif Jakir",
    socials: [
        { Website: "https://www.alifjakir.com" },
        { LinkedIn: "https://www.linkedin.com/in/alif-jakir" },
    ],
    majors: ["Computer Science BS", "Data Analytics BS"],
    year: "Junior",
    role: "Developer",
    picture: AlifImage
  },
  {
    id: 2,
    name: "Evan Couchman",
    socials: [
        { LinkedIn: "https://www.linkedin.com/in/evan-couchman-a58a64180" },
    ],
    majors: ["Computer Science BS"],
    year: "Junior",
    role: "Eboard Member",
    picture: EvanImage
  },
]

export default function Members()
{
    return(
        <div className="container py-5 my-5">
            <h1 className="d-flex justify-content-center">Members Page</h1>
            <div className="row d-flex justify-content-center">
                {sampleMembers.map((member) => {
                    return(
                        <MemberCard key={member.id} member={member}/>
                    )
                })}
            </div>
        </div>
    )
}

function MemberCard(props)
{
    return(
        <Card style={{ width: '18rem' }} className="m-2">
            <Card.Body>
                <Card.Img variant="top" src={props.member.picture} alt="" style={{height: '200px', objectFit: 'cover'}}/>
                <Card.Title>{props.member.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.member.year}</Card.Subtitle>
                {props.member.socials ? props.member.socials.map((social, index) => {
                    for(const [key, value] of Object.entries(social)) {
                        return(
                            <Card.Link className='text-muted' href={value} key={index}>{key}</Card.Link>
                        )
                    }
                }) : null}
                <Card.Text as="ul">
                    {props.member.majors.map((major, index) => {
                        return(
                            <li key={index}>{major}</li>
                        )
                    })}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}