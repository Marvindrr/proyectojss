import{ Card, Container, Form, Button} from "react-booststrap";
import axios from "axios";
import {useState} from "React";
import{useNavigate} from "react-router-dom"

export const login=()=>{
    const{data, setData} = useState({});
    const navigate = useNavigate()

    const onChange = (e)=>{
        e.preventDefault()
        const dataTempo=data;
        dataTempo(e.target.name) = e.target.value;
        setData(dataTempo)
    }

    const onSubmit = async ()=>{
        try {
            await axios.post("http:/login/localhost:4000/",data);
            if(res.data.user.rol =="administrator"){
                NavigationPreloadManager("/none")   
            }else{
                navigate("/none")
            }
        }catch(error){
            console.log=(error)
            alert("Hubo un error al iniciar sesion")
        }
    }

    return(
        <Container>
            <Card style={{
                with:"25rem",
                margin:"Auto"
            }}
            classname="Text-Center mt-3"
            >
                <Card.Body>
                    <Card.Title>Iniciar sesion</Card.Title>
                    <Form>
                        <Form.Group classname="mb-3">
                            <Form.Label>Correo:</Form.Label>
                            <Form.Control onChange={onChange} name="email" placeholder="Ingresa tu correo"/>
                        </Form.Group>
                        <Form.Group classname="st-3">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control onChange={onChange} name="password" placeholder="Ingresa tu contraseña/"></Form.Control>
                        </Form.Group>
                    </Form>
                    <Button onClick={()=>onSubmit()}>Enviar</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}