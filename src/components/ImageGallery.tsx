import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  ArrowsPointingOutIcon,
  PlayIcon,
  PauseIcon,
  ShareIcon
} from "@heroicons/react/24/outline";
import { useGesture } from "@use-gesture/react";
import FullscreenGallery from "./FullscreenGallery";

interface ImageGalleryProps {
  images: {
    url: string;
    alt: string;
  }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [slideInterval] = useState(3000); // 3초로 고정
  const containerRef = useRef<HTMLDivElement>(null);
  const slideShowTimerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const selectImage = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // 슬라이드쇼 제어
  useEffect(() => {
    if (isPlaying) {
      slideShowTimerRef.current = setInterval(nextImage, slideInterval);
    }
    return () => {
      if (slideShowTimerRef.current) {
        clearInterval(slideShowTimerRef.current);
      }
    };
  }, [isPlaying, slideInterval, nextImage]);

  // 슬라이드쇼 토글
  const toggleSlideshow = () => {
    setIsPlaying(!isPlaying);
  };

  // 제스처 핸들링
  const bind = useGesture(
    {
      onDragStart: () => {
        setIsDragging(true);
        if (isPlaying) {
          setIsPlaying(false);
        }
      },
      onDragEnd: ({ swipe: [swipeX] }) => {
        setIsDragging(false);
        if (swipeX > 0) prevImage();
        if (swipeX < 0) nextImage();
      },
    },
    {
      drag: {
        threshold: 50,
        swipeDistance: 40,
        filterTaps: true,
      },
    }
  );

  // 공유 기능
  const shareImage = async () => {
    const currentImage = images[currentIndex];
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: currentImage.alt,
          text: `${currentImage.alt} - 이미지 공유`,
          url: currentImage.url,
        });
      } else {
        // 클립보드에 복사
        await navigator.clipboard.writeText(currentImage.url);
        alert('이미지 URL이 클립보드에 복사되었습니다.');
      }
    } catch (error) {
      console.error('공유 실패:', error);
    }
  };

  return (
    <div className="relative">
      {/* 메인 이미지 */}
      <div 
        ref={containerRef}
        {...bind()}
        className="relative aspect-[16/9] md:aspect-[2/1] rounded-t-2xl overflow-hidden touch-pan-y"
      >
        <Image
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          fill
          className={`object-cover transition-transform duration-200 ${
            isDragging ? "scale-[0.98]" : "scale-100"
          }`}
          priority
        />
        
        {/* 네비게이션 버튼 */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prevImage}
            className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
            aria-label="이전 이미지"
            title="이전 이미지"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
            aria-label="다음 이미지"
            title="다음 이미지"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>

        {/* 상단 컨트롤 */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <button
            onClick={shareImage}
            className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
            aria-label="이미지 공유하기"
            title="이미지 공유하기"
          >
            <ShareIcon className="h-5 w-5" />
          </button>
          <button
            onClick={toggleSlideshow}
            className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
            aria-label={isPlaying ? "슬라이드쇼 중지" : "슬라이드쇼 시작"}
            title={isPlaying ? "슬라이드쇼 중지" : "슬라이드쇼 시작"}
          >
            {isPlaying ? (
              <PauseIcon className="h-5 w-5" />
            ) : (
              <PlayIcon className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={() => setIsFullscreen(true)}
            className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
            aria-label="전체화면으로 보기"
            title="전체화면으로 보기"
          >
            <ArrowsPointingOutIcon className="h-5 w-5" />
          </button>
        </div>

        {/* 하단 컨트롤 */}
        <div className="absolute bottom-4 inset-x-4 flex justify-between items-center">
          <button
            onClick={() => setShowThumbnails(!showThumbnails)}
            className="px-3 py-1 rounded-full bg-black/30 hover:bg-black/50 text-white text-sm transition-colors"
          >
            {showThumbnails ? "썸네일 닫기" : "썸네일 보기"}
          </button>
          <div className="px-3 py-1 rounded-full bg-black/30 text-white text-sm" role="status">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* 썸네일 갤러리 */}
      {showThumbnails && (
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-white shadow-lg rounded-b-2xl p-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => selectImage(index)}
                className={`relative w-20 aspect-square flex-shrink-0 rounded-lg overflow-hidden ${
                  currentIndex === index ? "ring-2 ring-blue-500" : ""
                }`}
                aria-label={`${index + 1}번째 이미지로 이동`}
                title={`${index + 1}번째 이미지로 이동`}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 전체화면 갤러리 */}
      <FullscreenGallery
        images={images}
        currentIndex={currentIndex}
        isOpen={isFullscreen}
        onClose={() => {
          setIsFullscreen(false);
          if (isPlaying) setIsPlaying(false);
        }}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
} 