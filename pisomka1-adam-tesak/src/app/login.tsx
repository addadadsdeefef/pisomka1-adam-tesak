import React from 'react';
import Layout from '../../components/Layout';

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <h1>Login Page</h1>
      <p>Please log in using your credentials.</p>
      <button>Login with Google</button>
    </Layout>
  );
};

export default LoginPage;
