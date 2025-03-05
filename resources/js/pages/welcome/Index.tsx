import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Wrapper } from '@/components/Wrapper';
import { AppLayout } from '@/layouts/AppLayout';
import React from 'react';

const Index = () => {
  return (
    <AppLayout title='PDF Tool Home' footer={true}>
      <Wrapper>
        <Hero />
        <Services />
      </Wrapper>
    </AppLayout>
  );
};

export default Index;
