import React, { Component } from 'react';

import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';

import { getForums } from '../actions/forumActions';

import PropTypes from 'prop-types';

class ForumList extends Component {
    static PropTypes = {
        getForums: PropTypes.func.isRequired,
        forum: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount() {
        this.props.getForums();
    }

    render() {
        const { forums } = this.props.forum;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className='forums-list'>
                    {forums.map(({ _id, title }) => (
                        <CSSTransition key={_id} timeout={500} classNames='fade'>
                            <ListGroupItem>
                                {title}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    forum: state.forum,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect (
    mapStateToProps,
    { getForums }
)(ForumList)