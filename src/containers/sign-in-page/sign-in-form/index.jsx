import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import _config from 'config';
import { withFormik } from 'formik';
import { withRouter } from 'react-router';

import './_sign-in-form.scss'

const FormItem = Form.Item;
class SignInForm extends Component {
  
  render() {
    let {
      actionLoading,
      values,
      touched,
      errors,
      handleChange,
      setFieldValue,
      handleBlur,
      handleSubmit,  
    } = this.props;

    // const { getFieldDecorator } = this.props.form;
    return (
      <div className="sign-in-form-container">

        <Form className="sign-in-form">
          <FormItem>
            <Input
                placeholder={"Enter your email"}
                value={values.email}
                name="email"
                onChange={handleChange}
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={values.email
                  ? <Icon
                    type="close-circle"
                    style={{ color: 'rgba(0,0,0,.25)' }}
                    onClick={(e) => {
                      setFieldValue('email', '')
                    }}
                  /> : null}
              />
          </FormItem>
          <FormItem>
            <Input
              placeholder={"Enter password"}
              value={values.password}
              name="password"
              type="password"
              onChange={handleChange}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              suffix={values.password
                ? <Icon
                  type="close-circle"
                  style={{ color: 'rgba(0,0,0,.25)' }}
                  onClick={(e) => {
                    setFieldValue('password', '')
                  }}
                /> : null}
            />
          </FormItem>
          <FormItem>
            <Checkbox>Remember me</Checkbox>
            <Button type="primary" className="login-form-button">
              Log in
            </Button>
            <div 
            className="sign-up-button"
            onClick={() => {
              this.props.history.push('/register')
            }}>or Sign up here!</div>
          </FormItem>
        </Form>
      </div>

    );
  }
}

const SignInFormik = withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),

})(SignInForm)
export default withRouter(SignInFormik);
