import React, { useState } from 'react'

import { Button, Header, Modal,Form } from "semantic-ui-react";

import { FaWindowClose, FaTools } from "react-icons/fa";

//hooks
import { useInput } from '../utils/hooks/useInput'

// redux
import { connect } from 'react-redux'
import { updateTool } from '../store/actions'


function UpdateToolModal(props) {
    const initialState = {
        rentalcost: props.tool.rentalcost,
        tooldescription: props.tool.tooldescription,
        toolname: props.tool.toolname,
        tooltype: props.tool.tooltype,
    }
    
    const [tool, setTool, handleChanges] = useInput(initialState)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        props.updateTool(tool, tool.id)
    }
    return (
        <Modal trigger={<Button>{<FaTools/>}</Button>}>
            <Modal.Header>Update Tool</Modal.Header>
            <Modal.Content >
                <Form onSubmit={handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input 
                            label='Tool Name' 
                            name='toolname' 
                            control='input' 
                            value={tool.toolname} 
                            onChange={handleChanges}/>
                        <Form.Input 
                            label='Tool Description' 
                            control='input' 
                            value={tool.tooldescription} 
                            onChange={handleChanges}/>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input label='Tool Type' control='select' onChange={handleChanges} name="tooltype" value={tool.tooltype}>
                            <option value={tool.tooltype}>{tool.tooltype}</option>
                            <option value="Hand Tool">Hand Tools</option>
                            <option value="Power Tool">Power Tools</option>
                            <option value="Gardening Tool">Gardening Tools</option>
                        </Form.Input>
                    </Form.Group>
                    <Form.Group>
                        <Form.Input 
                            label='Rental Cost $' 
                            control='input' 
                            type='number' 
                            value={tool.rentalcost} 
                            onChange={handleChanges}/>
                    </Form.Group>
                    <Form.Input label='An HTML <button>' control='button'>
                        Update Tool
                    </Form.Input>
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default connect(null, { updateTool })(UpdateToolModal)