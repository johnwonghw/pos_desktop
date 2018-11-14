import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import _config from 'config';
import { withFormik } from 'formik';
import { withRouter } from 'react-router';

import './_login-form.scss'

const FormItem = Form.Item;
class LoginForm extends Component {
  
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
      <div className="login-form-container">

        <Form className="login-form" onSubmit={handleSubmit}>
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
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            <div 
            className="register-button"
            onClick={() => {
              this.props.history.push('/register')
            }}>or Sign up here!</div>
          </FormItem>
        </Form>
      </div>

    );
  }
}

const LoginFormik = withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: (values, {props}) => {
    console.log(values, props)
    props.login(values)
  },
})(LoginForm)
export default withRouter(LoginFormik);
