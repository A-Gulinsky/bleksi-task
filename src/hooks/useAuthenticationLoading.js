import { useEffect, useState } from 'react';

// hook for managing loading state during user authentication process
const useAuthenticationLoading = (user) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setLoading(false);
    };

    checkAuthentication();
  }, [user]);

  return loading;
};

export default useAuthenticationLoading;
