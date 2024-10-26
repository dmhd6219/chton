import { Outlet } from 'react-router-dom';
import { useTelegram } from '@/utils/contexts/telegram.tsx';
import { useEffect } from 'react';

export default function Layout() {
    const telegram = useTelegram();
    useEffect(() => {
        telegram.webApp?.disableVerticalSwipes();

        const themeParams = telegram.webApp?.themeParams;
        if (!themeParams) {
            return;
        }

        for (const key of Object.keys(themeParams)) {
            document.documentElement.style.setProperty(
                `--${key}`,
                themeParams[key as keyof typeof themeParams]
            );
        }
    }, [telegram]);

    return (
        <div className='px-2 py-4 bg-secondaryBgColor text-textColor h-fit min-h-full'>
            <Outlet />
        </div>
    );
}
