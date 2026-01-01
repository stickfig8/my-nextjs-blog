import { CarouselApi } from "@/components/ui/carousel";
import { PostMetaWithCategory } from "@/config/types";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";

export function useCarouselController(posts: PostMetaWithCategory[]) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

    useEffect(() => {
      if (!api) return;

      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());

      api.on("select", () => {
        setCurrent(api.selectedScrollSnap());
        plugin.current?.reset();
      });
    }, [api, posts]);

  const movePrev = () => {
    const prevIndex = (current - 1 + count) % count;
    api?.scrollTo(prevIndex);
  };

  const moveNext = () => {
    const nextIndex = (current + 1) % count;
    api?.scrollTo(nextIndex);
  };

  const moveIndex = (idx: number) => {
    api?.scrollTo(idx);
  };

  return {
    plugin,

    setApi,
    current,
    count,

    movePrev,
    moveNext,
    moveIndex,
  };
};