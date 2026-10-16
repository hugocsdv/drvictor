
import { toast } from "sonner";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL não está configurada.");
}

interface ApiOptions extends RequestInit {
  successMessage?: string;
  showErrorToast?: boolean;
  showSuccessToast?: boolean;
}

export async function api<T>(
  endpoint: string,
  options: ApiOptions = {},
): Promise<T> {
  const {
    successMessage,
    showErrorToast = true,
    showSuccessToast = true,
    ...fetchOptions
  } = options;

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...fetchOptions,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...fetchOptions.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => null);

      const message = Array.isArray(error?.message)
        ? error.message.join(", ")
        : typeof error?.message === "string"
          ? error.message
          : "Erro ao realizar requisição.";

      throw new Error(message);
    }

    let data: T;

    if (response.status === 204) {
      data = undefined as T;
    } else {
      data = (await response.json()) as T;
    }

    if (showSuccessToast && successMessage) {
      toast.success(successMessage);
    }

    return data;
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Erro inesperado ao realizar requisição.";

    if (showErrorToast) {
      //toast.error(message);
    }

    throw error;
  }
}
