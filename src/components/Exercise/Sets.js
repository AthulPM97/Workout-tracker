import { Form } from "react-bootstrap";

const Sets = (props) => {
    return(
        <Form>
            <Form.Group>
                <Form.Label>Set 1</Form.Label>
                <Form.Control type="number" value={props.sets[1]}/>
                <Form.Label>Set 2</Form.Label>
                <Form.Control type="number" value={props.sets[2]}/>
                <Form.Label>Set 3</Form.Label>
                <Form.Control type="number" value={props.sets[3]}/>
                <Form.Label>Set 4</Form.Label>
                <Form.Control type="number" value={props.sets[4]}/>
                <Form.Label>Set 5</Form.Label>
                <Form.Control type="number" value={props.sets[5]}/>
            </Form.Group>
        </Form>
    )
}

export default Sets;