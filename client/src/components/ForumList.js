import React, { Component } from 'react';

import { Container, ListGroup, ListGroupItem } from 'reactstrap';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';

import { getItems } from '../actions/forumActions';

import PropTypes from 'prop-types';

class ForumList extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const { items } = this.props.item;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className='forum-list'>
                    {items.map(({ _id, name }) => (
                        <CSSTransition key={_id} timeout={500} classNames='fade'>
                            <ListGroupItem>
                                {name}
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
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect (
    mapStateToProps,
    { getItems }
)(ForumList)
