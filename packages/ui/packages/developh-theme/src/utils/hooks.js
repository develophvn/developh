import { useEffect, useState, useMemo } from "react";
import { get } from "lodash";

export const useGetContent = (contentPath, state) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    new Promise((resolve) => resolve(state.source.get(contentPath)))
      .then((result) => {
        setContent({
          ...result,
          page: get(state, `source.${result.type}.${result.id}`),
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
    return () => {
      setContent("");
      setLoading(false);
    };
  }, [state, contentPath]);

  return { content, loading };
};

export const useWindow = () => {
  if (typeof window === "undefined") {
    return {};
  }
  return window;
};
