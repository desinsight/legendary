import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useGesture } from "@use-gesture/react";

interface FullscreenGalleryProps {
  images: {
    url: string;
    alt: string;
  }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function FullscreenGallery({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: FullscreenGalleryProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  // Reset zoom and position when image changes or gallery closes
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [currentIndex, isOpen]);

  // 키보드 이벤트 핸들러를 useCallback으로 최적화
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (scale === 1) {
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    }
  }, [onClose, onNext, onPrev, scale]);

  // 이벤트 리스너 등록/해제 최적화
  useEffect(() => {
    if (!isOpen) return;
    
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, handleKeyDown]);

  const bind = useGesture(
    {
      onDragStart: () => {
        setIsDragging(true);
      },
      onDrag: ({ offset: [dx, dy] }) => {
        if (scale > 1 && imageRef.current) {
          const bounds = imageRef.current.getBoundingClientRect();
          const maxX = (bounds.width * (scale - 1)) / 2;
          const maxY = (bounds.height * (scale - 1)) / 2;

          setPosition({
            x: Math.max(-maxX, Math.min(maxX, dx)),
            y: Math.max(-maxY, Math.min(maxY, dy)),
          });
        }
      },
      onDragEnd: ({ swipe: [swipeX], velocity: [vx] }) => {
        setIsDragging(false);
        if (scale === 1 && Math.abs(vx) > 0.5) {
          if (swipeX > 0) onPrev();
          if (swipeX < 0) onNext();
        }
      },
      onPinch: ({ offset: [d], event }) => {
        event?.preventDefault();
        const newScale = Math.min(Math.max(1, d), 3);
        setScale(newScale);
        
        if (newScale === 1) {
          setPosition({ x: 0, y: 0 });
        }
      },
      onDoubleClick: ({ event }) => {
        event.preventDefault();
        if (scale > 1) {
          setScale(1);
          setPosition({ x: 0, y: 0 });
        } else {
          setScale(2);
        }
      },
    },
    {
      drag: {
        from: () => [position.x, position.y],
        filterTaps: true,
        bounds: () => {
          if (!imageRef.current) return { left: 0, right: 0, top: 0, bottom: 0 };
          const bounds = imageRef.current.getBoundingClientRect();
          const maxX = (bounds.width * (scale - 1)) / 2;
          const maxY = (bounds.height * (scale - 1)) / 2;
          return { left: -maxX, right: maxX, top: -maxY, bottom: maxY };
        },
      },
      pinch: {
        distanceBounds: { min: 0, max: 200 },
        scaleBounds: { min: 1, max: 3 },
      },
    }
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black"
          role="dialog"
          aria-modal="true"
          aria-label="이미지 전체화면 보기"
        >
          {/* 상단 컨트롤 */}
          <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
            <div className="text-white text-sm" role="status">
              {currentIndex + 1} / {images.length}
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="전체화면 닫기"
              title="전체화면 닫기"
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* 이미지 */}
          <div 
            {...bind()}
            className="relative w-full h-full flex items-center justify-center touch-pan-y"
          >
            <motion.div
              ref={imageRef}
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1,
                scale: isDragging ? scale * 0.95 : scale,
                x: position.x,
                y: position.y,
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full h-full"
              style={{ touchAction: "none" }}
            >
              <Image
                src={images[currentIndex].url}
                alt={images[currentIndex].alt}
                fill
                className="object-contain"
                priority
                sizes="100vw"
                quality={100}
                draggable={false}
              />
            </motion.div>

            {/* 네비게이션 버튼 - scale이 1일 때만 표시 */}
            {scale === 1 && (
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                <button
                  onClick={onPrev}
                  className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors pointer-events-auto"
                  aria-label="이전 이미지"
                  title="이전 이미지"
                >
                  <ChevronLeftIcon className="h-8 w-8" />
                </button>
                <button
                  onClick={onNext}
                  className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors pointer-events-auto"
                  aria-label="다음 이미지"
                  title="다음 이미지"
                >
                  <ChevronRightIcon className="h-8 w-8" />
                </button>
              </div>
            )}
          </div>

          {/* 하단 썸네일 - scale이 1일 때만 표시 */}
          {scale === 1 && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50">
              <div className="flex gap-2 overflow-x-auto pb-2 justify-center">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (index < currentIndex) onPrev();
                      if (index > currentIndex) onNext();
                    }}
                    className={`relative w-16 aspect-square flex-shrink-0 rounded-lg overflow-hidden 
                      ${currentIndex === index ? "ring-2 ring-white" : "opacity-50"}`}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
} 