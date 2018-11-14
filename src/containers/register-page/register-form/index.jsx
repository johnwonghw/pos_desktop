import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import _config from 'config';
import { withFormik } from 'formik';

import './_register-form.scss'

const FormItem = Form.Item;
class RegisterForm extends Component {

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
      <div className="register-form-container">

        <Form className="register-form" onSubmit={handleSubmit}>
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
            <Button type="primary" htmlType="submit" className="login-form-button">
              Register
            </Button>
          </FormItem>
        </Form>
      </div>

    );
  }
}

const RegisterFormik = withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: (values, {props}) => {
    console.log(values, props)
    props.register(values)
  },
})(RegisterForm)
export default RegisterFormik;
