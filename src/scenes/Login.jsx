import React, { useEffect } from 'react';
import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate, useLocation } from 'react-router';

// docs : https://ui.docs.amplify.aws/react/guides/auth-protected

const Login = () => {
  const { route } = useAuthenticator((context) => [context.route]);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pahtname || '/';
  useEffect(() => {
    if(route === 'authenticated'){
      navigate(from, {replace: true});
    }
  }, [route, navigate, from]);
  return (
    <View className='auth-wrapper'>
      <Authenticator></Authenticator>
    </View>
  );
}

export default Login;