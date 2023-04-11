import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [controller, setController] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {setData(data); console.log(data)})
      .catch((error) => setError(error))
      .finally(() => setLoading(false));

    return () => abortController.abort();
  }, [url]);

  // const handleCancelRequest = () => {
  //   if (controller) {
  //     controller.abort();
  //     //   setError("Request cancelled");
  //   }
  // };

  return { data, loading, error };
}
