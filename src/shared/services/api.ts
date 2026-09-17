const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error(
    'NEXT_PUBLIC_API_URL não está configurada.',
  );
}

export async function api<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      ...options,

      credentials: 'include',

      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    },
  );

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => null);

    throw new Error(
      Array.isArray(error?.message)
        ? error.message.join(', ')
        : error?.message ||
          'Erro ao realizar requisição.',
    );
  }

  return response.json();
}