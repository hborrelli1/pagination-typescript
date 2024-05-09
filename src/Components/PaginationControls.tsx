"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation'
import { TSearchData } from '@/utils/types'
import styles from './PaginatinoControls.module.css'

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
  
  const handlePageChange = (direction: number) => {
    router.push(`/?page=${Number(page) + direction}&per_page=${perPage}`)
  }

  return (
    <div className={styles.paginationWrapper}>
      <button 
        className={styles.button}
        disabled={!hasPrevPage}
        onClick={() => handlePageChange(-1)}
      >
        {'<'}  
      </button>
      <div>{page} / {data.totalPages}</div>
      <button 
        className={styles.button}
        disabled={!hasNextPage}
        onClick={() => handlePageChange(1)}
      >
        {'>'}  
      </button>
    </div>
  )
}
