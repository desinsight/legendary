"use client";

import { useState } from "react";
import Image from "next/image";
import { SparklesIcon, UsersIcon, UserIcon } from "@heroicons/react/24/outline";
import InterpretationModal from "@/components/InterpretationModal";
import ImageGallery from "@/components/ImageGallery";
import { dummyItems } from "@/data/dummy";

interface ItemDetailProps {
  item: {
    id: string;
    title: string;
    description: string;
    creator: string;
    imageUrl: string;
    images: {
      url: string;
      alt: string;
    }[];
  };
}

export default function ItemDetail({ item }: ItemDetailProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* 이미지 갤러리 */}
        <ImageGallery images={item.images} />

        {/* 콘텐츠 섹션 */}
        <div className="p-6">
          {/* 헤더 */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
              <div className="flex gap-2">
                {["#SS23", "#Limited", `#${item.creator}`].map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              해석글 보기
            </button>
          </div>

          {/* 설명 */}
          <p className="text-gray-600 mb-8">{item.description}</p>

          {/* 하단 액션 버튼 */}
          <div className="flex gap-4 border-t pt-6">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100">
              <SparklesIcon className="h-5 w-5" />
              <span>추천</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100">
              <UsersIcon className="h-5 w-5" />
              <span>커뮤니티</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100">
              <UserIcon className="h-5 w-5" />
              <span>내 정보</span>
            </button>
          </div>
        </div>
      </div>

      {/* 추천 아이템 섹션 */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">비슷한 아이템</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dummyItems
            .filter(i => i.id !== item.id)
            .slice(0, 3)
            .map(similarItem => (
              <div key={similarItem.id} className="bg-white rounded-xl overflow-hidden shadow">
                <div className="relative aspect-square">
                  <Image
                    src={similarItem.imageUrl}
                    alt={similarItem.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{similarItem.title}</h3>
                  <p className="text-sm text-gray-600">by {similarItem.creator}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* 해석 모달 */}
      <InterpretationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={item.title}
        content={`${item.title}에 대한 상세한 해석과 설명입니다.

이 아이템은 ${item.creator}가 ${item.description}

특징:
- 독특한 디자인 언어
- 현대적인 해석
- 클래식한 요소와의 조화

구매 및 투자 가치:
- 한정판 제품
- 브랜드 가치 상승 중
- 컬렉터들의 높은 관심

스타일링 제안:
- 캐주얼한 데일리룩
- 포멀한 모임
- 특별한 행사`}
      />
    </div>
  );
}
