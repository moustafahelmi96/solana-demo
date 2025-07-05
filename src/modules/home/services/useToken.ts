import { sendAxiosRequest } from '@/services/axios';
import { useCallback, useEffect, useState } from 'react';
import { IToken } from './types';

const useTokens = () => {
  const [tokens, setTokens] = useState<IToken[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchSolanaTokens = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await sendAxiosRequest({
        url: 'https://api.coingecko.com/api/v3/coins/markets',
        method: 'GET',
        params: {
          vs_currency: 'usd',
          category: 'solana-ecosystem',
          order: 'volume_desc',
          per_page: 20,
          page: 1,
          sparkline: false,
          price_change_percentage: '24h',
        },
      });

      console.log('Solana Tokens:', response);
      setTokens(response);
    } catch (error) {
      console.error('Error fetching Solana tokens:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSolanaTokens();
  }, []);

  return {
    tokens,
    loading,
    error,
    refetch: fetchSolanaTokens,
  };
};

export default useTokens;
