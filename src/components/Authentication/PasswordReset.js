import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import { authResetPassword } from "../../store/actions/authActions";
import RenderField from "../Checkout/RenderField";

import { Redirect } from "react-router-dom";
import { Form, Row, Col, Button } from "reactstrap";

class PasswordReset extends Component {

  render() {
    const { handleSubmit, submitting, error, token } = this.props;

    return (
      <Row>
        <Col md="6" className="mx-auto card p-4">
          <Form onSubmit={handleSubmit}>
            <h3 className="text-center font-weight-bold">Password Reset</h3>
            <hr />
            <p>
              Forgotten your password? Enter your email address below, and if we
              have it in the database, we will email instructions for setting a
              new one.
            </p>
            <Field
              name="email"
              type="text"
              label="Email Address"
              component={RenderField}
            />
            <div className="text-center mt-4">
              <Button color="primary" type="submit" disabled={submitting}>
                Reset my password
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default reduxForm({
  form: "passwordReset",
  onSubmit: authResetPassword
})(PasswordReset);
