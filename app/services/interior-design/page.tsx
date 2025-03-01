import ServicesLayout from '@/components/Services/ServicesLayout';
import React from 'react';

export default function InteriorDesignPage() {
    return (
        <div>
            <ServicesLayout
                imageOne='/assets/images/hero/hero-1.png'
                imageTwo='/assets/images/hero/hero-1.png'
                title='Interior Design'
                text={
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                }
                imageThree='/assets/images/hero/hero-1.png'
             />
        </div>
    );
}
