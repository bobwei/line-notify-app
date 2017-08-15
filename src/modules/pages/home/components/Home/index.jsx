import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import connect from 'react-redux/lib/connect/connect';
import compose from 'recompose/compose';

import mapStateToProps from './mapStateToProps';

const Home = ({ authorizeUrl }) =>
  <Grid>
    <Row>
      <Jumbotron>
        <h2>Hello, React App Boilerplate</h2>
        <p>This is a react app boilerplate with batteries included.</p>
        <FormGroup>
          <a href={authorizeUrl} className="btn btn-default">
            Authorize
          </a>
        </FormGroup>
      </Jumbotron>
    </Row>
  </Grid>;

Home.propTypes = {
  authorizeUrl: PropTypes.string.isRequired,
};

export default compose(connect(mapStateToProps))(Home);
