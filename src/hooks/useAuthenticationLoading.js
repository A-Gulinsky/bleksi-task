import { useEffect, useState } from 'react';

const useAuthenticationLoading = (user) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    checkAuthentication();
  }, [user]);

  return loading;
};

export default useAuthenticationLoading;
