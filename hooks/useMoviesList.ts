import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export default function useMovieList() {
  const { data, error, isLoading } = useSWR("/api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, error, isLoading };
}
