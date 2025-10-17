import { ref } from 'vue';

type DebounceFn = (...args: any[]) => void;

function useDebounce<T extends DebounceFn>(fn: T, delay: number): T {
  const timer = ref<ReturnType<typeof setTimeout> | null>(null);

  const debouncedFn = (...args: any[]) => {
    if (timer.value) {
      clearTimeout(timer.value);
    }

    timer.value = setTimeout(() => {
      fn(...args);
    }, delay);
  };

  return debouncedFn as T;
}

export default useDebounce;