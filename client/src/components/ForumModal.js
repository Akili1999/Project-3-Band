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

import { addForum } from '../actions/forumActions';

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

        const newForum = {
            name: this.state.name
        };

        this.props.addForum(newForum);

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
                                <Input
                                type='text'
                                title='title'
                                band='band'
                                genre='genre'
                                state='state'
                                city='city'
                                id='forum'
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
    forum: state.forum,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { addForum }
)(ForumModal);