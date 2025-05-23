import useSWR from "swr";

const fetcher = url => fetch(url).then(res => res.json());

function useTask() {
    const {data, error, mutate} = useSWR(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/task/`, fetcher)
    return{
        task: data,
        isLoadig: !error && !data,
        isError: error,
        mutate,
    };
}

export default useTask;