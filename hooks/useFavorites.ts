import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export default function useFavorites() {
  const { data, error, isLoading, mutate } = useSWR("/api/favorites", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, error, isLoading, mutate };
}
