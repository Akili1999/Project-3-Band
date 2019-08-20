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

    }
}