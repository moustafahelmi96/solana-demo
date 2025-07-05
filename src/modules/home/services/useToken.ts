import { sendAxiosRequest } from '@/services/axios';
import { useCallback, useState } from 'react';
import { IToken } from './types';

const useTokens = ({ limit, page }: { limit?: number; page?: number }) => {
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
          per_page: limit,
          page: page,
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
  }, [limit, page]);

  return {
    tokens,
    loading,
    error,
    fetchTokens: fetchSolanaTokens,
  };
};

export default useTokens;
