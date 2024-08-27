import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LoginHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchLoginHistory = async () => {
      const response = await axios.get('/api/user/login-history');
      setHistory(response.data);
    };

    fetchLoginHistory();
  }, []);

  return (
    <div>
      <h3>Login History</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item.date} - {item.browser} - {item.os} - {item.device} - {item.ip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoginHistory;
