import { Wrapper } from '@/components/Wrapper'
import { AppLayout } from '@/layouts/AppLayout'
import React from 'react'

export default function MergePDF () {
  return (
    <AppLayout title='Merge PDF' footer={true}>
      <Wrapper>
        <h3>Merge PDF</h3>
      </Wrapper>
    </AppLayout>
  )
}
