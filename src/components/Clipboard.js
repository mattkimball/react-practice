import { useState } from "react"
import { Button, Form } from 'react-bootstrap';

function Clipboard() {
    const [text, setText] = useState('')
    
    const handleChange = ({ target }) => setText(target.value);

    const handleClick = async () => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="copyText">Enter Text:</Form.Label>
                    <Form.Control
                        type="text"
                        id="copyText"
                        value={text}
                        onChange={handleChange}
                    />
                    <Button variant="primary" onClick={handleClick}>Copy Text</Button>
                </Form.Group>    
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="copyTest">Test Clipboard:</Form.Label>
                    <Form.Control as="textarea" id="copyTest" />
                </Form.Group>
            </Form>
        </>
    )
}

export default Clipboard;