import React,{ useState } from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const Registration = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confrom, setConfrom] = useState('')


  const handleSubmit = (e)=>{
    e.preventDefault() 

    let isValid = true


    if(!name){
      isValid = false
      toast.error('Enter your name')
      return
    }else if(typeof name !== 'undefined'){
      if(!name.match(/^[a-zA-Z]+$/)){
        isValid = false;
        toast.error('You can only use letters for Name');
      }
    }

    if(!email){
      isValid = false
      toast.error('Enter your email address')
      return
    }else if(typeof email !== 'undefined'){
      if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        isValid = false;
        toast.error('Please entered a valid email address');
      }
    } 

    if(!password){
      isValid = false
      toast.error('Enter a Password')
      return
    }else if(typeof password !== 'undefined'){
      if(!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)){
        isValid = false;
        toast.error('Minimum eight characters, at least one letter, one number and one special character');
      }
    }
    if(!confrom){
      isValid = false
      toast.error('Retype your password')
    }else if(password !== confrom){
      toast.error('Password not Matched')
    }
    else{
      toast.success('Registration Successful')
      setName('')
      setEmail('')
      setPassword('')
      setConfrom('')
    }
  }

  return (
    <Container className='registration_main'>
      <div className='authDesign'>
        <Row className='auth'>
          <Col className='res_auth_Part_One' lg='6'>
            <h2>Create Account</h2>

            <Form className='mt-4' onSubmit={handleSubmit}>
              <Form.Label>Your fullname*</Form.Label>
              <Form.Control type="text" placeholder='Enter your fullname'  className='mb-2' name='email' onChange={(e)=>setName(e.target.value)} value={name}/>
              <Form.Label>Email address*</Form.Label>
              <Form.Control type="email" placeholder='Enter email address'  className='mb-2' name='email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
              <Form.Label>Create password*</Form.Label>
              <Form.Control type="password" placeholder='Enter password'  className='mb-2' onChange={(e)=>setPassword(e.target.value)} value={password}/>
              <Form.Label>Confrom password*</Form.Label>
              <Form.Control type="password" placeholder='Enter password'  className='mb-2' onChange={(e)=>setConfrom(e.target.value)} value={confrom}/>

              <Button className='mt-3' variant='success' size='lg' onClick={handleSubmit}>Sign In</Button>
            </Form>
          </Col>
          <Col className='auth_Part_Two' lg='6'>
            <h2>Sign In</h2>
            <small>Login to manage orders</small>
            <Link to='/login'>
              <Button className='mt-5' variant='success' size='lg'>Login </Button>
            </Link>
          </Col>
        </Row>
        <div style={{textAlign:'center'}}>

        <small className="text-muted">Term of Use. Privacy Policy</small>
        </div>
      </div>
    </Container>
  )
}

export default Registration