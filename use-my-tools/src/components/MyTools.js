import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

//styles
import { Button, Header, Modal, Card, Icon } from 'semantic-ui-react';
import { FaWindowClose, FaTools } from 'react-icons/fa';
import { withFormik, Form, Field } from 'formik';

//redux
import { connect } from 'react-redux'
import { addTool, updateTool, deleteTool } from '../store/actions'

// components
import AddTool from './AddTool'



const ToolUpdates = styled.div`
    display: flex;
    flex-direction: column;
    width: 49%;
    height: auto;
    justify-content: flex-start;
    align-items: center;
    margin: 2%;
    border: 2px solid purple;
`;

const CurrentRentals = styled.div`
    display: flex;
    flex-direction: column;
    width: 49%;
    height: auto;
    justify-content: flex-start;
    align-items: center;
    margin: 2%;
    border: 2px solid red;
`;

const ContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 1%;
`;

const UICards = styled(Card)`
    display: flex;
    margin: 2%;
`;

const MyTools = (props) => {
    const [tool, setTool] = useState([]);
    console.log("from mytools", props)
    return (
        <>
            {/* Splitting the sections for My current tools/adding/edit tools and to view which tools have been rented.  */}
            <h1>Welcome to your tools.</h1>
            <h3>Please add, update, or delete on the left or view your rentals on the right.</h3>
            <ContainerDiv>
                <ToolUpdates>
                    <h2>Add, Update, or Delete your Tools</h2>
                    <AddTool />
                    {/* Mapping over tools for the user, adding new card for each input */}
                    {props.userTools.map(tool => (
                        <UICards class="ui cards">
                            <div class="ui card" key={tool.toolid}>
                                <div class="content">
                                    <div class="header">
                                        <p>Tool Name: {tool.toolname}</p>
                                    </div>
                                    <div class="meta">
                                        <p>Tool Type: {tool.tooltype}</p>
                                        <p>Rental Cost: ${tool.rentalcost} per day</p>
                                    </div>
                                    <div class="description">
                                        <p>Tool Description: {tool.tooldescription}</p>
                                    </div>
                                    
                                    {/* FaWindowClose is the icon to remove tools, functionality needed.
                                    FaTools is the icon to edit/update tools, functionality needed. */}
                                    {/* <button onClick={() => {props.deleteTool(tool.toolid)}}><FaWindowClose /></button> */}
                                    <Modal trigger={<Button>{<FaWindowClose/>}</Button>} basic size='small'>
                                        <Header icon='delete' content='Delete Tool' />
                                        <Modal.Content>
                                        <p>
                                            Are you sure you want to delete this tool?
                                        </p>
                                        </Modal.Content>
                                        <Modal.Actions>
                                        <Button onClick={() => {props.deleteTool(tool.toolid)}} color='green' inverted>
                                            <Icon name='checkmark' /> Yes
                                        </Button>
                                        </Modal.Actions>
                                    </Modal>
                                    <button><FaTools /></button>
                                </div>
                            </div>
                        </UICards>
                    ))}
                </ToolUpdates>
                <CurrentRentals>
                    {/* List of all user rentals */}
                    <h2>Current Tools you're Renting</h2>
                </CurrentRentals>
            </ContainerDiv>
        </>
    );
};

const mapStateToProps = state => ({
    userTools: state.tools.userTools
})

const mapActionsToProps = {
    updateTool,
    deleteTool
}
export default connect(mapStateToProps, mapActionsToProps)(MyTools)