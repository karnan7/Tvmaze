import React,{useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { MdClose } from 'react-icons/md'

const Booking = ({modalOpen, setModalOpen, shows}) => {

    const [numTickets, setNumTickets] = useState(1);
    
    const { id } = useParams();
    const selectedShow = shows.find((s) => s.id === parseInt(id));

    const handleSubmit=(e) => {
        e.preventDefault();
        setModalOpen(false);
    }
  return (
    
    <>
    {modalOpen && (
        <Form
        >
            <MdClose style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                height: '30px',
                width: '30px',
                background: '#B284BE',
                cursor: 'pointer',
            }}
            onClick={()=> {setModalOpen(false)}}
            />
            <TitleImage src={selectedShow.picture}/>
            <span
            style={{
                textAlign: 'center',
                color: '#84DE02'
            }}
            >Book Tickets for 
                <h1
                style={{
                    fontWeight:'bold',
                    textAlign: 'center',
                    color:'#B284BE',
                    textDecoration: 'underline',
                }}
                >{selectedShow.name}</h1>
            </span>
            <input
            type='name'
            placeholder='Full Name'
            required
            />
            <input
            type='email'
            placeholder='Email Address'
            required
            />
            <input
            placeholder='Phone Number'
            />
            <Selectors>
                <Select value={numTickets} onChange={(e) => setNumTickets(parseInt(e.target.value))}>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num}>
                        {num}
                        </option>
                    ))}
                </Select>

                <input type='date'/>
            </Selectors>
            <Controls>
                <Submit htmlType="submit" onSubmit={handleSubmit}>Submit</Submit>
                <Cancel onClick={()=>{setModalOpen(false)}}>Cancel</Cancel>
            </Controls>
        </Form>
        )}
    </>

   
  )
}

export default Booking;


const TitleImage =styled.img`
    width: 100px;
    height: 150px;
    object-fit:cover;
    margin-left: 35%;  
`

const Form = styled.div`
    border-radius: 8px;
    width: 500px;
    height: 700px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 20px;
    display:flex;
    flex-direction: column;
    gap: 25px;

    @media (max-width: 768px) {
        width: 400px;
        height: 700px;
    } 


    input{
        font-size:15px;
        width: 100%;
        height: 50px;
    }

    input::placeholder{
        font-size: 15px;
    }
`
const Selectors= styled.div`
    display:flex;
    align-items: center;
    justify-content: space-around;
    gap:15px;
`
const Select =styled.select`
    width: 80%;
    height: 50px;
`
const Controls = styled.div`
    display: flex;
    margin-top: 30px;
    gap: 25px;

`

const Submit = styled.button`
    border:none;
    border-radius:5px;
    background-color: #84DE02;
    color:#fff ;
    padding: 10px 30px;
    font-size:20px;
    font-weight: bold;
    letter-spacing:3px;
    transition: all 250ms ease-in-out;
    cursor: pointer;

    &:hover{
        background-color: #92f205;
    }
`
const Cancel = styled(Submit)`
    background-color:#B284BE;
    &:hover{
        background-color: #bb40db;
    }
`
