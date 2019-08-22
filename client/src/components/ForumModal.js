import React, { Component } from 'react';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import { connect } from 'react-redux';

import { addItem } from '../actions/forumActions';

import PropTypes from 'prop-types';

class ForumModal extends Component {
    state = {
        modal: false,
        name: ''
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            name: this.state.name
        };

        this.props.addItem(newItem);

        this.toggle();
    };

    render() {
        return (
            <div>
                {this.props.isAuthenticated ? (
                    <Button color='orange'
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                    >
                     Create a Forum
                    </Button>
                ) : (
                    <h4 className='mb-3 ml-4'> You Must Be Logged In to Create A Forum</h4>
                )}

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Create Your Band's Forum</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                            <Label for='title'>title</Label>
                                <Input
                                type='text'
                                title='title'
                                id='title'
                                onChange={this.onChange}
                                />
                                <Label for='band'>Band</Label>
                                <Input
                                type='text'
                                band='band'
                                id='band'
                                onChange={this.onChange}
                                />
                                <Label for='genre'>Genre</Label>
                                <Input
                                type='text'
                                genre='genre'
                                id='genre'
                                onChange={this.onChange}
                                />
                                <Label for='state'>State</Label>
                                <Input
                                type='text'
                                title='state'
                                id='state'
                                onChange={this.onChange}
                                />
                                <Label for='city'>City</Label>
                                <Input
                                type='text'
                                city='city'
                                id='city'
                                onChange={this.onChange}
                                />
                                <Button color='blue' style={{ marginTop: '2rem' }} block>
                                    Create
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { addItem }
)(ForumModal);