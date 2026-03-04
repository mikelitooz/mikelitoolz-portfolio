import { ImageResponse } from 'next/og';

export function generateImageMetadata() {
    return [
        {
            id: 'small',
            size: { width: 16, height: 16 },
            alt: 'MI',
        },
        {
            id: 'medium',
            size: { width: 32, height: 32 },
            alt: 'MI',
        },
        {
            id: 'large',
            size: { width: 48, height: 48 },
            alt: 'MI',
        },
    ];
}

export const contentType = 'image/png';

export default function Icon({ id }: { id: string }) {
    let size = 32;
    let fontSize = 20;

    if (id === 'small') {
        size = 16;
        fontSize = 10;
    } else if (id === 'large') {
        size = 48;
        fontSize = 28;
    }

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: fontSize,
                    background: '#0e0904', // match the swiss charcoal/black theme
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 800,
                    borderRadius: '20%',
                    border: '1px solid #ffffff33',
                }}
            >
                MI
            </div>
        ),
        {
            width: size,
            height: size,
        }
    );
}
