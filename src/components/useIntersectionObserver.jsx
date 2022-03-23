const useIntersectionObserver = (setFetchData, setLoading) => {
  const intersectionObserver = new IntersectionObserver(([data]) => {
    if (data.isIntersecting) {
      intersectionObserver.unobserve(data.target);
      setLoading(true);
      setFetchData((initialState) => !initialState);
    }
  });
  return intersectionObserver;
};

export default useIntersectionObserver;
