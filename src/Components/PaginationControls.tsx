"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation'
import { TSearchData } from '@/utils/types'

export const PaginationControls = (
  {
    data,
    hasNextPage,
    hasPrevPage
  }: {
    data: TSearchData,
    hasNextPage: boolean,
    hasPrevPage: boolean,
  }
) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get('page') ?? '1';
  const perPage = searchParams.get('per_page') ?? data.perPage
  console.log({hasNextPage, hasPrevPage})
  const handlePageChange = (direction: number) => {
    router.push(`/?page=${Number(page) + direction}&per_page=${perPage}`)
  }

  return (
    <div>
      <button 
        disabled={!hasPrevPage}
        onClick={() => handlePageChange(-1)}
      >
        Previous Page
      </button>
      <div>{page} / {data.totalPages}</div>
      <button 
        disabled={!hasNextPage}
        onClick={() => handlePageChange(1)}
      >
        Next Page
      </button>
    </div>
  )
}
